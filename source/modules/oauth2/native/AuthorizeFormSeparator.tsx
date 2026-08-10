// Module ID: 10529
// Function ID: 10530
// Name: AuthorizeFormSeparator
// Dependencies: [17, 21, 4303, 712, 2]
// Exports: AuthorizeFormSeparator

// Module 10529 (AuthorizeFormSeparator)
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { separator: null };
obj = { height: 1, backgroundColor: require("Themes").colors.BORDER_SUBTLE };
obj[0] = obj;
let closure_2 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export const AuthorizeFormSeparator = function AuthorizeFormSeparator() {
  return <View style={callback().separator} />;
};
