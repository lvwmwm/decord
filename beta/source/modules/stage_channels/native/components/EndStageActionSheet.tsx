// Module ID: 12481
// Function ID: 12482
// Name: EndStageActionSheet
// Dependencies: [19, 17, 5726, 1074, 21, 4836, 576, 4800, 9097, 8051, 1177, 1115, 4832, 5281, 7846, 2]
// Exports: default

// Module 12481 (EndStageActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import StageChannelsConstants from "StageChannelsConstants" /* 5726 */;
import StageChannelActionCreators from "StageChannelActionCreators" /* 7846 */;
import ScrollHandlingActionSheetDefault from "ScrollHandlingActionSheet" /* 8051 */;
import CallsUtils from "CallsUtils" /* 9097 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
let closure_4 = StageChannelsConstants.EXPLICIT_END_STAGE_SHEET_KEY;
const Fonts = Constants.Fonts;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" }, title: obj2, subtitle: { marginTop: 8, textAlign: "center" }, cancelButton: { marginTop: 24, alignSelf: "stretch" }, confirmButton: { marginTop: 8, alignSelf: "stretch" } };
obj2 = { fontSize: 24, fontFamily: Fonts.PRIMARY_BOLD, textAlign: "center", color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  let Button;
  let Button2;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items;
  let obj2;
  let obj6;
  let obj8;
  channel = channel.channel;
  const tmp = closure_7();
  let obj = { children: closure_6(View, obj2) };
  obj2 = { style: tmp.container, children: items };
  let obj3 = { style: tmp.title, accessibilityRole: "header", children: intl.string(channel(1115).t.pADdJu) };
  const tmp2 = ScrollHandlingActionSheetDefault;
  const LegacyText = channel(1177).LegacyText;
  intl = channel(1115).intl;
  items = [closure_5(LegacyText, obj3), , , ];
  const obj4 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default", children: intl2.string(channel(1115).t.mT7jwN) };
  const Text = channel(4832).Text;
  intl2 = channel(1115).intl;
  items[1] = closure_5(Text, obj4);
  const obj5 = { style: tmp.cancelButton, children: closure_5(Button, obj6) };
  obj6 = {
    variant: "secondary",
    text: intl3.string(channel(1115).t.xTwqz2),
    onPress: function handleClose() {
      const obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet(closure_4);
      const obj2 = CallsUtils;
      obj2.handleDisconnect(channel);
    }
  };
  Button = channel(5281).Button;
  intl3 = channel(1115).intl;
  items[2] = closure_5(View, obj5);
  const obj7 = { style: tmp.confirmButton, children: closure_5(Button2, obj8) };
  obj8 = {
    variant: "destructive",
    text: intl4.string(channel(1115).t.wnWqGg),
    onPress() {
      const obj = StageChannelActionCreators;
      obj.endStage(channel);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet(closure_4);
      const obj3 = CallsUtils;
      obj3.handleDisconnect(channel);
    }
  };
  Button2 = channel(5281).Button;
  intl4 = channel(1115).intl;
  items[3] = closure_5(View, obj7);
  return closure_5(tmp2, obj);
};
