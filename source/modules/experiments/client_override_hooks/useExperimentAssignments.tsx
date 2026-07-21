// Module ID: 10944
// Function ID: 85083
// Name: getExperimentServerAssignment
// Dependencies: [0, 4294967295, 0, 0, 0, 0]
// Exports: useExperimentAssignment, useExperimentServerAssignment

// Module 10944 (getExperimentServerAssignment)
import __exportStarResult1 from "__exportStarResult1";
import closure_4 from "__exportStarResult1";

function getExperimentServerAssignment(arg0, id) {
  let name = arg0;
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_3, closure_4];
    tmp = items;
  }
  const tmp4 = callback(tmp, 2);
  const first = tmp4[0];
  if (null == name) {
    return null;
  } else if (name.system === id(dependencyMap[4]).ExperimentSystem.LEGACY) {
    name = name.name;
    let loadedUserExperiment = first.getLoadedUserExperiment(name);
  } else {
    loadedUserExperiment = obj2.getServerAssignment(name.kind, id, name.name);
  }
}
let closure_3 = importDefault(dependencyMap[1]);
const result = require("__exportStarResult1").fileFinishedImporting("modules/experiments/client_override_hooks/useExperimentAssignments.tsx");

export const useExperimentAssignment = function useExperimentAssignment(experiment, arg1) {
  arg1 = experiment;
  const dependencyMap = arg1;
  const items = [closure_3, closure_4];
  return arg1(dependencyMap[3]).useStateFromStores(items, (self) => {
    if (self.system === self(arg1[4]).ExperimentSystem.LEGACY) {
      const userExperimentDescriptor = userExperimentDescriptor.getUserExperimentDescriptor(self.name);
      let bucket;
      if (null != userExperimentDescriptor) {
        bucket = userExperimentDescriptor.bucket;
      }
      let variantId = bucket;
    } else {
      const assignment = assignment.getAssignment(self.kind, arg1, self.name);
      if (null != assignment) {
        variantId = assignment.variantId;
      }
    }
    return variantId;
  });
};
export { getExperimentServerAssignment };
export const useExperimentServerAssignment = function useExperimentServerAssignment(experiment, arg1) {
  arg1 = experiment;
  const dependencyMap = arg1;
  const items = [closure_3, closure_4];
  return arg1(dependencyMap[3]).useStateFromStores(items, () => {
    const items = [closure_3, closure_4];
    return callback(arg0, arg1, items);
  });
};
