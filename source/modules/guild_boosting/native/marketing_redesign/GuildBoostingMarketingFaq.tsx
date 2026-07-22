// Module ID: 12425
// Function ID: 94873
// Name: items1
// Dependencies: []
// Exports: default

// Module 12425 (items1)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
const HelpdeskArticles = arg1(dependencyMap[3]).HelpdeskArticles;
({ jsx: closure_7, jsxs: closure_8 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { marginBottom: arg1(dependencyMap[6]).VISIBILITY_OFFSET };
obj.wrapper = obj;
const tmp2 = arg1(dependencyMap[4]);
obj.content = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[7]).radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
obj.heading = { value: -1102997407, on: 2080375278 };
const obj1 = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_MOD_NORMAL, borderRadius: importDefault(dependencyMap[7]).radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
obj.list = { borderTopColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, borderTopWidth: 1 };
const obj2 = { borderTopColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, borderTopWidth: 1 };
obj.listItem = { borderBottomColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, borderBottomWidth: 1 };
obj.questionWrapper = { "Null": true, "Null": true, "Null": true };
obj.questionWrapperExpanded = { paddingBottom: 6 };
obj.question = { id: null, x: "07392a850e043822a5c8062588fbfbb4", y: "WaveformIcon" };
const obj4 = { nestedScrollEnabled: "%FunctionPrototype%", scrollEventThrottle: "paddingStart", tintColor: importDefault(dependencyMap[7]).colors.ICON_MUTED };
obj.questionIcon = obj4;
const items = [{ rotate: "45deg" }];
obj.questionIconExpanded = { transform: items };
obj.answer = { marginBottom: 10 };
let closure_9 = obj.createStyles(obj);
const items1 = [
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.C4J8UB);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.nhkk6k);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.ai4ym2);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      const obj = { helpCenterUrl: importDefault(dependencyMap[9]).getArticleURL(HelpdeskArticles.GUILD_BOOSTING_FAQ) };
      return intl.format(arg1(dependencyMap[8]).t.8zlqlD, obj);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.kMVGsC);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.Vz/SCQ);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.kYmXWF);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.+OURPp);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.LsX/vb);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.3TeauK);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.fRlnXU);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.bTRacj);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.8Mu5Q9);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.2T5iPo);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.6EN+TZ);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.NZax1u);
    }
  },
  {
    getQuestion() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.f5B4EW);
    },
    getAnswer() {
      const intl = arg1(dependencyMap[8]).intl;
      return intl.string(arg1(dependencyMap[8]).t.Aje8Pb);
    }
  }
];
const obj3 = { borderBottomColor: importDefault(dependencyMap[7]).colors.BORDER_MUTED, borderBottomWidth: 1 };
const obj5 = {
  getQuestion() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.C4J8UB);
  },
  getAnswer() {
    const intl = arg1(dependencyMap[8]).intl;
    return intl.string(arg1(dependencyMap[8]).t.nhkk6k);
  }
};
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx");

export default function GuildBoostingMarketingFaq() {
  const tmp = callback4();
  const arg1 = tmp;
  const tmp2 = callback(React.useState(null), 2);
  let closure_1 = tmp2[0];
  let closure_2 = tmp2[1];
  let obj = { style: tmp.wrapper };
  obj = { style: tmp.content };
  obj = { style: tmp.heading, variant: "heading-xxl/bold" };
  const intl = arg1(closure_2[8]).intl;
  obj.children = intl.string(arg1(closure_2[8]).t.HPJ6Nj);
  const items = [
    callback2(arg1(closure_2[10]).Text, obj),
    callback2(View, {
      style: tmp.list,
      children: items1.map((getQuestion) => {
        let tmp = arg1;
        tmp = callback === arg1;
        let obj = { style: tmp.listItem };
        obj = {};
        const items = [tmp.questionWrapper, ];
        let questionWrapperExpanded = tmp;
        if (tmp) {
          questionWrapperExpanded = tmp.questionWrapperExpanded;
        }
        items[1] = questionWrapperExpanded;
        obj.style = items;
        obj.onPress = function onPress() {
          return callback((arg0) => {
            let tmp = null;
            if (arg0 !== closure_0) {
              tmp = closure_0;
            }
            return tmp;
          });
        };
        obj.accessibilityRole = "button";
        obj = { expanded: tmp };
        obj.accessibilityState = obj;
        const obj1 = {};
        let str = "interactive-text-default";
        if (tmp) {
          str = "interactive-text-active";
        }
        obj1.color = str;
        obj1.style = tmp.question;
        obj1.variant = "text-md/normal";
        obj1.children = getQuestion.getQuestion();
        const items1 = [callback2(tmp(closure_2[10]).Text, obj1), ];
        const obj2 = { source: callback(closure_2[13]) };
        const items2 = [tmp.questionIcon, ];
        let questionIconExpanded = tmp;
        if (tmp) {
          questionIconExpanded = tmp.questionIconExpanded;
        }
        items2[1] = questionIconExpanded;
        obj2.style = items2;
        items1[1] = callback2(tmp(closure_2[12]).Icon, obj2);
        obj.children = items1;
        const items3 = [closure_8(tmp(closure_2[11]).PressableOpacity, obj), ];
        if (tmp) {
          const obj3 = { -9223372036854775808: null, 9223372036854775807: "ded314673e0e4bafd84df14bbd2dcfb3", 0: "tier_1_24px", style: tmp.answer, children: getQuestion.getAnswer() };
          tmp = callback2(tmp(closure_2[10]).Text, obj3);
        }
        items3[1] = tmp;
        obj.children = items3;
        return closure_8(closure_5, obj, arg1);
      })
    })
  ];
  obj.children = items;
  obj.children = callback3(View, obj);
  return callback2(View, obj);
};
