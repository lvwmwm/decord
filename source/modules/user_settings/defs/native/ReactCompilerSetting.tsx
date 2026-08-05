// Module ID: 14771
// Function ID: 14772
// Dependencies: [10333, 14622, 2]

// Module 14771
import createToggle from "createToggle";

const obj = {
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
};
const createStaticResult = createToggle.createStatic({
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: require("WrenchIcon").WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
});
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default createStaticResult;
