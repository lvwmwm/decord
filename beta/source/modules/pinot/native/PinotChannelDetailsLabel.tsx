// Module ID: 18841
// Function ID: 18842
// Name: PinotChannelDetailsLabel
// Dependencies: [19, 21, 4913, 575, 11851, 1112, 3508, 7030, 5595, 5504, 2]
// Exports: PinotChannelDetailsLabel

// Module 18841 (PinotChannelDetailsLabel)
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import _modDef3508 from "module_3508" /* 3508 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5595 */;
import react from "react" /* 19 */;
import createStyles_mod from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let obj2;
let obj3;
const jsx = Fragment.jsx;
const hitSlop = { top: 8, bottom: 8, left: 4, right: 8 };
let createStyles = createStyles_mod;
let obj = { label: obj2, text: obj3 };
obj2 = { alignSelf: "flex-start", alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_24, paddingHorizontal: nativeDefault.space.PX_8, borderWidth: 1, borderRadius: nativeDefault.radii.round, borderColor: nativeDefault.colors.CONTROL_SECONDARY_BORDER_DEFAULT, backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.CONTROL_SECONDARY_TEXT_DEFAULT };
let closure_5 = createStyles(obj);
const result = size.fileFinishedImporting("modules/pinot/native/PinotChannelDetailsLabel.tsx");

export function PinotChannelDetailsLabel(channel) {
  let stringResult1;
  channel = channel.channel;
  const tmp = closure_5();
  let obj = stringResult1(11851);
  if (obj.useIsPinotChannelLabelVisible(channel, "mobile_channel_details_label")) {
    const intl = tmp2(1112).intl;
    const stringResult = intl.string(_modDef3508.uneDIi);
    const intl2 = tmp2(1112).intl;
    stringResult1 = intl2.string(_modDef3508["01KOls"]);
    const PressableOpacity = tmp2(7030).PressableOpacity;
    return <PressableOpacity onPress={function handlePress() {
      const obj = ToastActionCreatorsDefault;
      const obj2 = { text: stringResult1 };
      obj.open("PINOT_CHANNEL_DETAILS_LABEL", obj2);
    }} hitSlop={hitSlop} style={tmp.label} accessibilityRole="button" accessibilityLabel={stringResult} accessibilityHint={stringResult1}>{null}</PressableOpacity>;
  } else {
    return null;
  }
}
