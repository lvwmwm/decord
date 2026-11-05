// Module ID: 7570
// Function ID: 7571
// Name: useUnmountAbortSignal
// Dependencies: [5751, 5731, 2]
// Exports: default, useUnmountAbortSignalWithDelay

// Module 7570 (useUnmountAbortSignal)
import useMountEffect from "useMountEffect" /* 5731 */;
import reactDefault from "react" /* 5751 */;
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
