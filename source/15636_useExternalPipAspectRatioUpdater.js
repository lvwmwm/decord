// Module ID: 15636
// Function ID: 119438
// Name: useExternalPipAspectRatioUpdater
// Dependencies: []
// Exports: default

// Module 15636 (useExternalPipAspectRatioUpdater)
let closure_2 = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/external_pip/useExternalPipAspectRatioUpdater.native.tsx");

export default function useExternalPipAspectRatioUpdater(arg0, arg1, arg2) {
  const importDefault = arg1;
  const dependencyMap = arg2;
  const React = React.useRef(arg2);
  const insertionEffect = React.useInsertionEffect(() => {
    closure_2.current = arg2;
  });
  const items = [arg1];
  const effect = React.useEffect((arg0, self) => {
    const size = self.getTargetDimensions(ref.current);
    self = size;
    self(arg2[1]).setPipAspectRatio(size.width, size.height);
    return self.subscribeFromItem(() => {
      let height;
      let width;
      const targetDimensions = size.getTargetDimensions(ref.current);
      ({ width, height } = targetDimensions);
      let tmp2 = width === size.width;
      if (tmp2) {
        tmp2 = height === size.height;
      }
      if (!tmp2) {
        const obj = { width, height };
        const size = obj;
        size(closure_1[1]).setPipAspectRatio(width, height);
        const obj2 = size(closure_1[1]);
      }
    });
  }, items);
};
