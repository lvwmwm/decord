// Module ID: 10835
// Function ID: 84100
// Name: bountyCtaFromServer
// Dependencies: []
// Exports: bountyFromServer

// Module 10835 (bountyCtaFromServer)
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
const _module = require(dependencyMap[1]);
const result = _module.fileFinishedImporting("modules/ads/BountyTypes.tsx");

export { bountyCtaFromServer };
export const bountyFromServer = function bountyFromServer(creative_content) {
  const obj = { id: creative_content.id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(creative_content.product_icon) };
  const obj2 = require(dependencyMap[0]);
  obj.videoPreview = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(creative_content.video_preview);
  const obj3 = require(dependencyMap[0]);
  obj.imagePreview = require(dependencyMap[0]).resolveOptionalAdCreativeCdnUrl(creative_content.image_preview);
  const obj4 = require(dependencyMap[0]);
  obj.videoHls = require(dependencyMap[0]).resolveAdCreativeCdnUrl(creative_content.video_hls);
  obj.cta = bountyCtaFromServer(creative_content.cta);
  const reward_timer_seconds = creative_content.reward_timer_seconds;
  let num = 15;
  if (null != reward_timer_seconds) {
    num = reward_timer_seconds;
  }
  obj.rewardTimerSeconds = num;
  return obj;
};
