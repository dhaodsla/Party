import React from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight, Ticket } from 'lucide-react';

interface HomeTabProps {
  onNavigate: (tab: 'home' | 'schedule' | 'intro' | 'game' | 'guide') => void;
}

export function HomeTab({ onNavigate }: HomeTabProps) {
  const getDDay = () => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const target = new Date(2026, 5, 26);
    target.setHours(0, 0, 0, 0);
    const diffTime = target.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays > 0) return `D-${diffDays}`;
    if (diffDays === 0) return 'D-DAY';
    return 'PARTY COMPLETE';
  };

  const dDayText = getDDay();

  return (
    <div className="p-6 max-w-md mx-auto space-y-8 animate-in fade-in duration-500 pb-12">
      
      {/* Hero Section */}
      <section className="text-center space-y-4 pt-4">
        <h2 className="text-3xl font-bold tracking-tight text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">STAY YEON<br/>PARTY</h2>
        <p className="text-gray-400 text-sm">스테이연 프라이빗 파티</p>
        <div className="w-12 h-[1px] bg-white/20 mx-auto my-4"></div>
        <p className="text-gray-300 font-medium leading-relaxed">
          좋은 사람들과 맛있는 음식,<br/>
          음악, 대화가 있는 1박 2일
        </p>
      </section>

      {/* D-Day Card */}
      <section className="bg-white/5 p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,255,255,0.05)] border border-white/10 text-center interactive-card group relative overflow-hidden animate-d-day-glow backdrop-blur-md">
        <div className="animate-d-day-shimmer"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00ffff] via-[#ff00ff] to-[#00ffff] opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <p className="text-[11px] font-bold text-[#ff00ff] mb-1.5 tracking-[0.2em] group-hover:text-[#ff99ff] transition-colors relative z-10 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">PARTY D-DAY</p>
        <div className="text-5xl font-black text-[#00ffff] tracking-tighter mb-3 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] transition-all relative z-10 drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">
          <span className="animate-d-day-pulse">{dDayText}</span>
        </div>
        <div className="text-sm text-gray-300 font-medium leading-relaxed relative z-10">
          <span className="font-bold text-white">2026.06.26 FRI</span><br/>
          <span className="text-gray-400 text-xs tracking-wider mt-1 inline-block">UNTIL THE NIGHT BEGINS</span>
        </div>
      </section>

      {/* Info Card */}
      <section className="bg-white/5 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 space-y-4 interactive-card group backdrop-blur-sm">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-[#00ffff] group-hover:scale-110 transition-all duration-300 transform-gpu group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
          <div>
            <p className="font-semibold text-[#eeeeee] group-hover:text-white transition-colors">2026.06.26 FRI - 06.27 SAT</p>
            <p className="text-sm text-gray-400">1박 2일간의 여정</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white/10"></div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-gray-400 mt-0.5 group-hover:text-[#00ffff] group-hover:scale-110 transition-all duration-300 transform-gpu group-hover:drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]" />
          <div>
            <p className="font-semibold text-[#eeeeee] group-hover:text-white transition-colors">스테이연</p>
            <p className="text-sm text-gray-400">A동 · B동 전체 대관</p>
          </div>
        </div>
      </section>

      {/* Party Pass Card */}
      <section className="bg-white/5 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-[#ff00ff]/30 space-y-3 interactive-card group backdrop-blur-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff00ff]/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
        <div className="flex justify-between items-center border-b border-white/10 pb-3 relative z-10">
          <h3 className="font-bold text-[#ff00ff] drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] flex items-center gap-2">
            <Ticket className="w-5 h-5" /> PARTY PASS
          </h3>
          <span className="font-black text-white tracking-widest text-lg drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">1인 100,000원</span>
        </div>
        <div className="pt-1 relative z-10">
          <p className="text-sm text-gray-300 font-medium leading-relaxed break-keep">
            숙박 · 바비큐 · 음식 · 수영장 · 자쿠지 · 파티 프로그램
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 gap-3">
        <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3 interactive-card group backdrop-blur-sm border border-white/5">
          <div className="bg-white/5 p-2 rounded-lg shadow-sm border border-white/10">
            <Clock className="w-5 h-5 text-[#00ffff] group-hover:scale-110 transition-all duration-300 transform-gpu drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]" />
          </div>
          <div>
            <p className="font-semibold text-[#eeeeee] text-sm group-hover:text-white transition-colors">17:00 입실 시작</p>
            <p className="text-xs text-gray-400">자유로운 휴식 및 짐정리</p>
          </div>
        </div>
        <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3 interactive-card group backdrop-blur-sm border border-white/5">
          <div className="bg-white/5 p-2 rounded-lg shadow-sm border border-white/10">
            <Users className="w-5 h-5 text-[#00ffff] group-hover:scale-110 transition-all duration-300 transform-gpu drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]" />
          </div>
          <div>
            <p className="font-semibold text-[#eeeeee] text-sm group-hover:text-white transition-colors">19:00 바비큐 시작</p>
            <p className="text-xs text-gray-400">본격적인 파티 스타트</p>
          </div>
        </div>
        <div className="bg-white/10 p-4 rounded-xl flex items-center gap-3 interactive-card group backdrop-blur-sm border border-white/5">
          <div className="bg-white/5 p-2 rounded-lg shadow-sm border border-white/10">
            <Clock className="w-5 h-5 text-[#00ffff] group-hover:scale-110 transition-all duration-300 transform-gpu drop-shadow-[0_0_5px_rgba(0,255,255,0.4)]" />
          </div>
          <div>
            <p className="font-semibold text-[#eeeeee] text-sm group-hover:text-white transition-colors">11:00 퇴실</p>
            <p className="text-xs text-gray-400">아쉬움을 뒤로하고 마무리</p>
          </div>
        </div>
      </section>

      {/* Participation Process */}
      <section className="bg-white/5 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 space-y-4 interactive-card group backdrop-blur-sm">
        <h3 className="font-bold text-[#eeeeee] border-b border-white/10 pb-2">참가 확정 절차</h3>
        <ul className="space-y-2">
          {["초대장 확인", "YES 누르고 앱 입장", "참가 확정하기 버튼 클릭", "문자 전송", "운영자 확인 후 최종 안내"].map((step, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-gray-300 font-medium items-center">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-[#ff00ff] font-bold text-xs shrink-0 drop-shadow-[0_0_5px_rgba(255,0,255,0.5)]">{idx + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <div className="bg-white/5 border border-white/10 p-3 rounded-lg text-xs text-gray-400 mt-4 leading-relaxed break-keep">
          <span className="font-bold text-[#ff00ff] drop-shadow-[0_0_3px_rgba(255,0,255,0.5)]">주의:</span> YES 버튼은 앱 입장용 연출이고, 실제 참가 신청은 아래 '참가 확정하기' 버튼을 눌러 문자를 보내야 완료됩니다.
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <a 
            href="sms:01045273377?body=%5BSTAY%20YEON%20PARTY%20%EC%B0%B8%EA%B0%80%20%ED%99%95%EC%A0%95%5D%0A%EC%9D%B4%EB%A6%84%3A%0A%EC%84%B1%EB%B3%84%3A%0A%EB%82%98%EC%9D%B4%3A%0A%EC%9E%85%EA%B8%88%EC%9E%90%EB%AA%85%3A%0A%EC%B0%B8%EC%84%9D%20%EA%B0%80%EB%8A%A5%ED%95%A9%EB%8B%88%EB%8B%A4."
            className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#00ffff]/10 border border-[#00ffff]/30 shadow-[0_0_15px_rgba(0,255,255,0.2)] text-[#00ffff] hover:bg-[#00ffff]/20 active:scale-[0.98] transition-all w-full"
          >
            <span className="font-bold tracking-wider drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">참가 확정하기</span>
          </a>
          <p className="text-[12px] text-gray-500 text-center leading-relaxed break-keep px-1">
            버튼을 누르면 문자앱이 열립니다. 이름/성별/나이를 입력해서 보내주시면 참가 신청이 완료됩니다.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-3">
        <button onClick={() => onNavigate('schedule')} className="w-full bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors interactive-card group backdrop-blur-sm">
          <span className="font-medium text-[#eeeeee] group-hover:text-white transition-colors">오늘의 일정 보기</span>
          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#00ffff] group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.6)] group-hover:translate-x-0.5 transition-all transform-gpu" />
        </button>
        <button onClick={() => onNavigate('intro')} className="w-full bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors interactive-card group backdrop-blur-sm">
          <span className="font-medium text-[#eeeeee] group-hover:text-white transition-colors">자기소개 가이드</span>
          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#00ffff] group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.6)] group-hover:translate-x-0.5 transition-all transform-gpu" />
        </button>
        <button onClick={() => onNavigate('guide')} className="w-full bg-white/5 p-4 rounded-xl border border-white/10 flex justify-between items-center hover:bg-white/10 transition-colors interactive-card group backdrop-blur-sm">
          <span className="font-medium text-[#eeeeee] group-hover:text-white transition-colors">파티 안내사항</span>
          <ChevronRight className="w-5 h-5 text-gray-500 group-hover:text-[#00ffff] group-hover:drop-shadow-[0_0_5px_rgba(0,255,255,0.6)] group-hover:translate-x-0.5 transition-all transform-gpu" />
        </button>
      </section>

      <div className="text-center pb-8 pt-4">
        <p className="text-sm italic text-gray-500">
          "오늘 하루, 좋은 사람들과<br/>편하게 웃고 즐겨주세요."
        </p>
      </div>
    </div>
  );
}
