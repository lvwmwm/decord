// Module ID: 16436
// Function ID: 128181
// Name: HowItWorksCard
// Dependencies: [31, 27, 33, 4130, 689, 4126, 5085, 1212, 16437, 1273, 16438, 16439, 2]
// Exports: default

// Module 16436 (HowItWorksCard)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
function HowItWorksCard(iconSource) {
  let cardNumber;
  let description;
  ({ cardNumber, description } = iconSource);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.card, accessible: true, accessibilityLabel: "" + cardNumber + " - " + description };
  obj = { style: tmp.cardNumber, variant: "text-xs/bold", color: "text-overlay-light", children: cardNumber };
  const items = [callback(require(4126) /* Text */.Text, obj), , ];
  obj = { style: tmp.container, children: callback(importDefault(5085), obj1) };
  items[1] = callback(View, obj);
  const obj2 = { style: tmp.howItWorksCardDescription, variant: "text-sm/normal", color: "mobile-text-heading-primary", children: description };
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  return callback2(View, obj);
}
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { flex: 1 }, horizontalContainer: { flex: 1, flexDirection: "row" } };
_createForOfIteratorHelperLoose = { flex: 1, marginVertical: 6, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH, alignItems: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.card = _createForOfIteratorHelperLoose;
let obj1 = { width: 18, height: 18, position: "absolute", top: 9, start: 9, textAlign: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BRAND, borderRadius: 9, overflow: "hidden" };
_createForOfIteratorHelperLoose.cardNumber = obj1;
let obj2 = { width: "100%", paddingHorizontal: 18, paddingVertical: 8, textAlign: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_NORMAL, borderBottomStartRadius: 8, borderBottomEndRadius: 8, overflow: "hidden" };
_createForOfIteratorHelperLoose.howItWorksCardDescription = obj2;
_createForOfIteratorHelperLoose.howItWorksCardIcon = { marginVertical: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/welcome/HowItWorksSection.tsx");

export default function HowItWorksSection() {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = { style: tmp.container };
  obj = { style: tmp.horizontalContainer };
  obj = { cardNumber: 1 };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.description = intl.string(require(1212) /* getSystemLocale */.t.lT0ZNS);
  obj.iconSource = importDefault(16437);
  const items = [callback(HowItWorksCard, obj), callback(require(1273) /* Button */.Spacer, { size: 12 }), ];
  const obj1 = { cardNumber: 2 };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.description = intl2.string(require(1212) /* getSystemLocale */.t.ihN2Wb);
  obj1.iconSource = importDefault(16438);
  items[2] = callback(HowItWorksCard, obj1);
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj2 = { cardNumber: 3 };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.description = intl3.string(require(1212) /* getSystemLocale */.t.c8krDQ);
  obj2.iconSource = importDefault(16439);
  items1[1] = callback(HowItWorksCard, obj2);
  obj.children = items1;
  return callback2(View, obj);
};
