// Module ID: 14850
// Function ID: 14851
// Name: AuthorizeFormSeparator
// Dependencies: [17, 21, 5140, 575, 2]
// Exports: AuthorizeFormSeparator

// Module 14850 (AuthorizeFormSeparator)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 575 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
const obj = { separator: { height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE } };
({ height: 1, backgroundColor: nativeDefault.colors.BORDER_SUBTLE });
let closure_2 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/oauth2/native/AuthorizeFormSeparator.tsx");

export function AuthorizeFormSeparator() {
  return <View style={closure_2().separator} />;
}
