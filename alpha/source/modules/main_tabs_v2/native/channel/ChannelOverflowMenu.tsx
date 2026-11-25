// Module ID: 14014
// Function ID: 14015
// Name: ChannelOverflowMenu
// Dependencies: [19, 1071, 21, 7571, 9025, 14015, 7711, 1112, 14016, 2]
// Exports: default, useHasChannelOverflowMenu

// Module 14014 (ChannelOverflowMenu)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import intl2 from "intl" /* 1112 */;
import ConjureUtils from "ConjureUtils" /* 7571 */;
import MoreHorizontalIcon from "MoreHorizontalIcon" /* 7711 */;
import ContextMenu from "ContextMenu" /* 9025 */;
import IconActionButtonDefault from "IconActionButton" /* 14015 */;
import useAppChannelOverflowMenuItemsDefault from "useAppChannelOverflowMenuItems" /* 14016 */;
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
