// Module ID: 15404
// Function ID: 117612
// Name: GroupDMRow
// Dependencies: [31, 33, 4321, 9026, 1273, 9027, 4127, 15403, 2]
// Exports: default

// Module 15404 (GroupDMRow)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("computeDefaultGroupDmNameFromUserIds").fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  let accessibilityActions;
  let onAccessibilityAction;
  let trailing;
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  const tmp = onPress(4321)(channel);
  const items = [channel.id, onPress];
  const callback = React.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { size: channel(1273).AvatarSizes.LARGE_48, channel };
  const tmp3 = onPress(9026);
  const tmp4 = jsx(onPress(9026), { size: channel(1273).AvatarSizes.LARGE_48, channel });
  const recipientsLabel = channel(9027).useRecipientsLabel(channel);
  let tmp6;
  if (null != recipientsLabel) {
    obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp6 = jsx(channel(4127).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  obj = {};
  let str = "";
  let str2 = "";
  if (null != tmp) {
    str2 = tmp;
  }
  obj.label = str2;
  obj.icon = tmp4;
  obj.onPress = callback;
  if (null != tmp) {
    str = tmp;
  }
  obj.accessibilityLabel = str;
  obj.subLabel = tmp6;
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return jsx(channel(15403).SearchListRow, {});
};
