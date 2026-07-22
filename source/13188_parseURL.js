// Module ID: 13188
// Function ID: 99654
// Name: parseURL
// Dependencies: []

// Module 13188 (parseURL)
const obj = {};
const _URL = require(dependencyMap[0]).URL;
_URL.install(obj);
const _URLSearchParams = require(dependencyMap[0]).URLSearchParams;
_URLSearchParams.install(obj);
({ URL: exports.URL, URLSearchParams: exports.URLSearchParams } = obj);

export const parseURL = require(dependencyMap[1]).parseURL;
export const basicURLParse = require(dependencyMap[1]).basicURLParse;
export const serializeURL = require(dependencyMap[1]).serializeURL;
export const serializeHost = require(dependencyMap[1]).serializeHost;
export const serializeInteger = require(dependencyMap[1]).serializeInteger;
export const serializeURLOrigin = require(dependencyMap[1]).serializeURLOrigin;
export const setTheUsername = require(dependencyMap[1]).setTheUsername;
export const setThePassword = require(dependencyMap[1]).setThePassword;
export const cannotHaveAUsernamePasswordPort = require(dependencyMap[1]).cannotHaveAUsernamePasswordPort;
export const percentDecode = require(dependencyMap[2]).percentDecode;
