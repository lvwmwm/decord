// Module ID: 14895
// Function ID: 14896
// Dependencies: [10446, 14746, 2]

// Module 14895
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
