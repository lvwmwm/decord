// Module ID: 12263
// Function ID: 94047
// Name: useCommonTriggerPoint
// Dependencies: [270270464, 804847616, 488308736, 523829248, 804913152]
// Exports: useCommonTriggerPoint

// Module 12263 (useCommonTriggerPoint)
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/experiments/trigger_points/useCommonTriggerPoint.tsx");

export const useCommonTriggerPoint = function useCommonTriggerPoint(OpenNitroTriggerPoint) {
  const arg1 = OpenNitroTriggerPoint;
  const items = [closure_4];
  const obj = arg1(dependencyMap[3]);
  const items1 = [OpenNitroTriggerPoint, , ];
  [arr2[1], arr2[2]] = callback(arg1(dependencyMap[3]).useStateFromStoresArray(items, () => {
    const items = [authStore.getAllUserExperimentDescriptors(), authStore.getGuildExperiments()];
    return items;
  }), 2);
  const effect = React.useEffect(() => {
    arg0.trigger();
  }, items1);
};
