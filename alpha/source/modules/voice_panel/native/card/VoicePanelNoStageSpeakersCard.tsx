// Module ID: 19562
// Function ID: 19563
// Name: VoicePanelNoStageSpeakersCard
// Dependencies: [19, 21, 5170, 575, 7048, 5781, 1113, 4154, 2]

// Module 19562 (VoicePanelNoStageSpeakersCard)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import intl2 from "intl" /* 1113 */;
import _modDef4154 from "module_4154" /* 4154 */;
import Text_Text from "Text/Text" /* 5781 */;
import NativeViewDefault from "NativeView" /* 7048 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5170 */;
import size_mod from "module_2" /* 2 */;

let size;
const jsx = Fragment.jsx;
const obj = { container: size, label: { textAlign: "center" } };
size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", padding: nativeDefault.space.PX_16, backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
let closure_4 = createStyles.createStyles(obj);
const memoResult = react.memo(function VoicePanelNoStageSpeakersCard() {
  let intl;
  const tmp = closure_4();
  ({ style: tmp.label, variant: "heading-sm/semibold", color: "text-overlay-light", children: intl.string(_modDef4154["P63Z/o"]) });
  NativeViewDefault;
  const Heading = Text_Text.Heading;
  intl = intl2.intl;
  return <tmp2 style={tmp.container}>{null}</tmp2>;
});
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelNoStageSpeakersCard.tsx");

export default memoResult;
