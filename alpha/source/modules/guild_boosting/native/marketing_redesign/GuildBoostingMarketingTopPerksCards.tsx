// Module ID: 13871
// Function ID: 13872
// Name: GuildBoostingMarketingTopPerksCards
// Dependencies: [19, 17, 5081, 21, 5092, 587, 1126, 6156, 13872, 6105, 13873, 13874, 558, 576, 5088, 12304, 2]

// Module 13871 (GuildBoostingMarketingTopPerksCards)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 5088 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 6105 */;
import FastImageDefault from "FastImage" /* 6156 */;
import AssetRegistryDefault from "AssetRegistry" /* 13872 */;
import _mod13873 from "module_13873" /* 13873 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13874 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let hasOwnProperty;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: obj2, cardGraphic: size, cardLast: { marginRight: 0 }, cardHeading: { marginBottom: 4, textAlign: "center" }, cardBody: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
let closure_7 = createStyles(obj);
let obj3 = {
  getHeadingCopy() {
    const intl = intl2.intl;
    return intl.string(intl2.t.y4ft4D);
  },
  getBodyCopy() {
    const intl = intl2.intl;
    return intl.string(intl2.t.HTvLGu);
  },
  getGraphic(style) {
    const obj = { style, source: AssetRegistryDefault };
    const tmp = FastImageDefault;
    return hasOwnProperty(tmp, obj);
  }
};
let items = [
  obj3,
  {
    getHeadingCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t.PbAyub);
    },
    getBodyCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t.wOYbTv);
    },
    getGraphic(style) {
      const obj = { source: _mod13873, autoPlay: !AccessibilityStore.useReducedMotion, style };
      const tmp = LottieAnimationViewDefault;
      return hasOwnProperty(tmp, obj);
    }
  },
  {
    getHeadingCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t["/bX4Jn"]);
    },
    getBodyCopy() {
      const intl = intl2.intl;
      return intl.string(intl2.t.yCjoUC);
    },
    getGraphic(style) {
      const obj = { style, source: AssetRegistryDefault2 };
      const tmp = FastImageDefault;
      return hasOwnProperty(tmp, obj);
    }
  }
];
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildBoostingMarketingTopPerksCards() {
  let card;
  let first;
  let heading;
  let tmp7;
  let wrapper;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(16);
  const tmp4 = closure_7();
  _require = tmp4;
  ({ wrapper, heading } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(tmp(1126).t.aGdB3E);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.heading) {
    let obj2 = { style: heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: first };
    const tmp9 = closure_5(tmp(5088).Heading, obj2);
    cResult[1] = tmp4.heading;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.card) {
    if (cResult[4] === tmp4.cardBody) {
      if (cResult[5] === tmp4.cardGraphic) {
        if (cResult[6] === tmp4.cardHeading) {
          let tmp11;
          if (cResult[7] === tmp4.cardLast) {
            tmp11 = cResult[8];
          }
          if (cResult[9] === tmp4.scrollerContent) {
            let tmp13;
            if (cResult[10] === tmp11) {
              tmp13 = cResult[11];
            }
            if (cResult[12] === tmp4.wrapper) {
              if (cResult[13] === tmp7) {
                let tmp17;
                if (cResult[14] === tmp13) {
                  tmp17 = cResult[15];
                }
                return tmp17;
              }
            }
            let obj3 = { style: wrapper, children: items };
            items = [tmp7, tmp13];
            const tmp20 = closure_6(View, obj3);
            cResult[12] = tmp4.wrapper;
            cResult[13] = tmp7;
            cResult[14] = tmp13;
            cResult[15] = tmp20;
            tmp17 = tmp20;
          }
          const obj4 = { itemCount: items.length, cardWidth: 324, cardMarginRight: 16, contentContainerStyle: tmp10, children: tmp11 };
          const tmp16 = closure_5(tmp(12304).MarketingCardsScroller, obj4);
          cResult[9] = tmp4.scrollerContent;
          cResult[10] = tmp11;
          cResult[11] = tmp16;
          tmp13 = tmp16;
        }
      }
    }
  }
  const mapped = items.map((getGraphic, index) => {
    let items1;
    items = [card.card, ];
    let cardLast = index === items.length - 1;
    const tmp = metroRequire;
    const tmp2 = View;
    if (cardLast) {
      cardLast = tmp3.cardLast;
    }
    const obj = { style: items, children: items1 };
    items[1] = cardLast;
    items1 = [getGraphic.getGraphic(card.cardGraphic), , ];
    const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
    const Heading = Text_Text.Heading;
    items1[1] = hasOwnProperty(Heading, obj2);
    const obj3 = { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
    const Text = Text_Text.Text;
    items1[2] = hasOwnProperty(Text, obj3);
    return tmp(tmp2, obj, index);
  });
  cResult[3] = tmp4.card;
  cResult[4] = tmp4.cardBody;
  cResult[5] = tmp4.cardGraphic;
  cResult[6] = tmp4.cardHeading;
  cResult[7] = tmp4.cardLast;
  cResult[8] = mapped;
  tmp11 = mapped;
}) : (function GuildBoostingMarketingTopPerksCards() {
  let card;
  let intl;
  let tmp = closure_7();
  _require = tmp;
  let obj = { style: tmp.wrapper, children: items };
  let obj2 = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.aGdB3E) };
  let Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items = [closure_5(Heading, obj2), ];
  let obj3 = {
    itemCount: items.length,
    cardWidth: 324,
    cardMarginRight: 16,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((getGraphic, index) => {
      let items1;
      items = [card.card, ];
      let cardLast = index === items.length - 1;
      const tmp = metroRequire;
      const tmp2 = View;
      if (cardLast) {
        cardLast = tmp3.cardLast;
      }
      const obj = { style: items, children: items1 };
      items[1] = cardLast;
      items1 = [getGraphic.getGraphic(card.cardGraphic), , ];
      const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      const Heading = Text_Text.Heading;
      items1[1] = hasOwnProperty(Heading, obj2);
      const obj3 = { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
      const Text = Text_Text.Text;
      items1[2] = hasOwnProperty(Text, obj3);
      return tmp(tmp2, obj, index);
    })
  };
  const MarketingCardsScroller = require("MarketingCardsScroller").MarketingCardsScroller;
  items[1] = closure_5(MarketingCardsScroller, obj3);
  return closure_6(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default tmp5;
