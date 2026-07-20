// Module ID: 11168
// Function ID: 86849
// Name: BotsBanner
// Dependencies: []
// Exports: default

// Module 11168 (BotsBanner)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default function BotsBanner(context) {
  let firstBotApplication;
  let secondBotApplication;
  let obj = arg1(dependencyMap[2]);
  const bannerBots = obj.useBannerBots({ context: context.context });
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  let tmp3 = null;
  if (null != firstBotApplication) {
    tmp3 = null;
    if (null != secondBotApplication) {
      obj = { image: tmp2 };
      const intl = arg1(dependencyMap[5]).intl;
      obj = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      obj.text = intl.formatToPlainString(arg1(dependencyMap[5]).t.9SN0xw, obj);
      tmp3 = jsx(importDefault(dependencyMap[4]), obj);
      const tmp7 = importDefault(dependencyMap[4]);
    }
  }
  return tmp3;
};
