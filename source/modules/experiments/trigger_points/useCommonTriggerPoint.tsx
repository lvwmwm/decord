// Module ID: 12268
// Function ID: 94075
// Name: useCommonTriggerPoint
// Dependencies: [270270464, 805175296, 488308736, 523829248, 805240832]
// Exports: useCommonTriggerPoint

// Module 12268 (useCommonTriggerPoint)
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
