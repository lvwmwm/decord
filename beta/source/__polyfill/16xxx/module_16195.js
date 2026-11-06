// Module ID: 16195
// Function ID: 16196
// Dependencies: [16196, 16200, 16203]

// Module 16195
import _mod16196 from "module_16196" /* 16196 */;
import _mod16200 from "module_16200" /* 16200 */;
import _mod16203 from "module_16203" /* 16203 */;

const obj = {};
const _URL = _mod16196.URL;
_URL.install(obj);
const _URLSearchParams = _mod16196.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod16200.parseURL;
export const basicURLParse = _mod16200.basicURLParse;
export const serializeURL = _mod16200.serializeURL;
export const serializeHost = _mod16200.serializeHost;
export const serializeInteger = _mod16200.serializeInteger;
export const serializeURLOrigin = _mod16200.serializeURLOrigin;
export const setTheUsername = _mod16200.setTheUsername;
export const setThePassword = _mod16200.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod16200.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod16203.percentDecode;
