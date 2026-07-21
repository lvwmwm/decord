// Module ID: 14848
// Function ID: 111913
// Name: ConnectedUserLimit
// Dependencies: [0, 0, 0, 4294967295, 0]
// Exports: ConnectedUserLimit

// Module 14848 (ConnectedUserLimit)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/guild_sidebar/native/ConnectedUserLimit.tsx");

export const ConnectedUserLimit = function ConnectedUserLimit(userCount) {
  let channel;
  let video;
  ({ channel, video } = userCount);
  const limit = importDefault(dependencyMap[2])(channel).limit;
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
  return jsx(importDefault(dependencyMap[3]), obj);
};
