// Module ID: 14766
// Function ID: 14767
// Name: ChannelOverflowMenu
// Dependencies: [19, 1072, 21, 7559, 10053, 14767, 9906, 1113, 14768, 2]
// Exports: default, useHasChannelOverflowMenu

// Module 14766 (ChannelOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1072 */;
import intl2 from "intl" /* 1113 */;
import ConjureUtils from "ConjureUtils" /* 7559 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 9906 */;
import ContextMenu from "ContextMenu" /* 10053 */;
import IconActionButtonDefault from "IconActionButton" /* 14767 */;
import useAppChannelOverflowMenuItemsDefault from "useAppChannelOverflowMenuItems" /* 14768 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

function ChannelOverflowMenuButton(items) {
  return jsx(ContextMenu.ContextMenu, {
    items: items.items,
    children(onPress) {
      onPress = onPress.onPress;
      const merged = Object.assign(onPress, Object.assign({ onPress: 0 }));
      IconActionButtonDefault;
      const merged1 = Object.assign(merged);
      const intl = intl2.intl;
      return <tmp2 onPress={function onPress(arg0) {
        let tmpResult;
        if (onPress != null) {
          tmpResult = tmp(arg0);
        }
        return tmpResult;
      }} noMargin IconComponent={MoreHorizontalIcon.MoreHorizontalIcon} accessibilityLabel={intl.string(intl2.t.PdRCRg)} />;
    }
  });
}
function AppChannelOverflowMenu(channel) {
  return <ChannelOverflowMenuButton items={useAppChannelOverflowMenuItemsDefault(arg0.channel)} />;
}
const ChannelTypes = Constants.ChannelTypes;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/ChannelOverflowMenu.tsx");

export default function ChannelOverflowMenu(channel) {
  channel = channel.channel;
  let tmp = null;
  if (channel.type === ChannelTypes.GUILD_APP) {
    tmp = <AppChannelOverflowMenu channel={channel} />;
  }
  return tmp;
};
export function useHasChannelOverflowMenu(channel, screenIndex) {
  let tmp = channel.type === ChannelTypes.GUILD_APP && null != channel.application_id && "channel-secondary-view-chat" !== screenIndex;
  let tmp5 = null;
  const useIsConjureChannelCandidate = ConjureUtils.useIsConjureChannelCandidate;
  ConjureUtils;
  if (tmp) {
    tmp5 = channel;
  }
  if (tmp) {
    tmp = !useIsConjureChannelCandidate(tmp5, "ChannelOverflowMenu");
  }
  return tmp;
}
