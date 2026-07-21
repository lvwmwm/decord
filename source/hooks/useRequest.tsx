// Module ID: 11312
// Function ID: 88021
// Name: useRequest
// Dependencies: []
// Exports: default

// Module 11312 (useRequest)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[5]).fileFinishedImporting("hooks/useRequest.tsx");

export default function useRequest(arg0) {
  const arg1 = arg0;
  const tmp2 = callback2(React.useState(false), 2);
  let closure_1 = tmp2[1];
  const tmp3 = callback2(React.useState(null), 2);
  let closure_2 = tmp3[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [arg0];
  const items1 = [React.useCallback(callback(tmp), items), { loading: tmp2[0], error: tmp3[0] }];
  return items1;
};
