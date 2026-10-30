// Module ID: 17870
// Function ID: 17871
// Name: ReactCompilerSetting
// Dependencies: [4834, 15921, 11505, 17486, 2]

// Module 17870 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 4834 */;
import ReactCompilerGating from "ReactCompilerGating" /* 15921 */;
import WrenchIcon from "WrenchIcon" /* 17486 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
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
