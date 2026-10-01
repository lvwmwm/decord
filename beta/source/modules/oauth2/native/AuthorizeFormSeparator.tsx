// Module ID: 8726
// Function ID: 8727
// Name: AuthorizeFormSeparator
// Dependencies: [17, 21, 4836, 576, 2]
// Exports: AuthorizeFormSeparator

// Module 8726 (AuthorizeFormSeparator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { separator: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
({ height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export const AuthorizeFormSeparator = function AuthorizeFormSeparator() {
  return <View style={closure_2().separator} />;
};
