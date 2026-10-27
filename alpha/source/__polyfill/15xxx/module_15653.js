// Module ID: 15653
// Function ID: 15654
// Dependencies: [15654, 15658, 15661]

// Module 15653
import _mod15654 from "module_15654" /* 15654 */;
import _mod15658 from "module_15658" /* 15658 */;
import _mod15661 from "module_15661" /* 15661 */;

const obj = {};
const _URL = _mod15654.URL;
_URL.install(obj);
const _URLSearchParams = _mod15654.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod15658.parseURL;
export const basicURLParse = _mod15658.basicURLParse;
export const serializeURL = _mod15658.serializeURL;
export const serializeHost = _mod15658.serializeHost;
export const serializeInteger = _mod15658.serializeInteger;
export const serializeURLOrigin = _mod15658.serializeURLOrigin;
export const setTheUsername = _mod15658.setTheUsername;
export const setThePassword = _mod15658.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod15658.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod15661.percentDecode;
