// Module ID: 10422
// Function ID: 80224
// Name: LikelyAtoMoreTipsModalActionItems
// Dependencies: [31, 1850, 33, 566, 4004, 5536, 5198, 1212, 10206, 2]
// Exports: default

// Module 10422 (LikelyAtoMoreTipsModalActionItems)
import result from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/ato_alerts/native/components/LikelyAtoMoreTipsModalActionItems.tsx");

export default function LikelyAtoMoreTipsModalActionItems(senderId) {
  senderId = senderId.senderId;
  let obj = senderId(566);
  const items = [_isNativeReflectConstruct];
  const items1 = [senderId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.getUser(senderId), items1);
  const items2 = [stateFromStores];
  const memo = React.useMemo(() => stateFromStores(outer1_2[4]).getName(stateFromStores), items2);
  obj = { hasIcons: true };
  obj = {};
  const intl = senderId(1212).intl;
  obj.label = intl.formatToPlainString(senderId(1212).t["F/ID+9"], { username: memo });
  const intl2 = senderId(1212).intl;
  obj.subLabel = intl2.string(senderId(1212).t.w2ve0t);
  obj.onPress = senderId.handleMutePressed;
  obj.icon = jsx(senderId(10206).BellSlashIcon, {});
  obj.children = jsx(senderId(5198).TableRow, {});
  return jsx(senderId(5536).TableRowGroup, {});
};
