// Module ID: 18458
// Function ID: 18459
// Name: ReactCompilerSetting
// Dependencies: [5068, 16467, 12317, 18079, 2]

// Module 18458 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 5068 */;
import ReactCompilerGating from "ReactCompilerGating" /* 16467 */;
import WrenchIcon from "WrenchIcon" /* 18079 */;
import SettingBuilders from "SettingBuilders" /* 12317 */;
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
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default createStaticResult;
