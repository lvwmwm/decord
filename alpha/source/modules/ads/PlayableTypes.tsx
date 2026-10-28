// Module ID: 9632
// Function ID: 9633
// Name: PlayableTypes
// Dependencies: [9618, 2]
// Exports: playableCtaFromServer, playableFromServer

// Module 9632 (PlayableTypes)
import AssetUtils from "AssetUtils" /* 9618 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/ads/PlayableTypes.tsx");

export const playableCtaFromServer = function playableCtaFromServer(url) {
  let tmp;
  let tmp2;
  const obj = { url: url.url, buttonLabel: url.button_label, android: tmp, ios: tmp2 };
  tmp = undefined;
  if (null != url.android) {
    tmp = { androidAppId: url.android.android_app_id };
    const obj2 = { androidAppId: url.android.android_app_id };
  }
  tmp2 = undefined;
  if (null != url.ios) {
    tmp2 = { iosAppId: url.ios.ios_app_id };
    const obj3 = { iosAppId: url.ios.ios_app_id };
  }
  return obj;
};
export const playableFromServer = function playableFromServer(creative_content) {
  let obj2;
  let obj3;
  let obj4;
  let obj5;
  let tmp;
  let tmp2;
  const obj = { id: creative_content.id, applicationId: creative_content.application_id, advertiserName: creative_content.advertiser_name, productName: creative_content.product_name, productIcon: obj2.resolveAdCreativeCdnUrl(creative_content.product_icon), videoPreview: obj3.resolveOptionalAdCreativeCdnUrl(creative_content.video_preview), imagePreview: obj4.resolveOptionalAdCreativeCdnUrl(creative_content.image_preview), cta: obj5, rewardTimerSeconds: creative_content.reward_timer_seconds };
  obj2 = AssetUtils;
  obj3 = AssetUtils;
  const cta = creative_content.cta;
  obj5 = { url: cta.url, buttonLabel: cta.button_label, android: tmp, ios: tmp2 };
  tmp = undefined;
  obj4 = AssetUtils;
  if (null != cta.android) {
    tmp = { androidAppId: cta.android.android_app_id };
    const obj6 = { androidAppId: cta.android.android_app_id };
  }
  tmp2 = undefined;
  if (null != cta.ios) {
    tmp2 = { iosAppId: cta.ios.ios_app_id };
    const obj7 = { iosAppId: cta.ios.ios_app_id };
  }
  return obj;
};
