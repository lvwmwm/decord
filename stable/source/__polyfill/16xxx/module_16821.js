// Module ID: 16821
// Function ID: 16822
// Dependencies: [16822, 16826, 16829]

// Module 16821
import _mod16822 from "module_16822" /* 16822 */;
import _mod16826 from "module_16826" /* 16826 */;
import _mod16829 from "module_16829" /* 16829 */;

const obj = {};
const _URL = _mod16822.URL;
_URL.install(obj);
const _URLSearchParams = _mod16822.URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = _mod16826.parseURL;
export const basicURLParse = _mod16826.basicURLParse;
export const serializeURL = _mod16826.serializeURL;
export const serializeHost = _mod16826.serializeHost;
export const serializeInteger = _mod16826.serializeInteger;
export const serializeURLOrigin = _mod16826.serializeURLOrigin;
export const setTheUsername = _mod16826.setTheUsername;
export const setThePassword = _mod16826.setThePassword;
export const cannotHaveAUsernamePasswordPort = _mod16826.cannotHaveAUsernamePasswordPort;
export const percentDecode = _mod16829.percentDecode;
