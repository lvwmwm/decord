// Module ID: 11037
// Function ID: 11038
// Dependencies: [19, 11038]
// Exports: useLayoutConfig

// Module 11037
import Layouts5 from "Layouts" /* 11038 */;
import noop from "module_19" /* 19 */;

require = arg1;

export const useLayoutConfig = function useLayoutConfig(size) {
  size = size.size;
  const vertical = size.vertical;
  const items = [, , , ];
  ({ mode: arr[0], modeConfig: arr[1] } = size);
  items[2] = size;
  items[3] = vertical;
  return vertical.useMemo(() => {
    const obj = { size, vertical };
    const mode = size.mode;
    if ("parallax" === mode) {
      const Layouts4 = Layouts5.Layouts;
      return Layouts4.parallax(obj, tmp.modeConfig);
    } else if ("horizontal-stack" === mode) {
      const Layouts3 = Layouts5.Layouts;
      return Layouts3.horizontalStack(tmp.modeConfig);
    } else if ("vertical-stack" === mode) {
      const Layouts2 = Layouts5.Layouts;
      return Layouts2.verticalStack(tmp.modeConfig);
    } else {
      const Layouts = Layouts5.Layouts;
      return Layouts.normal(obj);
    }
  }, items);
};
