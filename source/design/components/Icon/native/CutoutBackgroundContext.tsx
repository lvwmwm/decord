// Module ID: 7910
// Function ID: 63004
// Name: useCutoutBackgroundColor
// Dependencies: [31, 33, 666, 7911, 689, 3835, 2]
// Exports: CutoutBackgroundProvider

// Module 7910 (useCutoutBackgroundColor)
import importAllResult from "result";
import { jsx } from "jsxProd";

const require = arg1;
function useCutoutBackgroundColor() {
  return importAllResult.useContext(closure_5);
}
const context = importAllResult.createContext(undefined);
let result = require("t").fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export { useCutoutBackgroundColor };
export const CutoutBackgroundProvider = function CutoutBackgroundProvider(backgroundColor) {
  backgroundColor = backgroundColor.backgroundColor;
  const tmp = useCutoutBackgroundColor();
  const internal = importDefault(689).internal;
  require(3835) /* map */;
  let tmp5 = null;
  if (null !== backgroundColor) {
    tmp5 = tmp4;
    if ("string" === typeof backgroundColor) {
      tmp5 = backgroundColor;
    }
  }
  if (null != tmp5) {
    let obj = importDefault(666)(tmp5);
    let result = tmp5;
    if (1 !== obj.alpha()) {
      if (null != tmp) {
        result = require(7911) /* flattenColorOverOpaqueBackground */.flattenColorOverOpaqueBackground(tmp5, tmp);
        const obj2 = require(7911) /* flattenColorOverOpaqueBackground */;
      }
    }
  } else if (undefined === tmp5) {
    result = tmp;
  }
  obj = { value: result, children: backgroundColor.children };
  return <redux.Provider value={result}>{arg0.children}</redux.Provider>;
};
