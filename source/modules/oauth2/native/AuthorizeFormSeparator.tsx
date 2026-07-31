// Module ID: 9022
// Function ID: 9023
// Name: AuthorizeFormSeparator
// Dependencies: [17, 21, 4193, 712, 2]
// Exports: AuthorizeFormSeparator

// Module 9022 (AuthorizeFormSeparator)
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
