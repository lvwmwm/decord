// Module ID: 12607
// Function ID: 97428
// Name: PremiumPaymentGuildAnimation
// Dependencies: [57, 31, 27, 1838, 6671, 33, 4130, 689, 12608, 12609, 566, 4066, 4561, 1212, 4471, 4966, 4554, 668, 3976, 12610, 12611, 4126, 2]
// Exports: default

// Module 12607 (PremiumPaymentGuildAnimation)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import { Gradients } from "items";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_9;
const require = arg1;
class PremiumPaymentGuildAnimation {
  constructor(arg0) {
    ({ nextScene, onSceneComplete, loop } = global);
    tmp = c11();
    obj = { nextScene, onSceneComplete, loop, sceneSegments: idle, style: tmp.animation };
    tmp2 = require("_isNativeReflectConstruct");
    obj.source = require("items");
    return jsx(tmp2, obj);
  }
}
({ View: closure_5, Image: closure_6 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = { wrapper: { paddingHorizontal: 24, paddingBottom: 16, paddingTop: 4, alignItems: "stretch" }, animation: { width: "auto", height: 112, alignSelf: "center" }, text: { lineHeight: 18, textAlign: "center" } };
_createForOfIteratorHelperLoose = { padding: 2, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs, marginTop: 8 };
_createForOfIteratorHelperLoose.activated = _createForOfIteratorHelperLoose;
let obj1 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, paddingVertical: 12, paddingHorizontal: 20, alignItems: "center" };
_createForOfIteratorHelperLoose.activatedBackground = obj1;
_createForOfIteratorHelperLoose.activatedImage = { width: 220 };
_createForOfIteratorHelperLoose.successInfo = { marginTop: 24 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { ENTRY: "entry", IDLE: "idle" };
let closure_12 = { [obj2.ENTRY]: { BEG: 0, END: 180 }, [obj2.IDLE]: { BEG: 180, END: 360 } };
PremiumPaymentGuildAnimation.Scenes = obj2;
const result = require("get ActivityIndicator").fileFinishedImporting("components_native/premium/premium_guild_subscribe_modal/SubscribeModalSuccessAlert.tsx");

export default function SubscribeModalSuccessAlert(arg0) {
  let guildBoostSlots;
  let require;
  ({ guildId: require, guildBoostSlots } = arg0);
  let importDefault;
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(566) /* initialize */;
  const items = [closure_7];
  let someResult = null != guildBoostSlots;
  const stateFromStores = obj.useStateFromStores(items, () => outer1_7.getGuild(closure_0));
  if (someResult) {
    someResult = guildBoostSlots.some((premiumGuildSubscription) => null != premiumGuildSubscription.premiumGuildSubscription);
  }
  let length;
  if (null != guildBoostSlots) {
    length = guildBoostSlots.length;
  }
  let num = 1;
  if (null != length) {
    num = length;
  }
  const tmp5 = callback(React.useState(PremiumPaymentGuildAnimation.Scenes.ENTRY), 2);
  importDefault = tmp5[1];
  const tmp6 = callback(React.useState(false), 2);
  dependencyMap = tmp6[1];
  obj = { style: tmp.wrapper };
  const tmp7 = importDefault(4066)();
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl.string(require(1212) /* getSystemLocale */.t.YKxJCI);
  obj.onConfirm = function onConfirm() {
    callback(4471).close();
    const obj = callback(4471);
    outer1_0(4966).closeApplyBoostModal();
  };
  obj = {
    nextScene: tmp5[0],
    loop: tmp6[0],
    onSceneComplete(currentScene) {
      if (outer1_13.Scenes.ENTRY === currentScene) {
        return callback(outer1_13.Scenes.IDLE);
      } else if (outer1_13.Scenes.IDLE === currentScene) {
        return dependencyMap(true);
      }
    }
  };
  const items1 = [callback2(PremiumPaymentGuildAnimation, obj), ];
  const obj1 = {};
  const obj2 = { style: tmp.activated };
  const tmp11 = callback2;
  const tmp9 = importDefault(4561);
  obj2.start = require(668) /* keys */.HorizontalGradient.START;
  obj2.end = require(668) /* keys */.HorizontalGradient.END;
  obj2.colors = Gradients.PREMIUM_GUILD;
  const obj3 = { style: tmp.activatedBackground };
  const obj4 = { style: tmp.activatedImage };
  let obj7 = require(3976) /* AccessibilityAnnouncer */;
  if (obj7.isThemeLight(tmp7)) {
    let tmp16Result = tmp16(12610);
  } else {
    tmp16Result = tmp16(12611);
  }
  obj4.source = tmp16Result;
  obj3.children = callback2(closure_6, obj4);
  obj2.children = callback2(closure_5, obj3);
  const items2 = [tmp11(importDefault(4554), obj2), ];
  const obj5 = { style: tmp.successInfo };
  const obj6 = { style: tmp.text, variant: "text-sm/medium" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  const string = intl2.string;
  const t = require(1212) /* getSystemLocale */.t;
  if (someResult) {
    let stringResult = string(t.RMmWY3);
  } else {
    stringResult = string(t.d81BkZ);
  }
  obj6.children = stringResult;
  const items3 = [callback2(require(4126) /* Text */.Text, obj6), ];
  obj7 = { style: tmp.text, variant: "text-sm/medium" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const obj8 = { guildName: stateFromStores.name, guildSubscriptionQuantity: num };
  obj7.children = intl3.format(require(1212) /* getSystemLocale */.t.r0IGsP, obj8);
  items3[1] = callback2(require(4126) /* Text */.Text, obj7);
  obj5.children = items3;
  items2[1] = closure_10(closure_5, obj5);
  obj1.children = items2;
  items1[1] = closure_10(closure_5, obj1);
  obj.children = items1;
  return closure_10(tmp9, obj);
};
