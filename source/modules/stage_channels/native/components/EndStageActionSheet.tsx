// Module ID: 12233
// Function ID: 93870
// Name: EndStageActionSheet
// Dependencies: [4113, 22, 11768, 2, 3946, 653, 3948, 1198, 9138, 2, 29, 57, 646, 491, 12245, 2]
// Exports: default

// Module 12233 (EndStageActionSheet)
import "_isNativeReflectConstruct";
import { View } from "apply";
import { EXPLICIT_END_STAGE_SHEET_KEY as closure_4 } from "module_11768";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import result2 from "result2";

({ jsx: closure_5, jsxs: closure_6 } = _isNativeReflectConstruct);
ME = { container: {} };
ME = { fontFamily: require("result2").Fonts.PRIMARY_BOLD, color: require("isTermsFormField").colors.MOBILE_TEXT_HEADING_PRIMARY };
ME.title = ME;
ME.subtitle = { MINIMAL: null, currentScreenId: null };
ME.cancelButton = {};
ME.confirmButton = { -2124314034: "intlMessage", 529464659: "prefixTag" };
ME = ME.createStyles(ME);
const result = result2.fileFinishedImporting("modules/stage_channels/native/components/EndStageActionSheet.tsx");

export default function EndStageActionSheet(channel) {
  const arg1 = channel.channel;
  function handleClose() {
    handleClose(closure_2[7]).hideActionSheet(closure_4);
    const obj = handleClose(closure_2[7]);
    channel(closure_2[8]).handleDisconnect(channel);
  }
  const importDefault = handleClose;
  const tmp = ME();
  let obj = {};
  obj = { style: tmp.container };
  obj = { style: tmp.title, accessibilityRole: "header" };
  const intl = arg1(dependencyMap[11]).intl;
  obj.children = intl.string(arg1(dependencyMap[11]).t.pADdJu);
  const items = [callback(arg1(dependencyMap[10]).LegacyText, obj), , , ];
  const obj1 = { style: tmp.subtitle };
  const intl2 = arg1(dependencyMap[11]).intl;
  obj1.children = intl2.string(arg1(dependencyMap[11]).t.mT7jwN);
  items[1] = callback(arg1(dependencyMap[12]).Text, obj1);
  const obj2 = { style: tmp.cancelButton };
  const obj3 = { variant: "secondary" };
  const intl3 = arg1(dependencyMap[11]).intl;
  obj3.text = intl3.string(arg1(dependencyMap[11]).t.xTwqz2);
  obj3.onPress = handleClose;
  obj2.children = callback(arg1(dependencyMap[13]).Button, obj3);
  items[2] = callback(View, obj2);
  const obj4 = { style: tmp.confirmButton };
  const obj5 = { variant: "destructive" };
  const intl4 = arg1(dependencyMap[11]).intl;
  obj5.text = intl4.string(arg1(dependencyMap[11]).t.wnWqGg);
  obj5.onPress = function onPress() {
    channel(closure_2[14]).endStage(channel);
    handleClose();
  };
  obj4.children = callback(arg1(dependencyMap[13]).Button, obj5);
  items[3] = callback(View, obj4);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(importDefault(dependencyMap[9]), obj);
};
