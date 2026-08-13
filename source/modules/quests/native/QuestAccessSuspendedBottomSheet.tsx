// Module ID: 14435
// Function ID: 14436
// Name: QuestAccessSuspendedBottomSheet
// Dependencies: [19, 676, 11329, 21, 4310, 14434, 6059, 7778, 1236, 4755, 2]
// Exports: default

// Module 14435 (QuestAccessSuspendedBottomSheet)
import noop from "noop";
import { UserSettingsSections } from "ME";
import { AccountSettingsTabs } from "AccountSettingsTabs";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("AccountSettingsTabs").fileFinishedImporting("modules/quests/native/QuestAccessSuspendedBottomSheet.tsx");

export default function QuestAccessSuspendedBottomSheet() {
  const callback = React.useCallback(() => {
    let obj = callback2(4310);
    obj.hideActionSheet(callback(14434).ACTION_SHEET_KEY);
    obj = { screen: constants.ACCOUNT, params: obj };
    obj = { initialTab: constants2.STANDING };
    callback(6059).openUserSettings(obj);
  }, []);
  let obj = { title: null, description: null, actions: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.WfwodX);
  const intl2 = require(1236) /* getSystemLocale */.intl;
  obj[1] = intl2.string(require(1236) /* getSystemLocale */.t.I27WXW);
  obj = { grow: true, size: "lg", variant: "primary", text: null, onPress: null };
  const intl3 = require(1236) /* getSystemLocale */.intl;
  obj[3] = intl3.string(require(1236) /* getSystemLocale */.t.hvVgAZ);
  obj[4] = callback;
  obj[2] = jsx(require(4755) /* Button */.Button, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
  return jsx(require(7778) /* PromoSheet */.PromoSheet, { grow: true, size: "lg", variant: "primary", text: null, onPress: null });
};
