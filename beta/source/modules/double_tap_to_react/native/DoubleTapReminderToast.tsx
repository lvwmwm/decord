// Module ID: 10585
// Function ID: 10586
// Name: DoubleTapReminderToast
// Dependencies: [19, 2042, 21, 4836, 576, 4832, 1115, 4654, 2029, 2021, 7410, 4528, 10586, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 10585 (DoubleTapReminderToast)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import Text_Text from "Text/Text" /* 4832 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 10586 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
function DoubleTapReminderContent(emoji) {
  emoji = emoji.emoji;
  closure_5();
  const Text = Text_Text.Text;
  const intl = intl2.intl;
  const obj2 = {
    protipHook(children) {
      return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.name
  };
  return <Text variant="text-sm/normal" style={closure_5().toastText}>{intl.format(intl2.t.C2tQIV, obj2)}</Text>;
}
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { toastText: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
let closure_5 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  _require = emoji;
  const obj = require("DismissibleContentUnsafeUtils");
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(2021).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const tmpResult = require("DoubleTapToReactUtils");
    const result = tmpResult.disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag && null != result;
    if (areEmojisEqualResult) {
      const tmpResult3 = require("DoubleTapToReactUtils");
      areEmojisEqualResult = tmpResult3.areEmojisEqual(result, emoji);
    }
    if (areEmojisEqualResult) {
      const obj2 = {
        key: "DOUBLE_TAP_TO_REACT_REMINDER",
        icon() {
              return jsx(DoubleTapEmojiUpdatedToast.ToastEmoji, { emoji });
            },
        content() {
              return <DoubleTapReminderContent emoji={emoji} />;
            },
        toastDurationMs: 4000
      };
      const obj4 = ToastActionCreatorsDefault;
      obj4.open(obj2);
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const tmpResult4 = require("DismissibleContentUnsafeUtils");
      const result1 = tmpResult4.UNSAFE_markDismissibleContentAsDismissed(tmp(2029).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj3);
    }
  }
};
