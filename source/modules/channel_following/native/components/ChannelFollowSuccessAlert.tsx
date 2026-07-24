// Module ID: 10406
// Function ID: 80235
// Name: items
// Dependencies: [31, 27, 33, 10407, 10408, 10409, 10410, 10411, 10412, 1212, 4130, 4066, 3976, 6679, 22, 4561, 4126, 2]
// Exports: default

// Module 10406 (items)
import "result";
import { Image } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let items = [require("registerAsset"), require("registerAsset"), require("registerAsset")];
let items1 = [require("registerAsset"), require("registerAsset"), require("registerAsset")];
const items2 = [
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["w2o/60"]);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.FiAvKg);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.vKUFek);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.veQl5T);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.Pxb7BR);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["W03w++"]);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["95HTb5"]);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t["+XFelz"]);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.hedHel);
  },
  () => {
    const intl = require(1212) /* getSystemLocale */.intl;
    return intl.string(require(1212) /* getSystemLocale */.t.jgC65t);
  }
];
let closure_9 = _createForOfIteratorHelperLoose.createStyles({ text: { marginTop: 16, lineHeight: 20, textAlign: "center" }, header: { textAlign: "center" }, image: { alignSelf: "center", marginTop: -72, marginBottom: 16, width: "100%", resizeMode: "contain" } });
const result = require("jsxProd").fileFinishedImporting("modules/channel_following/native/components/ChannelFollowSuccessAlert.tsx");

export default function ChannelFollowSuccessAlert(arg0) {
  const tmp = callback3();
  let obj = require(3976) /* AccessibilityAnnouncer */;
  const tmp3 = obj.isThemeDark(importDefault(4066)()) ? items1 : items;
  require = tmp3;
  let obj1 = require(6679) /* useForceUpdate */;
  items = [tmp3];
  const stableMemo = obj1.useStableMemo(() => outer1_1(outer1_2[14]).sample(closure_0), items);
  let obj2 = require(6679) /* useForceUpdate */;
  const stableMemo1 = obj2.useStableMemo(() => outer1_1(outer1_2[14]).sample(outer1_8), []);
  obj = {};
  const tmp2 = importDefault(4066)();
  const merged = Object.assign(arg0);
  const intl = require(1212) /* getSystemLocale */.intl;
  obj["confirmText"] = intl.string(require(1212) /* getSystemLocale */.t["+IrDzN"]);
  obj = { source: stableMemo, style: tmp.image };
  items1 = [callback(Image, obj), , ];
  obj1 = { style: tmp.header, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: stableMemo1() };
  items1[1] = callback(require(4126) /* Text */.Text, obj1);
  obj2 = { style: tmp.text, variant: "text-md/medium", color: "text-muted" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t["2QbSea"]);
  items1[2] = callback(require(4126) /* Text */.Text, obj2);
  obj["children"] = items1;
  return callback2(importDefault(4561), obj);
};
