// Module ID: 12679
// Function ID: 12680
// Name: MaskedLinkModalActionCreators
// Dependencies: [19, 21, 12680, 1981, 5371, 2]

// Module 12679 (MaskedLinkModalActionCreators)
import useAlertStore from "useAlertStore" /* 5371 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = noop.lazy(() => require("asyncRequireImpl")(paths[2], paths.paths));
    useAlertStore.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};
