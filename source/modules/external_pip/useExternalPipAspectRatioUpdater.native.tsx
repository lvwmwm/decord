// Module ID: 15771
// Function ID: 121717
// Name: useExternalPipAspectRatioUpdater
// Dependencies: [31, 10233, 2]
// Exports: default

// Module 15771 (useExternalPipAspectRatioUpdater)
import result from "result";

const result = require("set").fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default function useExternalPipAspectRatioUpdater(arg0, arg1, arg2) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  React = React.useRef(arg2);
  const insertionEffect = React.useInsertionEffect(() => {
    result.current = closure_1;
  });
  const items = [arg1];
  const effect = React.useEffect(() => {
    size = size.getTargetDimensions(ref.current);
    callback(table[1]).setPipAspectRatio(size.width, size.height);
    return size.subscribeFromItem(() => {
      let height;
      let width;
      const targetDimensions = size.getTargetDimensions(outer1_2.current);
      ({ width, height } = targetDimensions);
      let tmp2 = width === obj.width;
      if (tmp2) {
        tmp2 = height === obj.height;
      }
      if (!tmp2) {
        obj = { width, height };
        size(table[1]).setPipAspectRatio(width, height);
        const obj2 = size(table[1]);
      }
    });
  }, items);
};
