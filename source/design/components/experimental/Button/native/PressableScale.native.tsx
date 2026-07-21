// Module ID: 8370
// Function ID: 66695
// Name: PressableScale
// Dependencies: []

// Module 8370 (PressableScale)
let closure_2 = [null];
let closure_3 = importDefault(dependencyMap[0]);
const jsx = arg1(dependencyMap[3]).jsx;
const importAllResult = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[4]).createAnimatedComponent(arg1(dependencyMap[2]).Pressable);
const importDefaultResult = importDefault(dependencyMap[4]);
const forwardRefResult = importAllResult.forwardRef((scaleAmountInPx) => {
  let onPressIn;
  let onPressOut;
  let num = scaleAmountInPx.scaleAmountInPx;
  if (num === undefined) {
    num = 8;
  }
  let obj = { -2043717422: null, 47621500: null, -216945323: null, -1103917220: null, -1103747530: null };
  ({ onPressIn, onPressOut } = scaleAmountInPx);
  Object.setPrototypeOf(null);
  const merged = Object.assign(scaleAmountInPx, obj);
  const sharedValue = arg1(dependencyMap[4]).useSharedValue(0);
  const obj2 = arg1(dependencyMap[4]);
  const buttonPressAnimationProps = arg1(dependencyMap[5]).useButtonPressAnimationProps(sharedValue, num, scaleAmountInPx.onLayout, onPressIn, onPressOut);
  obj = {};
  const merged1 = Object.assign(callback(buttonPressAnimationProps, closure_2));
  const merged2 = Object.assign(merged);
  obj["ref"] = arg1;
  obj["accessibilityRole"] = "button";
  const items = [buttonPressAnimationProps.style, scaleAmountInPx.style];
  obj["style"] = items;
  return <closure_5 {...obj} />;
});
const result = arg1(dependencyMap[6]).fileFinishedImporting("design/components/experimental/Button/native/PressableScale.native.tsx");

export const PressableScale = forwardRefResult;
