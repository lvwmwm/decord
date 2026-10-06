// Module ID: 16789
// Function ID: 16790
// Name: useConjureTraceDetail
// Dependencies: [32, 19, 558, 576, 16785, 2]

// Module 16789 (useConjureTraceDetail)
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let tmp5;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(11);
  const tmp4 = _slicedToArray(react.useState(null), 2);
  [tmp5, _slicedToArray] = tmp4;
  const obj2 = react;
  if (cResult[0] === arg1) {
    let tmp6;
    let tmp7;
    if (cResult[1] === arg0) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
    }
    const effect = obj2.useEffect(tmp6, tmp7);
    if (null == arg1) {
      return null;
    } else {
      let tmp9;
      let tmp11;
      if (cResult[4] !== arg1) {
        const tmpResult = tmp(16785);
        const cachedTraceDetailResult = tmpResult.cachedTraceDetail(arg1);
        cResult[4] = arg1;
        cResult[5] = cachedTraceDetailResult;
        tmp9 = cachedTraceDetailResult;
      } else {
        tmp9 = cResult[5];
      }
      if (null != tmp9) {
        let tmp14;
        if (cResult[6] !== tmp9) {
          const obj3 = { status: "loaded", rich: tmp9 };
          cResult[6] = tmp9;
          cResult[7] = obj3;
          tmp14 = obj3;
        } else {
          tmp14 = cResult[7];
        }
        tmp11 = tmp14;
      } else {
        if (cResult[8] === arg1) {
          if (cResult[9] === tmp5) {
            tmp11 = cResult[10];
          }
        }
        let detailId;
        if (tmp5 != null) {
          detailId = tmp5.detailId;
        }
        const tmp13 = detailId === arg1 ? tmp5.detail : { status: "loading" };
        cResult[8] = arg1;
        cResult[9] = tmp5;
        cResult[10] = tmp13;
        tmp11 = tmp13;
      }
      return tmp11;
    }
  }
  const fn = function c() {
    if (null != detailId) {
      let obj = closure_0(detailId[4]);
      const tmp2 = closure_0;
      const tmp3 = detailId;
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const self = this;
        const self2 = this;
        const abortController = new AbortController();
        const tmp2Result = tmp2(tmp3[4]);
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
  };
  const items = [arg0, arg1];
  cResult[0] = arg1;
  cResult[1] = arg0;
  cResult[2] = fn;
  cResult[3] = items;
  tmp7 = items;
  tmp6 = fn;
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let tmp2;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _slicedToArray(react.useState(null), 2);
  [tmp2, _slicedToArray] = tmp;
  const items = [arg0, arg1];
  const effect = react.useEffect(function() {
    if (null != detailId) {
      let obj = closure_0(detailId[4]);
      const tmp2 = closure_0;
      const tmp3 = detailId;
      if (null == obj.cachedTraceDetail(detailId)) {
        const _AbortController = AbortController;
        const self = this;
        const self2 = this;
        const abortController = new AbortController();
        const tmp2Result = tmp2(tmp3[4]);
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
  if (null == arg1) {
    return null;
  } else {
    let tmp8;
    let obj = require("ConjureTraceDetail");
    const cachedTraceDetailResult = obj.cachedTraceDetail(arg1);
    if (null != cachedTraceDetailResult) {
      tmp8 = { status: "loaded", rich: cachedTraceDetailResult };
      const obj2 = { status: "loaded", rich: cachedTraceDetailResult };
    } else {
      let detailId;
      if (tmp2 != null) {
        detailId = tmp2.detailId;
      }
      tmp8 = detailId === arg1 ? tmp2.detail : { status: "loading" };
    }
    return tmp8;
  }
});
const result = size.fileFinishedImporting("modules/conjure/debug/useConjureTraceDetail.tsx");

export const useConjureTraceDetail = tmp2;
