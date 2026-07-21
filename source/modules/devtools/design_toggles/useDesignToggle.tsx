// Module ID: 5356
// Function ID: 45875
// Name: useDesignToggle
// Dependencies: []
// Exports: default

// Module 5356 (useDesignToggle)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default function useDesignToggle(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  const items1 = [arg0];
  return arg1(dependencyMap[1]).useStateFromStores(items, () => closure_2.get(arg0), items1);
};
