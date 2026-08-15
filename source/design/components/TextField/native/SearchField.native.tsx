// Module ID: 7337
// Function ID: 7338
// Name: SearchField
// Dependencies: [19, 21, 7338, 1236, 7351, 2]

// Module 7337 (SearchField)
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { placeholder: null, returnKeyType: "search", ref: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t["5h0QOP"]);
  obj[2] = arg1;
  const merged = Object.assign(arg0);
  obj.autoCorrect = false;
  obj.autoCapitalize = "none";
  obj.accessibilityRole = "search";
  obj.leadingIcon = require(7351) /* MagnifyingGlassIcon */.MagnifyingGlassIcon;
  obj.isClearable = true;
  return jsx(require(7338) /* TextField */.TextField, { placeholder: null, returnKeyType: "search", ref: null });
});
const result = require("TextField").fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;
