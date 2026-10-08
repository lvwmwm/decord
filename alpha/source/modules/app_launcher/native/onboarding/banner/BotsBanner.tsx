// Module ID: 11758
// Function ID: 11759
// Name: BotsBanner
// Dependencies: [19, 21, 558, 576, 11759, 11743, 1126, 11754, 2]

// Module 11758 (BotsBanner)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import ApplicationsImageDefault from "ApplicationsImage" /* 11743 */;
import BannerBaseDefault from "BannerBase" /* 11754 */;
import useBannerBots from "useBannerBots" /* 11759 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function BotsBanner(context) {
  let firstBotApplication;
  let secondBotApplication;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(11);
  context = context.context;
  if (cResult[0] !== context) {
    const obj2 = { context };
    cResult[0] = context;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useBannerBots;
  const bannerBots = tmpResult.useBannerBots(tmp4);
  ({ firstBotApplication, secondBotApplication } = bannerBots);
  if (cResult[2] === firstBotApplication) {
    let tmp6;
    if (cResult[3] === secondBotApplication) {
      tmp6 = cResult[4];
    }
    let tmp9 = null;
    if (null != firstBotApplication) {
      tmp9 = null;
      if (null != secondBotApplication) {
        if (cResult[5] === firstBotApplication.name) {
          let tmp10;
          if (cResult[6] === secondBotApplication.name) {
            tmp10 = cResult[7];
          }
          if (cResult[8] === tmp6) {
            let tmp12;
            if (cResult[9] === tmp10) {
              tmp12 = cResult[10];
            }
            tmp9 = tmp12;
          }
          const tmp15 = jsx(BannerBaseDefault, { image: tmp6, text: tmp10 });
          cResult[8] = tmp6;
          cResult[9] = tmp10;
          cResult[10] = tmp15;
          tmp12 = tmp15;
        }
        const intl = tmp(1126).intl;
        const obj4 = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
        const formatToPlainStringResult = intl.formatToPlainString(intl2.t["9SN0xw"], obj4);
        cResult[5] = firstBotApplication.name;
        cResult[6] = secondBotApplication.name;
        cResult[7] = formatToPlainStringResult;
        tmp10 = formatToPlainStringResult;
      }
    }
    return tmp9;
  }
  const tmp7 = jsx(ApplicationsImageDefault, { firstApplication: firstBotApplication, secondApplication: secondBotApplication });
  cResult[2] = firstBotApplication;
  cResult[3] = secondBotApplication;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : (function BotsBanner(context) {
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
      intl = tmp(1126).intl;
      obj3 = { firstApplicationName: firstBotApplication.name, secondApplicationName: secondBotApplication.name };
      tmp4Result = tmp4(tmp5Result, obj2);
    }
  }
  return tmp4Result;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/BotsBanner.tsx");

export default tmp3;
