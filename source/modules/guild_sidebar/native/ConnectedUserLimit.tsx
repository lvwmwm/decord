// Module ID: 14972
// Function ID: 114124
// Name: ConnectedUserLimit
// Dependencies: [31, 33, 8842, 14973, 2]
// Exports: ConnectedUserLimit

// Module 14972 (ConnectedUserLimit)
import "result";
import { jsx } from "jsxProd";

const result = require("useChannelVideoLimit").fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = function ConnectedUserLimit(userCount) {
  let channel;
  let video;
  ({ channel, video } = userCount);
  const limit = importDefault(8842)(channel).limit;
  let num = -1;
  if (channel.userLimit > 0) {
    num = channel.userLimit;
  }
  if (video) {
    video = limit > 0;
  }
  let tmp = num;
  let flag = false;
  if (video) {
    let bound = limit;
    if (num > 0) {
      const _Math = Math;
      bound = Math.min(num, limit);
    }
    tmp = bound;
    flag = num < 0 || limit < num;
    const tmp2 = num < 0 || limit < num;
  }
  const obj = { users: userCount.userCount, total: tmp, videoLimit: flag };
  return jsx(importDefault(14973), { users: userCount.userCount, total: tmp, videoLimit: flag });
};
