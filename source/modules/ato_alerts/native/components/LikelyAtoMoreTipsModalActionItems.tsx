// Module ID: 10408
// Function ID: 80179
// Name: LikelyAtoMoreTipsModalActionItems
// Dependencies: []
// Exports: default

// Module 10408 (LikelyAtoMoreTipsModalActionItems)
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  const arg1 = senderId;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => user.getUser(senderId), items1);
  const importDefault = stateFromStores;
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores(closure_2[4]).getName(stateFromStores), items2);
  obj = { hasIcons: true };
  obj = {};
  const intl = arg1(dependencyMap[7]).intl;
  obj.label = intl.formatToPlainString(arg1(dependencyMap[7]).t.F/ID+9, { username: memo });
  const intl2 = arg1(dependencyMap[7]).intl;
  obj.subLabel = intl2.string(arg1(dependencyMap[7]).t.w2ve0t);
  obj.onPress = senderId.handleMutePressed;
  obj.icon = jsx(arg1(dependencyMap[8]).BellSlashIcon, {});
  obj.children = jsx(arg1(dependencyMap[6]).TableRow, obj);
  return jsx(arg1(dependencyMap[5]).TableRowGroup, obj);
};
