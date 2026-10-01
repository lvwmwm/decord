// Module ID: 9484
// Function ID: 9485
// Name: ScreenshareParticipant
// Dependencies: [19, 17, 21, 4836, 576, 8870, 6073, 8871, 4832, 1115, 5281, 9408, 2]
// Exports: default

// Module 9484 (ScreenshareParticipant)
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import LegacyBaseButton from "LegacyBaseButton" /* 6073 */;
import useParticipantTileTapGestureDefault from "useParticipantTileTapGesture" /* 8870 */;
import AssetRegistryDefault from "AssetRegistry" /* 8871 */;
import useScreenshareUtils from "useScreenshareUtils" /* 9408 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
({ View: closure_4, Image: hasOwnProperty } = react_native);
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let obj = { container: obj2, image: { marginBottom: 12 }, title: { textAlign: "center", marginBottom: 8 }, description: { lineHeight: 18, textAlign: "center", marginBottom: 16 } };
obj2 = { alignItems: "center", justifyContent: "center", flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/video_calls/native/components/ScreenshareParticipant.tsx");

export default function ScreenshareParticipant(participant) {
  let intl;
  let intl2;
  let intl3;
  let items2;
  let items3;
  let obj2;
  participant = participant.participant;
  const onSingleTap = participant.onSingleTap;
  const onDoubleTap = participant.onDoubleTap;
  const items = [onSingleTap, participant];
  const containerStyle = participant.containerStyle;
  const items1 = [onDoubleTap, participant];
  const callback = react.useCallback(() => {
    let tmpResult;
    if (onSingleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items);
  const callback1 = react.useCallback(() => {
    let tmpResult;
    if (onDoubleTap != null) {
      tmpResult = tmp(participant);
    }
    return tmpResult;
  }, items1);
  const tmp3 = useParticipantTileTapGestureDefault({ onSingleTapStart: callback, onDoubleTapStart: callback1 });
  const tmp4 = closure_8();
  const obj = { gesture: tmp3, children: metroImportDefault(React3, obj2) };
  obj2 = { style: items2, children: items3 };
  items2 = [tmp4.container, containerStyle];
  const obj3 = { source: AssetRegistryDefault, style: tmp4.image };
  const GestureDetector = LegacyBaseButton.GestureDetector;
  items3 = [metroRequire(hasOwnProperty, obj3), , , ];
  const obj4 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/extrabold", color: "mobile-text-heading-primary", children: intl.string(intl4.t.gMOwov) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items3[1] = metroRequire(Text, obj4);
  const obj5 = { style: tmp4.description, variant: "text-sm/medium", color: "interactive-text-default", children: intl2.string(intl4.t.dKeLGt) };
  const Text2 = Text_Text.Text;
  intl2 = intl4.intl;
  items3[2] = metroRequire(Text2, obj5);
  const obj6 = { variant: "primary-overlay", text: intl3.string(intl4.t.CpkXwZ), onPress: useScreenshareUtils.stopScreenshare };
  const Button = components_Button_Button.Button;
  intl3 = intl4.intl;
  items3[3] = metroRequire(Button, obj6);
  return metroRequire(GestureDetector, obj);
};
