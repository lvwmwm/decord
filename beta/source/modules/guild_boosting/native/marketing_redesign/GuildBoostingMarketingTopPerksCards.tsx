// Module ID: 13142
// Function ID: 13143
// Name: GuildBoostingMarketingTopPerksCards
// Dependencies: [19, 17, 4825, 21, 4836, 576, 1115, 13143, 5841, 13144, 13145, 4832, 12060, 2]
// Exports: default

// Module 13142 (GuildBoostingMarketingTopPerksCards)
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import LottieAnimationViewDefault from "LottieAnimationView" /* 5841 */;
import AssetRegistryDefault from "AssetRegistry" /* 13143 */;
import _mod13144 from "module_13144" /* 13144 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13145 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let size;
({ Image: c3, View: closure_4 } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 }, card: obj2, cardGraphic: size, cardLast: { marginRight: 0 }, cardHeading: { marginBottom: 4, textAlign: "center" }, cardBody: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: nativeDefault.radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
createStyles = createStyles.createStyles;
size = { borderRadius: nativeDefault.radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
let closure_8 = createStyles(obj);
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
    return metroRequire(_false, obj);
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
      const obj = { source: _mod13144, autoPlay: !AccessibilityStore.useReducedMotion, style };
      const tmp = LottieAnimationViewDefault;
      return metroRequire(tmp, obj);
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
      return metroRequire(_false, obj);
    }
  }
];
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  let card;
  let intl;
  let tmp = closure_8();
  _require = tmp;
  let obj = { style: tmp.wrapper, children: items };
  let obj2 = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(require("intl").t.aGdB3E) };
  let Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items = [closure_6(Heading, obj2), ];
  let obj3 = {
    itemCount: items.length,
    cardWidth: 324,
    cardMarginRight: 16,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((getGraphic, index) => {
      let items1;
      items = [card.card, ];
      let cardLast = index === items.length - 1;
      const tmp = metroImportDefault;
      const tmp2 = React3;
      if (cardLast) {
        cardLast = tmp3.cardLast;
      }
      const obj = { style: items, children: items1 };
      items[1] = cardLast;
      items1 = [getGraphic.getGraphic(card.cardGraphic), , ];
      const obj2 = { style: card.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      const Heading = Text_Text.Heading;
      items1[1] = metroRequire(Heading, obj2);
      const obj3 = { style: card.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
      const Text = Text_Text.Text;
      items1[2] = metroRequire(Text, obj3);
      return tmp(tmp2, obj, index);
    })
  };
  const MarketingCardsScroller = require("MarketingCardsScroller").MarketingCardsScroller;
  items[1] = closure_6(MarketingCardsScroller, obj3);
  return closure_7(closure_4, obj);
};
