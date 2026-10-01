// Module ID: 12312
// Function ID: 12313
// Name: useOwnedVibegrationsProject
// Dependencies: [8686, 8685, 504, 2]
// Exports: default

// Module 12312 (useOwnedVibegrationsProject)
import useIsOwnedVibegrationsApplicationDefault from "useIsOwnedVibegrationsApplication" /* 8685 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 8686 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useOwnedVibegrationsProject.tsx");

export default function useOwnedVibegrationsProject(arg0, arg1) {
  _require = arg0;
  const tmp = useIsOwnedVibegrationsApplicationDefault(arg0, arg1);
  importDefault = tmp;
  const items = [VibegrationsProjectStore];
  const items1 = [tmp, arg0];
  const obj = require("initialize");
  return {
    isOwned: tmp,
    project: require("initialize").useStateFromStores(items, () => {
      let result = null;
      if (true === closure_1) {
        result = null;
        if (null != closure_0) {
          result = VibegrationsProjectStore.findProjectByApplicationId(tmp2);
        }
      }
      return result;
    }, items1)
  };
};
