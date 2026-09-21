// Module ID: 17082
// Function ID: 17083
// Name: useVibegrationsTraceDetail
// Dependencies: [32, 19, 558, 568, 17078, 2]

// Module 17082 (useVibegrationsTraceDetail)
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/lib/useVibegrationsTraceDetail.tsx");

export const useVibegrationsTraceDetail = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(11);
  let obj = require("c");
  const obj2 = noop;
  const tmp = _require;
  [tmp5, _slicedToArray] = noop.useState(null);
  if (cResult[0] === arg1) {
    if (cResult[1] === arg0) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = obj2.useEffect(tmp6, tmp7);
    if (null == arg1) {
      return null;
    } else {
      if (cResult[4] !== arg1) {
        const cachedTraceDetailResult = tmp(17078).cachedTraceDetail(arg1);
        cResult[4] = arg1;
        cResult[5] = cachedTraceDetailResult;
        let tmp9 = cachedTraceDetailResult;
        const tmpResult = tmp(17078);
      } else {
        tmp9 = cResult[5];
      }
      if (null != tmp9) {
        if (cResult[6] !== tmp9) {
          const obj3 = { status: "loaded", rich: tmp9 };
          cResult[6] = tmp9;
          cResult[7] = obj3;
        }
      } else {
        if (cResult[8] === arg1) {
          if (cResult[9] === tmp5) {
            return cResult[10];
          }
        }
        let detailId;
        if (tmp5 != null) {
          detailId = tmp5.detailId;
        }
        const tmp12 = detailId === arg1 ? tmp5.detail : { status: "loading" };
        cResult[8] = arg1;
        cResult[9] = tmp5;
        cResult[10] = tmp12;
      }
    }
  }
  const fn = function c() {
    if (null != detailId) {
      if (null == obj.cachedTraceDetail(tmp)) {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        const traceDetail = tmp2(tmp3[4]).fetchTraceDetail(abortController, tmp, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
      obj = closure_0(detailId[4]);
      tmp2 = closure_0;
      tmp3 = detailId;
    }
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  _require = arg0;
  dependencyMap = arg1;
  [tmp2, _slicedToArray] = noop.useState(null);
  const items = [arg0, arg1];
  const effect = noop.useEffect(() => {
    if (null != detailId) {
      if (null == obj.cachedTraceDetail(tmp)) {
        const _AbortController = AbortController;
        const abortController = new AbortController();
        const traceDetail = tmp2(tmp3[4]).fetchTraceDetail(abortController, tmp, abortController.signal);
        traceDetail.then((detail) => {
          if (!abortController.signal.aborted) {
            const obj = { detailId, detail };
            _slicedToArray(obj);
          }
        });
        return () => abortController.abort();
      }
      obj = closure_0(detailId[4]);
      tmp2 = closure_0;
      tmp3 = detailId;
    }
  }, items);
  if (null == arg1) {
    return null;
  } else {
    const cachedTraceDetailResult = require("VibegrationsTraceDetail").cachedTraceDetail(arg1);
    if (null != cachedTraceDetailResult) {
      const obj2 = { status: "loaded", rich: cachedTraceDetailResult };
      let tmp8 = obj2;
    } else {
      let detailId;
      if (tmp2 != null) {
        detailId = tmp2.detailId;
      }
      tmp8 = detailId === arg1 ? tmp2.detail : { status: "loading" };
    }
    return tmp8;
  }
  const tmp = _slicedToArray(noop.useState(null), 2);
});
