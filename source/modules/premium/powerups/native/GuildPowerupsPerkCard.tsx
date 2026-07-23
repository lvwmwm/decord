// Module ID: 11604
// Function ID: 90179
// Name: GuildPowerupsPerkCard
// Dependencies: [31, 27, 33, 4130, 689, 4066, 3976, 11601, 11556, 4554, 4126, 11557, 1273, 1212, 2]
// Exports: default

// Module 11604 (GuildPowerupsPerkCard)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.card = { padding: 0, overflow: "hidden" };
_createForOfIteratorHelperLoose.contentContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.imageContainer = { width: "100%", height: 160 };
_createForOfIteratorHelperLoose.gradient = { position: "absolute", left: 0, right: 0, top: 0, height: "100%" };
let obj1 = { gap: require("_createForOfIteratorHelperLoose").space.PX_16, padding: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.headerContainer = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
const obj2 = { gap: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.badge = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_12, right: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj3 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_12, right: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default function GuildPowerupsPerkCard(arg0) {
  let badge;
  let description;
  let imageUrl;
  let isImageAnimated;
  let onPress;
  let riveComponent;
  let status;
  let style;
  let title;
  ({ imageUrl, isImageAnimated } = arg0);
  ({ title, description } = arg0);
  if (isImageAnimated === undefined) {
    isImageAnimated = true;
  }
  ({ riveComponent, status, badge } = arg0);
  let obj = { title: 0, description: 0, imageUrl: 0, isImageAnimated: 0, riveComponent: 0, style: 0, onPress: 0, status: 0, badge: 0 };
  ({ style, onPress } = arg0);
  Object.setPrototypeOf(null);
  const merged = Object.assign(arg0, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  let obj1 = require(3976) /* AccessibilityAnnouncer */;
  const tmp4 = importDefault(4066)();
  obj = { containerStyle: items, style: tmp3.card, status, onPress };
  items = [tmp3.container, style];
  obj = { style: tmp3.imageContainer };
  const tmp5 = obj1.isThemeDark(importDefault(4066)()) ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  if (null == riveComponent) {
    obj1 = {};
    let str = "";
    if (null != imageUrl) {
      str = imageUrl;
    }
    obj1.imageUrl = str;
    obj1.isAnimated = isImageAnimated;
    riveComponent = callback(importDefault(11556), obj1);
    const tmp12 = importDefault(11556);
    const tmp9 = callback;
  }
  const items1 = [riveComponent, callback(importDefault(4554), { colors: tmp5, style: tmp3.gradient })];
  obj.children = items1;
  const items2 = [callback2(View, obj), , , ];
  const obj3 = { style: tmp3.contentContainer };
  const obj4 = { style: tmp3.headerContainer };
  const items3 = [callback(require(4126) /* Text */.Text, { variant: "heading-md/bold", children: title }), callback(require(4126) /* Text */.Text, { variant: "text-sm/medium", children: description })];
  obj4.children = items3;
  const items4 = [callback2(View, obj4), ];
  const obj5 = {};
  const merged1 = Object.assign(merged);
  obj5["status"] = status;
  items4[1] = callback(require(11557) /* GuildPowerupCardFooterActive */.GuildPowerupsCardFooter, obj5);
  obj3.children = items4;
  items2[1] = callback2(View, obj3);
  let tmp14 = "new" === badge;
  if (tmp14) {
    const obj6 = {};
    const intl = require(1212) /* getSystemLocale */.intl;
    obj6.text = intl.string(require(1212) /* getSystemLocale */.t.y2b7CA);
    obj6.style = tmp3.badge;
    tmp14 = callback(require(1273) /* Button */.TextBadge, obj6);
  }
  items2[2] = tmp14;
  let tmp18 = "beta" === badge;
  if (tmp18) {
    const obj7 = {};
    const intl2 = require(1212) /* getSystemLocale */.intl;
    obj7.text = intl2.string(require(1212) /* getSystemLocale */.t.oW0eUd);
    obj7.color = require(1273) /* Button */.BadgeColors.BRAND;
    obj7.style = tmp3.badge;
    tmp18 = callback(require(1273) /* Button */.TextBadge, obj7);
  }
  items2[3] = tmp18;
  obj.children = items2;
  return callback2(importDefault(11601), obj);
};
