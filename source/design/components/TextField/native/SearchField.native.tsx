// Module ID: 5772
// Function ID: 49440
// Name: SearchField
// Dependencies: [31, 33, 5773, 1212, 5786, 2]

// Module 5772 (SearchField)
import { jsx } from "jsxProd";
import importAllResult from "result";

const require = arg1;
const forwardRefResult = require("result").forwardRef((arg0, ref) => {
  const obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.placeholder = intl.string(require(1212) /* getSystemLocale */.t["5h0QOP"]);
  obj.returnKeyType = "search";
  obj.ref = ref;
  const merged = Object.assign(arg0);
  obj["autoCorrect"] = false;
  obj["autoCapitalize"] = "none";
  obj["accessibilityRole"] = "search";
  obj["leadingIcon"] = require(5786) /* MagnifyingGlassIcon */.MagnifyingGlassIcon;
  obj["isClearable"] = true;
  return jsx(require(5773) /* TextField */.TextField, {});
});
const result = require("TextField").fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;
