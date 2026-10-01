// Module ID: 11779
// Function ID: 11780
// Name: NewBadge
// Dependencies: [19, 17, 21, 4836, 1364, 576, 4685, 7298, 4767, 4832, 1115, 2]
// Exports: default

// Module 11779 (NewBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useThemeDefault from "useTheme" /* 4767 */;
import Text_Text from "Text/Text" /* 4832 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 7298 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let tmp;
const shared = tmp(4685);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0, arg1) => {
  let num = 0;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    num = 1;
  }
  const obj2 = { text: { textAlign: "center", textTransform: "uppercase", marginTop: num }, base: null };
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  const tmpResult = shared;
  if (tmpResult.isThemeLight(arg1)) {
    let MOBILE_TOAST_BACKGROUND_DEFAULT;
    const tmp4 = arg0;
    if (!tmp4) {
      MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(576).colors.BACKGROUND_BRAND;
    }
    obj3.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj2.base = obj3;
    return obj2;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(576).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  let intl;
  let str;
  const tmp2 = useIsUsingClientThemeDefault();
  const tmp3 = useThemeDefault();
  const tmp4 = closure_5(tmp2, tmp3);
  ({ variant: "text-xxs/bold", style: tmp4.text, color: str, children: intl.string(intl2.t.y2b7CA) });
  const Text = Text_Text.Text;
  const obj3 = shared;
  if (obj3.isThemeLight(tmp3)) {
    str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  intl = tmp7(1115).intl;
  return <tmp6 style={tmp4.base}>{null}</tmp6>;
};
