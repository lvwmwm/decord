// Module ID: 11777
// Function ID: 11778
// Name: useShowConnectedUserLimit
// Dependencies: [1074, 9103, 2]
// Exports: default, useConnectedUserLimit, useConnectedUserLimitFormatted

// Module 11777 (useShowConnectedUserLimit)
import Constants from "Constants" /* 1074 */;
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9103 */;
import size from "module_2" /* 2 */;

let closure_2 = Constants.MAX_STAGE_VOICE_USER_LIMIT;
const result = size.fileFinishedImporting("modules/guild_sidebar/useShowConnectedUserLimit.tsx");

export default function useShowConnectedUserLimit(channel) {
  let considerMaxStageVoiceUserLimit;
  let locked;
  let num2;
  let selected;
  let video;
  ({ channel, video, considerMaxStageVoiceUserLimit } = { channel: channel.channel, video: channel.video });
  ({ locked, selected } = channel);
  if (considerMaxStageVoiceUserLimit === undefined) {
    considerMaxStageVoiceUserLimit = true;
  }
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let tmp = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp = bound;
  }
  if (!considerMaxStageVoiceUserLimit) {
    num2 = tmp;
  } else {
    num2 = 0;
  }
  return num2 > 0 && !locked && !selected;
};
export const useConnectedUserLimit = function useConnectedUserLimit(arg0) {
  let channel;
  let considerMaxStageVoiceUserLimit;
  let num2;
  let video;
  ({ channel, video, considerMaxStageVoiceUserLimit } = arg0);
  if (considerMaxStageVoiceUserLimit === undefined) {
    considerMaxStageVoiceUserLimit = true;
  }
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let tmp = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp = bound;
  }
  if (!considerMaxStageVoiceUserLimit) {
    num2 = tmp;
  } else {
    num2 = 0;
  }
  return num2;
};
export const useConnectedUserLimitFormatted = function useConnectedUserLimitFormatted(channel) {
  let considerMaxStageVoiceUserLimit;
  let num2;
  let video;
  const userCount = channel.userCount;
  ({ channel, video, considerMaxStageVoiceUserLimit } = { channel: channel.channel, video: channel.video });
  if (considerMaxStageVoiceUserLimit === undefined) {
    considerMaxStageVoiceUserLimit = true;
  }
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let tmp = num;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp = bound;
  }
  if (!considerMaxStageVoiceUserLimit) {
    num2 = tmp;
  } else {
    num2 = 0;
  }
  let tmp5 = null;
  if (num2 > 0) {
    let combined2;
    if (null != userCount) {
      let combined;
      let combined1;
      if (userCount >= 1000) {
        const _Math3 = Math;
        let str7 = "";
        const rounded = Math.floor(userCount / 1000);
        if (userCount % 1000 !== 0) {
          str7 = "+";
        }
        const _HermesInternal2 = HermesInternal;
        combined = "" + rounded + "k" + str7;
      } else {
        const toFixedResult = userCount.toFixed(0);
        combined = toFixedResult.padStart(2, "0");
      }
      if (num2 >= 1000) {
        const _Math4 = Math;
        let str11 = "";
        const rounded1 = Math.floor(num2 / 1000);
        if (num2 % 1000 !== 0) {
          str11 = "+";
        }
        const _HermesInternal3 = HermesInternal;
        combined1 = "" + rounded1 + "k" + str11;
      } else {
        const toFixedResult1 = num2.toFixed(0);
        combined1 = toFixedResult1.padStart(2, "0");
      }
      const _HermesInternal4 = HermesInternal;
      combined2 = "" + combined + "/" + combined1;
    } else if (num2 >= 1000) {
      const _Math2 = Math;
      let str3 = "";
      const rounded2 = Math.floor(num2 / 1000);
      if (num2 % 1000 !== 0) {
        str3 = "+";
      }
      const _HermesInternal = HermesInternal;
      combined2 = "" + rounded2 + "k" + str3;
    } else {
      const toFixedResult2 = num2.toFixed(0);
      combined2 = toFixedResult2.padStart(2, "0");
    }
    tmp5 = combined2;
  }
  return tmp5;
};
