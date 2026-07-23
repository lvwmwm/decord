// Module ID: 16406
// Function ID: 127907
// Name: useCreateCreatorMonetizationEnableRequest
// Dependencies: [5, 57, 31, 16380, 4030, 2]
// Exports: default

// Module 16406 (useCreateCreatorMonetizationEnableRequest)
import set from "set";
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("result").fileFinishedImporting("modules/creator_monetization_eligibility/useCreateCreatorMonetizationEnableRequest.tsx");

export default function useCreateCreatorMonetizationEnableRequest(arg0) {
  let dependencyMap;
  let tmp4;
  let closure_0 = arg0;
  const tmp2 = callback2(React.useState(), 2);
  let closure_1 = tmp2[1];
  [tmp4, dependencyMap] = callback2(React.useState(false), 2);
  const tmp5 = callback2(React.useState(false), 2);
  const callback = tmp5[1];
  const tmp3 = callback2(React.useState(false), 2);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg0];
  return { error: tmp2[0], loading: tmp4, createEnableRequest: React.useCallback(callback(tmp), items), submittedRequest: tmp5[0] };
};
