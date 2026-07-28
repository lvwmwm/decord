// Module ID: 12271
// Function ID: 95703
// Dependencies: [31, 33, 12272, 1935, 4507, 2]

// Module 12271
import result from "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("MaskedLinkModal").fileFinishedImporting("modules/masked_link/MaskedLinkModalActionCreators.native.tsx");

export default {
  show(onCancel) {
    let isProtocol;
    let onConfirm;
    let trustUrl;
    let url;
    onCancel = onCancel.onCancel;
    ({ url, trustUrl, onConfirm, isProtocol } = onCancel);
    const lazyResult = React.lazy(() => outer1_0(outer1_1[3])(outer1_1[2], outer1_1.paths));
    require(4507) /* useAlertStore */.openAlert("masked-link", <lazyResult url={url} trustUrl={trustUrl} onConfirm={onConfirm} onCancel={onCancel} isProtocol={isProtocol} />, onCancel);
  }
};
