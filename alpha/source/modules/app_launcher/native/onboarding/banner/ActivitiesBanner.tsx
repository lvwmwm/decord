// Module ID: 12391
// Function ID: 12392
// Name: ActivitiesBanner
// Dependencies: [32, 19, 21, 12380, 12392, 12403, 1115, 2]
// Exports: default

// Module 12391 (ActivitiesBanner)
import useActivityApplications from "useActivityApplications" /* 12380 */;
import BannerBaseDefault from "BannerBase" /* 12403 */;
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
