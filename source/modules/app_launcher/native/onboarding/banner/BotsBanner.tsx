// Module ID: 11215
// Function ID: 87216
// Name: BotsBanner
// Dependencies: [31, 33, 11216, 11200, 11211, 1212, 2]
// Exports: default

// Module 11215 (BotsBanner)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let firstBotApplication;
  let secondBotApplication;
  let obj = require(11216) /* _createForOfIteratorHelperLoose */;
  const bannerBots = obj.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp3 = null;
  if (null != firstBotApplication) {
    tmp3 = null;
    if (null != secondBotApplication) {
      obj = { image: tmp2 };
      const intl = require(1212) /* getSystemLocale */.intl;
      obj = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      obj.text = intl.formatToPlainString(require(1212) /* getSystemLocale */.t["9SN0xw"], obj);
      tmp3 = jsx(importDefault(11211), { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name });
      const tmp7 = importDefault(11211);
    }
  }
  return tmp3;
};
