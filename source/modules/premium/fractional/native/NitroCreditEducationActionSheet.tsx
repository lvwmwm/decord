// Module ID: 12482
// Function ID: 96765
// Name: NitroCreditEducationActionSheet
// Dependencies: [27, 653, 33, 4131, 689, 5187, 6673, 4127, 1212, 1921, 2]
// Exports: default

// Module 12482 (NitroCreditEducationActionSheet)
import { View } from "get ActivityIndicator";
import { HelpdeskArticles } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let obj = { container: { marginTop: 32, marginHorizontal: 30 } };
obj = { flexDirection: "row", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, justifyContent: "center", borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, marginBottom: 12 };
obj.aboutContainer = obj;
obj.warningIcon = { margin: 16 };
obj.aboutTextContainer = { justifyContent: "center", flex: 1, marginRight: 30 };
obj.helpdeskText = { textAlign: "center", marginBottom: 24 };
let closure_7 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("jsxProd").fileFinishedImporting("modules/premium/fractional/native/NitroCreditEducationActionSheet.tsx");

export default function NitroCreditEducationActionSheet(aboutText) {
  const tmp = callback3();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.aboutContainer };
  const items = [callback(require(6673) /* CircleErrorIcon */.CircleErrorIcon, { size: "lg", style: tmp.warningIcon }), ];
  const obj3 = { variant: "text-sm/medium", color: "text-overlay-light", children: aboutText.aboutText };
  items[1] = callback(View, { style: tmp.aboutTextContainer, children: callback(require(4127) /* Text */.Text, obj3) });
  obj.children = items;
  const items1 = [callback2(View, obj), ];
  const obj4 = { variant: "text-sm/medium", color: "text-overlay-light", style: tmp.helpdeskText };
  const intl = require(1212) /* getSystemLocale */.intl;
  const obj5 = {};
  const obj1 = { size: "lg", style: tmp.warningIcon };
  const obj2 = { style: tmp.aboutTextContainer, children: callback(require(4127) /* Text */.Text, obj3) };
  obj5.helpCenterLink = importDefault(1921).getArticleURL(HelpdeskArticles.FRACTIONAL_PREMIUM_ABOUT);
  obj4.children = intl.format(require(1212) /* getSystemLocale */.t.bg3jBj, obj5);
  items1[1] = callback(require(4127) /* Text */.Text, obj4);
  obj.children = items1;
  obj.children = callback2(View, obj);
  return callback(require(5187) /* Background */.BottomSheet, obj);
};
