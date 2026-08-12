// Module ID: 11512
// Function ID: 11513
// Name: BotsBanner
// Dependencies: [19, 21, 11513, 11497, 11508, 1236, 2]
// Exports: default

// Module 11512 (BotsBanner)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useBannerBots").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let firstBotApplication;
  let secondBotApplication;
  let obj = require(11513) /* useBannerBots */;
  const bannerBots = obj.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp4Result = null;
  if (null != firstBotApplication) {
    tmp4Result = null;
    if (null != secondBotApplication) {
      obj = { image: null, text: null };
      obj[0] = tmp6;
      const intl = tmp(1236).intl;
      obj = { firstApplicationName: null, secondApplicationName: null };
      obj[0] = firstBotApplication.name;
      obj[1] = secondBotApplication.name;
      obj[1] = intl.formatToPlainString(tmp(1236).t["9SN0xw"], obj);
      tmp4Result = jsx(importDefault(11508), { firstApplicationName: null, secondApplicationName: null });
      const tmp5Result = importDefault(11508);
    }
  }
  return tmp4Result;
};
