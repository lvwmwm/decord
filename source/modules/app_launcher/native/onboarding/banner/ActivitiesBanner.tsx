// Module ID: 11160
// Function ID: 86746
// Name: ActivitiesBanner
// Dependencies: [57, 31, 33, 11149, 11161, 11172, 1212, 2]
// Exports: default

// Module 11160 (ActivitiesBanner)
import _slicedToArray from "_slicedToArray";
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  let obj = require(11149) /* useActivityApplications */;
  obj = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  const tmp = callback(obj.useActivityApplications(obj), 2);
  const first = tmp[0];
  let tmp4 = null;
  if (null != first) {
    tmp4 = null;
    if (null != tmp[1]) {
      obj = { image: tmp3 };
      const intl = require(1212) /* getSystemLocale */.intl;
      const obj1 = { activityName: first.name };
      obj.text = intl.formatToPlainString(require(1212) /* getSystemLocale */.t.zHMWuV, obj1);
      tmp4 = jsx(importDefault(11172), { image: tmp3 });
      const tmp8 = importDefault(11172);
    }
  }
  return tmp4;
};
