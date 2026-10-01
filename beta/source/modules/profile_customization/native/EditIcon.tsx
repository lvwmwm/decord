// Module ID: 14169
// Function ID: 14170
// Name: EditIcon
// Dependencies: [19, 17, 21, 4836, 576, 9713, 2]
// Exports: default

// Module 14169 (EditIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import PencilIcon from "PencilIcon" /* 9713 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = { editIcon: { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH }, xs: size, sm: size1 };
({ alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
size = { width: 24, height: 24, borderRadius: nativeDefault.radii.md };
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
let closure_5 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/profile_customization/native/EditIcon.tsx");

export default function EditIcon(style) {
  style = style.style;
  let str = style.size;
  if (str === undefined) {
    str = "xs";
  }
  const tmp = closure_5();
  let closure_2 = tmp;
  const items = [tmp, style, str];
  return <View style={react.useMemo(() => {
    const iconContainerStyle = [editIcon.editIcon, "sm" === str ? editIcon.sm : editIcon.xs, style];
    return { iconContainerStyle };
  }, items).iconContainerStyle}>{jsx(PencilIcon.PencilIcon, { size: str })}</View>;
};
