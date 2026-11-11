// Module ID: 10827
// Function ID: 10828
// Name: GroupDMRow
// Dependencies: [19, 10177, 21, 5891, 10828, 1187, 10829, 5866, 7667, 7379, 2]
// Exports: default

// Module 10827 (GroupDMRow)
import Fragment from "Fragment" /* 21 */;
import native from "native" /* 1187 */;
import useChannelNameDefault from "useChannelName" /* 5891 */;
import UserRowConstants from "UserRowConstants" /* 10177 */;
import GroupDMAvatarDefault from "GroupDMAvatar" /* 10828 */;
import useRecipientsLabel from "useRecipientsLabel" /* 10829 */;
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
    const obj4 = { variant: "body-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp5Result = tmp5(tmp7(5866).Text, obj4);
  }
  if (str == null) {
    str = "";
  }
  if (NONE === UserRowModes.TOGGLE) {
    const obj5 = { checked: flag };
    const TableCheckboxRow = tmp7(7667).TableCheckboxRow;
    const merged2 = Object.assign(obj3);
    tmp5Result2 = tmp5(TableCheckboxRow, obj5);
  } else {
    const obj6 = {};
    const TableRow = tmp7(7379).TableRow;
    const merged3 = Object.assign(obj3);
    tmp5Result2 = tmp5(TableRow, obj6);
  }
  return tmp5Result2;
};
