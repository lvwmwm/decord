// Module ID: 12595
// Function ID: 97272
// Name: useUnmountAbortSignal
// Dependencies: [5485, 4594, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 12595 (useUnmountAbortSignal)
const result = require("set").fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = importDefault(5485)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const require = tmp;
  const unmountEffect = require(4594) /* useMountLayoutEffect */.useUnmountEffect(() => {
    tmp.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = importDefault(5485)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = _require(4594).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      outer1_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};
