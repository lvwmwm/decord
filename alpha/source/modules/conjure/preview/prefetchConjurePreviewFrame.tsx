// Module ID: 11061
// Function ID: 11062
// Name: prefetchConjurePreviewFrame
// Dependencies: [5, 11055, 6979, 6982, 11062, 11064, 6984, 11065, 7016, 2]
// Exports: prefetchConjurePreviewFrame

// Module 11061 (prefetchConjurePreviewFrame)
import FramesConstants from "FramesConstants" /* 6982 */;
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6984 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 7016 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 11062 */;
import createProxyTicket from "createProxyTicket" /* 11064 */;
import loadEmbeddedAppCSPForLaunchDefault from "loadEmbeddedAppCSPForLaunch" /* 11065 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 11055 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
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
        return { value: "HermesInternal", done: null };
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
          return { value: "HermesInternal", done: null };
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
