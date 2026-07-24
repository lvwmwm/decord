// Module ID: 14593
// Function ID: 111288
// Dependencies: [10127, 14442, 2]

// Module 14593
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
