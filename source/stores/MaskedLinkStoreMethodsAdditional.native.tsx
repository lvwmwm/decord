// Module ID: 9082
// Function ID: 9083
// Name: getHostname
// Dependencies: [2]
// Exports: getHostname, getProtocol

// Module 9082 (getHostname)
import set from "set" /* 2 */;

const result = set.fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export const getHostname = function getHostname(arg0) {
  try {
    const _URL = URL;
    const uRL = new URL(arg0);
    return uRL.hostname;
  } catch (err) {
    return "";
  }
};
export const getProtocol = function getProtocol(url) {
  try {
    const _URL = URL;
    const uRL = new URL(url);
    return uRL.protocol;
  } catch (err) {
    return "";
  }
};
