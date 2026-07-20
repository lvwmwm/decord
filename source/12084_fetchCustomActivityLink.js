// Module ID: 12084
// Function ID: 93209
// Name: fetchCustomActivityLink
// Dependencies: []
// Exports: getCustomActivityLinkParams, getOrFetchCustomActivityLink, getQuickLinkImage

// Module 12084 (fetchCustomActivityLink)
function fetchCustomActivityLink() {
  return _fetchCustomActivityLink(...arguments);
}
function _fetchCustomActivityLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _fetchCustomActivityLink = obj;
  return obj(...arguments);
}
function _getCustomActivityLinkParams() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _getCustomActivityLinkParams = obj;
  return obj(...arguments);
}
function loadCustomActivityLink(id, linkId) {
  return _loadCustomActivityLink(...arguments);
}
function _loadCustomActivityLink() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback(tmp);
  const _loadCustomActivityLink = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const Endpoints = arg1(dependencyMap[2]).Endpoints;
const set = new Set();
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/activities/utils/CustomActivityLinkUtils.tsx");

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
  let one = one.getOne(id, linkId);
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
