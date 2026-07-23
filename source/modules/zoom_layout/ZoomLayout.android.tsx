// Module ID: 10583
// Function ID: 82604
// Dependencies: [31, 27, 33, 10584, 2]

// Module 10583
import importAllResult from "result";
import { PixelRatio } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const require = arg1;
const forwardRefResult = importAllResult.forwardRef((arg0, arg1) => {
  const ref = importAllResult.useRef(null);
  const imperativeHandle = importAllResult.useImperativeHandle(arg1, () => ({
    zoomTo(scale) {
      let x;
      let y;
      let num = scale.scale;
      ({ x, y } = scale);
      if (num === undefined) {
        num = 2;
      }
      let flag = scale.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != outer1_0.current) {
        const value = outer2_4.get();
        const result = x * value;
        const result1 = y * value;
        const Commands = ref(outer2_2[3]).Commands;
        Commands.zoomTo(outer1_0.current, result / num - result, result1 / num - result1, num, flag);
      }
    },
    unzoom() {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      let flag = obj.animated;
      if (flag === undefined) {
        flag = true;
      }
      if (null != outer1_0.current) {
        const Commands = ref(outer2_2[3]).Commands;
        Commands.unzoom(outer1_0.current, flag);
      }
    }
  }));
  let obj = {};
  const merged = Object.assign(arg0);
  obj["ref"] = ref;
  return jsx(importDefault(10584), {});
});
let result = require("jsxProd").fileFinishedImporting("modules/zoom_layout/ZoomLayout.android.tsx");

export default forwardRefResult;
