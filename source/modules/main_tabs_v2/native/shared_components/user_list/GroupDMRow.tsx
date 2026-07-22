// Module ID: 9088
// Function ID: 71204
// Name: GroupDMRow
// Dependencies: []
// Exports: default

// Module 9088 (GroupDMRow)
let closure_3 = importAll(dependencyMap[0]);
const UserRowModes = arg1(dependencyMap[1]).UserRowModes;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  channel = channel.channel;
  const arg1 = channel;
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
  const importDefault = onPress;
  let obj = { 9223372036854775807: false, 0: false, 0: false, -9223372036854775808: false, -9223372036854775808: false };
  Object.setPrototypeOf(null);
  const merged = Object.assign(channel, obj);
  const tmp4 = importDefault(dependencyMap[3])(channel);
  const items = [channel, onPress];
  const callback = React.useCallback(() => {
    if (null != onPress) {
      onPress(channel);
    }
  }, items);
  obj = { size: arg1(dependencyMap[5]).AvatarSizes.REFRESH_MEDIUM_32, channel };
  const tmp6 = importDefault(dependencyMap[4]);
  let obj2 = arg1(dependencyMap[6]);
  const recipientsLabel = obj2.useRecipientsLabel(channel);
  obj = {};
  const merged1 = Object.assign(merged);
  obj["disabled"] = flag2;
  let tmp10;
  if (null != recipientsLabel) {
    const obj1 = { 803799044: 3309567, 1269170180: 601874432, 711589892: 4319821, children: recipientsLabel };
    tmp10 = jsx(arg1(dependencyMap[7]).Text, obj1);
  }
  obj["subLabel"] = tmp10;
  obj["icon"] = jsx(importDefault(dependencyMap[4]), obj);
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
    let tmp20 = jsx(arg1(dependencyMap[8]).TableCheckboxRow, obj2);
  } else {
    const obj3 = {};
    const merged3 = Object.assign(obj);
    tmp20 = jsx(arg1(dependencyMap[9]).TableRow, obj3);
  }
  return tmp20;
};
