// Module ID: 16281
// Function ID: 16282
// Name: FrameWebView
// Dependencies: [19, 21, 8922, 8751, 8760, 2]
// Exports: default

// Module 16281 (FrameWebView)
import Fragment from "Fragment" /* 21 */;
import FramesNativeManagerDefault from "FramesNativeManager" /* 8751 */;
import FramesActionCreatorsDefault from "FramesActionCreators" /* 8760 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default function FrameWebView(frameId) {
  frameId = frameId.frameId;
  const applicationId = frameId.applicationId;
  const merged = Object.assign(frameId, Object.assign({ applicationId: 0, frameId: 0 }));
  let hadInvalidUrlError;
  let obj = frameId(hadInvalidUrlError[2]);
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
  const BaseActivityWebView = frameId(hadInvalidUrlError[2]).BaseActivityWebView;
  const merged1 = Object.assign(merged);
  return <BaseActivityWebView hasIframeId={function hasIframeId() {
    const obj = hasInvalidUrlError(hadInvalidUrlError[3]);
    return obj.hasIframeId();
  }} getOrCreateIframeId={function getOrCreateIframeId() {
    const obj = hasInvalidUrlError(hadInvalidUrlError[3]);
    return obj.getOrCreateIframeId();
  }} releaseIframeId={function releaseIframeId() {
    const obj = hasInvalidUrlError(hadInvalidUrlError[3]);
    return obj.releaseIframeId();
  }} onIframeMount={function onIframeMount(iframeId) {
    const obj = FramesActionCreatorsDefault;
    return obj.attachFrameIframe(frameId, iframeId);
  }} onIframeUnmount={function onIframeUnmount(iframeId) {
    const obj = FramesActionCreatorsDefault;
    return obj.detachFrameIframe(frameId, iframeId);
  }} hasInvalidUrlError={hasInvalidUrlError} setHasInvalidUrlError={setHasInvalidUrlError} hadInvalidUrlError={hadInvalidUrlError} applicationId={applicationId} allowMotionSensors />;
};
