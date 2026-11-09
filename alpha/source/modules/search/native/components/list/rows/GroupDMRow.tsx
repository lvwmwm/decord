// Module ID: 19075
// Function ID: 19076
// Name: GroupDMRow
// Dependencies: [19, 21, 5776, 10918, 1187, 10919, 5751, 19060, 2]
// Exports: default

// Module 19075 (GroupDMRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1187 */;
import useChannelNameDefault from "useChannelName" /* 5776 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10918 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10919 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  let accessibilityActions;
  let onAccessibilityAction;
  let trailing;
  channel = channel.channel;
  const onPress = channel.onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  let str = useChannelNameDefault(channel);
  const items = [channel.id, onPress];
  const callback = react.useCallback(() => {
    onPress(channel.id);
  }, items);
  GroupDMAvatarDefault;
  const tmp6 = <tmp4 size={native.AvatarSizes.LARGE_48} channel={channel} />;
  const obj2 = useRecipientsLabel;
  const recipientsLabel = obj2.useRecipientsLabel(channel);
  let tmp3Result;
  if (null != recipientsLabel) {
    const obj3 = { variant: "body-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp3Result = tmp3(tmp5(5751).Text, obj3);
  }
  let str2 = str;
  const SearchListRow = tmp5(19060).SearchListRow;
  if (str == null) {
    str2 = "";
  }
  if (str == null) {
    str = "";
  }
  return <SearchListRow label={str2} icon={tmp6} onPress={callback} accessibilityLabel={str} subLabel={tmp3Result} trailing={trailing} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
};
