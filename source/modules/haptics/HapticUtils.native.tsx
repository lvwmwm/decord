// Module ID: 4099
// Function ID: 33954
// Name: getAndroidLightImpactEffect
// Dependencies: [4100, 4101, 477, 4110, 2]
// Exports: triggerHapticFeedback

// Module 4099 (getAndroidLightImpactEffect)
function getAndroidLightImpactEffect() {
  let str = "effectTick";
  if (parseInt(obj.getSystemVersion()) < 29) {
    str = "impactLight";
  }
  return str;
}
const result = require("set").fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = require("IMPACT_LIGHT");
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (importDefault(4100).IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj37 = require(4101) /* useHaptics */;
    let str32 = "selection";
    if (obj38.isAndroid()) {
      str32 = getAndroidLightImpactEffect();
    }
    obj37.trigger(str32);
    obj38 = require(477) /* set */;
  } else if (importDefault(4100).IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj35 = require(4101) /* useHaptics */;
    let str31 = "impactMedium";
    if (obj36.isAndroid()) {
      str31 = getAndroidLightImpactEffect();
    }
    obj35.trigger(str31);
    obj36 = require(477) /* set */;
  } else if (importDefault(4100).IMPACT_HEAVY === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("impactHeavy");
    const obj34 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).NOTIFICATION_ERROR === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("notificationError");
    const obj33 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj31 = require(4101) /* useHaptics */;
    let str28 = "impactHeavy";
    if (obj32.isAndroid()) {
      str28 = "impactMedium";
    }
    obj31.trigger(str28);
    obj32 = require(477) /* set */;
  } else if (importDefault(4100).DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj29 = require(4101) /* useHaptics */;
    let str27 = "notificationSuccess";
    if (obj30.isAndroid()) {
      str27 = getAndroidLightImpactEffect();
    }
    obj29.trigger(str27);
    obj30 = require(477) /* set */;
  } else if (importDefault(4100).DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj27 = require(4101) /* useHaptics */;
    let str26 = "impactMedium";
    if (obj28.isAndroid()) {
      str26 = getAndroidLightImpactEffect();
    }
    obj27.trigger(str26);
    obj28 = require(477) /* set */;
  } else if (importDefault(4100).SOFT === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("soft");
    const obj26 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).SELECTION === IMPACT_LIGHT) {
    const obj24 = require(4101) /* useHaptics */;
    let str24 = "selection";
    if (obj25.isAndroid()) {
      str24 = getAndroidLightImpactEffect();
    }
    obj24.trigger(str24);
    obj25 = require(477) /* set */;
  } else if (importDefault(4100).RIGID === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("rigid");
    const obj23 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("notificationSuccess");
    const obj22 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).NOTIFICATION_WARNING === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("notificationWarning");
    const obj21 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).CONFIRM === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("confirm");
    const obj20 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).REJECT === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("reject");
    const obj19 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).GESTURE_START === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("gestureStart");
    const obj18 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).GESTURE_END === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("gestureEnd");
    const obj17 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).SEGMENT_TICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("segmentTick");
    const obj16 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("segmentFrequentTick");
    const obj15 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).TOGGLE_ON === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("toggleOn");
    const obj14 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).TOGGLE_OFF === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("toggleOff");
    const obj13 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).CLOCK_TICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("clockTick");
    const obj12 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).CONTEXT_CLICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("contextClick");
    const obj11 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).KEYBOARD_PRESS === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("keyboardPress");
    const obj10 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).KEYBOARD_RELEASE === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("keyboardRelease");
    const obj9 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).KEYBOARD_TAP === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("keyboardTap");
    const obj8 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).LONG_PRESS === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("longPress");
    const obj7 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("textHandleMove");
    const obj6 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).VIRTUAL_KEY === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("virtualKey");
    const obj5 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("virtualKeyRelease");
    const obj4 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).EFFECT_CLICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("effectClick");
    const obj3 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("effectDoubleClick");
    const obj2 = require(4101) /* useHaptics */;
  } else if (importDefault(4100).EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("effectHeavyClick");
    const obj = require(4101) /* useHaptics */;
  } else if (importDefault(4100).EFFECT_TICK === IMPACT_LIGHT) {
    require(4101) /* useHaptics */.trigger("effectTick");
    const obj39 = require(4101) /* useHaptics */;
  }
};
