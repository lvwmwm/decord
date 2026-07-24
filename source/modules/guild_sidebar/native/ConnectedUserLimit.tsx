// Module ID: 15019
// Function ID: 114445
// Name: ConnectedUserLimit
// Dependencies: [31, 33, 8881, 15020, 2]
// Exports: ConnectedUserLimit

// Module 15019 (ConnectedUserLimit)
import "result";
import { jsx } from "jsxProd";

const result = require("useChannelVideoLimit").fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = function ConnectedUserLimit(userCount) {
  let channel;
  let video;
  ({ channel, video } = userCount);
  const limit = importDefault(8881)(channel).limit;
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
  return jsx(importDefault(15020), { users: userCount.userCount, total: tmp, videoLimit: flag });
};
