// Module ID: 16279
// Function ID: 125680
// Name: useFetchHighlightedCreatorGuildDetails
// Dependencies: []
// Exports: default

// Module 16279 (useFetchHighlightedCreatorGuildDetails)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx");

export default function useFetchHighlightedCreatorGuildDetails(arg0) {
  let tmp2;
  let tmp4;
  let tmp6;
  const importAll = arg0;
  [tmp2, closure_1] = callback(React.useState(true), 2);
  const tmp = callback(React.useState(true), 2);
  [tmp4, closure_2] = callback(React.useState(), 2);
  const tmp3 = callback(React.useState(), 2);
  [tmp6, closure_3] = callback(React.useState(), 2);
  const callback = React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), []);
  const React = callback;
  const items = [arg0, callback];
  const effect = React.useEffect(() => {
    callback(arg0);
  }, items);
  return { isLoading, error, highlightedCreatorDetails };
};
