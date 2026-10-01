// Module ID: 14306
// Function ID: 14307
// Name: SafetyHubAccountStandingSubwayMarker
// Dependencies: [19, 17, 21, 4836, 576, 1115, 4832, 2]
// Exports: default

// Module 14306 (SafetyHubAccountStandingSubwayMarker)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap;

let closure_4;
let hasOwnProperty;
let obj2;
let size;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { width: 56, display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", rowGap: 8, flex: 1 }, marker: obj2, empty: size, label: { textAlign: "center" }, firstOption: { alignItems: "flex-start", textAlign: "left" }, lastOption: { alignItems: "flex-end", textAlign: "right" } };
obj2 = { display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1, padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
size = { display: "flex", borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, width: "100%", height: "100%" };
let closure_6 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/safety_hub/native/SafetyHubAccountStandingSubwayMarker.tsx");

export default function SafetyHubAccountStandingSubwayMarker(arg0) {
  let color;
  let index;
  let isSelected;
  let items;
  let label;
  let num;
  let num2;
  let numOptions;
  let obj5;
  let onLayout;
  let selectedIcon;
  let status;
  ({ selectedIcon, style: require, isSelected } = arg0);
  ({ index, size, numOptions } = arg0);
  ({ status, onLayout } = arg0);
  let tmp = closure_6();
  dependencyMap = tmp;
  let obj = {};
  const merged = Object.assign(tmp.container);
  const tmp4 = 0 === index ? tmp.firstOption : {};
  const merged1 = Object.assign(tmp4);
  const tmp6 = index === numOptions - 1 ? tmp.lastOption : {};
  const merged2 = Object.assign(tmp6);
  let obj2 = { style: obj, onLayout, children: items };
  const tmp8 = closure_5;
  if (!isSelected) {
    let obj3 = { width: size, height: size, marginLeft: num, marginRight: num2 };
    const merged3 = Object.assign(tmp.marker);
    num = 0;
    if (0 === index) {
      num = -isSelected(576).space.PX_4;
    }
    num2 = 0;
    if (index === numOptions - 1) {
      num2 = -isSelected(576).space.PX_4;
    }
    const obj4 = { style: obj3, children: closure_4(View, obj5) };
    obj5 = { style: tmp.empty };
    selectedIcon = tmp10(tmp9, obj4);
  }
  items = [selectedIcon, ];
  const intl = intl2.intl;
  const obj6 = {
    hook(children, arg1) {
      let obj;
      let obj3;
      const Text = Text_Text.Text;
      const tmp = React3;
      if (isSelected) {
        const obj2 = { style: obj3, variant: "text-xxs/bold", children };
        obj = obj2;
        obj3 = { color: require.color };
      } else {
        obj = { color: "interactive-text-default", variant: "text-xxs/normal", style: label.label, children };
      }
      return tmp(Text, obj, arg1);
    }
  };
  items[1] = intl.format(status, obj6);
  return tmp8(View, obj2);
};
export const SUBWAY_MARKER_WIDTH = 56;
