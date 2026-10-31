// Module ID: 15487
// Function ID: 15488
// Name: GuildBoostingMarketingTopPerksCards
// Dependencies: [19, 17, 5015, 21, 5014, 575, 1113, 5717, 15488, 5618, 15489, 15490, 5624, 14123, 2]
// Exports: default

// Module 15487 (GuildBoostingMarketingTopPerksCards)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5618 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import AssetRegistryDefault from "AssetRegistry" /* 15488 */;
import _mod15489 from "module_15489" /* 15489 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 15490 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5015 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
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
      const obj = { source: _mod15489, autoPlay: !AccessibilityStore.useReducedMotion, style };
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
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
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
};
