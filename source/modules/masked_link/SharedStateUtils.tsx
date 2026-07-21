// Module ID: 12104
// Function ID: 93283
// Name: useUrlParts
// Dependencies: []
// Exports: useModalState

// Module 12104 (useUrlParts)
function useUrlParts(url) {
  let hostname;
  let protocol;
  const arg1 = url;
  const items = [url];
  const memo = React.useMemo(() => {
    const obj = { protocol: arg0(closure_1[2]).getProtocol(arg0) };
    const obj2 = arg0(closure_1[2]);
    obj.hostname = arg0(closure_1[2]).getHostname(arg0);
    return obj;
  }, items);
  ({ protocol, hostname } = memo);
  let str = "";
  if ("//" === url.substr(protocol.length, 2)) {
    str = "//";
  }
  const obj = { protocol, authorityPrefix: str, hostname, theRestOfTheUrl: url.replace("" + protocol + str + hostname, "") };
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importAll(dependencyMap[1]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/masked_link/SharedStateUtils.tsx");

export { useUrlParts };
export const useModalState = function useModalState(url) {
  let authorityPrefix;
  let hostname;
  let protocol;
  let theRestOfTheUrl;
  url = url.url;
  const arg1 = url;
  const trustUrl = url.trustUrl;
  const dependencyMap = trustUrl;
  const onConfirm = url.onConfirm;
  let callback = onConfirm;
  const onCancel = url.onCancel;
  const React = onCancel;
  const onClose = url.onClose;
  const useUrlParts = onClose;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const items = [url, first, trustUrl, onConfirm, onClose];
  ({ protocol, authorityPrefix, hostname, theRestOfTheUrl } = useUrlParts(url));
  const items1 = [onCancel, onClose];
  callback = React.useCallback(() => {
    if (first) {
      trustUrl(url);
    }
    if (null != onClose) {
      onClose();
    }
    onConfirm();
  }, items);
  const tmp3 = useUrlParts(url);
  return {
    protocol,
    authorityPrefix,
    hostname,
    theRestOfTheUrl,
    shouldTrustUrl: first,
    setShouldTrustUrl: tmp[1],
    handleConfirm: callback,
    handleCancel: React.useCallback(() => {
      if (null != onClose) {
        onClose();
      }
      onCancel();
    }, items1)
  };
};
