// Module ID: 12695
// Function ID: 12696
// Name: useChannelMoveAction
// Dependencies: [6800, 2087, 4750, 4760, 4939, 5966, 1390, 12696, 1085, 558, 576, 504, 2090, 12697, 12699, 12698, 5421, 1126, 2]

// Module 12695 (useChannelMoveAction)
import Constants from "Constants" /* 1085 */;
import getChannelMoveBlockerDefault from "getChannelMoveBlocker" /* 12697 */;
import ChannelSortingUtils from "ChannelSortingUtils" /* 12699 */;
import GuildCategoryStore from "GuildCategoryStore" /* 6800 */;
import GuildStore_mod from "GuildStore" /* 2087 */;
import PermissionStore from "PermissionStore" /* 4750 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import SelectedGuildStore from "SelectedGuildStore" /* 4939 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5966 */;
import UserStore from "UserStore" /* 1390 */;
import getChannelListRecord from "getChannelListRecord" /* 12696 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

const f113052 = (channel) => channel.channel.id !== NULL_STRING_CHANNEL_ID;
function areDestinationsEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((id, index) => id.id === closure_0[index].id && id.label === closure_0[index].label && id.disabled === closure_0[index].disabled);
  return tmp;
}
let GuildStore = GuildStore_mod;
const NULL_STRING_CHANNEL_ID = Constants.NULL_STRING_CHANNEL_ID;
let closure_12 = [];
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelListContext(getGuildId) {
  let categories;
  let closure_1;
  let isBlocked;
  let listChannel;
  let tmp4;
  let tmp5;
  let tmp8;
  const _require = getGuildId;
  const tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(20);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SelectedGuildStore];
    const fn = function v() {
      return guildId.getGuildId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] !== stateFromStores) {
    const tmpResult3 = require("FavoritesUtils");
    const isFavoritesGuildIdResult = tmpResult3.isFavoritesGuildId(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isFavoritesGuildIdResult;
    tmp8 = isFavoritesGuildIdResult;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === getGuildId) {
    if (cResult[5] === tmp8) {
      let tmp10;
      let tmp12;
      if (cResult[6] === stateFromStores) {
        tmp10 = cResult[7];
      }
      importDefault = tmp10;
      const _Symbol = Symbol;
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildCategoryStore, GuildStore, , ];
        class I {
          constructor() {
            let tmp3;
            const obj = { categories: GuildCategoryStore.getCategories(closure_1), listChannel: tmp3, isBlocked: null != getChannelMoveBlockerDefault(getGuildId, closure_1), guild: GuildStore.getGuild(closure_1) };
            tmp3 = getChannelListRecord(closure_1, getGuildId.id);
            if (tmp3 == null) {
              tmp3 = tmp2;
            }
            return obj;
          }
        }
        items1[3] = UserGuildSettingsStore;
        cResult[8] = items1;
        tmp12 = items1;
      } else {
        tmp12 = cResult[8];
      }
      if (cResult[9] === getGuildId) {
        let tmp17;
        let tmp18;
        if (cResult[10] === tmp10) {
          tmp17 = cResult[11];
          tmp18 = cResult[12];
        }
        const tmpResult4 = require("get initialized");
        const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp12, tmp17, tmp18);
        ({ categories, listChannel, isBlocked } = stateFromStoresObject);
        class I {
          constructor() {
            let tmp3;
            const obj = { categories: GuildCategoryStore.getCategories(closure_1), listChannel: tmp3, isBlocked: null != getChannelMoveBlockerDefault(getGuildId, closure_1), guild: GuildStore.getGuild(closure_1) };
            tmp3 = getChannelListRecord(closure_1, getGuildId.id);
            if (tmp3 == null) {
              tmp3 = tmp2;
            }
            return obj;
          }
        }
        if (cResult[13] === categories) {
          if (cResult[14] === tmp20) {
            if (cResult[15] === isBlocked) {
              if (cResult[16] === tmp8) {
                if (cResult[17] === listChannel) {
                  let tmp21;
                  if (cResult[18] === tmp10) {
                    tmp21 = cResult[19];
                  }
                  return tmp21;
                }
              }
            }
          }
        }
        const obj2 = { isFavorites: tmp8, listGuildId: tmp10, categories, listChannel, isBlocked, guild: tmp20 };
        cResult[13] = categories;
        cResult[14] = tmp20;
        cResult[15] = isBlocked;
        cResult[16] = tmp8;
        cResult[17] = listChannel;
        cResult[18] = tmp10;
        cResult[19] = obj2;
        tmp21 = obj2;
      }
      class I {
        constructor() {
          let tmp3;
          const obj = { categories: GuildCategoryStore.getCategories(closure_1), listChannel: tmp3, isBlocked: null != getChannelMoveBlockerDefault(getGuildId, closure_1), guild: GuildStore.getGuild(closure_1) };
          tmp3 = getChannelListRecord(closure_1, getGuildId.id);
          if (tmp3 == null) {
            tmp3 = tmp2;
          }
          return obj;
        }
      }
      const items2 = [tmp10, getGuildId];
      cResult[9] = getGuildId;
      cResult[10] = tmp10;
      cResult[11] = I;
      cResult[12] = items2;
      tmp18 = items2;
      tmp17 = I;
    }
  }
  let guildId = stateFromStores;
  if (!tmp8) {
    guildId = getGuildId.getGuildId();
  }
  cResult[4] = getGuildId;
  cResult[5] = tmp8;
  cResult[6] = stateFromStores;
  cResult[7] = guildId;
  tmp10 = guildId;
}) : (function useChannelListContext(getGuildId) {
  const _require = getGuildId;
  const tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [SelectedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  const obj2 = require("FavoritesUtils");
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(stateFromStores);
  let guildId = stateFromStores;
  const tmp = _require;
  if (!isFavoritesGuildIdResult) {
    guildId = getGuildId.getGuildId();
  }
  const items1 = [GuildCategoryStore, GuildStore, PermissionStore, UserGuildSettingsStore];
  const items2 = [guildId, getGuildId];
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(items1, () => {
    let tmp3;
    const obj = { categories: GuildCategoryStore.getCategories(guildId), listChannel: tmp3, isBlocked: null != getChannelMoveBlockerDefault(getGuildId, guildId), guild: GuildStore.getGuild(guildId) };
    tmp3 = getChannelListRecord(guildId, getGuildId.id);
    if (tmp3 == null) {
      tmp3 = tmp2;
    }
    return obj;
  }, items2);
  return { isFavorites: isFavoritesGuildIdResult, listGuildId: guildId, categories: stateFromStoresObject.categories, listChannel: stateFromStoresObject.listChannel, isBlocked: stateFromStoresObject.isBlocked, guild: stateFromStoresObject.guild };
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useChannelMoveAction(arg0) {
  let categories;
  let isFavorites;
  let listChannel;
  let listGuildId;
  let string2;
  let t2;
  let tmp5;
  let tmp = isFavorites;
  let tmp2 = listChannel;
  let obj = isFavorites(listChannel[10]);
  const cResult = obj.c(38);
  let tmp4 = closure_14(arg0);
  isFavorites = tmp4.isFavorites;
  ({ listGuildId, categories } = tmp4);
  listChannel = tmp4.listChannel;
  const guild = tmp4.guild;
  const isBlocked = tmp4.isBlocked;
  if (cResult[0] !== listChannel) {
    const isCategoryResult = listChannel.isCategory();
    cResult[0] = listChannel;
    cResult[1] = isCategoryResult;
    tmp5 = isCategoryResult;
  } else {
    tmp5 = cResult[1];
  }
  let closure_4 = tmp5;
  if (cResult[2] === categories) {
    let tmp7;
    let found;
    if (cResult[3] === listChannel.parent_id) {
      tmp7 = cResult[4];
    }
    let closure_5 = tmp7;
    if (cResult[5] === categories) {
      let arr;
      let tmp10;
      let tmp13;
      if (cResult[6] === listChannel) {
        arr = cResult[7];
      }
      if (cResult[8] !== arr) {
        let tmp11 = null;
        if (arr.length > 1) {
          let obj2 = { first: arr[0], last: arr[arr.length - 1] };
          tmp11 = obj2;
        }
        cResult[8] = arr;
        cResult[9] = tmp11;
        tmp10 = tmp11;
      } else {
        tmp10 = cResult[9];
      }
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [guild, closure_4, closure_5, UserStore, RelationshipStore];
        cResult[10] = items;
        tmp13 = items;
      } else {
        tmp13 = cResult[10];
      }
      if (cResult[11] === categories) {
        if (cResult[12] === tmp7) {
          if (cResult[13] === guild) {
            if (cResult[14] === tmp5) {
              let tmp19;
              let tmp20;
              if (cResult[15] === isFavorites) {
                tmp19 = cResult[16];
                tmp20 = cResult[17];
              }
              const tmpResult = tmp(tmp2[11]);
              const stateFromStores = tmpResult.useStateFromStores(tmp13, tmp19, tmp20, areDestinationsEqual);
              if (!isFavorites) {
                if (listChannel.isThread()) {
                  return null;
                }
              }
              if (null != listGuildId) {
                if (!isBlocked) {
                  if (!stateFromStores.some((disabled) => !disabled.disabled)) {
                    if (null == tmp10) {
                      return null;
                    }
                  }
                  if (!tmp5) {
                    tmp5 = tmp7 === NULL_STRING_CHANNEL_ID;
                  }
                  if (cResult[18] === categories) {
                    let tmp29;
                    if (cResult[19] === listChannel) {
                      tmp29 = cResult[20];
                    }
                    if (cResult[21] === categories) {
                      if (cResult[22] === tmp7) {
                        let tmp30;
                        let tmp31;
                        if (cResult[23] === listChannel) {
                          tmp30 = cResult[24];
                        }
                        const _Symbol2 = Symbol;
                        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                          const intl = tmp(tmp2[17]).intl;
                          const stringResult = intl.string(tmp(tmp2[17]).t.A95Fzm);
                          cResult[25] = stringResult;
                          tmp31 = stringResult;
                        } else {
                          tmp31 = cResult[25];
                        }
                        if (cResult[26] === tmp5) {
                          if (cResult[27] === listChannel.id) {
                            let tmp33;
                            if (cResult[28] === tmp10) {
                              tmp33 = cResult[29];
                            }
                            if (cResult[30] === stateFromStores) {
                              if (cResult[31] === tmp29) {
                                if (cResult[32] === tmp30) {
                                  if (cResult[33] === isFavorites) {
                                    if (cResult[34] === listChannel) {
                                      if (cResult[35] === listGuildId) {
                                        let tmp35;
                                        if (cResult[36] === tmp33) {
                                          tmp35 = cResult[37];
                                        }
                                        return tmp35;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj3 = { label: tmp31, guildId: listGuildId, channel: listChannel, isFavorites, destinations: stateFromStores, placements: tmp33, getDestinationMove: tmp29, getPlacementMove: tmp30 };
                            cResult[30] = stateFromStores;
                            cResult[31] = tmp29;
                            cResult[32] = tmp30;
                            cResult[33] = isFavorites;
                            cResult[34] = listChannel;
                            cResult[35] = listGuildId;
                            cResult[36] = tmp33;
                            cResult[37] = obj3;
                            tmp35 = obj3;
                          }
                        }
                        let tmp34 = null;
                        if (null != tmp10) {
                          const intl2 = tmp(tmp2[17]).intl;
                          const string = intl2.string;
                          const t = tmp(tmp2[17]).t;
                          const obj4 = { firstLabel: string(tmp5 ? t.IMqgs9 : t.Q9TKt6), lastLabel: string2(tmp5 ? t2["8fQe3x"] : t2["/Pkxmw"]), isFirst: tmp10.first.channel.id === listChannel.id, isLast: tmp10.last.channel.id === listChannel.id };
                          const intl3 = tmp(tmp2[17]).intl;
                          string2 = intl3.string;
                          t2 = tmp(tmp2[17]).t;
                          tmp34 = obj4;
                        }
                        cResult[26] = tmp5;
                        cResult[27] = listChannel.id;
                        cResult[28] = tmp10;
                        cResult[29] = tmp34;
                        tmp33 = tmp34;
                      }
                    }
                    function getPlacementMove(arg0) {
                      let obj2;
                      let parent_id = listChannel.parent_id;
                      const tmp = listChannel;
                      if (parent_id == null) {
                        parent_id = null;
                      }
                      const obj = { targetParentId: parent_id, updates: obj2.getChannelPlacementUpdates(tmp, categories, closure_5, arg0) };
                      obj2 = ChannelSortingUtils;
                      return obj;
                    }
                    cResult[21] = categories;
                    cResult[22] = tmp7;
                    cResult[23] = listChannel;
                    cResult[24] = getPlacementMove;
                    tmp30 = getPlacementMove;
                  }
                  function getDestinationMove(categoryKey) {
                    let obj2;
                    let tmp = null;
                    if (categoryKey !== NULL_STRING_CHANNEL_ID) {
                      tmp = categoryKey;
                    }
                    const obj = { targetParentId: tmp, updates: obj2.getChannelPlacementUpdates(listChannel, categories, categoryKey, "last") };
                    obj2 = ChannelSortingUtils;
                    return obj;
                  }
                  cResult[18] = categories;
                  cResult[19] = listChannel;
                  cResult[20] = getDestinationMove;
                  tmp29 = getDestinationMove;
                }
              }
              return null;
            }
          }
        }
      }
      const fn = function x() {
        let mapped;
        let tmp = closure_4;
        if (tmp) {
          mapped = closure_12;
        } else {
          let tmp2 = categories;
          const _categories = categories._categories;
          const found = _categories.filter((channel) => {
            channel = channel.channel;
            let canViewChannelListResult = closure_1_0;
            if (!canViewChannelListResult) {
              let tmp6 = null;
              const canViewChannelList = isFavorites(listChannel[15]).canViewChannelList;
              isFavorites(listChannel[15]);
              if (channel.id !== NULL_STRING_CHANNEL_ID) {
                tmp6 = channel;
              }
              canViewChannelListResult = canViewChannelList(tmp6);
            }
            return canViewChannelListResult;
          });
          mapped = found.map((channel) => {
            let obj2;
            let tmp3;
            channel = channel.channel;
            let tmp = null;
            if (channel.id !== NULL_STRING_CHANNEL_ID) {
              tmp = channel;
            }
            const obj = { id: channel.id, label: obj2.computeChannelName(channel, UserStore, RelationshipStore), disabled: tmp3 };
            tmp3 = channel.id === closure_1_5;
            obj2 = isFavorites(listChannel[16]);
            const tmp2 = listChannel;
            if (!tmp3) {
              let tmp4 = closure_1_0;
              if (!tmp4) {
                tmp4 = null != guild && categories(tmp2[15])(tmp, tmp5);
                const tmp6 = null != guild && categories(tmp2[15])(tmp, tmp5);
              }
              tmp3 = !tmp4;
            }
            return obj;
          });
        }
        return mapped;
      };
      const items1 = [categories, tmp5, tmp7, isFavorites, guild];
      cResult[11] = categories;
      cResult[12] = tmp7;
      cResult[13] = guild;
      cResult[14] = tmp5;
      cResult[15] = isFavorites;
      cResult[16] = fn;
      cResult[17] = items1;
      tmp20 = items1;
      tmp19 = fn;
    }
    if (listChannel.isCategory()) {
      let _categories = categories._categories;
      found = _categories.filter(f113052);
    } else {
      const tmpResult3 = tmp(tmp2[14]);
      found = tmpResult3.getSectionSiblings(listChannel, categories);
    }
    cResult[5] = categories;
    cResult[6] = listChannel;
    cResult[7] = found;
    arr = found;
  }
  const tmpResult4 = tmp(tmp2[14]);
  const categoryKey = tmpResult4.getCategoryKey(listChannel.parent_id, categories);
  cResult[2] = categories;
  cResult[3] = listChannel.parent_id;
  cResult[4] = categoryKey;
  tmp7 = categoryKey;
}) : (function useChannelMoveAction(arg0) {
  let categories;
  let found;
  let intl;
  let listGuildId;
  let string2;
  let t2;
  let tmp8;
  let tmp = closure_14(arg0);
  const isFavorites = tmp.isFavorites;
  ({ listGuildId, categories } = tmp);
  const listChannel = tmp.listChannel;
  const guild = tmp.guild;
  const isBlocked = tmp.isBlocked;
  let isCategoryResult = listChannel.isCategory();
  GuildStore = isCategoryResult;
  let tmp3 = isFavorites;
  let tmp4 = listChannel;
  let obj = isFavorites(listChannel[14]);
  const categoryKey = obj.getCategoryKey(listChannel.parent_id, categories);
  if (listChannel.isCategory()) {
    let _categories = categories._categories;
    found = _categories.filter(f113052);
  } else {
    const tmp3Result = tmp3(tmp4[14]);
    found = tmp3Result.getSectionSiblings(listChannel, categories);
  }
  let tmp6 = null;
  if (found.length > 1) {
    let obj2 = { first: found[0], last: found[found.length - 1] };
    tmp6 = obj2;
  }
  const items = [guild, GuildStore, categoryKey, UserStore, RelationshipStore];
  const items1 = [categories, isCategoryResult, categoryKey, isFavorites, guild];
  const tmp3Result2 = tmp3(tmp4[11]);
  const stateFromStores = tmp3Result2.useStateFromStores(items, () => {
    let mapped;
    let tmp = GuildStore;
    if (tmp) {
      mapped = closure_12;
    } else {
      let tmp2 = categories;
      const _categories = categories._categories;
      const found = _categories.filter((channel) => {
        channel = channel.channel;
        let canViewChannelListResult = closure_1_0;
        if (!canViewChannelListResult) {
          let tmp6 = null;
          const canViewChannelList = isFavorites(listChannel[15]).canViewChannelList;
          isFavorites(listChannel[15]);
          if (channel.id !== NULL_STRING_CHANNEL_ID) {
            tmp6 = channel;
          }
          canViewChannelListResult = canViewChannelList(tmp6);
        }
        return canViewChannelListResult;
      });
      mapped = found.map((channel) => {
        let obj2;
        let tmp3;
        channel = channel.channel;
        let tmp = null;
        if (channel.id !== NULL_STRING_CHANNEL_ID) {
          tmp = channel;
        }
        const obj = { id: channel.id, label: obj2.computeChannelName(channel, UserStore, RelationshipStore), disabled: tmp3 };
        tmp3 = channel.id === categoryKey;
        obj2 = isFavorites(listChannel[16]);
        const tmp2 = listChannel;
        if (!tmp3) {
          let tmp4 = closure_1_0;
          if (!tmp4) {
            tmp4 = null != guild && categories(tmp2[15])(tmp, tmp5);
            const tmp6 = null != guild && categories(tmp2[15])(tmp, tmp5);
          }
          tmp3 = !tmp4;
        }
        return obj;
      });
    }
    return mapped;
  }, items1, areDestinationsEqual);
  if (!isFavorites) {
    if (listChannel.isThread()) {
      return null;
    }
  }
  if (null != listGuildId) {
    if (!isBlocked) {
      if (!stateFromStores.some((disabled) => !disabled.disabled)) {
        if (null == tmp6) {
          return null;
        }
      }
      if (!isCategoryResult) {
        isCategoryResult = categoryKey === NULL_STRING_CHANNEL_ID;
      }
      const obj3 = {
        label: intl.string(tmp3(tmp4[17]).t.A95Fzm),
        guildId: listGuildId,
        channel: listChannel,
        isFavorites,
        destinations: stateFromStores,
        placements: tmp8,
        getDestinationMove(categoryKey) {
              let obj2;
              let tmp = null;
              if (categoryKey !== NULL_STRING_CHANNEL_ID) {
                tmp = categoryKey;
              }
              const obj = { targetParentId: tmp, updates: obj2.getChannelPlacementUpdates(listChannel, categories, categoryKey, "last") };
              obj2 = ChannelSortingUtils;
              return obj;
            },
        getPlacementMove(arg0) {
              let obj2;
              let parent_id = listChannel.parent_id;
              const tmp = listChannel;
              if (parent_id == null) {
                parent_id = null;
              }
              const obj = { targetParentId: parent_id, updates: obj2.getChannelPlacementUpdates(tmp, categories, categoryKey, arg0) };
              obj2 = ChannelSortingUtils;
              return obj;
            }
      };
      intl = tmp3(tmp4[17]).intl;
      tmp8 = null;
      if (null != tmp6) {
        const intl2 = tmp3(tmp4[17]).intl;
        const string = intl2.string;
        const t = tmp3(tmp4[17]).t;
        const obj4 = { firstLabel: string(isCategoryResult ? t.IMqgs9 : t.Q9TKt6), lastLabel: string2(isCategoryResult ? t2["8fQe3x"] : t2["/Pkxmw"]), isFirst: tmp6.first.channel.id === listChannel.id, isLast: tmp6.last.channel.id === listChannel.id };
        const intl3 = tmp3(tmp4[17]).intl;
        string2 = intl3.string;
        t2 = tmp3(tmp4[17]).t;
        tmp8 = obj4;
      }
      return obj3;
    }
  }
  return null;
});
const result = size.fileFinishedImporting("modules/channel_sorting/useChannelMoveAction.tsx");

export default tmp2;
