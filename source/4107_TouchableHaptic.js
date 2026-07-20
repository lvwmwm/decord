// Module ID: 4107
// Function ID: 33975
// Name: TouchableHaptic
// Dependencies: []
// Exports: TouchableHaptic

// Module 4107 (TouchableHaptic)
let closure_3 = [];
let closure_4 = importDefault(dependencyMap[0]);
arg1(dependencyMap[1]).useCallback;
const Pressable = arg1(dependencyMap[2]).Pressable;
const jsx = arg1(dependencyMap[3]).jsx;

export const TouchableHaptic = function TouchableHaptic(hapticType) {
  let impactMedium = hapticType.hapticType;
  if (undefined === impactMedium) {
    impactMedium = arg1(dependencyMap[4]).HapticFeedbackTypes.impactMedium;
  }
  const arg1 = impactMedium;
  const hapticTrigger = hapticType.hapticTrigger;
  let str = "onPressIn";
  if (undefined !== hapticTrigger) {
    str = hapticTrigger;
  }
  const importDefault = str;
  const hapticOptions = hapticType.hapticOptions;
  const dependencyMap = hapticOptions;
  const onPressIn = hapticType.onPressIn;
  let closure_3 = onPressIn;
  const onPress = hapticType.onPress;
  const callback = onPress;
  const onLongPress = hapticType.onLongPress;
  const items = [impactMedium, hapticOptions];
  const tmp4 = onLongPress(() => {
    str(hapticOptions[5]).trigger(impactMedium, hapticOptions);
  }, items);
  const Pressable = tmp4;
  const items1 = [str, tmp4, onPressIn];
  const items2 = [str, tmp4, onPress];
  const tmp3 = callback(hapticType, closure_3);
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
