// Module ID: 7344
// Function ID: 7345
// Name: useIsSocialLayerParentApplication
// Dependencies: [19, 1072, 6994, 2]
// Exports: default, getIsSocialLayerParentApplication

// Module 7344 (useIsSocialLayerParentApplication)
import Constants from "Constants" /* 1072 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 6994 */;
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
