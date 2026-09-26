// Module ID: 12425
// Function ID: 12426
// Name: useIsPrimaryEntryPointDisabled
// Dependencies: [2002, 4427, 1085, 504, 9643, 12339, 9632, 9556, 1364, 1115, 2]
// Exports: default

// Module 12425 (useIsPrimaryEntryPointDisabled)
import getPlatformDefault from "getPlatform" /* 9556 */;
import ApplicationRecord from "ApplicationRecord" /* 2002 */;
import PermissionStore from "PermissionStore" /* 4427 */;

const require = fn;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default function useIsPrimaryEntryPointDisabled(arg0) {
  ({ context, application, activityAction } = arg0);
  let channel;
  if ("channel" === context.type) {
    channel = context.channel;
  }
  const items = [PermissionStore];
  const stateFromStores = channel(504).useStateFromStores(items, () => PermissionStore.can(Permissions.USE_EMBEDDED_ACTIVITIES, channel));
  const obj = channel(504);
  let id;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = channel(9643).useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (channel(12339).ActivityAction.LEAVE !== activityAction) {
    if (tmp2(12339).ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== tmp2(9643).EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          flag = false;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result = tmp2(9632);
        }
      }
    } else {
      flag = false;
      if (tmp2(12339).ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = !stateFromStores;
        } else {
          flag = false;
          if (!tmp2Result3.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
          tmp2Result3 = tmp2(9632);
        }
      }
    }
  }
  let disabled = flag;
  let reason;
  if (activityAction !== channel(12339).ActivityAction.LEAVE) {
    const tmp10 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    getPlatformDefault;
    tmp2(1364);
    if (null != tmp10) {
      const supported_platforms = tmp10.supported_platforms;
      if (!supported_platforms.includes(tmp14)) {
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
  let tmp16 = disabled;
  if (disabled) {
    tmp16 = null == reason;
  }
  if (tmp16) {
    const intl3 = tmp2(1115).intl;
    reason = intl3.string(tmp2(1115).t.f41E1g);
  }
  return { disabled, reason };
};
