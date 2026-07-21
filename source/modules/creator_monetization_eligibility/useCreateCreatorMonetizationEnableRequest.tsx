// Module ID: 16273
// Function ID: 125630
// Name: useCreateCreatorMonetizationEnableRequest
// Dependencies: []
// Exports: default

// Module 16273 (useCreateCreatorMonetizationEnableRequest)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx");

export default function useCreateCreatorMonetizationEnableRequest(arg0) {
  let tmp4;
  const importDefault = arg0;
  const tmp2 = callback2(React.useState(), 2);
  let closure_1 = tmp2[1];
  [tmp4, closure_2] = callback2(React.useState(false), 2);
  const tmp5 = callback2(React.useState(false), 2);
  const callback = tmp5[1];
  const tmp3 = callback2(React.useState(false), 2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg0];
  return { error: tmp2[0], loading: tmp4, createEnableRequest: React.useCallback(callback(tmp), items), submittedRequest: tmp5[0] };
};
