// Module ID: 11112
// Function ID: 86432
// Name: RefreshChatInputCoachmark
// Dependencies: [57, 31, 1345, 1324, 5802, 1334, 1212, 3842, 8563, 2]
// Exports: default, useRefreshChatInputCoachmark

// Module 11112 (RefreshChatInputCoachmark)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { ContentDismissActionType } from "ContentDismissActionType";

const require = arg1;
const result = require("ContentDismissActionType").fileFinishedImporting("modules/chat_input/native/RefreshChatInputCoachmark.tsx");

export default function RefreshChatInputCoachmark(buttonRef) {
  let obj = Object.create(null);
  obj.buttonRef = 0;
  const merged = Object.assign(buttonRef, obj);
  obj = require(8563) /* useCoachmark */;
  const coachmark = obj.useCoachmark(buttonRef.buttonRef, merged);
  return null;
};
export const useRefreshChatInputCoachmark = function useRefreshChatInputCoachmark(disabled) {
  let _require;
  let importDefault;
  _require(5802);
  if (tmp) {
    if (!disabled.disabled) {
      let items = [_require(1334).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK];
    }
    const tmp7 = callback(tmp3(items), 2);
    _require = tmp8;
    const tmp11 = tmp7[0] === _require(1334).DismissibleContent.MOBILE_REFRESH_CHAT_INPUT_PLUS_BUTTON_COACHMARK;
    importDefault = tmp11;
    const items1 = [tmp11, tmp7[1]];
    let memo = null;
    if (tmp11) {
      memo = React.useMemo(() => {
        let obj = {};
        const intl = _undefined(outer1_2[6]).intl;
        obj.title = intl.string(_undefined(outer1_2[6]).t.eqI1WA);
        const intl2 = _undefined(outer1_2[6]).intl;
        obj.description = intl2.string(_undefined(outer1_2[6]).t.nxO3NK);
        obj.position = "top";
        obj.offsetY = 4;
        obj.visible = c1;
        obj.onDismiss = function onDismiss() {
          outer1_0(outer2_5.USER_DISMISS);
        };
        obj = { type: "rive", rive: _undefined(outer1_2[7]).OmnibuttonCoachmarkRive, aspectRatio: "16/9" };
        obj.graphic = obj;
        return obj;
      }, items1);
    }
    return memo;
  }
  items = [];
};
