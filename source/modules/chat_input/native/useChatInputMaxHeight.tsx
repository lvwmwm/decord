// Module ID: 11378
// Function ID: 11379
// Name: getChatInputMaxHeight
// Dependencies: [32, 19, 1495, 11374, 1894, 5372, 4168, 1626, 1493, 11379, 4304, 4307, 4042, 2]
// Exports: default, getChatInputHeightAnimationTiming, getChatInputMinHeight

// Module 11378 (getChatInputMaxHeight)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { CHAT_INPUT_PILL_CONTENT_SIZE as closure_6 } from "TextAreaCta";

const require = arg1;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = require(1894) /* useSystemKeyboardHeight */.getSystemKeyboardHeight();
  const obj = require(1894) /* useSystemKeyboardHeight */;
  const tmp = require;
  const customKeyboardHeight = require(5372) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  const obj2 = require(5372) /* useCustomKeyboardHeight */;
  const keyboardType = require(4168) /* useKeyboardType */.getKeyboardType();
  if (keyboardType !== require(1626) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const obj3 = require(4168) /* useKeyboardType */;
  return Math.min(200, Math.max(2 * closure_6, tmp(1493).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
}
const result = require("subscribeToKeyboardUIStore").fileFinishedImporting("modules/chat_input/native/useChatInputMaxHeight.tsx");

export default function useChatInputMaxHeight(arg0) {
  let closure_0 = arg0;
  let tmp = callback(React.useState(getChatInputMaxHeight), 2);
  let closure_1 = tmp[1];
  const items = [arg0];
  const effect = React.useEffect(() => {
    function maybeUpdateMaxHeight() {
      callback2((arg0) => {
        let systemKeyboardHeight = outer1_0(outer1_2[4]).getSystemKeyboardHeight();
        const obj = outer1_0(outer1_2[4]);
        const tmp = outer1_0;
        const tmp2 = outer1_2;
        const customKeyboardHeight = outer1_0(outer1_2[5]).getCustomKeyboardHeight();
        const obj2 = outer1_0(outer1_2[5]);
        const keyboardType = outer1_0(outer1_2[6]).getKeyboardType();
        if (keyboardType !== outer1_0(outer1_2[7]).KeyboardTypes.SYSTEM) {
          systemKeyboardHeight = customKeyboardHeight;
        }
        let tmp6 = arg0;
        const obj3 = outer1_0(outer1_2[6]);
        const bound = Math.min(200, Math.max(2 * outer1_6, tmp(tmp2[8]).getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
        if (arg0 !== bound) {
          tmp6 = bound;
          if (callback != null) {
            callback();
            tmp6 = bound;
          }
        }
        return tmp6;
      });
    }
    let closure_0 = callback(outer1_2[9])(maybeUpdateMaxHeight);
    callback = outer1_5(maybeUpdateMaxHeight);
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
  let obj = require(1894) /* useSystemKeyboardHeight */;
  let systemKeyboardHeight = obj.getSystemKeyboardHeight();
  const customKeyboardHeight = require(5372) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  const obj2 = require(5372) /* useCustomKeyboardHeight */;
  const keyboardType = require(4168) /* useKeyboardType */.getKeyboardType();
  if (keyboardType !== require(1626) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  let tmpResult = tmp(1493);
  const bound = Math.min(height, Math.min(200, Math.max(2 * closure_6, tmpResult.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200)));
  tmpResult = tmp(4304);
  obj = { duration: tmp(4307).timingFastDuration, easing: tmp(4042).Easing.linear };
  return tmpResult.withTiming(bound, obj);
};
