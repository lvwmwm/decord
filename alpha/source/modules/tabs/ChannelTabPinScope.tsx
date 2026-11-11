// Module ID: 10210
// Function ID: 10211
// Name: ChannelTabPinScope
// Dependencies: [1072, 2]
// Exports: getPinScopeForLocation, isLocationInPinScope, isSamePinScope, isSameTabLocation, wouldNavigationLeavePinnedTab

// Module 10210 (ChannelTabPinScope)
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const FRIENDS = Constants.Routes.FRIENDS;
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
export function getPinScopeForLocation(kind) {
  let obj;
  if ("route" === kind.kind) {
    let obj2 = null;
    if (kind.routePath === FRIENDS) {
      obj2 = { kind: "dms" };
    }
    obj = obj2;
  } else if (null != kind.guildId) {
    obj = { kind: "guild", guildId: kind.guildId };
    const obj3 = { kind: "guild", guildId: kind.guildId };
  } else {
    obj = { kind: "dms" };
  }
  return obj;
}
export function isLocationInPinScope(kind, kind2) {
  let tmp;
  if ("dms" === kind.kind) {
    let tmp3;
    if ("route" === kind2.kind) {
      tmp3 = kind2.routePath === FRIENDS;
    } else {
      tmp3 = null == kind2.guildId;
    }
    tmp = tmp3;
  } else {
    tmp = "channel" === kind2.kind && kind2.guildId === kind.guildId;
  }
  return tmp;
}
export function isSamePinScope(pinScope, scope) {
  if (null != pinScope) {
    let tmp;
    if (null != scope) {
      if ("guild" === pinScope.kind) {
        tmp = "guild" === scope.kind && pinScope.guildId === scope.guildId;
      } else {
        tmp = "dms" === scope.kind;
      }
    }
    return tmp;
  }
  tmp = null == pinScope && null == scope;
}
export function wouldNavigationLeavePinnedTab(found, kind) {
  const pinned = found.pinned;
  let tmp = !pinned;
  if (pinned) {
    let tmp2;
    if ("route" === found.kind) {
      tmp2 = "route" === kind.kind && found.routePath === kind.routePath;
    } else {
      tmp2 = "channel" === kind.kind && found.channelId === kind.channelId;
    }
    tmp = tmp2;
  }
  let tmp4 = !tmp;
  if (tmp4) {
    let tmp6 = null == found.pinScope;
    if (!tmp6) {
      let tmp7;
      const pinScope = found.pinScope;
      if ("dms" === pinScope.kind) {
        let tmp8;
        if ("route" === kind.kind) {
          tmp8 = kind.routePath === FRIENDS;
        } else {
          tmp8 = null == kind.guildId;
        }
        tmp7 = tmp8;
      } else {
        tmp7 = "channel" === kind.kind && kind.guildId === pinScope.guildId;
      }
      tmp6 = !tmp7;
    }
    tmp4 = tmp6;
  }
  return tmp4;
}
