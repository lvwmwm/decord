// Module ID: 4109
// Function ID: 33991
// Name: TouchableHaptic
// Dependencies: [29, 31, 27, 33, 4103, 4102]
// Exports: TouchableHaptic

// Module 4109 (TouchableHaptic)
import _objectWithoutProperties from "_objectWithoutProperties";
import { Pressable } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
let closure_3 = ["hapticType", "hapticTrigger", "hapticOptions", "onPressIn", "onPress", "onLongPress"];
require("result").useCallback;

export const TouchableHaptic = function TouchableHaptic(hapticType) {
  let impactMedium = hapticType.hapticType;
  if (undefined === impactMedium) {
    impactMedium = impactMedium(hapticOptions[4]).HapticFeedbackTypes.impactMedium;
  }
  const hapticTrigger = hapticType.hapticTrigger;
  let str = "onPressIn";
  if (undefined !== hapticTrigger) {
    str = hapticTrigger;
  }
  hapticOptions = hapticType.hapticOptions;
  const onPressIn = hapticType.onPressIn;
  const onPress = hapticType.onPress;
  const onLongPress = hapticType.onLongPress;
  const items = [impactMedium, hapticOptions];
  const tmp4 = onLongPress(() => {
    str(hapticOptions[5]).trigger(impactMedium, hapticOptions);
  }, items);
  const Pressable = tmp4;
  const items1 = [str, tmp4, onPressIn];
  const items2 = [str, tmp4, onPress];
  const tmp3 = onPress(hapticType, onPressIn);
  const items3 = [str, tmp4, onLongPress];
  const tmp5 = onLongPress((arg0) => {
    if ("onPressIn" === str) {
      tmp4();
    }
    if (null != onPressIn) {
      onPressIn(arg0);
    }
  }, items1);
  const tmp6 = onLongPress((arg0) => {
    if ("onPress" === str) {
      tmp4();
    }
    if (null != onPress) {
      onPress(arg0);
    }
  }, items2);
  return <Pressable {...Object.assign({
    onPressIn: tmp5,
    onPress: onLongPress((arg0) => {
      if ("onPress" === str) {
        tmp4();
      }
      if (null != onPress) {
        onPress(arg0);
      }
    }, items2),
    onLongPress: onLongPress((arg0) => {
      if ("onLongPress" === str) {
        tmp4();
      }
      if (null != onLongPress) {
        onLongPress(arg0);
      }
    }, items3)
  }, tmp3)} />;
};
