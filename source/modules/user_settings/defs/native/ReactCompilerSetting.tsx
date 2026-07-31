// Module ID: 14691
// Function ID: 14692
// Dependencies: [10133, 14542, 2]

// Module 14691
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
