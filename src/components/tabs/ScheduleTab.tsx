import React from 'react';

const scheduleData = [
  {
    day: '6월 26일 금요일',
    events: [
      { time: '17:00', title: '입실 시작', desc: '짐 정리, 숙소 안내, 자유롭게 휴식' },
      { time: '18:30', title: '웰컴 타임', desc: '자리 안내와 간단한 행사 안내' },
      { time: '18:45', title: '자기소개 타임', desc: '1인당 30초~1분 정도로 가볍게 소개' },
      { time: '19:00', title: '바비큐 & 파티 스타트', desc: '맛있는 음식과 함께 자연스럽게 대화 시작', highlight: true },
      { time: '20:30', title: '아이스브레이킹 게임', desc: '팀 게임과 랜덤 질문으로 분위기 풀기' },
      { time: '21:30', title: '음악 · 토크 · 자유 파티', desc: '음악, 대화, 게임, 자유롭게 어울리는 시간' },
      { time: '24:00', title: '심야 자유시간', desc: 'A동과 B동 전체 대관으로 늦은 시간까지 여유롭게 즐길 수 있는 시간\n단, 서로의 컨디션과 안전을 배려해주세요' },
      { time: '02:00', title: '자유 취침 / 숙소별 휴식', desc: '원하는 분들은 숙소별로 편하게 휴식' }
    ]
  },
  {
    day: '6월 27일 토요일',
    events: [
      { time: '09:30', title: '모닝 커피 / 간단 조식', desc: '커피와 간단한 아침 시간' },
      { time: '10:30', title: '마무리 인사', desc: '인사와 정리' },
      { time: '11:00', title: '퇴실', desc: '개인 물품 확인 후 퇴실' }
    ]
  }
];

export function ScheduleTab() {
  return (
    <div className="p-6 max-w-md mx-auto space-y-8 animate-in fade-in pb-12">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-[#2c4033] tracking-tight">파티 타임테이블</h2>
        <p className="text-[#847f76] text-sm">시간은 상황에 따라 유연하게 변경될 수 있습니다.</p>
      </div>

      <div className="space-y-10">
        {scheduleData.map((dayPlan, idx) => (
          <div key={idx} className="space-y-6">
            <h3 className="font-bold text-[#5d564d] border-b border-[#f2f0ea] pb-2 px-1 sticky top-[72px] bg-[#fdfbf7]/90 backdrop-blur z-10">
              {dayPlan.day}
            </h3>
            
            <div className="relative border-l-2 border-[#f2f0ea] ml-3 space-y-8">
              {dayPlan.events.map((evt, eIdx) => (
                <div key={eIdx} className="relative pl-6">
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-4 border-[#fdfbf7] ${evt.highlight ? 'bg-[#2c4033]' : 'bg-[#d5d0c5]'}`}></div>
                  
                  <div className={`bg-white rounded-xl p-4 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border ${evt.highlight ? 'border-[#2c4033]/20 shadow-[0_4px_15px_rgba(44,64,51,0.05)]' : 'border-[#f2f0ea]'} interactive-card group`}>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className={`font-mono font-bold text-lg transition-colors ${evt.highlight ? 'text-[#2c4033]' : 'text-[#3e3a35] group-hover:text-[#2c4033]'}`}>
                        {evt.time}
                      </span>
                      <h4 className="font-bold text-[#3e3a35] group-hover:text-black transition-colors">{evt.title}</h4>
                    </div>
                    <p className="text-[#847f76] text-sm whitespace-pre-wrap leading-relaxed mt-2">
                      {evt.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
