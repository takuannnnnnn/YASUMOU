import React from 'react';
import { FLOW_STEPS } from '../constants';

const Flow: React.FC = () => {
  return (
    <section id="flow" className="py-20 bg-yasumou-light/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-yasumou-dark mb-4">
            利用の流れ
          </h2>
          <p className="text-gray-600">
            デジタルデトックス × 確実な覚醒
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          <div className="space-y-12">
            {FLOW_STEPS.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'} gap-8 md:gap-0 relative`}>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 bg-white border-4 border-yasumou-blue rounded-full items-center justify-center z-10 shadow-sm font-bold text-yasumou-blue text-sm">
                    {step.number}
                  </div>

                  {/* Content Side */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} items-center text-center`}>
                     <div className={`w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center text-yasumou-dark mb-4 md:hidden`}>
                        <step.icon size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-yasumou-dark mb-2 flex items-center gap-3">
                        {step.title}
                     </h3>
                     <p className="text-yasumou-blue font-medium mb-4">{step.description}</p>
                     <ul className={`space-y-2 text-gray-600 text-sm ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col items-center`}>
                        {step.details.map((detail, i) => (
                          <li key={i} className="flex items-center gap-2">
                             {!isEven && <span className="w-1.5 h-1.5 bg-yasumou-accent rounded-full hidden md:block"></span>}
                             {detail}
                             {isEven && <span className="w-1.5 h-1.5 bg-yasumou-accent rounded-full hidden md:block"></span>}
                          </li>
                        ))}
                     </ul>
                  </div>

                  {/* Icon/Image Side (Opposite) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16 md:justify-start' : 'md:pr-16 md:justify-end'} hidden md:flex`}>
                    <div className="w-24 h-24 bg-white rounded-3xl shadow-lg flex items-center justify-center text-yasumou-blue transform hover:scale-110 transition-transform duration-300">
                      <step.icon size={40} strokeWidth={1.5} />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flow;