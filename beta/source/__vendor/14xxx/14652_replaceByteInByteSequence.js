// Module ID: 14652
// Function ID: 14653
// Name: replaceByteInByteSequence
// Dependencies: [14653, 14657, 14660]

// Module 14652 (replaceByteInByteSequence)
import _mod14653 from "module_14653" /* 14653 */;
import _mod14657 from "module_14657" /* 14657 */;
import _mod14660 from "module_14660" /* 14660 */;

const obj = {};
const _URL = _mod14653.URL;
_URL.install(obj);
const _URLSearchParams = _mod14653.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod14657.parseURL;
export const basicURLParse = _mod14657.basicURLParse;
export const serializeURL = _mod14657.serializeURL;
export const serializeHost = _mod14657.serializeHost;
export const serializeInteger = _mod14657.serializeInteger;
export const serializeURLOrigin = _mod14657.serializeURLOrigin;
export const setTheUsername = _mod14657.setTheUsername;
export const setThePassword = _mod14657.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod14657.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod14660.percentDecode;
