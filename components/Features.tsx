import React from 'react';
import { PAIN_POINTS } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            学内仮眠の<span className="text-yasumou-blue">「4つの壁」</span>を突破する
          </h2>
          <p className="text-slate-400">
            アンケート結果に基づき、学生が抱える睡眠の悩みをすべて解決しました。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PAIN_POINTS.map((point, index) => (
            <div 
              key={index} 
              className="bg-slate-800/50 p-6 rounded-2xl border border-slate-700 hover:border-yasumou-blue/50 transition-colors relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 bg-slate-800 px-3 py-1 rounded-bl-lg text-xs font-mono text-slate-400">
                0{index + 1}
              </div>
              
              <div className="mb-6 text-red-400 group-hover:text-red-300 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                   <point.icon size={20} />
                   <h4 className="font-bold text-lg">{point.title}</h4>
                </div>
                <p className="text-sm text-slate-400 pl-8 border-l-2 border-red-400/20">
                  {point.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-700">
                <p className="text-xs text-yasumou-blue font-bold uppercase tracking-wider mb-2">
                  SOLUTION
                </p>
                <p className="font-bold text-lg text-white">
                  {point.solution}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Equipment Highlight */}
        <div className="mt-16 bg-yasumou-blue rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">こだわり抜いた空間設計</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>Yogiboを5台設置した専用ブース</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>足元が見える安全なカーテン設計（裾25cm）</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span>手元灯・充電器・サイドテーブル完備</span>
              </li>
            </ul>
          </div>
          <div className="relative z-10 shrink-0 bg-white text-yasumou-blue px-8 py-4 rounded-full font-bold cursor-pointer hover:bg-slate-100 transition-colors">
            梅田キャンパス「COCO」
          </div>
          
          {/* Pattern overlay */}
          <div className="absolute -right-20 -bottom-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;