// Module ID: 16542
// Function ID: 16543
// Dependencies: [16543, 16547, 16550]

// Module 16542
import _mod16543 from "module_16543" /* 16543 */;
import _mod16547 from "module_16547" /* 16547 */;
import _mod16550 from "module_16550" /* 16550 */;

const obj = {};
const _URL = _mod16543.URL;
_URL.install(obj);
const _URLSearchParams = _mod16543.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod16547.parseURL;
export const basicURLParse = _mod16547.basicURLParse;
export const serializeURL = _mod16547.serializeURL;
export const serializeHost = _mod16547.serializeHost;
export const serializeInteger = _mod16547.serializeInteger;
export const serializeURLOrigin = _mod16547.serializeURLOrigin;
export const setTheUsername = _mod16547.setTheUsername;
export const setThePassword = _mod16547.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod16547.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod16550.percentDecode;
