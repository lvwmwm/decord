// Module ID: 18340
// Function ID: 18341
// Name: MainTabsBackgroundChat
// Dependencies: [19, 21, 5327, 18339, 5340, 1500, 2]
// Exports: BackgroundChatHost, BackgroundChatPortal, useIsBackgroundChatInGuilds

// Module 18340 (MainTabsBackgroundChat)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1500 */;
import useChatLayoutDefault from "useChatLayout" /* 5327 */;
import Portal2 from "Portal" /* 5340 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 18339 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let c5 = "main-tabs-background-chat";
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/panels/MainTabsBackgroundChat.tsx");

export function useIsBackgroundChatInGuilds(type) {
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (isChatLockedOpen) {
    type = undefined;
    if (type != null) {
      type = type.type;
    }
    isChatLockedOpen = type !== useChannelScreensFromNavigation.ChannelScreenType.DEFAULT;
  }
  return isChatLockedOpen;
}
export function BackgroundChatHost() {
  return jsx(Portal2.PortalHost, { name });
}
export function BackgroundChatPortal(arg0) {
  let children;
  let screen;
  ({ screen, children } = arg0);
  const context = react.useContext(Link.NavigationContext);
  const context1 = react.useContext(Link.NavigationRouteContext);
  let isChatLockedOpen = useChatLayoutDefault().isChatLockedOpen;
  if (isChatLockedOpen) {
    let type;
    if (screen != null) {
      type = screen.type;
    }
    isChatLockedOpen = type !== tmp(18339).ChannelScreenType.DEFAULT;
  }
  let tmp7 = children;
  if (isChatLockedOpen) {
    const Portal = tmp(5340).Portal;
    const Provider = tmp(1500).NavigationContext.Provider;
    tmp7 = <Portal hostName={c5}>{null}</Portal>;
  }
  return tmp7;
}
