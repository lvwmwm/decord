// Module ID: 15781
// Function ID: 121830
// Name: VoiceControlsToggleActionSheet
// Dependencies: [57, 31, 27, 4122, 1345, 33, 4130, 689, 4663, 566, 5187, 8302, 4126, 1212, 4543, 2]
// Exports: default

// Module 15781 (VoiceControlsToggleActionSheet)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = { videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4" };
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, overflow: "hidden" };
_createForOfIteratorHelperLoose.videoContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.bottomSheetWrapper = { paddingHorizontal: 24 };
_createForOfIteratorHelperLoose.contentContainer = { flex: 1, alignItems: "center", paddingTop: 24, paddingBottom: 16 };
_createForOfIteratorHelperLoose.title = { marginTop: 16, textAlign: "center" };
_createForOfIteratorHelperLoose.body = { marginTop: 8, marginBottom: 24, textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default function VoiceControlsToggleActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp = _createForOfIteratorHelperLoose();
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  const importDefault = tmp2[1];
  let obj = markAsDismissed(isScreenLandscape[8]);
  isScreenLandscape = obj.useIsScreenLandscape();
  let obj1 = markAsDismissed(isScreenLandscape[9]);
  const items = [_isNativeReflectConstruct];
  let num = 1.5;
  const stateFromStores = obj1.useStateFromStores(items, () => outer1_6.useReducedMotion);
  if (isScreenLandscape) {
    num = 2.0875;
  }
  obj = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(outer1_7.UNKNOWN);
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
  const items1 = [callback2(importDefault(isScreenLandscape[11]), obj2), , , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary" };
  const intl = markAsDismissed(isScreenLandscape[13]).intl;
  obj3.children = intl.string(markAsDismissed(isScreenLandscape[13]).t.pT6hue);
  items1[1] = callback2(markAsDismissed(isScreenLandscape[12]).Text, obj3);
  const obj4 = { style: tmp.body, variant: "text-sm/normal" };
  const intl2 = markAsDismissed(isScreenLandscape[13]).intl;
  obj4.children = intl2.string(markAsDismissed(isScreenLandscape[13]).t.tNm8AZ);
  items1[2] = callback2(markAsDismissed(isScreenLandscape[12]).Text, obj4);
  const obj5 = {
    onPress() {
      return markAsDismissed(outer1_7.UNKNOWN);
    }
  };
  const intl3 = markAsDismissed(isScreenLandscape[13]).intl;
  obj5.text = intl3.string(markAsDismissed(isScreenLandscape[13]).t["NX+WJN"]);
  items1[3] = callback2(markAsDismissed(isScreenLandscape[14]).Button, obj5);
  obj1.children = items1;
  obj.children = callback3(View, obj1);
  obj.children = callback2(View, obj);
  return callback2(markAsDismissed(isScreenLandscape[10]).BottomSheet, obj);
};
