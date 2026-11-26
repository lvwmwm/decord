// Module ID: 17884
// Function ID: 17885
// Name: useGuildsBarProps
// Dependencies: [19, 6394, 4846, 6634, 6635, 15037, 6551, 4825, 4784, 15044, 4946, 6550, 17877, 17874, 21, 17885, 17899, 17900, 17902, 17905, 17929, 17932, 17934, 17935, 17936, 17938, 17939, 17940, 17941, 17942, 17944, 5477, 575, 1628, 16481, 16492, 10041, 16743, 12504, 504, 6662, 17946, 17947, 5143, 1494, 17949, 7449, 2]
// Exports: default

// Module 17884 (useGuildsBarProps)
import Fragment from "Fragment" /* 21 */;
import useWindowDimensions from "useWindowDimensions" /* 1494 */;
import SortedGuildStore2 from "SortedGuildStore" /* 6550 */;
import GuildsBarFooterWrapperDefault from "GuildsBarFooterWrapper" /* 17938 */;
import react from "react" /* 19 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 6394 */;
import LurkingStore from "LurkingStore" /* 4846 */;
import MessageRequestStore from "MessageRequestStore" /* 6634 */;
import SpamMessageRequestStore from "SpamMessageRequestStore" /* 6635 */;
import GeoRestrictedGuildStore from "GeoRestrictedGuildStore" /* 15037 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6551 */;
import GuildMemberStore from "GuildMemberStore" /* 4825 */;
import GuildStore from "GuildStore" /* 4784 */;
import PrivateChannelReadStateStore from "PrivateChannelReadStateStore" /* 15044 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4946 */;
import GuildsBarDnDStore from "GuildsBarDnDStore" /* 17877 */;
import GuildsBarConstants from "GuildsBarConstants" /* 17874 */;
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
let closure_21 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", CHECKPOINT_INTRO: "section-checkpoint-intro", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
let result = size.fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default function useGuildsBarProps(arg0) {
  let closure_1;
  let expanded;
  let ref;
  let stateFromStoresArray;
  let token;
  _require = arg0;
  const tmp = expanded();
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
  let obj6 = require("WaterwheelsDiscoverExperiment");
  const waterwheelsDiscoverEnabled = obj6.useWaterwheelsDiscoverEnabled("guilds_bar");
  let num = 0;
  if (require("useIsFavoritesGuildVisible")()) {
    num = 1;
  }
  const tmp2Result = tmp2(tmp3[38]);
  const checkpointGuildsBarEntrypoint = tmp2Result.useCheckpointGuildsBarEntrypoint("GuildsBar");
  const visible = checkpointGuildsBarEntrypoint.visible;
  const markAsDismissed = checkpointGuildsBarEntrypoint.markAsDismissed;
  let items1 = [stateFromStoresArray, youBarTotalHeight, youBarTotalHeight1];
  const tmp2Result9 = tmp2(tmp3[39]);
  stateFromStoresArray = tmp2Result9.useStateFromStoresArray(items1, () => {
    const unreadPrivateChannelIds = stateFromStoresArray.getUnreadPrivateChannelIds();
    const items = [youBarTotalHeight, youBarTotalHeight1];
    const obj = ref(token[40]);
    return obj.filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
  }, []);
  const items2 = [bottom];
  const tmp2Result10 = tmp2(tmp3[39]);
  const stateFromStores = tmp2Result10.useStateFromStores(items2, () => bottom.isConnected());
  const items3 = [waterwheelsDiscoverEnabled];
  const tmp2Result11 = tmp2(tmp3[39]);
  const stateFromStoresArray1 = tmp2Result11.useStateFromStoresArray(items3, () => waterwheelsDiscoverEnabled.getGeoRestrictedGuilds());
  const items4 = [mobileQuestDockHeight];
  const tmp2Result12 = tmp2(tmp3[39]);
  const stateFromStores1 = tmp2Result12.useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
  const items5 = [markAsDismissed, visible];
  const tmp2Result13 = tmp2(tmp3[39]);
  const stateFromStoresArray2 = tmp2Result13.useStateFromStoresArray(items5, () => {
    let currentUserGuest;
    const guildIds = markAsDismissed.getGuildIds();
    return guildIds.filter((item) => currentUserGuest.isCurrentUserGuest(item));
  });
  const items6 = [stateFromStoresArray1];
  const tmp2Result14 = tmp2(tmp3[39]);
  const stateFromStores2 = tmp2Result14.useStateFromStores(items6, () => {
    const obj = { guildsNFolders: stateFromStoresArray1.getFastListGuildFolders(), version: stateFromStoresArray1.getGuildsTree().version };
    return obj;
  }, [], tmp4(tmp3[41]));
  const guildsNFolders = stateFromStores2.guildsNFolders;
  const version = stateFromStores2.version;
  let tmp18 = tmp4(tmp3[42])();
  expanded = tmp18.expanded;
  const pendingFolderNode = tmp18.pendingFolderNode;
  const items7 = [num];
  const tmp2Result15 = tmp2(tmp3[39]);
  const stateFromStores3 = tmp2Result15.useStateFromStores(items7, () => num.totalUnavailableGuilds);
  const tmp2Result16 = tmp2(tmp3[43]);
  const isScreenReaderEnabled = tmp2Result16.useIsScreenReaderEnabled();
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
  let tmp23 = tmp4(tmp3[45])(callback);
  const memo1 = obj5.useMemo(() => {
    const guildId = stateFromStores.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = stateFromStores3(guildId);
    }
    if (null != tmp2) {
      const obj = { initialScrollItem: null, initialScrollSection: null };
      ({ item: obj.initialScrollItem, section: obj.initialScrollSection } = tmp2);
      return obj;
    }
  }, []);
  const items10 = [num, pendingFolderNode, stateFromStores1, stateFromStoresArray2, stateFromStoresArray, stateFromStoresArray1, stateFromStores3, stateFromStores, guildsNFolders, memo1, version, expanded, token, tmp, waterwheelsDiscoverEnabled, visible, markAsDismissed];
  let obj7 = {
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
      let num3 = 0;
      if (visible) {
        num3 = 1;
      }
      items[6] = num3;
      items[7] = 1;
      for (const item10030 of guildsNFolders) {
        let element = item10030;
        if (item10030.type === stateFromStores1.GUILD) {
          let arr = items.push(1);
        } else {
          let tmp4 = item10030;
          if (element.type === tmp3.FOLDER) {
            let tmp5 = item10030;
            let push = items.push;
            if (element.expanded) {
              let tmp7 = item10030;
              let arr3 = push(element.children.length);
            } else {
              let arr11 = push(1);
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
      let tmp16 = waterwheelsDiscoverEnabled;
      if (tmp16) {
        items1.push("waterwheels");
      }
      items1.push("create-join-guild");
      let obj = {
        sections: items,
        sectionSize(arg0) {
          if (arg0 !== guildsNFolders.PENDING_JOIN_REQUESTS) {
            num = 0;
            if (arg0 >= guildsNFolders.GUILDS) {
              let num2 = 0;
              if (null != tmp[arg0 - guildsNFolders.GUILDS]) {
                num2 = 0;
                if (tmp[arg0 - guildsNFolders.GUILDS].type === stateFromStores1.FOLDER) {
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
          if (guildsNFolders.MESSAGES !== arg0) {
            num = tmp4;
            if (guildsNFolders.FAVORITES !== arg0) {
              num = tmp4;
              if (guildsNFolders.LURKING_GUILDS !== arg0) {
                num = tmp4;
                if (guildsNFolders.GUEST_GUILDS !== arg0) {
                  num = tmp4;
                  if (guildsNFolders.CHECKPOINT_INTRO !== arg0) {
                    let num6 = arg1;
                    if (guildsNFolders.UNREAD_PRIVATE_CHANNELS === arg0) {
                      if (num6 == null) {
                        num6 = -1;
                      }
                      let num7 = 0;
                      if (null != tmp2[num6]) {
                        num7 = tmp4;
                      }
                      num = num7;
                    } else if (guildsNFolders.SEPARATOR === arg0) {
                      num = 1 + 2 * tmp5;
                    } else if (guildsNFolders.PENDING_JOIN_REQUESTS === arg0) {
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
                            if (element.type !== stateFromStores1.ROOT) {
                              if (element.type !== stateFromStores1.GUILD) {
                                if (element.type !== stateFromStores1.FOLDER) {
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
          }
          return num;
        },
        footerSize() {
          const result = items1.length * closure_1;
          const result1 = 2 * token;
          let sum = result;
          if (items1.includes("waterwheels")) {
            sum = result + (1 + result1);
          }
          return sum + 8;
        },
        renderSection(arg0) {
          let tmp5;
          if (arg0 >= guildsNFolders.GUILDS) {
            tmp5 = null;
            if (tmp[arg0 - guildsNFolders.GUILDS].type === stateFromStores1.FOLDER) {
              const obj3 = { id: null, expanded: null, name: null, color: null, childNodes: null };
              ({ id: obj2.id, expanded: obj2.expanded, name: obj2.name, color: obj2.color, children: obj2.childNodes } = tmp[arg0 - guildsNFolders.GUILDS]);
              tmp5 = pendingFolderNode(closure_1(token[15]), obj3);
            }
          } else {
            tmp5 = null;
            if (arg0 === guildsNFolders.PENDING_JOIN_REQUESTS) {
              tmp5 = null;
              if (null != closure_1_19) {
                const obj = { id: null, expanded: null, childNodes: null };
                ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = closure_1_19);
                tmp5 = pendingFolderNode(closure_1(token[16]), obj);
              }
            }
          }
          return tmp5;
        },
        renderItem(arg0, arg1) {
          let tmp9;
          if (guildsNFolders.MESSAGES === arg0) {
            tmp9 = pendingFolderNode(closure_1(token[17]), {});
          } else if (guildsNFolders.FAVORITES === arg0) {
            tmp9 = pendingFolderNode(closure_1(token[18]), {});
          } else if (guildsNFolders.LURKING_GUILDS === arg0) {
            let tmp44 = null;
            if (null != tmp2[arg1]) {
              const obj2 = { guildId: tmp2[arg1] };
              tmp44 = pendingFolderNode(closure_1(token[19]), obj2);
            }
            tmp9 = tmp44;
          } else if (guildsNFolders.GUEST_GUILDS === arg0) {
            let tmp39 = null;
            if (null != tmp3[arg1]) {
              const obj3 = { guildId: tmp3[arg1] };
              tmp39 = pendingFolderNode(closure_1(token[19]), obj3);
            }
            tmp9 = tmp39;
          } else if (guildsNFolders.UNREAD_PRIVATE_CHANNELS === arg0) {
            let tmp34 = null;
            if (null != tmp[arg1]) {
              const obj4 = { channelId: tmp[arg1] };
              tmp34 = pendingFolderNode(closure_1(token[20]), obj4);
            }
            tmp9 = tmp34;
          } else if (guildsNFolders.CHECKPOINT_INTRO === arg0) {
            const obj5 = { markAsDismissed: tmp6 };
            tmp9 = pendingFolderNode(closure_1(token[21]), obj5);
          } else if (guildsNFolders.SEPARATOR === arg0) {
            tmp9 = pendingFolderNode(closure_1(token[22]), {});
          } else if (guildsNFolders.PENDING_JOIN_REQUESTS === arg0) {
            tmp9 = null;
            if (null != pendingFolderNode) {
              let tmp22 = null;
              if (null != pendingFolderNode.children[arg1]) {
                tmp22 = null;
                if (pendingFolderNode.children[arg1].type === stateFromStores1.GUILD) {
                  const obj6 = { guildId: pendingFolderNode.children[arg1].id };
                  tmp22 = pendingFolderNode(closure_1(token[23]), obj6);
                }
              }
              tmp9 = tmp22;
            }
          } else {
            const diff = arg0 - tmp7.GUILDS;
            if (diff >= guildsNFolders.length) {
              let tmp16 = null;
              if (null != tmp4[arg1]) {
                const obj7 = { restrictedGuild: tmp4[arg1] };
                tmp16 = pendingFolderNode(closure_1(token[24]), obj7);
              }
              tmp9 = tmp16;
            } else {
              const element = arr[diff];
              tmp9 = null;
              if (null != element) {
                tmp9 = null;
                if (element.type !== stateFromStores1.ROOT) {
                  if (element.type !== stateFromStores1.GUILD) {
                    let tmp10 = element;
                    if (element.type === stateFromStores1.FOLDER) {
                      tmp10 = element.children[arg1];
                    }
                    let tmp11 = null;
                    if (null != tmp10) {
                      tmp11 = null;
                      if (tmp10.type === stateFromStores1.GUILD) {
                        const obj = { guildId: tmp10.id };
                        tmp11 = pendingFolderNode(closure_1(token[19]), obj);
                      }
                    }
                    tmp9 = tmp11;
                  } else {
                    tmp9 = null;
                  }
                }
              }
            }
          }
          return tmp9;
        },
        renderFooter() {
          GuildsBarFooterWrapperDefault;
          return <tmp>{items1.map((item) => {
            if ("unavailable-guilds" === item) {
              return pendingFolderNode(closure_1_1(closure_1_2[26]), {}, item);
            } else if ("empty-nux" === item) {
              return pendingFolderNode(closure_1_1(closure_1_2[27]), {}, item);
            } else if ("waterwheels" === item) {
              return pendingFolderNode(closure_1_1(closure_1_2[28]), {}, item);
            } else if ("create-join-guild" === item) {
              return pendingFolderNode(closure_1_1(closure_1_2[29]), {}, item);
            }
          })}</tmp>;
        },
        getRecyclerKey(SECTION, section, item1) {
          if (section >= guildsNFolders.GUILDS) {
            const element = guildsNFolders[section - tmp3.GUILDS];
            if (null != element) {
              if (element.type !== stateFromStores1.ROOT) {
                if (element.type === stateFromStores1.FOLDER) {
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
        renderAccessory(memo1) {
          const obj = { fastList: memo1 };
          return pendingFolderNode(closure_1_1(token[30]), obj);
        },
        getAnchorIdFromIndex(arg0, arg1) {
          const obj = stateFromStoresArray2;
          if (null == stateFromStoresArray2.getState().dropSpecs) {
            if (null == obj.getState().dragSpecs) {
              let SEPARATOR;
              if (guildsNFolders.MESSAGES === arg0) {
                SEPARATOR = isScreenReaderEnabled.MESSAGES;
              } else if (guildsNFolders.FAVORITES === arg0) {
                SEPARATOR = isScreenReaderEnabled.FAVORITES;
              } else if (guildsNFolders.PENDING_JOIN_REQUESTS === arg0) {
                if (null == arg1) {
                  SEPARATOR = isScreenReaderEnabled.PENDING_JOIN_REQUESTS;
                } else {
                  let id1;
                  if (pendingFolderNode != null) {
                    if (pendingFolderNode.children[arg1] != null) {
                      id1 = tmp26.id;
                    }
                  }
                  let combined;
                  if (null != id1) {
                    const _HermesInternal5 = HermesInternal;
                    combined = "" + isScreenReaderEnabled.PENDING_JOIN_REQUESTS + ":" + id1;
                  }
                  SEPARATOR = combined;
                }
              } else if (guildsNFolders.LURKING_GUILDS === arg0) {
                let LURKING_GUILDS;
                if (null == arg1) {
                  LURKING_GUILDS = isScreenReaderEnabled.LURKING_GUILDS;
                } else {
                  const _HermesInternal4 = HermesInternal;
                  LURKING_GUILDS = "" + isScreenReaderEnabled.LURKING_GUILDS + ":" + tmp2[arg1];
                }
                SEPARATOR = LURKING_GUILDS;
              } else if (guildsNFolders.GUEST_GUILDS === arg0) {
                let GUEST_GUILDS;
                if (null == arg1) {
                  GUEST_GUILDS = isScreenReaderEnabled.GUEST_GUILDS;
                } else {
                  const _HermesInternal3 = HermesInternal;
                  GUEST_GUILDS = "" + isScreenReaderEnabled.GUEST_GUILDS + ":" + tmp3[arg1];
                }
                SEPARATOR = GUEST_GUILDS;
              } else if (guildsNFolders.UNREAD_PRIVATE_CHANNELS === arg0) {
                let UNREAD_PRIVATE_CHANNELS;
                if (null == arg1) {
                  UNREAD_PRIVATE_CHANNELS = isScreenReaderEnabled.UNREAD_PRIVATE_CHANNELS;
                } else {
                  const _HermesInternal2 = HermesInternal;
                  UNREAD_PRIVATE_CHANNELS = "" + isScreenReaderEnabled.UNREAD_PRIVATE_CHANNELS + ":" + tmp4[arg1];
                }
                SEPARATOR = UNREAD_PRIVATE_CHANNELS;
              } else if (guildsNFolders.CHECKPOINT_INTRO === arg0) {
                SEPARATOR = isScreenReaderEnabled.CHECKPOINT_INTRO;
              } else if (guildsNFolders.SEPARATOR === arg0) {
                SEPARATOR = isScreenReaderEnabled.SEPARATOR;
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
                  id = tmp35.id;
                } else if (guildsNFolders[diff].children[arg1] != null) {
                  id = tmp8.id;
                }
                if (null != id) {
                  const _HermesInternal = HermesInternal;
                  SEPARATOR = "" + isScreenReaderEnabled.GUILDS + ":" + id;
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
            } else if (constants2.CHECKPOINT_INTRO === id) {
              return { section: constants.CHECKPOINT_INTRO };
            } else if (constants2.SEPARATOR === id) {
              return { section: constants.SEPARATOR };
            } else if (id.startsWith(constants2.LURKING_GUILDS)) {
              let num12 = 0;
              for (const item10164 of lurkingGuildsIds) {
                if (closure_1_22(constants2.LURKING_GUILDS, id, item10164)) {
                  let obj16 = { section: constants.LURKING_GUILDS, item: num12 };
                  obj12.return();
                  return obj16;
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
                      obj22.return();
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
                    let obj17 = { section: constants.GUEST_GUILDS, item: num10 };
                    obj10.return();
                    return obj17;
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
                      let obj18 = { section: constants.UNREAD_PRIVATE_CHANNELS, item: num4 };
                      obj2.return();
                      return obj18;
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
                      let obj19 = { section: num6 + constants.GUILDS };
                      obj4.return();
                      return obj19;
                    } else {
                      let children = tmp28.children;
                      for (const item10095 of children) {
                        if (closure_1_22(constants2.GUILDS, id, item10095.id)) {
                          let obj20 = { section: num6 + constants.GUILDS, item: num7 };
                          obj5.return();
                          obj4.return();
                          return obj20;
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
                      let obj21 = { section: num6 + constants.GUILDS, item: num8 };
                      obj8.return();
                      return obj21;
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
  return obj7;
};
