// Module ID: 4097
// Function ID: 33943
// Name: getAndroidLightImpactEffect
// Dependencies: []
// Exports: triggerHapticFeedback

// Module 4097 (getAndroidLightImpactEffect)
function getAndroidLightImpactEffect() {
  let str = "effectTick";
  if (parseInt(obj.getSystemVersion()) < 29) {
    str = "impactLight";
  }
  return str;
}
const _module = require(dependencyMap[4]);
const result = _module.fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = importDefault(dependencyMap[0]);
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (importDefault(dependencyMap[0]).IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj37 = require(dependencyMap[1]);
    let str32 = "selection";
    if (obj38.isAndroid()) {
      str32 = getAndroidLightImpactEffect();
    }
    obj37.trigger(str32);
    const obj38 = require(dependencyMap[2]);
  } else if (importDefault(dependencyMap[0]).IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj35 = require(dependencyMap[1]);
    let str31 = "impactMedium";
    if (obj36.isAndroid()) {
      str31 = getAndroidLightImpactEffect();
    }
    obj35.trigger(str31);
    const obj36 = require(dependencyMap[2]);
  } else if (importDefault(dependencyMap[0]).IMPACT_HEAVY === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("impactHeavy");
    const obj34 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).NOTIFICATION_ERROR === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("notificationError");
    const obj33 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj31 = require(dependencyMap[1]);
    let str28 = "impactHeavy";
    if (obj32.isAndroid()) {
      str28 = "impactMedium";
    }
    obj31.trigger(str28);
    const obj32 = require(dependencyMap[2]);
  } else if (importDefault(dependencyMap[0]).DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj29 = require(dependencyMap[1]);
    let str27 = "notificationSuccess";
    if (obj30.isAndroid()) {
      str27 = getAndroidLightImpactEffect();
    }
    obj29.trigger(str27);
    const obj30 = require(dependencyMap[2]);
  } else if (importDefault(dependencyMap[0]).DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj27 = require(dependencyMap[1]);
    let str26 = "impactMedium";
    if (obj28.isAndroid()) {
      str26 = getAndroidLightImpactEffect();
    }
    obj27.trigger(str26);
    const obj28 = require(dependencyMap[2]);
  } else if (importDefault(dependencyMap[0]).SOFT === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("soft");
    const obj26 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).SELECTION === IMPACT_LIGHT) {
    const obj24 = require(dependencyMap[1]);
    let str24 = "selection";
    if (obj25.isAndroid()) {
      str24 = getAndroidLightImpactEffect();
    }
    obj24.trigger(str24);
    const obj25 = require(dependencyMap[2]);
  } else if (importDefault(dependencyMap[0]).RIGID === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("rigid");
    const obj23 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("notificationSuccess");
    const obj22 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).NOTIFICATION_WARNING === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("notificationWarning");
    const obj21 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).CONFIRM === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("confirm");
    const obj20 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).REJECT === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("reject");
    const obj19 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).GESTURE_START === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("gestureStart");
    const obj18 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).GESTURE_END === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("gestureEnd");
    const obj17 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).SEGMENT_TICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("segmentTick");
    const obj16 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("segmentFrequentTick");
    const obj15 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).TOGGLE_ON === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("toggleOn");
    const obj14 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).TOGGLE_OFF === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("toggleOff");
    const obj13 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).CLOCK_TICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("clockTick");
    const obj12 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).CONTEXT_CLICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("contextClick");
    const obj11 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).KEYBOARD_PRESS === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("keyboardPress");
    const obj10 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).KEYBOARD_RELEASE === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("keyboardRelease");
    const obj9 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).KEYBOARD_TAP === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("keyboardTap");
    const obj8 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).LONG_PRESS === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("longPress");
    const obj7 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("textHandleMove");
    const obj6 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).VIRTUAL_KEY === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("virtualKey");
    const obj5 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("virtualKeyRelease");
    const obj4 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).EFFECT_CLICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("effectClick");
    const obj3 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("effectDoubleClick");
    const obj2 = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("effectHeavyClick");
    const obj = require(dependencyMap[1]);
  } else if (importDefault(dependencyMap[0]).EFFECT_TICK === IMPACT_LIGHT) {
    require(dependencyMap[1]).trigger("effectTick");
    const obj39 = require(dependencyMap[1]);
  }
};
