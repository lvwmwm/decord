// Module ID: 16568
// Function ID: 16569
// Name: ChannelBadge
// Dependencies: [19, 17, 2109, 21, 4756, 563, 16569, 12550, 4752, 1881, 2]
// Exports: default

// Module 16568 (ChannelBadge)
import useStateFromStores from "useStateFromStores" /* 563 */;
import NewBadgeDefault from "NewBadge" /* 12550 */;
import MentionsBadgeDefault from "MentionsBadge" /* 16569 */;
import noop from "module_19" /* 19 */;
import LocaleStore from "LocaleStore" /* 2109 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4756);
let closure_6 = createStyles.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = closure_6();
  const items = [LocaleStore];
  const stateFromStores = useStateFromStores.useStateFromStores(items, () => locale.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      const obj2 = { style: tmp.channelInfoContainer, children: null };
      const obj3 = { mentionsCount: mentionCount, isMentionLowImportance };
      obj2.children = jsx(MentionsBadgeDefault, { mentionsCount: mentionCount, isMentionLowImportance });
      let tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
    }
    return tmp5;
  }
  if (isNewChannel) {
    const obj4 = { style: tmp.channelInfoContainer, children: jsx(NewBadgeDefault, {}) };
    tmp5 = <View style={tmp.channelInfoContainer}>{jsx(NewBadgeDefault, {})}</View>;
  } else {
    tmp5 = null;
    if (null != muted) {
      tmp5 = null;
      if (!muted) {
        tmp5 = null;
        if (null != postsWithUnreadsCount) {
          tmp5 = null;
          if (postsWithUnreadsCount > 0) {
            const obj5 = { style: tmp.channelInfoContainer, children: null };
            const obj6 = { variant: "text-xs/semibold", color: "text-muted", children: tmp2(1881).humanizeValue(postsWithUnreadsCount, stateFromStores) };
            obj5.children = jsx(tmp2(4752).Text, { variant: "text-xs/semibold", color: "text-muted", children: tmp2(1881).humanizeValue(postsWithUnreadsCount, stateFromStores) });
            tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
            const tmp2Result = tmp2(1881);
          }
        }
      }
    }
  }
};
