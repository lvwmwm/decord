// Module ID: 6109
// Function ID: 6110
// Name: useUnmountAbortSignal
// Dependencies: [5949, 4945, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 6109 (useUnmountAbortSignal)
import set from "set" /* 2 */;
import useInitialValueDefault from "useInitialValue" /* 5949 */;

const result = set.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const _require = tmp;
  const unmountEffect = _require(4945).useUnmountEffect(() => {
    closure_0.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const _require = arg0;
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  importDefault = tmp;
  const unmountEffect = _require(4945).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};
