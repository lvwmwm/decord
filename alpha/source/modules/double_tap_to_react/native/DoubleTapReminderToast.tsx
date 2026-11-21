// Module ID: 9074
// Function ID: 9075
// Name: DoubleTapReminderToast
// Dependencies: [4759, 4945, 4746, 4738, 8706, 5595, 1112, 9075, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 9074 (DoubleTapReminderToast)
import intl2 from "intl" /* 1112 */;
import dismissible_content from "dismissible_content" /* 4746 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4759 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4945 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import DoubleTapToReactUtils from "DoubleTapToReactUtils" /* 8706 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 9075 */;
import size from "module_2" /* 2 */;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export function maybeShowDoubleTapReminderToast(name) {
  let intl;
  let obj3;
  let tmpResult5;
  const obj = DismissibleContentUnsafeUtils;
  if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(4738).DoubleTapReactionEmoji;
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
      intl = tmp(1112).intl;
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
      const result1 = tmpResult6.UNSAFE_markDismissibleContentAsDismissed(tmp(4746).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj4);
    }
  }
}
