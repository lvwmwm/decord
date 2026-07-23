// Module ID: 14543
// Function ID: 110965
// Dependencies: [10095, 14392, 2]

// Module 14543
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
