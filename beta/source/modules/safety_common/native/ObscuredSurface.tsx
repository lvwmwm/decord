// Module ID: 8164
// Function ID: 8165
// Name: ObscuredSurface
// Dependencies: [19, 17, 21, 4836, 576, 8165, 5395, 4832, 1115, 2]
// Exports: default

// Module 8164 (ObscuredSurface)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4832 */;
import ImageWarningIcon2 from "ImageWarningIcon" /* 5395 */;
import ObscuredSurfaceContext from "ObscuredSurfaceContext" /* 8165 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { position: "relative", overflow: "hidden" }, content: { pointerEvents: "none", userSelect: "none" }, cover: obj2, warning: obj3 };
obj2 = { position: "absolute", inset: 0, zIndex: 1, backgroundColor: nativeDefault.colors.SPOILER_HIDDEN_BACKGROUND };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", insetInlineStart: "50%", top: "50%", transform: "translate(-50%, -50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_12, paddingVertical: nativeDefault.space.PX_8, textAlign: "center", userSelect: "none", zIndex: 2 };
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/safety_common/native/ObscuredSurface.tsx");

export default function ObscuredSurface(obscured) {
  let children;
  let description;
  let heading;
  let items;
  let items1;
  let obj2;
  ({ heading, description, children } = obscured);
  obscured = obscured.obscured;
  const tmp = closure_6();
  let tmp3Result = children;
  if (obscured) {
    const obj = { value: ObscuredSurfaceContext.OBSCURED_VALUE, children: hasOwnProperty(View, obj2) };
    const Provider = ObscuredSurfaceContext.ObscuredSurfaceContext.Provider;
    obj2 = { style: tmp.container, children: items };
    const obj3 = { style: tmp.content, accessibilityElementsHidden: true, importantForAccessibility: "no-hide-descendants", accessible: false, "aria-hidden": true, children };
    items = [React3(View, obj3), , ];
    const obj4 = { style: tmp.cover };
    items[1] = React3(View, obj4);
    const obj5 = { style: tmp.warning, children: items1 };
    const obj6 = { size: "lg", color: nativeDefault.colors.TEXT_DEFAULT };
    const ImageWarningIcon = ImageWarningIcon2.ImageWarningIcon;
    items1 = [React3(ImageWarningIcon, obj6), , ];
    const Text = Text_Text.Text;
    if (heading == null) {
      const intl = tmp4(1115).intl;
      heading = intl.string(tmp4(1115).t.xC8Saf);
    }
    const obj7 = { variant: "heading-md/semibold", color: "text-strong", children: heading };
    items1[1] = React3(Text, obj7);
    const Text2 = tmp4(4832).Text;
    if (description == null) {
      const intl2 = tmp4(1115).intl;
      description = intl2.string(tmp4(1115).t["0fc/DG"]);
    }
    const obj8 = { variant: "text-sm/normal", color: "text-muted", children: description };
    items1[2] = React3(Text2, obj8);
    items[2] = hasOwnProperty(View, obj5);
    tmp3Result = tmp3(Provider, obj);
  }
  return tmp3Result;
};
