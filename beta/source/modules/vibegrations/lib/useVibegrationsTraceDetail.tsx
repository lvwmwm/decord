// Module ID: 16423
// Function ID: 16424
// Name: useVibegrationsTraceDetail
// Dependencies: [32, 19, 16419, 2]
// Exports: useVibegrationsTraceDetail

// Module 16423 (useVibegrationsTraceDetail)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsTraceDetail.tsx");

export const useVibegrationsTraceDetail = function useVibegrationsTraceDetail(projectId, detailId) {
  let tmp2;
  _require = projectId;
  dependencyMap = detailId;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, _slicedToArray] = tmp;
  const items = [projectId, detailId];
  const effect = react.useEffect(function() {
    if (null != detailId) {
      let obj = projectId(detailId[2]);
      const tmp2 = projectId;
      const tmp3 = detailId;
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const self = this;
        const self2 = this;
        const abortController = new AbortController();
        const tmp2Result = tmp2(tmp3[2]);
        const traceDetail = tmp2Result.fetchTraceDetail(abortController, tmp, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
    }
  }, items);
  if (null == detailId) {
    return null;
  } else {
    let tmp8;
    let obj = require("VibegrationsTraceDetail");
    const cachedTraceDetailResult = obj.cachedTraceDetail(detailId);
    if (null != cachedTraceDetailResult) {
      tmp8 = { status: "loaded", rich: cachedTraceDetailResult };
      const obj2 = { status: "loaded", rich: cachedTraceDetailResult };
    } else {
      detailId = undefined;
      if (tmp2 != null) {
        detailId = tmp2.detailId;
      }
      tmp8 = detailId === detailId ? tmp2.detail : { status: "loading" };
    }
    return tmp8;
  }
};
