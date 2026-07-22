// Module ID: 14429
// Function ID: 108812
// Dependencies: []

// Module 14429
const _module = require(dependencyMap[0]);
const obj = {
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: require(dependencyMap[1]).WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
};
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/user_settings/defs/native/ReactCompilerSetting.tsx");

export default _module.createStatic({
  useTitle() {
    return "React Compiler";
  },
  parent: null,
  IconComponent: require(dependencyMap[1]).WrenchIcon,
  useTrailing() {
    return "Enabled";
  },
  usePredicate() {
    return false;
  }
});
