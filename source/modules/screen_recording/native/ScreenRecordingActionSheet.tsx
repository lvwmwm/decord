// Module ID: 14721
// Function ID: 112244
// Name: ScreenRecordingActionSheet
// Dependencies: [31, 27, 14717, 33, 4130, 689, 4126, 4543, 4098, 4660, 5119, 4120, 5500, 2]
// Exports: default

// Module 14721 (ScreenRecordingActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { useScreenRecordingStore } from "useScreenRecordingStore";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { justifyContent: "center", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_16, paddingVertical: require("_createForOfIteratorHelperLoose").space.PX_16, paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_8, borderRadius: require("_createForOfIteratorHelperLoose").radii.xl };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.closeButton = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8 };
const obj2 = { display: "flex", flexDirection: "row", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.buttonContainer = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { position: "absolute", top: require("_createForOfIteratorHelperLoose").space.PX_8, right: require("_createForOfIteratorHelperLoose").space.PX_8 };
const result = require("useScreenRecordingStore").fileFinishedImporting("modules/screen_recording/native/ScreenRecordingActionSheet.tsx");

export default function ScreenRecordingActionSheet() {
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const tmp3 = useScreenRecordingStore((isCompleted) => isCompleted.isCompleted);
  const tmp4 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  let obj = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  const _require = useScreenRecordingStore((nextStep) => nextStep.nextStep);
  const importDefault = useScreenRecordingStore((completeActionSheet) => completeActionSheet.completeActionSheet);
  let steps;
  if (null != obj) {
    steps = obj.steps;
  }
  if (null == steps) {
    steps = [];
  }
  let tmp5 = null;
  if (steps.length > tmp4) {
    tmp5 = steps[tmp4];
  }
  let isStepCompleted;
  if (null != obj) {
    isStepCompleted = obj.useIsStepCompleted(tmp4);
  }
  let completedTitle;
  if (null != obj) {
    completedTitle = obj.completedTitle;
  }
  let str = "Complete";
  if (null != completedTitle) {
    str = completedTitle;
  }
  let prop;
  if (null != obj) {
    prop = obj.completedInstructions;
  }
  let str2 = "Thanks for your feedback!";
  if (null != prop) {
    str2 = prop;
  }
  if (null == tmp5) {
    if (null == tmp3) {
      return null;
    }
  }
  obj = { style: tmp.container };
  obj = { variant: "heading-xl/bold", children: str };
  const items = [callback(_require(4126).Text, obj), , ];
  const obj1 = { variant: "text-md/normal", children: str2 };
  items[1] = callback(_require(4126).Text, obj1);
  items[2] = callback(_require(4543).Button, {
    disabled: tmp2,
    text: "Done",
    loading: tmp2,
    onPress() {
      callback2();
      callback2(outer1_2[8]).hideActionSheet();
    }
  });
  obj.children = items;
  const obj3 = { style: tmp.container };
  const obj4 = {
    style: tmp.closeButton,
    onPress() {
      return callback2(outer1_2[8]).hideActionSheet();
    },
    accessibilityLabel: "close",
    children: callback(_require(5119).XSmallIcon, { size: "md", color: "text-default" })
  };
  const items1 = [callback(_require(4660).PressableOpacity, obj4), , , ];
  const obj5 = { variant: "heading-xl/bold", children: tmp5.title };
  items1[1] = callback(_require(4126).Text, obj5);
  const obj6 = { variant: "text-md/normal" };
  let obj9 = importDefault(4120);
  obj6.children = obj9.parse(tmp5.instructions);
  items1[2] = callback(_require(4126).Text, obj6);
  const obj7 = { style: tmp.buttonContainer };
  const obj8 = {};
  let tmp14 = !(null != isStepCompleted && isStepCompleted);
  if (!tmp14) {
    tmp14 = tmp2;
  }
  obj8.disabled = tmp14;
  obj8.text = "Next";
  obj8.loading = tmp2;
  obj8.onPress = function onPress() {
    callback();
  };
  obj7.children = callback(_require(4543).Button, obj8);
  items1[3] = callback(View, obj7);
  obj3.children = items1;
  let tmp10Result = callback2(tmp11, obj3);
  if (tmp3) {
    tmp10Result = tmp13;
  }
  obj9 = { children: tmp10Result };
  return callback(_require(5500).ActionSheet, obj9);
};
