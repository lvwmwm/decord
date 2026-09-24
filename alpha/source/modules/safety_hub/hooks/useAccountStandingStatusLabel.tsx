// Module ID: 15106
// Function ID: 15107
// Name: useAccountStandingStatusLabel
// Dependencies: [12225, 12253, 15107, 1115, 15108, 2]
// Exports: useAccountStandingStatusLabel

// Module 15106 (useAccountStandingStatusLabel)
import util from "util" /* 1115 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12225 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12253 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 15107 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = function useAccountStandingStatusLabel() {
  const safetyHubAccountStanding = useSafetyHubAccountStanding.useSafetyHubAccountStanding();
  const safetyHubInitialized = useSafetyHubInitialized.useSafetyHubInitialized();
  const safetyHubFetchError = useSafetyHubFetchError.useSafetyHubFetchError();
  const intl = util.intl;
  if (safetyHubInitialized) {
    const obj4 = {
      hook(arg0) {
          return arg0;
        }
    };
    let formatToPlainStringResult = intl.formatToPlainString(tmp(15108).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
  } else {
    if (null != safetyHubFetchError) {
      let ZTNur7 = tmp(1115).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1115).t.ZTNur7;
    }
    formatToPlainStringResult = intl.string(ZTNur7);
  }
  return formatToPlainStringResult;
};
