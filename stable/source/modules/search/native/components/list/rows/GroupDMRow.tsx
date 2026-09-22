// Module ID: 16762
// Function ID: 16763
// Name: rows/GroupDMRow
// Dependencies: [19, 21, 4789, 11045, 1176, 11046, 4632, 16761, 2]
// Exports: default

// Module 16762 (rows/GroupDMRow)
import native from "native" /* 1176 */;
import useChannelNameDefault from "useChannelName" /* 4789 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 11045 */;
import useRecipientsLabel from "useRecipientsLabel" /* 11046 */;
import SearchListRow from "SearchListRow" /* 16761 */;
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
    tmp3Result = tmp3(tmp5(4632).Text, obj3);
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
