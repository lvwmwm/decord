// Module ID: 13430
// Function ID: 13431
// Name: ForLaterNitroUpsellBar
// Dependencies: [19, 1373, 7954, 21, 7265, 11839, 12354, 4294, 1114, 2]
// Exports: default

// Module 13430 (ForLaterNitroUpsellBar)
import openForLaterLimitUpsellDefault from "openForLaterLimitUpsell" /* 11839 */;
import noop from "module_19" /* 19 */;

const require = fn;
const PremiumTypes = fn(1373).PremiumTypes;
const SavedMessagesConstants = fn(7954);
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/saved_messages/native/ForLaterNitroUpsellBar.tsx");

export default function ForLaterNitroUpsellBar(isReminder) {
  isReminder = isReminder.isReminder;
  const isAtLimit = isReminder.isAtLimit;
  let analyticsLocations;
  analyticsLocations = analyticsLocations(7265)().analyticsLocations;
  const items = [isReminder, analyticsLocations];
  const callback = noop.useCallback(() => openForLaterLimitUpsellDefault(isReminder, analyticsLocations), items);
  const tmp2 = jsx;
  const tmp3 = analyticsLocations(12354);
  const premiumTypeDisplayName = isReminder(4294).getPremiumTypeDisplayName(PremiumTypes.TIER_2);
  const intl = isReminder(1114).intl;
  const formatToPlainString = intl.formatToPlainString;
  const t = isReminder(1114).t;
  if (isAtLimit) {
    const obj2 = { nitroTierName: premiumTypeDisplayName, premiumMax: isReminder ? closure_6 : closure_5 };
    formatToPlainString(isReminder ? t["E+mhMh"] : t["5VsCaT"], obj2);
  } else {
    const obj3 = { nitroTierName: premiumTypeDisplayName };
    const obj4 = { text: formatToPlainString(isReminder ? t["W+ZaoS"] : t["0hoV2D"], obj3), isAtLimit, onPress: callback };
    return tmp2(tmp3, obj4);
  }
};
