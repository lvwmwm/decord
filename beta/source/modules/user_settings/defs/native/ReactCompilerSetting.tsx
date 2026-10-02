// Module ID: 15489
// Function ID: 15490
// Name: ReactCompilerSetting
// Dependencies: [10874, 15103, 558, 2]

// Module 15489 (ReactCompilerSetting)
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import WrenchIcon from "WrenchIcon" /* 15103 */;
import SettingBuilders from "SettingBuilders" /* 10874 */;
import size from "module_2" /* 2 */;

let obj = {
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    let str = "Disabled";
    const obj = ReactCompilerGating;
    if (obj.isReactCompilerEnabled()) {
      str = "Enabled";
    }
    return str;
  },
  usePredicate() {
    const obj = ReactCompilerGating;
    return obj.isReactCompilerBuild();
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default createStaticResult;
