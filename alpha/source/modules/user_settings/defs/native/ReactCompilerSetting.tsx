// Module ID: 17115
// Function ID: 17116
// Name: ReactCompilerSetting
// Dependencies: [558, 4797, 11155, 16749, 2]

// Module 17115 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 4797 */;
import WrenchIcon from "WrenchIcon" /* 16749 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11155 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
  usePredicate: function useReactCompilerPredicate() {
    const DeveloperMode = UserSettings.DeveloperMode;
    let setting = DeveloperMode.useSetting();
    if (setting) {
      const tmpResult = ReactCompilerGating;
      setting = tmpResult.isReactCompilerBuild();
    }
    return setting;
  }
};
const createStaticResult = SettingBuilders.createStatic(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default createStaticResult;
