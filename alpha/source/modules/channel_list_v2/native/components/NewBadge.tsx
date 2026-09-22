// Module ID: 12554
// Function ID: 12555
// Name: NewBadge
// Dependencies: [19, 17, 21, 4757, 1364, 576, 4608, 8120, 4691, 4753, 1115, 2]
// Exports: default

// Module 12554 (NewBadge)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import useThemeDefault from "useTheme" /* 4691 */;
import Text_Text from "Text/Text" /* 4753 */;
import useIsUsingClientThemeDefault from "useIsUsingClientTheme" /* 8120 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_5 = createStyles.createStyles((arg0, arg1) => {
  let num = 0;
  if (obj.isIOS()) {
    num = 1;
  }
  const obj2 = { text: { textAlign: "center", textTransform: "uppercase", marginTop: num }, base: null };
  const obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, paddingHorizontal: 6, paddingVertical: 3, backgroundColor: null };
  obj = PlatformUtils;
  if (tmpResult.isThemeLight(arg1)) {
    if (!arg0) {
      let MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(576).colors.BACKGROUND_BRAND;
    }
    obj3.backgroundColor = MOBILE_TOAST_BACKGROUND_DEFAULT;
    obj2.base = obj3;
    return obj2;
  }
  MOBILE_TOAST_BACKGROUND_DEFAULT = tmp3(576).colors.MOBILE_TOAST_BACKGROUND_DEFAULT;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel_list_v2/native/components/NewBadge.tsx");

export default function NewBadge() {
  const tmp2 = useIsUsingClientThemeDefault();
  const tmp3 = useThemeDefault();
  const tmp4 = closure_5(tmp2, tmp3);
  const obj = { style: tmp4.base, children: null };
  const obj2 = { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null };
  if (obj3.isThemeLight(tmp3)) {
    let str = "text-overlay-light";
  } else {
    str = "text-brand";
  }
  obj2.color = str;
  const intl = tmp7(1115).intl;
  obj2.children = intl.string(util.t.y2b7CA);
  obj.children = jsx(Text_Text.Text, { variant: "text-xxs/bold", style: tmp4.text, color: null, children: null });
  return <View style={tmp4.base}>{null}</View>;
};
