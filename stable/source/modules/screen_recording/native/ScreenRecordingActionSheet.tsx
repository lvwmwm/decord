// Module ID: 15548
// Function ID: 15549
// Name: ScreenRecordingActionSheet
// Dependencies: [19, 17, 15544, 21, 4837, 588, 4833, 5282, 4801, 5436, 5940, 4824, 6624, 2]
// Exports: default

// Module 15548 (ScreenRecordingActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 588 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4801 */;
import MarkupUtilsDefault from "MarkupUtils" /* 4824 */;
import ScreenRecordingStore from "ScreenRecordingStore" /* 15544 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4837 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let rect;
const View = react_native.View;
const useScreenRecordingStore = ScreenRecordingStore.useScreenRecordingStore;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, closeButton: rect, buttonContainer: obj3 };
obj2 = { justifyContent: "center", alignItems: "center", gap: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.xl };
createStyles = createStyles.createStyles;
rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
obj3 = { display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_8 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingActionSheet.tsx");

export default function ScreenRecordingActionSheet() {
  let Button;
  let closure_0;
  let closure_1;
  let items;
  let items1;
  let obj10;
  let obj8;
  const tmp = closure_7();
  const tmp2 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const tmp3 = useScreenRecordingStore((isCompleted) => isCompleted.isCompleted);
  const tmp4 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  let obj = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  _require = useScreenRecordingStore((nextStep) => nextStep.nextStep);
  importDefault = useScreenRecordingStore((completeActionSheet) => completeActionSheet.completeActionSheet);
  let steps;
  if (obj != null) {
    steps = obj.steps;
  }
  if (steps == null) {
    steps = [];
  }
  let tmp5 = null;
  if (steps.length > tmp4) {
    tmp5 = steps[tmp4];
  }
  let flag;
  if (obj != null) {
    flag = obj.useIsStepCompleted(tmp4);
  }
  if (flag == null) {
    flag = false;
  }
  let str;
  if (obj != null) {
    str = obj.completedTitle;
  }
  if (str == null) {
    str = "Complete";
  }
  let str2;
  if (obj != null) {
    str2 = obj.completedInstructions;
  }
  if (str2 == null) {
    str2 = "Thanks for your feedback!";
  }
  if (null == tmp5) {
    if (null == tmp3) {
      return null;
    }
  }
  const obj2 = { style: tmp.container, children: items };
  items = [closure_5(require("Text/Text").Text, { variant: "heading-xl/bold", children: str }), closure_5(require("Text/Text").Text, { variant: "text-md/normal", children: str2 }), ];
  const obj3 = {
    disabled: tmp2,
    text: "Done",
    loading: tmp2,
    onPress() {
      closure_1();
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
    }
  };
  items[2] = closure_5(require("components/Button/Button").Button, obj3);
  const obj4 = { style: tmp.container, children: items1 };
  const obj5 = {
    style: tmp.closeButton,
    onPress() {
      const obj = closure_1(dependencyMap[8]);
      return obj.hideActionSheet();
    },
    accessibilityLabel: "close",
    children: closure_5(require("XSmallIcon").XSmallIcon, { size: "md", color: "text-default" })
  };
  const tmp11 = closure_6(View, obj2);
  const PressableOpacity = require("Pressables").PressableOpacity;
  items1 = [closure_5(PressableOpacity, obj5), , , ];
  const obj6 = { variant: "heading-xl/bold", children: tmp5.title };
  items1[1] = closure_5(require("Text/Text").Text, obj6);
  const obj7 = { variant: "text-md/normal", children: obj8.parse(tmp5.instructions) };
  const Text = require("Text/Text").Text;
  obj8 = MarkupUtilsDefault;
  items1[2] = closure_5(Text, obj7);
  let tmp12 = !flag;
  const obj9 = { style: tmp.buttonContainer, children: closure_5(Button, obj10) };
  Button = require("components/Button/Button").Button;
  const tmp6 = closure_6;
  const tmp9 = _require;
  if (flag) {
    tmp12 = tmp2;
  }
  obj10 = {
    disabled: tmp12,
    text: "Next",
    loading: tmp2,
    onPress() {
      closure_0();
    }
  };
  items1[3] = closure_5(View, obj9);
  let children = tmp6(tmp7, obj4);
  if (tmp3) {
    children = tmp11;
  }
  return closure_5(tmp9(6624).ActionSheet, { children });
};
