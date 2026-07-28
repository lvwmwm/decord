// Module ID: 8931
// Function ID: 70486
// Name: getIsSocialLayerParentApplication
// Dependencies: [31, 653, 5674, 2]
// Exports: default

// Module 8931 (getIsSocialLayerParentApplication)
import result from "result";
import { ApplicationFlags } from "ME";

const require = arg1;
function getIsSocialLayerParentApplication(application) {
  return require(5674) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.PARENT);
}
const result = require("getApplicationFlags").fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => outer1_4(closure_0), items);
};
export { getIsSocialLayerParentApplication };
