// Module ID: 9095
// Function ID: 71245
// Name: GroupDMRow
// Dependencies: [31, 8818, 33, 4320, 9096, 1273, 9097, 4126, 9094, 5165, 2]
// Exports: default

// Module 9095 (GroupDMRow)
import result from "result";
import { UserRowModes } from "UserRowModes";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  channel = channel.channel;
  let NONE = channel.mode;
  if (NONE === undefined) {
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
  let obj = { channel: 0, mode: 0, selected: 0, disabled: 0, onPress: 0 };
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  const tmp4 = onPress(4320)(channel);
  const items = [channel, onPress];
  const callback = React.useCallback(() => {
    if (null != onPress) {
      onPress(channel);
    }
  }, items);
  obj = { size: channel(1273).AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp6 = onPress(9096);
  let obj2 = channel(9097);
  const recipientsLabel = obj2.useRecipientsLabel(channel);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["disabled"] = flag2;
  let tmp10;
  if (null != recipientsLabel) {
    const obj1 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel };
    tmp10 = jsx(channel(4126).Text, { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, children: recipientsLabel });
  }
  obj["subLabel"] = tmp10;
  obj["icon"] = jsx(onPress(9096), {});
  obj["onPress"] = callback;
  let str = "";
  if (null != tmp4) {
    str = tmp4;
  }
  obj["label"] = str;
  obj["labelLineClamp"] = 1;
  obj["height"] = "100%";
  if (NONE === UserRowModes.TOGGLE) {
    obj2 = {};
    const merged2 = Object.assign(obj);
    obj2["checked"] = flag;
    let tmp20 = jsx(channel(9094).TableCheckboxRow, {});
  } else {
    const obj3 = {};
    const merged3 = Object.assign(obj);
    tmp20 = jsx(channel(5165).TableRow, {});
  }
  return tmp20;
};
