// Module ID: 13563
// Function ID: 13564
// Name: FormatMenuNuxCoachmark
// Dependencies: [32, 19, 17, 4853, 21, 5004, 587, 1381, 558, 576, 12575, 7063, 4840, 7532, 13564, 1125, 5270, 9874, 2]

// Module 13563 (FormatMenuNuxCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1125 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4853 */;
import Text_Text from "Text/Text" /* 5270 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7063 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5004 */;
import PlatformUtils from "PlatformUtils" /* 1381 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let num;
let tmp5;
const useChatInputKeyboardOffsetDefault = tmp5(13564);
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const rect = { position: "absolute", top: -nativeDefault.space.PX_8, bottom: 0, left: num, width: 0 };
createStyles = createStyles.createStyles;
num = 5;
if (PlatformUtils.isAndroid()) {
  num = 4;
}
let closure_8 = createStyles({ anchor: rect, underline: { textDecorationLine: "underline" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FormatMenuNuxCoachmark() {
  let closure_1;
  let coachmark;
  let first;
  let items;
  let tmp27;
  let tmp9;
  let underline;
  const obj = require("react");
  const cResult = obj.c(19);
  const tmp4 = closure_8();
  _require = tmp4;
  const obj2 = require("MobileMarkdownFormatMenuExperiment");
  const isMobileMarkdownFormatMenuEnabled = obj2.useIsMobileMarkdownFormatMenuEnabled("FormatMenuNuxCoachmark");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeCustomKeyboard: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const tmp8 = require("useKeyboardIsOpen")(first);
  const tmp7 = importDefault;
  if (cResult[1] === isMobileMarkdownFormatMenuEnabled) {
    let tmp15;
    let tmp17;
    let tmp19;
    if (cResult[2] === tmp8) {
      tmp9 = cResult[3];
    }
    const tmpResult = require("useSelectedDismissibleContent");
    const tmp11 = _slicedToArray(tmpResult.useSelectedDismissibleContent(tmp9), 2);
    importDefault = tmp13;
    const first1 = tmp11[0];
    const MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK = tmp(tmp2[12]).DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK;
    const tmp14 = tmp7(coachmark[14])();
    const _Symbol = Symbol;
    if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[15]).intl;
      const stringResult = intl.string(require("intl").t["yYAD/t"]);
      cResult[4] = stringResult;
      tmp15 = stringResult;
    } else {
      tmp15 = cResult[4];
    }
    if (cResult[5] !== tmp4.underline) {
      const intl2 = tmp(tmp2[15]).intl;
      const obj4 = {
        underlineHook(children, arg1) {
              return jsx(Text_Text.Text, { variant: "text-sm/medium", color: "none", style: underline.underline, children }, arg1);
            }
      };
      const formatResult = intl2.format(require("intl").t["427UqW"], obj4);
      cResult[5] = tmp4.underline;
      cResult[6] = formatResult;
      tmp17 = formatResult;
    } else {
      tmp17 = cResult[6];
    }
    if (cResult[7] !== tmp11[1]) {
      const fn = function p() {
        closure_1(ContentDismissActionType.USER_DISMISS);
      };
      cResult[7] = tmp11[1];
      cResult[8] = fn;
      tmp19 = fn;
    } else {
      tmp19 = cResult[8];
    }
    if (cResult[9] === tmp14) {
      if (cResult[10] === tmp17) {
        if (cResult[11] === tmp19) {
          let tmp21;
          if (cResult[12] === first1 === MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK) {
            tmp21 = cResult[13];
          }
          const ref = react.useRef(null);
          const tmpResult2 = require("useCoachmark");
          coachmark = tmpResult2.useCoachmark(ref, tmp21);
          if (cResult[14] !== coachmark) {
            class S {
              constructor() {
                coachmark(false);
              }
            }
            cResult[14] = coachmark;
            cResult[15] = S;
          } else {
            class S {
              constructor() {
                coachmark(false);
              }
            }
          }
          if (cResult[16] === tmp26) {
            class S {
              constructor() {
                coachmark(false);
              }
            }
            return tmp27;
          }
          const tmp30 = <View style={tmp4.anchor} ref={ref} onLayout={tmp26} pointerEvents="none" collapsable={false} />;
          cResult[16] = tmp26;
          cResult[17] = tmp4.anchor;
          cResult[18] = tmp30;
          tmp27 = tmp30;
        }
      }
    }
    const obj6 = { title: tmp15, description: tmp17, visible: first1 === MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK, position: "top", offsetY: tmp14, onDismiss: tmp19 };
    cResult[9] = tmp14;
    cResult[10] = tmp17;
    cResult[11] = tmp19;
    cResult[12] = first1 === MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK;
    cResult[13] = obj6;
    tmp21 = obj6;
  }
  if (isMobileMarkdownFormatMenuEnabled) {
    class S {
      constructor() {
        coachmark(false);
      }
    }
    cResult[1] = isMobileMarkdownFormatMenuEnabled;
    cResult[2] = tmp8;
    cResult[3] = items;
    tmp9 = items;
  }
  items = [];
}) : (function FormatMenuNuxCoachmark() {
  let closure_0;
  let closure_1;
  let coachmark;
  let offsetY;
  let visible;
  const tmp = closure_8();
  _require = tmp;
  let obj = require("MobileMarkdownFormatMenuExperiment");
  const isMobileMarkdownFormatMenuEnabled = obj.useIsMobileMarkdownFormatMenuEnabled("FormatMenuNuxCoachmark");
  const tmp6 = useKeyboardIsOpenDefault({ includeCustomKeyboard: true });
  require("useSelectedDismissibleContent");
  if (isMobileMarkdownFormatMenuEnabled) {
    if (tmp6) {
      const items = [require("dismissible_content").DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK];
    }
    const tmp11 = _slicedToArray(tmp8([]), 2);
    importDefault = tmp12;
    const tmp13 = tmp11[0] === require("dismissible_content").DismissibleContent.MOBILE_MARKDOWN_FORMAT_MENU_COACHMARK;
    dependencyMap = tmp13;
    const tmp14 = useChatInputKeyboardOffsetDefault();
    _slicedToArray = tmp14;
    const items1 = [tmp14, tmp13, tmp11[1], tmp.underline];
    const memo = coachmark.useMemo(() => {
      let intl;
      let intl2;
      const obj = {
        title: intl.string(intl3.t["yYAD/t"]),
        description: intl2.format(intl3.t["427UqW"], obj2),
        visible,
        position: "top",
        offsetY,
        onDismiss() {
          closure_1_1(constants.USER_DISMISS);
        }
      };
      intl = intl3.intl;
      intl2 = intl3.intl;
      return obj;
    }, items1);
    const ref = coachmark.useRef(null);
    const tmp2Result = require("useCoachmark");
    coachmark = tmp2Result.useCoachmark(ref, memo);
    const items2 = [coachmark];
    return <View style={tmp.anchor} ref={ref} onLayout={coachmark.useCallback(() => {
      coachmark(false);
    }, items2)} pointerEvents="none" collapsable={false} />;
  }
});
const result = size.fileFinishedImporting("modules/chat_input/native/FormatMenuNuxCoachmark.tsx");

export default tmp3;
