// Module ID: 9465
// Function ID: 73713
// Name: questHomeHeroCtaFromServer
// Dependencies: [284214097]
// Exports: questHomeHeroCtaFromServer

// Module 9465 (questHomeHeroCtaFromServer)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/ads/QuestHomeHeroCta.tsx");

export const questHomeHeroCtaFromServer = function questHomeHeroCtaFromServer(cta) {
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
};
