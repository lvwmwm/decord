// Module ID: 10487
// Function ID: 10488
// Name: DoubleTapReminderToast
// Dependencies: [19, 2042, 21, 4790, 580, 558, 568, 4786, 1119, 4611, 2031, 2023, 8263, 4490, 10488, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 10487 (DoubleTapReminderToast)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4490 */;
import Text_Text from "Text/Text" /* 4786 */;
import DoubleTapEmojiUpdatedToast from "DoubleTapEmojiUpdatedToast" /* 10488 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let obj2 = { toastText: { marginRight: nativeDefault.space.PX_12, marginVertical: nativeDefault.space.PX_8 } };
let closure_5 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((emoji) => {
  const cResult = c.c(6);
  let name = emoji.emoji;
  const tmp4 = closure_5();
  if (cResult[0] !== name.name) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function l(children) {
        return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
      };
      cResult[2] = fn;
      let tmp8 = fn;
    } else {
      tmp8 = cResult[2];
    }
    const intl = tmp(1119).intl;
    const obj2 = { protipHook: tmp8, emojiName: name.name };
    const formatResult = intl.format(tmp(1119).t.C2tQIV, obj2);
    name = name.name;
    cResult[0] = name;
    cResult[1] = formatResult;
  } else {
    if (cResult[3] === tmp4.toastText) {
      if (cResult[4] === tmp6) {
        let tmp11 = cResult[5];
      }
      return tmp11;
    }
    const obj3 = { variant: "text-sm/normal", style: tmp5, children: cResult[1] };
    const tmp13 = jsx(tmp(4786).Text, { variant: "text-sm/normal", style: tmp5, children: cResult[1] });
    cResult[3] = tmp4.toastText;
    cResult[4] = cResult[1];
    cResult[5] = tmp13;
    tmp11 = tmp13;
  }
}) : ((emoji) => {
  const obj = { variant: "text-sm/normal", style: closure_5().toastText, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.C2tQIV, {
    protipHook(children) {
      return jsx(require("Text/Text").Text, { variant: "text-sm/bold", color: "text-feedback-info", children }, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
  return jsx(Text_Text.Text, { variant: "text-sm/normal", style: closure_5().toastText, children: null });
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  _require = emoji;
  if (!obj.UNSAFE_isDismissibleContentDismissed(require("dismissible_content").DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = tmp(2023).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    let flag = setting.disableDoubleTap;
    if (flag == null) {
      flag = false;
    }
    const result = tmp(8263).disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !flag;
    if (!flag) {
      areEmojisEqualResult = null != result;
    }
    if (areEmojisEqualResult) {
      areEmojisEqualResult = tmp(8263).areEmojisEqual(result, emoji);
      const tmpResult3 = tmp(8263);
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
      ToastActionCreatorsDefault.open(obj2);
      const obj3 = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = tmp(4611).UNSAFE_markDismissibleContentAsDismissed(tmp(2031).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj3);
      const tmpResult4 = tmp(4611);
    }
    const tmpResult = tmp(8263);
  }
};
