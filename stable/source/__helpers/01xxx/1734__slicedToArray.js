// Module ID: 1734
// Function ID: 1735
// Name: _slicedToArray
// Dependencies: [32]
// Exports: registerReportFatalRemoteError, registerWorkletStackDetails

// Module 1734 (_slicedToArray)
import _slicedToArray from "_slicedToArray" /* 32 */;

function reportFatalRemoteError(stack, arg1) {
  let message;
  let name;
  const str = stack.stack;
  ({ message, name } = stack);
  const error = new Error("[Worklets]");
  error.message = message;
  let closure_0;
  let tmp2;
  if ("" !== str) {
    if (undefined !== str) {
      let match = str.match(/worklet_(\d+):(\d+):(\d+)/g);
      closure_0 = str;
      let tmp3 = null;
      if (match != null) {
        const item = match.forEach((item) => {
          const parts = item.split(/:|_/);
          const tmp2 = _slicedToArray(parts.map(Number), 4);
          const tmp3 = tmp2[2];
          const tmp4 = tmp2[3];
          const value = map.get(tmp2[1]);
          if (value) {
            const tmpResult = _slicedToArray(value, 3);
            let first;
            const tmp7 = tmpResult[1];
            const tmp8 = tmpResult[2];
            if (tmpResult[0].stack != null) {
              const parts1 = str.split("\n");
              if (parts1 != null) {
                first = parts1[0];
              }
            }
            if (first) {
              let items1;
              const obj = /@([^@]+):(\d+):(\d+)/;
              const match = obj.exec(first);
              if (match) {
                const tmpResult3 = _slicedToArray(match, 4);
                const items = [tmpResult3[1], , ];
                const _Number = Number;
                const tmp14 = tmpResult3[3];
                items[1] = Number(tmpResult3[2]);
                const _Number2 = Number;
                items[2] = Number(tmp14);
                items1 = items;
              }
              const tmpResult4 = _slicedToArray(items1, 3);
              const _HermesInternal = HermesInternal;
              closure_0 = closure_0.replace(item, "" + tmpResult4[0] + ":" + tmp3 + tmpResult4[1] + tmp7 + ":" + tmp4 + tmpResult4[2] + tmp8);
            }
            items1 = ["unknown", 0, 0];
          }
        });
      }
      tmp2 = closure_0;
    }
  }
  error.stack = tmp2;
  error.name = name;
  if (arg1) {
    throw error;
  } else {
    const _globalThis = globalThis;
    const _ErrorUtils = ErrorUtils;
    _ErrorUtils.reportFatalError(error);
  }
}
const map = new Map();

export function registerWorkletStackDetails(arg0, arg1) {
  const result = map.set(arg0, arg1);
}
export { reportFatalRemoteError };
export function registerReportFatalRemoteError() {
  globalThis.__reportFatalRemoteError = reportFatalRemoteError;
}
