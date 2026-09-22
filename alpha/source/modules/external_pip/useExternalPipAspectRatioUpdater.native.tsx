// Module ID: 17566
// Function ID: 17567
// Name: useExternalPipAspectRatioUpdater
// Dependencies: [19, 9703, 2]
// Exports: default

// Module 17566 (useExternalPipAspectRatioUpdater)
import ExternalPipDefault from "ExternalPip" /* 9703 */;
import noop from "module_19" /* 19 */;

let size = fn(2);
const result = size.fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default function useExternalPipAspectRatioUpdater(arg0, arg1, set) {
  closure_0 = arg1;
  const current = set;
  noop = noop.useRef(set);
  const insertionEffect = noop.useInsertionEffect(() => {
    closure_2.current = current;
  });
  const items = [arg1];
  const effect = noop.useEffect(() => {
    size = size.getTargetDimensions(ref.current);
    size(current[1]).setPipAspectRatio(size.width, size.height);
    return size.subscribeFromItem(() => {
      const targetDimensions = size.getTargetDimensions(ref.current);
      ({ width, height } = targetDimensions);
      let tmp2 = width === size.width;
      if (tmp2) {
        tmp2 = height === size.height;
      }
      if (!tmp2) {
        size = { width, height };
        ExternalPipDefault.setPipAspectRatio(width, height);
      }
    });
  }, items);
};
