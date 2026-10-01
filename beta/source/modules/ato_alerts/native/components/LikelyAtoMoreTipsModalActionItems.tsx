// Module ID: 10924
// Function ID: 10925
// Name: LikelyAtoMoreTipsModalActionItems
// Dependencies: [19, 1372, 21, 504, 4678, 5999, 5917, 1115, 9613, 2]
// Exports: default

// Module 10924 (LikelyAtoMoreTipsModalActionItems)
import Fragment from "Fragment" /* 21 */;
import UserUtilsDefault from "UserUtils" /* 4678 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  let intl;
  let intl2;
  senderId = senderId.senderId;
  const handleMutePressed = senderId.handleMutePressed;
  let obj = senderId(504);
  const items = [UserStore];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = react.useMemo(() => {
    const obj = UserUtilsDefault;
    return obj.getName(stateFromStores);
  }, items2);
  const TableRowGroup = senderId(5999).TableRowGroup;
  ({ label: intl.formatToPlainString(senderId(1115).t["F/ID+9"], { username: memo }), subLabel: intl2.string(senderId(1115).t.w2ve0t), onPress: handleMutePressed, icon: null });
  const TableRow = senderId(5917).TableRow;
  intl = senderId(1115).intl;
  intl2 = senderId(1115).intl;
  return <TableRowGroup hasIcons>{null}</TableRowGroup>;
};
