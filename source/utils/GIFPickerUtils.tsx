// Module ID: 9616
// Function ID: 74852
// Name: isKlipyProvider
// Dependencies: [653, 2]
// Exports: calculateAnalyticsMetadata, getGIFThumbnailForFavorite

// Module 9616 (isKlipyProvider)
import { SearchTypes } from "ME";

function isKlipyProvider(providerName) {
  return "Klipy" === providerName;
}
function shouldUseAnimatedWebPThumbnail(providerName) {
  return isKlipyProvider(providerName);
}
const result = require("set").fileFinishedImporting("utils/GIFPickerUtils.tsx");

export { isKlipyProvider };
export { shouldUseAnimatedWebPThumbnail };
export const getGIFThumbnailForFavorite = function getGIFThumbnailForFavorite(providerName) {
  if (shouldUseAnimatedWebPThumbnail(providerName.providerName)) {
    const thumbnail = providerName.thumbnail;
    if (null != thumbnail) {
      let uri = thumbnail.proxyURL;
      if (null == uri) {
        uri = thumbnail.url;
      }
      if (null == uri) {
        uri = thumbnail.uri;
      }
      return uri;
    }
  }
};
export const calculateAnalyticsMetadata = function calculateAnalyticsMetadata(analyticsID, type, arg2) {
  let limit;
  let offset;
  let results;
  let obj = arg2;
  if (null != type) {
    obj = {};
    obj[type] = 1;
  } else {
    obj = {};
  }
  if (null == obj) {
    obj = {};
  }
  ({ offset, limit, results } = obj);
  const obj1 = { search_type: SearchTypes.GIF, load_id: analyticsID, limit, offset };
  let num2 = 1;
  if (null != limit) {
    num2 = 1;
    if (null != offset) {
      const _Math = Math;
      num2 = Math.floor(offset / limit) + 1;
    }
  }
  obj1.page = num2;
  obj1.total_results = obj.totalResults;
  let tmp2 = null;
  if (null != results) {
    tmp2 = results;
  }
  obj1.page_results = tmp2;
  obj1.num_modifiers = Object.keys(obj).length;
  obj1.modifiers = obj;
  return obj1;
};
