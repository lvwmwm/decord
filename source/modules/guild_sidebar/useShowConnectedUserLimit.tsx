// Module ID: 11393
// Function ID: 88570
// Name: formatNumber
// Dependencies: [653, 8842, 2]
// Exports: default, useConnectedUserLimitFormatted

// Module 11393 (formatNumber)
import { MAX_STAGE_VOICE_USER_LIMIT as closure_2 } from "ME";

function formatNumber(toFixed) {
  let num = arg1;
  if (arg1 === undefined) {
    num = 1000;
  }
  if (toFixed >= num) {
    const _Math = Math;
    let str3 = "";
    const rounded = Math.floor(toFixed / num);
    if (toFixed % num != 0) {
      str3 = "+";
    }
    const _HermesInternal = HermesInternal;
    let combined = "" + rounded + "k" + str3;
  } else {
    combined = toFixed.toFixed(0).padStart(2, "0");
    const toFixedResult = toFixed.toFixed(0);
  }
  return combined;
}
function useConnectedUserLimit(arg0) {
  let channel;
  let considerMaxStageVoiceUserLimit;
  let video;
  ({ channel, video, considerMaxStageVoiceUserLimit } = arg0);
  if (considerMaxStageVoiceUserLimit === undefined) {
    considerMaxStageVoiceUserLimit = true;
  }
  const limit = importDefault(8842)(channel).limit;
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
    let num2 = tmp;
  } else {
    num2 = 0;
  }
  return num2;
}
const result = require("set").fileFinishedImporting("modules/guild_sidebar/useShowConnectedUserLimit.tsx");

export default function useShowConnectedUserLimit(channel) {
  let locked;
  let selected;
  ({ locked, selected } = channel);
  return useConnectedUserLimit({ channel: channel.channel, video: channel.video }) > 0 && !locked && !selected;
};
export { useConnectedUserLimit };
export const useConnectedUserLimitFormatted = function useConnectedUserLimitFormatted(channel) {
  let userCount = channel.userCount;
  let str = useConnectedUserLimit({ channel: channel.channel, video: channel.video });
  if (str <= 0) {
    return null;
  } else if (null != userCount) {
    userCount = formatNumber(str);
    const _HermesInternal = HermesInternal;
    str = "";
    let combined = concat(formatNumber(userCount), "/", userCount);
    const tmp4 = formatNumber(userCount);
  } else {
    combined = formatNumber(``);
  }
};
