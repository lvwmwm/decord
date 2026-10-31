// Module ID: 13982
// Function ID: 13983
// Name: useEmojiSuggestionNuxCoachmark
// Dependencies: [32, 19, 4860, 21, 7569, 4847, 13979, 13712, 1113, 7306, 9954, 2]
// Exports: default

// Module 13982 (useEmojiSuggestionNuxCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 13712 */;
import useChatInputKeyboardOffsetDefault from "useChatInputKeyboardOffset" /* 13979 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestionNuxCoachmark.tsx");

export default function useEmojiSuggestionNuxCoachmark(targetRef, arg1) {
  let closure_0;
  let closure_2;
  let items1;
  let tmp4;
  let tmp5;
  let visible;
  let tmp = arg1;
  let obj = react;
  [tmp4, tmp5] = _slicedToArray(react.useState(arg1), 2);
  const tmp2 = _slicedToArray;
  const tmp3 = _slicedToArray(react.useState(arg1), 2);
  if (arg1) {
    tmp = !tmp4;
  }
  if (tmp) {
    tmp5(true);
  }
  const useSelectedDismissibleContent = require("useSelectedDismissibleContent").useSelectedDismissibleContent;
  require("useSelectedDismissibleContent");
  if (tmp4) {
    const items = [require("dismissible_content").DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
    items1 = items;
  } else {
    items1 = [];
  }
  const tmp2Result = tmp2(useSelectedDismissibleContent(items1), 2);
  _require = tmp11;
  const tmp12 = tmp2Result[0] === require("dismissible_content").DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK;
  importDefault = tmp12;
  const tmp13 = useChatInputKeyboardOffsetDefault();
  dependencyMap = tmp13;
  const items2 = [tmp12];
  const effect = obj.useEffect(() => {
    const tmp = visible;
    if (tmp) {
      const obj = MobileEmojiSuggestionsExperiment;
      const result = obj.trackMobileEmojiSuggestionsExposure({ location: "EmojiSuggestionNuxCoachmark" });
    }
  }, items2);
  const items3 = [tmp12, tmp2Result[1]];
  const items4 = [tmp12, tmp13, tmp2Result[1]];
  const dismissCoachmark = obj.useCallback((arg0) => {
    const tmp = visible;
    if (tmp) {
      closure_0(arg0);
    }
  }, items3);
  const memo = obj.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = {
      title: intl.string(intl4.t.l8nVB9),
      description: intl2.string(intl4.t.ujfS5V),
      visible,
      position: "top",
      offsetY: 4 + closure_2,
      renderImgComponent() {
        return closure_1_6(closure_1_0(closure_1_2[9]).Badge, { type: "beta", variant: "primary" });
      },
      onDismiss() {
        return closure_1_0(constants.USER_DISMISS);
      },
      buttonLabel: intl3.string(intl4.t["NX+WJN"]),
      buttonVariant: "primary",
      onButtonPress() {
        return closure_1_0(constants.TAKE_ACTION);
      }
    };
    intl = intl4.intl;
    intl2 = intl4.intl;
    intl3 = intl4.intl;
    return obj;
  }, items4);
  const tmp7Result = require("useCoachmark");
  const coachmark = tmp7Result.useCoachmark(targetRef, memo);
  return { dismissCoachmark };
};
