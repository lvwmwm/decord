// Module ID: 5427
// Function ID: 46502
// Name: context
// Dependencies: []
// Exports: RedesignCompat

// Module 5427 (context)
const jsx = arg1(dependencyMap[1]).jsx;
const context = importAll(dependencyMap[0]).createContext(false);
const importAllResult = importAll(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(enabled) {
  enabled = enabled.enabled;
  const obj = {};
  let tmp2 = null == enabled;
  if (!tmp2) {
    tmp2 = enabled;
  }
  obj.value = tmp2;
  obj.children = enabled.children;
  return <context.Provider {...obj} />;
};
