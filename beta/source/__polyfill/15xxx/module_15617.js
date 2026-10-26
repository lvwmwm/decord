// Module ID: 15617
// Function ID: 15618
// Dependencies: [15618, 15622, 15625]

// Module 15617
import _mod15618 from "module_15618" /* 15618 */;
import _mod15622 from "module_15622" /* 15622 */;
import _mod15625 from "module_15625" /* 15625 */;

const obj = {};
const _URL = _mod15618.URL;
_URL.install(obj);
const _URLSearchParams = _mod15618.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod15622.parseURL;
export const basicURLParse = _mod15622.basicURLParse;
export const serializeURL = _mod15622.serializeURL;
export const serializeHost = _mod15622.serializeHost;
export const serializeInteger = _mod15622.serializeInteger;
export const serializeURLOrigin = _mod15622.serializeURLOrigin;
export const setTheUsername = _mod15622.setTheUsername;
export const setThePassword = _mod15622.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod15622.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod15625.percentDecode;
