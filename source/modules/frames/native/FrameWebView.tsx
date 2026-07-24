// Module ID: 15775
// Function ID: 121588
// Name: FrameWebView
// Dependencies: [31, 33, 10635, 10518, 2]
// Exports: default

// Module 15775 (FrameWebView)
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/frames/native/FrameWebView.tsx");

export default function FrameWebView(applicationId) {
  applicationId = applicationId.applicationId;
  let obj = Object.create(null);
  obj.applicationId = 0;
  const merged = Object.assign(applicationId, obj);
  obj = applicationId(hadInvalidUrlError[2]);
  const hasInvalidUrlErrorState = obj.useHasInvalidUrlErrorState();
  const hasInvalidUrlError = hasInvalidUrlErrorState.hasInvalidUrlError;
  hadInvalidUrlError = hasInvalidUrlErrorState.hadInvalidUrlError;
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
  return jsx(applicationId(hadInvalidUrlError[2]).BaseActivityWebView, {
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
  });
};
