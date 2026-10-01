// Module ID: 6690
// Function ID: 6691
// Name: GameInvitesChannelUtils
// Dependencies: [109, 19, 2045, 1074, 2052, 6691, 6692, 504, 6693, 6722, 38, 6727, 6584, 6729, 6731, 5820, 2]
// Exports: canInviteToActivity, deriveThreadName, maxedAppliedForumPostTags, useFirstMessage, useGameInviteVoiceChatState, useGameInvitesActiveAndArchivedThreads, useGameInvitesChannelOfficialApplication, useIsGameInvitePostVoiceEnabled, useIsGameInvitesPost, useSubscribeToGameInvitePostAuthors

// Module 6690 (GameInvitesChannelUtils)
import react from "react" /* 19 */;
import _modDef38 from "module_38" /* 38 */;
import ChannelConstants from "ChannelConstants" /* 2052 */;
import getThreadAutoArchiveTimeOnceDefault from "getThreadAutoArchiveTimeOnce" /* 5820 */;
import ForumConstants from "ForumConstants" /* 6691 */;
import sanitizeThreadNameDefault from "sanitizeThreadName" /* 6692 */;
import ForumPostDataLoader from "ForumPostDataLoader" /* 6722 */;
import hasFlagDefault from "hasFlag" /* 6731 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, set;

let c9;
let metroImportAll;
let metroImportDefault;
let closure_3 = ["data"];
const useMemo = react.useMemo;
({ ActivityFlags: metroImportDefault, ActivityTypes: metroImportAll, MAX_CHANNEL_NAME_LENGTH: c9 } = Constants);
const ChannelFlags = ChannelConstants.ChannelFlags;
const MAX_FORUM_POST_TAGS = ForumConstants.MAX_FORUM_POST_TAGS;
let c12 = "No Mic";
const result = size.fileFinishedImporting("modules/game_invite_channels/GameInvitesChannelUtils.tsx");

export const GAME_INVITES_CHANNEL_NO_MIC_TAG_NAME = "No Mic";
export const GAME_INVITE_POST_MESSAGE_MAX_LENGTH = 120;
export const deriveThreadName = function deriveThreadName(description) {
  const str = description.trim();
  let str2 = str.split("\n")[0];
  if (str2 == null) {
    str2 = "";
  }
  const tmp = sanitizeThreadNameDefault;
  return tmp(str2.slice(0, React4), true);
};
export const useIsGameInvitesPost = function useIsGameInvitesPost(channel) {
  _require = channel;
  const items = [ChannelStore];
  const obj = require("get initialized");
  return obj.useStateFromStores(items, () => {
    let tmp = null != channel;
    if (tmp) {
      const isForumPostResult = channel.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == obj.parent_id;
      }
      let tmp4 = !tmp3;
      if (tmp4) {
        channel = ChannelStore.getChannel(obj.parent_id);
        let flag;
        if (channel != null) {
          flag = channel.isGameInvitesChannel();
        }
        if (flag == null) {
          flag = false;
        }
        tmp4 = flag;
      }
      tmp = tmp4;
    }
    return tmp;
  });
};
export const useIsGameInvitePostVoiceEnabled = function useIsGameInvitePostVoiceEnabled(channel) {
  const obj = require("ForumTagHooks");
  const appliedTags = obj.useAppliedTags(channel);
  _require = channel;
  const items = [ChannelStore];
  const obj3 = require("get initialized");
  let tmp = obj3.useStateFromStores(items, () => {
    let tmp = null != channel;
    if (tmp) {
      const isForumPostResult = channel.isForumPost();
      let tmp3 = !isForumPostResult;
      if (isForumPostResult) {
        tmp3 = null == obj.parent_id;
      }
      let tmp4 = !tmp3;
      if (tmp4) {
        channel = ChannelStore.getChannel(obj.parent_id);
        let flag;
        if (channel != null) {
          flag = channel.isGameInvitesChannel();
        }
        if (flag == null) {
          flag = false;
        }
        tmp4 = flag;
      }
      tmp = tmp4;
    }
    return tmp;
  }) && !appliedTags.some((name) => name.name === closure_1_12);
  return tmp;
};
export const useFirstMessage = function useFirstMessage(stateFromStores, enabled) {
  const obj = ForumPostDataLoader;
  const obj2 = { enabled, allowArchived: true };
  return obj.useFirstForumPostMessage(stateFromStores, obj2);
};
export const useGameInvitesChannelOfficialApplication = function useGameInvitesChannelOfficialApplication(id) {
  _require = id;
  let obj = require("get initialized");
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(id));
  let isGameInvitesChannelResult = null == stateFromStores;
  const tmp3 = _modDef38;
  if (!isGameInvitesChannelResult) {
    isGameInvitesChannelResult = stateFromStores.isGameInvitesChannel();
  }
  tmp3(isGameInvitesChannelResult, "requires a game invites channel");
  let gameId;
  const useGame = require("useGame").useGame;
  require("useGame");
  if (stateFromStores != null) {
    gameId = stateFromStores.gameId;
  }
  const data = useGame(gameId).data;
  let officialApplicationId;
  if (data != null) {
    officialApplicationId = data.getOfficialApplicationId();
  }
  const tmpResult2 = require("ApplicationActionCreators");
  const application = tmpResult2.useApplication(officialApplicationId);
  const items1 = [application];
  return useMemo(() => {
    const obj = { application: application.data };
    const merged = Object.assign(_objectWithoutProperties(application, closure_2_3));
    return obj;
  }, items1);
};
export const useSubscribeToGameInvitePostAuthors = function useSubscribeToGameInvitePostAuthors(isGameInvitesChannel, arg1) {
  _require = isGameInvitesChannel;
  let closure_1 = arg1;
  const isGameInvitesChannelResult = isGameInvitesChannel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let obj = require("get initialized");
  let items = [ChannelStore];
  const items1 = [isGameInvitesChannelResult, arg1];
  const stateFromStoresArray = obj.useStateFromStoresArray(items, function() {
    const tmp = dependencyMap;
    if (tmp) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set();
      const items = [];
      const tmp6 = closure_1[Symbol.iterator]();
      while (tmp6 !== undefined) {
        let channel = ChannelStore.getChannel(tmp9);
        let ownerId;
        if (channel != null) {
          ownerId = channel.ownerId;
        }
        let tmp14 = ownerId;
        let hasItem = null == ownerId;
        if (!hasItem) {
          hasItem = set.has(tmp14);
        }
        if (!hasItem) {
          let addResult = set.add(tmp14);
          let arr = items.push(tmp14);
        }
        continue;
      }
      return items;
    } else {
      return [];
    }
  }, items1);
  const items2 = [stateFromStoresArray, isGameInvitesChannel.guild_id, isGameInvitesChannelResult];
  const tmp3 = useMemo(() => {
    let tmp;
    const obj = {};
    if (dependencyMap) {
      obj[isGameInvitesChannel.guild_id] = stateFromStoresArray;
      tmp = obj;
    } else {
      tmp = obj;
    }
    return tmp;
  }, items2);
  const obj2 = require("subscribeGuildMembers");
  const subscribeGuildMembers = obj2.useSubscribeGuildMembers(tmp3, "GameInvitesChannelPostAuthors");
};
export const canInviteToActivity = function canInviteToActivity(stateFromStores) {
  const tmp = stateFromStores.type === metroImportAll.PLAYING && hasFlagDefault(stateFromStores, metroImportDefault.JOIN);
  return tmp;
};
export const maxedAppliedForumPostTags = function maxedAppliedForumPostTags(size) {
  return size.size >= MAX_FORUM_POST_TAGS;
};
export const useGameInviteVoiceChatState = function useGameInviteVoiceChatState(availableTags, appliedTagIds) {
  let tmp3;
  let closure_0 = availableTags;
  const items = [availableTags];
  const tmp = useMemo(() => {
    let found;
    const arr = availableTags;
    if (availableTags != null) {
      found = arr.find((name) => name.name === closure_1_12);
    }
    return found;
  }, items);
  const obj = { noMicTag: tmp, voiceChatEnabled: null == tmp || !appliedTagIds.has(tmp.id), voiceToggleDisabled: tmp3 };
  tmp3 = null == tmp;
  null == tmp || !appliedTagIds.has(tmp.id);
  if (!tmp3) {
    tmp3 = appliedTagIds.size >= MAX_FORUM_POST_TAGS && !appliedTagIds.has(tmp.id);
    appliedTagIds.size >= MAX_FORUM_POST_TAGS && !appliedTagIds.has(tmp.id);
  }
  return obj;
};
export const useGameInvitesActiveAndArchivedThreads = function useGameInvitesActiveAndArchivedThreads(channel, forumActiveThreadIds, threadIds) {
  const activeThreadIds = forumActiveThreadIds;
  const archivedThreadIds = threadIds;
  const isGameInvitesChannelResult = channel.isGameInvitesChannel();
  dependencyMap = isGameInvitesChannelResult;
  let items = [isGameInvitesChannelResult, forumActiveThreadIds, threadIds];
  return useMemo(() => {
    let items2;
    const tmp2 = dependencyMap;
    if (tmp2) {
      const _Date = Date;
      const items = [];
      const items1 = [];
      const timestamp = Date.now();
      const iter = activeThreadIds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp13 = nextResult;
        let channel = ChannelStore.getChannel(nextResult);
        let obj2 = channel;
        if (null != channel) {
          if (!obj2.hasFlag(ChannelFlags.PINNED)) {
            if (getThreadAutoArchiveTimeOnceDefault(obj2) <= timestamp) {
              let arr = items1.push(tmp13);
            }
            continue;
          }
        }
        let arr2 = items.push(tmp13);
      }
      const obj3 = { activeThreadIds: items, archivedThreadIds: items2 };
      items2 = [];
      HermesBuiltin.arraySpread(items2, archivedThreadIds, HermesBuiltin.arraySpread(items2, items1, 0));
      return obj3;
    } else {
      return { activeThreadIds, archivedThreadIds };
    }
  }, items);
};
