// Module ID: 5648
// Function ID: 48314
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: canInviteToActivity, useFirstMessage, useGameInvitesChannelOfficialApplication, useIsGameInvitePostVoiceEnabled, useSubscribeToGameInvitePostAuthors

// Module 5648 (_createForOfIteratorHelperLoose)
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
function useIsGameInvitesPost(channel) {
  const arg1 = channel;
  const items = [closure_6];
  return arg1(dependencyMap[5]).useStateFromStores(items, (self) => {
    let tmp = null != self;
    if (tmp) {
      let tmp3 = !self.isForumPost();
      if (!tmp3) {
        tmp3 = null == self.parent_id;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        const channel = channel.getChannel(self.parent_id);
        let isGameInvitesChannelResult;
        if (null != channel) {
          isGameInvitesChannelResult = channel.isGameInvitesChannel();
        }
        tmp5 = null != isGameInvitesChannelResult && isGameInvitesChannelResult;
        const tmp9 = null != isGameInvitesChannelResult && isGameInvitesChannelResult;
      }
      tmp = tmp5;
    }
    return tmp;
  });
}
function useGameInvitesChannelApplicationId(arg0) {
  const arg1 = arg0;
  const items = [closure_7];
  const items1 = [arg0];
  let stateFromStores = arg1(dependencyMap[5]).useStateFromStores(items, () => {
    let tmp = null;
    if (null != arg0) {
      const guild = guild.getGuild(arg0);
      let first;
      if (null != guild) {
        const gameApplicationIds = guild.gameApplicationIds;
        if (null != gameApplicationIds) {
          first = gameApplicationIds[0];
        }
      }
      let tmp6 = null;
      if (null != first) {
        tmp6 = first;
      }
      tmp = tmp6;
    }
    return tmp;
  }, items1);
  let tmp2 = null;
  if (null != arg0) {
    tmp2 = closure_10[arg0];
  }
  if (null != tmp2) {
    stateFromStores = tmp2;
  }
  return stateFromStores;
}
let closure_3 = [31698176];
let closure_4 = importDefault(dependencyMap[0]);
const useMemo = arg1(dependencyMap[1]).useMemo;
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
({ ActivityFlags: closure_8, ActivityTypes: closure_9 } = arg1(dependencyMap[4]));
let closure_10 = { "1509696536903417891": "1373923512766697512" };
const tmp2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export { useIsGameInvitesPost };
export const useIsGameInvitePostVoiceEnabled = function useIsGameInvitePostVoiceEnabled(channel) {
  const appliedTags = arg1(dependencyMap[6]).useAppliedTags(channel);
  const tmp = !useIsGameInvitesPost(channel);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !appliedTags.some((name) => name.name === "No Mic");
  }
  return tmp2;
};
export const useFirstMessage = function useFirstMessage(stateFromStores, enabled) {
  let obj = enabled(dependencyMap[7]);
  obj = { enabled, allowArchived: true };
  return obj.useFirstForumPostMessage(stateFromStores, obj);
};
export { useGameInvitesChannelApplicationId };
export const useGameInvitesChannelOfficialApplication = function useGameInvitesChannelOfficialApplication(arg0) {
  const tmp = useGameInvitesChannelApplicationId(arg0);
  const application = arg1(dependencyMap[8]).useApplication(tmp);
  const arg1 = application;
  const items = [application];
  return useMemo(() => {
    const merged = Object.assign(callback(application, closure_3));
    return { application: application.data };
  }, items);
};
export const useSubscribeToGameInvitePostAuthors = function useSubscribeToGameInvitePostAuthors(isGameInvitesChannel) {
  const arg1 = isGameInvitesChannel;
  const importDefault = arg1;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  const dependencyMap = isGameInvitesChannelResult;
  const items = [closure_6];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = arg1(dependencyMap[5]).useStateFromStoresArray(items, () => {
    let iter2;
    if (isGameInvitesChannelResult) {
      const _Set = Set;
      const set = new Set();
      const items = [];
      const tmp7 = callback(arg1);
      let iter = tmp7();
      if (!iter.done) {
        do {
          let tmp9 = closure_6;
          let channel = closure_6.getChannel(iter.value);
          let ownerId;
          if (null != channel) {
            ownerId = channel.ownerId;
          }
          let tmp12 = null == ownerId || set.has(ownerId);
          if (!tmp12) {
            let addResult = set.add(ownerId);
            let arr = items.push(ownerId);
          }
          iter2 = tmp7();
          iter = iter2;
        } while (!iter2.done);
      }
      return items;
    } else {
      return [];
    }
  }, items1);
  let closure_3 = stateFromStoresArray;
  const items2 = [stateFromStoresArray, isGameInvitesChannel.guild_id, isGameInvitesChannelResult];
  const obj = arg1(dependencyMap[5]);
  const tmp3 = useMemo(() => {
    if (isGameInvitesChannelResult) {
      let obj = {};
      obj[arg0.guild_id] = stateFromStoresArray;
    } else {
      obj = {};
    }
    return obj;
  }, items2);
  const subscribeGuildMembers = arg1(dependencyMap[9]).useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
};
export const canInviteToActivity = function canInviteToActivity(type) {
  let tmp = type.type === constants2.PLAYING;
  if (tmp) {
    tmp = importDefault(dependencyMap[10])(type, constants.JOIN);
  }
  return tmp;
};
