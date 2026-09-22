// Module ID: 12198
// Function ID: 12199
// Name: BotsBanner
// Dependencies: [19, 21, 12199, 12183, 12194, 1114, 2]
// Exports: default

// Module 12198 (BotsBanner)
import BannerBaseDefault from "BannerBase" /* 12194 */;
import useBannerBots from "useBannerBots" /* 12199 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  const bannerBots = useBannerBots.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp4Result = null;
  if (null != firstBotApplication) {
    tmp4Result = null;
    if (null != secondBotApplication) {
      const obj2 = { image: tmp6, text: null };
      const intl = tmp(1114).intl;
      const obj3 = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      obj2.text = intl.formatToPlainString(tmp(1114).t["9SN0xw"], obj3);
      tmp4Result = jsx(BannerBaseDefault, { image: tmp6, text: null });
      const tmp5Result = BannerBaseDefault;
    }
  }
  return tmp4Result;
};
