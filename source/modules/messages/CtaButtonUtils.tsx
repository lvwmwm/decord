// Module ID: 11083
// Function ID: 86219
// Name: CtaButtonType
// Dependencies: [4348, 11084, 4347, 566, 2]
// Exports: getCtaButtonType, useCtaButtonType

// Module 11083 (CtaButtonType)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
let obj = { MARK_AS_FALSE_POSITIVE: "mark_as_false_positive", AGE_VERIFICATION_RETRY: "age_verification_retry", CONNECT_TO_TEEN: "connect_to_teen" };
let result = require("isReactiveCheckEnabled").fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export const CtaButtonType = obj;
export const getCtaButtonType = function getCtaButtonType(id, channel_id) {
  const obj = require(11084) /* shouldRenderReportFalsePositiveButton */;
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    if (obj2.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      if (obj3.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
      obj3 = require(4347) /* isReactiveCheckEnabled */;
    }
    obj2 = require(4347) /* isReactiveCheckEnabled */;
  }
  return CONNECT_TO_TEEN;
};
export const useCtaButtonType = function useCtaButtonType(id, channel_id) {
  const obj = require(11084) /* shouldRenderReportFalsePositiveButton */;
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const result = require(4347) /* isReactiveCheckEnabled */.isAgeVerificationMessageWithRetryCta(channel_id, id);
  const obj2 = require(4347) /* isReactiveCheckEnabled */;
  const items = [_isNativeReflectConstruct];
  let result1 = null != require(566) /* initialize */.useStateFromStores(items, () => outer1_2.getPendingConnection());
  if (result1) {
    result1 = require(4347) /* isReactiveCheckEnabled */.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const obj4 = require(4347) /* isReactiveCheckEnabled */;
  }
  if (shouldRenderReportFalsePositiveButton) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else if (result) {
    CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
  } else if (result1) {
    CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
  }
  return CONNECT_TO_TEEN;
};
