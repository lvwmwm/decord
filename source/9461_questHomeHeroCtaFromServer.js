// Module ID: 9461
// Function ID: 73699
// Name: questHomeHeroCtaFromServer
// Dependencies: []
// Exports: questHomeHeroCtaFromServer

// Module 9461 (questHomeHeroCtaFromServer)
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
