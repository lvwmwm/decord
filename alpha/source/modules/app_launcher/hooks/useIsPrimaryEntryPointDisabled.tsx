// Module ID: 11829
// Function ID: 11830
// Name: useIsPrimaryEntryPointDisabled
// Dependencies: [2022, 558, 576, 10876, 11733, 8512, 11716, 1382, 1126, 2]

// Module 11829 (useIsPrimaryEntryPointDisabled)
import react from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import ActivitiesInTextUtils from "ActivitiesInTextUtils" /* 8512 */;
import getEmbeddedActivityLaunchability from "getEmbeddedActivityLaunchability" /* 10876 */;
import getPlatformDefault from "getPlatform" /* 11716 */;
import useActivityShelfItem from "useActivityShelfItem" /* 11733 */;
import ApplicationRecord from "ApplicationRecord" /* 2022 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useIsPrimaryEntryPointDisabled(arg0) {
  let activityAction;
  let application;
  let context;
  const obj = react;
  const cResult = obj.c(13);
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
          const tmpResult4 = ActivitiesInTextUtils;
          if (!tmpResult4.isActivitiesInTextEnabled(channel)) {
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
          flag = embeddedActivityLaunchability !== tmp(10876).EmbeddedActivityLaunchability.CAN_LAUNCH;
        } else {
          flag = false;
          const tmpResult5 = ActivitiesInTextUtils;
          if (!tmpResult5.isActivitiesInTextEnabled(channel)) {
            flag = true;
          }
        }
      }
    }
  }
  let tmp10 = flag;
  let tmp11;
  if (activityAction !== useActivityShelfItem.ActivityAction.LEAVE) {
    let tmp17;
    let flag2;
    const tmp12 = application instanceof ApplicationRecord ? application.embeddedActivityConfig : application.embedded_activity_config;
    if (cResult[0] === channel) {
      if (cResult[1] === flag) {
        if (cResult[2] === tmp12) {
          if (cResult[3] === embeddedActivityLaunchability) {
            tmp11 = cResult[4];
            tmp10 = cResult[5];
          }
        }
      }
    }
    const tmp14 = getPlatformDefault;
    const tmpResult6 = PlatformUtils;
    const tmp14Result = tmp14(tmpResult6.getOS());
    if (flag) {
      if (embeddedActivityLaunchability === getEmbeddedActivityLaunchability.EmbeddedActivityLaunchability.CHANNEL_CONTENT_GATED) {
        let tmp24;
        const _Symbol3 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult = intl3.string(intl5.t.pKLV22);
          cResult[6] = stringResult;
          tmp24 = stringResult;
        } else {
          tmp24 = cResult[6];
        }
        tmp17 = tmp24;
        flag2 = flag;
      }
      cResult[0] = channel;
      cResult[1] = flag2;
      cResult[2] = tmp12;
      cResult[3] = embeddedActivityLaunchability;
      cResult[4] = tmp17;
      cResult[5] = flag2;
      tmp10 = flag2;
      tmp11 = tmp17;
    }
    if (null != tmp12) {
      const supported_platforms = tmp12.supported_platforms;
      if (!supported_platforms.includes(tmp14Result)) {
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult1 = intl.string(intl5.t.z2YTgJ);
          cResult[7] = stringResult1;
          tmp17 = stringResult1;
        } else {
          tmp17 = cResult[7];
        }
        flag2 = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    flag2 = flag;
    if (isThreadResult) {
      let tmp21;
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = tmp(1126).intl;
        const stringResult2 = intl2.string(intl5.t.ddSR3v);
        cResult[8] = stringResult2;
        tmp21 = stringResult2;
      } else {
        tmp21 = cResult[8];
      }
      flag2 = true;
      tmp17 = tmp21;
    }
  }
  const tmp26 = tmp10 && null == tmp11;
  if (tmp26) {
    let tmp28;
    const _Symbol4 = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = tmp(1126).intl;
      const stringResult3 = intl4.string(intl5.t.f41E1g);
      cResult[9] = stringResult3;
      tmp28 = stringResult3;
    } else {
      tmp28 = cResult[9];
    }
    tmp11 = tmp28;
  }
  if (cResult[10] === tmp10) {
    let tmp30;
    if (cResult[11] === tmp11) {
      tmp30 = cResult[12];
    }
    return tmp30;
  }
  const obj2 = { disabled: tmp10, reason: tmp11 };
  cResult[10] = tmp10;
  cResult[11] = tmp11;
  cResult[12] = obj2;
  tmp30 = obj2;
}) : (function useIsPrimaryEntryPointDisabled(arg0) {
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
          flag = embeddedActivityLaunchability !== tmp2(10876).EmbeddedActivityLaunchability.CAN_LAUNCH;
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
        const intl3 = tmp2(1126).intl;
        reason = intl3.string(tmp2(1126).t.pKLV22);
        disabled = flag;
      }
    }
    if (null != tmp10) {
      const supported_platforms = tmp10.supported_platforms;
      if (!supported_platforms.includes(tmp12Result)) {
        const intl = tmp2(1126).intl;
        reason = intl.string(tmp2(1126).t.z2YTgJ);
        disabled = false;
      }
    }
    let isThreadResult;
    if (channel != null) {
      isThreadResult = channel.isThread();
    }
    disabled = flag;
    if (isThreadResult) {
      const intl2 = tmp2(1126).intl;
      reason = intl2.string(tmp2(1126).t.ddSR3v);
      disabled = true;
    }
  }
  const tmp15 = disabled && null == reason;
  if (tmp15) {
    const intl4 = tmp2(1126).intl;
    reason = intl4.string(tmp2(1126).t.f41E1g);
  }
  return { disabled, reason };
});
const result = size.fileFinishedImporting("modules/app_launcher/hooks/useIsPrimaryEntryPointDisabled.tsx");

export default tmp2;
