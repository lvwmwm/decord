// Module ID: 11677
// Function ID: 11678
// Name: ActivitiesBanner
// Dependencies: [32, 19, 21, 558, 576, 11666, 11678, 1126, 11689, 2]

// Module 11677 (ActivitiesBanner)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl2 from "intl" /* 1126 */;
import useActivityApplications from "useActivityApplications" /* 11666 */;
import ApplicationsImageDefault from "ApplicationsImage" /* 11678 */;
import BannerBaseDefault from "BannerBase" /* 11689 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let context;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((context) => {
  let tmp4;
  let tmp6;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(10);
  context = context.context;
  if (cResult[0] !== context.channel.guild_id) {
    const obj2 = { guildId: context.channel.guild_id, fetchesShelf: false };
    cResult[0] = context.channel.guild_id;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult = useActivityApplications;
  [tmp6, tmp7] = tmpResult.useActivityApplications(tmp4);
  _slicedToArray(tmpResult.useActivityApplications(tmp4), 2);
  if (cResult[2] === tmp6) {
    let tmp8;
    if (cResult[3] === tmp7) {
      tmp8 = cResult[4];
    }
    let tmp11 = null;
    if (null != tmp6) {
      tmp11 = null;
      if (null != tmp7) {
        let tmp12;
        if (cResult[5] !== tmp6.name) {
          const intl = tmp(1126).intl;
          const obj3 = { activityName: tmp6.name };
          const formatToPlainStringResult = intl.formatToPlainString(intl2.t.zHMWuV, obj3);
          cResult[5] = tmp6.name;
          cResult[6] = formatToPlainStringResult;
          tmp12 = formatToPlainStringResult;
        } else {
          tmp12 = cResult[6];
        }
        if (cResult[7] === tmp8) {
          let tmp14;
          if (cResult[8] === tmp12) {
            tmp14 = cResult[9];
          }
          tmp11 = tmp14;
        }
        const tmp17 = jsx(BannerBaseDefault, { image: tmp8, text: tmp12 });
        cResult[7] = tmp8;
        cResult[8] = tmp12;
        cResult[9] = tmp17;
        tmp14 = tmp17;
      }
    }
    return tmp11;
  }
  const tmp9 = jsx(ApplicationsImageDefault, { firstApplication: tmp6, secondApplication: tmp7 });
  cResult[2] = tmp6;
  cResult[3] = tmp7;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((context) => {
  let intl;
  let obj4;
  let tmp4;
  let tmp5;
  context = context.context;
  const obj = useActivityApplications;
  const obj2 = { guildId: context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = obj.useActivityApplications(obj2);
  let tmp6Result = null;
  _slicedToArray(obj.useActivityApplications(obj2), 2);
  const tmp6 = jsx;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      const obj3 = { image: tmp8, text: intl.formatToPlainString(intl2.t.zHMWuV, obj4) };
      const tmp7Result = BannerBaseDefault;
      intl = tmp(1126).intl;
      obj4 = { activityName: tmp4.name };
      tmp6Result = tmp6(tmp7Result, obj3);
    }
  }
  return tmp6Result;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default tmp3;
