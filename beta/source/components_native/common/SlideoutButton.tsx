// Module ID: 10828
// Function ID: 10829
// Name: SlideoutButton
// Dependencies: [19, 17, 1074, 21, 4836, 4683, 576, 5435, 1177, 2]

// Module 10828 (SlideoutButton)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import native from "native" /* 1177 */;
import Pressables from "Pressables" /* 5435 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import ColorUtils_mod from "ColorUtils" /* 4683 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let obj2;
class SlideoutButton {
  constructor(arg0) {
    let IconComponent;
    let color;
    let height;
    let items;
    let items1;
    let obj2;
    let onPress;
    let title;
    ({ title, height } = arg0);
    ({ onPress, color, IconComponent } = arg0);
    if (height === undefined) {
      height = 60;
    }
    const tmp = closure_6();
    const obj = { accessibilityRole: "button", onPress, children: hasOwnProperty(View, obj2) };
    obj2 = { style: items, children: items1 };
    items = [tmp.button, { backgroundColor: color, width: 72, height }];
    const obj3 = { color: nativeDefault.colors.WHITE };
    const PressableOpacity = Pressables.PressableOpacity;
    items1 = [React3(IconComponent, obj3), ];
    const obj4 = { style: tmp.buttonText, children: title.toUpperCase() };
    const LegacyText = native.LegacyText;
    items1[1] = React3(LegacyText, obj4);
    return React3(PressableOpacity, obj);
  }
}
const View = react_native.View;
const Fonts = Constants.Fonts;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { button: { alignSelf: "flex-end", justifyContent: "center", alignItems: "center" }, buttonText: obj2 };
obj2 = { color: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.WHITE, 0.6), fontSize: 12, fontFamily: Fonts.PRIMARY_SEMIBOLD, marginTop: 2, marginHorizontal: 2, textAlign: "center" };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
const metroRequire = createStyles(obj);
SlideoutButton.width = 72;
const result = size.fileFinishedImporting("components_native/common/SlideoutButton.tsx");

export default SlideoutButton;
