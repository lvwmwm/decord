// Module ID: 10370
// Function ID: 10371
// Name: GroupDMRow
// Dependencies: [19, 10320, 21, 4989, 10371, 1177, 10372, 4832, 5916, 5917, 2]
// Exports: default

// Module 10370 (GroupDMRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1177 */;
import useChannelNameDefault from "useChannelName" /* 4989 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10371 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10372 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const UserRowModes = UserRowConstants.UserRowModes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  let tmp5Result;
  let tmp5Result2;
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
    const tmp = UserRowModes;
    NONE = UserRowModes.NONE;
  }
  let flag = channel.selected;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = channel.disabled;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onPress = channel.onPress;
  const merged = Object.assign(channel, Object.assign({ channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0 }));
  let str = useChannelNameDefault(channel);
  const items = [channel, onPress];
  const callback = react.useCallback(() => {
    if (onPress != null) {
      tmp(channel);
    }
  }, items);
  GroupDMAvatarDefault;
  const tmp8 = <tmp6 size={native.AvatarSizes.REFRESH_MEDIUM_32} channel={channel} />;
  const obj2 = useRecipientsLabel;
  const recipientsLabel = obj2.useRecipientsLabel(channel);
  const obj3 = { disabled: flag2, subLabel: tmp5Result, icon: tmp8, onPress: callback, label: str, labelLineClamp: 1, height: "100%" };
  const merged1 = Object.assign(merged);
  tmp5Result = undefined;
  if (null != recipientsLabel) {
    const obj4 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp5Result = tmp5(tmp7(4832).Text, obj4);
  }
  if (str == null) {
    str = "";
  }
  if (NONE === UserRowModes.TOGGLE) {
    const obj5 = { checked: flag };
    const TableCheckboxRow = tmp7(5916).TableCheckboxRow;
    const merged2 = Object.assign(obj3);
    tmp5Result2 = tmp5(TableCheckboxRow, obj5);
  } else {
    const obj6 = {};
    const TableRow = tmp7(5917).TableRow;
    const merged3 = Object.assign(obj3);
    tmp5Result2 = tmp5(TableRow, obj6);
  }
  return tmp5Result2;
};
