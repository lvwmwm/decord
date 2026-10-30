// Module ID: 16408
// Function ID: 16409
// Name: ProfileCustomizationHeaderContext
// Dependencies: [19, 17, 21, 2]
// Exports: ProfileCustomizationHeaderSpacer

// Module 16408 (ProfileCustomizationHeaderContext)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let context = react.createContext(null);
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationHeaderContext.tsx");

export default context;
export function ProfileCustomizationHeaderSpacer() {
  context = react.useContext(context);
  let tmp2 = null;
  if (null != context) {
    const obj3 = { height: null, backgroundColor: null };
    ({ height: obj2.height, backgroundColor: obj2.backgroundColor } = context);
    tmp2 = <View style={obj3} />;
  }
  return tmp2;
}
