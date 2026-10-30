// Module ID: 9728
// Function ID: 9729
// Name: useIsSocialLayerParentApplication
// Dependencies: [19, 1072, 6877, 2]
// Exports: default, getIsSocialLayerParentApplication

// Module 9728 (useIsSocialLayerParentApplication)
import Constants from "Constants" /* 1072 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6877 */;
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
