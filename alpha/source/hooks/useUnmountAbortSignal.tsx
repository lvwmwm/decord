// Module ID: 7485
// Function ID: 7486
// Name: useUnmountAbortSignal
// Dependencies: [5496, 5478, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 7485 (useUnmountAbortSignal)
import useMountEffect from "useMountEffect" /* 5478 */;
import reactDefault from "react" /* 5496 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = reactDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  let closure_0 = tmp;
  const obj = useMountEffect;
  const unmountEffect = obj.useUnmountEffect(() => {
    closure_0.abort();
  });
  return tmp.signal;
};
export function useUnmountAbortSignalWithDelay(arg0) {
  let closure_0 = arg0;
  const tmp = reactDefault(() => {
    const abortController = new AbortController();
    return abortController;
  });
  let closure_1 = tmp;
  const obj = useMountEffect;
  const unmountEffect = obj.useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1_1.abort();
    }, closure_0);
  });
  return tmp.signal;
}
