// Module ID: 16988
// Function ID: 16989
// Name: useAccountStandingStatusLabel
// Dependencies: [13580, 13613, 16989, 1113, 16990, 2]
// Exports: useAccountStandingStatusLabel

// Module 16988 (useAccountStandingStatusLabel)
import intl2 from "intl" /* 1113 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 13580 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 13613 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 16989 */;
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
    formatToPlainStringResult = intl.formatToPlainString(tmp(16990).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
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
