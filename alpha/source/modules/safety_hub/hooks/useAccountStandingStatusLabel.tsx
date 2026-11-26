// Module ID: 16239
// Function ID: 16240
// Name: useAccountStandingStatusLabel
// Dependencies: [12542, 12584, 16240, 1112, 16241, 2]
// Exports: useAccountStandingStatusLabel

// Module 16239 (useAccountStandingStatusLabel)
import intl2 from "intl" /* 1112 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12542 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12584 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 16240 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export function useAccountStandingStatusLabel() {
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
    formatToPlainStringResult = intl.formatToPlainString(tmp(16241).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
  } else {
    let ZTNur7;
    const string = intl.string;
    if (null != safetyHubFetchError) {
      ZTNur7 = tmp(1112).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1112).t.ZTNur7;
    }
    formatToPlainStringResult = string(ZTNur7);
  }
  return formatToPlainStringResult;
}
