// Module ID: 8235
// Function ID: 8236
// Name: DoubleTapErrorToast
// Dependencies: [19, 17, 1379, 21, 4758, 580, 558, 568, 8236, 4458, 4754, 1119, 2]
// Exports: showDoubleTapErrorToast

// Module 8235 (DoubleTapErrorToast)
import c from "c" /* 568 */;
import nativeDefault from "native" /* 580 */;
import util from "util" /* 1119 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4458 */;
import Text_Text from "Text/Text" /* 4754 */;
import XSmallBoldIcon from "XSmallBoldIcon" /* 8236 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const EmojiDisabledReasons = fn(1379).EmojiDisabledReasons;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let obj2 = { icon: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const tmp4 = closure_6();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { color: nativeDefault.colors.WHITE, size: "xs" };
    const tmp8 = jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" });
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.icon) {
    const obj3 = { style: tmp4.icon, "aria-hidden": true, children: first };
    const tmp12 = <View style={tmp4.icon} aria-hidden>{first}</View>;
    cResult[1] = tmp4.icon;
    cResult[2] = tmp12;
    let tmp9 = tmp12;
  } else {
    tmp9 = cResult[2];
  }
  return tmp9;
}) : (() => {
  const obj = { style: closure_6().icon, "aria-hidden": true, children: jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" }) };
  return <View style={closure_6().icon} aria-hidden>{jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" })}</View>;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: require, reason: importDefault } = arg0);
  ToastActionCreatorsDefault.open({
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return <closure_1_7 />;
    },
    content() {
      if (importDefault === EmojiDisabledReasons.DISALLOW_EXTERNAL) {
        if (null != closure_1_0) {
          const obj2 = { variant: "text-sm/normal", children: null };
          const intl3 = util.intl;
          const obj3 = { emojiName: tmp };
          obj2.children = intl3.format(util.t.Dz4vkv, obj3);
          let tmp3Result = jsx(Text_Text.Text, { variant: "text-sm/normal", children: null });
        }
        return tmp3Result;
      }
      if (null != closure_1_0) {
        const intl2 = tmp4(1119).intl;
        const obj = { emojiName: tmp6 };
        let formatResult = intl2.format(tmp4(1119).t.WZGLFq, obj);
      } else {
        const intl = tmp4(1119).intl;
        formatResult = intl.string(tmp4(1119).t.CL5mWi);
      }
      tmp3Result = jsx(Text_Text.Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  });
};
