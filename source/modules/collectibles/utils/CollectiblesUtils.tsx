// Module ID: 5818
// Function ID: 51093
// Name: constructGoLiveSource
// Dependencies: [4186, 4228, 5819, 5820, 3801, 2]
// Exports: buildFetchCollectiblesOptionsQuery, constructGoLiveSource, getOptimizedProfileEffectThumbnailUrl, useFetchFractionalPremiumInfo

// Module 5818 (constructGoLiveSource)
import { ApplicationStreamPresets } from "makeButton";

const result = require("ShopVariantsReturnStyle").fileFinishedImporting("modules/collectibles/utils/CollectiblesUtils.tsx");

export const constructGoLiveSource = function constructGoLiveSource(resolution, frameRate, desktopSource) {
  obj = { qualityOptions: obj, context: require(4228) /* getMediaEngineImpl */.MediaEngineContextTypes.STREAM };
  obj = { preset: ApplicationStreamPresets.PRESET_CUSTOM, resolution, frameRate };
  if (null != desktopSource) {
    if (null != desktopSource.desktopSource) {
      obj = { sourceId: desktopSource.desktopSource.id, sound: true };
      obj.desktopSettings = obj;
    }
    if (null != desktopSource.cameraSource) {
      const obj1 = { videoDeviceGuid: desktopSource.cameraSource.videoDeviceGuid, audioDeviceGuid: desktopSource.cameraSource.audioDeviceGuid };
      obj.cameraSettings = obj1;
    }
  }
  return obj;
};
export const buildFetchCollectiblesOptionsQuery = function buildFetchCollectiblesOptionsQuery(noCache, tab) {
  const obj = {};
  if (null != tab) {
    obj.tab = tab;
  }
  if (null != noCache) {
    if (true === noCache.noCache) {
      obj.no_cache = true;
    }
    if (true === noCache.includeUnpublished) {
      obj.include_unpublished = true;
    }
    if (true === noCache.includeBundles) {
      obj.include_bundles = true;
    }
    if (true === noCache.includeDynamicBlocks) {
      obj.include_dynamic_blocks = true;
    }
    let tmp = null != noCache.countryCode;
    if (tmp) {
      tmp = "" !== noCache.countryCode;
    }
    if (tmp) {
      obj.country_code = noCache.countryCode;
    }
    if (null !== noCache.paymentGateway) {
      obj.payment_gateway = noCache.paymentGateway;
    }
    if (noCache.variantsReturnStyle === require(5819) /* ShopVariantsReturnStyle */.ShopVariantsReturnStyle.VARIANTS_GROUP) {
      obj.variants_return_style = require(5819) /* ShopVariantsReturnStyle */.ShopVariantsReturnStyle.VARIANTS_GROUP;
    }
    if (null != noCache.shopHomeConfig) {
      obj.shop_home_config = noCache.shopHomeConfig;
    }
    if (null != noCache.skipNumCategories) {
      obj.skip_num_categories = noCache.skipNumCategories;
    }
  }
  return obj;
};
export const getOptimizedProfileEffectThumbnailUrl = function getOptimizedProfileEffectThumbnailUrl(arg0) {
  if (null != arg0) {
    const _HermesInternal = HermesInternal;
    return "" + arg0 + "?width=100&height=195";
  }
};
export const useFetchFractionalPremiumInfo = function useFetchFractionalPremiumInfo() {
  const tmp = importDefault(5820)({ forceFetch: true });
  let obj = require(3801) /* resetCache */;
  obj = { isLoading: !tmp.fetched, isFractionalPremiumActive: tmp.isFractionalPremiumActive, expiresAt: obj.dateFormat(tmp.endsAt, "L") };
  return obj;
};
