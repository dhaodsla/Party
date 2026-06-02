import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, Phone, MessageCircle, Map as MapIcon, MapPin } from 'lucide-react';

const rules = [
  "입실은 17:00부터 가능합니다.",
  "바비큐는 19:00부터 시작됩니다.",
  "이번 파티는 A동과 B동 전체 대관 행사라 늦은 시간까지 여유롭게 즐길 수 있습니다.",
  "단, 과도한 음주는 삼가주세요.",
  "다른 참가자에게 불편함을 주는 행동은 제한될 수 있습니다.",
  "참가자 동의 없는 사진/영상 촬영은 금지입니다.",
  "숙소 및 비품 파손 시 배상 책임이 있습니다.",
  "쉬고 싶은 참가자도 있을 수 있으니 서로의 컨디션을 배려해주세요.",
  "개인 물품은 퇴실 전 꼭 확인해주세요.",
  "즐거운 분위기를 위해 서로 존중하고 배려해주세요."
];

const pensionRules = [
  "이번 파티는 스테이연 A동과 B동 전체를 사용하는 대관 행사입니다.",
  "공용 공간과 숙박 공간을 구분해서 사용해주세요.",
  "개인 짐은 지정된 공간에 보관해주세요.",
  "화장실, 침구, 주방용품은 깨끗하게 사용해주세요.",
  "퇴실 전 쓰레기와 개인 물품을 확인해주세요.",
  "함께 사용하는 공간인 만큼 다음 사람을 위해 깨끗하게 이용해주세요."
];

export function GuideTab() {
  const [checklist, setChecklist] = useState({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
    item5: false,
  });

  const toggleCheck = (key: keyof typeof checklist) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="p-6 max-w-md mx-auto space-y-10 animate-in fade-in pb-12">
      
      {/* Location / Contact */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <MapPin className="text-[#00ffff] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)] w-6 h-6" />
          <h2 className="text-2xl font-bold text-[#00ffff] tracking-tight drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">오시는 길 / 문의</h2>
        </div>
        
        <div className="bg-white/5 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 space-y-5 interactive-card group backdrop-blur-sm">
          <div>
            <p className="text-xs text-[#ff00ff] drop-shadow-[0_0_3px_rgba(255,0,255,0.5)] font-bold mb-1">주소</p>
            <p className="text-sm text-[#eeeeee] break-keep">대구광역시 달성군 구지면 구지남로 29 스테이연</p>
          </div>
          <div>
            <p className="text-xs text-[#ff00ff] drop-shadow-[0_0_3px_rgba(255,0,255,0.5)] font-bold mb-1">전화 문의</p>
            <p className="text-sm text-[#eeeeee]">010-4527-3377</p>
          </div>
          <div>
            <p className="text-xs text-[#ff00ff] drop-shadow-[0_0_3px_rgba(255,0,255,0.5)] font-bold mb-1">카카오톡 문의</p>
            <p className="text-sm text-[#eeeeee]">오픈채팅으로 문의하기</p>
          </div>
          <div>
            <p className="text-xs text-[#ff00ff] drop-shadow-[0_0_3px_rgba(255,0,255,0.5)] font-bold mb-1">주차 안내</p>
            <p className="text-sm text-[#eeeeee]">숙소 앞 또는 지정된 공간에 주차해주세요.</p>
          </div>

          <div className="flex flex-col gap-2 pt-3 border-t border-white/10">
            <a 
              href="tel:01045273377" 
              className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/5 border border-white/20 shadow-sm text-[#eeeeee] hover:bg-white/10 active:scale-[0.98] transition-all"
            >
              <Phone className="w-5 h-5 text-[#00ffff] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" />
              <span className="font-bold text-sm">전화하기</span>
            </a>
            <a 
              href="https://open.kakao.com/o/seWtrDxi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-[#FAE100] border border-[#F2D600]/50 shadow-sm text-[#371D1E] hover:bg-[#F2D600] active:scale-[0.98] transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-bold text-sm">카카오톡 문의</span>
            </a>
            <a 
              href="https://map.naver.com/v5/search/%EB%8C%80%EA%B5%AC%EA%B4%91%EC%97%AD%EC%8B%9C%20%EB%8B%AC%EC%84%B1%EA%B5%B0%20%EA%B5%AC%EC%A7%80%EB%A9%B4%20%EA%B5%AC%EC%A7%80%EB%82%A8%EB%A1%9C%2029%20%EC%8A%A4%ED%85%8C%EC%9D%B4%EC%97%B0" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-white/5 border border-white/20 shadow-sm text-[#eeeeee] hover:bg-white/10 active:scale-[0.98] transition-all"
            >
              <MapIcon className="w-5 h-5 text-[#00ffff] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]" />
              <span className="font-bold text-sm">길 안내 보기</span>
            </a>
          </div>
        </div>
      </section>

      {/* Party Rules */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="text-[#ff00ff] drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] w-6 h-6" />
          <h2 className="text-2xl font-bold text-[#00ffff] tracking-tight drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">파티 안내사항</h2>
        </div>
        
        <div className="bg-white/5 p-5 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.3)] border border-white/10 interactive-card group backdrop-blur-sm">
          <ul className="space-y-3">
            {rules.map((rule, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                <span className="text-[#ff00ff] drop-shadow-[0_0_3px_rgba(255,0,255,0.5)] font-bold shrink-0 mt-0.5">•</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pension Guide */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-2xl font-bold text-[#00ffff] tracking-tight drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">스테이연 안내</h2>
        </div>
        
        <div className="bg-white/5 p-5 rounded-2xl border border-white/10 interactive-card group backdrop-blur-sm">
          <ul className="space-y-3">
            {pensionRules.map((rule, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                <span className="text-[#00ffff] drop-shadow-[0_0_3px_rgba(0,255,255,0.5)] shrink-0 mt-0.5">-</span>
                <span>{rule}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Checklist */}
      <section className="space-y-4 pt-4 border-t border-white/10">
        <h3 className="font-bold text-[#ff00ff] drop-shadow-[0_0_5px_rgba(255,0,255,0.5)] px-1">숙소 이용 체크리스트</h3>
        <p className="text-xs text-gray-400 px-1 mb-2">퇴실 시 아래 항목들을 확인해주세요.</p>
        
        <div className="space-y-2">
          {[
            { id: 'item1', label: '개인 물품 챙기기' },
            { id: 'item2', label: '쓰레기 정리하기' },
            { id: 'item3', label: '사용한 식기 정리하기' },
            { id: 'item4', label: '충전기 확인하기' },
            { id: 'item5', label: '퇴실 전 방 확인하기' },
          ].map((item) => (
            <div 
              key={item.id}
              onClick={() => toggleCheck(item.id as keyof typeof checklist)}
              className={`flex items-center gap-3 p-4 rounded-xl cursor-pointer transition-colors border interactive-card group backdrop-blur-sm ${
                checklist[item.id as keyof typeof checklist] 
                  ? 'bg-[#00ffff]/10 border-[#00ffff]/30' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <CheckCircle2 
                className={`w-6 h-6 transition-colors ${
                  checklist[item.id as keyof typeof checklist] ? 'text-[#00ffff] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]' : 'text-gray-600'
                }`} 
              />
              <span className={`font-medium transition-colors ${
                checklist[item.id as keyof typeof checklist] ? 'text-[#00ffff] drop-shadow-[0_0_3px_rgba(0,255,255,0.5)] line-through opacity-70' : 'text-gray-300'
              }`}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
