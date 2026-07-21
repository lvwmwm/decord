// Module ID: 6950
// Function ID: 55516
// Name: questCtaConfigFromServer
// Dependencies: [284214097]
// Exports: questCtaConfigFromServer

// Module 6950 (questCtaConfigFromServer)
const _module = require(dependencyMap[0]);
const result = _module.fileFinishedImporting("modules/quests/types/v2/CTA.tsx");

export const questCtaConfigFromServer = function questCtaConfigFromServer(cta_config) {
  let obj = {};
  let tmp;
  if (null != cta_config.android) {
    obj = { androidAppId: cta_config.android.android_app_id };
    tmp = obj;
  }
  obj.android = tmp;
  let tmp2;
  if (null != cta_config.ios) {
    obj = { iosAppId: cta_config.ios.ios_app_id };
    tmp2 = obj;
  }
  obj.ios = tmp2;
  ({ link: obj.link, button_label: obj.buttonLabel, subtitle: obj.subtitle } = cta_config);
  return obj;
};
