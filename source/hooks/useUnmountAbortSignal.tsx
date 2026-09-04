// Module ID: 7194
// Function ID: 7195
// Name: useUnmountAbortSignal
// Dependencies: [5553, 4953, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 7194 (useUnmountAbortSignal)
import set from "set" /* 2 */;
import useInitialValueDefault from "useInitialValue" /* 5553 */;

const result = set.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = useInitialValueDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const _require = tmp;
  const unmountEffect = _require(4953).useUnmountEffect(() => {
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
  const unmountEffect = _require(4953).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, closure_0);
  });
  return tmp.signal;
};
