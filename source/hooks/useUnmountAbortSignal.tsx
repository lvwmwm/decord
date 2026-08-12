// Module ID: 5913
// Function ID: 5914
// Name: useUnmountAbortSignal
// Dependencies: [5755, 4770, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 5913 (useUnmountAbortSignal)
const result = require("set").fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = importDefault(5755)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const require = tmp;
  const unmountEffect = require(4770) /* useMountLayoutEffect */.useUnmountEffect(() => {
    tmp.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = importDefault(5755)(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = _require(4770).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};
