// Module ID: 14690
// Function ID: 14691
// Name: replaceByteInByteSequence
// Dependencies: [14691, 14695, 14698]

// Module 14690 (replaceByteInByteSequence)
import _mod14691 from "module_14691" /* 14691 */;
import _mod14695 from "module_14695" /* 14695 */;
import _mod14698 from "module_14698" /* 14698 */;

const obj = {};
const _URL = _mod14691.URL;
_URL.install(obj);
const _URLSearchParams = _mod14691.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod14695.parseURL;
export const basicURLParse = _mod14695.basicURLParse;
export const serializeURL = _mod14695.serializeURL;
export const serializeHost = _mod14695.serializeHost;
export const serializeInteger = _mod14695.serializeInteger;
export const serializeURLOrigin = _mod14695.serializeURLOrigin;
export const setTheUsername = _mod14695.setTheUsername;
export const setThePassword = _mod14695.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod14695.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod14698.percentDecode;
