// Module ID: 12374
// Function ID: 12375
// Name: useJoinRequestButtonActions
// Dependencies: [5, 32, 19, 2065, 1085, 4809, 1126, 6949, 5056, 6116, 4942, 12375, 2000, 2]
// Exports: useJoinRequestButtonActions

// Module 12374 (useJoinRequestButtonActions)
import Constants from "Constants" /* 1085 */;
import asyncRequire from "asyncRequire" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;
import size from "module_2" /* 2 */;

let c4, c5;

const Routes = Constants.Routes;
const result = size.fileFinishedImporting("modules/guild_member_verification/native/useJoinRequestButtonActions.tsx");

export const useJoinRequestButtonActions = function useJoinRequestButtonActions(joinRequest, interviewChannelId, cResult) {
  let callback1;
  let items1;
  let items2;
  let onDismiss = cResult;
  let obj = joinRequest;
  if (joinRequest == null) {
    obj = {};
  }
  const guildId = obj.guildId;
  const userId = obj.userId;
  const joinRequestId = obj.joinRequestId;
  let tmp = userId(joinRequestId.useState(false), 2);
  const submitting = tmp[0];
  let closure_7 = tmp[1];
  const onError = joinRequestId.useCallback(() => {
    let intl;
    const obj = { text: intl.string(joinRequest(onDismiss[6]).t.R0RpRX) };
    const open = interviewChannelId(onDismiss[5]).open;
    interviewChannelId(onDismiss[5]);
    intl = joinRequest(onDismiss[6]).intl;
    open("JOIN_REQUEST_ERROR", obj);
  }, []);
  const items = [guildId, joinRequestId, interviewChannelId, onError, submitting, userId];
  let obj2 = {
    approveRequest: joinRequestId.useCallback(guildId(function*(arg0, value) {
      let closure_0;
      let closure_2;
      let intl;
      let v2;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        let c3;
        try {
          c4 = 2;
          if (0 === interviewChannelId) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              const tmp56 = first;
              if (!tmp56) {
                if (null != guildId) {
                  if (null != userId) {
                    if (null != joinRequestId) {
                      closure_7(true);
                      c3 = 2;
                      const obj6 = interviewChannelId(onDismiss[9]);
                      interviewChannelId = 3;
                      c4 = 1;
                      const obj8 = { value: obj6.updateGuildJoinRequest(guildId, userId, joinRequestId, tmp(onDismiss[10]).GuildJoinRequestApplicationStatuses.APPROVED), done: false };
                      return obj8;
                    }
                  }
                }
              }
            }
          } else if (1 === interviewChannelId) {
            c3 = 0;
            closure_128_7(false);
            const obj5 = interviewChannelId(onDismiss[8]);
            obj5.hideActionSheet();
            throw onDismiss;
          } else {
            if (2 === interviewChannelId) {
              c3 = 1;
              closure_128_8();
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_128_7(false);
              const obj2 = interviewChannelId(onDismiss[8]);
              obj2.hideActionSheet();
              c4 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              const obj = { text: intl.string(tmp(onDismiss[6]).t.WXHcq5), variant: "success" };
              const open = interviewChannelId(onDismiss[5]).open;
              const tmp8 = interviewChannelId(onDismiss[5]);
              intl = tmp(onDismiss[6]).intl;
              open("JOIN_REQUEST_APPROVE", obj);
              c3 = 1;
            }
            c3 = 0;
            closure_128_7(false);
            const obj4 = interviewChannelId(onDismiss[8]);
            obj4.hideActionSheet();
          }
          c4 = 3;
          return { value: "IconComponent", done: "+51" };
        } catch (tmp49) {
          onDismiss = tmp49;
          if (0 === c3) {
            c4 = 3;
            throw tmp49;
          } else if (1 === tmp51) {
            interviewChannelId = 1;
          } else {
            interviewChannelId = 2;
          }
        }
      }
    }), items1),
    rejectRequest: joinRequestId.useCallback(() => {
      let tmp2 = null != joinRequest;
      const tmp = joinRequest;
      if (tmp2) {
        tmp2 = null != guildId;
      }
      if (tmp2) {
        tmp2 = null != userId;
      }
      if (tmp2) {
        tmp2 = null != joinRequestId;
      }
      if (tmp2) {
        const openLazy = ActionSheetActionCreatorsDefault.openLazy;
        const _HermesInternal = HermesInternal;
        ActionSheetActionCreatorsDefault;
        const obj = { joinRequest: tmp, onError, onDismiss };
        const tmp10 = asyncRequire(12375, dependencyMap.paths);
        openLazy(tmp10, "RejectionReason-" + joinRequestId, obj);
      }
    }, items2),
    submitting,
    handleOpenInterview: callback1
  };
  callback1 = joinRequestId.useCallback(guildId(function*(arg0, value) {
    let channel;
    let closure_1;
    let closure_2;
    let obj11;
    let tmp17;
    let tmp54;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      let c3;
      try {
        let closure_0;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            const tmp63 = first;
            if (!tmp63) {
              if (null != guildId) {
                if (null != userId) {
                  if (null != joinRequestId) {
                    channel = channel.getChannel(tmp);
                    if (null != channel) {
                      c4 = 1;
                      c5 = 1;
                      const obj5 = { value: tmp54(closure_1_7.CHANNEL(null, channel.id), { openChannel: true, navigationReplace: false }), done: false };
                      tmp54 = tmp(onDismiss[7]);
                      return obj5;
                    } else {
                      closure_7(true);
                      c3 = 2;
                      c4 = 4;
                      c5 = 1;
                      const obj9 = { value: obj11.createOrEnterJoinRequestInterview(tmp65, false), done: false };
                      obj11 = tmp(onDismiss[9]);
                      return obj9;
                    }
                  }
                }
              }
            }
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const obj8 = tmp(onDismiss[8]);
            obj8.hideActionSheet();
            c5 = 3;
            const obj12 = { value: undefined, done: true };
            return obj12;
          }
        } else if (2 === c4) {
          c3 = 0;
          closure_129_7(false);
          const obj7 = tmp(onDismiss[8]);
          obj7.hideActionSheet();
          throw onDismiss;
        } else {
          if (3 === c4) {
            c3 = 1;
            closure_129_8();
          } else {
            if (4 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                closure_129_7(false);
                const obj4 = tmp(onDismiss[8]);
                obj4.hideActionSheet();
                c5 = 3;
                const obj13 = { value, done: true };
                return obj13;
              } else {
                closure_0 = value;
                if (null != closure_0) {
                  c4 = 5;
                  c5 = 1;
                  const obj14 = { value: tmp17(closure_1_7.CHANNEL(null, closure_0), { openChannel: true, navigationReplace: false }), done: false };
                  tmp17 = tmp(onDismiss[7]);
                  return obj14;
                }
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              closure_129_7(false);
              const obj = tmp(onDismiss[8]);
              obj.hideActionSheet();
              c5 = 3;
              const obj15 = { value, done: true };
              return obj15;
            }
            c3 = 1;
          }
          c3 = 0;
          closure_129_7(false);
          const obj6 = tmp(onDismiss[8]);
          obj6.hideActionSheet();
        }
        c5 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp56) {
        onDismiss = tmp56;
        if (0 === c3) {
          c5 = 3;
          throw tmp56;
        } else if (1 === tmp58) {
          c4 = 2;
        } else {
          c4 = 3;
        }
      }
    }
  }), items);
  items1 = [guildId, joinRequestId, onError, submitting, userId];
  items2 = [guildId, joinRequestId, joinRequest, cResult, onError, userId];
  return obj2;
};
