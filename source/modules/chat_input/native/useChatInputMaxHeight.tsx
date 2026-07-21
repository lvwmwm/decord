// Module ID: 11098
// Function ID: 86355
// Name: getChatInputMaxHeight
// Dependencies: []
// Exports: default, getChatInputHeightAnimationTiming, getChatInputMinHeight

// Module 11098 (getChatInputMaxHeight)
function getChatInputMaxHeight() {
  let systemKeyboardHeight = arg1(dependencyMap[4]).getSystemKeyboardHeight();
  const obj = arg1(dependencyMap[4]);
  const customKeyboardHeight = arg1(dependencyMap[5]).getCustomKeyboardHeight();
  const obj2 = arg1(dependencyMap[5]);
  const keyboardType = arg1(dependencyMap[6]).getKeyboardType();
  if (keyboardType !== arg1(dependencyMap[7]).KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const obj3 = arg1(dependencyMap[6]);
  return Math.min(200, Math.max(2 * closure_6, arg1(dependencyMap[8]).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = arg1(dependencyMap[3]).CHAT_INPUT_PILL_CONTENT_SIZE;
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  const arg1 = arg0;
  const tmp = callback(React.useState(getChatInputMaxHeight), 2);
  let closure_1 = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeUpdateMaxHeight() {
      callback2((arg0) => {
        let tmp = arg0;
        const tmp2 = callback2();
        if (arg0 !== tmp2) {
          tmp = tmp2;
          if (null != callback) {
            callback();
            tmp = tmp2;
          }
        }
        return tmp;
      });
    }
    let closure_0 = callback(closure_2[9])(maybeUpdateMaxHeight);
    const callback = callback2(maybeUpdateMaxHeight);
    return () => {
      callback();
      callback2();
    };
  }, items);
  return tmp[0];
};
export function getChatInputMinHeight() {
  return closure_6;
}
export { getChatInputMaxHeight };
export const getChatInputHeightAnimationTiming = function getChatInputHeightAnimationTiming(height) {
  const bound = Math.min(height, getChatInputMaxHeight());
  let obj = arg1(dependencyMap[10]);
  obj = { duration: arg1(dependencyMap[11]).timingFastDuration, easing: arg1(dependencyMap[12]).Easing.linear };
  return obj.withTiming(bound, obj);
};
