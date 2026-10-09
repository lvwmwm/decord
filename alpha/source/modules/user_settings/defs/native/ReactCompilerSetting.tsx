// Module ID: 16205
// Function ID: 16206
// Name: ReactCompilerSetting
// Dependencies: [10629, 15779, 558, 2]

// Module 16205 (ReactCompilerSetting)
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import WrenchIcon from "WrenchIcon" /* 15779 */;
import SettingBuilders from "SettingBuilders" /* 10629 */;
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
