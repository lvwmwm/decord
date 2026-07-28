// Module ID: 7946
// Function ID: 63096
// Name: useCutoutBackgroundColor
// Dependencies: [31, 33, 666, 7947, 689, 3869, 2]
// Exports: CutoutBackgroundProvider

// Module 7946 (useCutoutBackgroundColor)
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
  require(3869) /* map */;
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
        result = require(7947) /* flattenColorOverOpaqueBackground */.flattenColorOverOpaqueBackground(tmp5, tmp);
        const obj2 = require(7947) /* flattenColorOverOpaqueBackground */;
      }
    }
  } else if (undefined === tmp5) {
    result = tmp;
  }
  obj = { value: result, children: backgroundColor.children };
  return <redux.Provider value={result}>{arg0.children}</redux.Provider>;
};
