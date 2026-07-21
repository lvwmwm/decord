// Module ID: 4168
// Function ID: 35367
// Name: transformCollectiblesItemAssetsFromServer
// Dependencies: []
// Exports: default

// Module 4168 (transformCollectiblesItemAssetsFromServer)
function transformCollectiblesItemAssetsFromServer(assets) {
  if (null != assets) {
    const obj = {};
    ({ static_image_path: obj.staticImagePath, animated_image_path: obj.animatedImagePath, video_path: obj.videoPath } = assets);
    return obj;
  }
}
function transformProfileEffectKeyFrameFromServer(src) {
  let randomizedSources;
  const obj = { src: src.src, loop: src.loop, height: src.height, width: src.width };
  const duration = src.duration;
  let num = 0;
  if (null != duration) {
    num = duration;
  }
  obj.duration = num;
  const start = src.start;
  let num2 = 0;
  if (null != start) {
    num2 = start;
  }
  obj.start = num2;
  ({ loopDelay: obj.loopDelay, position: obj.position, zIndex: obj.zIndex, randomizedSources } = src);
  let mapped;
  if (null != randomizedSources) {
    mapped = randomizedSources.map((src) => ({ src: src.src }));
  }
  obj.randomizedSources = mapped;
  return obj;
}
function transformCollectiblesItemFromServer(item) {
  let effects;
  if (null != item) {
    const type = item.type;
    if (require(dependencyMap[0]).CollectiblesItemType.AVATAR_DECORATION === type) {
      let obj = {};
      ({ id: obj4.id, type: obj4.type, asset: obj4.asset } = item);
      obj.assets = transformCollectiblesItemAssetsFromServer(item.assets);
      obj.label = item.label;
      return obj;
    } else if (require(dependencyMap[0]).CollectiblesItemType.NAMEPLATE === type) {
      obj = {};
      ({ id: obj3.id, type: obj3.type, asset: obj3.asset } = item);
      obj.assets = transformCollectiblesItemAssetsFromServer(item.assets);
      ({ label: obj3.label, palette: obj3.palette } = item);
      return obj;
    } else if (require(dependencyMap[0]).CollectiblesItemType.PROFILE_EFFECT === type) {
      const obj1 = {};
      ({ id: obj2.id, type: obj2.type, title: obj2.title, description: obj2.description, accessibilityLabel: obj2.accessibilityLabel, animationType: obj2.animationType, staticFrameSrc: obj2.staticFrameSrc, thumbnailPreviewSrc: obj2.thumbnailPreviewSrc, reducedMotionSrc: obj2.reducedMotionSrc, effects } = item);
      let mapped;
      if (null != effects) {
        mapped = effects.map(transformProfileEffectKeyFrameFromServer);
      }
      obj1.effects = mapped;
      return obj1;
    } else if (require(dependencyMap[0]).CollectiblesItemType.PROFILE_FRAME === type) {
      obj = {};
      ({ id: obj.id, type: obj.type, label: obj.label, layers: obj.layers, inner_width: obj.innerWidth, overflow_top: obj.overflowTop, overflow_bottom: obj.overflowBottom, overflow_horizontal: obj.overflowHorizontal } = item);
      return obj;
    }
  }
}
function transformCollectiblesVariantMetadataFromServer(variant) {
  if (null != variant) {
    const obj = {};
    ({ role: obj.role, base_variant_sku_id: obj.baseVariantSkuId, base_variant_name: obj.baseVariantName, value: obj.value, label: obj.label, collapse_under: obj.collapseUnder } = variant);
    return obj;
  }
}
function transformSlayerSKUTenantMetadataFromServer(social_layer) {
  if (null != social_layer) {
    const obj = {};
    const carousel_items = social_layer.carousel_items;
    let mapped;
    if (null != carousel_items) {
      mapped = carousel_items.map((thumbnailAssetId) => ({ thumbnailAssetId: thumbnailAssetId.thumbnail_asset_id, assetId: thumbnailAssetId.asset_id, backgroundAssetId: thumbnailAssetId.background_asset_id, youtubeVideoId: thumbnailAssetId.youtube_video_id, label: thumbnailAssetId.label, labelIconAssetId: thumbnailAssetId.label_icon_asset_id, title: thumbnailAssetId.title, description: thumbnailAssetId.description }));
    }
    if (null == mapped) {
      mapped = [];
    }
    obj.carouselItems = mapped;
    let date;
    if (null != social_layer.expires_at) {
      const _Date = Date;
      date = new Date(social_layer.expires_at);
    }
    obj.expiresAt = date;
    ({ card_image_asset_id: obj.cardImageAssetId, card_background_image_asset_id: obj.cardBackgroundImageAssetId } = social_layer);
    return obj;
  }
}
function transformCollectiblesSKUTenantMetadataFromServer(collectibles) {
  if (null != collectibles) {
    const obj = { type: collectibles.type, item: transformCollectiblesItemFromServer(collectibles.item) };
    ({ category_sku_id: obj.categorySkuId, premium_type: obj.premiumType, expires_seconds_after_claim: obj.expiresSecondsAfterClaim } = collectibles);
    let date;
    if (null != collectibles.expires_at) {
      const _Date = Date;
      date = new Date(1000 * collectibles.expires_at);
    }
    obj.expiresAt = date;
    obj.variant = transformCollectiblesVariantMetadataFromServer(collectibles.variant);
    ({ option_selector_display_value: obj.optionSelectorDisplayValue, source_type: obj.sourceType } = collectibles);
    return obj;
  }
}
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/skus/utils/transformSKUTenantMetadata.tsx");

export default function transformSKUTenantMetadata(social_layer) {
  if (null != social_layer) {
    const obj = { socialLayer: transformSlayerSKUTenantMetadataFromServer(social_layer.social_layer), collectibles: transformCollectiblesSKUTenantMetadataFromServer(social_layer.collectibles) };
    return obj;
  }
};
