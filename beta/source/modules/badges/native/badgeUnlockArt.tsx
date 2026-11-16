// Module ID: 15283
// Function ID: 15284
// Name: badgeUnlockArt
// Dependencies: [10117, 2]
// Exports: getBadgeUnlockArt

// Module 15283 (badgeUnlockArt)
import BadgeDetailsUtils from "BadgeDetailsUtils" /* 10117 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/badges/native/badgeUnlockArt.tsx");

export function getBadgeUnlockArt(badge, displayTier, arg2) {
  let tmp7;
  const obj = { artUrl: null, rasterUrl: null, animatedUrl: null };
  const tmp = arg2;
  if (tmp) {
    let prop;
    if (displayTier != null) {
      prop = displayTier.complex_icon_static_url;
    }
    if (prop == null) {
      let simple_icon_url;
      if (displayTier != null) {
        simple_icon_url = displayTier.simple_icon_url;
      }
      prop = simple_icon_url;
    }
    obj.artUrl = prop;
    let prop1;
    if (displayTier != null) {
      prop1 = displayTier.simple_icon_raster_url;
    }
    obj.rasterUrl = prop1;
    let prop2;
    if (displayTier != null) {
      prop2 = displayTier.complex_icon_animated_url;
    }
    obj.animatedUrl = prop2;
    tmp7 = obj;
  } else {
    const obj2 = BadgeDetailsUtils;
    obj.artUrl = obj2.getBadgeArtUrls(badge, displayTier, true).imageUrl;
    let prop3;
    const tmp3 = require;
    if (displayTier != null) {
      prop3 = displayTier.simple_icon_raster_url;
    }
    if (prop3 == null) {
      prop3 = badge.simple_icon_raster_url;
    }
    obj.rasterUrl = prop3;
    const tmp3Result = tmp3(10117);
    obj.animatedUrl = tmp3Result.getBadgeArtUrls(badge, displayTier, false).animatedUrl;
    tmp7 = obj;
  }
  return tmp7;
}
