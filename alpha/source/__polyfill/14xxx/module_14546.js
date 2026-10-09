// Module ID: 14546
// Function ID: 14547
// Dependencies: [14547, 14551, 14554]

// Module 14546
import _mod14547 from "module_14547" /* 14547 */;
import _mod14551 from "module_14551" /* 14551 */;
import _mod14554 from "module_14554" /* 14554 */;

const obj = {};
const _URL = _mod14547.URL;
_URL.install(obj);
const _URLSearchParams = _mod14547.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod14551.parseURL;
export const basicURLParse = _mod14551.basicURLParse;
export const serializeURL = _mod14551.serializeURL;
export const serializeHost = _mod14551.serializeHost;
export const serializeInteger = _mod14551.serializeInteger;
export const serializeURLOrigin = _mod14551.serializeURLOrigin;
export const setTheUsername = _mod14551.setTheUsername;
export const setThePassword = _mod14551.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod14551.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod14554.percentDecode;
