// Module ID: 7011
// Function ID: 7012
// Name: utils/CollectiblesUtils
// Dependencies: [4884, 4892, 7012, 558, 576, 6814, 4515, 2]
// Exports: buildFetchCollectiblesOptionsQuery, constructGoLiveSource, getOptimizedProfileEffectThumbnailUrl

// Module 7011 (utils/CollectiblesUtils)
import react from "react" /* 576 */;
import StreamSettingsConstants from "StreamSettingsConstants" /* 4884 */;
import BaseConnectionEvent from "BaseConnectionEvent" /* 4892 */;
import useFractionalPremiumInfoDefault from "useFractionalPremiumInfo" /* 6814 */;
import ShopVariantsReturnStyle from "ShopVariantsReturnStyle" /* 7012 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp;
const DateUtils = tmp(4515);
const ApplicationStreamPresets = StreamSettingsConstants.ApplicationStreamPresets;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp6;
  const obj = react;
  const cResult = obj.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { forceFetch: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  const tmp5 = useFractionalPremiumInfoDefault(first);
  if (cResult[1] !== tmp5.endsAt) {
    const tmpResult = DateUtils;
    const dateFormatResult = tmpResult.dateFormat(tmp5.endsAt, "L");
    cResult[1] = tmp5.endsAt;
    cResult[2] = dateFormatResult;
    tmp6 = dateFormatResult;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] === tmp6) {
    if (cResult[4] === tmp5.isFractionalPremiumActive) {
      let tmp9;
      if (cResult[5] === !tmp5.fetched) {
        tmp9 = cResult[6];
      }
      return tmp9;
    }
  }
  const obj3 = { isLoading: !tmp5.fetched, isFractionalPremiumActive: tmp5.isFractionalPremiumActive, expiresAt: tmp6 };
  cResult[3] = tmp6;
  cResult[4] = tmp5.isFractionalPremiumActive;
  cResult[5] = !tmp5.fetched;
  cResult[6] = obj3;
  tmp9 = obj3;
}) : (() => {
  const tmp = useFractionalPremiumInfoDefault({ forceFetch: true });
  const obj = DateUtils;
  const obj2 = { isLoading: !tmp.fetched, isFractionalPremiumActive: tmp.isFractionalPremiumActive, expiresAt: obj.dateFormat(tmp.endsAt, "L") };
  return obj2;
});
const result = size.fileFinishedImporting("modules/collectibles/utils/CollectiblesUtils.tsx");

export const constructGoLiveSource = function constructGoLiveSource(resolution, frameRate, desktopSource) {
  let obj2;
  const obj = { qualityOptions: obj2, context: BaseConnectionEvent.MediaEngineContextTypes.STREAM };
  obj2 = { preset: ApplicationStreamPresets.PRESET_CUSTOM, resolution, frameRate };
  if (null != desktopSource) {
    if (null != desktopSource.desktopSource) {
      const obj3 = { sourceId: desktopSource.desktopSource.id, sound: true };
      obj.desktopSettings = obj3;
    }
    if (null != desktopSource.cameraSource) {
      const obj4 = { videoDeviceGuid: desktopSource.cameraSource.videoDeviceGuid, audioDeviceGuid: desktopSource.cameraSource.audioDeviceGuid };
      obj.cameraSettings = obj4;
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
    const tmp = null != noCache.countryCode && "" !== noCache.countryCode;
    if (tmp) {
      obj.country_code = noCache.countryCode;
    }
    if (null !== noCache.paymentGateway) {
      obj.payment_gateway = noCache.paymentGateway;
    }
    const tmp2 = require;
    if (noCache.variantsReturnStyle === ShopVariantsReturnStyle.ShopVariantsReturnStyle.VARIANTS_GROUP) {
      obj.variants_return_style = tmp2(7012).ShopVariantsReturnStyle.VARIANTS_GROUP;
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
export const useFetchFractionalPremiumInfo = tmp2;
