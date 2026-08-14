// Module ID: 11509
// Function ID: 11510
// Name: ActivitiesBanner
// Dependencies: [32, 19, 21, 11498, 11510, 11521, 1236, 2]
// Exports: default

// Module 11509 (ActivitiesBanner)
import _slicedToArray from "_slicedToArray";
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  let tmp4;
  let tmp5;
  let obj = require(11498) /* useActivityApplications */;
  obj = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  [tmp4, tmp5] = callback(obj.useActivityApplications(obj), 2);
  let tmp6Result = null;
  if (null != tmp4) {
    tmp6Result = null;
    if (null != tmp5) {
      obj = { image: null, text: null };
      obj[0] = tmp8;
      const intl = tmp(1236).intl;
      const obj1 = { activityName: null };
      obj1[0] = tmp4.name;
      obj[1] = intl.formatToPlainString(tmp(1236).t.zHMWuV, obj1);
      tmp6Result = jsx(importDefault(11521), { image: null, text: null });
      const tmp7Result = importDefault(11521);
    }
  }
  return tmp6Result;
};
