// Module ID: 11266
// Function ID: 87630
// Name: useIsPrimaryEntryPointDisabled
// Dependencies: [4153, 3758, 482, 566, 10836, 11177, 7918, 8183, 477, 1212, 2]
// Exports: default

// Module 11266 (useIsPrimaryEntryPointDisabled)
import _callSuper from "_callSuper";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { Permissions } from "sum";

const require = arg1;
const result = require("sum").fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  let activityAction;
  let application;
  let context;
  ({ context, application, activityAction } = arg0);
  let channel;
  channel = undefined;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  let obj = channel(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.can(outer1_5.USE_EMBEDDED_ACTIVITIES, channel));
  let id;
  if (null != channel) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(10836).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(11177).ActivityAction.LEAVE !== activityAction) {
    if (channel(11177).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        if (null != channel) {
          if (channel.isGuildVoice()) {
            flag = false;
            if (embeddedActivityLaunchability !== channel(10836).EmbeddedActivityLaunchability.CAN_LAUNCH) {
              flag = true;
            }
          }
        }
        flag = false;
        if (!obj4.isActivitiesInTextEnabled(channel)) {
          flag = true;
        }
        obj4 = channel(7918);
      }
    } else {
      flag = false;
      if (channel(11177).ActivityAction.JOIN === activityAction) {
        if (null != channel) {
          if (channel.isGuildVoice()) {
            flag = !stateFromStores;
          }
        }
        flag = false;
        if (!obj3.isActivitiesInTextEnabled(channel)) {
          flag = true;
        }
        obj3 = channel(7918);
      }
    }
  }
  let stringResult;
  let flag2 = flag;
  if (activityAction !== channel(11177).ActivityAction.LEAVE) {
    const tmp14 = application instanceof _callSuper ? application.embeddedActivityConfig : application.embedded_activity_config;
    importDefault(8183);
    channel(477);
    if (null != tmp14) {
      const supported_platforms = tmp14.supported_platforms;
      if (!supported_platforms.includes(tmp20)) {
        const intl = channel(1212).intl;
        stringResult = intl.string(channel(1212).t.z2YTgJ);
        flag2 = false;
      }
    }
    flag2 = flag;
    if (tmp23) {
      const intl2 = channel(1212).intl;
      stringResult = intl2.string(channel(1212).t.ddSR3v);
      flag2 = true;
    }
    tmp23 = null != channel && channel.isThread();
  }
  let tmp26 = flag2;
  if (flag2) {
    tmp26 = null == stringResult;
  }
  if (tmp26) {
    const intl3 = channel(1212).intl;
    stringResult = intl3.string(channel(1212).t.f41E1g);
  }
  obj = { disabled: flag2, reason: stringResult };
  return obj;
};
