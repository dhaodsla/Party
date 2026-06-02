import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { playBeep, startBGM, stopBGM, playApprove, initAudio } from '../lib/audio';

interface InvitationProps {
  onAccept: () => void;
}

export function Invitation({ onAccept }: InvitationProps) {
  const [stage, setStage] = useState<'START' | 'NEON_ON' | 'TYPING' | 'SELECTION' | 'REJECTED' | 'ACCEPTED'>('START');
  const [typedText, setTypedText] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  
  const fullText = `2026.06.26 FRI
17:00 CHECK-IN
19:00 BBQ START

A동 · B동 전체 대관

당신은 초대되었습니다.
좋은 사람들과의 1박 2일

참가하시겠습니까?`;

  const typingSpeed = 50; // ms per char
  
  const handleStart = () => {
    initAudio();
    if (!isMuted) {
      startBGM(false);
    }
    // We intentionally play a silent beep or first beep to unlock AudioContext
    playBeep(isMuted);
    setStage('NEON_ON');
    setTimeout(() => {
      setStage('TYPING');
    }, 1500);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    if (stage !== 'START' && stage !== 'ACCEPTED') {
      if (nextMuted) {
        stopBGM(0.5);
      } else {
        startBGM(false);
      }
    }
  };

  useEffect(() => {
    if (stage === 'TYPING') {
      let currentIndex = 0;
      const intervalId = setInterval(() => {
        if (currentIndex < fullText.length) {
          setTypedText(fullText.slice(0, currentIndex + 1));
          
          // Play beep only for non-whitespace chars to make it sound better
          if (fullText[currentIndex] !== ' ' && fullText[currentIndex] !== '\n') {
            playBeep(isMuted);
          }
          
          currentIndex++;
        } else {
          clearInterval(intervalId);
          setTimeout(() => {
            setStage('SELECTION');
          }, 500);
        }
      }, typingSpeed);
      
      return () => clearInterval(intervalId);
    }
  }, [stage, fullText, isMuted]);

  const handleAccept = () => {
    setStage('ACCEPTED');
    playApprove(isMuted);
    stopBGM(1.5);
    setTimeout(() => {
      onAccept();
    }, 1500);
  };

  const handleReject = () => {
    setStage('REJECTED');
  };

  return (
    <div className="fixed inset-0 bg-black flex flex-col items-center justify-center p-6 bg-cover font-mono overflow-y-auto overflow-x-hidden min-h-[100dvh]">
      
      {/* Sound Toggle */}
      <button 
        onClick={toggleMute}
        className="absolute top-6 right-6 z-50 text-white/50 hover:text-white transition-colors"
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>

      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 border border-[#00ffff] rounded-full mix-blend-screen" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border border-[#ff00ff] rotate-45 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-t border-[#00ffff] mix-blend-screen opacity-50 blur-xl" />
      </div>

      <AnimatePresence mode="wait">
        {stage === 'START' && (
          <motion.div
            key="start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center z-10 my-auto"
          >
            <button
              onClick={handleStart}
              className="px-8 py-4 border-2 border-neon-mint text-neon-mint tracking-widest uppercase transition-all hover:bg-[#00ffff] hover:bg-opacity-10 active:scale-95 animate-pulse"
            >
              초대장 열기
            </button>
          </motion.div>
        )}

        {stage !== 'START' && stage !== 'ACCEPTED' && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col items-center w-full z-10 max-w-md w-full pt-10 pb-16 flex-1 justify-center"
          >
            {/* Neon Title Block */}
            <div className="flex flex-col items-center justify-center w-full mb-10 shrink-0">
              <h2 className="font-bold tracking-wider animate-neon-pink text-center" style={{ fontSize: 'clamp(2rem, 8vw, 3rem)', lineHeight: 1 }}>
                STAY YEON
              </h2>
              <h1 className="font-black tracking-widest animate-neon-pink text-center mt-[-4px]" style={{ fontSize: 'clamp(3.5rem, 14vw, 5.5rem)', lineHeight: 1 }}>
                PARTY
              </h1>
              <p className="font-sans font-semibold tracking-widest animate-neon-mint text-center mt-3 filter drop-shadow-md" style={{ fontSize: 'clamp(0.9rem, 4vw, 1.2rem)' }}>
                스테이연 프라이빗 파티
              </p>
            </div>

            {/* Dynamic Content Area (Typing / Result) */}
            <div className="w-full max-w-sm text-white whitespace-pre-wrap leading-relaxed min-h-[300px] flex flex-col justify-start px-2">
              {(stage === 'NEON_ON' || stage === 'TYPING' || stage === 'SELECTION') && (
                <div className={Math.random() > 0.95 && stage === 'TYPING' ? 'animate-glitch' : ''}>
                  {typedText}
                  {stage === 'TYPING' && <span className="animate-pulse bg-white w-2 h-4 inline-block ml-1 align-middle" />}
                </div>
              )}

              {stage === 'SELECTION' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 flex flex-col gap-4"
                >
                  <div className="flex gap-4">
                    <button
                      onClick={handleAccept}
                      className="flex-1 py-3 border border-white hover:bg-white hover:text-black transition-colors uppercase tracking-widest font-bold"
                    >
                      YES
                    </button>
                    <button
                      onClick={handleReject}
                      className="flex-1 py-3 text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      NO
                    </button>
                  </div>
                </motion.div>
              )}

              {stage === 'REJECTED' && (
                <motion.div
                  key="rejected"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="w-full text-center flex flex-col items-center pt-8"
                >
                  <p className="text-neon-pink text-xl mb-4 font-bold">탈락하셨습니다.</p>
                  <p className="text-white mb-12">그래도 다시 생각해보시겠습니까?</p>
                  <div className="flex gap-4 w-full">
                    <button
                      onClick={handleAccept}
                      className="flex-1 py-3 border border-[#ff00ff] text-neon-pink hover:bg-[#ff00ff] hover:bg-opacity-20 transition-colors uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(255,0,255,0.4)]"
                    >
                      YES
                    </button>
                    <button
                      onClick={() => setStage('SELECTION')}
                      className="flex-1 py-3 text-gray-500 hover:text-white transition-colors uppercase tracking-widest"
                    >
                      NO
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Accepted flash and text overlay */}
      {stage === 'ACCEPTED' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center animate-flash pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-black font-bold text-xl tracking-widest bg-white/80 px-6 py-2 rounded-sm"
          >
            입장이 승인되었습니다.
          </motion.div>
        </div>
      )}

      {/* Footer text */}
      {(stage === 'START' || stage === 'NEON_ON' || stage === 'TYPING' || stage === 'SELECTION') && (
        <div className="absolute bottom-8 left-0 right-0 text-center text-[10px] sm:text-xs text-gray-600 tracking-widest opacity-50 font-sans pointer-events-none">
          STAY YEON PRIVATE PARTY INVITATION
        </div>
      )}
    </div>
  );
}
