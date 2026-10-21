// Module ID: 10685
// Function ID: 10686
// Name: conjurePreviewTicket
// Dependencies: [10679, 6752, 6755, 10686, 10688, 6757, 2]
// Exports: prefetchConjurePreviewTicket

// Module 10685 (conjurePreviewTicket)
import FramesConstants from "FramesConstants" /* 6755 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6757 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 10686 */;
import createProxyTicket from "createProxyTicket" /* 10688 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10679 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6752 */;
import size from "module_2" /* 2 */;

const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTicket.tsx");

export const prefetchConjurePreviewTicket = function prefetchConjurePreviewTicket(projectId, arg1) {
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
    const obj5 = conjurePreviewSurface2;
    if (!isLaunched(obj5.getConjureBuilderPreviewFrame(prop))) {
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
      const getConjurePreviewSurface = conjurePreviewSurface2.getConjurePreviewSurface;
      conjurePreviewSurface2;
      const tmp11Result3 = conjurePreviewSurface2;
      const conjurePreviewSurface = getConjurePreviewSurface(tmp11Result3.getConjurePreviewGuildId(project));
      const tmp11Result4 = createProxyTicket;
      tmp11Result4.prefetchProxyTicket(prop, getChannelIdForEmbeddedSurfaceDefault(conjurePreviewSurface), conjurePreviewSurface.type);
    }
  }
};
