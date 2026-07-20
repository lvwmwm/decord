// Module ID: 10127
// Function ID: 78400
// Name: SafetyToolsActionSheetHeader
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 10127 (SafetyToolsActionSheetHeader)
import closure_2 from "result";
import { View } from "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_4, jsxs: closure_5 } = result);
result = { navbarContainer: { "Null": 8, "Null": null, "Null": "\u270A\u{1F3FF}" } };
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
  let obj = { style: tmp.navbarContainer };
  let memo = null != hasBackButton;
  if (memo) {
    memo = React.useMemo(() => {
      let obj = channelId(recipientId[6]);
      obj = { style: tmp.navbarLeft };
      return tmp(obj.getHeaderBackButton(callback), obj);
    }, items1);
  }
  const items2 = [memo, ];
  obj = { INTEGRATION_CREATE: 182714370, ConstraintReasonCode: 1091633154, children: title };
  items2[1] = tmp(arg1(dependencyMap[7]).Text, obj);
  obj.children = items2;
  return callback(View, obj);
};
