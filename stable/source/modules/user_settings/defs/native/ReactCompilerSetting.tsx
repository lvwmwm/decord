// Module ID: 18293
// Function ID: 18294
// Name: ReactCompilerSetting
// Dependencies: [4995, 16308, 11717, 17921, 2]

// Module 18293 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 4995 */;
import ReactCompilerGating from "ReactCompilerGating" /* 16308 */;
import WrenchIcon from "WrenchIcon" /* 17921 */;
import SettingBuilders from "SettingBuilders" /* 11717 */;
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
