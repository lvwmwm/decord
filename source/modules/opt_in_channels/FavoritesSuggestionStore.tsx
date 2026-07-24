// Module ID: 6762
// Function ID: 52976
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1348, 1906, 4325, 566, 686, 2]

// Module 6762 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_1 from "_isNativeReflectConstruct";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let _isNativeReflectConstruct = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _isNativeReflectConstruct;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange() {
  channelId = channelId.getChannelId();
  if (null != channelId) {
    channel = channel.getChannel(channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const guild_id = channel.guild_id;
        if (null == dependencyMap3[channelId]) {
          dependencyMap3[channelId] = 0;
        }
        if (!channel.isThread()) {
          dependencyMap3[channelId] = dependencyMap3[channelId] + 1;
          if (null == dependencyMap[guild_id]) {
            const _Set = Set;
            const set = new Set();
            dependencyMap[guild_id] = set;
          }
          if (closure_7.isFavorite(guild_id, channelId)) {
            dependencyMap[guild_id].delete(channelId);
            const obj3 = dependencyMap[guild_id];
          } else {
            if (null == dependencyMap2[guild_id]) {
              if (dependencyMap3[channelId] > 50) {
                dependencyMap[guild_id].add(channelId);
                const obj2 = dependencyMap[guild_id];
              }
            } else {
              const obj = dependencyMap2[guild_id];
            }
            return flag;
          }
        }
        delete tmp[tmp2];
        if (null != dependencyMap[guild_id]) {
          dependencyMap[guild_id].delete(channelId);
          const obj4 = dependencyMap[guild_id];
        }
      }
    }
  }
}
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let tmp2 = ((PersistedStore) => {
  class FavoritesSuggestionStore {
    constructor() {
      self = this;
      tmp = FavoritesSuggestionStore(this, FavoritesSuggestionStore);
      obj = outer1_3(FavoritesSuggestionStore);
      tmp2 = outer1_2;
      if (outer1_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(FavoritesSuggestionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let channelOpensByChannelId;
      let dismissedSuggestions;
      let suggestedChannels;
      this.waitFor(outer1_5, outer1_6, outer1_7);
      const items = [outer1_6];
      this.syncWith(items, outer1_12);
      if (null != arg0) {
        ({ suggestedChannels, dismissedSuggestions, channelOpensByChannelId } = arg0);
        if (null != suggestedChannels) {
          for (const key10016 in suggestedChannels) {
            let tmp13 = key10016;
            let _Set3 = Set;
            let tmp15 = new.target;
            let tmp16 = new.target;
            let tmp14 = outer1_8;
            let set = new Set(suggestedChannels[key10016]);
            let set1 = set;
            if (null == set) {
              let _Set = Set;
              let tmp5 = new.target;
              let tmp6 = new.target;
              set1 = new Set();
            }
            tmp14[key10016] = set1;
            continue;
          }
        }
        if (null != dismissedSuggestions) {
          for (const key10026 in dismissedSuggestions) {
            let tmp18 = key10026;
            let _Set4 = Set;
            let tmp20 = new.target;
            let tmp21 = new.target;
            let tmp19 = outer1_9;
            let set2 = new Set(dismissedSuggestions[key10026]);
            let set3 = set2;
            if (null == set2) {
              let _Set2 = Set;
              let tmp10 = new.target;
              let tmp11 = new.target;
              set3 = new Set();
            }
            tmp19[key10026] = set3;
            continue;
          }
        }
        if (null == channelOpensByChannelId) {
          channelOpensByChannelId = {};
        }
        const outer1_10 = channelOpensByChannelId;
      }
    }
  };
  let items = [obj, , ];
  obj = {
    key: "getSuggestedChannelId",
    value() {
      return null;
    }
  };
  items[1] = obj;
  obj = {
    key: "getState",
    value() {
      return { suggestedChannels: {}, dismissedSuggestions: {}, channelOpensByChannelId: {} };
    }
  };
  items[2] = obj;
  return callback(FavoritesSuggestionStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "FavoritesSuggestionStore";
tmp2.persistKey = "FavoritesSuggestionStore";
tmp2 = new tmp2(require("dispatcher"), {
  DISMISS_FAVORITE_SUGGESTION: function handleFavoriteSuggestionDimissed(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (null == dependencyMap2[guildId]) {
      const _Set = Set;
      const set = new Set();
      dependencyMap2[guildId] = set;
    }
    dependencyMap2[guildId].add(channelId);
    dependencyMap[guildId].delete(channelId);
    return true;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/opt_in_channels/FavoritesSuggestionStore.tsx");

export default tmp2;
