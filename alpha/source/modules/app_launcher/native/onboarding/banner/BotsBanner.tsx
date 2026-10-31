// Module ID: 12252
// Function ID: 12253
// Name: BotsBanner
// Dependencies: [19, 21, 12253, 12238, 12249, 1113, 2]
// Exports: default

// Module 12252 (BotsBanner)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import useBannerBots from "useBannerBots" /* 12253 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp5;
const BannerBaseDefault = tmp5(12249);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let firstBotApplication;
  let intl;
  let obj3;
  let secondBotApplication;
  context = context.context;
  const obj = useBannerBots;
  const bannerBots = obj.useBannerBots({ context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp4Result = null;
  const tmp4 = jsx;
  if (null != firstBotApplication) {
    tmp4Result = null;
    if (null != secondBotApplication) {
      const obj2 = { image: tmp6, text: intl.formatToPlainString(intl2.t["9SN0xw"], obj3) };
      const tmp5Result = BannerBaseDefault;
      intl = tmp(1113).intl;
      obj3 = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      tmp4Result = tmp4(tmp5Result, obj2);
    }
  }
  return tmp4Result;
};
