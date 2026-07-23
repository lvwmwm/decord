// Module ID: 6956
// Function ID: 55573
// Name: questCtaConfigFromServer
// Dependencies: [2]
// Exports: questCtaConfigFromServer

// Module 6956 (questCtaConfigFromServer)
const result = require("set").fileFinishedImporting("modules/quests/types/v2/CTA.tsx");

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
