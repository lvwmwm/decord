// Module ID: 9409
// Function ID: 9410
// Name: DoubleTapReminderToast
// Dependencies: [2061, 4899, 2049, 2041, 7968, 4768, 1126, 9410, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 9409 (DoubleTapReminderToast)
import intl2 from "intl" /* 1126 */;
import dismissible_content from "dismissible_content" /* 2049 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2061 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4768 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4899 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 7968 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 9410 */;
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
      const openMana = ToastActionCreatorsDefault.openMana;
      ToastActionCreatorsDefault;
      intl = tmp(1126).intl;
      obj3 = {
        protipHook(arg0) {
              return arg0;
            },
        emojiName: name.name
      };
      tmpResult5 = DoubleTapEmojiUpdatedToast;
      openMana("DOUBLE_TAP_TO_REACT_REMINDER", obj2);
      const obj4 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const tmpResult6 = DismissibleContentUnsafeUtils;
      const result1 = tmpResult6.UNSAFE_markDismissibleContentAsDismissed(tmp(2049).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj4);
    }
  }
};
