// Module ID: 12222
// Function ID: 95472
// Name: useUrlParts
// Dependencies: [57, 31, 8339, 2]
// Exports: useModalState

// Module 12222 (useUrlParts)
import _slicedToArray from "_slicedToArray";
import result from "result";

const require = arg1;
function useUrlParts(url) {
  let hostname;
  let protocol;
  let closure_0 = url;
  const items = [url];
  const memo = React.useMemo(() => {
    const obj = { protocol: url(outer1_1[2]).getProtocol(url) };
    const obj2 = url(outer1_1[2]);
    obj.hostname = url(outer1_1[2]).getHostname(url);
    return obj;
  }, items);
  ({ protocol, hostname } = memo);
  let str = "";
  if ("//" === url.substr(protocol.length, 2)) {
    str = "//";
  }
  let obj = { protocol, authorityPrefix: str, hostname, theRestOfTheUrl: url.replace("" + protocol + str + hostname, "") };
  return obj;
}
const result = require("getHostname").fileFinishedImporting("modules/masked_link/SharedStateUtils.tsx");

export { useUrlParts };
export const useModalState = function useModalState(url) {
  let authorityPrefix;
  let hostname;
  let protocol;
  let theRestOfTheUrl;
  url = url.url;
  const trustUrl = url.trustUrl;
  const onConfirm = url.onConfirm;
  const onCancel = url.onCancel;
  const onClose = url.onClose;
  const tmp = onConfirm(onCancel.useState(false), 2);
  const first = tmp[0];
  const items = [url, first, trustUrl, onConfirm, onClose];
  ({ protocol, authorityPrefix, hostname, theRestOfTheUrl } = onClose(url));
  const items1 = [onCancel, onClose];
  const callback = onCancel.useCallback(() => {
    if (first) {
      trustUrl(url);
    }
    if (null != onClose) {
      onClose();
    }
    onConfirm();
  }, items);
  const tmp3 = onClose(url);
  return {
    protocol,
    authorityPrefix,
    hostname,
    theRestOfTheUrl,
    shouldTrustUrl: first,
    setShouldTrustUrl: tmp[1],
    handleConfirm: callback,
    handleCancel: onCancel.useCallback(() => {
      if (null != onClose) {
        onClose();
      }
      onCancel();
    }, items1)
  };
};
