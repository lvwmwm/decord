// Module ID: 12586
// Function ID: 97335
// Name: items
// Dependencies: [31, 27, 4122, 33, 4130, 689, 1212, 12587, 5453, 12588, 12589, 4126, 11624, 2]
// Exports: default

// Module 12586 (items)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_6;
let closure_7;
let require = arg1;
({ Image: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
_createForOfIteratorHelperLoose = { wrapper: { marginTop: 50 }, heading: { marginBottom: 20, textAlign: "center" }, scrollerContent: { alignItems: "stretch", flexDirection: "row", justifyContent: "center", minWidth: "100%", paddingHorizontal: 16, paddingBottom: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, borderColor: require("_createForOfIteratorHelperLoose").colors.BORDER_SUBTLE, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, display: "flex", alignItems: "center", justifyContent: "center", marginRight: 16, padding: 24, width: 324 };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
const obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, height: 128, marginBottom: 16, overflow: "hidden", width: 211 };
_createForOfIteratorHelperLoose.cardGraphic = obj1;
_createForOfIteratorHelperLoose.cardLast = { marginRight: 0 };
_createForOfIteratorHelperLoose.cardHeading = { marginBottom: 4, textAlign: "center" };
_createForOfIteratorHelperLoose.cardBody = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let items = [
  {
    getHeadingCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.y4ft4D);
    },
    getBodyCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.HTvLGu);
    },
    getGraphic(style) {
      return callback(closure_3, { style, source: importDefault(12587) });
    }
  },
  {
    getHeadingCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.PbAyub);
    },
    getBodyCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.wOYbTv);
    },
    getGraphic(style) {
      const obj = { source: require(12588) /* items1 */, autoPlay: !useReducedMotion.useReducedMotion, style };
      return callback(importDefault(5453), obj);
    }
  },
  {
    getHeadingCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t["/bX4Jn"]);
    },
    getBodyCopy() {
      const intl = require(1212) /* getSystemLocale */.intl;
      return intl.string(require(1212) /* getSystemLocale */.t.yCjoUC);
    },
    getGraphic(style) {
      return callback(closure_3, { style, source: importDefault(12589) });
    }
  }
];
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_boosting/native/marketing_redesign/GuildBoostingMarketingTopPerksCards.tsx");

export default function GuildBoostingMarketingTopPerksCards() {
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let obj = { style: tmp.wrapper };
  obj = { style: tmp.heading, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t.aGdB3E);
  let items = [callback(require(4126) /* Text */.Text, obj), ];
  obj = {
    itemCount: items.length,
    cardWidth: 324,
    cardMarginRight: 16,
    contentContainerStyle: tmp.scrollerContent,
    children: items.map((getGraphic) => {
      let obj = {};
      const items = [tmp.card, ];
      let cardLast = arg1 === outer1_9.length - 1;
      if (cardLast) {
        cardLast = tmp.cardLast;
      }
      items[1] = cardLast;
      obj.style = items;
      const items1 = [getGraphic.getGraphic(outer1_7.cardGraphic), , ];
      obj = { style: outer1_7.cardHeading, variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: getGraphic.getHeadingCopy() };
      items1[1] = outer1_6(outer1_7(outer1_2[11]).Text, obj);
      obj = { style: outer1_7.cardBody, variant: "text-sm/normal", color: "text-default", children: getGraphic.getBodyCopy() };
      items1[2] = outer1_6(outer1_7(outer1_2[11]).Text, obj);
      obj.children = items1;
      return outer1_7(outer1_4, obj, arg1);
    })
  };
  items[1] = callback(require(11624) /* getClampedIndex */.MarketingCardsScroller, obj);
  obj.children = items;
  return callback2(closure_4, obj);
};
