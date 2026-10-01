// Module ID: 8869
// Function ID: 8870
// Name: ScreenshareTile
// Dependencies: [19, 17, 1074, 21, 4836, 576, 8870, 6073, 1177, 8871, 4832, 1115, 2]
// Exports: default

// Module 8869 (ScreenshareTile)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import intl2 from "intl" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4832 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 8870 */;
import AssetRegistryDefault from "AssetRegistry" /* 8871 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: c3, Image: closure_4 } = react_native);
const NOOP = Constants.NOOP;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, image: { marginBottom: 8, width: 60, height: 40 }, label: { lineHeight: 18, textAlign: "center" }, liveContainer: { position: "absolute", top: 8, right: 8, zIndex: 2 } };
obj2 = { alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BLACK, overflow: "hidden", flex: 1 };
let closure_8 = createStyles.createStyles(obj);
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
  const tmp = closure_8();
  const obj = { gesture: useParticipantTileTapGestureDefault({ onSingleTapStart: onSingleTap, onDoubleTapStart: onDoubleTap }), children: metroImportDefault(_false, obj2) };
  obj2 = { style: tmp.container, children: items };
  const obj3 = { style: tmp.liveContainer, children: metroRequire(native.LiveTag, {}) };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items = [metroRequire(_false, obj3), , ];
  const obj4 = { source: AssetRegistryDefault, style: tmp.image, resizeMode: "contain" };
  items[1] = metroRequire(React3, obj4);
  const obj5 = { style: tmp.label, variant: "text-xs/bold", color: "text-overlay-light", children: intl.string(intl2.t.G84gtR) };
  const Text = Text_Text.Text;
  intl = intl2.intl;
  items[2] = metroRequire(Text, obj5);
  return metroRequire(GestureDetector, obj);
};
