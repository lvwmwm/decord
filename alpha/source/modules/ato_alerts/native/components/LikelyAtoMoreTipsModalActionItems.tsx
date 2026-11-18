// Module ID: 11771
// Function ID: 11772
// Name: LikelyAtoMoreTipsModalActionItems
// Dependencies: [19, 1388, 21, 504, 4879, 7259, 6956, 1113, 10324, 2]
// Exports: default

// Module 11771 (LikelyAtoMoreTipsModalActionItems)
import Fragment from "Fragment" /* 21 */;
import UserUtilsDefault from "UserUtils" /* 4879 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1388 */;
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
  const TableRowGroup = senderId(7259).TableRowGroup;
  ({ label: intl.formatToPlainString(senderId(1113).t["F/ID+9"], { username: memo }), subLabel: intl2.string(senderId(1113).t.w2ve0t), onPress: handleMutePressed, icon: null });
  const TableRow = senderId(6956).TableRow;
  intl = senderId(1113).intl;
  intl2 = senderId(1113).intl;
  return <TableRowGroup hasIcons>{null}</TableRowGroup>;
};
