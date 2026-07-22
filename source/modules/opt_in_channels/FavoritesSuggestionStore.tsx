// Module ID: 6757
// Function ID: 52922
// Name: _isNativeReflectConstruct
// Dependencies: [664, 484, 1212, 2198, 2, 5, 6767, 6765, 653, 6768, 686]

// Module 6757 (_isNativeReflectConstruct)
import module_664 from "module_664";
import getAuthenticationPath from "getAuthenticationPath";
import getSystemLocale from "getSystemLocale";
import messagesProxy from "messagesProxy";
import result2 from "result2";
import asyncGeneratorStep from "asyncGeneratorStep";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import items from "items";
import dispatcher from "dispatcher";

function _isNativeReflectConstruct() {
  let module_664 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return module_664;
  }
  const result = _isNativeReflectConstruct();
}
function handleChange() {
  const channelId = channelId.getChannelId();
  if (null != channelId) {
    const channel = channel.getChannel(channelId);
    if (null != channel) {
      if (null != channel.guild_id) {
        const guild_id = channel.guild_id;
        if (null == closure_10[channelId]) {
          closure_10[channelId] = 0;
        }
        if (!channel.isThread()) {
          closure_10[channelId] = closure_10[channelId] + 1;
          if (null == closure_8[guild_id]) {
            const _Set = Set;
            const set = new Set();
            closure_8[guild_id] = set;
          }
          if (items.isFavorite(guild_id, channelId)) {
            closure_8[guild_id].delete(channelId);
            const obj3 = closure_8[guild_id];
          } else {
            if (null == closure_9[guild_id]) {
              if (closure_10[channelId] > 50) {
                closure_8[guild_id].add(channelId);
                const obj2 = closure_8[guild_id];
              }
            } else {
              const obj = closure_9[guild_id];
            }
            return flag;
          }
        }
        delete r0[r3];
        if (null != closure_8[guild_id]) {
          closure_8[guild_id].delete(channelId);
          const obj4 = closure_8[guild_id];
        }
      }
    }
  }
}
let closure_8 = {};
let closure_9 = {};
let closure_10 = {};
let tmp2 = (PersistedStore) => {
  class FavoritesSuggestionStore {
    constructor() {
      self = this;
      tmp = FavoritesSuggestionStore(this, FavoritesSuggestionStore);
      obj = messagesProxy(FavoritesSuggestionStore);
      tmp2 = getSystemLocale;
      if (closure_11()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = messagesProxy;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, messagesProxy(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let module_664 = FavoritesSuggestionStore;
  callback2(FavoritesSuggestionStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      let channelOpensByChannelId;
      let dismissedSuggestions;
      let suggestedChannels;
      this.waitFor(asyncGeneratorStep, _isNativeReflectConstruct, items);
      const items = [_isNativeReflectConstruct];
      this.syncWith(items, closure_12);
      if (null != arg0) {
        ({ suggestedChannels, dismissedSuggestions, channelOpensByChannelId } = arg0);
        if (null != suggestedChannels) {
          for (const key10016 in suggestedChannels) {
            let tmp13 = key10016;
            let _Set3 = Set;
            let tmp15 = new.target;
            let tmp16 = new.target;
            let tmp14 = closure_8;
            let set = new Set(suggestedChannels[key10016]);
            let set1 = set;
            if (null == set) {
              let _Set = Set;
              let tmp5 = new.target;
              let tmp6 = new.target;
              set1 = new Set();
            }
            tmp14[key10016] = set1;
          }
        }
        if (null != dismissedSuggestions) {
          for (const key10026 in dismissedSuggestions) {
            let tmp18 = key10026;
            let _Set4 = Set;
            let tmp20 = new.target;
            let tmp21 = new.target;
            let tmp19 = closure_9;
            let set2 = new Set(dismissedSuggestions[key10026]);
            let set3 = set2;
            if (null == set2) {
              let _Set2 = Set;
              let tmp10 = new.target;
              let tmp11 = new.target;
              set3 = new Set();
            }
            tmp19[key10026] = set3;
          }
        }
        if (null == channelOpensByChannelId) {
          channelOpensByChannelId = {};
        }
      }
    }
  };
  const items = [obj, , ];
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
}(require("ME").PersistedStore);
tmp2.displayName = "FavoritesSuggestionStore";
tmp2.persistKey = "FavoritesSuggestionStore";
tmp2 = new tmp2(require("_createForOfIteratorHelperLoose"), {
  DISMISS_FAVORITE_SUGGESTION: function handleFavoriteSuggestionDimissed(arg0) {
    let channelId;
    let guildId;
    ({ guildId, channelId } = arg0);
    if (null == closure_9[guildId]) {
      const _Set = Set;
      const set = new Set();
      closure_9[guildId] = set;
    }
    closure_9[guildId].add(channelId);
    closure_8[guildId].delete(channelId);
    return true;
  }
});
const result = dispatcher.fileFinishedImporting("modules/opt_in_channels/FavoritesSuggestionStore.tsx");

export default tmp2;
