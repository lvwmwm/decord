// Module ID: 15928
// Function ID: 15929
// Name: useGuildsBarProps
// Dependencies: [19, 5589, 4470, 6640, 6641, 13289, 5201, 2108, 2067, 13297, 4655, 5750, 15921, 15918, 21, 15929, 15943, 15944, 15947, 15952, 15978, 15981, 15982, 15983, 15985, 15986, 15987, 15989, 15991, 4531, 576, 1613, 14620, 14629, 14872, 504, 13382, 15993, 15994, 5266, 1479, 15996, 6493, 2]
// Exports: default

// Module 15928 (useGuildsBarProps)
import Fragment from "Fragment" /* 21 */;
import useWindowDimensions from "useWindowDimensions" /* 1479 */;
import SortedGuildStore2 from "SortedGuildStore" /* 5750 */;
import GuildsBarFooterWrapperDefault from "GuildsBarFooterWrapper" /* 15985 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5589 */;
import LurkingStore from "LurkingStore" /* 4470 */;
import MessageRequestStore from "MessageRequestStore" /* 6640 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6641 */;
import GeoRestrictedGuildStore from "GeoRestrictedGuildStore" /* 13289 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5201 */;
import GuildMemberStore from "GuildMemberStore" /* 2108 */;
import GuildStore from "GuildStore" /* 2067 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 13297 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4655 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 15921 */;
import GuildsBarConstants from "GuildsBarConstants" /* 15918 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const SortedGuildStore = SortedGuildStore2;
let _require, importDefault;

let closure_17;
let closure_18;
function findGuildSectionIndex(arg0) {
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
        let obj3 = { section: num + constants.GUILDS, item: num2 };
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
    let tmp18 = flag;
    if (tmp18) {
      obj.return();
      break;
    }
    break;
  }
}
function isAnchorIdEqual(arg0, arg1, arg2) {
  let tmp = null != arg2;
  if (tmp) {
    const _HermesInternal = HermesInternal;
    tmp = arg1 === "" + arg0 + ":" + arg2;
  }
  return tmp;
}
const GuildsNodeType = SortedGuildStore2.GuildsNodeType;
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = GuildsBarConstants);
const jsx = Fragment.jsx;
let closure_21 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default function useGuildsBarProps(arg0) {
  let closure_1;
  let guildsNFolders;
  let isScreenReaderEnabled;
  let ref;
  let stateFromStores1;
  let token;
  _require = arg0;
  const tmp = isScreenReaderEnabled();
  importDefault = tmp;
  let tmp2 = _require;
  const tmp3 = token;
  let obj = require("useToken");
  let tmp4 = importDefault;
  token = obj.useToken(require("native").modules.mobile.GUILD_BAR_ITEM_MARGIN);
  let rect = require("useSafeAreaInsets")();
  const top = rect.top;
  const bottom = rect.bottom;
  let obj2 = require("QuestHooks");
  const mobileQuestDockHeight = obj2.useMobileQuestDockHeight();
  let obj3 = require("useYouBarTotalHeight");
  const youBarTotalHeight = obj3.useYouBarTotalHeight();
  let obj4 = require("useYouBarTotalHeight");
  const youBarTotalHeight1 = obj4.useYouBarTotalHeight(4);
  let obj5 = top;
  let items = [mobileQuestDockHeight, top, youBarTotalHeight];
  const effect = top.useEffect(() => {
    const listInsets = GuildsBarDnDStore.getState().listInsets;
    const obj = { start: top, end: mobileQuestDockHeight + youBarTotalHeight };
    const result = listInsets.set(obj);
  }, items);
  let num = 0;
  if (require("useIsFavoritesGuildVisible")()) {
    num = 1;
  }
  let items1 = [stateFromStores1, youBarTotalHeight, youBarTotalHeight1];
  const tmp2Result = tmp2(tmp3[35]);
  const stateFromStoresArray = tmp2Result.useStateFromStoresArray(items1, () => {
    const unreadPrivateChannelIds = stateFromStores1.getUnreadPrivateChannelIds();
    const items = [youBarTotalHeight, youBarTotalHeight1];
    const obj = ref(token[36]);
    return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
  }, []);
  const items2 = [bottom];
  const tmp2Result8 = tmp2(tmp3[35]);
  const stateFromStores = tmp2Result8.useStateFromStores(items2, () => bottom.isConnected());
  const items3 = [num];
  const tmp2Result9 = tmp2(tmp3[35]);
  const stateFromStoresArray1 = tmp2Result9.useStateFromStoresArray(items3, () => num.getGeoRestrictedGuilds());
  const items4 = [mobileQuestDockHeight];
  const tmp2Result10 = tmp2(tmp3[35]);
  stateFromStores1 = tmp2Result10.useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
  const items5 = [stateFromStoresArray1, stateFromStores];
  const tmp2Result11 = tmp2(tmp3[35]);
  const stateFromStoresArray2 = tmp2Result11.useStateFromStoresArray(items5, () => {
    let currentUserGuest;
    const guildIds = stateFromStoresArray1.getGuildIds();
    return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
  });
  const items6 = [guildsNFolders];
  const tmp2Result12 = tmp2(tmp3[35]);
  const stateFromStores2 = tmp2Result12.useStateFromStores(items6, () => {
    const obj = { guildsNFolders: guildsNFolders.getFastListGuildFolders(), version: guildsNFolders.getGuildsTree().version };
    return obj;
  }, [], tmp4(tmp3[37]));
  guildsNFolders = stateFromStores2.guildsNFolders;
  const version = stateFromStores2.version;
  const tmp16 = tmp4(tmp3[38])();
  const expanded = tmp16.expanded;
  const pendingFolderNode = tmp16.pendingFolderNode;
  const items7 = [stateFromStoresArray];
  const tmp2Result13 = tmp2(tmp3[35]);
  const stateFromStores3 = tmp2Result13.useStateFromStores(items7, () => stateFromStoresArray.totalUnavailableGuilds);
  const tmp2Result14 = tmp2(tmp3[39]);
  isScreenReaderEnabled = tmp2Result14.useIsScreenReaderEnabled();
  const items8 = [isScreenReaderEnabled, token, youBarTotalHeight, bottom, top, mobileQuestDockHeight, youBarTotalHeight1];
  const memo = obj5.useMemo(() => {
    let diff;
    let obj3;
    let rect;
    const obj = { showsVerticalScrollIndicator: !isScreenReaderEnabled, scrollIndicatorInsets: rect, insetStart: top, insetEnd: mobileQuestDockHeight + 2 * token + youBarTotalHeight1, chunkBase: obj3.getWindowDimensions().height };
    rect = { top: 3 * token, bottom: diff };
    if (youBarTotalHeight > 0) {
      diff = tmp2 - 16;
    } else {
      diff = bottom + 3 * tmp;
    }
    obj3 = useWindowDimensions;
    return obj;
  }, items8);
  const items9 = [, , ];
  ({ insetStart: arr10[0], insetEnd: arr10[1] } = memo);
  items9[2] = arg0;
  const callback = obj5.useCallback((arg0, arg1) => {
    if (null != arg0) {
      const tmp5 = findGuildSectionIndex(arg0);
      if (null != tmp5) {
        const current2 = ref.current;
        if (current2 != null) {
          const obj = { orientation: "visible" };
          const scrollToLocation = current2.scrollToLocation;
          const merged = Object.assign(tmp5);
          ({ insetStart: obj.paddingStart, insetEnd: obj.paddingEnd } = memo);
          scrollToLocation(obj);
        }
      }
    } else {
      const current = ref.current;
      if (current != null) {
        current.scrollTo(0, arg1);
      }
    }
  }, items9);
  let tmp21 = tmp4(tmp3[41])(callback);
  const memo1 = obj5.useMemo(() => {
    const guildId = stateFromStoresArray2.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = memo1(guildId);
    }
    if (null != tmp2) {
      const obj = { initialScrollItem: null, initialScrollSection: null };
      ({ item: obj.initialScrollItem, section: obj.initialScrollSection } = tmp2);
      return obj;
    }
  }, []);
  const items10 = [num, pendingFolderNode, stateFromStores1, stateFromStoresArray2, stateFromStoresArray, stateFromStoresArray1, stateFromStores3, stateFromStores, guildsNFolders, memo1, version, expanded, token, tmp];
  let obj6 = {
    listProps: memo,
    listDataProps: obj5.useMemo(() => {
      let geoRestrictedGuilds;
      let guestGuildIds;
      let lurkingGuildsIds;
      let privateChannelIds;
      const items = [1, num];
      num = 0;
      if (null != pendingFolderNode) {
        const tmp2 = expanded;
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
        } else {
          let tmp4 = item10028;
          if (element.type === tmp3.FOLDER) {
            let tmp5 = item10028;
            let push = items.push;
            if (element.expanded) {
              let tmp7 = item10028;
              let arr3 = push(element.children.length);
            } else {
              let arr10 = push(1);
            }
          }
        }
        continue;
      }
      if (stateFromStoresArray1.length > 0) {
        items.push(arr2.length);
      }
      const items1 = [];
      let tmp11 = stateFromStores3;
      if (stateFromStores3 > 0) {
        items1.push("unavailable-guilds");
      }
      let tmp13 = stateFromStores;
      if (tmp13) {
        let tmp14 = guildsNFolders;
        tmp13 = 0 === guildsNFolders.length;
      }
      if (tmp13) {
        tmp13 = 0 === tmp11;
      }
      if (tmp13) {
        items1.push("empty-nux");
      }
      items1.push("create-join-guild");
      let obj = {
        sections: items,
        sectionSize(arg0) {
          if (arg0 !== stateFromStores3.PENDING_JOIN_REQUESTS) {
            num = 0;
            if (arg0 >= stateFromStores3.GUILDS) {
              let num2 = 0;
              if (null != tmp[arg0 - stateFromStores3.GUILDS]) {
                num2 = 0;
                if (tmp[arg0 - stateFromStores3.GUILDS].type === expanded.FOLDER) {
                  num2 = tmp3;
                }
              }
              num = num2;
            }
          } else {
            num = tmp3;
          }
          return num;
        },
        itemSize(arg0, arg1) {
          num = closure_1_1;
          if (stateFromStores3.MESSAGES !== arg0) {
            num = tmp4;
            if (stateFromStores3.FAVORITES !== arg0) {
              num = tmp4;
              if (stateFromStores3.LURKING_GUILDS !== arg0) {
                num = tmp4;
                if (stateFromStores3.GUEST_GUILDS !== arg0) {
                  let num6 = arg1;
                  if (stateFromStores3.UNREAD_PRIVATE_CHANNELS === arg0) {
                    if (num6 == null) {
                      num6 = -1;
                    }
                    let num7 = 0;
                    if (null != tmp2[num6]) {
                      num7 = tmp4;
                    }
                    num = num7;
                  } else if (stateFromStores3.SEPARATOR === arg0) {
                    num = 1 + 2 * tmp5;
                  } else if (stateFromStores3.PENDING_JOIN_REQUESTS === arg0) {
                    let num3 = 0;
                    if (null != num6) {
                      num3 = 0;
                      if (null != pendingFolderNode) {
                        num3 = 0;
                        if (pendingFolderNode.expanded) {
                          num3 = 0;
                          if (null != pendingFolderNode.children[num6]) {
                            num3 = tmp4;
                          }
                        }
                      }
                    }
                    num = num3;
                  } else {
                    num = 0;
                    if (null != num6) {
                      const diff = arg0 - tmp6.GUILDS;
                      if (guildsNFolders.length < diff) {
                        const element = arr[diff];
                        let num2 = 0;
                        if (null != element) {
                          num2 = 0;
                          if (element.type !== expanded.ROOT) {
                            if (element.type !== expanded.GUILD) {
                              if (element.type !== expanded.FOLDER) {
                                num2 = tmp4;
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
                        num = num2;
                      } else {
                        num = tmp4;
                      }
                    }
                  }
                }
              }
            }
          }
          return num;
        },
        footerSize() {
          return items1.length * closure_1 + 8;
        },
        renderSection(arg0) {
          let tmp5;
          if (arg0 >= stateFromStores3.GUILDS) {
            tmp5 = null;
            if (tmp[arg0 - stateFromStores3.GUILDS].type === expanded.FOLDER) {
              const obj3 = { id: null, expanded: null, name: null, color: null, childNodes: null };
              ({ id: obj2.id, expanded: obj2.expanded, name: obj2.name, color: obj2.color, children: obj2.childNodes } = tmp[arg0 - stateFromStores3.GUILDS]);
              tmp5 = memo(closure_1(token[15]), obj3);
            }
          } else {
            tmp5 = null;
            if (arg0 === stateFromStores3.PENDING_JOIN_REQUESTS) {
              tmp5 = null;
              if (null != pendingFolderNode) {
                const obj = { id: null, expanded: null, childNodes: null };
                ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = pendingFolderNode);
                tmp5 = memo(closure_1(token[16]), obj);
              }
            }
          }
          return tmp5;
        },
        renderItem(arg0, arg1) {
          let tmp8;
          if (stateFromStores3.MESSAGES === arg0) {
            tmp8 = memo(closure_1(token[17]), {});
          } else if (stateFromStores3.FAVORITES === arg0) {
            tmp8 = memo(closure_1(token[18]), {});
          } else if (stateFromStores3.LURKING_GUILDS === arg0) {
            let tmp40 = null;
            if (null != tmp2[arg1]) {
              const obj2 = { guildId: tmp2[arg1] };
              tmp40 = memo(closure_1(token[19]), obj2);
            }
            tmp8 = tmp40;
          } else if (stateFromStores3.GUEST_GUILDS === arg0) {
            let tmp35 = null;
            if (null != tmp3[arg1]) {
              const obj3 = { guildId: tmp3[arg1] };
              tmp35 = memo(closure_1(token[19]), obj3);
            }
            tmp8 = tmp35;
          } else if (stateFromStores3.UNREAD_PRIVATE_CHANNELS === arg0) {
            let tmp30 = null;
            if (null != tmp[arg1]) {
              const obj4 = { channelId: tmp[arg1] };
              tmp30 = memo(closure_1(token[20]), obj4);
            }
            tmp8 = tmp30;
          } else if (stateFromStores3.SEPARATOR === arg0) {
            tmp8 = memo(closure_1(token[21]), {});
          } else if (stateFromStores3.PENDING_JOIN_REQUESTS === arg0) {
            tmp8 = null;
            if (null != pendingFolderNode) {
              let tmp21 = null;
              if (null != pendingFolderNode.children[arg1]) {
                tmp21 = null;
                if (pendingFolderNode.children[arg1].type === expanded.GUILD) {
                  const obj5 = { guildId: pendingFolderNode.children[arg1].id };
                  tmp21 = memo(closure_1(token[22]), obj5);
                }
              }
              tmp8 = tmp21;
            }
          } else {
            const diff = arg0 - tmp6.GUILDS;
            if (diff >= guildsNFolders.length) {
              let tmp15 = null;
              if (null != tmp4[arg1]) {
                const obj6 = { restrictedGuild: tmp4[arg1] };
                tmp15 = memo(closure_1(token[23]), obj6);
              }
              tmp8 = tmp15;
            } else {
              const element = arr[diff];
              tmp8 = null;
              if (null != element) {
                tmp8 = null;
                if (element.type !== expanded.ROOT) {
                  if (element.type !== expanded.GUILD) {
                    let tmp9 = element;
                    if (element.type === expanded.FOLDER) {
                      tmp9 = element.children[arg1];
                    }
                    let tmp10 = null;
                    if (null != tmp9) {
                      tmp10 = null;
                      if (tmp9.type === expanded.GUILD) {
                        const obj = { guildId: tmp9.id };
                        tmp10 = memo(closure_1(token[19]), obj);
                      }
                    }
                    tmp8 = tmp10;
                  } else {
                    tmp8 = null;
                  }
                }
              }
            }
          }
          return tmp8;
        },
        renderFooter() {
          GuildsBarFooterWrapperDefault;
          return <tmp>{items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return closure_1_19(closure_1_1(closure_1_2[25]), {}, item);
            } else if ("empty-nux" === item) {
              return closure_1_19(closure_1_1(closure_1_2[26]), {}, item);
            } else if ("create-join-guild" === item) {
              return closure_1_19(closure_1_1(closure_1_2[27]), {}, item);
            }
          })}</tmp>;
        },
        getRecyclerKey(ITEM, section, item1) {
          if (section >= stateFromStores3.GUILDS) {
            const element = guildsNFolders[section - tmp3.GUILDS];
            if (null != element) {
              if (element.type !== expanded.ROOT) {
                if (element.type === expanded.FOLDER) {
                  if (null == item1) {
                    const _HermesInternal2 = HermesInternal;
                    return "" + element.id;
                  }
                }
                const _HermesInternal = HermesInternal;
                return "" + element.id;
              }
            }
          }
        },
        renderAccessory(self) {
          const obj = { fastList: self };
          return memo(closure_1_1(token[28]), obj);
        },
        getAnchorIdFromIndex(arg0, arg1) {
          const obj = pendingFolderNode;
          if (null == pendingFolderNode.getState().dropSpecs) {
            if (null == obj.getState().dragSpecs) {
              let SEPARATOR;
              if (stateFromStores3.MESSAGES === arg0) {
                SEPARATOR = constants.MESSAGES;
              } else if (stateFromStores3.FAVORITES === arg0) {
                SEPARATOR = constants.FAVORITES;
              } else if (stateFromStores3.PENDING_JOIN_REQUESTS === arg0) {
                if (null == arg1) {
                  SEPARATOR = constants.PENDING_JOIN_REQUESTS;
                } else {
                  let id1;
                  if (pendingFolderNode != null) {
                    if (pendingFolderNode.children[arg1] != null) {
                      id1 = tmp25.id;
                    }
                  }
                  let combined;
                  if (null != id1) {
                    const _HermesInternal5 = HermesInternal;
                    combined = "" + constants.PENDING_JOIN_REQUESTS + ":" + id1;
                  }
                  SEPARATOR = combined;
                }
              } else if (stateFromStores3.LURKING_GUILDS === arg0) {
                let LURKING_GUILDS;
                if (null == arg1) {
                  LURKING_GUILDS = constants.LURKING_GUILDS;
                } else {
                  const _HermesInternal4 = HermesInternal;
                  LURKING_GUILDS = "" + constants.LURKING_GUILDS + ":" + tmp2[arg1];
                }
                SEPARATOR = LURKING_GUILDS;
              } else if (stateFromStores3.GUEST_GUILDS === arg0) {
                let GUEST_GUILDS;
                if (null == arg1) {
                  GUEST_GUILDS = constants.GUEST_GUILDS;
                } else {
                  const _HermesInternal3 = HermesInternal;
                  GUEST_GUILDS = "" + constants.GUEST_GUILDS + ":" + tmp3[arg1];
                }
                SEPARATOR = GUEST_GUILDS;
              } else if (stateFromStores3.UNREAD_PRIVATE_CHANNELS === arg0) {
                let UNREAD_PRIVATE_CHANNELS;
                if (null == arg1) {
                  UNREAD_PRIVATE_CHANNELS = constants.UNREAD_PRIVATE_CHANNELS;
                } else {
                  const _HermesInternal2 = HermesInternal;
                  UNREAD_PRIVATE_CHANNELS = "" + constants.UNREAD_PRIVATE_CHANNELS + ":" + tmp4[arg1];
                }
                SEPARATOR = UNREAD_PRIVATE_CHANNELS;
              } else if (stateFromStores3.SEPARATOR === arg0) {
                SEPARATOR = constants.SEPARATOR;
              } else {
                let id;
                const GUILDS = tmp7.GUILDS;
                const diff = arg0 - tmp7.GUILDS;
                if (null == guildsNFolders[diff]) {
                  let tmp9;
                  if (diff >= guildsNFolders.length) {
                    if (null != arg1) {
                      let id2;
                      if (tmp6[arg1] != null) {
                        id2 = tmp10.id;
                      }
                      tmp9 = id2;
                    }
                  }
                  id = tmp9;
                } else if (null == arg1) {
                  id = tmp34.id;
                } else if (guildsNFolders[diff].children[arg1] != null) {
                  id = tmp8.id;
                }
                if (null != id) {
                  const _HermesInternal = HermesInternal;
                  SEPARATOR = "" + constants.GUILDS + ":" + id;
                }
              }
              return SEPARATOR;
            }
          }
        },
        getAnchorIndexFromId(id) {
          let constants2;
          function getAnchorIndexFromId(arg0) {
            let id;
            ({ id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds } = arg0);
            if (constants2.MESSAGES === id) {
              return { section: constants.MESSAGES };
            } else if (constants2.FAVORITES === id) {
              return { section: constants.FAVORITES };
            } else if (constants2.PENDING_JOIN_REQUESTS === id) {
              return { section: constants.PENDING_JOIN_REQUESTS };
            } else if (constants2.LURKING_GUILDS === id) {
              return { section: constants.LURKING_GUILDS };
            } else if (constants2.GUEST_GUILDS === id) {
              return { section: constants.GUEST_GUILDS };
            } else if (constants2.UNREAD_PRIVATE_CHANNELS === id) {
              return { section: constants.UNREAD_PRIVATE_CHANNELS };
            } else if (constants2.SEPARATOR === id) {
              return { section: constants.SEPARATOR };
            } else if (id.startsWith(constants2.LURKING_GUILDS)) {
              let num12 = 0;
              for (const item10164 of lurkingGuildsIds) {
                if (closure_1_22(constants2.LURKING_GUILDS, id, item10164)) {
                  let obj15 = { section: constants.LURKING_GUILDS, item: num12 };
                  obj12.return();
                  return obj15;
                } else {
                  num12 = num12 + 1;
                  continue;
                }
              }
            } else {
              if (id.startsWith(constants2.PENDING_JOIN_REQUESTS)) {
                if (null != pendingFolderNode) {
                  num = 0;
                  const children2 = pendingFolderNode.children;
                  for (const item10025 of children2) {
                    if (closure_1_22(constants2.PENDING_JOIN_REQUESTS, id, item10025.id)) {
                      let obj = { section: constants.PENDING_JOIN_REQUESTS, item: num };
                      obj21.return();
                      return obj;
                    } else {
                      num = num + 1;
                      continue;
                    }
                  }
                }
              }
              const tmp14 = constants2;
              if (id.startsWith(constants2.GUEST_GUILDS)) {
                let num10 = 0;
                for (const item10146 of guestGuildIds) {
                  if (closure_1_22(constants2.GUEST_GUILDS, id, item10146)) {
                    let obj16 = { section: constants.GUEST_GUILDS, item: num10 };
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
                    if (closure_1_22(constants2.UNREAD_PRIVATE_CHANNELS, id, item10057)) {
                      let obj17 = { section: constants.UNREAD_PRIVATE_CHANNELS, item: num4 };
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
                    if (closure_1_22(constants2.GUILDS, id, item10081.id)) {
                      let obj18 = { section: num6 + constants.GUILDS };
                      obj4.return();
                      return obj18;
                    } else {
                      let children = tmp28.children;
                      for (const item10095 of children) {
                        if (closure_1_22(constants2.GUILDS, id, item10095.id)) {
                          let obj19 = { section: num6 + constants.GUILDS, item: num7 };
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
                    if (closure_1_22(constants2.GUILDS, id, item10125.id)) {
                      let obj20 = { section: num6 + constants.GUILDS, item: num8 };
                      obj8.return();
                      return obj20;
                    } else {
                      num8 = num8 + 1;
                      continue;
                    }
                  }
                }
              }
            }
          }
          let obj = { id, lurkingGuildsIds, guestGuildIds, privateChannelIds, guildsNFolders, pendingFolderNode, geoRestrictedGuilds };
          return getAnchorIndexFromId(obj);
        }
      };
      const merged = Object.assign(memo1);
      return obj;
    }, items10)
  };
  return obj6;
};
