// Module ID: 12484
// Function ID: 12485
// Name: UserProfileApplicationWidgetSkeletons
// Dependencies: [19, 17, 21, 5141, 575, 5747, 2]
// Exports: ImageSkeleton, TextSkeleton

// Module 12484 (UserProfileApplicationWidgetSkeletons)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5747 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5141 */;
import size_mod from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { skeleton: { borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL } };
({ borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL });
let closure_4 = createStyles.createStyles(obj);
let size = size_mod;
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileApplicationWidgetSkeletons.tsx");

export function ImageSkeleton(style) {
  style = style.style;
  const items = [closure_4().skeleton, style];
  return <View style={items} />;
}
export const APPROX_CHAR_WIDTH_RATIO = 0.46;
export function TextSkeleton(widthChars) {
  let num = widthChars.widthChars;
  const variant = widthChars.variant;
  if (num === undefined) {
    num = 15;
  }
  const tmp = closure_4();
  const tmp2 = Text_Text.TextStyleSheet[variant];
  const items = [tmp.skeleton, ];
  size = { width: 0.46 * tmp2.fontSize * num, height: 0.8 * tmp2.lineHeight };
  items[1] = size;
  return <View style={items} />;
}
