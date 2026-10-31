// Module ID: 19255
// Function ID: 19256
// Name: ActivitiesDebugOverlay
// Dependencies: [19, 17, 21, 5014, 5011, 575, 16294, 16295, 1625, 5624, 2]
// Exports: default

// Module 19255 (ActivitiesDebugOverlay)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Text_Text from "Text/Text" /* 5624 */;
import useThermalStateDefault from "useThermalState" /* 16294 */;
import ThermalStates from "ThermalStates" /* 16295 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import ColorUtils_mod from "ColorUtils" /* 5011 */;
import size from "module_2" /* 2 */;

let ColorUtils;
let closure_4;
let hasOwnProperty;
let rect;
let tmp2;
const useSafeAreaInsetsDefault = tmp2(1625);
const View = react_native.View;
({ jsxs: closure_4, jsx: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: rect, row: { flexDirection: "row" } };
rect = { position: "absolute", top: 0, left: 0, backgroundColor: ColorUtils.hexWithOpacity(nativeDefault.unsafe_rawColors.BLACK, 0.7), paddingRight: 16, paddingBottom: 16 };
createStyles = createStyles.createStyles;
ColorUtils = ColorUtils_mod;
let closure_6 = createStyles(obj);
const result = size.fileFinishedImporting("modules/activities/native/ActivitiesDebugOverlay.tsx");

export default function ActivitiesDebugOverlay() {
  let items;
  let items1;
  let obj3;
  const tmp = closure_6();
  const tmp4 = useThermalStateDefault();
  let str = "text-overlay-light";
  let str2 = "";
  if (ThermalStates.ThermalStates.UNHANDLED !== tmp4) {
    str = "text-feedback-positive";
    str2 = "nominal";
    if (ThermalStates.ThermalStates.NOMINAL !== tmp4) {
      str = "text-feedback-warning";
      str2 = "fair";
      if (ThermalStates.ThermalStates.FAIR !== tmp4) {
        str2 = "serious";
        str = "text-feedback-critical";
        if (ThermalStates.ThermalStates.SERIOUS !== tmp4) {
          if (ThermalStates.ThermalStates.CRITICAL === tmp4) {
            str2 = "critical";
            str = "text-feedback-critical";
          }
        }
      }
    }
  }
  const rect = useSafeAreaInsetsDefault();
  const obj = { style: items, pointerEvents: "none", children: React3(View, obj3) };
  items = [tmp.container, ];
  const obj2 = { paddingTop: rect.top + 16, paddingLeft: rect.left + 16 };
  items[1] = obj2;
  obj3 = { style: tmp.row, children: items1 };
  items1 = [React3(Text_Text.Text, { variant: "text-md/normal", color: "text-overlay-light", children: ["thermal state:", " "] }), hasOwnProperty(Text_Text.Text, { variant: "text-md/normal", color: str, children: str2 })];
  return hasOwnProperty(View, obj);
};
