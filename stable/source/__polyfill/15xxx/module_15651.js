// Module ID: 15651
// Function ID: 15652
// Dependencies: [15652, 15656, 15659]

// Module 15651
import _mod15652 from "module_15652" /* 15652 */;
import _mod15656 from "module_15656" /* 15656 */;
import _mod15659 from "module_15659" /* 15659 */;

const obj = {};
const _URL = _mod15652.URL;
_URL.install(obj);
const _URLSearchParams = _mod15652.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod15656.parseURL;
export const basicURLParse = _mod15656.basicURLParse;
export const serializeURL = _mod15656.serializeURL;
export const serializeHost = _mod15656.serializeHost;
export const serializeInteger = _mod15656.serializeInteger;
export const serializeURLOrigin = _mod15656.serializeURLOrigin;
export const setTheUsername = _mod15656.setTheUsername;
export const setThePassword = _mod15656.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod15656.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod15659.percentDecode;
