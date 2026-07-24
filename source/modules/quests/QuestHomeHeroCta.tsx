// Module ID: 9509
// Function ID: 73987
// Name: questHomeHeroCtaFromServer
// Dependencies: [2]
// Exports: questHomeHeroCtaFromServer

// Module 9509 (questHomeHeroCtaFromServer)
const result = require("set").fileFinishedImporting("modules/quests/QuestHomeHeroCta.tsx");

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
