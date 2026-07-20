// Module ID: 14411
// Function ID: 108714
// Dependencies: []

// Module 14411
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
