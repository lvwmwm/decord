// Module ID: 12288
// Function ID: 12289
// Name: useCreateGameInvitePost
// Dependencies: [5, 32, 19, 8814, 5591, 1074, 6690, 8822, 504, 11261, 8606, 2]
// Exports: useCreateGameInvitePost

// Module 12288 (useCreateGameInvitePost)
import Constants from "Constants" /* 1074 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6690 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11261 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 8814 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5591 */;
import size from "module_2" /* 2 */;

let c1, c3;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ActivityActionTypes = Constants.ActivityActionTypes;
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export const useCreateGameInvitePost = function useCreateGameInvitePost(appliedTagIds) {
  let _undefined;
  let c4;
  let closure_5;
  let description;
  let id;
  let noMicTag;
  let onThreadCreated;
  let parentChannel;
  let tmp12;
  let tmpResult2;
  let upload;
  let voiceToggleDisabled;
  ({ parentChannel, description } = appliedTagIds);
  appliedTagIds = appliedTagIds.appliedTagIds;
  let stateFromStores;
  let createForumPostCommon;
  _slicedToArray = undefined;
  react = undefined;
  const tmp = description;
  const tmp2 = stateFromStores;
  ({ upload, onThreadCreated } = appliedTagIds);
  let obj = description(stateFromStores[6]);
  const application = obj.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj2 = description(stateFromStores[7]);
  const applicationIdsForGame = obj2.useApplicationIdsForGame(parentChannel.gameId);
  let obj3 = description(stateFromStores[8]);
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationIdsForGame];
  stateFromStores = obj3.useStateFromStores(items, () => {
    const obj = applicationIdsForGame[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp7 = getCurrentUserPresenceActivityDefault(LocalActivityStore, SelfPresenceStore, tmp2);
      if (null != tmp7) {
        let obj2 = GameInvitesChannelUtils;
        if (obj2.canInviteToActivity(tmp8)) {
          obj.return();
          return tmp7;
        }
      }
      continue;
    }
    return null;
  }, items1);
  let tmp5 = description(stateFromStores[6]);
  let availableTags = parentChannel.availableTags;
  const useGameInviteVoiceChatState = tmp5.useGameInviteVoiceChatState;
  if (availableTags == null) {
    availableTags = [];
  }
  const gameInviteVoiceChatState = useGameInviteVoiceChatState(availableTags, appliedTagIds);
  const voiceChatEnabled = gameInviteVoiceChatState.voiceChatEnabled;
  let obj4 = react;
  const items2 = [stateFromStores];
  ({ noMicTag, voiceToggleDisabled } = gameInviteVoiceChatState);
  const memo = react.useMemo(() => {
    if (null != stateFromStores) {
      const obj = GameInvitesChannelUtils;
      if (obj.canInviteToActivity(stateFromStores)) {
        return { type: ActivityActionTypes.JOIN, activity: stateFromStores };
      }
    }
  }, items2);
  const obj5 = { parentChannel, name: tmpResult2.deriveThreadName(description), appliedTags: appliedTagIds, activityAction: memo, applicationId: id, voiceChatEnabled, upload, onThreadCreated };
  const useCreateForumPostCommon = tmp(tmp2[10]).useCreateForumPostCommon;
  tmp(tmp2[10]);
  id = undefined;
  tmpResult2 = tmp(tmp2[6]);
  if (application != null) {
    id = application.id;
  }
  createForumPostCommon = useCreateForumPostCommon(obj5);
  let tmp11 = _slicedToArray(obj4.useState(false), 2);
  [tmp12, c4] = tmp11;
  let tmp13 = !tmp12;
  if (tmp13) {
    tmp13 = description.trim().length > 0;
  }
  if (tmp13) {
    tmp13 = description.length <= tmp(tmp2[6]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  }
  react = tmp13;
  const items3 = [tmp13, createForumPostCommon, description];
  const obj6 = {
    application,
    noMicTag,
    voiceChatEnabled,
    voiceToggleDisabled,
    submitting: tmp12,
    canSubmit: tmp13,
    submit: obj4.useCallback(createForumPostCommon(function*(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        let c2;
        try {
          c3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp;
              const tmp8 = closure_5;
              if (tmp8) {
                _undefined(true);
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj4 = { value: createForumPostCommon(description), done: false };
                return obj4;
              }
            }
          } else if (1 === tmp4) {
            c2 = 0;
            closure_128_4(false);
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 0;
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c2 = 0;
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp13) {
          if (0 === c2) {
            c3 = 3;
            throw tmp13;
          } else {
            c1 = 1;
          }
        }
      }
    }), items3)
  };
  return obj6;
};
