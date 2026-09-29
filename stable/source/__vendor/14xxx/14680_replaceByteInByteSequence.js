// Module ID: 14680
// Function ID: 14681
// Name: replaceByteInByteSequence
// Dependencies: [14681, 14685, 14688]

// Module 14680 (replaceByteInByteSequence)
import _mod14681 from "module_14681" /* 14681 */;
import _mod14685 from "module_14685" /* 14685 */;
import _mod14688 from "module_14688" /* 14688 */;

const obj = {};
const _URL = _mod14681.URL;
_URL.install(obj);
const _URLSearchParams = _mod14681.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod14685.parseURL;
export const basicURLParse = _mod14685.basicURLParse;
export const serializeURL = _mod14685.serializeURL;
export const serializeHost = _mod14685.serializeHost;
export const serializeInteger = _mod14685.serializeInteger;
export const serializeURLOrigin = _mod14685.serializeURLOrigin;
export const setTheUsername = _mod14685.setTheUsername;
export const setThePassword = _mod14685.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod14685.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod14688.percentDecode;
