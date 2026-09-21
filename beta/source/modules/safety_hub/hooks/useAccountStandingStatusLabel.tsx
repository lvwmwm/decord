// Module ID: 15039
// Function ID: 15040
// Name: useAccountStandingStatusLabel
// Dependencies: [12137, 12165, 15040, 1115, 15041, 2]
// Exports: useAccountStandingStatusLabel

// Module 15039 (useAccountStandingStatusLabel)
import util from "util" /* 1115 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12137 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12165 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 15040 */;
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
    let formatToPlainStringResult = intl.formatToPlainString(tmp(15041).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
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
