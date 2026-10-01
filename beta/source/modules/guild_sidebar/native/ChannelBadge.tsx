// Module ID: 15861
// Function ID: 15862
// Name: ChannelBadge
// Dependencies: [19, 17, 2112, 21, 4836, 563, 15862, 11779, 4832, 1882, 2]
// Exports: default

// Module 15861 (ChannelBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import NumberUtils from "NumberUtils" /* 1882 */;
import NewBadgeDefault from "NewBadge" /* 11779 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2112 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles(() => ({ channelInfoContainer: { paddingStart: 4 } }));
const result = size.fileFinishedImporting("modules/guild_sidebar/native/ChannelBadge.tsx");

export default function ChannelBadge(arg0) {
  let isMentionLowImportance;
  let isNewChannel;
  let locale;
  let mentionCount;
  let muted;
  let postsWithUnreadsCount;
  let tmp2Result;
  let tmp5;
  ({ mentionCount, postsWithUnreadsCount, muted } = arg0);
  ({ isMentionLowImportance, isNewChannel } = arg0);
  const tmp = closure_6();
  const items = [LocaleStore];
  const obj = useStateFromStores;
  const stateFromStores = obj.useStateFromStores(items, () => locale.locale);
  if (null != mentionCount) {
    if (mentionCount > 0) {
      tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
    }
    return tmp5;
  }
  if (isNewChannel) {
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
            ({ variant: "text-xs/semibold", color: "text-muted", children: tmp2Result.humanizeValue(postsWithUnreadsCount, stateFromStores) });
            const Text = tmp2(4832).Text;
            tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
            tmp2Result = NumberUtils;
          }
        }
      }
    }
  }
};
