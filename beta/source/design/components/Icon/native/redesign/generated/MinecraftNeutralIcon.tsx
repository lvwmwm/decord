// Module ID: 8157
// Function ID: 8158
// Name: MinecraftNeutralIcon
// Dependencies: [19, 17, 21, 576, 4530, 8158, 8159, 8160, 2]
// Exports: MinecraftNeutralIcon

// Module 8157 (MinecraftNeutralIcon)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import BaseIconImage4 from "BaseIconImage" /* 4530 */;
import AssetRegistry from "AssetRegistry" /* 8158 */;
import AssetRegistry2 from "AssetRegistry" /* 8159 */;
import AssetRegistry3 from "AssetRegistry" /* 8160 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
const result = size.fileFinishedImporting("design/components/Icon/native/redesign/generated/MinecraftNeutralIcon.tsx");

export const MinecraftNeutralIcon = function MinecraftNeutralIcon(secondaryColor) {
  let color;
  let items;
  let items2;
  let items4;
  let style;
  ({ style, color } = secondaryColor);
  if (color === undefined) {
    color = nativeDefault.colors.INTERACTIVE_ICON_DEFAULT;
  }
  let str = secondaryColor.secondaryColor;
  if (str === undefined) {
    str = "#000";
  }
  let str2 = secondaryColor.tertiaryColor;
  if (str2 === undefined) {
    str2 = "#fff";
  }
  const merged = Object.assign(secondaryColor, Object.assign({ style: 0, color: 0, secondaryColor: 0, tertiaryColor: 0 }));
  const obj = { children: items };
  const obj2 = { source: AssetRegistry, color, style };
  const BaseIconImage = BaseIconImage4.BaseIconImage;
  const merged1 = Object.assign(merged);
  items = [React3(BaseIconImage, obj2), , ];
  const obj3 = { source: AssetRegistry2, color: str, style: items2 };
  const BaseIconImage2 = BaseIconImage4.BaseIconImage;
  const items1 = [style];
  items2 = [];
  items2[HermesBuiltin.arraySpread(items2, items1.flat(), 0)] = { position: "absolute", top: 0 };
  const merged2 = Object.assign(merged);
  items[1] = React3(BaseIconImage2, obj3);
  const obj4 = { source: AssetRegistry3, color: str2, style: items4 };
  const BaseIconImage3 = BaseIconImage4.BaseIconImage;
  const items3 = [style];
  items4 = [];
  items4[HermesBuiltin.arraySpread(items4, items3.flat(), 0)] = { position: "absolute", top: 0 };
  const merged3 = Object.assign(merged);
  items[2] = React3(BaseIconImage3, obj4);
  return hasOwnProperty(View, obj);
};
