// Module ID: 5635
// Function ID: 48083
// Name: useUnmountAbortSignal
// Dependencies: [5450, 4559, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 5635 (useUnmountAbortSignal)
const result = require("set").fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = importDefault(5450)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const require = tmp;
  const unmountEffect = require(4559) /* useMountLayoutEffect */.useUnmountEffect(() => {
    tmp.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = importDefault(5450)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = _require(4559).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      outer1_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};
