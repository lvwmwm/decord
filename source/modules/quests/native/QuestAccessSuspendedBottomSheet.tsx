// Module ID: 15043
// Function ID: 15044
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 21, 4448, 15042, 11841, 10159, 1233, 4936, 2]
// Exports: default

// Module 15043 (QuestAccessSuspendedBottomSheet)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import Button from "Button" /* 4936 */;
import PromoSheet from "PromoSheet" /* 10159 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = React.useCallback(() => {
    callback2(4448).hideActionSheet(callback(15042).ACTION_SHEET_KEY);
    const obj = callback2(4448);
    callback(11841).openAccountStanding();
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.WfwodX);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.I27WXW);
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = getSystemLocale.intl;
  obj[3] = intl3.string(getSystemLocale.t.hvVgAZ);
  obj[4] = callback;
  obj[2] = jsx(Button.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(PromoSheet.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};
