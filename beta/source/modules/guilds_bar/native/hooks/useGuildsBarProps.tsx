// Module ID: 16643
// Function ID: 16644
// Name: useGuildsBarProps
// Dependencies: [19, 5528, 4432, 7498, 7499, 14053, 5140, 2109, 2067, 14061, 4612, 5689, 16636, 16633, 21, 16644, 16658, 16659, 16662, 16667, 16693, 16696, 16697, 16698, 16700, 16701, 16702, 16704, 16706, 558, 568, 4494, 580, 1616, 15357, 15366, 15596, 14146, 504, 16708, 16709, 5205, 1482, 16711, 7351, 2]

// Module 16643 (useGuildsBarProps)
import useWindowDimensions from "useWindowDimensions" /* 1482 */;
import GuildsBarGuildFolderDefault from "GuildsBarGuildFolder" /* 16644 */;
import GuildsBarPendingGuildFolderDefault from "GuildsBarPendingGuildFolder" /* 16658 */;
import GuildsBarMessagesDefault from "GuildsBarMessages" /* 16659 */;
import GuildsBarFavoritesDefault from "GuildsBarFavorites" /* 16662 */;
import GuildsBarGuildDefault from "GuildsBarGuild" /* 16667 */;
import GuildsBarDirectMessageDefault from "GuildsBarDirectMessage" /* 16693 */;
import GuildsBarSeparatorDefault from "GuildsBarSeparator" /* 16696 */;
import GuildsBarPendingGuildDefault from "GuildsBarPendingGuild" /* 16697 */;
import GuildsBarGeoRestrictedGuildDefault from "GuildsBarGeoRestrictedGuild" /* 16698 */;
import GuildsBarFooterWrapperDefault from "GuildsBarFooterWrapper" /* 16700 */;
import noop from "module_19" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5528 */;
import LurkingStore from "LurkingStore" /* 4432 */;
import MessageRequestStore from "MessageRequestStore" /* 7498 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 7499 */;
import GeoRestrictedGuildStore from "GeoRestrictedGuildStore" /* 14053 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5140 */;
import GuildMemberStore from "GuildMemberStore" /* 2109 */;
import GuildStore from "GuildStore" /* 2067 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 14061 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4612 */;
import SortedGuildStore from "SortedGuildStore" /* 5689 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 16636 */;

const require = globalThis.__r;

require = fn;
function getItemSize(arg0) {
  ({ section, row, guildsNFolders, pendingFolderNode, itemSize } = arg0);
  if (constants.MESSAGES !== section) {
    if (tmp4.FAVORITES !== section) {
      if (tmp4.LURKING_GUILDS !== section) {
        if (tmp4.GUEST_GUILDS !== section) {
          if (tmp4.UNREAD_PRIVATE_CHANNELS === section) {
            if (row == null) {
              row = -1;
            }
            let num7 = 0;
            if (null != tmp[row]) {
              num7 = itemSize;
            }
            return num7;
          } else if (tmp4.SEPARATOR === section) {
            return 1 + 2 * tmp3;
          } else if (tmp4.PENDING_JOIN_REQUESTS === section) {
            let num4 = 0;
            if (null != row) {
              num4 = 0;
              if (null != pendingFolderNode) {
                num4 = 0;
                if (pendingFolderNode.expanded) {
                  num4 = 0;
                  if (null != pendingFolderNode.children[row]) {
                    num4 = itemSize;
                  }
                }
              }
            }
            return num4;
          } else if (null == row) {
            return 0;
          } else {
            const diff = section - tmp4.GUILDS;
            if (guildsNFolders.length >= diff) {
              if (null != tmp2[row]) {
                return itemSize;
              }
            }
            const element = guildsNFolders[diff];
            let num2 = 0;
            if (null != element) {
              num2 = 0;
              if (element.type !== GuildsNodeType.ROOT) {
                if (element.type !== tmp5.GUILD) {
                  if (element.type !== tmp5.FOLDER) {
                    num2 = itemSize;
                  } else {
                    num2 = 0;
                    if (element.expanded) {
                      num2 = 0;
                    }
                  }
                } else {
                  num2 = 0;
                }
              }
            }
            return num2;
          }
        }
      }
    }
  }
  return itemSize;
}
function renderItemJSX(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7) {
  if (constants.MESSAGES === arg0) {
    return jsx(GuildsBarMessagesDefault, {});
  } else if (tmp.FAVORITES === arg0) {
    return jsx(GuildsBarFavoritesDefault, {});
  } else if (tmp.LURKING_GUILDS === arg0) {
    let tmp40 = null;
    if (null != arg4[arg1]) {
      const obj2 = { guildId: tmp39 };
      tmp40 = jsx(GuildsBarGuildDefault, { guildId: tmp39 });
    }
    return tmp40;
  } else if (tmp.GUEST_GUILDS === arg0) {
    let tmp34 = null;
    if (null != arg5[arg1]) {
      const obj3 = { guildId: tmp33 };
      tmp34 = jsx(GuildsBarGuildDefault, { guildId: tmp33 });
    }
    return tmp34;
  } else if (tmp.UNREAD_PRIVATE_CHANNELS === arg0) {
    let tmp28 = null;
    if (null != arg3[arg1]) {
      const obj4 = { channelId: tmp27 };
      tmp28 = jsx(GuildsBarDirectMessageDefault, { channelId: tmp27 });
    }
    return tmp28;
  } else if (tmp.SEPARATOR === arg0) {
    return jsx(GuildsBarSeparatorDefault, {});
  } else if (tmp.PENDING_JOIN_REQUESTS === arg0) {
    if (null == arg7) {
      return null;
    } else {
      let tmp18 = null;
      if (null != arg7.children[arg1]) {
        tmp18 = null;
        if (tmp17.type === GuildsNodeType.GUILD) {
          const obj5 = { guildId: tmp17.id };
          tmp18 = jsx(GuildsBarPendingGuildDefault, { guildId: tmp17.id });
        }
      }
      return tmp18;
    }
  } else {
    const diff = arg0 - tmp.GUILDS;
    if (diff >= arg2.length) {
      let tmp11 = null;
      if (null != arg6[arg1]) {
        const obj6 = { restrictedGuild: tmp10 };
        tmp11 = jsx(GuildsBarGeoRestrictedGuildDefault, { restrictedGuild: tmp10 });
      }
      return tmp11;
    } else {
      const element = arg2[diff];
      let tmp3 = null;
      if (null != element) {
        tmp3 = null;
        if (element.type !== GuildsNodeType.ROOT) {
          if (element.type !== tmp2.GUILD) {
            let tmp4 = element;
            if (element.type === tmp2.FOLDER) {
              tmp4 = element.children[arg1];
            }
            let tmp5 = null;
            if (null != tmp4) {
              tmp5 = null;
              if (tmp4.type === tmp2.GUILD) {
                const obj = { guildId: tmp4.id };
                tmp5 = jsx(GuildsBarGuildDefault, { guildId: tmp4.id });
              }
            }
            tmp3 = tmp5;
          } else {
            tmp3 = null;
          }
        }
      }
      return tmp3;
    }
  }
}
function findGuildSectionIndex(guildId) {
  const fastListGuildFolders = SortedGuildStore.getFastListGuildFolders();
  let num = -1;
  let num2 = 0;
  let flag = false;
  for (const item10016 of fastListGuildFolders) {
    let element = item10016;
    num = num + 1;
    num2 = 0;
    let tmp4 = GuildsNodeType;
    if (item10016.type === GuildsNodeType.GUILD) {
      if (element.id === arg0) {
        flag = true;
        obj.return();
        break;
      }
      let tmp22 = null;
      if (flag) {
        let obj3 = { section: null, item: null };
        obj3.section = num + constants.GUILDS;
        obj3.item = num2;
        tmp22 = obj3;
      }
      return tmp22;
    }
    if (element.type === tmp4.FOLDER) {
      let children = element.children;
      for (const item10035 of children) {
        if (item10035.type === GuildsNodeType.GUILD) {
          if (tmp11.id === arg0) {
            if (!element.expanded) {
              num2 = 0;
            }
            flag = true;
            obj2.return();
            break;
          } else {
            num2 = num2 + 1;
          }
        }
        continue;
      }
    }
    if (flag) {
      obj.return();
      break;
    }
    break;
  }
}
function getAnchorIdFromIndex(arg0) {
  ({ section, item, guildsNFolders, pendingFolderNode } = arg0);
  if (constants.MESSAGES === section) {
    return constants2.MESSAGES;
  } else if (tmp5.FAVORITES === section) {
    return constants2.FAVORITES;
  } else if (tmp5.PENDING_JOIN_REQUESTS === section) {
    if (null == item) {
      return constants2.PENDING_JOIN_REQUESTS;
    } else {
      let id1;
      if (pendingFolderNode != null) {
        if (pendingFolderNode.children[item] != null) {
          id1 = tmp28.id;
        }
      }
      let combined;
      if (null != id1) {
        const _HermesInternal5 = HermesInternal;
        combined = "" + constants2.PENDING_JOIN_REQUESTS + ":" + id1;
      }
      return combined;
    }
  } else if (tmp5.LURKING_GUILDS === section) {
    if (null == item) {
      let LURKING_GUILDS = constants2.LURKING_GUILDS;
    } else {
      const _HermesInternal4 = HermesInternal;
      LURKING_GUILDS = "" + constants2.LURKING_GUILDS + ":" + tmp[item];
    }
    return LURKING_GUILDS;
  } else if (tmp5.GUEST_GUILDS === section) {
    if (null == item) {
      let GUEST_GUILDS = constants2.GUEST_GUILDS;
    } else {
      const _HermesInternal3 = HermesInternal;
      GUEST_GUILDS = "" + constants2.GUEST_GUILDS + ":" + tmp2[item];
    }
    return GUEST_GUILDS;
  } else if (tmp5.UNREAD_PRIVATE_CHANNELS === section) {
    if (null == item) {
      let UNREAD_PRIVATE_CHANNELS = constants2.UNREAD_PRIVATE_CHANNELS;
    } else {
      const _HermesInternal2 = HermesInternal;
      UNREAD_PRIVATE_CHANNELS = "" + constants2.UNREAD_PRIVATE_CHANNELS + ":" + tmp3[item];
    }
    return UNREAD_PRIVATE_CHANNELS;
  } else if (tmp5.SEPARATOR === section) {
    return constants2.SEPARATOR;
  } else {
    const GUILDS = tmp5.GUILDS;
    const diff = section - tmp5.GUILDS;
    if (null == guildsNFolders[diff]) {
      let tmp7;
      if (diff >= guildsNFolders.length) {
        if (null != item) {
          let id2;
          if (tmp4[item] != null) {
            id2 = tmp8.id;
          }
          tmp7 = id2;
        }
      }
      let id = tmp7;
    } else if (null == item) {
      id = tmp36.id;
    } else if (tmp36.children[item] != null) {
      id = tmp6.id;
    }
    let combined1;
    if (null != id) {
      const _HermesInternal = HermesInternal;
      combined1 = "" + constants2.GUILDS + ":" + id;
    }
    return combined1;
  }
}
function isAnchorIdEqual(GUILDS, id, id2) {
  let tmp = null != id2;
  if (tmp) {
    const _HermesInternal = HermesInternal;
    tmp = id === "" + GUILDS + ":" + id2;
  }
  return tmp;
}
function getAnchorIndexFromId(arg0) {
  ({ id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds } = arg0);
  if (constants2.MESSAGES === id) {
    const obj3 = { section: constants.MESSAGES };
    return obj3;
  } else if (tmp2.FAVORITES === id) {
    const obj6 = { section: constants.FAVORITES };
    return obj6;
  } else if (tmp2.PENDING_JOIN_REQUESTS === id) {
    const obj7 = { section: constants.PENDING_JOIN_REQUESTS };
    return obj7;
  } else if (tmp2.LURKING_GUILDS === id) {
    const obj9 = { section: constants.LURKING_GUILDS };
    return obj9;
  } else if (tmp2.GUEST_GUILDS === id) {
    const obj11 = { section: constants.GUEST_GUILDS };
    return obj11;
  } else if (tmp2.UNREAD_PRIVATE_CHANNELS === id) {
    const obj13 = { section: constants.UNREAD_PRIVATE_CHANNELS };
    return obj13;
  } else if (tmp2.SEPARATOR === id) {
    const obj14 = { section: constants.SEPARATOR };
    return obj14;
  } else if (id.startsWith(tmp2.LURKING_GUILDS)) {
    let num12 = 0;
    for (const item10164 of lurkingGuildsIds) {
      if (isAnchorIdEqual(constants2.LURKING_GUILDS, id, item10164)) {
        let obj15 = { section: null, item: null };
        obj15.section = constants.LURKING_GUILDS;
        obj15.item = num12;
        obj12.return();
        return obj15;
      } else {
        num12 = num12 + 1;
        continue;
      }
    }
  } else {
    if (id.startsWith(tmp2.PENDING_JOIN_REQUESTS)) {
      if (null != pendingFolderNode) {
        let num = 0;
        const children2 = pendingFolderNode.children;
        for (const item10025 of children2) {
          if (isAnchorIdEqual(constants2.PENDING_JOIN_REQUESTS, id, item10025.id)) {
            let obj = { section: null, item: null };
            obj.section = constants.PENDING_JOIN_REQUESTS;
            obj.item = num;
            obj21.return();
            return obj;
          } else {
            num = num + 1;
            continue;
          }
        }
      }
    }
    if (id.startsWith(constants2.GUEST_GUILDS)) {
      let num10 = 0;
      for (const item10146 of guestGuildIds) {
        if (isAnchorIdEqual(constants2.GUEST_GUILDS, id, item10146)) {
          let obj16 = { section: null, item: null };
          obj16.section = constants.GUEST_GUILDS;
          obj16.item = num10;
          obj10.return();
          return obj16;
        } else {
          num10 = num10 + 1;
          continue;
        }
      }
    } else {
      if (id.startsWith(tmp14.UNREAD_PRIVATE_CHANNELS)) {
        let num4 = 0;
        for (const item10057 of privateChannelIds) {
          if (isAnchorIdEqual(constants2.UNREAD_PRIVATE_CHANNELS, id, item10057)) {
            let obj17 = { section: null, item: null };
            obj17.section = constants.UNREAD_PRIVATE_CHANNELS;
            obj17.item = num4;
            obj2.return();
            return obj17;
          } else {
            num4 = num4 + 1;
            continue;
          }
        }
      }
      if (id.startsWith(constants2.GUILDS)) {
        let num6 = 0;
        let num7 = 0;
        for (const item10081 of guildsNFolders) {
          let tmp28 = item10081;
          if (isAnchorIdEqual(constants2.GUILDS, id, item10081.id)) {
            let obj18 = { section: null };
            obj18.section = num6 + constants.GUILDS;
            obj4.return();
            return obj18;
          } else {
            let children = tmp28.children;
            for (const item10095 of children) {
              if (isAnchorIdEqual(constants2.GUILDS, id, item10095.id)) {
                let obj19 = { section: null, item: null };
                obj19.section = num6 + constants.GUILDS;
                obj19.item = num7;
                obj5.return();
                obj4.return();
                return obj19;
              } else {
                num7 = num7 + 1;
                continue;
              }
            }
            num6 = num6 + 1;
            num7 = 0;
            continue;
          }
        }
        let num8 = 0;
        for (const item10125 of geoRestrictedGuilds) {
          if (isAnchorIdEqual(constants2.GUILDS, id, item10125.id)) {
            let obj20 = { section: null, item: null };
            obj20.section = num6 + constants.GUILDS;
            obj20.item = num8;
            obj8.return();
            return obj20;
          } else {
            num8 = num8 + 1;
            continue;
          }
        }
      }
    }
    tmp14 = constants2;
  }
}
const GuildsNodeType = fn(5689).GuildsNodeType;
const GuildsBarConstants = fn(16633);
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GuildsBarConstants);
const jsx = fn(21).jsx;
const constants2 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(62);
  let obj = require("c");
  importDefault = closure_18();
  const tmp4 = closure_18();
  token = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const rect = require("useSafeAreaInsets")();
  const top = rect.top;
  let obj2 = require("useToken");
  const mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  let obj3 = require("QuestHooks");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  require("useYouBarTotalHeight");
  if (cResult[0] === mobileQuestDockHeight) {
    if (cResult[1] === top) {
      if (cResult[2] === youBarTotalHeight) {
        let tmp11 = cResult[3];
        let tmp12 = cResult[4];
      }
      const effect = top.useEffect(tmp11, tmp12);
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [PrivateChannelReadStateStore, stateFromStoresArray, stateFromStoresArray1];
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        const items1 = [];
        cResult[5] = items;
        cResult[6] = C;
        cResult[7] = items1;
        let tmp18 = items1;
        let tmp17 = C;
        let tmp16 = items;
      } else {
        tmp16 = cResult[5];
        tmp17 = cResult[6];
        tmp18 = cResult[7];
      }
      stateFromStoresArray = tmp(tmp2[38]).useStateFromStoresArray(tmp16, tmp17, tmp18);
      const _Symbol2 = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [mobileQuestDockHeight];
        class V {
          constructor() {
            return closure_4.isConnected();
          }
        }
        cResult[8] = items2;
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        let tmp24 = V;
        let tmp23 = items2;
      } else {
        tmp23 = cResult[8];
        tmp24 = cResult[9];
      }
      const tmpResult = tmp(tmp2[38]);
      const stateFromStores = tmp(tmp2[38]).useStateFromStores(tmp23, tmp24);
      const _Symbol3 = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items3 = [stateFromStores1];
        class V {
          constructor() {
            return closure_4.isConnected();
          }
        }
        cResult[10] = items3;
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        let tmp28 = tmp30;
        let tmp27 = items3;
      } else {
        tmp27 = cResult[10];
        tmp28 = cResult[11];
      }
      const tmpResult8 = tmp(tmp2[38]);
      stateFromStoresArray1 = tmp(tmp2[38]).useStateFromStoresArray(tmp27, tmp28);
      const _Symbol4 = Symbol;
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [youBarTotalHeight];
        class V {
          constructor() {
            return closure_4.isConnected();
          }
        }
        cResult[12] = tmp35;
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        let tmp33 = items4;
        let tmp32 = tmp35;
      } else {
        tmp32 = cResult[12];
        tmp33 = cResult[13];
      }
      const tmpResult9 = tmp(tmp2[38]);
      stateFromStores1 = tmp(tmp2[38]).useStateFromStores(tmp33, tmp32);
      const _Symbol5 = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        const items5 = [pendingFolderNode, ];
        class V {
          constructor() {
            return closure_4.isConnected();
          }
        }
        items5[1] = guildsNFolders;
        class B {
          constructor() {
            guildIds = pendingFolderNode.getGuildIds();
            return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
          }
        }
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        cResult[15] = B;
        let tmp38 = B;
        let tmp37 = items5;
      } else {
        tmp37 = cResult[14];
        tmp38 = cResult[15];
      }
      const tmpResult10 = tmp(tmp2[38]);
      const stateFromStoresArray2 = tmp(tmp2[38]).useStateFromStoresArray(tmp37, tmp38);
      const _Symbol6 = Symbol;
      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
        const items6 = [SortedGuildStore];
        class Y {
          constructor() {
            obj = { guildsNFolders: closure_1_14.getFastListGuildFolders(), version: closure_1_14.getGuildsTree().version };
            return obj;
          }
        }
        const items7 = [];
        class B {
          constructor() {
            guildIds = pendingFolderNode.getGuildIds();
            return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
          }
        }
        cResult[16] = items6;
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        cResult[17] = Y;
        cResult[18] = items7;
        let tmp43 = items7;
        let tmp42 = Y;
        let tmp41 = items6;
      } else {
        tmp41 = cResult[16];
        tmp42 = cResult[17];
        tmp43 = cResult[18];
      }
      const tmpResult12 = tmp(tmp2[38]);
      const stateFromStores2 = tmpResult12.useStateFromStores(tmp41, tmp42, tmp43, tmp5(tmp2[39]));
      guildsNFolders = stateFromStores2.guildsNFolders;
      const version = stateFromStores2.version;
      const tmp50 = tmp5(tmp2[40])();
      pendingFolderNode = tmp50.pendingFolderNode;
      const _Symbol7 = Symbol;
      const expanded = tmp50.expanded;
      if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
        const items8 = [stateFromStoresArray2];
        class Y {
          constructor() {
            obj = { guildsNFolders: closure_1_14.getFastListGuildFolders(), version: closure_1_14.getGuildsTree().version };
            return obj;
          }
        }
        class B {
          constructor() {
            guildIds = pendingFolderNode.getGuildIds();
            return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
          }
        }
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        let tmp52 = tmp54;
        let tmp51 = items8;
      } else {
        tmp51 = cResult[19];
        tmp52 = cResult[20];
      }
      const tmpResult11 = tmp(tmp2[38]);
      const stateFromStores3 = tmp(tmp2[38]).useStateFromStores(tmp51, tmp52);
      const tmpResult13 = tmp(tmp2[38]);
      const tmp56 = !tmp(tmp2[41]).useIsScreenReaderEnabled();
      let result = 3 * token;
      if (youBarTotalHeight > 0) {
        let diff = youBarTotalHeight - 16;
      } else {
        diff = rect.bottom + 3 * token;
      }
      if (cResult[21] === result) {
        if (cResult[22] === diff) {
          let tmp59 = cResult[23];
        }
        const sum = mobileQuestDockHeight + 2 * token + tmp10;
        class Y {
          constructor() {
            obj = { guildsNFolders: closure_1_14.getFastListGuildFolders(), version: closure_1_14.getGuildsTree().version };
            return obj;
          }
        }
        class B {
          constructor() {
            guildIds = pendingFolderNode.getGuildIds();
            return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
          }
        }
        if (cResult[25] === top) {
          if (cResult[26] === tmp56) {
            if (cResult[27] === tmp59) {
              if (cResult[28] === sum) {
                let tmp63 = cResult[29];
              }
              PrivateChannelReadStateStore = tmp63;
              if (cResult[30] === arg0) {
                if (cResult[31] === tmp63.insetEnd) {
                  if (cResult[32] === tmp63.insetStart) {
                    let tmp65 = cResult[33];
                  }
                  tmp5(tmp2[43])(tmp65);
                  const _Symbol8 = Symbol;
                  class Ee {
                    constructor(arg0, arg1) {
                      if (null != arg0) {
                        tmp4 = findGuildSectionIndex;
                        num2 = 0;
                        tmp5 = findGuildSectionIndex(arg0);
                        if (null == tmp5) {
                          return;
                        } else {
                          tmp6 = closure_0;
                          current2 = closure_0.current;
                          if (current2 != null) {
                            obj = {};
                            tmp7 = obj;
                            tmp8 = tmp5;
                            merged = Object.assign(tmp5);
                            str = "visible";
                            obj.orientation = "visible";
                            tmp10 = closure_12;
                            ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = closure_12);
                            scrollToLocationResult = current2.scrollToLocation(obj);
                          }
                        }
                      } else {
                        tmp = closure_0;
                        current = closure_0.current;
                        if (current != null) {
                          tmp2 = arg1;
                          num = 0;
                          scrollToResult = current.scrollTo(0, arg1);
                        }
                      }
                      return;
                    }
                  }
                  if (tmp67 === Symbol.for("react.memo_cache_sentinel")) {
                    const guildId = SelectedGuildStore.getGuildId();
                    class Ee {
                      constructor(arg0, arg1) {
                        if (null != arg0) {
                          tmp4 = findGuildSectionIndex;
                          num2 = 0;
                          tmp5 = findGuildSectionIndex(arg0);
                          if (null == tmp5) {
                            return;
                          } else {
                            tmp6 = closure_0;
                            current2 = closure_0.current;
                            if (current2 != null) {
                              obj = {};
                              tmp7 = obj;
                              tmp8 = tmp5;
                              merged = Object.assign(tmp5);
                              str = "visible";
                              obj.orientation = "visible";
                              tmp10 = closure_12;
                              ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = closure_12);
                              scrollToLocationResult = current2.scrollToLocation(obj);
                            }
                          }
                        } else {
                          tmp = closure_0;
                          current = closure_0.current;
                          if (current != null) {
                            tmp2 = arg1;
                            num = 0;
                            scrollToResult = current.scrollTo(0, arg1);
                          }
                        }
                        return;
                      }
                    }
                    if (null != guildId) {
                      const tmp72 = findGuildSectionIndex(guildId);
                    }
                    class B {
                      constructor() {
                        guildIds = pendingFolderNode.getGuildIds();
                        return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                      }
                    }
                    cResult[34] = tmp72;
                    class C {
                      constructor() {
                        unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
                        obj = closure_0(closure_2[37]);
                        items = [, ];
                        items[0] = closure_6;
                        items[1] = closure_7;
                        return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
                      }
                    }
                  }
                  class B {
                    constructor() {
                      guildIds = pendingFolderNode.getGuildIds();
                      return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                    }
                  }
                  class C {
                    constructor() {
                      unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
                      obj = closure_0(closure_2[37]);
                      items = [, ];
                      items[0] = closure_6;
                      items[1] = closure_7;
                      return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
                    }
                  }
                }
              }
              class Ee {
                constructor(arg0, arg1) {
                  if (null != arg0) {
                    tmp4 = findGuildSectionIndex;
                    num2 = 0;
                    tmp5 = findGuildSectionIndex(arg0);
                    if (null == tmp5) {
                      return;
                    } else {
                      tmp6 = closure_0;
                      current2 = closure_0.current;
                      if (current2 != null) {
                        obj = {};
                        tmp7 = obj;
                        tmp8 = tmp5;
                        merged = Object.assign(tmp5);
                        str = "visible";
                        obj.orientation = "visible";
                        tmp10 = closure_12;
                        ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = closure_12);
                        scrollToLocationResult = current2.scrollToLocation(obj);
                      }
                    }
                  } else {
                    tmp = closure_0;
                    current = closure_0.current;
                    if (current != null) {
                      tmp2 = arg1;
                      num = 0;
                      scrollToResult = current.scrollTo(0, arg1);
                    }
                  }
                  return;
                }
              }
              class B {
                constructor() {
                  guildIds = pendingFolderNode.getGuildIds();
                  return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
                }
              }
              class C {
                constructor() {
                  unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
                  obj = closure_0(closure_2[37]);
                  items = [, ];
                  items[0] = closure_6;
                  items[1] = closure_7;
                  return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
                }
              }
              cResult[32] = tmp63.insetStart;
              cResult[33] = Ee;
              tmp65 = Ee;
            }
          }
        }
        class C {
          constructor() {
            unreadPrivateChannelIds = closure_12.getUnreadPrivateChannelIds();
            obj = closure_0(closure_2[37]);
            items = [, ];
            items[0] = closure_6;
            items[1] = closure_7;
            return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
          }
        }
        tmp64[0] = tmp56;
        tmp64[1] = tmp59;
        tmp64[2] = top;
        tmp64[3] = sum;
        tmp64[4] = tmp62.height;
        cResult[25] = top;
        cResult[26] = tmp56;
        cResult[27] = tmp59;
        cResult[28] = sum;
        cResult[29] = tmp64;
        tmp63 = tmp64;
      }
      const rect1 = { top: result, bottom: diff };
      cResult[21] = result;
      cResult[22] = diff;
      cResult[23] = rect1;
      tmp59 = rect1;
      const tmpResult14 = tmp(tmp2[41]);
    }
  }
  const fn = function _() {
    const listInsets = GuildsBarDnDStore.getState().listInsets;
    const result = listInsets.set({ start: top, end: mobileQuestDockHeight + youBarTotalHeight });
  };
  const items9 = [mobileQuestDockHeight, top, youBarTotalHeight];
  cResult[0] = mobileQuestDockHeight;
  cResult[1] = top;
  cResult[2] = youBarTotalHeight;
  cResult[3] = fn;
  cResult[4] = items9;
  tmp12 = items9;
  tmp11 = fn;
}) : ((arg0) => {
  _require = arg0;
  const tmp = isScreenReaderEnabled();
  importDefault = tmp;
  token = require("useToken").useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let rect = require("useSafeAreaInsets")();
  const top = rect.top;
  const bottom = rect.bottom;
  let obj = require("useToken");
  const mobileQuestDockHeight = require("QuestHooks").useMobileQuestDockHeight();
  let obj2 = require("QuestHooks");
  const youBarTotalHeight = require("useYouBarTotalHeight").useYouBarTotalHeight();
  let obj3 = require("useYouBarTotalHeight");
  const youBarTotalHeight1 = require("useYouBarTotalHeight").useYouBarTotalHeight(4);
  let items = [mobileQuestDockHeight, top, youBarTotalHeight];
  const effect = top.useEffect(() => {
    const listInsets = GuildsBarDnDStore.getState().listInsets;
    const result = listInsets.set({ start: top, end: mobileQuestDockHeight + youBarTotalHeight });
  }, items);
  let num = 0;
  if (require("useIsFavoritesGuildVisible")()) {
    num = 1;
  }
  const obj4 = require("useYouBarTotalHeight");
  let items1 = [stateFromStores1, youBarTotalHeight, youBarTotalHeight1];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
    const unreadPrivateChannelIds = stateFromStores1.getUnreadPrivateChannelIds();
    const items = [youBarTotalHeight, youBarTotalHeight1];
    return ref(token[37]).filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
  }, []);
  const tmp2Result = require("initialize");
  const items2 = [bottom];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => bottom.isConnected());
  const tmp2Result8 = require("initialize");
  const items3 = [num];
  const stateFromStoresArray1 = require("initialize").useStateFromStoresArray(items3, () => num.getGeoRestrictedGuilds());
  const tmp2Result9 = require("initialize");
  const items4 = [mobileQuestDockHeight];
  stateFromStores1 = require("initialize").useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
  const tmp2Result10 = require("initialize");
  const items5 = [stateFromStoresArray1, stateFromStores];
  const stateFromStoresArray2 = require("initialize").useStateFromStoresArray(items5, () => {
    const guildIds = stateFromStoresArray1.getGuildIds();
    return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
  });
  const tmp2Result11 = require("initialize");
  const items6 = [guildsNFolders];
  const stateFromStores2 = require("initialize").useStateFromStores(items6, () => ({ guildsNFolders: guildsNFolders.getFastListGuildFolders(), version: guildsNFolders.getGuildsTree().version }), [], tmp4(tmp3[39]));
  guildsNFolders = stateFromStores2.guildsNFolders;
  const tmp16 = require("useGuildsBarCreatePendingFolderNode")();
  const expanded = tmp16.expanded;
  const pendingFolderNode = tmp16.pendingFolderNode;
  const tmp2Result12 = require("initialize");
  const items7 = [stateFromStoresArray];
  const stateFromStores3 = require("initialize").useStateFromStores(items7, () => stateFromStoresArray.totalUnavailableGuilds);
  const tmp2Result13 = require("initialize");
  isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  const items8 = [isScreenReaderEnabled, token, youBarTotalHeight, bottom, top, mobileQuestDockHeight, youBarTotalHeight1];
  const memo = obj5.useMemo(() => {
    const obj = { showsVerticalScrollIndicator: !isScreenReaderEnabled, scrollIndicatorInsets: null, insetStart: null, insetEnd: null, chunkBase: null };
    const rect = { top: 3 * token, bottom: null };
    if (youBarTotalHeight > 0) {
      let diff = tmp2 - 16;
    } else {
      diff = bottom + 3 * tmp;
    }
    rect.bottom = diff;
    obj.scrollIndicatorInsets = rect;
    obj.insetStart = top;
    obj.insetEnd = mobileQuestDockHeight + 2 * token + youBarTotalHeight1;
    obj.chunkBase = useWindowDimensions.getWindowDimensions().height;
    return obj;
  }, items8);
  const items9 = [, , ];
  ({ insetStart: arr10[0], insetEnd: arr10[1] } = memo);
  items9[2] = arg0;
  const callback = obj5.useCallback((guildId, arg1) => {
    if (null != guildId) {
      const tmp5 = findGuildSectionIndex(guildId);
      if (null != tmp5) {
        const current2 = ref.current;
        if (current2 != null) {
          const obj = {};
          const merged = Object.assign(tmp5);
          obj.orientation = "visible";
          ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = memo);
          current2.scrollToLocation(obj);
        }
      }
    } else {
      const current = ref.current;
      if (current != null) {
        current.scrollTo(0, arg1);
      }
    }
  }, items9);
  require("useGuildsBarSelectedGuildScroller")(callback);
  const memo1 = obj5.useMemo(() => {
    const guildId = stateFromStoresArray2.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = findGuildSectionIndex(guildId);
    }
    if (null != tmp2) {
      const obj = { initialScrollItem: null, initialScrollSection: null };
      ({ item: obj.initialScrollItem, section: obj.initialScrollSection } = tmp2);
      return obj;
    }
  }, []);
  const items10 = [num, pendingFolderNode, stateFromStores1, stateFromStoresArray2, stateFromStoresArray, stateFromStoresArray1, stateFromStores3, stateFromStores, guildsNFolders, memo1, stateFromStores2.version, expanded, token, tmp];
  const tmp2Result14 = require("useIsScreenReaderEnabled");
  return {
    listProps: memo,
    listDataProps: top.useMemo(() => {
      const items = [1, num];
      num = 0;
      if (null != pendingFolderNode) {
        let num2 = 1;
        if (expanded) {
          num2 = tmp.children.length;
        }
        num = num2;
      }
      items[2] = num;
      items[3] = stateFromStores1.length;
      items[4] = stateFromStoresArray2.length;
      items[5] = Math.min(stateFromStoresArray.length, 10);
      items[6] = 1;
      for (const item10028 of guildsNFolders) {
        let element = item10028;
        if (item10028.type === expanded.GUILD) {
          let arr = items.push(1);
        } else if (element.type === tmp3.FOLDER) {
          let push = items.push;
          if (element.expanded) {
            let arr3 = push(element.children.length);
          } else {
            let arr10 = push(1);
          }
        }
        continue;
      }
      if (stateFromStoresArray1.length > 0) {
        items.push(arr2.length);
      }
      const items1 = [];
      if (stateFromStores3 > 0) {
        items1.push("unavailable-guilds");
      }
      let tmp13 = stateFromStores;
      if (stateFromStores) {
        tmp13 = 0 === guildsNFolders.length;
      }
      if (tmp13) {
        tmp13 = 0 === stateFromStores3;
      }
      if (tmp13) {
        items1.push("empty-nux");
      }
      items1.push("create-join-guild");
      let obj = {};
      const merged = Object.assign(memo1);
      obj.sections = items;
      obj.sectionSize = function sectionSize(arg0) {
        if (arg0 !== stateFromStores3.PENDING_JOIN_REQUESTS) {
          num = 0;
          if (arg0 >= tmp4.GUILDS) {
            let num2 = 0;
            if (null != tmp[arg0 - tmp4.GUILDS]) {
              num2 = 0;
              if (tmp6.type === expanded.FOLDER) {
                num2 = tmp3;
              }
            }
            num = num2;
          }
        } else {
          num = tmp3;
        }
        return num;
      };
      obj.itemSize = function itemSize(section, row) {
        return memo1({ section, row, guildsNFolders, pendingFolderNode, privateChannelIds, geoRestrictedGuilds, itemSize, itemMargin });
      };
      obj.footerSize = function footerSize() {
        return items1.length * closure_1 + 8;
      };
      obj.renderSection = function renderSection(arg0) {
        if (arg0 >= stateFromStores3.GUILDS) {
          let tmp5 = null;
          if (tmp[arg0 - tmp3.GUILDS].type === expanded.FOLDER) {
            ({ id: obj2.id, expanded: obj2.expanded, name: obj2.name, color: obj2.color, children: obj2.childNodes } = tmp9);
            tmp5 = memo(itemSize(token[15]), { id: null, expanded: null, name: null, color: null, childNodes: null });
            const obj3 = { id: null, expanded: null, name: null, color: null, childNodes: null };
          }
        } else {
          tmp5 = null;
          if (arg0 === tmp3.PENDING_JOIN_REQUESTS) {
            tmp5 = null;
            if (null != tmp2) {
              const obj = { id: null, expanded: null, childNodes: null };
              ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = tmp2);
              tmp5 = memo(itemSize(token[16]), obj);
            }
          }
        }
        return tmp5;
      };
      obj.renderItem = function renderItem(arg0, arg1) {
        return renderItemJSX(arg0, arg1, guildsNFolders, privateChannelIds, lurkingGuildsIds, guestGuildIds, geoRestrictedGuilds, pendingFolderNode);
      };
      obj.renderFooter = function renderFooter() {
        const obj = {
          children: items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return closure_1_19(itemSize(16701), {}, item);
            } else if ("empty-nux" === item) {
              return closure_1_19(itemSize(16702), {}, item);
            } else if ("create-join-guild" === item) {
              return closure_1_19(itemSize(16704), {}, item);
            }
          })
        };
        return jsx(GuildsBarFooterWrapperDefault, {
          children: items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return closure_1_19(itemSize(16701), {}, item);
            } else if ("empty-nux" === item) {
              return closure_1_19(itemSize(16702), {}, item);
            } else if ("create-join-guild" === item) {
              return closure_1_19(itemSize(16704), {}, item);
            }
          })
        });
      };
      obj.getRecyclerKey = function getRecyclerKey(arg0, arg1, arg2) {
        if (arg1 >= stateFromStores3.GUILDS) {
          const element = guildsNFolders[arg1 - tmp3.GUILDS];
          if (null != element) {
            if (element.type !== expanded.ROOT) {
              if (element.type === tmp10.FOLDER) {
                if (null == arg2) {
                  const _HermesInternal2 = HermesInternal;
                  return "" + element.id;
                }
              }
              const _HermesInternal = HermesInternal;
              return "" + element.id;
            }
          }
        }
      };
      obj.renderAccessory = function renderAccessory(fastList) {
        return memo(itemSize(itemMargin[28]), { fastList });
      };
      obj.getAnchorIdFromIndex = function getAnchorIdFromIndex(section, item) {
        if (null == pendingFolderNode.getState().dropSpecs) {
          if (null == pendingFolderNode.getState().dragSpecs) {
            const obj2 = { section, item, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds };
            return getAnchorIdFromIndex(obj2);
          }
        }
      };
      obj.getAnchorIndexFromId = function getAnchorIndexFromId(id) {
        return getAnchorIndexFromId({ id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds });
      };
      return obj;
    }, items10)
  };
});
