// Module ID: 5825
// Function ID: 5826
// Name: ActionSheet
// Dependencies: [19, 21, 4342, 712, 5458, 2]

// Module 5825 (ActionSheet)
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

const require = arg1;
let obj = { content: null, body: null };
obj = { paddingHorizontal: require("Themes").space.PX_16 };
obj[0] = obj;
obj[1] = { gap: 24 };
let closure_3 = createCacheKey.createStyles(obj);
const forwardRefResult = require("noop").forwardRef((arg0, ref) => {
  const obj = { ref };
  const merged = Object.assign(arg0);
  ({ content: obj.contentStyles, body: obj.bodyStyles } = callback());
  return jsx(require(5458) /* Background */.BottomSheet, { ref });
});
const result = require("createCacheKey").fileFinishedImporting("design/components/Sheet/native/ActionSheet.native.tsx");

export const ActionSheet = forwardRefResult;
