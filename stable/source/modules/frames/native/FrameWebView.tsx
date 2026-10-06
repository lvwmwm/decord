// Module ID: 16286
// Function ID: 16287
// Name: FrameWebView
// Dependencies: [109, 19, 21, 558, 576, 8917, 8746, 8755, 2]

// Module 16286 (FrameWebView)
import Fragment from "Fragment" /* 21 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8746 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8755 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_3 = ["applicationId", "frameId"];
const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let closure_0;
  let frameId;
  let hadInvalidUrlError;
  let setHasInvalidUrlError;
  let tmp4;
  let tmp6;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(23);
  if (cResult[0] !== arg0) {
    ({ applicationId, frameId } = arg0);
    _require = frameId;
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = applicationId;
    cResult[2] = frameId;
    cResult[3] = tmp9;
    tmp6 = tmp9;
    tmp4 = applicationId;
  } else {
    tmp4 = cResult[1];
    _require = cResult[2];
    tmp6 = cResult[3];
  }
  const tmpResult = tmp(hadInvalidUrlError[5]);
  const hasInvalidUrlErrorState = tmpResult.useHasInvalidUrlErrorState();
  const hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  ({ setHasInvalidUrlError, hadInvalidUrlError } = hasInvalidUrlErrorState);
  if (cResult[4] === tmp5) {
    if (cResult[5] === hadInvalidUrlError) {
      let tmp11;
      let tmp12;
      let tmp18;
      let tmp16;
      let tmp17;
      if (cResult[6] === hasInvalidUrlError) {
        tmp11 = cResult[7];
        tmp12 = cResult[8];
      }
      const effect = react.useEffect(tmp11, tmp12);
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor() {
            const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.hasIframeId();
          }
        }
        class U {
          constructor() {
            const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
        const fn2 = function p() {
          const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
          return obj.releaseIframeId();
        };
        cResult[9] = E;
        cResult[10] = U;
        cResult[11] = fn2;
        tmp18 = fn2;
        tmp16 = E;
        tmp17 = U;
      } else {
        class E {
          constructor() {
            const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.hasIframeId();
          }
        }
        class U {
          constructor() {
            const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
        tmp18 = cResult[11];
      }
      if (cResult[12] !== tmp5) {
        class F {
          constructor(iframeId) {
            const obj = FramesActionCreatorsDefault;
            return obj.attachFrameIframe(closure_0, iframeId);
          }
        }
        class U {
          constructor() {
            const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
        cResult[12] = tmp5;
        cResult[13] = F;
        cResult[14] = tmp21;
      } else {
        class F {
          constructor(iframeId) {
            const obj = FramesActionCreatorsDefault;
            return obj.attachFrameIframe(closure_0, iframeId);
          }
        }
        class U {
          constructor() {
            const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
            return obj.getOrCreateIframeId();
          }
        }
      }
      if (cResult[15] === tmp4) {
        class F {
          constructor(iframeId) {
            const obj = FramesActionCreatorsDefault;
            return obj.attachFrameIframe(closure_0, iframeId);
          }
        }
      }
      const BaseActivityWebView = tmp(tmp2[5]).BaseActivityWebView;
      const merged = Object.assign(tmp6);
      const tmp27 = <BaseActivityWebView hasIframeId={tmp16} getOrCreateIframeId={tmp17} releaseIframeId={tmp18} onIframeMount={tmp19} onIframeUnmount={tmp20} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={setHasInvalidUrlError} hadInvalidUrlError={hadInvalidUrlError} applicationId={tmp4} allowMotionSensors />;
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
    const tmp = !hadInvalidUrlError && hasInvalidUrlError;
    if (tmp) {
      const obj = FramesNativeManagerDefault;
      obj.leaveFrame(closure_0);
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
}) : ((frameId) => {
  frameId = frameId.frameId;
  const applicationId = frameId.applicationId;
  const merged = Object.assign(frameId, Object.assign({ applicationId: 0, frameId: 0 }));
  let hadInvalidUrlError;
  let obj = frameId(hadInvalidUrlError[5]);
  const hasInvalidUrlErrorState = obj.useHasInvalidUrlErrorState();
  const hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  hadInvalidUrlError = hasInvalidUrlErrorState.hadInvalidUrlError;
  const items = [hasInvalidUrlError, hadInvalidUrlError, frameId];
  const setHasInvalidUrlError = hasInvalidUrlErrorState.setHasInvalidUrlError;
  const effect = react.useEffect(() => {
    const tmp = !hadInvalidUrlError && hasInvalidUrlError;
    if (tmp) {
      const obj = FramesNativeManagerDefault;
      obj.leaveFrame(frameId);
    }
  }, items);
  const BaseActivityWebView = frameId(hadInvalidUrlError[5]).BaseActivityWebView;
  const merged1 = Object.assign(merged);
  return <BaseActivityWebView hasIframeId={function hasIframeId() {
    const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
    return obj.hasIframeId();
  }} getOrCreateIframeId={function getOrCreateIframeId() {
    const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
    return obj.getOrCreateIframeId();
  }} releaseIframeId={function releaseIframeId() {
    const obj = hasInvalidUrlError(hadInvalidUrlError[6]);
    return obj.releaseIframeId();
  }} onIframeMount={function onIframeMount(iframeId) {
    const obj = FramesActionCreatorsDefault;
    return obj.attachFrameIframe(frameId, iframeId);
  }} onIframeUnmount={function onIframeUnmount(iframeId) {
    const obj = FramesActionCreatorsDefault;
    return obj.detachFrameIframe(frameId, iframeId);
  }} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={setHasInvalidUrlError} hadInvalidUrlError={hadInvalidUrlError} applicationId={applicationId} allowMotionSensors />;
});
const result = size.fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default tmp2;
