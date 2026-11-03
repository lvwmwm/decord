// Module ID: 14124
// Function ID: 14125
// Name: FormatMenuNuxCoachmark
// Dependencies: [32, 19, 17, 4987, 21, 5141, 575, 1377, 12952, 7227, 7693, 4974, 14125, 1113, 5747, 10085, 2]
// Exports: default

// Module 14124 (FormatMenuNuxCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4987 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7227 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5141 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let num;
let tmp5;
const useChatInputKeyboardOffsetDefault = tmp5(14125);
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
const result = size.fileFinishedImporting("modules/chat_input/native/FormatMenuNuxCoachmark.tsx");

export default function FormatMenuNuxCoachmark() {
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
};
