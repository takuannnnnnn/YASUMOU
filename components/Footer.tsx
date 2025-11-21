import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="access" className="bg-yasumou-dark text-white pt-20 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
               <div className="bg-white text-yasumou-dark p-1.5 rounded-lg">
                 <span className="font-bold text-xl tracking-wider">Y</span>
               </div>
               <span className="font-black text-2xl tracking-tighter">
                 YASUMOU
               </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              YASUMOUは、大学内での戦略的な休息を提供するパワーナップサービスです。
              午後の集中力を最大化するための最適な環境とオペレーションを提供します。
            </p>
          </div>

          {/* Access */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Access</h4>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="shrink-0 text-yasumou-blue" size={20} />
                <div>
                  <p className="font-bold text-white">梅田キャンパス「COCO」</p>
                  <p className="text-sm">大阪府大阪市北区...</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="shrink-0 text-yasumou-blue" size={20} />
                <div>
                  <p className="font-bold text-white">営業時間</p>
                  <p className="text-sm">平日 12:00 - 16:00 (最終受付 15:40)</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Links</h4>
            <ul className="space-y-3 text-slate-300">
              <li><a href="#" className="hover:text-yasumou-blue transition-colors">利用規約</a></li>
              <li><a href="#" className="hover:text-yasumou-blue transition-colors">プライバシーポリシー</a></li>
              <li><a href="#" className="hover:text-yasumou-blue transition-colors">運営会社</a></li>
              <li><a href="#" className="hover:text-yasumou-blue transition-colors">お問い合わせ</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} YASUMOU Project. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;