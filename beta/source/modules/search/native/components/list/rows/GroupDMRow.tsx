// Module ID: 16469
// Function ID: 16470
// Name: GroupDMRow
// Dependencies: [19, 21, 4989, 10371, 1177, 10372, 4832, 16468, 2]
// Exports: default

// Module 16469 (GroupDMRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10371 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10372 */;
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
    const obj3 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp3Result = tmp3(tmp5(4832).Text, obj3);
  }
  let str2 = str;
  const SearchListRow = tmp5(16468).SearchListRow;
  if (str == null) {
    str2 = "";
  }
  if (str == null) {
    str = "";
  }
  return <SearchListRow label={str2} icon={tmp6} onPress={callback} accessibilityLabel={str} subLabel={tmp3Result} trailing={trailing} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
};
