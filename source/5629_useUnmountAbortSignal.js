// Module ID: 5629
// Function ID: 47988
// Name: useUnmountAbortSignal
// Dependencies: []
// Exports: default, useUnmountAbortSignalWithDelay

// Module 5629 (useUnmountAbortSignal)
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("hooks/useUnmountAbortSignal.tsx");

export default function useUnmountAbortSignal() {
  const tmp = importDefault(dependencyMap[0])(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const require = tmp;
  const unmountEffect = require(dependencyMap[1]).useUnmountEffect(() => {
    tmp.abort();
  });
  return tmp.signal;
};
export const useUnmountAbortSignalWithDelay = function useUnmountAbortSignalWithDelay(arg0) {
  const require = arg0;
  const tmp = importDefault(dependencyMap[0])(() => {
    const abortController = new AbortController();
    return abortController;
  });
  const importDefault = tmp;
  const unmountEffect = require(dependencyMap[1]).useUnmountEffect(() => {
    const timerId = setTimeout(() => {
      closure_1.abort();
    }, arg0);
  });
  return tmp.signal;
};
