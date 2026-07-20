// Module ID: 9693
// Function ID: 75392
// Name: useLayoutConfig
// Dependencies: []
// Exports: useLayoutConfig

// Module 9693 (useLayoutConfig)
let closure_2 = importDefault(dependencyMap[0]);

export const useLayoutConfig = function useLayoutConfig(size) {
  const arg1 = size;
  size = size.size;
  const dependencyMap = size;
  const vertical = size.vertical;
  const React = vertical;
  const items = [, , , ];
  ({ mode: arr[0], modeConfig: arr[1] } = size);
  items[2] = size;
  items[3] = vertical;
  return React.useMemo((self) => {
    const obj = { size, vertical };
    const mode = self.mode;
    if ("parallax" === mode) {
      const Layouts4 = self(size[1]).Layouts;
      return Layouts4.parallax(obj, self.modeConfig);
    } else if ("horizontal-stack" === mode) {
      const Layouts3 = self(size[1]).Layouts;
      return Layouts3.horizontalStack(self.modeConfig);
    } else if ("vertical-stack" === mode) {
      const Layouts2 = self(size[1]).Layouts;
      return Layouts2.verticalStack(self.modeConfig);
    } else {
      const Layouts = self(size[1]).Layouts;
      return Layouts.normal(obj);
    }
  }, items);
};
