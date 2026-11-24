// Module ID: 9991
// Function ID: 9992
// Name: ScreenshareTile
// Dependencies: [19, 17, 1071, 21, 4917, 575, 9992, 5177, 1186, 5604, 9993, 5508, 1112, 2]
// Exports: default

// Module 9991 (ScreenshareTile)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import native from "native" /* 1186 */;
import LegacyBaseButton from "LegacyBaseButton" /* 5177 */;
import Text_Text from "Text/Text" /* 5508 */;
import FastImageDefault from "FastImage" /* 5604 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 9992 */;
import AssetRegistryDefault from "AssetRegistry" /* 9993 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4917 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
const NOOP = Constants.NOOP;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: obj2, image: { marginBottom: 8, width: 60, height: 40 }, label: { lineHeight: 18, textAlign: "center" }, liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 } };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareTile.tsx");

export default function ScreenShareTile(onSingleTap) {
  let intl;
  let items;
  let obj2;
  onSingleTap = onSingleTap.onSingleTap;
  if (onSingleTap === undefined) {
    onSingleTap = NOOP;
  }
  let onDoubleTap = onSingleTap.onDoubleTap;
  if (onDoubleTap === undefined) {
    onDoubleTap = NOOP;
  }
  const tmp = closure_7();
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: metroRequire(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  const obj3 = { style: tmp.liveContainer, children: hasOwnProperty(native.LiveTag, {}) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items = [hasOwnProperty(View, obj3), , ];
  const obj4 = { source: AssetRegistryDefault, style: tmp.image, resizeMode: "contain" };
  const tmp3 = FastImageDefault;
  items[1] = hasOwnProperty(tmp3, obj4);
  const obj5 = { style: tmp.label, variant: "body-xs/semibold", color: "text-overlay-light", children: intl.string(intl2.t.G84gtR) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[2] = hasOwnProperty(Text, obj5);
  return hasOwnProperty(GestureDetector, obj);
};
