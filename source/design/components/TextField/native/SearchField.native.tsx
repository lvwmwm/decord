// Module ID: 9171
// Function ID: 71987
// Name: SearchField
// Dependencies: [31, 33, 6676, 1212, 8232, 2]

// Module 9171 (SearchField)
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
  obj["leadingIcon"] = require(8232) /* MagnifyingGlassIcon */.MagnifyingGlassIcon;
  obj["isClearable"] = true;
  return jsx(require(6676) /* TextField */.TextField, {});
});
const result = require("TextField").fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;
