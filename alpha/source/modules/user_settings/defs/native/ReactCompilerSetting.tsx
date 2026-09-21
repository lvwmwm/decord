// Module ID: 16209
// Function ID: 16210
// Name: ReactCompilerSetting
// Dependencies: [11725, 15839, 2]

// Module 16209 (ReactCompilerSetting)
import WrenchIcon from "WrenchIcon" /* 15839 */;
import SettingBuilders from "SettingBuilders" /* 11725 */;
import size from "module_2" /* 2 */;

const obj = {
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
};
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default SettingBuilders.createStatic({
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: WrenchIcon.WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
});
