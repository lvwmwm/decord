// Module ID: 13290
// Function ID: 13291
// Name: useEmojiSuggestionNuxCoachmark
// Dependencies: [32, 19, 4818, 21, 558, 576, 1647, 5594, 5159, 1633, 5250, 587, 1384, 1631, 4805, 7494, 13020, 1128, 7231, 9839, 2]

// Module 13290 (useEmojiSuggestionNuxCoachmark)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import KeyboardTypes from "KeyboardTypes" /* 1631 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import KeyboardChatScrollView from "KeyboardChatScrollView" /* 1647 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4818 */;
import useKeyboardTypeDefault from "useKeyboardType" /* 5159 */;
import useToken from "useToken" /* 5250 */;
import useCustomKeyboardHeightDefault from "useCustomKeyboardHeight" /* 5594 */;
import MobileEmojiSuggestionsExperiment from "MobileEmojiSuggestionsExperiment" /* 13020 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
const EmojiSuggestionNuxCoachmark = "EmojiSuggestionNuxCoachmark";
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChatInputKeyboardOffset() {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function t(height) {
      return height.height;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = KeyboardChatScrollView;
  const keyboardState = tmpResult.useKeyboardState(first);
  let tmp6 = useCustomKeyboardHeightDefault();
  const tmp7 = useKeyboardTypeDefault();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const tmpResult3 = useToken;
  const token = tmpResult3.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const tmpResult4 = PlatformUtils;
  if (tmpResult4.isIOS()) {
    if (tmp7 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp6 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp6 - Math.max(bottom, token));
  } else {
    return 0;
  }
}) : (function useChatInputKeyboardOffset() {
  const obj = KeyboardChatScrollView;
  const keyboardState = obj.useKeyboardState((height) => height.height);
  let tmp4 = useCustomKeyboardHeightDefault();
  const tmp5 = useKeyboardTypeDefault();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj2 = useToken;
  const token = obj2.useToken(nativeDefault.modules.mobile.CHAT_INPUT_FLOATING_OFFSET_MINIMUM);
  const obj3 = PlatformUtils;
  if (obj3.isIOS()) {
    if (tmp5 === KeyboardTypes.KeyboardTypes.SYSTEM) {
      tmp4 = keyboardState;
    }
    const _Math = Math;
    const _Math2 = Math;
    return Math.max(0, tmp4 - Math.max(bottom, token));
  } else {
    return 0;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
  let closure_0;
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
      const items = [tmp2(4805).DismissibleContent.MOBILE_EMOJI_SUGGESTIONS_NUX_COACHMARK];
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
  let closure_1 = tmp13;
  const tmp14 = closure_8();
  if (cResult[2] !== tmp13) {
    const fn = function f() {
      const tmp = closure_1;
      if (tmp) {
        const obj2 = { location: EmojiSuggestionNuxCoachmark };
        const obj = MobileEmojiSuggestionsExperiment;
        const result = obj.trackMobileEmojiSuggestionsExposure(obj2);
      }
    };
    const items2 = [tmp13];
    cResult[2] = tmp13;
    cResult[3] = fn;
    cResult[4] = items2;
    tmp16 = items2;
    tmp15 = fn;
  } else {
    tmp15 = cResult[3];
    tmp16 = cResult[4];
  }
  const effect = obj2.useEffect(tmp15, tmp16);
  if (cResult[5] === tmp5Result[1]) {
    let tmp21;
    let tmp20;
    let tmp25;
    let tmp27;
    const _Symbol = Symbol;
    if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp2(1128).intl;
      const stringResult = intl.string(require("intl").t.l8nVB9);
      const intl2 = tmp2(1128).intl;
      const stringResult1 = intl2.string(require("intl").t.ujfS5V);
      cResult[8] = stringResult;
      cResult[9] = stringResult1;
      tmp21 = stringResult1;
      tmp20 = stringResult;
    } else {
      tmp20 = cResult[8];
      tmp21 = cResult[9];
    }
    const sum = 4 + tmp14;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      class K {
        constructor() {
          return jsx(closure_0(dependencyMap[18]).Badge, { type: "beta", variant: "primary" });
        }
      }
      cResult[10] = K;
      tmp25 = K;
    } else {
      class K {
        constructor() {
          return jsx(closure_0(dependencyMap[18]).Badge, { type: "beta", variant: "primary" });
        }
      }
    }
    if (cResult[11] !== tmp5Result[1]) {
      class D {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
      cResult[11] = tmp5Result[1];
      cResult[12] = D;
    } else {
      class D {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    const _Symbol3 = Symbol;
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class D {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
      const stringResult2 = obj4.string(require("intl").t["NX+WJN"]);
      cResult[13] = stringResult2;
      tmp27 = stringResult2;
    } else {
      class D {
        constructor() {
          return closure_0(ContentDismissActionType.USER_DISMISS);
        }
      }
    }
    if (cResult[14] !== tmp5Result[1]) {
      class B {
        constructor() {
          return closure_0(ContentDismissActionType.TAKE_ACTION);
        }
      }
      cResult[14] = tmp5Result[1];
      cResult[15] = B;
    } else {
      class B {
        constructor() {
          return closure_0(ContentDismissActionType.TAKE_ACTION);
        }
      }
    }
    if (cResult[16] === tmp29) {
      class B {
        constructor() {
          return closure_0(ContentDismissActionType.TAKE_ACTION);
        }
      }
    }
    const obj3 = { title: tmp20, description: tmp21, visible: tmp13, position: "top", offsetY: sum, renderImgComponent: tmp25, onDismiss: tmp26, buttonLabel: tmp27, buttonVariant: "primary", onButtonPress: tmp29 };
    cResult[16] = tmp29;
    cResult[17] = sum;
    cResult[18] = tmp26;
    cResult[19] = tmp13;
    cResult[20] = obj3;
  }
  const fn2 = function p(arg0) {
    const tmp = closure_1;
    if (tmp) {
      closure_0(arg0);
    }
  };
  cResult[5] = tmp5Result[1];
  cResult[6] = tmp13;
  cResult[7] = fn2;
}) : (function useEmojiSuggestionNuxCoachmark(arg0, arg1) {
  let closure_0;
  let closure_2;
  let items1;
  let tmp4;
  let tmp5;
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
  const visible = tmp12;
  const tmp13 = closure_8();
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
        return closure_1_6(closure_1_0(closure_1_2[18]).Badge, { type: "beta", variant: "primary" });
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
