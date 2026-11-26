// Module ID: 10277
// Function ID: 10278
// Name: ChannelTabPinScope
// Dependencies: [2]
// Exports: isSameTabLocation, wouldNavigationLeavePinnedTab

// Module 10277 (ChannelTabPinScope)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/tabs/ChannelTabPinScope.tsx");

export function isSameTabLocation(atResult, kind2) {
  let tmp;
  if ("route" === atResult.kind) {
    tmp = "route" === kind2.kind && atResult.routePath === kind2.routePath;
  } else {
    tmp = "channel" === kind2.kind && atResult.channelId === kind2.channelId;
  }
  return tmp;
}
export function wouldNavigationLeavePinnedTab(found, kind) {
  let pinned = found.pinned;
  if (pinned) {
    let tmp2;
    if ("route" === found.kind) {
      tmp2 = "route" === kind.kind && found.routePath === kind.routePath;
    } else {
      tmp2 = "channel" === kind.kind && found.channelId === kind.channelId;
    }
    pinned = !tmp2;
  }
  return pinned;
}
