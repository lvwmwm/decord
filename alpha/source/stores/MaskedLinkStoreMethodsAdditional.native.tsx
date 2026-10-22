// Module ID: 8831
// Function ID: 8832
// Name: MaskedLinkStoreMethodsAdditional
// Dependencies: [2]
// Exports: getHostname, getProtocol

// Module 8831 (MaskedLinkStoreMethodsAdditional)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("stores/MaskedLinkStoreMethodsAdditional.native.tsx");

export const getHostname = function getHostname(arg0) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(arg0);
    return uRL.hostname;
  } catch (err) {
    return "";
  }
};
export const getProtocol = function getProtocol(url) {
  try {
    const _URL = URL;
    const self = this;
    const self2 = this;
    const uRL = new URL(url);
    return uRL.protocol;
  } catch (err) {
    return "";
  }
};
