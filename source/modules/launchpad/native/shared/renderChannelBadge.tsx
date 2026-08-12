// Module ID: 16133
// Function ID: 16134
// Name: renderChannelBadge
// Dependencies: [19, 21, 1297, 11728, 4340, 1236, 1898, 2]
// Exports: default

// Module 16133 (renderChannelBadge)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("Button").fileFinishedImporting("modules/launchpad/native/shared/renderChannelBadge.tsx");

export default function renderChannelBadge(newChannel) {
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
      let obj = { value: null, isMentionLowImportance: null };
      obj[0] = num;
      obj[1] = tmp;
      let tmp2 = jsx(require(1297) /* Button */.Badge, { value: null, isMentionLowImportance: null });
    }
    return tmp2;
  }
  if (flag) {
    tmp2 = jsx(importDefault(11728), {});
  } else {
    if (null != newPostCount) {
      if (newPostCount > 0) {
        obj = { variant: "text-xs/bold", color: "text-brand", children: null };
        const intl = require(1236) /* getSystemLocale */.intl;
        const obj1 = { count: null };
        obj1[0] = require(1898) /* shortenAndLocalizeNumber */.humanizeValue(newPostCount, newChannel.locale);
        obj[2] = intl.format(require(1236) /* getSystemLocale */.t.GkAbqY, obj1);
        tmp2 = jsx(require(4340) /* Text */.Text, { variant: "text-xs/bold", color: "text-brand", children: null });
        const obj5 = require(1898) /* shortenAndLocalizeNumber */;
      }
    }
    if (null != postsWithUnreadsCount) {
      if (postsWithUnreadsCount > 0) {
        const obj2 = { variant: "text-xs/bold", color: "text-muted", children: null };
        obj2[2] = postsWithUnreadsCount;
        tmp2 = jsx(require(4340) /* Text */.Text, { variant: "text-xs/bold", color: "text-muted", children: null });
      }
    }
    tmp2 = null;
    if (null != eventsMentionCount) {
      tmp2 = null;
      if (eventsMentionCount > 0) {
        obj = { value: null, eventsMentionBadge: true };
        obj[0] = eventsMentionCount;
        tmp2 = jsx(require(1297) /* Button */.Badge, { value: null, eventsMentionBadge: true });
      }
    }
  }
};
