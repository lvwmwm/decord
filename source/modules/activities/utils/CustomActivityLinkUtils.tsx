// Module ID: 12209
// Function ID: 95421
// Name: fetchCustomActivityLink
// Dependencies: [5, 12210, 653, 12212, 507, 686, 2]
// Exports: getCustomActivityLinkParams, getOrFetchCustomActivityLink, getQuickLinkImage

// Module 12209 (fetchCustomActivityLink)
import dispatcher from "dispatcher";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Endpoints } from "ME";
import set from "ME";

const require = arg1;
function fetchCustomActivityLink() {
  return _fetchCustomActivityLink(...arguments);
}
function _fetchCustomActivityLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function _getCustomActivityLinkParams() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
function loadCustomActivityLink(id, linkId) {
  return _loadCustomActivityLink(...arguments);
}
function _loadCustomActivityLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  return obj(...arguments);
}
let set = new Set();
const result = set.fileFinishedImporting("modules/activities/utils/CustomActivityLinkUtils.tsx");

export { fetchCustomActivityLink };
export const getCustomActivityLinkParams = function getCustomActivityLinkParams(code, value, searchParams2) {
  return _getCustomActivityLinkParams(...arguments);
};
export const getQuickLinkImage = function getQuickLinkImage(assetPath) {
  if (null != assetPath) {
    const _location = location;
    const _window = window;
    const _HermesInternal = HermesInternal;
    return "" + location.protocol + "//" + window.GLOBAL_ENV.CDN_HOST + "/attachments-quick-links/" + assetPath;
  }
};
export { loadCustomActivityLink };
export const getOrFetchCustomActivityLink = function getOrFetchCustomActivityLink(id, linkId) {
  one = one.getOne(id, linkId);
  if (null == one) {
    one = null;
    if (!set.has(linkId)) {
      loadCustomActivityLink(id, linkId);
      set.add(linkId);
      one = null;
    }
  }
  return one;
};
