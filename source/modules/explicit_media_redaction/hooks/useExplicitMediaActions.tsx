// Module ID: 8190
// Function ID: 64658
// Name: useExplicitMediaActions
// Dependencies: [5, 57, 31, 4029, 2]
// Exports: useExplicitMediaActions

// Module 8190 (useExplicitMediaActions)
import asyncGeneratorStep from "asyncGeneratorStep";
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
const result = require("result").fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx");

export const useExplicitMediaActions = function useExplicitMediaActions(onError) {
  onError = onError.onError;
  const onSuccess = onError.onSuccess;
  const report = onError.report;
  const tmp = callback(first.useState(false), 2);
  first = tmp[0];
  callback = tmp[1];
  const items = [first, onError, onSuccess, report];
  return {
    reportFalsePositive: first.useCallback(report(async () => {
      if (!outer1_4) {
        outer1_3(true);
        yield outer1_2();
        if (null != outer1_1) {
          outer1_1();
        }
        outer1_3(false);
      }
    }), items),
    isReportFalsePositiveLoading: first
  };
};
