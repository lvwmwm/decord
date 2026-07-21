// Module ID: 8952
// Function ID: 70586
// Name: getIsSocialLayerParentApplication
// Dependencies: []
// Exports: default

// Module 8952 (getIsSocialLayerParentApplication)
function getIsSocialLayerParentApplication(application) {
  return arg1(dependencyMap[2]).hasApplicationFlag(application, ApplicationFlags.PARENT);
}
let closure_2 = importAll(dependencyMap[0]);
const ApplicationFlags = arg1(dependencyMap[1]).ApplicationFlags;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  const arg1 = arg0;
  const items = [arg0];
  return React.useMemo(() => callback(arg0), items);
};
export { getIsSocialLayerParentApplication };
