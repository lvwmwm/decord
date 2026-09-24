// Module ID: 9365
// Function ID: 9366
// Name: useIsSocialLayerParentApplication
// Dependencies: [19, 1078, 9165, 558, 568, 2]
// Exports: getIsSocialLayerParentApplication

// Module 9365 (useIsSocialLayerParentApplication)
import c from "c" /* 568 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 9165 */;
import noop from "module_19" /* 19 */;

require = fn;
const ApplicationFlags = fn(1078).ApplicationFlags;
const ReactCompilerGating = fn(558);
function getIsSocialLayerParentApplication(application) {
  return ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.PARENT);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useIsSocialLayerParentApplication.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((application) => {
  const cResult = c.c(2);
  if (cResult[0] !== application) {
    const hasApplicationFlagResult = ApplicationFlagUtils.hasApplicationFlag(application, ApplicationFlags.PARENT);
    cResult[0] = application;
    cResult[1] = hasApplicationFlagResult;
    let tmp4 = hasApplicationFlagResult;
    const tmpResult = ApplicationFlagUtils;
  } else {
    tmp4 = cResult[1];
  }
  return tmp4;
}) : ((arg0) => {
  closure_0 = arg0;
  const items = [arg0];
  return noop.useMemo(() => ApplicationFlagUtils.hasApplicationFlag(closure_0, ApplicationFlags.PARENT), items);
});
export { getIsSocialLayerParentApplication };
