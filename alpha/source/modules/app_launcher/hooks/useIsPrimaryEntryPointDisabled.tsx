// Module ID: 12296
// Function ID: 12297
// Name: useIsPrimaryEntryPointDisabled
// Dependencies: [2017, 11710, 12207, 8952, 5677, 1376, 1114, 2]
// Exports: default

// Module 12296 (useIsPrimaryEntryPointDisabled)
import PlatformUtils from "PlatformUtils" /* 1376 */;
import getPlatformDefault from "getPlatform" /* 5677 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 8952 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 11710 */;
import useActivityShelfItem from "useActivityShelfItem" /* 12207 */;
import ApplicationRecord from "ApplicationRecord" /* 2017 */;
import size from "module_2" /* 2 */;

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
  let id;
  const useEmbeddedActivityLaunchability = getEmbeddedActivityLaunchability.useEmbeddedActivityLaunchability;
  getEmbeddedActivityLaunchability;
  if (channel != null) {
    id = channel.id;
  }
  const embeddedActivityLaunchability = useEmbeddedActivityLaunchability(id);
  let flag = false;
  if (useActivityShelfItem.ActivityAction.LEAVE !== activityAction) {
    if (useActivityShelfItem.ActivityAction.START === activityAction) {
      flag = false;
      if (null != channel) {
        let isGuildVoiceResult;
        if (channel != null) {
          isGuildVoiceResult = channel.isGuildVoice();
        }
        if (isGuildVoiceResult) {
          flag = false;
          if (embeddedActivityLaunchability !== getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CAN_LAUNCH) {
            flag = true;
          }
        } else {
          flag = false;
          const tmp2Result = ActivitiesInTextUtils;
          if (!tmp2Result.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    } else {
      flag = false;
      if (useActivityShelfItem.ActivityAction.JOIN === activityAction) {
        let isGuildVoiceResult1;
        if (channel != null) {
          isGuildVoiceResult1 = channel.isGuildVoice();
        }
        if (isGuildVoiceResult1) {
          flag = embeddedActivityLaunchability !== tmp2(11710).EmbeddedActivityLaunchability.CAN_LAUNCH;
        } else {
          flag = false;
          const tmp2Result3 = ActivitiesInTextUtils;
          if (!tmp2Result3.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    }
  }
  let disabled = flag;
  let reason;
  if (activityAction !== useActivityShelfItem.ActivityAction.LEAVE) {
    const tmp10 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    const tmp12 = getPlatformDefault;
    const tmp2Result4 = PlatformUtils;
    const tmp12Result = tmp12(tmp2Result4.getOS());
    if (flag) {
      if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CHANNEL_CONTENT_GATED) {
        const intl3 = tmp2(1114).intl;
        reason = intl3.string(tmp2(1114).t.pKLV22);
        disabled = flag;
      }
    }
    if (null != tmp10) {
      const supported_platforms = tmp10.supported_platforms;
      if (!supported_platforms.includes(tmp12Result)) {
        const intl = tmp2(1114).intl;
        reason = intl.string(tmp2(1114).t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = tmp2(1114).intl;
      reason = intl2.string(tmp2(1114).t.ddSR3v);
      disabled = true;
    }
  }
  const tmp15 = disabled && null == reason;
  if (tmp15) {
    const intl4 = tmp2(1114).intl;
    reason = intl4.string(tmp2(1114).t.f41E1g);
  }
  return { disabled, reason };
};
