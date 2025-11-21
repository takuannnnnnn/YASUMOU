import { 
  Armchair, 
  EyeOff, 
  AlarmClock, 
  Sparkles, 
  BatteryCharging, 
  BookOpen, 
  FlaskConical,
  CheckCircle2,
  Coffee,
  PhoneOff
} from 'lucide-react';
import { Feature, Step, TargetAudience } from './types';

export const PAIN_POINTS: Feature[] = [
  {
    title: "物理的苦痛",
    description: "机で寝ると首や体が痛い...",
    solution: "Yogibo導入",
    icon: Armchair
  },
  {
    title: "心理的苦痛",
    description: "周りの人の目が気になる...",
    solution: "半個室ブース（カーテン・仕切り）",
    icon: EyeOff
  },
  {
    title: "機能的不安",
    description: "授業に寝過ごしたらどうしよう...",
    solution: "振動タイマー ＋ スタッフの絶対起こす保証",
    icon: AlarmClock
  },
  {
    title: "衛生面",
    description: "他人が使ったものは少し抵抗が...",
    solution: "使い捨てフェイスシート ＋ 徹底除菌",
    icon: Sparkles
  }
];

export const TARGETS: TargetAudience[] = [
  {
    type: "理系学生",
    description: "研究・実験の合間に効率よく脳をリセットしたい。",
    icon: FlaskConical
  },
  {
    type: "文系学生",
    description: "空きコマを持て余し、図書館や食堂での仮眠に限界を感じている。",
    icon: BookOpen
  }
];

export const FLOW_STEPS: Step[] = [
  {
    number: "01",
    title: "受付 (Check-in)",
    description: "デジタルデトックスの開始",
    details: [
      "ルール説明＆謝礼渡し",
      "スマホを預かる（充電 or 電源OFF）",
      "振動タイマー受取（17分設定）"
    ],
    icon: PhoneOff
  },
  {
    number: "02",
    title: "入室 (Rest)",
    description: "Yogiboに身を委ねる",
    details: [
      "靴を脱いでリラックス",
      "使い捨てフェイスシートをセット",
      "仮眠スタート"
    ],
    icon: BatteryCharging
  },
  {
    number: "03",
    title: "起床 (Wake-up)",
    description: "確実な目覚め",
    details: [
      "振動タイマーで起床",
      "起きない場合は＋3分後にスタッフがノック（絶対遅刻させない保証）"
    ],
    icon: AlarmClock
  },
  {
    number: "04",
    title: "退室・測定 (Check-out)",
    description: "脳の覚醒を確認",
    details: [
      "シート廃棄・除菌（セルフ）",
      "100マス計算で覚醒度チェック",
      "アンケート記入"
    ],
    icon: CheckCircle2
  },
  {
    number: "05",
    title: "終了 (Finish)",
    description: "午後へ向けて再出発",
    details: [
      "コーヒー（試飲サイズ）提供",
      "スマホ返却"
    ],
    icon: Coffee
  }
];