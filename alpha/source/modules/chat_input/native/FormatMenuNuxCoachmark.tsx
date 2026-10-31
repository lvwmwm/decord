// Module ID: 13978
// Function ID: 13979
// Name: FormatMenuNuxCoachmark
// Dependencies: [32, 19, 17, 4860, 21, 5014, 575, 1375, 12813, 7101, 7569, 4847, 13979, 1113, 5624, 9954, 2]
// Exports: default

// Module 13978 (FormatMenuNuxCoachmark)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 4860 */;
import useKeyboardIsOpenDefault from "useKeyboardIsOpen" /* 7101 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 5014 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let num;
let tmp5;
const useChatInputKeyboardOffsetDefault = tmp5(13979);
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
