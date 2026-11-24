// Module ID: 7604
// Function ID: 7605
// Name: useIsSocialLayerParentApplication
// Dependencies: [19, 1071, 6847, 2]
// Exports: default, getIsSocialLayerParentApplication

// Module 7604 (useIsSocialLayerParentApplication)
import Constants from "Constants" /* 1071 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6847 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const ApplicationFlags = Constants.ApplicationFlags;
const result = size.fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default function useIsSocialLayerParentApplication(arg0) {
  let closure_0 = arg0;
  const items = [arg0];
  return react.useMemo(() => {
    const obj = ApplicationFlagUtils;
    return obj.hasApplicationFlag(closure_0, ApplicationFlags.PARENT);
  }, items);
};
export function getIsSocialLayerParentApplication(application) {
  const obj = ApplicationFlagUtils;
  return obj.hasApplicationFlag(application, ApplicationFlags.PARENT);
}
