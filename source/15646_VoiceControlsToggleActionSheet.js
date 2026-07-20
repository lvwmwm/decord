// Module ID: 15646
// Function ID: 119551
// Name: VoiceControlsToggleActionSheet
// Dependencies: []
// Exports: default

// Module 15646 (VoiceControlsToggleActionSheet)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let closure_10 = { videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4" };
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { borderRadius: importDefault(dependencyMap[7]).radii.sm, overflow: "hidden" };
obj.videoContainer = obj;
obj.bottomSheetWrapper = { paddingHorizontal: 24 };
obj.contentContainer = {};
obj.title = { accessible: "center", id: "center" };
obj.body = {};
let closure_11 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[15]).fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default function VoiceControlsToggleActionSheet(markAsDismissed) {
  const arg1 = markAsDismissed.markAsDismissed;
  const tmp = callback4();
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  let obj = arg1(dependencyMap[8]);
  const isScreenLandscape = obj.useIsScreenLandscape();
  const dependencyMap = isScreenLandscape;
  let obj1 = arg1(dependencyMap[9]);
  const items = [closure_6];
  let num = 1.5;
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (isScreenLandscape) {
    num = 2.0875;
  }
  obj = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(constants.UNKNOWN);
    }
  };
  obj = { style: tmp.bottomSheetWrapper };
  obj1 = {
    style: tmp.contentContainer,
    onLayout(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      let result = width;
      if (isScreenLandscape) {
        result = width / 2;
      }
      closure_1(result);
    }
  };
  const obj2 = { style: tmp.videoContainer, src: closure_10, poster: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png", width: first, height: first / num, muted: true, paused: stateFromStores };
  const items1 = [callback2(importDefault(dependencyMap[11]), obj2), , , ];
  const obj3 = { 0: 24, 9223372036854775807: 24, 0: null, -9223372036854775808: "aa9c26c29990ba7a6584e51ab5c56efa", style: tmp.title };
  const intl = arg1(dependencyMap[13]).intl;
  obj3.children = intl.string(arg1(dependencyMap[13]).t.pT6hue);
  items1[1] = callback2(arg1(dependencyMap[12]).Text, obj3);
  const obj4 = { style: tmp.body, variant: "text-sm/normal" };
  const intl2 = arg1(dependencyMap[13]).intl;
  obj4.children = intl2.string(arg1(dependencyMap[13]).t.tNm8AZ);
  items1[2] = callback2(arg1(dependencyMap[12]).Text, obj4);
  const obj5 = {
    onPress() {
      return markAsDismissed(constants.UNKNOWN);
    }
  };
  const intl3 = arg1(dependencyMap[13]).intl;
  obj5.text = intl3.string(arg1(dependencyMap[13]).t.NX+WJN);
  items1[3] = callback2(arg1(dependencyMap[14]).Button, obj5);
  obj1.children = items1;
  obj.children = callback3(View, obj1);
  obj.children = callback2(View, obj);
  return callback2(arg1(dependencyMap[10]).BottomSheet, obj);
};
