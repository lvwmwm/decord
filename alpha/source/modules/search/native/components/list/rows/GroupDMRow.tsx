// Module ID: 18668
// Function ID: 18669
// Name: GroupDMRow
// Dependencies: [19, 21, 5647, 10779, 1188, 10780, 5619, 18653, 2]
// Exports: default

// Module 18668 (GroupDMRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1188 */;
import useChannelNameDefault from "useChannelName" /* 5647 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10779 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10780 */;
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
    tmp3Result = tmp3(tmp5(5619).Text, obj3);
  }
  let str2 = str;
  const SearchListRow = tmp5(18653).SearchListRow;
  if (str == null) {
    str2 = "";
  }
  if (str == null) {
    str = "";
  }
  return <SearchListRow label={str2} icon={tmp6} onPress={callback} accessibilityLabel={str} subLabel={tmp3Result} trailing={trailing} accessibilityActions={accessibilityActions} onAccessibilityAction={onAccessibilityAction} />;
};
