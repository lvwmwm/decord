// Module ID: 14706
// Function ID: 110910
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default

// Module 14706 (_createForOfIteratorHelperLoose)
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function findGuildSectionIndex(arg0) {
  const tmp = _createForOfIteratorHelperLoose(fastListGuildFolders.getFastListGuildFolders());
  const iter = tmp();
  let num = -1;
  let flag = false;
  let iter2 = iter;
  let num2 = -1;
  let num3 = 0;
  let flag2 = false;
  if (!iter.done) {
    while (true) {
      let value = iter2.value;
      let sum = num + 1;
      let tmp4 = GuildsNodeType;
      if (value.type !== GuildsNodeType.GUILD) {
        let tmp5 = GuildsNodeType;
        let num4 = 0;
        let flag3 = flag;
        let tmp6 = tmp2;
        if (value.type === GuildsNodeType.FOLDER) {
          let tmp16 = _createForOfIteratorHelperLoose;
          let tmp17 = _createForOfIteratorHelperLoose(value.children);
          let iter6 = tmp17();
          let num6 = 0;
          let iter4 = iter6;
          num4 = 0;
          flag3 = flag;
          let tmp18 = iter6;
          let tmp19 = tmp17;
          tmp6 = tmp2;
          if (!iter6.done) {
            while (true) {
              value = iter4.value;
              let tmp7 = GuildsNodeType;
              let num5 = num6;
              let tmp8 = iter4;
              let sum1 = num6;
              if (value.type === GuildsNodeType.GUILD) {
                if (value.id === arg0) {
                  break;
                } else {
                  sum1 = num5 + 1;
                }
              }
              let iter3 = tmp17();
              num6 = sum1;
              iter4 = iter3;
              num4 = sum1;
              flag3 = flag;
              let tmp10 = iter3;
              let tmp11 = tmp17;
              tmp6 = value;
              continue;
            }
            if (!value.expanded) {
              num5 = 0;
            }
            num4 = num5;
            flag3 = true;
            let tmp12 = iter4;
            let tmp13 = tmp17;
            tmp6 = value;
          }
        }
        num2 = sum;
        num3 = num4;
        flag2 = flag3;
        if (flag3) {
          break;
        } else {
          let iter5 = tmp();
          iter2 = iter5;
          num = sum;
          flag = flag3;
          let tmp2 = tmp6;
          num2 = sum;
          num3 = num4;
          flag2 = flag3;
          if (iter5.done) {
            break;
          }
        }
      } else {
        num2 = sum;
        num3 = 0;
        flag2 = true;
        if (value.id === arg0) {
          break;
        }
      }
      break;
    }
  }
  let tmp14 = null;
  if (flag2) {
    const obj = { section: num2 + constants.GUILDS, item: num3 };
    tmp14 = obj;
  }
  return tmp14;
}
function isAnchorIdEqual(arg0, arg1, arg2) {
  let tmp = null != arg2;
  if (tmp) {
    const _HermesInternal = HermesInternal;
    tmp = arg1 === "" + arg0 + ":" + arg2;
  }
  return tmp;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
const GuildsNodeType = arg1(dependencyMap[11]).GuildsNodeType;
let closure_16 = importDefault(dependencyMap[12]);
({ FastListRenderSections: closure_17, useGuildWrapperSize: closure_18 } = arg1(dependencyMap[13]));
const jsx = arg1(dependencyMap[14]).jsx;
let closure_20 = { MESSAGES: "section-messages", FAVORITES: "section-favorites", PENDING_JOIN_REQUESTS: "section-pending-join-requests", LURKING_GUILDS: "section-lurking-guilds", GUEST_GUILDS: "section-guest-guilds", UNREAD_PRIVATE_CHANNELS: "section-private-channels", SEPARATOR: "section-separator", GUILDS: "section-guilds" };
const tmp2 = arg1(dependencyMap[13]);
const result = arg1(dependencyMap[42]).fileFinishedImporting("modules/guilds_bar/native/hooks/useGuildsBarProps.tsx");

export default function useGuildsBarProps(arg0) {
  const arg1 = arg0;
  const tmp = memo();
  const importDefault = tmp;
  let obj = arg1(dependencyMap[29]);
  const token = obj.useToken(importDefault(dependencyMap[30]).modules.mobile.GUILD_BAR_ITEM_MARGIN);
  const dependencyMap = token;
  const rect = importDefault(dependencyMap[31])();
  const top = rect.top;
  const React = top;
  const bottom = rect.bottom;
  let closure_4 = bottom;
  const mobileQuestDockHeight = arg1(dependencyMap[32]).useMobileQuestDockHeight();
  let closure_5 = mobileQuestDockHeight;
  const obj2 = arg1(dependencyMap[32]);
  const youBarTotalHeight = arg1(dependencyMap[33]).useYouBarTotalHeight();
  let closure_6 = youBarTotalHeight;
  const obj3 = arg1(dependencyMap[33]);
  const youBarTotalHeight1 = arg1(dependencyMap[33]).useYouBarTotalHeight(4);
  let closure_7 = youBarTotalHeight1;
  const items = [mobileQuestDockHeight, top, youBarTotalHeight];
  const effect = React.useEffect(() => {
    const listInsets = pendingFolderNode.getState().listInsets;
    const result = listInsets.set({ start: top, end: mobileQuestDockHeight + youBarTotalHeight });
  }, items);
  let num = 0;
  if (importDefault(dependencyMap[34])("useGuildsBarProps")) {
    num = 1;
  }
  let closure_8 = num;
  const obj4 = arg1(dependencyMap[33]);
  const items1 = [closure_12, closure_6, closure_7];
  const stateFromStoresArray = arg1(dependencyMap[35]).useStateFromStoresArray(items1, () => {
    const unreadPrivateChannelIds = stateFromStores1.getUnreadPrivateChannelIds();
    const items = [youBarTotalHeight, youBarTotalHeight1];
    return arg0(token[36]).filterOutMessageRequestsAndSpamById(unreadPrivateChannelIds, items);
  }, []);
  let closure_9 = stateFromStoresArray;
  const obj5 = arg1(dependencyMap[35]);
  const items2 = [closure_4];
  const stateFromStores = arg1(dependencyMap[35]).useStateFromStores(items2, () => bottom.isConnected());
  let closure_10 = stateFromStores;
  const obj6 = arg1(dependencyMap[35]);
  const items3 = [closure_8];
  const stateFromStoresArray1 = arg1(dependencyMap[35]).useStateFromStoresArray(items3, () => num.getGeoRestrictedGuilds());
  let closure_11 = stateFromStoresArray1;
  const obj7 = arg1(dependencyMap[35]);
  const items4 = [closure_5];
  const stateFromStores1 = arg1(dependencyMap[35]).useStateFromStores(items4, () => mobileQuestDockHeight.lurkingGuildIds());
  closure_12 = stateFromStores1;
  const obj8 = arg1(dependencyMap[35]);
  const items5 = [closure_11, closure_10];
  const stateFromStoresArray2 = arg1(dependencyMap[35]).useStateFromStoresArray(items5, () => {
    const guildIds = stateFromStoresArray1.getGuildIds();
    return guildIds.filter((arg0) => currentUserGuest.isCurrentUserGuest(arg0));
  });
  let closure_13 = stateFromStoresArray2;
  const obj9 = arg1(dependencyMap[35]);
  const items6 = [closure_14];
  const stateFromStores2 = arg1(dependencyMap[35]).useStateFromStores(items6, () => ({ guildsNFolders: guildsNFolders.getFastListGuildFolders(), version: guildsNFolders.getGuildsTree().version }), [], importDefault(dependencyMap[37]));
  const guildsNFolders = stateFromStores2.guildsNFolders;
  closure_14 = guildsNFolders;
  const tmp13 = importDefault(dependencyMap[38])();
  const expanded = tmp13.expanded;
  const GuildsNodeType = expanded;
  const pendingFolderNode = tmp13.pendingFolderNode;
  let closure_16 = pendingFolderNode;
  const obj10 = arg1(dependencyMap[35]);
  const items7 = [closure_9];
  const stateFromStores3 = arg1(dependencyMap[35]).useStateFromStores(items7, () => stateFromStoresArray.totalUnavailableGuilds);
  const items8 = [top, mobileQuestDockHeight, bottom, youBarTotalHeight, youBarTotalHeight1, token];
  const memo = React.useMemo(() => {
    let obj = {};
    obj = { top: 3 * token };
    if (youBarTotalHeight > 0) {
      let diff = youBarTotalHeight - 16;
    } else {
      diff = bottom + 3 * token;
    }
    obj.bottom = diff;
    obj.scrollIndicatorInsets = obj;
    obj.insetStart = top;
    obj.insetEnd = mobileQuestDockHeight + 2 * token + youBarTotalHeight1;
    obj.chunkBase = arg0(token[39]).getWindowDimensions().height;
    return obj;
  }, items8);
  const items9 = [, , ];
  ({ insetStart: arr10[0], insetEnd: arr10[1] } = memo);
  items9[2] = arg0;
  const callback = React.useCallback((arg0, arg1) => {
    if (null != arg0) {
      const tmp3 = callback2(arg0);
      if (null != tmp3) {
        const current2 = arg0.current;
        if (null != current2) {
          const obj = {};
          const merged = Object.assign(tmp3);
          obj["orientation"] = "visible";
          obj["paddingStart"] = memo.insetStart;
          obj["paddingEnd"] = memo.insetEnd;
          current2.scrollToLocation(obj);
        }
      }
    } else {
      const current = arg0.current;
      if (null != current) {
        current.scrollTo(0, arg1);
      }
    }
  }, items9);
  importDefault(dependencyMap[40])(callback);
  const memo1 = React.useMemo(() => {
    const guildId = stateFromStoresArray2.getGuildId();
    let tmp2;
    if (null != guildId) {
      tmp2 = callback2(guildId);
    }
    if (null != tmp2) {
      const obj = {};
      ({ item: obj.initialScrollItem, section: obj.initialScrollSection } = tmp2);
      return obj;
    }
  }, []);
  const jsx = memo1;
  const items10 = [num, pendingFolderNode, stateFromStores1, stateFromStoresArray2, stateFromStoresArray, stateFromStoresArray1, stateFromStores3, stateFromStores, guildsNFolders, memo1, stateFromStores2.version, expanded, token, tmp];
  obj = {
    listProps: memo,
    listDataProps: React.useMemo(() => {
      let iter2;
      const items = [false, num];
      let num = 0;
      if (null != pendingFolderNode) {
        let num2 = 1;
        if (expanded) {
          num2 = pendingFolderNode.children.length;
        }
        num = num2;
      }
      items[2] = num;
      items[3] = stateFromStores1.length;
      items[4] = stateFromStoresArray2.length;
      items[5] = Math.min(stateFromStoresArray.length, 10);
      items[6] = 1;
      const tmp3 = callback(guildsNFolders);
      let iter = tmp3();
      if (!iter.done) {
        do {
          let value = iter.value;
          let tmp4 = closure_15;
          if (value.type === closure_15.GUILD) {
            let arr = items.push(1);
          } else {
            let tmp5 = closure_15;
            if (value.type === closure_15.FOLDER) {
              let push = items.push;
              if (value.expanded) {
                arr = push(value.children.length);
              } else {
                let arr1 = push(1);
              }
            }
          }
          iter2 = tmp3();
          iter = iter2;
        } while (!iter2.done);
      }
      if (stateFromStoresArray1.length > 0) {
        items.push(stateFromStoresArray1.length);
      }
      const items1 = [];
      const arg0 = items1;
      if (stateFromStores3 > 0) {
        items1.push("unavailable-guilds");
      }
      let tmp12 = stateFromStores;
      if (stateFromStores) {
        tmp12 = 0 === guildsNFolders.length;
      }
      if (tmp12) {
        tmp12 = 0 === stateFromStores3;
      }
      if (tmp12) {
        items1.push("empty-nux");
      }
      items1.push("create-join-guild");
      const obj = {};
      const merged = Object.assign(memo1);
      obj["sections"] = items;
      obj["sectionSize"] = function sectionSize(arg0) {
        if (arg0 !== constants2.PENDING_JOIN_REQUESTS) {
          let num = 0;
          if (arg0 >= constants2.GUILDS) {
            let num2 = 0;
            if (null != tmp[arg0 - closure_17.GUILDS]) {
              num2 = 0;
              if (tmp7.type === constants.FOLDER) {
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
      obj["itemSize"] = function itemSize(section, row) {
        let guildsNFolders;
        let itemSize;
        let pendingFolderNode;
        ({ section, row, guildsNFolders, pendingFolderNode, itemSize } = { section, row, guildsNFolders: closure_14, pendingFolderNode: closure_16, privateChannelIds: closure_9, geoRestrictedGuilds: closure_11, itemSize: closure_1, itemMargin: closure_2 });
        let num = itemSize;
        if (constants2.MESSAGES !== section) {
          num = itemSize;
          if (constants2.FAVORITES !== section) {
            num = itemSize;
            if (constants2.LURKING_GUILDS !== section) {
              num = itemSize;
              if (constants2.GUEST_GUILDS !== section) {
                if (constants2.UNREAD_PRIVATE_CHANNELS === section) {
                  let num6 = -1;
                  if (null != row) {
                    num6 = row;
                  }
                  let num7 = 0;
                  if (null != tmp[num6]) {
                    num7 = itemSize;
                  }
                  num = num7;
                } else if (constants2.SEPARATOR === section) {
                  num = 1 + 2 * tmp3;
                } else if (constants2.PENDING_JOIN_REQUESTS === section) {
                  let num3 = 0;
                  if (null != row) {
                    num3 = 0;
                    if (null != pendingFolderNode) {
                      num3 = 0;
                      if (pendingFolderNode.expanded) {
                        num3 = 0;
                        if (null != pendingFolderNode.children[row]) {
                          num3 = itemSize;
                        }
                      }
                    }
                  }
                  num = num3;
                } else {
                  num = 0;
                  if (null != row) {
                    const diff = section - constants2.GUILDS;
                    if (guildsNFolders.length < diff) {
                      const element = guildsNFolders[diff];
                      let num2 = 0;
                      if (null != element) {
                        num2 = 0;
                        if (element.type !== constants.ROOT) {
                          if (element.type !== constants.GUILD) {
                            if (element.type !== constants.FOLDER) {
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
                      num = num2;
                    } else {
                      num = itemSize;
                    }
                  }
                }
              }
            }
          }
        }
        return num;
      };
      obj["footerSize"] = function footerSize() {
        return items1.length * closure_1 + 8;
      };
      obj["renderSection"] = function renderSection(arg0) {
        if (arg0 >= constants2.GUILDS) {
          let tmp5 = null;
          if (tmp[arg0 - closure_17.GUILDS].type === constants.FOLDER) {
            let obj = {};
            ({ id: obj2.id, expanded: obj2.expanded, name: obj2.name, color: obj2.color, children: obj2.childNodes } = tmp10);
            tmp5 = callback2(callback(closure_2[15]), obj);
          }
        } else {
          tmp5 = null;
          if (arg0 === constants2.PENDING_JOIN_REQUESTS) {
            tmp5 = null;
            if (null != tmp2) {
              obj = {};
              ({ id: obj.id, expanded: obj.expanded, children: obj.childNodes } = tmp2);
              tmp5 = callback2(callback(closure_2[16]), obj);
            }
          }
        }
        return tmp5;
      };
      obj["renderItem"] = function renderItem(arg0, arg1) {
        if (constants2.MESSAGES === arg0) {
          let tmp7 = callback2(callback(closure_2[17]), {});
        } else if (constants2.FAVORITES === arg0) {
          tmp7 = callback2(callback(closure_2[18]), {});
        } else if (constants2.LURKING_GUILDS === arg0) {
          let tmp41 = null;
          if (null != tmp2[arg1]) {
            let obj = { guildId: tmp40 };
            tmp41 = callback2(callback(closure_2[19]), obj);
          }
          tmp7 = tmp41;
        } else if (constants2.GUEST_GUILDS === arg0) {
          let tmp36 = null;
          if (null != tmp3[arg1]) {
            obj = { guildId: tmp35 };
            tmp36 = callback2(callback(closure_2[19]), obj);
          }
          tmp7 = tmp36;
        } else if (constants2.UNREAD_PRIVATE_CHANNELS === arg0) {
          let tmp31 = null;
          if (null != tmp[arg1]) {
            const obj1 = { channelId: tmp30 };
            tmp31 = callback2(callback(closure_2[20]), obj1);
          }
          tmp7 = tmp31;
        } else if (constants2.SEPARATOR === arg0) {
          tmp7 = callback2(callback(closure_2[21]), {});
        } else if (constants2.PENDING_JOIN_REQUESTS === arg0) {
          tmp7 = null;
          if (null != tmp5) {
            let tmp22 = null;
            if (null != tmp5.children[arg1]) {
              tmp22 = null;
              if (tmp21.type === constants.GUILD) {
                const obj2 = { guildId: tmp21.id };
                tmp22 = callback2(callback(closure_2[22]), obj2);
              }
            }
            tmp7 = tmp22;
          }
        } else {
          const diff = arg0 - constants2.GUILDS;
          if (diff >= arr.length) {
            let tmp16 = null;
            if (null != tmp4[arg1]) {
              const obj3 = { restrictedGuild: tmp15 };
              tmp16 = callback2(callback(closure_2[23]), obj3);
            }
            tmp7 = tmp16;
          } else {
            const element = arr[diff];
            tmp7 = null;
            if (null != element) {
              tmp7 = null;
              if (element.type !== constants.ROOT) {
                if (element.type !== constants.GUILD) {
                  let tmp9 = element;
                  if (element.type === constants.FOLDER) {
                    tmp9 = element.children[arg1];
                  }
                  let tmp10 = null;
                  if (null != tmp9) {
                    tmp10 = null;
                    if (tmp9.type === constants.GUILD) {
                      obj = { guildId: tmp9.id };
                      tmp10 = callback2(callback(closure_2[19]), obj);
                    }
                  }
                  tmp7 = tmp10;
                } else {
                  tmp7 = null;
                }
              }
            }
          }
        }
        return tmp7;
      };
      obj["renderFooter"] = function renderFooter() {
        return function renderFooterJSX(items1) {
          const obj = {
            children: items1.map((arg0) => {
              if ("unavailable-guilds" === arg0) {
                return callback2(callback(closure_2[25]), {}, arg0);
              } else if ("empty-nux" === arg0) {
                return callback2(callback(closure_2[26]), {}, arg0);
              } else if ("create-join-guild" === arg0) {
                return callback2(callback(closure_2[27]), {}, arg0);
              }
            })
          };
          return callback2(callback(closure_2[24]), obj);
        }(items1);
      };
      obj["getRecyclerKey"] = function getRecyclerKey(ITEM, section, item) {
        if (section >= constants2.GUILDS) {
          const element = closure_14[section - closure_17.GUILDS];
          if (null != element) {
            if (element.type !== constants.ROOT) {
              let tmp4 = element;
              if (element.type === constants.FOLDER) {
                if (null == item) {
                  const _HermesInternal2 = HermesInternal;
                  return "" + element.id;
                } else {
                  tmp4 = element.children[item];
                }
              }
              const _HermesInternal = HermesInternal;
              return "" + tmp4.id;
            }
          }
        }
      };
      obj["renderAccessory"] = function renderAccessory(self) {
        return callback2(callback(closure_2[28]), { fastList: self });
      };
      obj["getAnchorIdFromIndex"] = function getAnchorIdFromIndex(section, item) {
        let guildsNFolders;
        let pendingFolderNode;
        if (null == store.getState().dropSpecs) {
          if (null == store.getState().dragSpecs) {
            const obj = { section, item, lurkingGuildsIds: closure_12, guestGuildIds: closure_13, privateChannelIds: closure_9, guildsNFolders: closure_14, pendingFolderNode: store, geoRestrictedGuilds: closure_11 };
            ({ section, item, guildsNFolders, pendingFolderNode } = obj);
            if (constants2.MESSAGES === section) {
              let SEPARATOR = constants3.MESSAGES;
            } else if (constants2.FAVORITES === section) {
              SEPARATOR = constants3.FAVORITES;
            } else if (constants2.PENDING_JOIN_REQUESTS === section) {
              if (null == item) {
                SEPARATOR = constants3.PENDING_JOIN_REQUESTS;
              } else {
                let id;
                if (null != pendingFolderNode) {
                  if (null != pendingFolderNode.children[item]) {
                    id = tmp32.id;
                  }
                }
                let combined;
                if (null != id) {
                  const _HermesInternal5 = HermesInternal;
                  combined = "" + constants3.PENDING_JOIN_REQUESTS + ":" + id;
                }
                SEPARATOR = combined;
              }
            } else if (constants2.LURKING_GUILDS === section) {
              if (null == item) {
                let LURKING_GUILDS = constants3.LURKING_GUILDS;
              } else {
                const _HermesInternal4 = HermesInternal;
                LURKING_GUILDS = "" + constants3.LURKING_GUILDS + ":" + tmp10[item];
              }
              SEPARATOR = LURKING_GUILDS;
            } else if (constants2.GUEST_GUILDS === section) {
              if (null == item) {
                let GUEST_GUILDS = constants3.GUEST_GUILDS;
              } else {
                const _HermesInternal3 = HermesInternal;
                GUEST_GUILDS = "" + constants3.GUEST_GUILDS + ":" + tmp11[item];
              }
              SEPARATOR = GUEST_GUILDS;
            } else if (constants2.UNREAD_PRIVATE_CHANNELS === section) {
              if (null == item) {
                let UNREAD_PRIVATE_CHANNELS = constants3.UNREAD_PRIVATE_CHANNELS;
              } else {
                const _HermesInternal2 = HermesInternal;
                UNREAD_PRIVATE_CHANNELS = "" + constants3.UNREAD_PRIVATE_CHANNELS + ":" + tmp12[item];
              }
              SEPARATOR = UNREAD_PRIVATE_CHANNELS;
            } else if (constants2.SEPARATOR === section) {
              SEPARATOR = constants3.SEPARATOR;
            } else {
              const GUILDS = constants2.GUILDS;
              const diff = section - constants2.GUILDS;
              if (null == guildsNFolders[diff]) {
                let tmp16;
                if (diff >= guildsNFolders.length) {
                  if (null != item) {
                    let id1;
                    if (null != tmp13[item]) {
                      id1 = tmp17.id;
                    }
                    tmp16 = id1;
                  }
                }
                id = tmp16;
              } else if (null == item) {
                id = tmp48.id;
              } else if (null != tmp48.children[item]) {
                id = tmp15.id;
              }
              if (null != id) {
                const _HermesInternal = HermesInternal;
                SEPARATOR = "" + constants3.GUILDS + ":" + id;
              }
            }
            return SEPARATOR;
          }
        }
      };
      obj["getAnchorIndexFromId"] = function getAnchorIndexFromId(id) {
        let pendingFolderNode;
        let obj = { id, lurkingGuildsIds: closure_12, guestGuildIds: closure_13, privateChannelIds: closure_9, guildsNFolders: closure_14, pendingFolderNode: closure_16, geoRestrictedGuilds: closure_11 };
        ({ id, pendingFolderNode } = obj);
        if (constants3.MESSAGES === id) {
          obj = { section: constants2.MESSAGES };
          let obj7 = obj;
        } else if (constants3.FAVORITES === id) {
          obj = { section: constants2.FAVORITES };
          obj7 = obj;
        } else if (constants3.PENDING_JOIN_REQUESTS === id) {
          const obj1 = { section: constants2.PENDING_JOIN_REQUESTS };
          obj7 = obj1;
        } else if (constants3.LURKING_GUILDS === id) {
          const obj2 = { section: constants2.LURKING_GUILDS };
          obj7 = obj2;
        } else if (constants3.GUEST_GUILDS === id) {
          const obj3 = { section: constants2.GUEST_GUILDS };
          obj7 = obj3;
        } else if (constants3.UNREAD_PRIVATE_CHANNELS === id) {
          const obj4 = { section: constants2.UNREAD_PRIVATE_CHANNELS };
          obj7 = obj4;
        } else if (constants3.SEPARATOR === id) {
          const obj5 = { section: constants2.SEPARATOR };
          obj7 = obj5;
        } else if (id.startsWith(constants3.LURKING_GUILDS)) {
          const tmp46 = callback3(tmp);
          const iter18 = tmp46();
          let iter19 = iter18;
          let num8 = 0;
          if (!iter18.done) {
            while (!callback4(constants3.LURKING_GUILDS, id, iter19.value)) {
              num8 = num8 + 1;
              let iter20 = tmp46();
              iter19 = iter20;
            }
            const obj6 = { section: constants2.LURKING_GUILDS, item: num8 };
            obj7 = obj6;
          }
        } else {
          if (id.startsWith(constants3.PENDING_JOIN_REQUESTS)) {
            if (null != pendingFolderNode) {
              const tmp66 = callback3(pendingFolderNode.children);
              const iter21 = tmp66();
              let iter2 = iter21;
              let num = 0;
              if (!iter21.done) {
                while (!callback4(constants3.PENDING_JOIN_REQUESTS, id, iter2.value.id)) {
                  num = num + 1;
                  let iter = tmp66();
                  iter2 = iter;
                }
                obj7 = { section: constants2.PENDING_JOIN_REQUESTS, item: num };
              }
            }
          }
          if (id.startsWith(constants3.GUEST_GUILDS)) {
            const tmp40 = callback3(tmp2);
            const iter15 = tmp40();
            let iter16 = iter15;
            let num7 = 0;
            if (!iter15.done) {
              while (!callback4(constants3.GUEST_GUILDS, id, iter16.value)) {
                num7 = num7 + 1;
                let iter17 = tmp40();
                iter16 = iter17;
              }
              const obj8 = { section: constants2.GUEST_GUILDS, item: num7 };
              obj7 = obj8;
            }
          } else {
            if (id.startsWith(constants3.UNREAD_PRIVATE_CHANNELS)) {
              const tmp15 = callback3(tmp3);
              const iter3 = tmp15();
              let iter4 = iter3;
              let num2 = 0;
              if (!iter3.done) {
                while (!callback4(constants3.UNREAD_PRIVATE_CHANNELS, id, iter4.value)) {
                  num2 = num2 + 1;
                  let iter5 = tmp15();
                  iter4 = iter5;
                }
                const obj9 = { section: constants2.UNREAD_PRIVATE_CHANNELS, item: num2 };
                obj7 = obj9;
              }
            }
            if (id.startsWith(constants3.GUILDS)) {
              const tmp22 = callback3(tmp4);
              const iter6 = tmp22();
              let iter7 = iter6;
              let num3 = 0;
              let num4 = 0;
              if (iter6.done) {
                const tmp34 = callback3(tmp5);
                const iter12 = tmp34();
                let num6 = 0;
                let iter13 = iter12;
                if (!iter12.done) {
                  while (!callback4(constants3.GUILDS, id, iter13.value.id)) {
                    num6 = num6 + 1;
                    let iter14 = tmp34();
                    iter13 = iter14;
                  }
                  const obj10 = { section: num4 + constants2.GUILDS, item: num6 };
                  obj7 = obj10;
                }
              } else {
                const value = iter7.value;
                while (!callback4(constants3.GUILDS, id, value.id)) {
                  let tmp26 = callback3;
                  let tmp27 = callback3(value.children);
                  let iter8 = tmp27();
                  let num5 = 0;
                  let iter9 = iter8;
                  if (iter8.done) {
                    num3 = num3 + 1;
                    let iter11 = tmp22();
                    iter7 = iter11;
                    num4 = num3;
                  } else {
                    let tmp28 = callback4;
                    let tmp29 = constants3;
                    let tmp30 = num5;
                    while (!callback4(constants3.GUILDS, id, iter9.value.id)) {
                      num5 = num5 + 1;
                      let iter10 = tmp27();
                      iter9 = iter10;
                      continue;
                    }
                    let obj11 = {};
                    let tmp31 = constants2;
                    obj11.section = num3 + constants2.GUILDS;
                    obj11.item = num5;
                    obj7 = obj11;
                  }
                }
                const obj12 = { section: num3 + constants2.GUILDS };
                obj7 = obj12;
              }
            }
          }
        }
        return obj7;
      };
      return obj;
    }, items10)
  };
  return obj;
};
