// Module ID: 14689
// Function ID: 14690
// Name: useAccountStandingStatusLabel
// Dependencies: [11814, 11842, 14690, 1233, 14691, 2]
// Exports: useAccountStandingStatusLabel

// Module 14689 (useAccountStandingStatusLabel)
import set from "set" /* 2 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 11814 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 11842 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14690 */;

const result = set.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = function useAccountStandingStatusLabel() {
  let obj = useSafetyHubAccountStanding;
  const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
  const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
  const obj2 = useSafetyHubInitialized;
  const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
  const intl = getSystemLocale.intl;
  if (safetyHubInitialized) {
    obj = { hook: null };
    obj[0] = function hook(arg0) {
      return arg0;
    };
    let formatToPlainStringResult = intl.formatToPlainString(tmp(14691).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj);
  } else {
    if (null != safetyHubFetchError) {
      let ZTNur7 = tmp(1233).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1233).t.ZTNur7;
    }
    formatToPlainStringResult = intl.string(ZTNur7);
  }
  return formatToPlainStringResult;
};
