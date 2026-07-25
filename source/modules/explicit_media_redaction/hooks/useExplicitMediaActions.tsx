// Module ID: 9827
// Function ID: 76212
// Name: useExplicitMediaActions
// Dependencies: [5, 57, 31, 4030, 2]
// Exports: useExplicitMediaActions

// Module 9827 (useExplicitMediaActions)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx");

export const useExplicitMediaActions = function useExplicitMediaActions(onError) {
  onError = onError.onError;
  const onSuccess = onError.onSuccess;
  const report = onError.report;
  const tmp2 = callback(first.useState(false), 2);
  first = tmp2[0];
  callback = tmp2[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [first, onError, onSuccess, report];
  return { reportFalsePositive: first.useCallback(report(tmp), items), isReportFalsePositiveLoading: first };
};
