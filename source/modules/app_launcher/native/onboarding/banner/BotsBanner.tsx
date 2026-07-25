// Module ID: 11176
// Function ID: 86861
// Name: BotsBanner
// Dependencies: [31, 33, 11177, 11161, 11172, 1212, 2]
// Exports: default

// Module 11176 (BotsBanner)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let firstBotApplication;
  let secondBotApplication;
  let obj = require(11177) /* _createForOfIteratorHelperLoose */;
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
      tmp3 = jsx(importDefault(11172), { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name });
      const tmp7 = importDefault(11172);
    }
  }
  return tmp3;
};
