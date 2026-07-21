// Module ID: 10133
// Function ID: 78429
// Name: SafetyToolsActionSheetHeader
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10133 (SafetyToolsActionSheetHeader)
import closure_2 from "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = result);
result = { navbarContainer: { 0: 8, 0: null, 9223372036854775807: "\u270A\u{1F3FF}" } };
result = { position: "absolute", left: require("result").space.PX_16 };
result.navbarLeft = result;
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/self_mod/shared/native/SafetyToolsActionSheetHeader.tsx");

export default function SafetyToolsActionSheetHeader(channelId) {
  let hasBackButton;
  let title;
  channelId = channelId.channelId;
  const arg1 = channelId;
  const recipientId = channelId.recipientId;
  const dependencyMap = recipientId;
  const warningId = channelId.warningId;
  const React = warningId;
  const warningType = channelId.warningType;
  const View = warningType;
  ({ title, hasBackButton } = channelId);
  const tmp = result();
  const items = [channelId, recipientId, warningId, warningType];
  const callback = React.useCallback(() => {
    const result = channelId(recipientId[5]).openSafetyToolsActionSheet(channelId, recipientId, warningId, warningType);
  }, items);
  const items1 = [callback, tmp.navbarLeft];
  const obj = { style: tmp.navbarContainer };
  let memo = null != hasBackButton;
  if (memo) {
    memo = React.useMemo(() => {
      let obj = channelId(recipientId[6]);
      obj = { style: tmp.navbarLeft };
      return tmp(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [memo, tmp(arg1(dependencyMap[7]).Text, { children: title })];
  obj.children = items2;
  return callback(View, obj);
};
