// Module ID: 16355
// Function ID: 16356
// Name: ProfileCustomizationHeaderContext
// Dependencies: [19, 17, 21, 558, 576, 2]

// Module 16355 (ProfileCustomizationHeaderContext)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let context = react.createContext(null);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProfileCustomizationHeaderSpacer() {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  context = react.useContext(context);
  if (cResult[0] !== context) {
    let tmp4 = null;
    if (null != context) {
      const obj5 = { height: null, backgroundColor: null };
      ({ height: obj3.height, backgroundColor: obj3.backgroundColor } = context);
      tmp4 = <View style={obj5} />;
    }
    cResult[0] = context;
    cResult[1] = tmp4;
    tmp3 = tmp4;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function ProfileCustomizationHeaderSpacer() {
  context = react.useContext(context);
  let tmp2 = null;
  if (null != context) {
    const obj3 = { height: null, backgroundColor: null };
    ({ height: obj2.height, backgroundColor: obj2.backgroundColor } = context);
    tmp2 = <View style={obj3} />;
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/user_settings/profiles/native/ProfileCustomizationHeaderContext.tsx");

export default context;
export const ProfileCustomizationHeaderSpacer = tmp3;
