// Module ID: 7990
// Function ID: 7991
// Name: DoubleTapErrorToast
// Dependencies: [1393, 1126, 4809, 2]
// Exports: showDoubleTapErrorToast

// Module 7990 (DoubleTapErrorToast)
import intl4 from "intl" /* 1126 */;
import EmojiConstants from "EmojiConstants" /* 1393 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import size from "module_2" /* 2 */;

const EmojiDisabledReasons = EmojiConstants.EmojiDisabledReasons;
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(emojiName) {
  let stringResult;
  emojiName = emojiName.emojiName;
  const reason = emojiName.reason;
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  if (null == emojiName) {
    const intl3 = intl4.intl;
    stringResult = intl3.string(intl4.t.CL5mWi);
  } else if (reason === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
    const intl2 = intl4.intl;
    const obj2 = { emojiName };
    stringResult = intl2.formatToPlainString(intl4.t.Dz4vkv, obj2);
  } else {
    const intl = intl4.intl;
    const obj = { emojiName };
    stringResult = intl.formatToPlainString(intl4.t.WZGLFq, obj);
  }
  open("EMOJI_DOUBLE_TAP_ERROR", { text: stringResult, variant: "critical" });
};
