// Module ID: 11373
// Function ID: 88462
// Name: renderChannelBadge
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0]
// Exports: renderChannelBadge

// Module 11373 (renderChannelBadge)
import "result";
import { jsx } from "result";
import result from "result";

result = result.fileFinishedImporting("modules/channel_list_v2/native/components/ChannelBadge.tsx");

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
        obj = { INTEGRATION_CREATE: null, ConstraintReasonCode: "76e12fa5305b436abd63e2faeb40e327" };
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
