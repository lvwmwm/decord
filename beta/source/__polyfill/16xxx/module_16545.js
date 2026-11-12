// Module ID: 16545
// Function ID: 16546
// Dependencies: [16546, 16550, 16553]

// Module 16545
import _mod16546 from "module_16546" /* 16546 */;
import _mod16550 from "module_16550" /* 16550 */;
import _mod16553 from "module_16553" /* 16553 */;

const obj = {};
const _URL = _mod16546.URL;
_URL.install(obj);
const _URLSearchParams = _mod16546.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod16550.parseURL;
export const basicURLParse = _mod16550.basicURLParse;
export const serializeURL = _mod16550.serializeURL;
export const serializeHost = _mod16550.serializeHost;
export const serializeInteger = _mod16550.serializeInteger;
export const serializeURLOrigin = _mod16550.serializeURLOrigin;
export const setTheUsername = _mod16550.setTheUsername;
export const setThePassword = _mod16550.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod16550.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod16553.percentDecode;
