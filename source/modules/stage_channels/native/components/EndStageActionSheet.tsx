// Module ID: 12374
// Function ID: 96261
// Name: EndStageActionSheet
// Dependencies: [31, 27, 4947, 653, 33, 4130, 689, 4098, 8875, 7634, 1273, 1212, 4126, 4543, 7562, 2]
// Exports: default

// Module 12374 (EndStageActionSheet)
import "result";
import { View } from "get ActivityIndicator";
import { EXPLICIT_END_STAGE_SHEET_KEY as closure_4 } from "MAX_STAGE_TOPIC_LENGTH";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingVertical: 24, paddingHorizontal: 16, alignItems: "center" } };
_createForOfIteratorHelperLoose = { fontSize: 24, fontFamily: require("ME").Fonts.PRIMARY_BOLD, textAlign: "center", color: require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY };
_createForOfIteratorHelperLoose.title = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.subtitle = { marginTop: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.cancelButton = { marginTop: 24, alignSelf: "stretch" };
_createForOfIteratorHelperLoose.confirmButton = { marginTop: 8, alignSelf: "stretch" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("MAX_STAGE_TOPIC_LENGTH").fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  channel = channel.channel;
  function handleClose(arg0) {
    handleClose(outer1_2[7]).hideActionSheet(outer1_4);
    const obj = handleClose(outer1_2[7]);
    channel(outer1_2[8]).handleDisconnect(channel);
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header" };
  const intl = channel(1212).intl;
  obj.children = intl.string(channel(1212).t.pADdJu);
  const items = [callback(channel(1273).LegacyText, obj), , , ];
  const obj1 = { style: tmp.subtitle, variant: "text-md/medium", color: "text-default" };
  const intl2 = channel(1212).intl;
  obj1.children = intl2.string(channel(1212).t.mT7jwN);
  items[1] = callback(channel(4126).Text, obj1);
  const obj2 = { style: tmp.cancelButton };
  const obj3 = { variant: "secondary" };
  const intl3 = channel(1212).intl;
  obj3.text = intl3.string(channel(1212).t.xTwqz2);
  obj3.onPress = handleClose;
  obj2.children = callback(channel(4543).Button, obj3);
  items[2] = callback(View, obj2);
  const obj4 = { style: tmp.confirmButton };
  const obj5 = { variant: "destructive" };
  const intl4 = channel(1212).intl;
  obj5.text = intl4.string(channel(1212).t.wnWqGg);
  obj5.onPress = function onPress() {
    channel(outer1_2[14]).endStage(channel);
    handleClose();
  };
  obj4.children = callback(channel(4543).Button, obj5);
  items[3] = callback(View, obj4);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(handleClose(7634), obj);
};
