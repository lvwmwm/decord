// Module ID: 9771
// Function ID: 75968
// Name: _createForOfIteratorHelperLoose
// Dependencies: [4369, 5609, 2]
// Exports: convertCarouselItemsToMediaItems, getThumbnailSrc

// Module 9771 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
const result = require("set").fileFinishedImporting("modules/slayer_storefront/utils/carouselMediaItems.tsx");

export const WEB_HERO_WIDTH_PX = 747;
export const WEB_HERO_HEIGHT_PX = 560;
export const MOBILE_HERO_WIDTH_PX = 343;
export const MOBILE_HERO_HEIGHT_PX = 257;
export const CAROUSEL_THUMBNAIL_SIZE = 112;
export const getThumbnailSrc = function getThumbnailSrc(thumbnailSrc) {
  if (null != thumbnailSrc.thumbnailSrc) {
    thumbnailSrc = thumbnailSrc.thumbnailSrc;
  } else {
    thumbnailSrc = "video" === thumbnailSrc.type ? thumbnailSrc.videoThumbnailSrc : thumbnailSrc.src;
  }
  return thumbnailSrc;
};
export const convertCarouselItemsToMediaItems = function convertCarouselItemsToMediaItems(carouselItems, applicationId, stateFromStores2, heroWidth) {
  let iter;
  heroWidth = heroWidth.heroWidth;
  const items = [];
  const items1 = [];
  if (null != carouselItems) {
    if (0 !== carouselItems.length) {
      const tmp43 = _createForOfIteratorHelperLoose(carouselItems);
      let iter2 = tmp43();
      if (!iter2.done) {
        do {
          let value = iter2.value;
          let tmp = null;
          if (null != value.assetId) {
            tmp = stateFromStores2[value.assetId];
          }
          if (null != tmp) {
            let arr = items.push(value);
            let mime_type = tmp.mime_type;
            let push = items1.push;
            if (mime_type.startsWith("video/")) {
              let obj = { type: "video" };
              let tmp20 = require;
              let tmp21 = dependencyMap;
              let obj6 = require(4369) /* _httpGetWithCountryCodeQuery */;
              let tmp22 = obj6;
              let tmp23 = applicationId;
              let tmp24 = tmp;
              let tmp25 = heroWidth;
              let str3 = "mp4";
              obj.src = obj6.getAssetURL(applicationId, tmp, heroWidth, "mp4");
              let obj7 = require(4369) /* _httpGetWithCountryCodeQuery */;
              let tmp26 = obj7;
              let tmp27 = applicationId;
              let tmp28 = tmp;
              let tmp29 = heroWidth;
              let str4 = "webp";
              obj.videoThumbnailSrc = obj7.getAssetURL(applicationId, tmp, heroWidth, "webp");
              let assetURL;
              if (null != value.thumbnailAssetId) {
                let tmp31 = require;
                let tmp32 = dependencyMap;
                let obj8 = require(4369) /* _httpGetWithCountryCodeQuery */;
                let tmp33 = obj8;
                let tmp34 = applicationId;
                let num2 = 112;
                let str5 = "webp";
                assetURL = obj8.getAssetURL(applicationId, value.thumbnailAssetId, 112, "webp");
              }
              obj.thumbnailSrc = assetURL;
              let assetURL1;
              if (null != value.backgroundAssetId) {
                let tmp36 = require;
                let tmp37 = dependencyMap;
                let obj9 = require(4369) /* _httpGetWithCountryCodeQuery */;
                let tmp38 = obj9;
                let tmp39 = applicationId;
                let tmp40 = heroWidth;
                assetURL1 = obj9.getAssetURL(applicationId, value.backgroundAssetId, heroWidth, require(5609) /* _createForOfIteratorHelperLoose */.LARGE_ASSET_FORMAT);
              }
              obj.backgroundSrc = assetURL1;
              arr = push(obj);
            } else {
              obj = { type: "image" };
              let tmp2 = require;
              let tmp3 = dependencyMap;
              let obj2 = require(4369) /* _httpGetWithCountryCodeQuery */;
              let tmp4 = obj2;
              let tmp5 = applicationId;
              let tmp6 = tmp;
              let tmp7 = heroWidth;
              let str = "webp";
              obj.src = obj2.getAssetURL(applicationId, tmp, heroWidth, "webp");
              let assetURL2;
              if (null != value.thumbnailAssetId) {
                let tmp9 = require;
                let tmp10 = dependencyMap;
                let obj3 = require(4369) /* _httpGetWithCountryCodeQuery */;
                let tmp11 = obj3;
                let tmp12 = applicationId;
                let num = 112;
                let str2 = "webp";
                assetURL2 = obj3.getAssetURL(applicationId, value.thumbnailAssetId, 112, "webp");
              }
              obj.thumbnailSrc = assetURL2;
              let assetURL3;
              if (null != value.backgroundAssetId) {
                let tmp14 = require;
                let tmp15 = dependencyMap;
                let obj4 = require(4369) /* _httpGetWithCountryCodeQuery */;
                let tmp16 = obj4;
                let tmp17 = applicationId;
                let tmp18 = heroWidth;
                assetURL3 = obj4.getAssetURL(applicationId, value.backgroundAssetId, heroWidth, require(5609) /* _createForOfIteratorHelperLoose */.LARGE_ASSET_FORMAT);
              }
              obj.backgroundSrc = assetURL3;
              let arr1 = push(obj);
            }
          }
          iter = tmp43();
          iter2 = iter;
        } while (!iter.done);
      }
      const items2 = [items, items1];
      return items2;
    }
  }
  const items3 = [items, items1];
  return items3;
};
