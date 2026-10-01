// Module ID: 14296
// Function ID: 14297
// Name: useAccountStandingStatusLabel
// Dependencies: [11361, 11389, 14297, 1115, 14298, 2]
// Exports: useAccountStandingStatusLabel

// Module 14296 (useAccountStandingStatusLabel)
import intl2 from "intl" /* 1115 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 11361 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 11389 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 14297 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = function useAccountStandingStatusLabel() {
  let formatToPlainStringResult;
  const obj = useSafetyHubAccountStanding;
  const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
  const obj2 = useSafetyHubInitialized;
  const safetyHubInitialized = obj2.useSafetyHubInitialized();
  const obj3 = useSafetyHubFetchError;
  const safetyHubFetchError = obj3.useSafetyHubFetchError();
  const intl = intl2.intl;
  if (safetyHubInitialized) {
    const obj4 = {
      hook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl.formatToPlainString(tmp(14298).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
  } else {
    let ZTNur7;
    const string = intl.string;
    if (null != safetyHubFetchError) {
      ZTNur7 = tmp(1115).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1115).t.ZTNur7;
    }
    formatToPlainStringResult = string(ZTNur7);
  }
  return formatToPlainStringResult;
};
