// Module ID: 12185
// Function ID: 12186
// Name: useCreateGameInvitePost
// Dependencies: [5, 32, 19, 8809, 5592, 1086, 558, 576, 6691, 8817, 11135, 504, 8603, 2]

// Module 12185 (useCreateGameInvitePost)
import Constants from "Constants" /* 1086 */;
import GameInvitesChannelUtils from "GameInvitesChannelUtils" /* 6691 */;
import getCurrentUserPresenceActivityDefault from "getCurrentUserPresenceActivity" /* 11135 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import LocalActivityStore from "LocalActivityStore" /* 8809 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5592 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c3, current;

let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const ActivityActionTypes = Constants.ActivityActionTypes;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let appliedTagIds;
  let closure_4;
  let createForumPostCommon;
  let description;
  let first;
  let noMicTag;
  let onThreadCreated;
  let parentChannel;
  let tmp11;
  let tmp17;
  let tmp25;
  let tmp8;
  let tmp9;
  let upload;
  let voiceChatEnabled;
  let voiceToggleDisabled;
  const tmp = description;
  const tmp2 = createForumPostCommon;
  let obj = description(createForumPostCommon[7]);
  const cResult = obj.c(34);
  ({ parentChannel, description } = arg0);
  ({ appliedTagIds, upload, onThreadCreated } = arg0);
  let obj2 = description(createForumPostCommon[8]);
  const application = obj2.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj3 = description(createForumPostCommon[9]);
  const applicationIdsForGame = obj3.useApplicationIdsForGame(parentChannel.gameId);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let tmp6 = LocalActivityStore;
    const items = [LocalActivityStore, ];
    let tmp7 = SelfPresenceStore;
    items[1] = SelfPresenceStore;
    cResult[0] = items;
    first = items;
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
    tmp9 = items1;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = tmp(tmp2[11]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8, tmp9);
  if (cResult[4] !== parentChannel.availableTags) {
    let availableTags = parentChannel.availableTags;
    if (availableTags == null) {
      availableTags = [];
    }
    cResult[4] = parentChannel.availableTags;
    cResult[5] = availableTags;
    tmp11 = availableTags;
  } else {
    tmp11 = cResult[5];
  }
  const tmpResult5 = tmp(tmp2[8]);
  const gameInviteVoiceChatState = tmpResult5.useGameInviteVoiceChatState(tmp11, appliedTagIds);
  ({ noMicTag, voiceChatEnabled, voiceToggleDisabled } = gameInviteVoiceChatState);
  let tmp14;
  if (null != stateFromStores) {
    const tmpResult6 = tmp(tmp2[8]);
    if (tmpResult6.canInviteToActivity(stateFromStores)) {
      let tmp15;
      if (cResult[6] !== stateFromStores) {
        let obj4 = { type: ActivityActionTypes.JOIN, activity: stateFromStores };
        cResult[6] = stateFromStores;
        cResult[7] = obj4;
        tmp15 = obj4;
      } else {
        tmp15 = cResult[7];
      }
      tmp14 = tmp15;
    }
  }
  if (cResult[8] !== description) {
    const tmpResult7 = tmp(tmp2[8]);
    const deriveThreadNameResult = tmpResult7.deriveThreadName(description);
    cResult[8] = description;
    cResult[9] = deriveThreadNameResult;
    tmp17 = deriveThreadNameResult;
  } else {
    tmp17 = cResult[9];
  }
  let id;
  if (application != null) {
    id = application.id;
  }
  if (cResult[10] === tmp14) {
    if (cResult[11] === onThreadCreated) {
      if (cResult[12] === parentChannel) {
        if (cResult[13] === tmp17) {
          if (cResult[14] === appliedTagIds) {
            if (cResult[15] === id) {
              if (cResult[16] === upload) {
                let tmp20;
                if (cResult[17] === voiceChatEnabled) {
                  tmp20 = cResult[18];
                }
                const tmpResult8 = tmp(tmp2[12]);
                createForumPostCommon = tmpResult8.useCreateForumPostCommon(tmp20);
                [tmp25, _asyncToGenerator] = react.useState(false);
                _slicedToArray(react.useState(false), 2);
                if (cResult[19] === description) {
                  let tmp26;
                  if (cResult[20] === tmp25) {
                    tmp26 = cResult[21];
                  }
                  _slicedToArray = tmp26;
                  if (cResult[22] === tmp26) {
                    if (cResult[23] === createForumPostCommon) {
                      let tmp28;
                      if (cResult[24] === description) {
                        tmp28 = cResult[25];
                      }
                      if (cResult[26] === tmp26) {
                        if (cResult[27] === noMicTag) {
                          if (cResult[28] === application) {
                            if (cResult[29] === tmp28) {
                              if (cResult[30] === tmp25) {
                                if (cResult[31] === voiceChatEnabled) {
                                  let tmp30;
                                  if (cResult[32] === voiceToggleDisabled) {
                                    tmp30 = cResult[33];
                                  }
                                  return tmp30;
                                }
                              }
                            }
                          }
                        }
                      }
                      const obj5 = { application, noMicTag, voiceChatEnabled, voiceToggleDisabled, submitting: tmp25, canSubmit: tmp26, submit: tmp28 };
                      cResult[26] = tmp26;
                      cResult[27] = noMicTag;
                      cResult[28] = application;
                      cResult[29] = tmp28;
                      cResult[30] = tmp25;
                      cResult[31] = voiceChatEnabled;
                      cResult[32] = voiceToggleDisabled;
                      cResult[33] = obj5;
                      tmp30 = obj5;
                    }
                  }
                  let closure_0 = _asyncToGenerator(async (arg0, value) => {
                    let v0;
                    let v3;
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
                            closure_0 = tmp;
                            const tmp8 = closure_1_4;
                            if (tmp8) {
                              c3(true);
                              current = 1;
                              c1 = 2;
                              c3 = 1;
                              const obj4 = { value: current(closure_0), done: false };
                              return obj4;
                            }
                          }
                        } else if (1 === tmp4) {
                          current = 0;
                          c3(false);
                        } else if (arg0 === 1) {
                          c3 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          current = 0;
                          c3 = 3;
                          const obj = { value, done: true };
                          return obj;
                        } else {
                          current = 0;
                        }
                        c3 = 3;
                        return { value: "IconComponent", done: null };
                      } catch (tmp13) {
                        if (0 === current) {
                          c3 = 3;
                          throw tmp13;
                        } else {
                          c1 = 1;
                        }
                      }
                    }
                  });
                  const fn2 = function() {
                    return closure_0(...arguments);
                  };
                  cResult[22] = tmp26;
                  cResult[23] = createForumPostCommon;
                  cResult[24] = description;
                  cResult[25] = fn2;
                  tmp28 = fn2;
                }
                let tmp27 = !tmp25;
                if (tmp27) {
                  tmp27 = description.trim().length > 0;
                }
                if (tmp27) {
                  tmp27 = description.length <= tmp(tmp2[8]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
                }
                cResult[19] = description;
                cResult[20] = tmp25;
                cResult[21] = tmp27;
                tmp26 = tmp27;
              }
            }
          }
        }
      }
    }
  }
  const obj6 = { parentChannel, name: tmp17, appliedTags: appliedTagIds, activityAction: tmp14, applicationId: id, voiceChatEnabled, upload, onThreadCreated };
  cResult[10] = tmp14;
  cResult[11] = onThreadCreated;
  cResult[12] = parentChannel;
  cResult[13] = tmp17;
  cResult[14] = appliedTagIds;
  cResult[15] = id;
  cResult[16] = upload;
  cResult[17] = voiceChatEnabled;
  cResult[18] = obj6;
  tmp20 = obj6;
}) : ((appliedTagIds) => {
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
  let obj = description(stateFromStores[8]);
  const application = obj.useGameInvitesChannelOfficialApplication(parentChannel.id).application;
  let obj2 = description(stateFromStores[9]);
  const applicationIdsForGame = obj2.useApplicationIdsForGame(parentChannel.gameId);
  let obj3 = description(stateFromStores[11]);
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
  let tmp5 = description(stateFromStores[8]);
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
  const useCreateForumPostCommon = tmp(tmp2[12]).useCreateForumPostCommon;
  tmp(tmp2[12]);
  id = undefined;
  tmpResult2 = tmp(tmp2[8]);
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
    tmp13 = description.length <= tmp(tmp2[8]).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
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
          return { value: "IconComponent", done: null };
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
          return { value: "IconComponent", done: null };
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
});
const result = size.fileFinishedImporting("modules/game_invite_channels/useCreateGameInvitePost.tsx");

export const useCreateGameInvitePost = tmp2;
