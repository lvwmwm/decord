// Module ID: 11625
// Function ID: 11626
// Name: useIsPrimaryEntryPointDisabled
// Dependencies: [2003, 4469, 1085, 504, 8800, 11539, 8789, 8713, 1364, 1115, 2]
// Exports: default

// Module 11625 (useIsPrimaryEntryPointDisabled)
import Constants from "Constants" /* 1085 */;
import getPlatformDefault from "getPlatform" /* 8713 */;
import ApplicationRecord from "ApplicationRecord" /* 2003 */;
import PermissionStore from "PermissionStore" /* 4469 */;
import size from "module_2" /* 2 */;

const Permissions = Constants.Permissions;
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  let activityAction;
  let application;
  let context;
  ({ context, application, activityAction } = arg0);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const items = [PermissionStore];
  const obj = channel(504);
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel));
  let id;
  const useEmbeddedActivityLaunchability = channel(8800).useEmbeddedActivityLaunchability;
  channel(8800);
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(11539).ActivityAction.LEAVE !== activityAction) {
    if (channel(11539).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== channel(8800).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          flag = false;
          const tmp2Result = channel(8789);
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    } else {
      flag = false;
      if (channel(11539).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          flag = false;
          const tmp2Result3 = channel(8789);
          if (!tmp2Result3.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    }
  }
  let disabled = flag;
  let reason;
  if (activityAction !== channel(11539).ActivityAction.LEAVE) {
    const tmp11 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    getPlatformDefault;
    channel(1364);
    if (null != tmp11) {
      const supported_platforms = tmp11.supported_platforms;
      if (!supported_platforms.includes(tmp15)) {
        const intl = tmp2(1115).intl;
        reason = intl.string(tmp2(1115).t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = tmp2(1115).intl;
      reason = intl2.string(tmp2(1115).t.ddSR3v);
      disabled = true;
    }
  }
  const tmp17 = disabled && null == reason;
  if (tmp17) {
    const intl3 = tmp2(1115).intl;
    reason = intl3.string(tmp2(1115).t.f41E1g);
  }
  return { disabled, reason };
};
