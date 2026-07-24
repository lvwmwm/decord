// Module ID: 5653
// Function ID: 48351
// Name: _createForOfIteratorHelperLoose
// Dependencies: [29, 31, 1348, 1838, 653, 566, 5654, 5681, 5463, 5687, 5689, 2]
// Exports: canInviteToActivity, useFirstMessage, useGameInvitesChannelOfficialApplication, useIsGameInvitePostVoiceEnabled, useSubscribeToGameInvitePostAuthors

// Module 5653 (_createForOfIteratorHelperLoose)
import _objectWithoutProperties from "_objectWithoutProperties";
import { useMemo } from "result";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_8;
let closure_9;
const require = arg1;
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  const _require = channel;
  const items = [_isNativeReflectConstruct];
  return _require(566).useStateFromStores(items, () => {
    let tmp = null != forumPost;
    if (tmp) {
      let tmp3 = !forumPost.isForumPost();
      if (!tmp3) {
        tmp3 = null == forumPost.parent_id;
      }
      let tmp5 = !tmp3;
      if (!tmp3) {
        const channel = outer1_6.getChannel(forumPost.parent_id);
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
  const _require = arg0;
  const items = [_createForOfIteratorHelperLoose];
  const items1 = [arg0];
  let stateFromStores = _require(566).useStateFromStores(items, () => {
    let tmp = null;
    if (null != closure_0) {
      const guild = outer1_7.getGuild(closure_0);
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
    tmp2 = table[arg0];
  }
  if (null != tmp2) {
    stateFromStores = tmp2;
  }
  return stateFromStores;
}
let closure_3 = ["data"];
({ ActivityFlags: closure_8, ActivityTypes: closure_9 } = ME);
let closure_10 = { "1509696536903417891": "1373923512766697512" };
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export { useIsGameInvitesPost };
export const useIsGameInvitePostVoiceEnabled = function useIsGameInvitePostVoiceEnabled(channel) {
  const appliedTags = require(5654) /* useAvailableTags */.useAppliedTags(channel);
  const tmp = !useIsGameInvitesPost(channel);
  let tmp2 = !tmp;
  if (!tmp) {
    tmp2 = !appliedTags.some((name) => name.name === "No Mic");
  }
  return tmp2;
};
export const useFirstMessage = function useFirstMessage(stateFromStores, enabled) {
  let obj = require(5681) /* _shouldRequestFirstMessage */;
  obj = { enabled, allowArchived: true };
  return obj.useFirstForumPostMessage(stateFromStores, obj);
};
export { useGameInvitesChannelApplicationId };
export const useGameInvitesChannelOfficialApplication = function useGameInvitesChannelOfficialApplication(arg0) {
  const tmp = useGameInvitesChannelApplicationId(arg0);
  application = application(5463).useApplication(tmp);
  const items = [application];
  return useMemo(() => {
    const merged = Object.assign(outer1_4(application, outer1_3));
    return { application: application.data };
  }, items);
};
export const useSubscribeToGameInvitePostAuthors = function useSubscribeToGameInvitePostAuthors(isGameInvitesChannel) {
  const _require = isGameInvitesChannel;
  let closure_1 = arg1;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  const dependencyMap = isGameInvitesChannelResult;
  let items = [_isNativeReflectConstruct];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = _require(566).useStateFromStoresArray(items, () => {
    let iter2;
    if (closure_2) {
      const _Set = Set;
      const set = new Set();
      const items = [];
      const tmp7 = outer1_11(closure_1);
      let iter = tmp7();
      if (!iter.done) {
        do {
          let tmp9 = outer1_6;
          let channel = outer1_6.getChannel(iter.value);
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
  const items2 = [stateFromStoresArray, isGameInvitesChannel.guild_id, isGameInvitesChannelResult];
  let obj = _require(566);
  const tmp3 = useMemo(() => {
    if (closure_2) {
      let obj = {};
      obj[isGameInvitesChannel.guild_id] = stateFromStoresArray;
    } else {
      obj = {};
    }
    return obj;
  }, items2);
  const subscribeGuildMembers = _require(5687).useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
};
export const canInviteToActivity = function canInviteToActivity(type) {
  let tmp = type.type === constants2.PLAYING;
  if (tmp) {
    tmp = importDefault(5689)(type, constants.JOIN);
  }
  return tmp;
};
