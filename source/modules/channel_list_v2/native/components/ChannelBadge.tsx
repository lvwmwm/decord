// Module ID: 11391
// Function ID: 88561
// Name: renderChannelBadge
// Dependencies: [31, 33, 1273, 11390, 4126, 1212, 1827, 2]
// Exports: renderChannelBadge

// Module 11391 (renderChannelBadge)
import "result";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/channel_list_v2/native/components/ChannelBadge.tsx");

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
      let tmp2 = jsx(require(1273) /* Button */.Badge, { value: num, isMentionLowImportance: tmp });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(require(11390) /* renderChannelBadge */.NewBadge, {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        obj = { variant: "text-xs/bold", color: "text-brand" };
        const intl = require(1212) /* getSystemLocale */.intl;
        const obj1 = { count: require(1827) /* shortenAndLocalizeNumber */.humanizeValue(newPostCount, newChannel.locale) };
        obj.children = intl.format(require(1212) /* getSystemLocale */.t.GkAbqY, obj1);
        tmp2 = jsx(require(4126) /* Text */.Text, { variant: "text-xs/bold", color: "text-brand" });
        const obj5 = require(1827) /* shortenAndLocalizeNumber */;
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        const obj2 = { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount };
        tmp2 = jsx(require(4126) /* Text */.Text, { variant: "text-xs/bold", color: "text-muted", children: postsWithUnreadsCount });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        obj = { value: eventsMentionCount, eventsMentionBadge: true };
        tmp2 = jsx(require(1273) /* Button */.Badge, { value: eventsMentionCount, eventsMentionBadge: true });
      }
    }
  }
};
