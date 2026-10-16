// Module ID: 14628
// Function ID: 14629
// Dependencies: [14629, 14633, 14636]

// Module 14628
import _mod14629 from "module_14629" /* 14629 */;
import _mod14633 from "module_14633" /* 14633 */;
import _mod14636 from "module_14636" /* 14636 */;

const obj = {};
const _URL = _mod14629.URL;
_URL.install(obj);
const _URLSearchParams = _mod14629.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod14633.parseURL;
export const basicURLParse = _mod14633.basicURLParse;
export const serializeURL = _mod14633.serializeURL;
export const serializeHost = _mod14633.serializeHost;
export const serializeInteger = _mod14633.serializeInteger;
export const serializeURLOrigin = _mod14633.serializeURLOrigin;
export const setTheUsername = _mod14633.setTheUsername;
export const setThePassword = _mod14633.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod14633.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod14636.percentDecode;
