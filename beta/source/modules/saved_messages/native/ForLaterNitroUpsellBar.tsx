// Module ID: 12872
// Function ID: 12873
// Name: ForLaterNitroUpsellBar
// Dependencies: [19, 1374, 7272, 21, 6583, 11206, 11703, 4488, 1115, 2]
// Exports: default

// Module 12872 (ForLaterNitroUpsellBar)
import Fragment from "Fragment" /* 21 */;
import PremiumConstants from "PremiumConstants" /* 1374 */;
import openForLaterLimitUpsellDefault from "openForLaterLimitUpsell" /* 11206 */;
import react from "react" /* 19 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 7272 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  let text;
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(6583)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  const onPress = react.useCallback(() => openForLaterLimitUpsellDefault(isReminder, analyticsLocations), items);
  const tmp3 = analyticsLocations(11703);
  const obj = isReminder(4488);
  const premiumTypeDisplayName = obj.getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = isReminder(1115).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = isReminder(1115).t;
  const tmp2 = jsx;
  if (isAtLimit) {
    const obj2 = { nitroTierName: premiumTypeDisplayName, premiumMax: isReminder ? closure_6 : closure_5 };
    text = formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj2);
  } else {
    const obj3 = { nitroTierName: premiumTypeDisplayName };
    text = formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj3);
  }
  return tmp2(tmp3, { text, isAtLimit, onPress });
};
