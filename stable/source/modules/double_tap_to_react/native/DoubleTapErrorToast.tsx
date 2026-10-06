// Module ID: 7418
// Function ID: 7419
// Name: DoubleTapErrorToast
// Dependencies: [19, 17, 1381, 21, 4837, 588, 558, 576, 7419, 4531, 4833, 1127, 2]
// Exports: showDoubleTapErrorToast

// Module 7418 (DoubleTapErrorToast)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 588 */;
import intl4 from "intl" /* 1127 */;
import EmojiConstants from "EmojiConstants" /* 1381 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4531 */;
import Text_Text from "Text/Text" /* 4833 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj2;
let tmp;
const XSmallBoldIcon2 = tmp(7419);
const View = react_native.View;
const EmojiDisabledReasons = EmojiConstants.EmojiDisabledReasons;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(3);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const XSmallBoldIcon = XSmallBoldIcon2.XSmallBoldIcon;
    const tmp8 = <XSmallBoldIcon color={nativeDefault.colors.WHITE} size="xs" />;
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.icon) {
    const tmp12 = <View style={tmp4.icon} aria-hidden>{first}</View>;
    cResult[1] = tmp4.icon;
    cResult[2] = tmp12;
    tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  ({ color: nativeDefault.colors.WHITE, size: "xs" });
  const XSmallBoldIcon = XSmallBoldIcon2.XSmallBoldIcon;
  return <View style={closure_6().icon} aria-hidden>{null}</View>;
});
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: require, reason: importDefault } = arg0);
  let obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return <closure_1_7 />;
    },
    content() {
      let formatResult;
      if (importDefault === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
        let tmp3Result;
        if (null != require) {
          const Text2 = Text_Text.Text;
          const intl3 = intl4.intl;
          const obj3 = { emojiName: tmp };
          tmp3Result = <Text2 variant="text-sm/normal">{intl3.format(intl4.t.Dz4vkv, obj3)}</Text2>;
        }
        return tmp3Result;
      }
      const Text = Text_Text.Text;
      const tmp3 = jsx;
      if (null != require) {
        const intl2 = tmp4(1127).intl;
        const obj = { emojiName: tmp6 };
        formatResult = intl2.format(tmp4(1127).t.WZGLFq, obj);
      } else {
        const intl = tmp4(1127).intl;
        formatResult = intl.string(tmp4(1127).t.CL5mWi);
      }
      tmp3Result = tmp3(Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  };
  obj.open(obj2);
};
