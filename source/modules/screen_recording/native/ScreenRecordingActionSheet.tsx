// Module ID: 14595
// Function ID: 110005
// Name: ScreenRecordingActionSheet
// Dependencies: [31, 33, 1457, 3979, 12962, 9105, 2, 57, 31, 27, 653, 33, 14604, 5355]
// Exports: default

// Module 14595 (ScreenRecordingActionSheet)
import "module_31";
import { View } from "module_33";
import { useScreenRecordingStore } from "Link";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import useAccessibilityPatchedDescriptors from "useAccessibilityPatchedDescriptors";
import HeaderBackImage from "HeaderBackImage";

({ jsx: closure_5, jsxs: closure_6 } = _createForOfIteratorHelperLoose);
useAccessibilityPatchedDescriptors = {};
useAccessibilityPatchedDescriptors = { "Null": null, "Null": null, gap: require("createNativeStackNavigator").space.PX_16, paddingVertical: require("createNativeStackNavigator").space.PX_16, paddingHorizontal: require("createNativeStackNavigator").space.PX_8, borderRadius: require("createNativeStackNavigator").radii.xl };
useAccessibilityPatchedDescriptors.container = useAccessibilityPatchedDescriptors;
useAccessibilityPatchedDescriptors.closeButton = { position: "absolute", top: require("createNativeStackNavigator").space.PX_8, right: require("createNativeStackNavigator").space.PX_8 };
const obj1 = { position: "absolute", top: require("createNativeStackNavigator").space.PX_8, right: require("createNativeStackNavigator").space.PX_8 };
useAccessibilityPatchedDescriptors.buttonContainer = { gap: require("createNativeStackNavigator").space.PX_8 };
useAccessibilityPatchedDescriptors = useAccessibilityPatchedDescriptors.createStyles(useAccessibilityPatchedDescriptors);
const result = HeaderBackImage.fileFinishedImporting("modules/screen_recording/native/ScreenRecordingActionSheet.tsx");

export default function ScreenRecordingActionSheet() {
  const tmp = useAccessibilityPatchedDescriptors();
  const tmp2 = useScreenRecordingStore((isUploading) => isUploading.isUploading);
  const tmp3 = useScreenRecordingStore((isCompleted) => isCompleted.isCompleted);
  const tmp4 = useScreenRecordingStore((currentStep) => currentStep.currentStep);
  let obj = useScreenRecordingStore((currentSurveyConfig) => currentSurveyConfig.currentSurveyConfig);
  const callback = useScreenRecordingStore((nextStep) => nextStep.nextStep);
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
  const items = [callback2(callback(dependencyMap[6]).Text, obj), , ];
  const obj1 = { variant: "text-md/normal", children: str2 };
  items[1] = callback2(callback(dependencyMap[6]).Text, obj1);
  items[2] = callback2(callback(dependencyMap[7]).Button, {
    disabled: tmp2,
    text: "Done",
    loading: tmp2,
    onPress() {
      callback2();
      callback2(closure_2[8]).hideActionSheet();
    }
  });
  obj.children = items;
  const obj3 = { style: tmp.container };
  const obj4 = {
    style: tmp.closeButton,
    onPress() {
      return callback2(closure_2[8]).hideActionSheet();
    },
    accessibilityLabel: "close",
    children: callback2(callback(dependencyMap[10]).XSmallIcon, { flex: true, flexGrow: "/assets/design/components/Illustration/native/redesign/generated/images" })
  };
  const items1 = [callback2(callback(dependencyMap[9]).PressableOpacity, obj4), , , ];
  const obj5 = { variant: "heading-xl/bold", children: tmp5.title };
  items1[1] = callback2(callback(dependencyMap[6]).Text, obj5);
  const obj6 = { variant: "text-md/normal" };
  let obj9 = importDefault(dependencyMap[11]);
  obj6.children = obj9.parse(tmp5.instructions);
  items1[2] = callback2(callback(dependencyMap[6]).Text, obj6);
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
  obj7.children = callback2(callback(dependencyMap[7]).Button, obj8);
  items1[3] = callback2(View, obj7);
  obj3.children = items1;
  let tmp10Result = callback3(tmp11, obj3);
  if (tmp3) {
    tmp10Result = tmp13;
  }
  obj9 = { children: tmp10Result };
  return callback2(callback(dependencyMap[12]).ActionSheet, obj9);
};
