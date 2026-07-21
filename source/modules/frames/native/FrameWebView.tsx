// Module ID: 15603
// Function ID: 119050
// Name: FrameWebView
// Dependencies: [655753216, 655622144, 42795008, 272039936, 669319168]
// Exports: default

// Module 15603 (FrameWebView)
let closure_3 = importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default function FrameWebView(applicationId) {
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  let obj = Object.create(null);
  obj.applicationId = 0;
  const merged = Object.assign(applicationId, obj);
  obj = arg1(dependencyMap[2]);
  const hasInvalidUrlErrorState = obj.useHasInvalidUrlErrorState();
  const hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  const importDefault = hasInvalidUrlError;
  const hadInvalidUrlError = hasInvalidUrlErrorState.hadInvalidUrlError;
  const dependencyMap = hadInvalidUrlError;
  const items = [hasInvalidUrlError, hadInvalidUrlError, applicationId];
  const effect = React.useEffect(() => {
    let tmp = !hadInvalidUrlError && hasInvalidUrlError;
    if (tmp) {
      tmp = null != applicationId;
    }
    if (tmp) {
      let obj = hasInvalidUrlError(hadInvalidUrlError[3]);
      obj = { applicationId };
      obj.leaveFrame(obj);
    }
  }, items);
  obj = {
    hasFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).hasFrameId();
    },
    getOrCreateFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).getOrCreateFrameId();
    },
    releaseFrameId() {
      return hasInvalidUrlError(hadInvalidUrlError[3]).releaseFrameId();
    },
    hasInvalidUrlError,
    setHasInvalidUrlError: hasInvalidUrlErrorState.setHasInvalidUrlError,
    hadInvalidUrlError,
    applicationId
  };
  const merged1 = Object.assign(merged);
  return jsx(arg1(dependencyMap[2]).BaseActivityWebView, obj);
};
