// Module ID: 16914
// Function ID: 16915
// Name: useExternalPipAspectRatioUpdater
// Dependencies: [19, 8886, 2]
// Exports: default

// Module 16914 (useExternalPipAspectRatioUpdater)
import ExternalPipDefault from "ExternalPip" /* 8886 */;
import react_mod from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

let react = react_mod;
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default function useExternalPipAspectRatioUpdater(arg0, arg1, set) {
  let ref;
  let closure_0 = arg1;
  const current = set;
  react = react.useRef(set);
  const insertionEffect = react.useInsertionEffect(() => {
    ref.current = current;
  });
  const items = [arg1];
  const effect = react.useEffect(() => {
    size = size.getTargetDimensions(ref.current);
    const obj = size(current[1]);
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
};
