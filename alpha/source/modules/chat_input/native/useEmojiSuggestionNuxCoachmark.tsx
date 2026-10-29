// Module ID: 13800
// Function ID: 13801
// Name: useEmojiSuggestionNuxCoachmark
// Dependencies: [32, 19, 4854, 21, 558, 576, 4841, 7555, 13797, 13528, 1125, 7293, 9906, 2]

// Module 13800 (useEmojiSuggestionNuxCoachmark)
import Fragment from "Fragment" /* 21 */;
import intl4 from "intl" /* 1125 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4854 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 13528 */;
import useChatInputKeyboardOffsetDefault from "useChatInputKeyboardOffset" /* 13797 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault, obj1;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const EmojiSuggestionNuxCoachmark = "EmojiSuggestionNuxCoachmark";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
  let closure_0;
  let closure_1;
  let tmp10;
  let tmp15;
  let tmp16;
  let tmp7;
  let tmp8;
  let tmp = arg1;
  let obj = require("react");
  const cResult = obj.c(23);
  let obj2 = react;
  [tmp7, tmp8] = react.useState(arg1);
  _slicedToArray(react.useState(arg1), 2);
  const tmp5 = _slicedToArray;
  if (arg1) {
    tmp = !tmp7;
  }
  if (tmp) {
    tmp8(true);
  }
  if (cResult[0] !== tmp7) {
    let items1;
    if (tmp7) {
      const items = [tmp2(4841).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
      items1 = items;
    } else {
      items1 = [];
    }
    cResult[0] = tmp7;
    cResult[1] = items1;
    tmp10 = items1;
  } else {
    tmp10 = cResult[1];
  }
  const tmp2Result = require("useSelectedDismissibleContent");
  const tmp5Result = tmp5(tmp2Result.useSelectedDismissibleContent(tmp10), 2);
  _require = tmp12;
  const tmp13 = tmp5Result[0] === require("dismissible_content").DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK;
  importDefault = tmp13;
  const tmp14 = useChatInputKeyboardOffsetDefault();
  if (cResult[2] !== tmp13) {
    class I {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          obj1 = { location: null };
          tmp4 = EmojiSuggestionNuxCoachmark;
          obj1.location = EmojiSuggestionNuxCoachmark;
          result = obj.trackMobileEmojiSuggestionsExposure(obj1);
        }
        return;
      }
    }
    const items2 = [tmp13];
    cResult[2] = tmp13;
    cResult[3] = I;
    cResult[4] = items2;
    tmp16 = items2;
    tmp15 = I;
  } else {
    class I {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          obj1 = { location: null };
          tmp4 = EmojiSuggestionNuxCoachmark;
          obj1.location = EmojiSuggestionNuxCoachmark;
          result = obj.trackMobileEmojiSuggestionsExposure(obj1);
        }
        return;
      }
    }
    tmp16 = cResult[4];
  }
  const effect = obj2.useEffect(tmp15, tmp16);
  if (cResult[5] === tmp5Result[1]) {
    let tmp20;
    let tmp19;
    let tmp24;
    let tmp26;
    class I {
      constructor() {
        tmp = closure_1;
        if (tmp) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[9]);
          obj1 = { location: null };
          tmp4 = EmojiSuggestionNuxCoachmark;
          obj1.location = EmojiSuggestionNuxCoachmark;
          result = obj.trackMobileEmojiSuggestionsExposure(obj1);
        }
        return;
      }
    }
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor() {
          tmp = closure_1;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            obj1 = { location: null };
            tmp4 = EmojiSuggestionNuxCoachmark;
            obj1.location = EmojiSuggestionNuxCoachmark;
            result = obj.trackMobileEmojiSuggestionsExposure(obj1);
          }
          return;
        }
      }
      const stringResult = obj4.string(require("intl").t.l8nVB9);
      const intl = tmp2(1125).intl;
      const stringResult1 = intl.string(require("intl").t.ujfS5V);
      cResult[8] = stringResult;
      cResult[9] = stringResult1;
      tmp20 = stringResult1;
      tmp19 = stringResult;
    } else {
      class I {
        constructor() {
          tmp = closure_1;
          if (tmp) {
            tmp2 = closure_0;
            tmp3 = closure_2;
            obj = closure_0(closure_2[9]);
            obj1 = { location: null };
            tmp4 = EmojiSuggestionNuxCoachmark;
            obj1.location = EmojiSuggestionNuxCoachmark;
            result = obj.trackMobileEmojiSuggestionsExposure(obj1);
          }
          return;
        }
      }
      tmp20 = cResult[9];
    }
    const sum = 4 + tmp14;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class B {
        constructor() {
          return closure_1_6(closure_0(closure_1_2[11]).Badge, { type: "beta", variant: "primary" });
        }
      }
      cResult[10] = B;
      tmp24 = B;
    } else {
      class B {
        constructor() {
          return closure_1_6(closure_0(closure_1_2[11]).Badge, { type: "beta", variant: "primary" });
        }
      }
    }
    if (cResult[11] !== tmp5Result[1]) {
      class U {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[11] = tmp5Result[1];
      cResult[12] = U;
    } else {
      class U {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class U {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult2 = obj5.string(require("intl").t["NX+WJN"]);
      cResult[13] = stringResult2;
      tmp26 = stringResult2;
    } else {
      class U {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[14] !== tmp5Result[1]) {
      class U {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[14] = tmp5Result[1];
      cResult[15] = tmp29;
    } else {
      class U {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[16] === tmp28) {
      class U {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const obj3 = { title: tmp19, description: tmp20, visible: tmp13, position: "top", offsetY: sum, renderImgComponent: tmp24, onDismiss: tmp25, buttonLabel: tmp26, buttonVariant: "primary", onButtonPress: tmp28 };
    cResult[16] = tmp28;
    class O {
      constructor(arg0) {
        tmp = closure_1;
        if (tmp) {
          tmp2 = arg0;
          tmp3 = closure_0;
          tmp4 = closure_0(arg0);
        }
        return;
      }
    }
    cResult[17] = sum;
    cResult[18] = tmp25;
    cResult[19] = tmp13;
    cResult[20] = obj3;
  }
  class O {
    constructor(arg0) {
      tmp = closure_1;
      if (tmp) {
        tmp2 = arg0;
        tmp3 = closure_0;
        tmp4 = closure_0(arg0);
      }
      return;
    }
  }
  cResult[5] = tmp5Result[1];
  cResult[6] = tmp13;
  cResult[7] = O;
}) : (function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
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
      const obj2 = { location: EmojiSuggestionNuxCoachmark };
      const obj = MobileEmojiSuggestionsExperiment;
      const result = obj.trackMobileEmojiSuggestionsExposure(obj2);
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
        return closure_1_6(closure_1_0(closure_1_2[11]).Badge, { type: "beta", variant: "primary" });
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
  const coachmark = tmp7Result.useCoachmark(arg0, memo);
  return { dismissCoachmark };
});
let result = size.fileFinishedImporting("modules/chat_input/native/useEmojiSuggestionNuxCoachmark.tsx");

export default tmp2;
