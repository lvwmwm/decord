// Module ID: 15374
// Function ID: 15375
// Name: UserSettingsDesignSystemToast
// Dependencies: [19, 17, 21, 4837, 558, 576, 2]

// Module 15374 (UserSettingsDesignSystemToast)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4837 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.container) {
    const tmp6 = <View style={tmp2.container} />;
    cResult[0] = tmp2.container;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_4().container} />);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx");

export default tmp3;
