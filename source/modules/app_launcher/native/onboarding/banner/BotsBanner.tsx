// Module ID: 11721
// Function ID: 11722
// Name: BotsBanner
// Dependencies: [19, 21, 11722, 11706, 11717, 1236, 2]
// Exports: default

// Module 11721 (BotsBanner)
import noopAll from "noop" /* 19 */;
import BannerBaseDefault from "BannerBase" /* 11717 */;
import useBannerBots from "useBannerBots" /* 11722 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let obj = useBannerBots;
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
      tmp4Result = jsx(BannerBaseDefault, { firstApplicationName: null, secondApplicationName: null });
      const tmp5Result = BannerBaseDefault;
    }
  }
  return tmp4Result;
};
