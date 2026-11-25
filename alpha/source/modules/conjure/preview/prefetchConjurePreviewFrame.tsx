// Module ID: 7645
// Function ID: 7646
// Name: prefetchConjurePreviewFrame
// Dependencies: [7637, 6903, 6906, 7646, 7648, 7654, 2]
// Exports: prefetchConjurePreviewFrame

// Module 7645 (prefetchConjurePreviewFrame)
import FramesConstants from "FramesConstants" /* 6906 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 7646 */;
import frameLaunchSteps from "frameLaunchSteps" /* 7648 */;
import FrameLaunchTimingTypes from "FrameLaunchTimingTypes" /* 7654 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 7637 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6903 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/conjure/preview/prefetchConjurePreviewFrame.tsx");

export function prefetchConjurePreviewFrame(projectId, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.known;
  if (flag === undefined) {
    flag = false;
  }
  const project = ConjureProjectStore.getProject(projectId);
  let prop;
  const obj2 = ConjureProjectStore;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (null != prop) {
    const obj6 = conjurePreviewSurface2;
    if (!isLaunched(obj6.getConjureBuilderPreviewFrame(prop))) {
      if (!flag) {
        let integrationStatus = obj2.getIntegrationStatus(projectId);
        if (integrationStatus == null) {
          integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(projectId);
        }
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
      }
      const tmp10Result = conjurePreviewSurface2;
      const conjurePreviewGuildId = tmp10Result.getConjurePreviewGuildId(project);
      const tmp10Result3 = conjurePreviewSurface2;
      const conjurePreviewSurface = tmp10Result3.getConjurePreviewSurface(conjurePreviewGuildId);
      const tmp10Result4 = frameLaunchSteps;
      tmp10Result4.prefetchFrameLaunch(FrameLaunchTimingTypes.LaunchTrigger.CONJURE_PREVIEW_PREFETCH, prop, conjurePreviewSurface);
    }
  }
}
