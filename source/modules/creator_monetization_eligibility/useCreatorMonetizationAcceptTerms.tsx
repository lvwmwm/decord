// Module ID: 16449
// Function ID: 128328
// Name: useCreateCreatorMonetizationAcceptTermsRequest
// Dependencies: [5, 57, 31, 1391, 1838, 1850, 566, 12558, 16450, 4031, 2]
// Exports: default

// Module 16449 (useCreateCreatorMonetizationAcceptTermsRequest)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { isGuildOwner } from "isGuildOwner";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx");

export default function useCreateCreatorMonetizationAcceptTermsRequest(arg0, arg1) {
  const _require = arg0;
  let closure_1 = arg1;
  let obj = _require(566);
  const items = [_createForOfIteratorHelperLoose];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  const tmp3 = isExpeditedOnboardingGuild(React.useState(), 2);
  const dependencyMap = tmp3[1];
  const tmp4 = isExpeditedOnboardingGuild(React.useState(false), 2);
  const callback = tmp4[1];
  isExpeditedOnboardingGuild = _require(12558).useIsExpeditedOnboardingGuild(stateFromStores);
  obj = {};
  const obj2 = _require(12558);
  const items1 = [closure_9];
  const items2 = [stateFromStores];
  obj.canSubmitAcceptance = _require(566).useStateFromStores(items1, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = outer1_7(stateFromStores, tmp);
    }
    return tmp2;
  }, items2);
  obj.error = tmp3[0];
  obj.loading = tmp4[0];
  // CreateGeneratorClosureLongIndex (0x67)
  const items3 = [arg0, arg1, isExpeditedOnboardingGuild];
  obj.submitAcceptTermsRequest = React.useCallback(callback(tmp), items3);
  return obj;
};
