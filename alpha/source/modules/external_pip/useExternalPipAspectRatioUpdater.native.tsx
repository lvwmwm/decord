// Module ID: 17833
// Function ID: 17834
// Name: useExternalPipAspectRatioUpdater
// Dependencies: [19, 558, 576, 5220, 2]

// Module 17833 (useExternalPipAspectRatioUpdater)
import ExternalPipDefault from "ExternalPip" /* 5220 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useExternalPipAspectRatioUpdater(arg0, arg1, cResult) {
  let closure_0;
  let ref;
  let tmp2;
  let tmp4;
  let tmp5;
  _require = arg1;
  const current = cResult;
  let obj = require("react");
  cResult = obj.c(5);
  let obj2 = react;
  dependencyMap = react.useRef(cResult);
  if (cResult[0] !== cResult) {
    const fn = function c() {
      ref.current = current;
    };
    cResult[0] = cResult;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  const insertionEffect = obj2.useInsertionEffect(tmp2);
  if (cResult[2] !== arg1) {
    const fn2 = function h() {
      size = size.getTargetDimensions(ref.current);
      const obj = current(ref[3]);
      obj.setPipAspectRatio(size.width, size.height);
      return size.subscribeFromItem(() => {
        let height;
        let width;
        const targetDimensions = size.getTargetDimensions(ref.current);
        ({ width, height } = targetDimensions);
        const tmp2 = width === size.width && height === size.height;
        if (!tmp2) {
          size = { width, height };
          const obj2 = ExternalPipDefault;
          obj2.setPipAspectRatio(width, height);
        }
      });
    };
    const items = [arg1];
    cResult[2] = arg1;
    cResult[3] = fn2;
    cResult[4] = items;
    tmp5 = items;
    tmp4 = fn2;
  } else {
    tmp4 = cResult[3];
    tmp5 = cResult[4];
  }
  const effect = obj2.useEffect(tmp4, tmp5);
}) : (function useExternalPipAspectRatioUpdater(arg0, arg1, cResult) {
  let closure_0 = arg1;
  const current = cResult;
  const ref = react.useRef(cResult);
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = current;
  });
  const items = [arg1];
  const effect = react.useEffect(() => {
    size = size.getTargetDimensions(ref.current);
    const obj = current(ref[3]);
    obj.setPipAspectRatio(size.width, size.height);
    return size.subscribeFromItem(() => {
      let height;
      let width;
      const targetDimensions = size.getTargetDimensions(ref.current);
      ({ width, height } = targetDimensions);
      const tmp2 = width === size.width && height === size.height;
      if (!tmp2) {
        size = { width, height };
        const obj2 = ExternalPipDefault;
        obj2.setPipAspectRatio(width, height);
      }
    });
  }, items);
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default tmp2;
