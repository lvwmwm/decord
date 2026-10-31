// Module ID: 12237
// Function ID: 12238
// Name: ActivitiesBanner
// Dependencies: [32, 19, 21, 12226, 12238, 12249, 1113, 2]
// Exports: default

// Module 12237 (ActivitiesBanner)
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1113 */;
import useActivityApplications from "useActivityApplications" /* 12226 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp7;
const BannerBaseDefault = tmp7(12249);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
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
      intl = tmp(1113).intl;
      obj4 = { activityName: tmp4.name };
      tmp6Result = tmp6(tmp7Result, obj3);
    }
  }
  return tmp6Result;
};
