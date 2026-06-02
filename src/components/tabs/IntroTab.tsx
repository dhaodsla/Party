import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shuffle } from 'lucide-react';

const randomQuestions = [
  "요즘 제일 빠져있는 것은?",
  "내가 들으면 무조건 신나는 노래는?",
  "나의 술자리 스타일은?",
  "내가 잘하는 것 하나는?",
  "오늘 꼭 친해지고 싶은 사람 유형은?",
  "나를 음식으로 표현하면?",
  "올해 안에 꼭 해보고 싶은 것은?",
  "처음 보면 나는 어떤 사람처럼 보일까?",
  "여행 갈 때 나는 계획파일까 즉흥파일까?",
  "요즘 나를 웃게 하는 것은?",
  "나는 낯가림이 있는 편일까 없는 편일까?",
  "오늘 가장 기대되는 순간은?",
  "내가 생각하는 좋은 사람의 기준은?",
  "쉬는 날 주로 뭐하면서 보내는 편인가요?",
  "나의 매력 포인트를 하나만 말한다면?"
];

export function IntroTab() {
  const [currentQuestion, setCurrentQuestion] = useState<string>("버튼을 눌러 질문을 뽑아보세요!");
  const [key, setKey] = useState(0);

  const drawQuestion = () => {
    let nextQ;
    do {
      nextQ = randomQuestions[Math.floor(Math.random() * randomQuestions.length)];
    } while (nextQ === currentQuestion && randomQuestions.length > 1);
    
    setCurrentQuestion(nextQ);
    setKey(prev => prev + 1);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-8 animate-in fade-in pb-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#00ffff] tracking-tight drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">자기소개 가이드</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          부담 없는 분위기를 위해 1인당 30초~1분 정도로 가볍게 진행합니다.<br/>
          멋있게 말하려고 하지 않아도 괜찮아요. 편하게 웃으면서 소개해주세요.
        </p>
      </div>

      <div className="bg-white/5 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 space-y-4 interactive-card group backdrop-blur-sm">
        <h3 className="font-bold text-[#ff00ff] drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] border-b border-white/10 pb-2 group-hover:text-[#ff99ff] transition-colors">기본 자기소개 항목</h3>
        <ul className="list-disc list-inside text-[#eeeeee] space-y-1.5 ml-1 text-sm font-medium">
          <li>이름</li>
          <li>사는 지역</li>
          <li>하는 일</li>
          <li>오늘 온 이유</li>
          <li>나를 한마디로 표현하면?</li>
        </ul>
        
        <div className="mt-4 p-4 bg-white/5 rounded-xl text-sm text-gray-400 italic border border-white/5">
          "안녕하세요. 저는 대구 사는 ○○입니다. 하는 일은 ○○이고, 오늘은 좋은 사람들과 편하게 놀고 싶어서 왔어요. 저를 한마디로 표현하면 '낯가리지만 친해지면 시끄러운 사람'입니다."
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="font-bold text-[#ff00ff] drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] px-1">랜덤 질문 뽑기</h3>
        
        <div className="bg-[#1a1a1a] p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,255,255,0.15)] border border-[#00ffff]/20 relative overflow-hidden min-h-[140px] flex items-center justify-center text-center interactive-card">
          {/* subtle pattern bg */}
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '16px 16px' }}></div>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(4px)' }}
              transition={{ duration: 0.3 }}
              className="relative z-10"
            >
              <p className="text-white font-medium text-lg md:text-xl leading-relaxed px-4 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                {currentQuestion}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={drawQuestion}
          className="w-full bg-[#00ffff]/10 text-[#00ffff] font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.2)] border border-[#00ffff]/30 flex items-center justify-center gap-2 hover:bg-[#00ffff]/20 transition-colors active:scale-[0.98]"
        >
          <Shuffle size={20} className="drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" />
          <span className="drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">새로운 질문 뽑기</span>
        </button>
      </div>
    </div>
  );
}
