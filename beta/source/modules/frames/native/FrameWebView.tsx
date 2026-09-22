// Module ID: 16976
// Function ID: 16977
// Name: FrameWebView
// Dependencies: [109, 19, 21, 558, 568, 9726, 9558, 9567, 2]

// Module 16976 (FrameWebView)
import FramesNativeManagerDefault from "FramesNativeManager" /* 9558 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 9567 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["applicationId", "frameId"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(23);
  if (cResult[0] !== arg0) {
    ({ applicationId, frameId } = arg0);
    _require = frameId;
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = applicationId;
    cResult[2] = frameId;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
    let tmp4 = applicationId;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
  }
  let obj = require("c");
  const hasInvalidUrlErrorState = require("EmbeddedActivityWebView").useHasInvalidUrlErrorState();
  const hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  ({ setHasInvalidUrlError, hadInvalidUrlError } = hasInvalidUrlErrorState);
  if (cResult[4] === tmp5) {
    if (cResult[5] === hadInvalidUrlError) {
      if (cResult[6] === hasInvalidUrlError) {
        let tmp11 = cResult[7];
        let tmp12 = cResult[8];
      }
      const effect = noop.useEffect(tmp11, tmp12);
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.hasIframeId();
          }
        }
        class U {
          constructor() {
            obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
        const fn2 = function p() {
          return hasInvalidUrlError(hadInvalidUrlError[6]).releaseIframeId();
        };
        cResult[9] = E;
        cResult[10] = U;
        cResult[11] = fn2;
        let tmp18 = fn2;
        const tmp16 = E;
        const tmp17 = U;
      } else {
        class E {
          constructor() {
            obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.hasIframeId();
          }
        }
        class U {
          constructor() {
            obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
        tmp18 = cResult[11];
      }
      if (cResult[12] !== tmp5) {
        class F {
          constructor(arg0) {
            obj = closure_1(closure_2[7]);
            return obj.attachFrameIframe(closure_0, arg0);
          }
        }
        class U {
          constructor() {
            obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
        cResult[12] = tmp5;
        cResult[13] = F;
        cResult[14] = tmp21;
      } else {
        class F {
          constructor(arg0) {
            obj = closure_1(closure_2[7]);
            return obj.attachFrameIframe(closure_0, arg0);
          }
        }
        class U {
          constructor() {
            obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
      }
      if (cResult[15] === tmp4) {
        class F {
          constructor(arg0) {
            obj = closure_1(closure_2[7]);
            return obj.attachFrameIframe(closure_0, arg0);
          }
        }
      }
      const obj2 = { hasIframeId: tmp16, getOrCreateIframeId: tmp17, releaseIframeId: tmp18, onIframeMount: tmp19, onIframeUnmount: tmp20, hasInvalidUrlError, setHasInvalidUrlError, hadInvalidUrlError, applicationId: tmp4 };
      const merged = Object.assign(tmp6);
      const tmp27 = jsx(tmp(tmp2[5]).BaseActivityWebView, { hasIframeId: tmp16, getOrCreateIframeId: tmp17, releaseIframeId: tmp18, onIframeMount: tmp19, onIframeUnmount: tmp20, hasInvalidUrlError, setHasInvalidUrlError, hadInvalidUrlError, applicationId: tmp4 });
      cResult[15] = tmp4;
      cResult[16] = hadInvalidUrlError;
      cResult[17] = hasInvalidUrlError;
      cResult[18] = tmp6;
      cResult[19] = setHasInvalidUrlError;
      cResult[20] = tmp19;
      cResult[21] = tmp20;
      cResult[22] = tmp27;
    }
  }
  const fn = function h() {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      FramesNativeManagerDefault.leaveFrame(closure_0);
    }
  };
  const items = [hasInvalidUrlError, hadInvalidUrlError, tmp5];
  cResult[4] = tmp5;
  cResult[5] = hadInvalidUrlError;
  cResult[6] = hasInvalidUrlError;
  cResult[7] = fn;
  cResult[8] = items;
  tmp12 = items;
  tmp11 = fn;
}) : ((applicationId) => {
  const frameId = applicationId.frameId;
  const merged = Object.assign(applicationId, Object.assign({ applicationId: 0, frameId: 0 }));
  let hadInvalidUrlError;
  const hasInvalidUrlErrorState = frameId(hadInvalidUrlError[5]).useHasInvalidUrlErrorState();
  const hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  hadInvalidUrlError = hasInvalidUrlErrorState.hadInvalidUrlError;
  const items = [hasInvalidUrlError, hadInvalidUrlError, frameId];
  const effect = noop.useEffect(() => {
    let tmp = !hadInvalidUrlError;
    if (!hadInvalidUrlError) {
      tmp = hasInvalidUrlError;
    }
    if (tmp) {
      FramesNativeManagerDefault.leaveFrame(frameId);
    }
  }, items);
  const merged1 = Object.assign(merged);
  return jsx(frameId(hadInvalidUrlError[5]).BaseActivityWebView, {
    hasIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[6]).hasIframeId();
    },
    getOrCreateIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[6]).getOrCreateIframeId();
    },
    releaseIframeId() {
      return hasInvalidUrlError(hadInvalidUrlError[6]).releaseIframeId();
    },
    onIframeMount(iframeId) {
      return FramesActionCreatorsDefault.attachFrameIframe(frameId, iframeId);
    },
    onIframeUnmount(iframeId) {
      return FramesActionCreatorsDefault.detachFrameIframe(frameId, iframeId);
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: hasInvalidUrlErrorState.setHasInvalidUrlError,
    hadInvalidUrlError,
    applicationId: applicationId.applicationId
  });
});
