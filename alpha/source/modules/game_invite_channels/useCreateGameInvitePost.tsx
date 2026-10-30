// Module ID: 14331
// Function ID: 14332
// Name: useCreateGameInvitePost
// Dependencies: [5, 32, 19, 11490, 6564, 7823, 1072, 4865, 7447, 14332, 504, 11651, 9755, 7824, 2]
// Exports: useCreateGameInvitePost

// Module 14331 (useCreateGameInvitePost)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 4865 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7447 */;
import SlowmodeStore2 from "SlowmodeStore" /* 7823 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11651 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 11490 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6564 */;
import size from "module_2" /* 2 */;

const SlowmodeStore = SlowmodeStore2;
let c1, c3;

let react = react_mod;
const SlowmodeType = SlowmodeStore2.SlowmodeType;
const ActivityActionTypes = Constants.ActivityActionTypes;
const ChannelFlags = ChannelConstants.ChannelFlags;
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export function useCreateGameInvitePost(parentChannel) {
  let _undefined;
  let _undefined2;
  let c6;
  let c7;
  let callback;
  let closure_5;
  let id;
  let noMicTag;
  let onThreadCreated;
  let tmp17;
  let tmp19;
  let tmpResult4;
  let upload;
  let voiceToggleDisabled;
  parentChannel = parentChannel.parentChannel;
  const str = parentChannel.description;
  const appliedTagIds = parentChannel.appliedTagIds;
  let applicationIdsForGame;
  let createForumPostCommon;
  react = undefined;
  c6 = undefined;
  c7 = undefined;
  let closure_8;
  const tmp = parentChannel;
  const tmp2 = applicationIdsForGame;
  ({ upload, onThreadCreated } = parentChannel);
  let obj = parentChannel(applicationIdsForGame[8]);
  const application = obj.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj2 = parentChannel(applicationIdsForGame[9]);
  applicationIdsForGame = obj2.useApplicationIdsForGame(parentChannel.gameId);
  let obj3 = parentChannel(applicationIdsForGame[10]);
  const items = [c6, c7];
  const items1 = [applicationIdsForGame];
  const stateFromStores = obj3.useStateFromStores(items, () => {
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
  let tmp5 = parentChannel(applicationIdsForGame[8]);
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
  const obj5 = { parentChannel, name: tmpResult4.deriveThreadName(str), appliedTags: appliedTagIds, activityAction: memo, applicationId: id, voiceChatEnabled, upload, onThreadCreated };
  const useCreateForumPostCommon = tmp(tmp2[12]).useCreateForumPostCommon;
  tmp(tmp2[12]);
  id = undefined;
  tmpResult4 = tmp(tmp2[8]);
  if (application != null) {
    id = application.id;
  }
  createForumPostCommon = useCreateForumPostCommon(obj5);
  const hasFlagResult = parentChannel.hasFlag(ChannelFlags.REQUIRE_TAG);
  let tmp12 = hasFlagResult;
  if (tmp12) {
    tmp12 = 0 === appliedTagIds.size;
  }
  react = tmp12;
  const rateLimitPerUser = parentChannel.rateLimitPerUser;
  const items3 = [closure_8];
  const tmpResult5 = tmp(tmp2[10]);
  const stateFromStores1 = tmpResult5.useStateFromStores(items3, () => SlowmodeStore.getSlowmodeCooldownGuess(parentChannel.id, SlowmodeType.CreateThread));
  const tmpResult6 = tmp(tmp2[13]);
  const canBypassSlowmode = tmpResult6.useCanBypassSlowmode(parentChannel);
  const tmp16 = createForumPostCommon(obj4.useState(false), 2);
  [tmp17, c6] = tmp16;
  [tmp19, c7] = createForumPostCommon(obj4.useState(false), 2);
  const tmp18 = createForumPostCommon(obj4.useState(false), 2);
  let tmp20 = !tmp17 && str.trim().length > 0 && str.length <= tmp(tmp2[8]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  if (tmp20) {
    tmp20 = !(tmp13 && !canBypassSlowmode && stateFromStores1 > 0);
  }
  closure_8 = tmp20;
  const items4 = [tmp20, tmp12, createForumPostCommon, str];
  const obj6 = { application, noMicTag, voiceChatEnabled, voiceToggleDisabled, isTagRequired: hasFlagResult, hasTagRequiredError: tmp19, isSlowmodeEnabled: rateLimitPerUser > 0, rateLimitPerUser, slowmodeCooldownGuess: stateFromStores1, isBypassSlowmode: canBypassSlowmode, submitting: tmp17, canSubmit: tmp20, submit: callback };
  callback = obj4.useCallback(stateFromStores(function*(arg0, value) {
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
            const tmp8 = closure_8;
            if (tmp8) {
              const tmp9 = closure_5;
              if (tmp9) {
                _undefined2(true);
              } else {
                _undefined(true);
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj4 = { value: createForumPostCommon(str), done: false };
                return obj4;
              }
            }
          }
        } else if (1 === tmp4) {
          c2 = 0;
          closure_128_6(false);
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
      } catch (tmp16) {
        if (0 === c2) {
          c3 = 3;
          throw tmp16;
        } else {
          c1 = 1;
        }
      }
    }
  }), items4);
  return obj6;
}
