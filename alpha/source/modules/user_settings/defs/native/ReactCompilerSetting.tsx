// Module ID: 17427
// Function ID: 17428
// Name: ReactCompilerSetting
// Dependencies: [4617, 15289, 11875, 17034, 2]

// Module 17427 (ReactCompilerSetting)
import UserSettings from "UserSettings" /* 4617 */;
import ReactCompilerGating from "ReactCompilerGating" /* 15289 */;
import WrenchIcon from "WrenchIcon" /* 17034 */;
import SettingBuilders from "SettingBuilders" /* 11875 */;
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
