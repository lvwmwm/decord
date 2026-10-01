// Module ID: 16924
// Function ID: 16925
// Name: VoiceControlsToggleNuxActionSheet
// Dependencies: [32, 19, 17, 4825, 2042, 21, 4836, 576, 5438, 504, 6571, 7755, 4832, 1115, 5281, 2]
// Exports: default

// Module 16924 (VoiceControlsToggleNuxActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault;

let c9;
let metroImportAll;
let obj2;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const src = { videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4" };
let obj = { videoContainer: obj2, bottomSheetWrapper: { paddingHorizontal: 24 }, contentContainer: { flex: 1, alignItems: "center", paddingTop: 24, paddingBottom: 16 }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, marginBottom: 24, textAlign: "center" } };
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_11 = createStyles.createStyles(obj);
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default function VoiceControlsToggleActionSheet(markAsDismissed) {
  let c1;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj4;
  let obj5;
  let tmp3;
  let useReducedMotion;
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  let isScreenLandscape;
  let tmp = closure_11();
  [tmp3, c1] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const obj = markAsDismissed(isScreenLandscape[8]);
  isScreenLandscape = obj.useIsScreenLandscape();
  const items = [AccessibilityStore];
  let num = 1.5;
  const obj2 = markAsDismissed(isScreenLandscape[9]);
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (isScreenLandscape) {
    num = 2.0875;
  }
  const obj3 = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: closure_8(View, obj4)
  };
  obj4 = { style: tmp.bottomSheetWrapper, children: closure_9(View, obj5) };
  obj5 = {
    style: tmp.contentContainer,
    onLayout(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      let result = width;
      const tmp = c1;
      if (isScreenLandscape) {
        result = width / 2;
      }
      tmp(result);
    },
    children: items1
  };
  BottomSheet = tmp4(tmp5[10]).BottomSheet;
  size = { style: tmp.videoContainer, src, poster: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png", width: tmp3, height: tmp3 / num, muted: true, paused: stateFromStores };
  items1 = [closure_8(require("common/Video"), size), , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(isScreenLandscape[13]).t.pT6hue) };
  const Text = tmp4(tmp5[12]).Text;
  intl = tmp4(tmp5[13]).intl;
  items1[1] = closure_8(Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/normal", children: intl2.string(markAsDismissed(isScreenLandscape[13]).t.tNm8AZ) };
  const Text2 = tmp4(tmp5[12]).Text;
  intl2 = tmp4(tmp5[13]).intl;
  items1[2] = closure_8(Text2, obj7);
  const obj8 = {
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    text: intl3.string(markAsDismissed(isScreenLandscape[13]).t["NX+WJN"])
  };
  const Button = tmp4(tmp5[14]).Button;
  intl3 = tmp4(tmp5[13]).intl;
  items1[3] = closure_8(Button, obj8);
  return closure_8(BottomSheet, obj3);
};
