// Module ID: 8385
// Function ID: 8386
// Name: DoubleTapErrorToast
// Dependencies: [1392, 1125, 5701, 2]
// Exports: showDoubleTapErrorToast

// Module 8385 (DoubleTapErrorToast)
import intl4 from "intl" /* 1125 */;
import EmojiConstants from "EmojiConstants" /* 1392 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5701 */;
import size from "module_2" /* 2 */;

const EmojiDisabledReasons = EmojiConstants.EmojiDisabledReasons;
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export function showDoubleTapErrorToast(emojiName) {
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
}
