// Module ID: 6028
// Function ID: 6029
// Name: CircleErrorIcon
// Dependencies: [19, 17, 21, 576, 4530, 6029, 6030, 2]
// Exports: CircleErrorIcon

// Module 6028 (CircleErrorIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import BaseIconImage3 from "BaseIconImage" /* 4530 */;
import AssetRegistry from "AssetRegistry" /* 6029 */;
import AssetRegistry2 from "AssetRegistry" /* 6030 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/CircleErrorIcon.tsx");

export const CircleErrorIcon = function CircleErrorIcon(color) {
  let items;
  let items2;
  let secondaryColor;
  let style;
  ({ style, secondaryColor } = color);
  if (secondaryColor === undefined) {
    secondaryColor = "transparent";
  }
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  const merged = Object.assign(color, Object.assign({ style: 0, secondaryColor: 0, color: 0 }));
  const obj = { children: items };
  const obj2 = { source: AssetRegistry, color: secondaryColor, style };
  const BaseIconImage = BaseIconImage3.BaseIconImage;
  const merged1 = Object.assign(merged);
  items = [React3(BaseIconImage, obj2), ];
  const obj3 = { source: AssetRegistry2, color: INTERACTIVE_ICON_DEFAULT, style: items2 };
  const BaseIconImage2 = BaseIconImage3.BaseIconImage;
  const items1 = [style];
  items2 = [];
  items2[HermesBuiltin.arraySpread(items2, items1.flat(), 0)] = { position: "absolute", top: 0 };
  const merged2 = Object.assign(merged);
  items[1] = React3(BaseIconImage2, obj3);
  return hasOwnProperty(View, obj);
};
