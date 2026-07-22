// Module ID: 11159
// Function ID: 86782
// Name: ActivitiesBanner
// Dependencies: []
// Exports: default

// Module 11159 (ActivitiesBanner)
let closure_3 = importDefault(dependencyMap[0]);
importAll(dependencyMap[1]);
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/app_launcher/native/onboarding/banner/ActivitiesBanner.tsx");

export default function ActivitiesBanner(context) {
  let obj = arg1(dependencyMap[3]);
  obj = { guildId: context.context.channel.guild_id, fetchesShelf: false };
  const tmp = callback(obj.useActivityApplications(obj), 2);
  const first = tmp[0];
  let tmp4 = null;
  if (null != first) {
    tmp4 = null;
    if (null != tmp[1]) {
      obj = { image: tmp3 };
      const intl = arg1(dependencyMap[6]).intl;
      const obj1 = { activityName: first.name };
      obj.text = intl.formatToPlainString(arg1(dependencyMap[6]).t.zHMWuV, obj1);
      tmp4 = jsx(importDefault(dependencyMap[5]), obj);
      const tmp8 = importDefault(dependencyMap[5]);
    }
  }
  return tmp4;
};
