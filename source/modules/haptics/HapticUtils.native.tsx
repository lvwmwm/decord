// Module ID: 4100
// Function ID: 33967
// Name: getAndroidLightImpactEffect
// Dependencies: [4101, 4102, 477, 4111, 2]
// Exports: triggerHapticFeedback

// Module 4100 (getAndroidLightImpactEffect)
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
  if (importDefault(4101).IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj37 = require(4102) /* useHaptics */;
    let str32 = "selection";
    if (obj38.isAndroid()) {
      str32 = getAndroidLightImpactEffect();
    }
    obj37.trigger(str32);
    obj38 = require(477) /* set */;
  } else if (importDefault(4101).IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj35 = require(4102) /* useHaptics */;
    let str31 = "impactMedium";
    if (obj36.isAndroid()) {
      str31 = getAndroidLightImpactEffect();
    }
    obj35.trigger(str31);
    obj36 = require(477) /* set */;
  } else if (importDefault(4101).IMPACT_HEAVY === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("impactHeavy");
    const obj34 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).NOTIFICATION_ERROR === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("notificationError");
    const obj33 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj31 = require(4102) /* useHaptics */;
    let str28 = "impactHeavy";
    if (obj32.isAndroid()) {
      str28 = "impactMedium";
    }
    obj31.trigger(str28);
    obj32 = require(477) /* set */;
  } else if (importDefault(4101).DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj29 = require(4102) /* useHaptics */;
    let str27 = "notificationSuccess";
    if (obj30.isAndroid()) {
      str27 = getAndroidLightImpactEffect();
    }
    obj29.trigger(str27);
    obj30 = require(477) /* set */;
  } else if (importDefault(4101).DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj27 = require(4102) /* useHaptics */;
    let str26 = "impactMedium";
    if (obj28.isAndroid()) {
      str26 = getAndroidLightImpactEffect();
    }
    obj27.trigger(str26);
    obj28 = require(477) /* set */;
  } else if (importDefault(4101).SOFT === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("soft");
    const obj26 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).SELECTION === IMPACT_LIGHT) {
    const obj24 = require(4102) /* useHaptics */;
    let str24 = "selection";
    if (obj25.isAndroid()) {
      str24 = getAndroidLightImpactEffect();
    }
    obj24.trigger(str24);
    obj25 = require(477) /* set */;
  } else if (importDefault(4101).RIGID === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("rigid");
    const obj23 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("notificationSuccess");
    const obj22 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).NOTIFICATION_WARNING === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("notificationWarning");
    const obj21 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).CONFIRM === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("confirm");
    const obj20 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).REJECT === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("reject");
    const obj19 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).GESTURE_START === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("gestureStart");
    const obj18 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).GESTURE_END === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("gestureEnd");
    const obj17 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).SEGMENT_TICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("segmentTick");
    const obj16 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("segmentFrequentTick");
    const obj15 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).TOGGLE_ON === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("toggleOn");
    const obj14 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).TOGGLE_OFF === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("toggleOff");
    const obj13 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).CLOCK_TICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("clockTick");
    const obj12 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).CONTEXT_CLICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("contextClick");
    const obj11 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).KEYBOARD_PRESS === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("keyboardPress");
    const obj10 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).KEYBOARD_RELEASE === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("keyboardRelease");
    const obj9 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).KEYBOARD_TAP === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("keyboardTap");
    const obj8 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).LONG_PRESS === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("longPress");
    const obj7 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("textHandleMove");
    const obj6 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).VIRTUAL_KEY === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("virtualKey");
    const obj5 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("virtualKeyRelease");
    const obj4 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).EFFECT_CLICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("effectClick");
    const obj3 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("effectDoubleClick");
    const obj2 = require(4102) /* useHaptics */;
  } else if (importDefault(4101).EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("effectHeavyClick");
    const obj = require(4102) /* useHaptics */;
  } else if (importDefault(4101).EFFECT_TICK === IMPACT_LIGHT) {
    require(4102) /* useHaptics */.trigger("effectTick");
    const obj39 = require(4102) /* useHaptics */;
  }
};
