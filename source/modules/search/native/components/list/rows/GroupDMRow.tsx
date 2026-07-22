// Module ID: 15231
// Function ID: 114992
// Name: GroupDMRow
// Dependencies: []
// Exports: default

// Module 15231 (GroupDMRow)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/search/native/components/list/rows/GroupDMRow.tsx");

export default function GroupDMRow(channel) {
  let accessibilityActions;
  let onAccessibilityAction;
  let trailing;
  channel = channel.channel;
  const arg1 = channel;
  const onPress = channel.onPress;
  const importDefault = onPress;
  ({ trailing, onAccessibilityAction, accessibilityActions } = channel);
  const tmp = importDefault(dependencyMap[2])(channel);
  const items = [channel.id, onPress];
  const callback = React.useCallback(() => {
    onPress(channel.id);
  }, items);
  let obj = { size: arg1(dependencyMap[4]).AvatarSizes.LARGE_48, channel };
  const tmp3 = importDefault(dependencyMap[3]);
  const tmp4 = jsx(importDefault(dependencyMap[3]), obj);
  const recipientsLabel = arg1(dependencyMap[5]).useRecipientsLabel(channel);
  let tmp6;
  if (null != recipientsLabel) {
    obj = { 803799044: 3309567, 1269170180: 601874432, 711589892: 4319821, children: recipientsLabel };
    tmp6 = jsx(arg1(dependencyMap[6]).Text, obj);
  }
  obj = {};
  let str = "";
  let str2 = "";
  if (null != tmp) {
    str2 = tmp;
  }
  obj.label = str2;
  obj.icon = tmp4;
  obj.onPress = callback;
  if (null != tmp) {
    str = tmp;
  }
  obj.accessibilityLabel = str;
  obj.subLabel = tmp6;
  obj.trailing = trailing;
  obj.accessibilityActions = accessibilityActions;
  obj.onAccessibilityAction = onAccessibilityAction;
  return jsx(arg1(dependencyMap[7]).SearchListRow, obj);
};
