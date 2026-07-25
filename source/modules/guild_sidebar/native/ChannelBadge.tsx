// Module ID: 15109
// Function ID: 115058
// Name: ChannelBadge
// Dependencies: [31, 27, 1922, 33, 4131, 624, 15110, 11386, 4127, 1827, 2]
// Exports: default

// Module 15109 (ChannelBadge)
import "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  let isMentionLowImportance;
  let isNewChannel;
  let mentionCount;
  let muted;
  let postsWithUnreadsCount;
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = callback();
  let obj = require(624) /* defaultAreStatesEqual */;
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_4.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      obj = { style: tmp.channelInfoContainer };
      obj = { mentionsCount: mentionCount, isMentionLowImportance };
      obj.children = jsx(importDefault(15110), { mentionsCount: mentionCount, isMentionLowImportance });
      let tmp3 = <View mentionsCount={mentionCount} isMentionLowImportance={isMentionLowImportance} />;
    }
    return tmp3;
  }
  if (isNewChannel) {
    const obj1 = { style: tmp.channelInfoContainer, children: jsx(importDefault(11386), {}) };
    tmp3 = <View style={tmp.channelInfoContainer}>{jsx(importDefault(11386), {})}</View>;
  } else {
    tmp3 = null;
    if (null != muted) {
      tmp3 = null;
      if (!muted) {
        tmp3 = null;
        if (null != postsWithUnreadsCount) {
          tmp3 = null;
          if (postsWithUnreadsCount > 0) {
            const obj2 = { style: tmp.channelInfoContainer };
            let obj3 = { variant: "text-xs/semibold", color: "text-muted" };
            obj3 = require(1827) /* shortenAndLocalizeNumber */;
            obj3.children = obj3.humanizeValue(postsWithUnreadsCount, stateFromStores);
            obj2.children = jsx(require(4127) /* Text */.Text, obj3);
            tmp3 = <View style={tmp.channelInfoContainer} />;
          }
        }
      }
    }
  }
};
