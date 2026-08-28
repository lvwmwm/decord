// Module ID: 14653
// Function ID: 14654
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 676, 11385, 21, 4413, 14652, 6210, 10250, 1236, 4893, 2]
// Exports: default

// Module 14653 (QuestAccessSuspendedBottomSheet)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 4893 */;
import PromoSheet from "PromoSheet" /* 10250 */;
import closure_3 from "noop" /* 19 */;
import { UserSettingsSections } from "ME" /* 676 */;
import { AccountSettingsTabs } from "AccountSettingsTabs" /* 11385 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = React.useCallback(() => {
    let obj = callback2(4413);
    obj.hideActionSheet(callback(14652).ACTION_SHEET_KEY);
    obj = { screen: constants.ACCOUNT, params: obj };
    obj = { initialTab: constants2.STANDING };
    callback(6210).openUserSettings(obj);
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
