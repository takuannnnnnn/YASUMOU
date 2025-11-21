import React from 'react';
import { TARGETS } from '../constants';
import { Zap } from 'lucide-react';

const Concept: React.FC = () => {
  return (
    <section id="concept" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Concept Definition */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
             <Zap className="text-yasumou-accent w-6 h-6 fill-current" />
             <span className="font-bold text-yasumou-accent uppercase tracking-widest">Concept</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-yasumou-dark mb-8">
            サボりじゃない。<br />
            <span className="border-b-4 border-yasumou-blue">「チャージ」だ。</span>
          </h2>
          <p className="text-gray-600 leading-loose text-lg">
            YASUMOUは、大学内での仮眠を再定義します。<br />
            研究や勉強の合間に、短時間で効率よく脳をリセット。<br />
            午後の生産性を劇的に向上させる、あなただけの充電ステーションです。
          </p>
        </div>

        {/* Targets */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TARGETS.map((target, index) => (
            <div 
              key={index} 
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 text-yasumou-blue">
                <target.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-yasumou-dark mb-3">
                {target.type}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {target.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Concept;