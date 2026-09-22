// Module ID: 8076
// Function ID: 8077
// Name: DoubleTapErrorToast
// Dependencies: [19, 17, 1374, 21, 4636, 576, 8077, 4335, 4632, 1114, 2]
// Exports: showDoubleTapErrorToast

// Module 8076 (DoubleTapErrorToast)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import Text_Text from "Text/Text" /* 4632 */;
import XSmallBoldIcon from "XSmallBoldIcon" /* 8077 */;
import noop from "module_19" /* 19 */;

require = fn;
function DoubleTapErrorToastIcon() {
  const obj = { style: closure_6().icon, "aria-hidden": true, children: jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" }) };
  return <View style={closure_6().icon} aria-hidden>{jsx(XSmallBoldIcon.XSmallBoldIcon, { color: nativeDefault.colors.WHITE, size: "xs" })}</View>;
}
const View = fn(17).View;
const EmojiDisabledReasons = fn(1374).EmojiDisabledReasons;
const jsx = fn(21).jsx;
const createStyles = fn(4636);
let obj2 = { icon: { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: require, reason: importDefault } = arg0);
  ToastActionCreatorsDefault.open({
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return <DoubleTapErrorToastIcon />;
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
        const intl2 = tmp4(1114).intl;
        const obj = { emojiName: tmp6 };
        let formatResult = intl2.format(tmp4(1114).t.WZGLFq, obj);
      } else {
        const intl = tmp4(1114).intl;
        formatResult = intl.string(tmp4(1114).t.CL5mWi);
      }
      tmp3Result = jsx(Text_Text.Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  });
};
