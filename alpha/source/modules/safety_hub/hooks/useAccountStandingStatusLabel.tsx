// Module ID: 15947
// Function ID: 15948
// Name: useAccountStandingStatusLabel
// Dependencies: [558, 576, 12756, 12790, 15948, 1128, 15949, 2]

// Module 15947 (useAccountStandingStatusLabel)
import react from "react" /* 576 */;
import intl3 from "intl" /* 1128 */;
import useSafetyHubAccountStanding from "useSafetyHubAccountStanding" /* 12756 */;
import useSafetyHubInitialized from "useSafetyHubInitialized" /* 12790 */;
import useSafetyHubFetchError from "useSafetyHubFetchError" /* 15948 */;
import SafetyHubAccountStandingLabels from "SafetyHubAccountStandingLabels" /* 15949 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useAccountStandingStatusLabel() {
  const obj = react;
  const cResult = obj.c(5);
  const obj2 = useSafetyHubAccountStanding;
  const safetyHubAccountStanding = obj2.useSafetyHubAccountStanding();
  const obj3 = useSafetyHubInitialized;
  const safetyHubInitialized = obj3.useSafetyHubInitialized();
  const obj4 = useSafetyHubFetchError;
  const safetyHubFetchError = obj4.useSafetyHubFetchError();
  if (safetyHubInitialized) {
    let tmp10;
    if (cResult[2] !== safetyHubAccountStanding.state) {
      let tmp12;
      const _Symbol = Symbol;
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function u(arg0) {
          return arg0;
        };
        cResult[4] = fn;
        tmp12 = fn;
      } else {
        tmp12 = cResult[4];
      }
      const intl2 = tmp(1128).intl;
      const obj5 = { hook: tmp12 };
      const formatToPlainStringResult = intl2.formatToPlainString(SafetyHubAccountStandingLabels.ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj5);
      cResult[2] = safetyHubAccountStanding.state;
      cResult[3] = formatToPlainStringResult;
      tmp10 = formatToPlainStringResult;
    } else {
      tmp10 = cResult[3];
    }
    return tmp10;
  } else {
    let tmp7;
    if (cResult[0] !== safetyHubFetchError) {
      let ZTNur7;
      const intl = tmp(1128).intl;
      const string = intl.string;
      if (null != safetyHubFetchError) {
        ZTNur7 = tmp(1128).t.TDRvqs;
      } else {
        ZTNur7 = tmp(1128).t.ZTNur7;
      }
      const stringResult = string(ZTNur7);
      cResult[0] = safetyHubFetchError;
      cResult[1] = stringResult;
      tmp7 = stringResult;
    } else {
      tmp7 = cResult[1];
    }
    return tmp7;
  }
}) : (function useAccountStandingStatusLabel() {
  let formatToPlainStringResult;
  const obj = useSafetyHubAccountStanding;
  const safetyHubAccountStanding = obj.useSafetyHubAccountStanding();
  const obj2 = useSafetyHubInitialized;
  const safetyHubInitialized = obj2.useSafetyHubInitialized();
  const obj3 = useSafetyHubFetchError;
  const safetyHubFetchError = obj3.useSafetyHubFetchError();
  const intl = intl3.intl;
  if (safetyHubInitialized) {
    const obj4 = {
      hook(arg0) {
          return arg0;
        }
    };
    formatToPlainStringResult = intl.formatToPlainString(tmp(15949).ACCOUNT_STANDING_SHORT_STATUS[safetyHubAccountStanding.state], obj4);
  } else {
    let ZTNur7;
    const string = intl.string;
    if (null != safetyHubFetchError) {
      ZTNur7 = tmp(1128).t.TDRvqs;
    } else {
      ZTNur7 = tmp(1128).t.ZTNur7;
    }
    formatToPlainStringResult = string(ZTNur7);
  }
  return formatToPlainStringResult;
});
const result = size.fileFinishedImporting("modules/safety_hub/hooks/useAccountStandingStatusLabel.tsx");

export const useAccountStandingStatusLabel = tmp2;
