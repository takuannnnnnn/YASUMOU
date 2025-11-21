import React from 'react';
import { ArrowRight, Clock, CalendarCheck, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-yasumou-light to-white">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-blue-100 text-yasumou-blue px-4 py-1.5 rounded-full text-xs font-bold tracking-wider mb-6 uppercase">
            University Power Nap Service
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-yasumou-dark mb-6 leading-tight">
            15分の<span className="text-transparent bg-clip-text bg-gradient-to-r from-yasumou-blue to-purple-600">戦略的休息</span>で、<br />
            午後のパフォーマンスを<br className="hidden md:block" />最大化する。
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            単なる休憩（サボり）ではなく、勉強・研究効率を上げるための<br className="hidden md:block" />
            「エネルギーチャージ」を、キャンパス内で。
          </p>
          
          {/* Reservation & Availability Widget */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-slate-100 max-w-lg mx-auto text-left relative overflow-hidden group mb-10">
            <div className="absolute top-0 left-0 w-1 h-full bg-yasumou-blue"></div>
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
              <div>
                 <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Current Status</p>
                 <div className="flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                    </span>
                    <span className="font-bold text-slate-800 text-xl">空席あり</span>
                    <span className="text-sm text-slate-500 font-medium bg-slate-100 px-2 py-0.5 rounded-full">残り3席</span>
                 </div>
              </div>
              <div className="bg-slate-50 px-4 py-2 rounded-xl border border-slate-100">
                 <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                    <Clock size={16} className="text-yasumou-blue" />
                    <span>Now 12:00 - 16:00</span>
                 </div>
              </div>
            </div>

            <button className="w-full bg-yasumou-dark text-white py-4 rounded-xl font-bold text-lg hover:bg-yasumou-blue transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 group-hover:scale-[1.02] duration-200">
              <CalendarCheck size={20} />
              <span>空き状況確認・予約</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <p className="text-center mt-4 text-xs text-slate-400">
              ※予約なしでも空きがあれば利用可能です
            </p>
          </div>

          {/* Schedule Info */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 relative shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yasumou-accent text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm tracking-wider whitespace-nowrap">
                POP UP 実施スケジュール
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mt-3 text-left">
                {/* Event 1 */}
                <div className="flex flex-col bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                   <div className="text-yasumou-blue font-bold border-b border-slate-100 pb-2 mb-2 text-sm">12/1 (日) 〜 12/4 (水)</div>
                   <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                        <span className="font-bold text-slate-800 text-sm">関西大学 COCO</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">
                        <Clock className="w-3 h-3 text-slate-400 inline mr-1" />
                        体験可能: 12:30 ~ 14:30
                      </div>
                   </div>
                </div>

                {/* Event 2 */}
                <div className="flex flex-col bg-white p-4 rounded-xl border border-slate-100 shadow-sm hover:border-blue-100 transition-colors">
                   <div className="text-yasumou-blue font-bold border-b border-slate-100 pb-2 mb-2 text-sm">12/8 (日) 〜 12/11 (水)</div>
                   <div className="flex-1">
                      <div className="flex items-start gap-2 mb-2">
                        <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-1" />
                        <span className="font-bold text-slate-800 text-sm">関西大学 梅田キャンパス 5階</span>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50 inline-block px-2 py-1 rounded">
                        <Clock className="w-3 h-3 text-slate-400 inline mr-1" />
                        体験可能: 12:30 ~ 14:30
                      </div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
             <a href="#features" className="text-slate-500 font-medium hover:text-yasumou-blue transition-colors text-sm border-b border-transparent hover:border-yasumou-blue pb-0.5">
               サービス詳細を見る
             </a>
          </div>
        </div>
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none opacity-40">
        <div className="absolute -top-[10%] -right-[10%] w-[500px] h-[500px] bg-blue-200 rounded-full blur-3xl mix-blend-multiply animate-blob"></div>
        <div className="absolute top-[20%] -left-[10%] w-[400px] h-[400px] bg-purple-200 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-[10%] left-[20%] w-[600px] h-[600px] bg-yellow-100 rounded-full blur-3xl mix-blend-multiply animate-blob animation-delay-4000"></div>
      </div>
    </section>
  );
};

export default Hero;