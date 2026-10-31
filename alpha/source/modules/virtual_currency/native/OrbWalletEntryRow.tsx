// Module ID: 17696
// Function ID: 17697
// Name: OrbWalletEntryRow
// Dependencies: [19, 17, 15625, 21, 5014, 575, 7306, 1113, 2172, 6977, 9532, 5624, 7378, 2]
// Exports: OrbWalletEntryRow

// Module 17696 (OrbWalletEntryRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import intl3 from "intl" /* 1113 */;
import _modDef2172 from "module_2172" /* 2172 */;
import Card_Card from "Card/Card" /* 6977 */;
import Badge_Badge from "Badge/Badge" /* 7306 */;
import OrbChallengesStore from "OrbChallengesStore" /* 15625 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
function OrbWalletEntryBadge(notificationType) {
  let intl;
  let obj2;
  notificationType = notificationType.notificationType;
  if (constants.NEW_ACHIEVEMENT === notificationType) {
    return hasOwnProperty(Badge_Badge.Badge, { type: "new", variant: "primary" });
  } else if (tmp.UNCLAIMED_ACHIEVEMENT === notificationType) {
    const obj = { type: obj2, variant: "primary" };
    obj2 = { text: intl.string(_modDef2172.WmfVjs) };
    const Badge = Badge_Badge.Badge;
    intl = intl3.intl;
    return hasOwnProperty(Badge, obj);
  } else {
    return null;
  }
}
const View = react_native.View;
const constants = OrbChallengesStore.ClientUnreadNotificationType;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { row: obj2, balance: obj3, balanceText: { flexShrink: 1 }, trailing: obj4 };
obj2 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles(obj);
const result = size.fileFinishedImporting("modules/virtual_currency/native/OrbWalletEntryRow.tsx");

export function OrbWalletEntryRow(onPress) {
  let balance;
  let formatToPlainString;
  let intl2;
  let items;
  let items1;
  let items2;
  let notificationType;
  let obj2;
  let zPaLL9;
  ({ balance, notificationType } = onPress);
  onPress = onPress.onPress;
  const tmp = closure_7();
  let str;
  if (balance != null) {
    str = balance.toString();
  }
  if (str == null) {
    str = "";
  }
  const obj = { onPress, radius: 12, accessibilityRole: "button", accessibilityLabel: formatToPlainString(zPaLL9, { balance: str }), children: metroRequire(View, obj2) };
  const Card = Card_Card.Card;
  const intl = intl3.intl;
  formatToPlainString = intl.formatToPlainString;
  if (null != notificationType) {
    zPaLL9 = tmp3(1113).t.AgMngw;
  } else {
    zPaLL9 = tmp3(1113).t.zPaLL9;
  }
  obj2 = { style: tmp.row, children: items1 };
  const obj3 = { style: tmp.balance, children: items };
  const obj4 = { size: "sm", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
  const OrbsIcon = tmp3(9532).OrbsIcon;
  items = [hasOwnProperty(OrbsIcon, obj4), ];
  const obj5 = { variant: "text-sm/medium", color: "text-subtle", lineClamp: 1, style: tmp.balanceText, children: intl2.formatToPlainString(intl3.t["8xDISf"], { balance: str }) };
  const Text = tmp3(5624).Text;
  intl2 = tmp3(1113).intl;
  items[1] = hasOwnProperty(Text, obj5);
  items1 = [metroRequire(View, obj3), ];
  const obj6 = { style: tmp.trailing, children: items2 };
  items2 = [hasOwnProperty(OrbWalletEntryBadge, { notificationType }), ];
  const obj7 = { size: "refresh_sm", color: nativeDefault.colors.ICON_SUBTLE, accessible: false };
  const ChevronSmallRightIcon = tmp3(7378).ChevronSmallRightIcon;
  items2[1] = hasOwnProperty(ChevronSmallRightIcon, obj7);
  items1[1] = metroRequire(View, obj6);
  return hasOwnProperty(Card, obj);
}
