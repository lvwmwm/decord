// Module ID: 12611
// Function ID: 12612
// Name: useUnmountAbortSignal
// Dependencies: [5503, 4616, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 12611 (useUnmountAbortSignal)
const result = require("set").fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = importDefault(5503)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const require = tmp;
  const unmountEffect = require(4616) /* useMountLayoutEffect */.useUnmountEffect(() => {
    tmp.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = importDefault(5503)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = _require(4616).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};
