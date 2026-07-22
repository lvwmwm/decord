// Module ID: 11046
// Function ID: 85980
// Name: CtaButtonType
// Dependencies: []
// Exports: getCtaButtonType, useCtaButtonType

// Module 11046 (CtaButtonType)
let closure_2 = importDefault(dependencyMap[0]);
const obj = { MARK_AS_FALSE_POSITIVE: "mark_as_false_positive", AGE_VERIFICATION_RETRY: "age_verification_retry", CONNECT_TO_TEEN: "connect_to_teen" };
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/messages/CtaButtonUtils.tsx");

export const CtaButtonType = obj;
export const getCtaButtonType = function getCtaButtonType(id, channel_id) {
  const obj = channel_id(dependencyMap[1]);
  if (obj.shouldRenderReportFalsePositiveButton(id)) {
    let CONNECT_TO_TEEN = obj.MARK_AS_FALSE_POSITIVE;
  } else {
    if (obj2.isAgeVerificationMessageWithRetryCta(channel_id, id)) {
      CONNECT_TO_TEEN = obj.AGE_VERIFICATION_RETRY;
    } else {
      if (obj3.isAgeVerificationMessageWithConnectToTeenCta(channel_id, id)) {
        CONNECT_TO_TEEN = obj.CONNECT_TO_TEEN;
      }
      const obj3 = channel_id(dependencyMap[2]);
    }
    const obj2 = channel_id(dependencyMap[2]);
  }
  return CONNECT_TO_TEEN;
};
export const useCtaButtonType = function useCtaButtonType(id, channel_id) {
  const obj = channel_id(dependencyMap[1]);
  const shouldRenderReportFalsePositiveButton = obj.useShouldRenderReportFalsePositiveButton(id);
  const result = channel_id(dependencyMap[2]).isAgeVerificationMessageWithRetryCta(channel_id, id);
  const obj2 = channel_id(dependencyMap[2]);
  const items = [closure_2];
  let result1 = null != channel_id(dependencyMap[3]).useStateFromStores(items, () => pendingConnection.getPendingConnection());
  if (result1) {
    result1 = channel_id(dependencyMap[2]).isAgeVerificationMessageWithConnectToTeenCta(channel_id, id);
    const obj4 = channel_id(dependencyMap[2]);
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
