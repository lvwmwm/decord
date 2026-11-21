// Module ID: 16034
// Function ID: 16035
// Name: useAccountStandingStatusLabel
// Dependencies: [12420, 12453, 16035, 1112, 16036, 2]
// Exports: useAccountStandingStatusLabel

// Module 16034 (useAccountStandingStatusLabel)
import intl2 from "intl" /* 1112 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12420 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12453 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 16035 */;
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
    formatToPlainStringResult = intl.formatToPlainString(tmp(16036).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
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
