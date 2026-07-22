// Module ID: 11256
// Function ID: 87580
// Name: useIsPrimaryEntryPointDisabled
// Dependencies: [0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 11256 (useIsPrimaryEntryPointDisabled)
import __exportStarResult1 from "__exportStarResult1";
import { Permissions } from "__exportStarResult1";

let closure_4 = importDefault(dependencyMap[1]);
const result = require("__exportStarResult1").fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  let activityAction;
  let application;
  let context;
  ({ context, application, activityAction } = arg0);
  let arg1;
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  arg1 = channel;
  let obj = arg1(dependencyMap[3]);
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => closure_4.can(constants.USE_EMBEDDED_ACTIVITIES, channel));
  let id;
  if (null != channel) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = arg1(dependencyMap[4]).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (arg1(dependencyMap[5]).ActivityAction.LEAVE !== activityAction) {
    if (arg1(dependencyMap[5]).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        if (null != channel) {
          if (channel.isGuildVoice()) {
            flag = false;
            if (embeddedActivityLaunchability !== arg1(dependencyMap[4]).EmbeddedActivityLaunchability.CAN_LAUNCH) {
              flag = true;
            }
          }
        }
        flag = false;
        if (!obj4.isActivitiesInTextEnabled(channel)) {
          flag = true;
        }
        const obj4 = arg1(dependencyMap[6]);
      }
    } else {
      flag = false;
      if (arg1(dependencyMap[5]).ActivityAction.JOIN === activityAction) {
        if (null != channel) {
          if (channel.isGuildVoice()) {
            flag = !stateFromStores;
          }
        }
        flag = false;
        if (!obj3.isActivitiesInTextEnabled(channel)) {
          flag = true;
        }
        const obj3 = arg1(dependencyMap[6]);
      }
    }
  }
  let stringResult;
  let flag2 = flag;
  if (activityAction !== arg1(dependencyMap[5]).ActivityAction.LEAVE) {
    const tmp14 = application instanceof __exportStarResult1 ? application.embeddedActivityConfig : application.embedded_activity_config;
    importDefault(dependencyMap[7]);
    arg1(dependencyMap[8]);
    if (null != tmp14) {
      const supported_platforms = tmp14.supported_platforms;
      if (!supported_platforms.includes(tmp20)) {
        const intl = arg1(dependencyMap[9]).intl;
        stringResult = intl.string(arg1(dependencyMap[9]).t.z2YTgJ);
        flag2 = false;
      }
    }
    flag2 = flag;
    if (tmp23) {
      const intl2 = arg1(dependencyMap[9]).intl;
      stringResult = intl2.string(arg1(dependencyMap[9]).t.ddSR3v);
      flag2 = true;
    }
    const tmp23 = null != channel && channel.isThread();
  }
  let tmp26 = flag2;
  if (flag2) {
    tmp26 = null == stringResult;
  }
  if (tmp26) {
    const intl3 = arg1(dependencyMap[9]).intl;
    stringResult = intl3.string(arg1(dependencyMap[9]).t.f41E1g);
  }
  obj = { disabled: flag2, reason: stringResult };
  return obj;
};
