// Module ID: 4758
// Function ID: 4759
// Name: HapticUtils
// Dependencies: [4759, 4760, 1368, 4769, 2]
// Exports: triggerHapticFeedback

// Module 4758 (HapticUtils)
import PlatformUtils from "PlatformUtils" /* 1368 */;
import haptics_HapticFeedbackTypesDefault from "haptics/HapticFeedbackTypes" /* 4759 */;
import Patterns from "Patterns" /* 4760 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/haptics/HapticUtils.native.tsx");

export const HapticFeedbackTypes = haptics_HapticFeedbackTypesDefault;
export const triggerHapticFeedback = function triggerHapticFeedback(IMPACT_LIGHT) {
  if (haptics_HapticFeedbackTypesDefault.IMPACT_LIGHT === IMPACT_LIGHT) {
    const obj41 = Patterns;
    const tmp69 = require;
    let str36 = "selection";
    if (obj42.isAndroid()) {
      const _parseInt5 = parseInt;
      let str37 = "effectTick";
      if (parseInt(tmp69Result.getSystemVersion()) < 29) {
        str37 = "impactLight";
      }
      str36 = str37;
      tmp69Result = tmp69(4769);
    }
    obj41.trigger(str36);
    obj42 = PlatformUtils;
  } else if (tmp(4759).IMPACT_MEDIUM === IMPACT_LIGHT) {
    const obj38 = Patterns;
    const tmp66 = require;
    let str34 = "impactMedium";
    if (obj39.isAndroid()) {
      const _parseInt4 = parseInt;
      let str35 = "effectTick";
      if (parseInt(tmp66Result.getSystemVersion()) < 29) {
        str35 = "impactLight";
      }
      str34 = str35;
      tmp66Result = tmp66(4769);
    }
    obj38.trigger(str34);
    obj39 = PlatformUtils;
  } else if (tmp(4759).IMPACT_HEAVY === IMPACT_LIGHT) {
    Patterns.trigger("impactHeavy");
  } else if (tmp(4759).NOTIFICATION_ERROR === IMPACT_LIGHT) {
    Patterns.trigger("notificationError");
  } else if (tmp(4759).DRAG_AND_DROP_START === IMPACT_LIGHT) {
    const obj34 = Patterns;
    let str31 = "impactHeavy";
    if (obj35.isAndroid()) {
      str31 = "impactMedium";
    }
    obj34.trigger(str31);
    obj35 = PlatformUtils;
  } else if (tmp(4759).DRAG_AND_DROP_END === IMPACT_LIGHT) {
    const obj31 = Patterns;
    const tmp57 = require;
    let str29 = "notificationSuccess";
    if (obj32.isAndroid()) {
      const _parseInt3 = parseInt;
      let str30 = "effectTick";
      if (parseInt(tmp57Result.getSystemVersion()) < 29) {
        str30 = "impactLight";
      }
      str29 = str30;
      tmp57Result = tmp57(4769);
    }
    obj31.trigger(str29);
    obj32 = PlatformUtils;
  } else if (tmp(4759).DRAG_AND_DROP_MOVE === IMPACT_LIGHT) {
    const obj28 = Patterns;
    const tmp54 = require;
    let str27 = "impactMedium";
    if (obj29.isAndroid()) {
      const _parseInt2 = parseInt;
      let str28 = "effectTick";
      if (parseInt(tmp54Result.getSystemVersion()) < 29) {
        str28 = "impactLight";
      }
      str27 = str28;
      tmp54Result = tmp54(4769);
    }
    obj28.trigger(str27);
    obj29 = PlatformUtils;
  } else if (tmp(4759).SOFT === IMPACT_LIGHT) {
    Patterns.trigger("soft");
  } else if (tmp(4759).SELECTION === IMPACT_LIGHT) {
    const obj24 = Patterns;
    const tmp49 = require;
    let str24 = "selection";
    if (obj25.isAndroid()) {
      const _parseInt = parseInt;
      let str25 = "effectTick";
      if (parseInt(tmp49Result.getSystemVersion()) < 29) {
        str25 = "impactLight";
      }
      str24 = str25;
      tmp49Result = tmp49(4769);
    }
    obj24.trigger(str24);
    obj25 = PlatformUtils;
  } else if (tmp(4759).RIGID === IMPACT_LIGHT) {
    Patterns.trigger("rigid");
  } else if (tmp(4759).NOTIFICATION_SUCCESS === IMPACT_LIGHT) {
    Patterns.trigger("notificationSuccess");
  } else if (tmp(4759).NOTIFICATION_WARNING === IMPACT_LIGHT) {
    Patterns.trigger("notificationWarning");
  } else if (tmp(4759).CONFIRM === IMPACT_LIGHT) {
    Patterns.trigger("confirm");
  } else if (tmp(4759).REJECT === IMPACT_LIGHT) {
    Patterns.trigger("reject");
  } else if (tmp(4759).GESTURE_START === IMPACT_LIGHT) {
    Patterns.trigger("gestureStart");
  } else if (tmp(4759).GESTURE_END === IMPACT_LIGHT) {
    Patterns.trigger("gestureEnd");
  } else if (tmp(4759).SEGMENT_TICK === IMPACT_LIGHT) {
    Patterns.trigger("segmentTick");
  } else if (tmp(4759).SEGMENT_FREQUENT_TICK === IMPACT_LIGHT) {
    Patterns.trigger("segmentFrequentTick");
  } else if (tmp(4759).TOGGLE_ON === IMPACT_LIGHT) {
    Patterns.trigger("toggleOn");
  } else if (tmp(4759).TOGGLE_OFF === IMPACT_LIGHT) {
    Patterns.trigger("toggleOff");
  } else if (tmp(4759).CLOCK_TICK === IMPACT_LIGHT) {
    Patterns.trigger("clockTick");
  } else if (tmp(4759).CONTEXT_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("contextClick");
  } else if (tmp(4759).KEYBOARD_PRESS === IMPACT_LIGHT) {
    Patterns.trigger("keyboardPress");
  } else if (tmp(4759).KEYBOARD_RELEASE === IMPACT_LIGHT) {
    Patterns.trigger("keyboardRelease");
  } else if (tmp(4759).KEYBOARD_TAP === IMPACT_LIGHT) {
    Patterns.trigger("keyboardTap");
  } else if (tmp(4759).LONG_PRESS === IMPACT_LIGHT) {
    Patterns.trigger("longPress");
  } else if (tmp(4759).TEXT_HANDLE_MOVE === IMPACT_LIGHT) {
    Patterns.trigger("textHandleMove");
  } else if (tmp(4759).VIRTUAL_KEY === IMPACT_LIGHT) {
    Patterns.trigger("virtualKey");
  } else if (tmp(4759).VIRTUAL_KEY_RELEASE === IMPACT_LIGHT) {
    Patterns.trigger("virtualKeyRelease");
  } else if (tmp(4759).EFFECT_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("effectClick");
  } else if (tmp(4759).EFFECT_DOUBLE_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("effectDoubleClick");
  } else if (tmp(4759).EFFECT_HEAVY_CLICK === IMPACT_LIGHT) {
    Patterns.trigger("effectHeavyClick");
  } else if (tmp(4759).EFFECT_TICK === IMPACT_LIGHT) {
    Patterns.trigger("effectTick");
  }
};
