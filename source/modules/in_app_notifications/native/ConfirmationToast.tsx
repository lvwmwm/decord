// Module ID: 10389
// Function ID: 80114
// Name: ConfirmationToast
// Dependencies: [31, 27, 10267, 1852, 33, 4130, 689, 10307, 3991, 4560, 4131, 5151, 1392, 4091, 4126, 2]
// Exports: ConfirmationToast

// Module 10389 (ConfirmationToast)
import "result";
import { View } from "get ActivityIndicator";
import set from "set";
import { EMOJI_URL_BASE_SIZE } from "set";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import set from "set";

let closure_4;
let closure_5;
let closure_7;
let closure_8;
const require = arg1;
({ extrapolateConfig: closure_4, PAN_INPUT_RANGE: closure_5 } = set);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { alignItems: "center", justifyContent: "center", marginTop: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = {};
const merged = Object.assign(require("_createForOfIteratorHelperLoose").shadows.SHADOW_HIGH);
obj1["flexDirection"] = "row";
obj1["alignItems"] = "center";
obj1["justifyContent"] = "center";
obj1["gap"] = require("_createForOfIteratorHelperLoose").space.PX_8;
obj1["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.MOBILE_ALERT_BACKGROUND_DEFAULT;
obj1["paddingStart"] = require("_createForOfIteratorHelperLoose").space.PX_8;
obj1["paddingEnd"] = require("_createForOfIteratorHelperLoose").space.PX_12;
obj1["paddingVertical"] = require("_createForOfIteratorHelperLoose").space.PX_8;
obj1["borderRadius"] = require("_createForOfIteratorHelperLoose").radii.round;
obj1["overflow"] = "hidden";
_createForOfIteratorHelperLoose.notificationRow = obj1;
_createForOfIteratorHelperLoose.textEmoji = { fontSize: 20 };
_createForOfIteratorHelperLoose.imageEmoji = { width: 20, height: 20 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_10 = { code: "function ConfirmationToastTsx1(){const{animatedValue,interpolate,notificationGestureY,PAN_INPUT_RANGE,extrapolateConfig}=this.__closure;const value=animatedValue.get();const scale=interpolate(value,[0,1],[0.8,1]);const enterTranslateY=interpolate(value,[0,1],[-20,0]);const gestureY=notificationGestureY.get();const dismissOpacity=interpolate(gestureY,PAN_INPUT_RANGE,[0,1,0],extrapolateConfig);return{transform:[{translateY:enterTranslateY+gestureY},{scale:scale}],opacity:value*dismissOpacity};}" };
let result = set.fileFinishedImporting("modules/in_app_notifications/native/ConfirmationToast.tsx");

export const ConfirmationToast = function ConfirmationToast(reaction) {
  reaction = reaction.reaction;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = notificationGestureY(10307);
  notificationGestureY = obj.useInAppNotificationContext().notificationGestureY;
  let obj1 = notificationGestureY(3991);
  const sharedValue = obj1.useSharedValue(0);
  sharedValue(4560)(() => {
    const result = sharedValue.set(notificationGestureY(outer1_2[10]).withTiming(1, { duration: 200 }));
  });
  let obj2 = notificationGestureY(3991);
  class A {
    constructor() {
      value = closure_1.get();
      obj = notificationGestureY(outer1_2[8]);
      interpolateResult = obj.interpolate(value, [0, 1], [0.8, 1]);
      obj2 = notificationGestureY(outer1_2[8]);
      items = [, ];
      items[0] = -20;
      items[1] = 0;
      interpolateResult1 = obj2.interpolate(value, [0, 1], items);
      value1 = notificationGestureY.get();
      obj = { transform: items1 };
      obj1 = { translateY: interpolateResult1 + value1 };
      items1 = [, ];
      items1[0] = obj1;
      items1[1] = { scale: interpolateResult };
      obj5 = notificationGestureY(outer1_2[8]);
      obj.opacity = value * obj5.interpolate(value1, outer1_5, [0, 1, 0], outer1_4);
      return obj;
    }
  }
  obj = { animatedValue: sharedValue, interpolate: notificationGestureY(3991).interpolate, notificationGestureY, PAN_INPUT_RANGE: closure_5, extrapolateConfig: closure_4 };
  A.__closure = obj;
  A.__workletHash = 4654280152495;
  A.__initData = closure_10;
  const animatedStyle = obj2.useAnimatedStyle(A);
  const style = [tmp.container, animatedStyle];
  obj = { style: tmp.notificationRow };
  if (null != reaction) {
    obj1 = {};
    ({ textEmoji: obj7.textEmojiStyle, imageEmoji: obj7.fastImageStyle } = tmp);
    let str2 = "";
    if (null == reaction.id) {
      str2 = reaction.surrogates;
    }
    obj1.name = str2;
    if (null != reaction.id) {
      obj2 = {};
      ({ id: obj9.id, animated: obj9.animated } = reaction);
      reaction = EMOJI_URL_BASE_SIZE;
      obj2.size = EMOJI_URL_BASE_SIZE;
      let url = sharedValue(1392).getEmojiURL(obj2);
      const obj8 = sharedValue(1392);
    } else {
      url = reaction.url;
    }
    obj1.src = url;
    callback(sharedValue(5151), obj1);
    const tmp11 = callback;
    const tmp14 = sharedValue(5151);
  } else {
    const obj3 = { size: "md", color: sharedValue(689).colors.STATUS_POSITIVE };
    let items1 = [callback(notificationGestureY(4091).CircleCheckIcon, obj3), ];
    const obj4 = { variant: "text-sm/semibold", color: "text-default", children: reaction.message };
    items1[1] = callback(notificationGestureY(4126).Text, obj4);
    obj.children = items1;
    class A {
      constructor() {
        value = closure_1.get();
        obj = notificationGestureY(outer1_2[8]);
        interpolateResult = obj.interpolate(value, [0, 1], [0.8, 1]);
        obj2 = notificationGestureY(outer1_2[8]);
        items = [, ];
        items[0] = -20;
        items[1] = 0;
        interpolateResult1 = obj2.interpolate(value, [0, 1], items);
        value1 = notificationGestureY.get();
        obj = { transform: items1 };
        obj1 = { translateY: interpolateResult1 + value1 };
        items1 = [, ];
        items1[0] = obj1;
        items1[1] = { scale: interpolateResult };
        obj5 = notificationGestureY(outer1_2[8]);
        obj.opacity = value * obj5.interpolate(value1, outer1_5, [0, 1, 0], outer1_4);
        return obj;
      }
    }
    return callback(tmp6, { style });
  }
};
