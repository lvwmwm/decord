// Module ID: 7414
// Function ID: 7415
// Name: DoubleTapErrorToast
// Dependencies: [19, 17, 1375, 21, 4836, 576, 7415, 4528, 4832, 1115, 2]
// Exports: showDoubleTapErrorToast

// Module 7414 (DoubleTapErrorToast)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import EmojiConstants from "EmojiConstants" /* 1375 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4528 */;
import Text_Text from "Text/Text" /* 4832 */;
import XSmallBoldIcon2 from "XSmallBoldIcon" /* 7415 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let obj2;
function DoubleTapErrorToastIcon() {
  ({ color: nativeDefault.colors.WHITE, size: "xs" });
  const XSmallBoldIcon = XSmallBoldIcon2.XSmallBoldIcon;
  return <View style={closure_6().icon} aria-hidden>{null}</View>;
}
const View = react_native.View;
const EmojiDisabledReasons = EmojiConstants.EmojiDisabledReasons;
const jsx = Fragment.jsx;
let obj = { icon: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_FEEDBACK_CRITICAL, borderRadius: nativeDefault.radii.round, padding: nativeDefault.space.PX_4, marginLeft: nativeDefault.space.PX_4 };
let closure_6 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/double_tap_to_react/native/DoubleTapErrorToast.tsx");

export const showDoubleTapErrorToast = function showDoubleTapErrorToast(arg0) {
  ({ emojiName: require, reason: importDefault } = arg0);
  let obj = ToastActionCreatorsDefault;
  const obj2 = {
    key: "EMOJI_DOUBLE_TAP_ERROR",
    icon() {
      return <DoubleTapErrorToastIcon />;
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
        const intl2 = tmp4(1115).intl;
        const obj = { emojiName: tmp6 };
        formatResult = intl2.format(tmp4(1115).t.WZGLFq, obj);
      } else {
        const intl = tmp4(1115).intl;
        formatResult = intl.string(tmp4(1115).t.CL5mWi);
      }
      tmp3Result = tmp3(Text, { variant: "text-sm/normal", children: formatResult });
    },
    toastDurationMs: 3000
  };
  obj.open(obj2);
};
