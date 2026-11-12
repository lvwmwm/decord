// Module ID: 18662
// Function ID: 18663
// Name: ChannelBadge
// Dependencies: [19, 17, 2186, 21, 5170, 563, 18663, 14110, 5783, 2024, 2]
// Exports: default

// Module 18662 (ChannelBadge)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import useStateFromStores from "useStateFromStores" /* 563 */;
import NumberUtils from "NumberUtils" /* 2024 */;
import NewBadgeDefault from "NewBadge" /* 14110 */;
import react from "react" /* 19 */;
import LocaleStore from "LocaleStore" /* 2186 */;
import createStyles from "createStyles" /* 5170 */;
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
            ({ variant: "body-xs/semibold", color: "text-muted", children: tmp2Result.humanizeValue(postsWithUnreadsCount, stateFromStores) });
            const Text = tmp2(5783).Text;
            tmp5 = <View style={tmp.channelInfoContainer}>{null}</View>;
            tmp2Result = NumberUtils;
          }
        }
      }
    }
  }
};
