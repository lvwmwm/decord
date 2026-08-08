// Module ID: 15344
// Function ID: 15345
// Name: ChannelBadge
// Dependencies: [19, 17, 1975, 21, 4303, 647, 15345, 11667, 4299, 1879, 2]
// Exports: default

// Module 15344 (ChannelBadge)
import "noop";
import { View } from "get ActivityIndicator";
import _getSystemLocale from "_getSystemLocale";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const result = require("_getSystemLocale").fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  let isMentionLowImportance;
  let isNewChannel;
  let mentionCount;
  let muted;
  let postsWithUnreadsCount;
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = callback();
  let obj = require(647) /* defaultAreStatesEqual */;
  const items = [_getSystemLocale];
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      obj = { style: null, children: null };
      obj[0] = tmp.channelInfoContainer;
      obj = { mentionsCount: null, isMentionLowImportance: null };
      obj[0] = mentionCount;
      obj[1] = isMentionLowImportance;
      obj[1] = jsx(importDefault(15345), { mentionsCount: null, isMentionLowImportance: null });
      let tmp5 = <View mentionsCount={null} isMentionLowImportance={null} />;
    }
    return tmp5;
  }
  if (isNewChannel) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.channelInfoContainer;
    obj1[1] = jsx(importDefault(11667), {});
    tmp5 = <View style={null}>{null}</View>;
  } else {
    tmp5 = null;
    if (null != muted) {
      tmp5 = null;
      if (!muted) {
        tmp5 = null;
        if (null != postsWithUnreadsCount) {
          tmp5 = null;
          if (postsWithUnreadsCount > 0) {
            const obj2 = { style: null, children: null };
            obj2[0] = tmp.channelInfoContainer;
            const obj3 = { variant: "text-xs/semibold", color: "text-muted", children: null };
            obj3[2] = tmp2(1879).humanizeValue(postsWithUnreadsCount, stateFromStores);
            obj2[1] = jsx(tmp2(4299).Text, { variant: "text-xs/semibold", color: "text-muted", children: null });
            tmp5 = <View style={null}>{null}</View>;
            const tmp2Result = tmp2(1879);
          }
        }
      }
    }
  }
};
