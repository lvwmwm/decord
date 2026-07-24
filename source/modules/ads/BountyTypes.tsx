// Module ID: 10873
// Function ID: 84351
// Name: bountyCtaFromServer
// Dependencies: [9494, 2]
// Exports: bountyFromServer

// Module 10873 (bountyCtaFromServer)
function bountyCtaFromServer(cta) {
  let obj = { url: cta.url, buttonLabel: cta.button_label };
  let tmp;
  if (null != cta.android) {
    obj = { androidAppId: cta.android.android_app_id };
    tmp = obj;
  }
  obj.android = tmp;
  let tmp2;
  if (null != cta.ios) {
    obj = { iosAppId: cta.ios.ios_app_id };
    tmp2 = obj;
  }
  obj.ios = tmp2;
  return obj;
}
const result = require("set").fileFinishedImporting("modules/ads/BountyTypes.tsx");

export { bountyCtaFromServer };
export const bountyFromServer = function bountyFromServer(creative_content) {
  const obj = { id: creative_content.id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: require(9494) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.product_icon) };
  const obj2 = require(9494) /* resolveAsset */;
  obj.videoPreview = require(9494) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.video_preview);
  const obj3 = require(9494) /* resolveAsset */;
  obj.imagePreview = require(9494) /* resolveAsset */.resolveOptionalAdCreativeCdnUrl(creative_content.image_preview);
  const obj4 = require(9494) /* resolveAsset */;
  obj.videoHls = require(9494) /* resolveAsset */.resolveAdCreativeCdnUrl(creative_content.video_hls);
  obj.cta = bountyCtaFromServer(creative_content.cta);
  const reward_timer_seconds = creative_content.reward_timer_seconds;
  let num = 15;
  if (null != reward_timer_seconds) {
    num = reward_timer_seconds;
  }
  obj.rewardTimerSeconds = num;
  return obj;
};
