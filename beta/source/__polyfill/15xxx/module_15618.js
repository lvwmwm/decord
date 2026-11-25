// Module ID: 15618
// Function ID: 15619
// Dependencies: [15619, 15623, 15626]

// Module 15618
import _mod15619 from "module_15619" /* 15619 */;
import _mod15623 from "module_15623" /* 15623 */;
import _mod15626 from "module_15626" /* 15626 */;

const obj = {};
const _URL = _mod15619.URL;
_URL.install(obj);
const _URLSearchParams = _mod15619.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod15623.parseURL;
export const basicURLParse = _mod15623.basicURLParse;
export const serializeURL = _mod15623.serializeURL;
export const serializeHost = _mod15623.serializeHost;
export const serializeInteger = _mod15623.serializeInteger;
export const serializeURLOrigin = _mod15623.serializeURLOrigin;
export const setTheUsername = _mod15623.setTheUsername;
export const setThePassword = _mod15623.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod15623.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod15626.percentDecode;
