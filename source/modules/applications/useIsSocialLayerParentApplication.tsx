// Module ID: 8960
// Function ID: 70640
// Name: getIsSocialLayerParentApplication
// Dependencies: [31, 653, 7371, 2]
// Exports: default

// Module 8960 (getIsSocialLayerParentApplication)
import result from "result";
import { ApplicationFlags } from "ME";

const require = arg1;
function getIsSocialLayerParentApplication(application) {
  return require(7371) /* getApplicationFlags */.hasApplicationFlag(application, ApplicationFlags.PARENT);
}
const result = require("getApplicationFlags").fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return React.useMemo(() => outer1_4(closure_0), items);
};
export { getIsSocialLayerParentApplication };
