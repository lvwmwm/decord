// Module ID: 13862
// Function ID: 13863
// Dependencies: [13863, 13867, 13870]

// Module 13862
import _mod13863 from "module_13863" /* 13863 */;
import _mod13867 from "module_13867" /* 13867 */;
import _mod13870 from "module_13870" /* 13870 */;

const obj = {};
const _URL = _mod13863.URL;
_URL.install(obj);
const _URLSearchParams = _mod13863.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod13867.parseURL;
export const basicURLParse = _mod13867.basicURLParse;
export const serializeURL = _mod13867.serializeURL;
export const serializeHost = _mod13867.serializeHost;
export const serializeInteger = _mod13867.serializeInteger;
export const serializeURLOrigin = _mod13867.serializeURLOrigin;
export const setTheUsername = _mod13867.setTheUsername;
export const setThePassword = _mod13867.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod13867.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod13870.percentDecode;
