// Module ID: 16451
// Function ID: 128220
// Name: useFetchHighlightedCreatorGuildDetails
// Dependencies: [5, 57, 31, 5637, 2]
// Exports: default

// Module 16451 (useFetchHighlightedCreatorGuildDetails)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";

const result = require("result").fileFinishedImporting("modules/guild_role_subscriptions/useFetchHighlightedCreatorGuildDetails.tsx");

export default function useFetchHighlightedCreatorGuildDetails(arg0) {
  let asyncGeneratorStep;
  let _slicedToArray;
  let dependencyMap;
  let tmp2;
  let tmp4;
  let tmp6;
  let closure_0 = arg0;
  [tmp2, dependencyMap] = callback(callback.useState(true), 2);
  const tmp = callback(callback.useState(true), 2);
  [tmp4, asyncGeneratorStep] = callback(callback.useState(), 2);
  const tmp3 = callback(callback.useState(), 2);
  [tmp6, _slicedToArray] = callback(callback.useState(), 2);
  callback = callback.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_2(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), []);
  const items = [arg0, callback];
  const effect = callback.useEffect(() => {
    callback(closure_0);
  }, items);
  return { isLoading, error, highlightedCreatorDetails };
};
