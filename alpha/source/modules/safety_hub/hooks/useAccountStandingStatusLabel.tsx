// Module ID: 17144
// Function ID: 17145
// Name: useAccountStandingStatusLabel
// Dependencies: [14081, 14114, 17145, 1113, 17146, 2]
// Exports: useAccountStandingStatusLabel

// Module 17144 (useAccountStandingStatusLabel)
import intl2 from "intl" /* 1113 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 14081 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 14114 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 17145 */;
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
    formatToPlainStringResult = intl.formatToPlainString(tmp(17146).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
  } else {
    let ZTNur7;
    const string = intl.string;
    if (null != safetyHubFetchError) {
      ZTNur7 = tmp(1113).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1113).t.ZTNur7;
    }
    formatToPlainStringResult = string(ZTNur7);
  }
  return formatToPlainStringResult;
}
