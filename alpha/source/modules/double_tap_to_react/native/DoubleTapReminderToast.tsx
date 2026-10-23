// Module ID: 9835
// Function ID: 9836
// Name: DoubleTapReminderToast
// Dependencies: [4818, 4999, 4805, 4797, 8324, 5661, 1128, 9836, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 9835 (DoubleTapReminderToast)
import intl2 from "intl" /* 1128 */;
import dismissible_content from "dismissible_content" /* 4805 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4818 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4999 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5661 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 8324 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 9836 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(name) {
  let intl;
  let obj3;
  let tmpResult5;
  const obj = DismissibleContentUnsafeUtils;
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(4797).DoubleTapReactionEmoji;
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
      intl = tmp(1128).intl;
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
      const result1 = tmpResult6.UNSAFE_markDismissibleContentAsDismissed(tmp(4805).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj4);
    }
  }
};
