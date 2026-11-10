// Module ID: 14104
// Function ID: 14105
// Name: NewBadge
// Dependencies: [19, 17, 21, 5142, 1377, 575, 5149, 9918, 5371, 5753, 1113, 2]
// Exports: default

// Module 14104 (NewBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import useThemeDefault from "useTheme" /* 5371 */;
import Text_Text from "Text/Text" /* 5753 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 9918 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

let tmp;
const shared = tmp(5149);
const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles((arg0, arg1) => {
  let num = 0;
  const obj = PlatformUtils;
  if (obj.isIOS()) {
    num = 1;
  }
  const obj2 = { text: { textAlign: "center", marginTop: num }, base: null };
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  const tmpResult = shared;
  if (tmpResult.isThemeLight(arg1)) {
    let MOBILE_TOAST_BACKGROUND_DEFAULT;
    const tmp4 = arg0;
    if (!tmp4) {
      MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(575).colors.BACKGROUND_BRAND;
    }
    obj3.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj2.base = obj3;
    return obj2;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(575).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  let str;
  let stringResult;
  const tmp2 = useIsUsingClientThemeDefault();
  const tmp3 = useThemeDefault();
  const tmp4 = closure_5(tmp2, tmp3);
  ({ variant: "footnote/semibold", style: tmp4.text, color: str, children: stringResult.toLocaleUpperCase(intl2.intl.currentLocale) });
  const Text = Text_Text.Text;
  const obj3 = shared;
  if (obj3.isThemeLight(tmp3)) {
    str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  const intl = tmp7(1113).intl;
  stringResult = intl.string(intl2.t.y2b7CA);
  return <tmp6 style={tmp4.base}>{null}</tmp6>;
};
