// Module ID: 14392
// Function ID: 14393
// Name: useChannelMoveAction
// Dependencies: [7280, 4885, 4946, 4956, 5045, 6775, 1383, 14393, 1072, 504, 4888, 14394, 14396, 14395, 5652, 1113, 2]
// Exports: default

// Module 14392 (useChannelMoveAction)
import Constants from "Constants" /* 1072 */;
import getChannelMoveBlockerDefault from "getChannelMoveBlocker" /* 14394 */;
import GuildCategoryStore from "GuildCategoryStore" /* 7280 */;
import GuildStore from "GuildStore" /* 4885 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import SelectedGuildStore from "SelectedGuildStore" /* 5045 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 6775 */;
import UserStore from "UserStore" /* 1383 */;
import getChannelListRecord from "getChannelListRecord" /* 14393 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, channel;

function areDestinationsEqual(arr, arg1) {
  let closure_0 = arg1;
  const tmp = arr.length === arg1.length && arr.every((id, index) => id.id === closure_0[index].id && id.label === closure_0[index].label && id.disabled === closure_0[index].disabled);
  return tmp;
}
const NULL_STRING_CHANNEL_ID = Constants.NULL_STRING_CHANNEL_ID;
let closure_12 = [];
const result = size.fileFinishedImporting("modules/channel_sorting/useChannelMoveAction.tsx");

export default function useChannelMoveAction(getGuildId) {
  let categories;
  let found;
  let guild;
  let intl;
  let listChannel;
  let string2;
  let t2;
  let tmp14;
  _require = getGuildId;
  let tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [SelectedGuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => guildId.getGuildId());
  let obj2 = require("FavoritesUtils");
  const isFavoritesGuildIdResult = obj2.isFavoritesGuildId(stateFromStores);
  let guildId = stateFromStores;
  if (!isFavoritesGuildIdResult) {
    guildId = getGuildId.getGuildId();
  }
  const items1 = [GuildCategoryStore, GuildStore, PermissionStore, UserGuildSettingsStore];
  const items2 = [guildId, getGuildId];
  let tmp6 = GuildCategoryStore;
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
  ({ categories, listChannel, guild } = stateFromStoresObject);
  const isBlocked = stateFromStoresObject.isBlocked;
  let isCategoryResult = listChannel.isCategory();
  const tmpResult4 = tmp(14396);
  const categoryKey = tmpResult4.getCategoryKey(listChannel.parent_id, categories);
  const tmp7 = GuildStore;
  const tmp8 = PermissionStore;
  if (listChannel.isCategory()) {
    let _categories = categories._categories;
    found = _categories.filter((channel) => channel.channel.id !== NULL_STRING_CHANNEL_ID);
  } else {
    const tmpResult5 = tmp(14396);
    found = tmpResult5.getSectionSiblings(listChannel, categories);
  }
  let tmp12 = null;
  if (found.length > 1) {
    tmp12 = { first: found[0], last: found[found.length - 1] };
    const obj3 = { first: found[0], last: found[found.length - 1] };
  }
  const items3 = [tmp6, tmp7, tmp8, UserStore, RelationshipStore];
  const items4 = [categories, isCategoryResult, categoryKey, isFavoritesGuildIdResult, guild];
  const tmpResult6 = tmp(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(items3, () => {
    let mapped;
    let tmp = isCategoryResult;
    if (tmp) {
      mapped = closure_2_12;
    } else {
      let tmp2 = categories;
      const _categories = categories._categories;
      const found = _categories.filter((channel) => {
        channel = channel.channel;
        let canViewChannelListResult = closure_1_0;
        if (!canViewChannelListResult) {
          let tmp6 = null;
          const canViewChannelList = isFavoritesGuildIdResult(listChannel[13]).canViewChannelList;
          isFavoritesGuildIdResult(listChannel[13]);
          if (channel.id !== closure_2_11) {
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
        if (channel.id !== closure_2_11) {
          tmp = channel;
        }
        const obj = { id: channel.id, label: obj2.computeChannelName(channel, closure_2_9, closure_2_6), disabled: tmp3 };
        tmp3 = channel.id === categoryKey;
        obj2 = isFavoritesGuildIdResult(listChannel[14]);
        const tmp2 = listChannel;
        if (!tmp3) {
          let tmp4 = closure_1_0;
          if (!tmp4) {
            tmp4 = null != guild && categories(tmp2[13])(tmp, tmp5);
            const tmp6 = null != guild && categories(tmp2[13])(tmp, tmp5);
          }
          tmp3 = !tmp4;
        }
        return obj;
      });
    }
    return mapped;
  }, items4, areDestinationsEqual);
  if (!isFavoritesGuildIdResult) {
    if (listChannel.isThread()) {
      return null;
    }
  }
  if (null != guildId) {
    if (!isBlocked) {
      if (!stateFromStores1.some((disabled) => !disabled.disabled)) {
        if (null == tmp12) {
          return null;
        }
      }
      if (!isCategoryResult) {
        isCategoryResult = categoryKey === NULL_STRING_CHANNEL_ID;
      }
      const obj4 = {
        label: intl.string(tmp(1113).t.A95Fzm),
        guildId,
        channel: listChannel,
        isFavorites: isFavoritesGuildIdResult,
        destinations: stateFromStores1,
        placements: tmp14,
        getDestinationMove(id) {
              let obj2;
              let tmp = null;
              if (id !== NULL_STRING_CHANNEL_ID) {
                tmp = id;
              }
              const obj = { targetParentId: tmp, updates: obj2.getChannelPlacementUpdates(listChannel, categories, id, "last") };
              obj2 = isFavoritesGuildIdResult(dependencyMap[12]);
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
              obj2 = isFavoritesGuildIdResult(dependencyMap[12]);
              return obj;
            }
      };
      intl = tmp(1113).intl;
      tmp14 = null;
      if (null != tmp12) {
        const intl2 = tmp(1113).intl;
        const string = intl2.string;
        const t = tmp(1113).t;
        const obj5 = { firstLabel: string(isCategoryResult ? t.IMqgs9 : t.Q9TKt6), lastLabel: string2(isCategoryResult ? t2["8fQe3x"] : t2["/Pkxmw"]), isFirst: tmp12.first.channel.id === listChannel.id, isLast: tmp12.last.channel.id === listChannel.id };
        const intl3 = tmp(1113).intl;
        string2 = intl3.string;
        t2 = tmp(1113).t;
        tmp14 = obj5;
      }
      return obj4;
    }
  }
  return null;
};
