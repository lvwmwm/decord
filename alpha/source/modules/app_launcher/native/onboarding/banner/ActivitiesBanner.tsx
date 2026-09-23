// Module ID: 12382
// Function ID: 12383
// Name: ActivitiesBanner
// Dependencies: [32, 19, 21, 12371, 12383, 12394, 1115, 2]
// Exports: default

// Module 12382 (ActivitiesBanner)
import useActivityApplications from "useActivityApplications" /* 12371 */;
import BannerBaseDefault from "BannerBase" /* 12394 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  const obj2 = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = useActivityApplications.useActivityApplications({ guildId: context.context.channel.guild_id, fetchesShelf: false });
  let tmp6Result = null;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      const obj3 = { image: tmp8, text: null };
      const intl = tmp(1115).intl;
      const obj4 = { activityName: tmp4.name };
      obj3.text = intl.formatToPlainString(tmp(1115).t.zHMWuV, obj4);
      tmp6Result = jsx(BannerBaseDefault, { image: tmp8, text: null });
      const tmp7Result = BannerBaseDefault;
    }
  }
  return tmp6Result;
};
