// Module ID: 11485
// Function ID: 11486
// Name: ForumPostPinIcon
// Dependencies: [19, 17, 21, 4836, 576, 1177, 11486, 2]
// Exports: default

// Module 11485 (ForumPostPinIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1177 */;
import AssetRegistryDefault from "AssetRegistry" /* 11486 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
const obj = { pin: size, pinIcon: size1 };
size = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND };
createStyles = createStyles.createStyles;
size1 = { height: 14, width: 14, tintColor: nativeDefault.colors.WHITE };
let closure_5 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  containerStyle = containerStyle.containerStyle;
  const tmp = closure_5();
  const items = [tmp.pin, containerStyle];
  ({ source: AssetRegistryDefault, style: tmp.pinIcon });
  const Icon = native.Icon;
  return <View style={items}>{null}</View>;
};
