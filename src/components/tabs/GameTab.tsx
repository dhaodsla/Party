import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Dice5 } from 'lucide-react';

const balanceQuestions = [
  "평생 고기만 먹기 vs 평생 해산물만 먹기",
  "여행 갈 때 계획파 vs 즉흥파",
  "연락 자주 하는 사람 vs 만났을 때 잘하는 사람",
  "조용한 술자리 vs 시끌벅적한 술자리",
  "아침형 인간 vs 새벽형 인간",
  "집 데이트 vs 밖에서 데이트",
  "노래방 3시간 vs 카페 수다 3시간",
  "매운 음식 평생 못 먹기 vs 단 음식 평생 못 먹기",
  "친구 많은 사람 vs 깊은 친구 몇 명 있는 사람",
  "영화관 데이트 vs 드라이브 데이트",
  "말 많은 사람 vs 잘 들어주는 사람",
  "계획된 여행 vs 즉흥 여행",
  "단체 모임 좋아함 vs 소수 모임 좋아함",
  "사진 많이 찍기 vs 눈으로만 즐기기",
  "먼저 다가가는 편 vs 다가오길 기다리는 편"
];

const games = [
  { title: "WATER GUN BATTLE", desc: "물총싸움 & 워터게임\n수영장 주변에서 팀별로 가볍게 즐기는 물총싸움 프로그램입니다.\n물총은 스테이연에서 준비합니다.\n무리한 신체 접촉 없이 안전하게 진행합니다." },
  { title: "랜덤 질문 게임", desc: "질문을 뽑고 한 명씩 가볍게 답하면서 분위기를 푸는 게임" },
  { title: "밸런스 게임", desc: "둘 중 하나를 선택하면서 서로의 성향을 알아보는 게임" },
  { title: "팀별 노래 맞히기", desc: "노래 전주나 가사 힌트를 듣고 가수와 제목을 맞히는 게임" },
  { title: "아이스브레이킹 미션", desc: "팀원들과 함께 간단한 미션을 수행하는 게임" },
];

const missions = [
  "오늘 처음 만난 사람 3명과 공통점 찾기",
  "옆 사람의 취미 하나 기억하기",
  "팀원끼리 단체 사진 포즈 정하기",
  "가장 웃긴 자기소개 멘트 뽑기",
  "오늘의 베스트 리액션 뽑기"
];

export function GameTab() {
  const [currentBalance, setCurrentBalance] = useState<string>("버튼을 눌러 밸런스 질문을 뽑아보세요!");
  const [balanceKey, setBalanceKey] = useState(0);

  const drawBalance = () => {
    let nextQ;
    do {
      nextQ = balanceQuestions[Math.floor(Math.random() * balanceQuestions.length)];
    } while (nextQ === currentBalance && balanceQuestions.length > 1);
    
    setCurrentBalance(nextQ);
    setBalanceKey(prev => prev + 1);
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-8 animate-in fade-in pb-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#00ffff] tracking-tight drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">파티 게임</h2>
        <p className="text-gray-400 text-sm leading-relaxed">
          어색함을 풀고 더 즐거운 시간을 만들어줄 게임들
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {games.map((g, idx) => (
          <div key={idx} className={`bg-white/5 p-4 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border interactive-card group backdrop-blur-sm ${g.title === 'WATER GUN BATTLE' ? 'border-[#00ffff]/40 shadow-[0_0_15px_rgba(0,255,255,0.1)]' : 'border-white/10'}`}>
            <h4 className={`font-bold transition-colors ${g.title === 'WATER GUN BATTLE' ? 'text-[#00ffff] drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]' : 'text-[#eeeeee] group-hover:text-white'}`}>{g.title}</h4>
            <p className="text-sm text-gray-400 mt-1 whitespace-pre-wrap">{g.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4 bg-white/5 p-5 rounded-2xl border border-white/10 interactive-card group backdrop-blur-sm">
        <h3 className="font-bold text-[#ff00ff] text-center group-hover:text-[#ff99ff] transition-colors drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">밸런스 게임 랜덤 뽑기</h3>
        
        <div className="bg-[#1a1a1a] border border-[#00ffff]/20 p-6 rounded-xl shadow-[0_0_15px_rgba(0,255,255,0.1)] relative overflow-hidden min-h-[120px] flex items-center justify-center text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={balanceKey}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="relative z-10 w-full"
            >
              {currentBalance !== "버튼을 눌러 밸런스 질문을 뽑아보세요!" ? (
                <div className="flex flex-col gap-3">
                  <div className="font-bold text-[#00ffff] text-lg drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">{currentBalance.split(' vs ')[0]}</div>
                  <div className="text-xs text-[#ff00ff] font-bold drop-shadow-[0_0_3px_rgba(255,0,255,0.5)]">VS</div>
                  <div className="font-bold text-[#ff00ff] text-lg drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">{currentBalance.split(' vs ')[1]}</div>
                </div>
              ) : (
                <div className="font-medium text-gray-400">{currentBalance}</div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={drawBalance}
          className="w-full bg-[#ff00ff]/10 text-[#ff00ff] border border-[#ff00ff]/30 font-bold py-3.5 rounded-xl shadow-[0_0_15px_rgba(255,0,255,0.2)] flex items-center justify-center gap-2 hover:bg-[#ff00ff]/20 transition-colors active:scale-[0.98]"
        >
          <Dice5 size={20} className="drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]" />
          <span className="drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">밸런스 질문 뽑기</span>
        </button>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="font-bold text-[#ff00ff] drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] px-1 border-b border-white/10 pb-2">아이스브레이킹 미션 예시</h3>
        <ul className="space-y-3">
          {missions.map((m, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-gray-300 bg-white/5 p-3 rounded-lg border border-white/10 shadow-[0_1px_5px_rgba(0,0,0,0.3)] interactive-card group backdrop-blur-sm">
              <span className="text-[#00ffff] font-bold drop-shadow-[0_0_3px_rgba(0,255,255,0.5)]">{idx + 1}.</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
