// Module ID: 13367
// Function ID: 102269
// Name: parseURL
// Dependencies: [13368, 13372, 13375]

// Module 13367 (parseURL)
import { URL as _URL } from "URL";
import { URLSearchParams as _URLSearchParams } from "URL";

const obj = {};
_URL.install(obj);
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = require("countSymbols").parseURL;
export const basicURLParse = require("countSymbols").basicURLParse;
export const serializeURL = require("countSymbols").serializeURL;
export const serializeHost = require("countSymbols").serializeHost;
export const serializeInteger = require("countSymbols").serializeInteger;
export const serializeURLOrigin = require("countSymbols").serializeURLOrigin;
export const setTheUsername = require("countSymbols").setTheUsername;
export const setThePassword = require("countSymbols").setThePassword;
export const cannotHaveAUsernamePasswordPort = require("countSymbols").cannotHaveAUsernamePasswordPort;
export const percentDecode = require("replaceByteInByteSequence").percentDecode;
