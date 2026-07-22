// Module ID: 11381
// Function ID: 88511
// Name: renderChannelBadge
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: renderChannelBadge

// Module 11381 (renderChannelBadge)
import "__exportStarResult1";
import { jsx } from "__exportStarResult1";

const result = require("__exportStarResult1").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelBadge.tsx");

export const renderChannelBadge = function renderChannelBadge(newChannel) {
  let eventsMentionCount;
  let newPostCount;
  let postsWithUnreadsCount;
  let flag = newChannel.newChannel;
  if (flag === undefined) {
    flag = false;
  }
  let num = newChannel.mentionCount;
  if (num === undefined) {
    num = 0;
  }
  ({ postsWithUnreadsCount, newPostCount, eventsMentionCount } = newChannel);
  if (null != num) {
    if (num > 0) {
      let obj = { value: num, isMentionLowImportance: tmp };
      let tmp2 = jsx(arg1(dependencyMap[2]).Badge, obj);
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(arg1(dependencyMap[3]).NewBadge, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        obj = { cachedAt: null, edpbxy: null };
        const intl = arg1(dependencyMap[5]).intl;
        const obj1 = { count: arg1(dependencyMap[6]).humanizeValue(newPostCount, newChannel.locale) };
        obj.children = intl.format(arg1(dependencyMap[5]).t.GkAbqY, obj1);
        tmp2 = jsx(arg1(dependencyMap[4]).Text, obj);
        const obj5 = arg1(dependencyMap[6]);
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        const obj2 = { children: postsWithUnreadsCount };
        tmp2 = jsx(arg1(dependencyMap[4]).Text, obj2);
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        obj = { value: eventsMentionCount, eventsMentionBadge: true };
        tmp2 = jsx(arg1(dependencyMap[2]).Badge, obj);
      }
    }
  }
};
