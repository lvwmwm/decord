// Module ID: 9307
// Function ID: 9308
// Name: ExperimentalWebBadgeIcon
// Dependencies: [19, 17, 21, 575, 5716, 9308, 9309, 2]
// Exports: ExperimentalWebBadgeIcon

// Module 9307 (ExperimentalWebBadgeIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import BaseIconImage3 from "BaseIconImage" /* 5716 */;
import AssetRegistry from "AssetRegistry" /* 9308 */;
import AssetRegistry2 from "AssetRegistry" /* 9309 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/ExperimentalWebBadgeIcon.tsx");

export function ExperimentalWebBadgeIcon(secondaryColor) {
  let color;
  let items;
  let items2;
  let style;
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = nativeDefault.colors.ICON_MUTED;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#fff";
  }
  const merged = Object.assign(secondaryColor, Object.assign({ style: 0, color: 0, secondaryColor: 0 }));
  const obj = { children: items };
  const obj2 = { source: AssetRegistry, color, style };
  const BaseIconImage = BaseIconImage3.BaseIconImage;
  const merged1 = Object.assign(merged);
  items = [React3(BaseIconImage, obj2), ];
  const obj3 = { source: AssetRegistry2, color: str, style: items2 };
  const BaseIconImage2 = BaseIconImage3.BaseIconImage;
  const items1 = [style];
  items2 = [];
  items2[HermesBuiltin.arraySpread(items2, items1.flat(), 0)] = { position: "absolute", top: 0 };
  const merged2 = Object.assign(merged);
  items[1] = React3(BaseIconImage2, obj3);
  return hasOwnProperty(View, obj);
}
