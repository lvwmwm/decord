// Module ID: 9652
// Function ID: 9653
// Name: DoubleTapReminderToast
// Dependencies: [19, 2048, 21, 4837, 588, 558, 576, 4833, 1127, 4656, 2035, 2027, 7414, 4531, 9653, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 9652 (DoubleTapReminderToast)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl2 from "intl" /* 1127 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import Text_Text from "Text/Text" /* 4833 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 9653 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let obj = { toastText: obj2 };
obj2 = { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 };
let closure_5 = createStyles.createStyles(obj);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(6);
  emoji = emoji.emoji;
  const tmp4 = closure_5();
  const toastText = tmp4.toastText;
  if (cResult[0] !== emoji.name) {
    let tmp7;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(children) {
        return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
      };
      cResult[2] = fn;
      tmp7 = fn;
    } else {
      tmp7 = cResult[2];
    }
    const intl = tmp(1127).intl;
    const obj2 = { protipHook: tmp7, emojiName: emoji.name };
    const formatResult = intl.format(intl2.t.C2tQIV, obj2);
    cResult[0] = emoji.name;
    cResult[1] = formatResult;
    tmp5 = formatResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[3] === tmp4.toastText) {
    let tmp9;
    if (cResult[4] === tmp5) {
      tmp9 = cResult[5];
    }
    return tmp9;
  }
  const tmp10 = jsx(Text_Text.Text, { variant: "text-sm/normal", style: toastText, children: tmp5 });
  cResult[3] = tmp4.toastText;
  cResult[4] = tmp5;
  cResult[5] = tmp10;
  tmp9 = tmp10;
}) : ((emoji) => {
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
});
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  _require = emoji;
  const obj = require("DismissibleContentUnsafeUtils");
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(2027).DoubleTapReactionEmoji;
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
              return <closure_6 emoji={emoji} />;
            },
        toastDurationMs: 4000
      };
      const obj4 = ToastActionCreatorsDefault;
      obj4.open(obj2);
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const tmpResult4 = require("DismissibleContentUnsafeUtils");
      const result1 = tmpResult4.UNSAFE_markDismissibleContentAsDismissed(tmp(2035).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj3);
    }
  }
};
