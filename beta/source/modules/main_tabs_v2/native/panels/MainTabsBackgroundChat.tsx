// Module ID: 17531
// Function ID: 17532
// Name: MainTabsBackgroundChat
// Dependencies: [19, 21, 5092, 17529, 5105, 1501, 2]
// Exports: BackgroundChatHost, BackgroundChatPortal, useIsBackgroundChatInGuilds

// Module 17531 (MainTabsBackgroundChat)
import Fragment from "Fragment" /* 21 */;
import Link from "Link" /* 1501 */;
import useChatLayoutDefault from "useChatLayout" /* 5092 */;
import Portal2 from "Portal" /* 5105 */;
import useChannelScreensFromNavigation from "useChannelScreensFromNavigation" /* 17529 */;
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
    isChatLockedOpen = type !== tmp(17529).ChannelScreenType.DEFAULT;
  }
  let tmp7 = children;
  if (isChatLockedOpen) {
    const Portal = tmp(5105).Portal;
    const Provider = tmp(1501).NavigationContext.Provider;
    tmp7 = <Portal hostName={c5}>{null}</Portal>;
  }
  return tmp7;
}
