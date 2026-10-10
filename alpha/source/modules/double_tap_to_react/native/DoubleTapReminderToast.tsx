// Module ID: 9438
// Function ID: 9439
// Name: DoubleTapReminderToast
// Dependencies: [2062, 4938, 2049, 2041, 7986, 4809, 1126, 9439, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 9438 (DoubleTapReminderToast)
import intl2 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2062 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4809 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4938 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7986 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 9439 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(name) {
  let intl;
  let obj3;
  let tmpResult5;
  const obj = DismissibleContentUnsafeUtils;
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(2041).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const tmpResult = DoubleTapToReactUtils;
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag && null != result;
    if (areEmojisEqualResult) {
      const tmpResult4 = DoubleTapToReactUtils;
      areEmojisEqualResult = tmpResult4.areEmojisEqual(result, name);
    }
    if (areEmojisEqualResult) {
      const obj2 = { text: intl.formatToPlainString(intl2.t.C2tQIV, obj3), icon: tmpResult5.getToastEmojiEntity(name) };
      const open = ToastActionCreatorsDefault.open;
      ToastActionCreatorsDefault;
      intl = tmp(1126).intl;
      obj3 = {
        protipHook(arg0) {
              return arg0;
            },
        emojiName: name.name
      };
      tmpResult5 = DoubleTapEmojiUpdatedToast;
      open("DOUBLE_TAP_TO_REACT_REMINDER", obj2);
      const obj4 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const tmpResult6 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult6.UNSAFE_markDismissibleContentAsDismissed(tmp(2049).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj4);
    }
  }
};
