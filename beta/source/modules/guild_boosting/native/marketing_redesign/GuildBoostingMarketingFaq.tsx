// Module ID: 13146
// Function ID: 13147
// Name: GuildBoostingMarketingFaq
// Dependencies: [32, 19, 17, 1074, 21, 4836, 6821, 576, 1115, 2111, 4832, 5435, 1177, 13147, 2]
// Exports: default

// Module 13146 (GuildBoostingMarketingFaq)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import GuildBoostingMarketingPersistentCta from "GuildBoostingMarketingPersistentCta" /* 6821 */;
import AssetRegistryDefault from "AssetRegistry" /* 13147 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, closure_0;

let items;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj7;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, content: obj3, heading: { marginBottom: 20, textAlign: "center" }, list: obj4, listItem: obj5, questionWrapper: { display: "flex", flexDirection: "row", paddingVertical: 10 }, questionWrapperExpanded: { paddingBottom: 6 }, question: { flexGrow: 1, flexShrink: 1, paddingRight: 8 }, questionIcon: { flexGrow: 0, flexShrink: 0, tintColor: nativeDefault.colors.ICON_MUTED }, questionIconExpanded: obj7, answer: { marginBottom: 10 } };
obj2 = { alignSelf: "center", marginTop: 50, marginBottom: GuildBoostingMarketingPersistentCta.VISIBILITY_OFFSET, maxWidth: 800, paddingHorizontal: 16, width: "100%" };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 16, paddingVertical: 28 };
obj4 = { borderTopColor: nativeDefault.colors.BORDER_MUTED, borderTopWidth: 1 };
obj5 = { borderBottomColor: nativeDefault.colors.BORDER_MUTED, borderBottomWidth: 1 };
obj7 = { transform: items };
items = [{ rotate: "45deg" }];
({ flexGrow: 0, flexShrink: 0, tintColor: nativeDefault.colors.ICON_MUTED });
let closure_9 = createStyles(obj);
let items1 = [, , , , , , , , ];
const obj8 = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t.C4J8UB);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t.nhkk6k);
  }
};
items1[0] = obj8;
items1[1] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t.ai4ym2);
  },
  getAnswer() {
    let obj2;
    const intl = intl2.intl;
    const format = intl.format;
    const obj = { helpCenterUrl: obj2.getArticleURL(HelpdeskArticles.GUILD_BOOSTING_FAQ) };
    const v8zlqlD = intl2.t["8zlqlD"];
    obj2 = HelpdeskUtilsDefault;
    return format(v8zlqlD, obj);
  }
};
items1[2] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t.kMVGsC);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t["Vz/SCQ"]);
  }
};
items1[3] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t.kYmXWF);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t["+OURPp"]);
  }
};
items1[4] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t["LsX/vb"]);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t["3TeauK"]);
  }
};
items1[5] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t.fRlnXU);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t.bTRacj);
  }
};
items1[6] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t["8Mu5Q9"]);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t["2T5iPo"]);
  }
};
items1[7] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t["6EN+TZ"]);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t.NZax1u);
  }
};
items1[8] = {
  getQuestion() {
    const intl = intl2.intl;
    return intl.string(intl2.t.f5B4EW);
  },
  getAnswer() {
    const intl = intl2.intl;
    return intl.string(intl2.t.Aje8Pb);
  }
};
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingFaq.tsx");

export default function GuildBoostingMarketingFaq() {
  let intl;
  let items;
  let obj2;
  let tmp = closure_9();
  _require = tmp;
  [importDefault, dependencyMap] = _slicedToArray(react.useState(null), 2);
  const tmp2 = _slicedToArray(react.useState(null), 2);
  let obj = { style: tmp.wrapper, children: closure_8(View, obj2) };
  obj2 = { style: tmp.content, children: items };
  let obj3 = { style: tmp.heading, variant: "heading-xxl/bold", children: intl.string(require("intl").t.HPJ6Nj) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items = [closure_7(Heading, obj3), ];
  let obj4 = {
    style: tmp.list,
    children: items1.map((getQuestion, index) => {
      let items2;
      let items3;
      closure_0 = index;
      let tmp = importDefault === index;
      const items = [closure_0.questionWrapper, ];
      let questionWrapperExpanded = tmp;
      const obj = { style: closure_0.listItem, children: items3 };
      const PressableOpacity = closure_0(dependencyMap[11]).PressableOpacity;
      const tmp3 = View;
      if (tmp) {
        questionWrapperExpanded = tmp4.questionWrapperExpanded;
      }
      const obj2 = {
        style: items,
        onPress() {
          return dependencyMap((arg0) => {
            let tmp = null;
            if (arg0 !== index) {
              tmp = index;
            }
            return tmp;
          });
        },
        accessibilityRole: "button",
        accessibilityState: { expanded: tmp },
        children: items1
      };
      items[1] = questionWrapperExpanded;
      let str = "interactive-text-default";
      const Text = tmp5(tmp6[10]).Text;
      if (tmp) {
        str = "interactive-text-active";
      }
      items1 = [, ];
      const obj3 = { color: str, style: closure_0.question, variant: "text-md/normal", children: getQuestion.getQuestion() };
      items1[0] = closure_1_7(Text, obj3);
      const obj4 = { source: AssetRegistryDefault, style: items2 };
      const Icon = tmp5(tmp6[12]).Icon;
      items2 = [closure_0.questionIcon, tmp && closure_0.questionIconExpanded];
      items1[1] = closure_1_7(Icon, obj4);
      items3 = [closure_1_8(PressableOpacity, obj2), ];
      if (tmp) {
        const obj5 = { style: closure_0.answer, color: "interactive-text-active", variant: "text-sm/normal", children: getQuestion.getAnswer() };
        const Text2 = tmp5(tmp6[10]).Text;
        tmp = tmp7(Text2, obj5);
      }
      items3[1] = tmp;
      return closure_1_8(tmp3, obj, index);
    })
  };
  items[1] = closure_7(View, obj4);
  return closure_7(View, obj);
};
