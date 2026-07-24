// Module ID: 11136
// Function ID: 86607
// Name: getChatInputMaxHeight
// Dependencies: [57, 31, 1452, 11132, 1823, 5163, 3996, 1555, 1450, 11137, 4131, 4134, 3991, 2]
// Exports: default, getChatInputHeightAnimationTiming, getChatInputMinHeight

// Module 11136 (getChatInputMaxHeight)
import _slicedToArray from "_slicedToArray";
import result from "result";
import subscribeToKeyboardUIStore from "subscribeToKeyboardUIStore";
import { CHAT_INPUT_PILL_CONTENT_SIZE as closure_6 } from "TextAreaCta";

const require = arg1;
function getChatInputMaxHeight() {
  let systemKeyboardHeight = require(1823) /* useSystemKeyboardHeight */.getSystemKeyboardHeight();
  const obj = require(1823) /* useSystemKeyboardHeight */;
  const customKeyboardHeight = require(5163) /* useCustomKeyboardHeight */.getCustomKeyboardHeight();
  const obj2 = require(5163) /* useCustomKeyboardHeight */;
  const keyboardType = require(3996) /* getKeyboardContextForType */.getKeyboardType();
  if (keyboardType !== require(1555) /* KeyboardTypes */.KeyboardTypes.SYSTEM) {
    systemKeyboardHeight = customKeyboardHeight;
  }
  const obj3 = require(3996) /* getKeyboardContextForType */;
  return Math.min(200, Math.max(2 * closure_6, require(1450) /* useWindowDimensions */.getWindowDimensions({ ignoreKeyboard: true }).height - systemKeyboardHeight - 200));
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
        let tmp = arg0;
        const tmp2 = outer3_7();
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
  const bound = Math.min(height, getChatInputMaxHeight());
  let obj = require(4131) /* withTiming */;
  obj = { duration: require(4134) /* timingNone */.timingFastDuration, easing: require(3991).Easing.linear };
  return obj.withTiming(bound, obj);
};
