import React from 'react';
import { Calendar, MapPin, Clock, Users, ChevronRight } from 'lucide-react';

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
        <h2 className="text-3xl font-bold tracking-tight text-[#2c4033]">STAY YEON<br/>PARTY</h2>
        <p className="text-[#847f76] text-sm">스테이연 프라이빗 파티</p>
        <div className="w-12 h-[1px] bg-[#d5d0c5] mx-auto my-4"></div>
        <p className="text-[#5d564d] font-medium leading-relaxed">
          좋은 사람들과 맛있는 음식,<br/>
          음악, 대화가 있는 1박 2일
        </p>
      </section>

      {/* D-Day Card */}
      <section className="bg-white p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#f2f0ea] text-center interactive-card group relative overflow-hidden animate-d-day-glow">
        <div className="animate-d-day-shimmer"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#2c4033] via-[#c4a45a] to-[#2c4033] opacity-80 group-hover:opacity-100 transition-opacity"></div>
        <p className="text-[11px] font-bold text-[#c4a45a] mb-1.5 tracking-[0.2em] group-hover:text-[#b59e5f] transition-colors relative z-10">PARTY D-DAY</p>
        <div className="text-5xl font-black text-[#2c4033] tracking-tighter mb-3 group-hover:text-[#1e2e24] transition-colors relative z-10">
          <span className="animate-d-day-pulse">{dDayText}</span>
        </div>
        <div className="text-sm text-[#5d564d] font-medium leading-relaxed relative z-10">
          <span className="font-bold text-[#3e3a35]">2026.06.26 FRI</span><br/>
          <span className="text-[#847f76] text-xs tracking-wider mt-1 inline-block">UNTIL THE NIGHT BEGINS</span>
        </div>
      </section>

      {/* Info Card */}
      <section className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#f2f0ea] space-y-4 interactive-card group">
        <div className="flex items-start gap-3">
          <Calendar className="w-5 h-5 text-[#847f76] mt-0.5 group-hover:text-[#2c4033] group-hover:scale-110 transition-all duration-300 transform-gpu" />
          <div>
            <p className="font-semibold text-[#3e3a35] group-hover:text-black transition-colors">2026.06.26 FRI - 06.27 SAT</p>
            <p className="text-sm text-[#847f76]">1박 2일간의 여정</p>
          </div>
        </div>
        <div className="w-full h-[1px] bg-[#f2f0ea]"></div>
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-[#847f76] mt-0.5 group-hover:text-[#2c4033] group-hover:scale-110 transition-all duration-300 transform-gpu" />
          <div>
            <p className="font-semibold text-[#3e3a35] group-hover:text-black transition-colors">스테이연</p>
            <p className="text-sm text-[#847f76]">A동 · B동 전체 대관</p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-1 gap-3">
        <div className="bg-[#f4efe8] p-4 rounded-xl flex items-center gap-3 interactive-card group">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <Clock className="w-5 h-5 text-[#2c4033] group-hover:scale-110 transition-all duration-300 transform-gpu" />
          </div>
          <div>
            <p className="font-semibold text-[#3e3a35] text-sm group-hover:text-[#1e2e24] transition-colors">17:00 입실 시작</p>
            <p className="text-xs text-[#847f76]">자유로운 휴식 및 짐정리</p>
          </div>
        </div>
        <div className="bg-[#f4efe8] p-4 rounded-xl flex items-center gap-3 interactive-card group">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <Users className="w-5 h-5 text-[#2c4033] group-hover:scale-110 transition-all duration-300 transform-gpu" />
          </div>
          <div>
            <p className="font-semibold text-[#3e3a35] text-sm group-hover:text-[#1e2e24] transition-colors">19:00 바비큐 시작</p>
            <p className="text-xs text-[#847f76]">본격적인 파티 스타트</p>
          </div>
        </div>
        <div className="bg-[#f4efe8] p-4 rounded-xl flex items-center gap-3 interactive-card group">
          <div className="bg-white p-2 rounded-lg shadow-sm">
            <Clock className="w-5 h-5 text-[#2c4033] group-hover:scale-110 transition-all duration-300 transform-gpu" />
          </div>
          <div>
            <p className="font-semibold text-[#3e3a35] text-sm group-hover:text-[#1e2e24] transition-colors">11:00 퇴실</p>
            <p className="text-xs text-[#847f76]">아쉬움을 뒤로하고 마무리</p>
          </div>
        </div>
      </section>

      {/* Participation Process */}
      <section className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#f2f0ea] space-y-4 interactive-card group">
        <h3 className="font-bold text-[#3e3a35] border-b border-[#f2f0ea] pb-2">참가 확정 절차</h3>
        <ul className="space-y-2">
          {["초대장 확인", "YES 누르고 앱 입장", "참가 확정하기 버튼 클릭", "문자 전송", "운영자 확인 후 최종 안내"].map((step, idx) => (
            <li key={idx} className="flex gap-3 text-sm text-[#5d564d] font-medium items-center">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#f4efe8] text-[#2c4033] font-bold text-xs shrink-0">{idx + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ul>

        <div className="bg-[#f4efe8] p-3 rounded-lg text-xs text-[#847f76] mt-4 leading-relaxed break-keep">
          <span className="font-bold text-[#8c3a3a]">주의:</span> YES 버튼은 앱 입장용 연출이고, 실제 참가 신청은 아래 '참가 확정하기' 버튼을 눌러 문자를 보내야 완료됩니다.
        </div>

        <div className="pt-2 flex flex-col gap-2">
          <a 
            href="sms:01045273377?body=%5BSTAY%20YEON%20PARTY%20%EC%B0%B8%EA%B0%80%20%ED%99%95%EC%A0%95%5D%0A%EC%9D%B4%EB%A6%84%3A%0A%EC%84%B1%EB%B3%84%3A%0A%EB%82%98%EC%9D%B4%3A%0A%EC%9E%85%EA%B8%88%EC%9E%90%EB%AA%85%3A%0A%EC%B0%B8%EC%84%9D%20%EA%B0%80%EB%8A%A5%ED%95%A9%EB%8B%88%EB%8B%A4."
            className="flex items-center justify-center gap-2 p-4 rounded-xl bg-[#2c4033] shadow-[0_4px_15px_rgba(44,64,51,0.2)] text-white hover:bg-[#1e2e24] active:scale-[0.98] transition-all w-full"
          >
            <span className="font-bold">참가 확정하기</span>
          </a>
          <p className="text-[12px] text-[#a39f98] text-center leading-relaxed break-keep px-1">
            버튼을 누르면 문자앱이 열립니다. 이름/성별/나이를 입력해서 보내주시면 참가 신청이 완료됩니다.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section className="space-y-3">
        <button onClick={() => onNavigate('schedule')} className="w-full bg-white p-4 rounded-xl border border-[#f2f0ea] flex justify-between items-center hover:bg-[#faf9f5] transition-colors interactive-card group">
          <span className="font-medium text-[#3e3a35] group-hover:text-black transition-colors">오늘의 일정 보기</span>
          <ChevronRight className="w-5 h-5 text-[#d5d0c5] group-hover:text-[#2c4033] group-hover:translate-x-0.5 transition-all transform-gpu" />
        </button>
        <button onClick={() => onNavigate('intro')} className="w-full bg-white p-4 rounded-xl border border-[#f2f0ea] flex justify-between items-center hover:bg-[#faf9f5] transition-colors interactive-card group">
          <span className="font-medium text-[#3e3a35] group-hover:text-black transition-colors">자기소개 가이드</span>
          <ChevronRight className="w-5 h-5 text-[#d5d0c5] group-hover:text-[#2c4033] group-hover:translate-x-0.5 transition-all transform-gpu" />
        </button>
        <button onClick={() => onNavigate('guide')} className="w-full bg-white p-4 rounded-xl border border-[#f2f0ea] flex justify-between items-center hover:bg-[#faf9f5] transition-colors interactive-card group">
          <span className="font-medium text-[#3e3a35] group-hover:text-black transition-colors">파티 안내사항</span>
          <ChevronRight className="w-5 h-5 text-[#d5d0c5] group-hover:text-[#2c4033] group-hover:translate-x-0.5 transition-all transform-gpu" />
        </button>
      </section>

      <div className="text-center pb-8 pt-4">
        <p className="text-sm italic text-[#a39f98]">
          "오늘 하루, 좋은 사람들과<br/>편하게 웃고 즐겨주세요."
        </p>
      </div>
    </div>
  );
}
