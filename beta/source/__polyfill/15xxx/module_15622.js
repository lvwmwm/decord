// Module ID: 15622
// Function ID: 15623
// Dependencies: [15623, 15627, 15630]

// Module 15622
import _mod15623 from "module_15623" /* 15623 */;
import _mod15627 from "module_15627" /* 15627 */;
import _mod15630 from "module_15630" /* 15630 */;

const obj = {};
const _URL = _mod15623.URL;
_URL.install(obj);
const _URLSearchParams = _mod15623.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod15627.parseURL;
export const basicURLParse = _mod15627.basicURLParse;
export const serializeURL = _mod15627.serializeURL;
export const serializeHost = _mod15627.serializeHost;
export const serializeInteger = _mod15627.serializeInteger;
export const serializeURLOrigin = _mod15627.serializeURLOrigin;
export const setTheUsername = _mod15627.setTheUsername;
export const setThePassword = _mod15627.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod15627.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod15630.percentDecode;
