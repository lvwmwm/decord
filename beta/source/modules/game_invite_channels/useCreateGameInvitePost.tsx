// Module ID: 12923
// Function ID: 12924
// Name: useCreateGameInvitePost
// Dependencies: [5, 32, 19, 9621, 5498, 1078, 558, 568, 7516, 9629, 11889, 504, 9417, 2]

// Module 12923 (useCreateGameInvitePost)
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 7516 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11889 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 9621 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5498 */;

const require = globalThis.__r;

require = fn;
const ActivityActionTypes = fn(1078).ActivityActionTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export const useCreateGameInvitePost = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(34);
  ({ parentChannel, description } = arg0);
  _require = description;
  ({ appliedTagIds, upload, onThreadCreated } = arg0);
  let obj = require("c");
  const application = require("GameInvitesChannelUtils").useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj2 = require("GameInvitesChannelUtils");
  const applicationIdsForGame = require("getApplicationIdsForGame").useApplicationIdsForGame(parentChannel.gameId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [LocalActivityStore, SelfPresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== applicationIdsForGame) {
    const fn = function p() {
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
    };
    const items1 = [applicationIdsForGame];
    cResult[1] = applicationIdsForGame;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj3 = require("getApplicationIdsForGame");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] !== parentChannel.availableTags) {
    let availableTags = parentChannel.availableTags;
    if (availableTags == null) {
      availableTags = [];
    }
    cResult[4] = parentChannel.availableTags;
    cResult[5] = availableTags;
    let tmp11 = availableTags;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult = require("initialize");
  const gameInviteVoiceChatState = require("GameInvitesChannelUtils").useGameInviteVoiceChatState(tmp11, appliedTagIds);
  ({ noMicTag, voiceChatEnabled, voiceToggleDisabled } = gameInviteVoiceChatState);
  if (null != stateFromStores) {
    if (tmpResult6.canInviteToActivity(stateFromStores)) {
      if (cResult[6] !== stateFromStores) {
        let obj4 = { type: ActivityActionTypes.JOIN, activity: stateFromStores };
        cResult[6] = stateFromStores;
        cResult[7] = obj4;
      }
    }
    tmpResult6 = tmp(tmp2[8]);
  }
  if (cResult[8] !== description) {
    const deriveThreadNameResult = tmp(tmp2[8]).deriveThreadName(description);
    cResult[8] = description;
    cResult[9] = deriveThreadNameResult;
    let tmp18 = deriveThreadNameResult;
    const tmpResult7 = tmp(tmp2[8]);
  } else {
    tmp18 = cResult[9];
  }
  let id;
  if (application != null) {
    id = application.id;
  }
  if (cResult[10] === undefined) {
    if (cResult[11] === onThreadCreated) {
      if (cResult[12] === parentChannel) {
        if (cResult[13] === tmp18) {
          if (cResult[14] === appliedTagIds) {
            if (cResult[15] === id) {
              if (cResult[16] === upload) {
                if (cResult[17] === voiceChatEnabled) {
                  let tmp21 = cResult[18];
                }
                createForumPostCommon = tmp(tmp2[12]).useCreateForumPostCommon(tmp21);
                const tmpResult8 = tmp(tmp2[12]);
                [tmp26, asyncGeneratorStep] = noop.useState(false);
                if (cResult[19] === description) {
                  if (cResult[20] === tmp26) {
                    let tmp27 = cResult[21];
                  }
                  _slicedToArray = tmp27;
                  if (cResult[22] === tmp27) {
                    if (cResult[23] === createForumPostCommon) {
                      if (cResult[24] === description) {
                        let tmp29 = cResult[25];
                      }
                      if (cResult[26] === tmp27) {
                        if (cResult[27] === noMicTag) {
                          if (cResult[28] === application) {
                            if (cResult[29] === tmp29) {
                              if (cResult[30] === tmp26) {
                                if (cResult[31] === voiceChatEnabled) {
                                  if (cResult[32] === voiceToggleDisabled) {
                                    let tmp31 = cResult[33];
                                  }
                                  return tmp31;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj5 = { application, noMicTag, voiceChatEnabled, voiceToggleDisabled, submitting: tmp26, canSubmit: tmp27, submit: tmp29 };
                      cResult[26] = tmp27;
                      cResult[27] = noMicTag;
                      cResult[28] = application;
                      cResult[29] = tmp29;
                      cResult[30] = tmp26;
                      cResult[31] = voiceChatEnabled;
                      cResult[32] = voiceToggleDisabled;
                      cResult[33] = obj5;
                      tmp31 = obj5;
                    }
                  }
                  _require = asyncGeneratorStep(async (arg0, value) => {
                    if (v3 === 2) {
                      v3 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp6 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: null };
                      }
                    } else {
                      try {
                        v3 = 2;
                        if (0 === c1) {
                          if (arg0 === 1) {
                            v3 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            v3 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            closure_0 = tmp3;
                            if (closure_1_4) {
                              v3(true);
                              let v0 = 1;
                              c1 = 2;
                              v3 = 1;
                              const obj4 = { value: v0(closure_0), done: false };
                              return obj4;
                            }
                          }
                        } else {
                          if (1 === tmp7) {
                            v0 = 0;
                            v3(false);
                          } else if (arg0 === 1) {
                            v3 = 3;
                            throw value;
                          } else if (arg0 !== 2) {
                            v0 = 0;
                          }
                          v0 = 0;
                          v3 = 3;
                          const obj = { value, done: true };
                          return obj;
                        }
                        v3 = 3;
                      } catch (tmp16) {
                        if (tmp4 === v0) {
                          v3 = tmp2;
                          throw tmp16;
                        } else {
                          c1 = tmp;
                        }
                      }
                    }
                  });
                  const fn2 = function() {
                    const self = this;
                    const apply = closure_0.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  };
                  cResult[22] = tmp27;
                  cResult[23] = createForumPostCommon;
                  cResult[24] = description;
                  cResult[25] = fn2;
                  tmp29 = fn2;
                }
                let tmp28 = !tmp26;
                if (!tmp26) {
                  tmp28 = description.trim().length > 0;
                }
                if (tmp28) {
                  tmp28 = description.length <= tmp(tmp2[8]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
                }
                cResult[19] = description;
                cResult[20] = tmp26;
                cResult[21] = tmp28;
                tmp27 = tmp28;
                const tmp25 = _slicedToArray(noop.useState(false), 2);
              }
            }
          }
        }
      }
    }
  }
  const obj6 = { parentChannel, name: tmp18, appliedTags: appliedTagIds, activityAction: undefined, applicationId: id, voiceChatEnabled, upload, onThreadCreated };
  cResult[10] = undefined;
  cResult[11] = onThreadCreated;
  cResult[12] = parentChannel;
  cResult[13] = tmp18;
  cResult[14] = appliedTagIds;
  cResult[15] = id;
  cResult[16] = upload;
  cResult[17] = voiceChatEnabled;
  cResult[18] = obj6;
  tmp21 = obj6;
}) : ((appliedTagIds) => {
  ({ parentChannel, description } = appliedTagIds);
  appliedTagIds = appliedTagIds.appliedTagIds;
  let stateFromStores;
  let createForumPostCommon;
  _slicedToArray = undefined;
  noop = undefined;
  ({ upload, onThreadCreated } = appliedTagIds);
  const application = description(stateFromStores[8]).useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj = description(stateFromStores[8]);
  const applicationIdsForGame = description(stateFromStores[9]).useApplicationIdsForGame(parentChannel.gameId);
  let obj2 = description(stateFromStores[9]);
  const items = [LocalActivityStore, SelfPresenceStore];
  const items1 = [applicationIdsForGame];
  stateFromStores = description(stateFromStores[11]).useStateFromStores(items, () => {
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
  let obj3 = description(stateFromStores[11]);
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  const gameInviteVoiceChatState = description(stateFromStores[8]).useGameInviteVoiceChatState(availableTags, appliedTagIds);
  const voiceChatEnabled = gameInviteVoiceChatState.voiceChatEnabled;
  const items2 = [stateFromStores];
  ({ noMicTag, voiceToggleDisabled } = gameInviteVoiceChatState);
  const memo = noop.useMemo(() => {
    if (null != stateFromStores) {
      if (obj.canInviteToActivity(tmp)) {
        const obj2 = { type: ActivityActionTypes.JOIN, activity: tmp };
        return obj2;
      }
      obj = GameInvitesChannelUtils;
    }
  }, items2);
  let obj4 = description(stateFromStores[8]);
  const obj6 = { parentChannel, name: null, appliedTags: null, activityAction: null, applicationId: null, voiceChatEnabled: null, upload: null, onThreadCreated: null };
  const tmpResult = description(stateFromStores[12]);
  obj6.name = description(stateFromStores[8]).deriveThreadName(description);
  obj6.appliedTags = appliedTagIds;
  obj6.activityAction = memo;
  let id;
  if (application != null) {
    id = application.id;
  }
  obj6.applicationId = id;
  obj6.voiceChatEnabled = voiceChatEnabled;
  obj6.upload = upload;
  obj6.onThreadCreated = onThreadCreated;
  createForumPostCommon = tmpResult.useCreateForumPostCommon(obj6);
  const tmpResult2 = description(stateFromStores[8]);
  [tmp10, c4] = noop.useState(false);
  let tmp11 = !tmp10;
  if (!tmp10) {
    tmp11 = description.trim().length > 0;
  }
  if (tmp11) {
    tmp11 = description.length <= tmp(tmp2[8]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  }
  noop = tmp11;
  const items3 = [tmp11, createForumPostCommon, description];
  let tmp9 = _slicedToArray(noop.useState(false), 2);
  return {
    application,
    noMicTag,
    voiceChatEnabled,
    voiceToggleDisabled,
    submitting: tmp10,
    canSubmit: tmp11,
    submit: noop.useCallback(createForumPostCommon(function*(arg0, value) {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
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
              closure_0 = tmp3;
              if (closure_5) {
                _undefined(true);
                c2 = 1;
                c1 = 2;
                c3 = 1;
                const obj4 = { value: createForumPostCommon(description), done: false };
                return obj4;
              }
            }
          } else {
            if (1 === tmp7) {
              c2 = 0;
              closure_128_4(false);
            } else if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 !== 2) {
              c2 = 0;
            }
            c2 = 0;
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c3 = 3;
        } catch (tmp16) {
          if (tmp4 === c2) {
            c3 = tmp2;
            throw tmp16;
          } else {
            c1 = tmp;
          }
        }
      }
    }), items3)
  };
});
