// Module ID: 18432
// Function ID: 18433
// Name: ConnectedUserLimit
// Dependencies: [19, 21, 9369, 18433, 2]
// Exports: ConnectedUserLimit

// Module 18432 (ConnectedUserLimit)
import Fragment from "Fragment" /* 21 */;
import useChannelVideoLimitDefault from "useChannelVideoLimit" /* 9369 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let tmp;
const VoiceChannelUserLimitDefault = tmp(18433);
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export function ConnectedUserLimit(userCount) {
  let channel;
  let video;
  ({ channel, video } = userCount);
  const users = userCount.userCount;
  const limit = useChannelVideoLimitDefault(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let videoLimit = false;
  let total = num;
  if (video) {
    let bound = limit;
    const tmp4 = num < 0 || limit < num;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    total = bound;
    videoLimit = tmp4;
  }
  return jsx(VoiceChannelUserLimitDefault, { users, total, videoLimit });
}
