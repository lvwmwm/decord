// Module ID: 9280
// Function ID: 72706
// Name: DoubleTapReminderContent
// Dependencies: [31, 1345, 33, 4131, 689, 4127, 1212, 3947, 1334, 3804, 7691, 3832, 9281, 2]
// Exports: maybeShowDoubleTapReminderToast

// Module 9280 (DoubleTapReminderContent)
import "result";
import { ContentDismissActionType } from "ContentDismissActionType";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function DoubleTapReminderContent(emoji) {
  let obj = { variant: "text-sm/normal", style: _createForOfIteratorHelperLoose().toastText };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj = {
    protipHook(children) {
      const obj = { variant: "text-sm/bold", color: "text-feedback-info", children };
      return outer1_4(outer1_0(outer1_2[5]).Text, obj, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  };
  obj.children = intl.format(require(1212) /* getSystemLocale */.t.C2tQIV, obj);
  return jsx(require(4127) /* Text */.Text, {
    protipHook(children) {
      const obj = { variant: "text-sm/bold", color: "text-feedback-info", children };
      return outer1_4(outer1_0(outer1_2[5]).Text, obj, "doubleTapReminder");
    },
    emojiName: emoji.emoji.name
  });
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginRight: require("_createForOfIteratorHelperLoose").space.PX_12, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.toastText = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("jsxProd").fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapReminderToast.tsx");

export const maybeShowDoubleTapReminderToast = function maybeShowDoubleTapReminderToast(emoji) {
  const _require = emoji;
  let obj = _require(3947);
  if (!obj.UNSAFE_isDismissibleContentDismissed(_require(1334).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER)) {
    const DoubleTapReactionEmoji = _require(3804).DoubleTapReactionEmoji;
    const setting = DoubleTapReactionEmoji.getSetting();
    const disableDoubleTap = setting.disableDoubleTap;
    const result = _require(7691).disambiguatedEmojiFromSettingsValue(setting);
    let areEmojisEqualResult = !(null != disableDoubleTap && disableDoubleTap) && null != result;
    if (areEmojisEqualResult) {
      areEmojisEqualResult = _require(7691).areEmojisEqual(result, emoji);
      const obj3 = _require(7691);
    }
    if (areEmojisEqualResult) {
      obj = {
        key: "DOUBLE_TAP_TO_REACT_REMINDER",
        icon() {
              return outer1_4(emoji(outer1_2[12]).ToastEmoji, { emoji });
            },
        content() {
              return outer1_4(outer1_6, { emoji: closure_0 });
            },
        toastDurationMs: 4000
      };
      importDefault(3832).open(obj);
      const obj4 = importDefault(3832);
      obj = { dismissAction: ContentDismissActionType.AUTO_DISMISS, forceTrack: true };
      const result1 = _require(3947).UNSAFE_markDismissibleContentAsDismissed(_require(1334).DismissibleContent.DOUBLE_TAP_TO_REACT_REMINDER, obj);
      const obj6 = _require(3947);
    }
    const obj2 = _require(7691);
    const tmp5 = null != disableDoubleTap && disableDoubleTap;
  }
};
