// Module ID: 8140
// Function ID: 64393
// Name: useExplicitMediaActions
// Dependencies: []
// Exports: useExplicitMediaActions

// Module 8140 (useExplicitMediaActions)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importAll(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/explicit_media_redaction/hooks/useExplicitMediaActions.tsx");

export const useExplicitMediaActions = function useExplicitMediaActions(onError) {
  onError = onError.onError;
  const arg1 = onError;
  const onSuccess = onError.onSuccess;
  const dependencyMap = onSuccess;
  const report = onError.report;
  const callback = report;
  const tmp = callback2(React.useState(false), 2);
  const first = tmp[0];
  const callback2 = tmp[1];
  const React = first;
  const items = [first, onError, onSuccess, report];
  return {
    reportFalsePositive: React.useCallback(callback(async () => {
      if (!closure_4) {
        callback2(true);
        yield closure_2();
        if (null != callback) {
          callback();
        }
        callback2(false);
      }
    }), items),
    isReportFalsePositiveLoading: first
  };
};
