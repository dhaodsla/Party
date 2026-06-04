import React, { useState } from 'react';
import { Home, Calendar, Users, Gamepad2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HomeTab } from './tabs/HomeTab';
import { ScheduleTab } from './tabs/ScheduleTab';
import { GameTab } from './tabs/GameTab';
import { GuideTab } from './tabs/GuideTab';

type Tab = 'home' | 'schedule' | 'game' | 'guide';

export function MainApp() {
  const [activeTab, setActiveTab] = useState<Tab>('home');

  const renderTab = () => {
    switch (activeTab) {
      case 'home': return <HomeTab onNavigate={setActiveTab} />;
      case 'schedule': return <ScheduleTab />;
      case 'game': return <GameTab />;
      case 'guide': return <GuideTab />;
      default: return <HomeTab onNavigate={setActiveTab} />;
    }
  };

  const navItems = [
    { id: 'home', label: '홈', icon: Home },
    { id: 'schedule', label: '일정', icon: Calendar },
    { id: 'game', label: '게임', icon: Gamepad2 },
    { id: 'guide', label: '안내', icon: Info },
  ] as const;

  return (
    <div className="flex flex-col h-[100dvh] bg-[#0a0a0a] text-[#eeeeee] font-sans overflow-hidden">
      {/* Header */}
      <header className="px-6 py-4 flex items-center justify-center border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md z-10 sticky top-0 shrink-0">
        <h1 className="font-semibold tracking-widest uppercase text-sm text-gray-400">Stay Yeon Party</h1>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto pb-24 scroll-smooth">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {renderTab()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a]/95 backdrop-blur-md border-t border-white/10 pb-safe z-50">
        <div className="flex justify-around items-center h-16 max-w-md mx-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-colors ${
                  isActive ? 'text-[#00ffff] drop-shadow-[0_0_8px_rgba(0,255,255,0.6)]' : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
