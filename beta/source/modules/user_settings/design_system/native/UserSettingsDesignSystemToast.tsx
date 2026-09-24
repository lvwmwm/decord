// Module ID: 16096
// Function ID: 16097
// Name: UserSettingsDesignSystemToast
// Dependencies: [19, 17, 21, 4790, 558, 568, 2]

// Module 16096 (UserSettingsDesignSystemToast)
import c from "c" /* 568 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_4 = createStyles.createStyles({ container: { padding: 16, flex: 1, alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/design_system/native/UserSettingsDesignSystemToast.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const tmp2 = closure_4();
  if (cResult[0] !== tmp2.container) {
    const obj2 = { style: tmp2.container };
    const tmp6 = <View style={tmp2.container} />;
    cResult[0] = tmp2.container;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => <View style={closure_4().container} />);
