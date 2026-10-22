// Module ID: 14142
// Function ID: 14143
// Name: MaskedLinkModalActionCreators
// Dependencies: [19, 21, 14143, 2002, 5897, 2]

// Module 14142 (MaskedLinkModalActionCreators)
import Fragment from "Fragment" /* 21 */;
import useAlertStore from "useAlertStore" /* 5897 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const jsx = Fragment.jsx;
let obj = {
  show(onCancel) {
    let isProtocol;
    let onConfirm;
    let paths;
    let trustUrl;
    let url;
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    react.lazy(() => require("asyncRequire")(paths[2], paths.paths));
    const obj = useAlertStore;
    obj.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};
const result = size.fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default obj;
