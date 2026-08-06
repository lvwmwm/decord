// Module ID: 5913
// Function ID: 5914
// Name: SearchField
// Dependencies: [19, 21, 5914, 1236, 5927, 2]

// Module 5913 (SearchField)
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
  obj.leadingIcon = require(5927) /* MagnifyingGlassIcon */.MagnifyingGlassIcon;
  obj.isClearable = true;
  return jsx(require(5914) /* TextField */.TextField, { placeholder: null, returnKeyType: "search", ref: null });
});
const result = require("TextField").fileFinishedImporting("design/components/TextField/native/SearchField.native.tsx");

export const SearchField = forwardRefResult;
