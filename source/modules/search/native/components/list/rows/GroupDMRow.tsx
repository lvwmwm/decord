// Module ID: 15485
// Function ID: 15486
// Name: GroupDMRow
// Dependencies: [19, 21, 4380, 9090, 1297, 9091, 4185, 15484, 2]
// Exports: default

// Module 15485 (GroupDMRow)
import noop from "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("computeChannelName").fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  let accessibilityActions;
  let onAccessibilityAction;
  let trailing;
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  let str = onPress(4380)(channel);
  const items = [channel.id, onPress];
  const callback = React.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { size: null, channel: null };
  obj[0] = channel(1297).AvatarSizes.LARGE_48;
  obj[1] = channel;
  const tmp4 = onPress(9090);
  const tmp6 = jsx(onPress(9090), { size: null, channel: null });
  const recipientsLabel = channel(9091).useRecipientsLabel(channel);
  let tmp3Result;
  if (null != recipientsLabel) {
    obj = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: null };
    obj[3] = recipientsLabel;
    tmp3Result = tmp3(tmp5(4185).Text, obj);
  }
  let str2 = str;
  if (str == null) {
    str2 = "";
  }
  obj = { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null };
  if (str == null) {
    str = "";
  }
  obj[3] = str;
  obj[4] = tmp3Result;
  obj[5] = trailing;
  obj[6] = accessibilityActions;
  obj[7] = onAccessibilityAction;
  return jsx(channel(15484).SearchListRow, { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null });
};
