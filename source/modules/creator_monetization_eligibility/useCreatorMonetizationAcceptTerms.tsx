// Module ID: 16239
// Function ID: 125481
// Name: useCreateCreatorMonetizationAcceptTermsRequest
// Dependencies: []
// Exports: default

// Module 16239 (useCreateCreatorMonetizationAcceptTermsRequest)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const isGuildOwner = arg1(dependencyMap[3]).isGuildOwner;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/creator_monetization_eligibility/useCreatorMonetizationAcceptTerms.tsx");

export default function useCreateCreatorMonetizationAcceptTermsRequest(arg0, arg1) {
  arg1 = arg0;
  const importDefault = arg1;
  let obj = arg1(closure_3[6]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => guild.getGuild(arg0));
  const importAll = stateFromStores;
  const tmp3 = callback2(React.useState(), 2);
  closure_3 = tmp3[1];
  const tmp4 = callback2(React.useState(false), 2);
  const callback = tmp4[1];
  const isExpeditedOnboardingGuild = arg1(closure_3[7]).useIsExpeditedOnboardingGuild(stateFromStores);
  const callback2 = isExpeditedOnboardingGuild;
  obj = {};
  const obj2 = arg1(closure_3[7]);
  const items1 = [closure_9];
  const items2 = [stateFromStores];
  obj.canSubmitAcceptance = arg1(closure_3[6]).useStateFromStores(items1, () => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = callback(stateFromStores, tmp);
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
