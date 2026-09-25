// Module ID: 16436
// Function ID: 16437
// Name: rows/GroupDMRow
// Dependencies: [19, 21, 4982, 10360, 1177, 10361, 4825, 16435, 2]
// Exports: default

// Module 16436 (rows/GroupDMRow)
import native from "native" /* 1177 */;
import useChannelNameDefault from "useChannelName" /* 4982 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10360 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10361 */;
import SearchListRow from "SearchListRow" /* 16435 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  let str = useChannelNameDefault(channel);
  const items = [channel.id, onPress];
  const callback = noop.useCallback(() => {
    onPress(channel.id);
  }, items);
  const obj = { size: native.AvatarSizes.LARGE_48, channel };
  const tmp6 = jsx(GroupDMAvatarDefault, { size: native.AvatarSizes.LARGE_48, channel });
  const recipientsLabel = useRecipientsLabel.useRecipientsLabel(channel);
  let tmp3Result;
  if (null != recipientsLabel) {
    const obj3 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp3Result = tmp3(tmp5(4825).Text, obj3);
  }
  let str2 = str;
  if (str == null) {
    str2 = "";
  }
  const obj4 = { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null };
  if (str == null) {
    str = "";
  }
  obj4.accessibilityLabel = str;
  obj4.subLabel = tmp3Result;
  obj4.trailing = trailing;
  obj4.accessibilityActions = accessibilityActions;
  obj4.onAccessibilityAction = onAccessibilityAction;
  return jsx(SearchListRow.SearchListRow, { label: str2, icon: tmp6, onPress: callback, accessibilityLabel: null, subLabel: null, trailing: null, accessibilityActions: null, onAccessibilityAction: null });
};
