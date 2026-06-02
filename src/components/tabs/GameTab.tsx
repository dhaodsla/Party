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
        <h2 className="text-2xl font-bold text-[#2c4033] tracking-tight">파티 게임</h2>
        <p className="text-[#847f76] text-sm leading-relaxed">
          어색함을 풀고 더 즐거운 시간을 만들어줄 게임들
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3">
        {games.map((g, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f2f0ea] interactive-card group">
            <h4 className="font-bold text-[#3e3a35] group-hover:text-[#1e2e24] transition-colors">{g.title}</h4>
            <p className="text-sm text-[#847f76] mt-1">{g.desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-4 bg-[#f4efe8] p-5 rounded-2xl border border-[#ece8de] interactive-card group">
        <h3 className="font-bold text-[#5d564d] text-center group-hover:text-black transition-colors">밸런스 게임 랜덤 뽑기</h3>
        
        <div className="bg-white p-6 rounded-xl shadow-sm relative overflow-hidden min-h-[120px] flex items-center justify-center text-center">
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
                  <div className="font-bold text-[#2c4033] text-lg">{currentBalance.split(' vs ')[0]}</div>
                  <div className="text-xs text-[#a39f98] font-bold">VS</div>
                  <div className="font-bold text-[#8c3a3a] text-lg">{currentBalance.split(' vs ')[1]}</div>
                </div>
              ) : (
                <div className="font-medium text-[#847f76]">{currentBalance}</div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        <button 
          onClick={drawBalance}
          className="w-full bg-[#2c4033] text-white font-bold py-3.5 rounded-xl shadow-[0_4px_15px_rgba(44,64,51,0.2)] flex items-center justify-center gap-2 hover:bg-[#1e2e24] transition-colors active:scale-[0.98]"
        >
          <Dice5 size={20} />
          <span>밸런스 질문 뽑기</span>
        </button>
      </div>
      
      <div className="space-y-4 pt-4">
        <h3 className="font-bold text-[#5d564d] px-1 border-b border-[#f2f0ea] pb-2">아이스브레이킹 미션 예시</h3>
        <ul className="space-y-3">
          {missions.map((m, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-[#3e3a35] bg-white p-3 rounded-lg border border-[#f2f0ea] shadow-[0_1px_5px_rgba(0,0,0,0.01)] interactive-card group">
              <span className="text-[#2c4033] font-bold">{idx + 1}.</span>
              <span>{m}</span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
