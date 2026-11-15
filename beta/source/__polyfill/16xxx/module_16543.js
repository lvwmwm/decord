// Module ID: 16543
// Function ID: 16544
// Dependencies: [16544, 16548, 16551]

// Module 16543
import _mod16544 from "module_16544" /* 16544 */;
import _mod16548 from "module_16548" /* 16548 */;
import _mod16551 from "module_16551" /* 16551 */;

const obj = {};
const _URL = _mod16544.URL;
_URL.install(obj);
const _URLSearchParams = _mod16544.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod16548.parseURL;
export const basicURLParse = _mod16548.basicURLParse;
export const serializeURL = _mod16548.serializeURL;
export const serializeHost = _mod16548.serializeHost;
export const serializeInteger = _mod16548.serializeInteger;
export const serializeURLOrigin = _mod16548.serializeURLOrigin;
export const setTheUsername = _mod16548.setTheUsername;
export const setThePassword = _mod16548.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod16548.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod16551.percentDecode;
