// Module ID: 10882
// Function ID: 10883
// Name: prefetchConjurePreviewFrame
// Dependencies: [5, 10876, 6844, 6847, 10883, 10885, 6849, 10886, 6881, 2]
// Exports: prefetchConjurePreviewFrame

// Module 10882 (prefetchConjurePreviewFrame)
import FramesConstants from "FramesConstants" /* 6847 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6849 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6881 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 10883 */;
import createProxyTicket from "createProxyTicket" /* 10885 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 10886 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10876 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import size from "module_2" /* 2 */;

let c1, c2;

let obj = function _loadPolicyAndApplication() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const items = [loadEmbeddedAppCSPForLaunchDefault(closure_0), ];
            const useApplication = ApplicationActionCreators.useApplication;
            const items1 = [closure_0];
            items[1] = useApplication.fetchMany(items1);
            c2 = 1;
            c1 = 1;
            const obj4 = { value: allSettled(items), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c1 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp4) {
        c1 = 3;
        throw tmp4;
      }
    }
  });
  return obj(...arguments);
};
const isLaunched = FramesConstants.isLaunched;
const result = size.fileFinishedImporting("modules/conjure/preview/prefetchConjurePreviewFrame.tsx");

export function prefetchConjurePreviewFrame(projectId, arg1) {
  function loadPolicyAndApplication() {
    return obj(...arguments);
  }
  obj = arg1;
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
      const tmp12Result3 = conjurePreviewSurface2;
      const conjurePreviewSurface = getConjurePreviewSurface(tmp12Result3.getConjurePreviewGuildId(project));
      const tmp12Result4 = createProxyTicket;
      tmp12Result4.prefetchProxyTicket(prop, getChannelIdForEmbeddedSurfaceDefault(conjurePreviewSurface), conjurePreviewSurface.type);
      loadPolicyAndApplication(prop);
    }
  }
}
