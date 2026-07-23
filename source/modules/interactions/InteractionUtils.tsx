// Module ID: 7798
// Function ID: 62250
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 1194, 7629, 653, 21, 7007, 7799, 1881, 507, 6691, 7800, 686, 4357, 2, 4355]
// Exports: canRetryInteractionData, executeMessageComponentInteraction, getInteractionStatusViewState

// Module 7798 (_createForOfIteratorHelperLoose)
import patchThread from "patchThread";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import ME from "ME";

let closure_6;
let closure_7;
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
function getInteractionTimeoutTimestamp(id) {
  if (null != id) {
    if ("" !== id) {
      const _Number = Number;
      if (!Number.isNaN(id)) {
        let sum = importDefault(21).extractTimestamp(id) + 900000;
        const obj = importDefault(21);
      }
      return sum;
    }
  }
  sum = Date.now();
}
function getInteractionInitialResponseDeadlineTimestamp(id) {
  if (null != id) {
    if ("" !== id) {
      const _Number = Number;
      if (!Number.isNaN(id)) {
        let sum = importDefault(21).extractTimestamp(id) + 3000;
        const obj = importDefault(21);
      }
      return sum;
    }
  }
  sum = Date.now();
}
async function _executeMessageComponentInteraction(arg0, arg1) {
  let iter = (function*(channelId) {
    let applicationId;
    let componentId;
    let componentType;
    let customId;
    let messageFlags;
    let messageId;
    ({ messageId, customId, componentId, applicationId } = channelId);
    channelId = channelId.channelId;
    const guildId = channelId.guildId;
    const localState = channelId.localState;
    let c3;
    ({ componentType, messageFlags } = channelId);
    yield undefined;
    let obj = outer2_1(outer2_2[4]);
    const fromTimestampResult = obj.fromTimestamp(Date.now());
    c3 = fromTimestampResult;
    if (outer2_5.canQueueInteraction(messageId, fromTimestampResult)) {
      let obj1 = outer2_1(outer2_2[5]);
      yield obj1.unarchiveThreadIfNecessary(channelId);
      let obj2 = outer2_0(outer2_2[6]);
      obj = { messageId };
      obj = { interactionType: outer2_0(outer2_2[7]).InteractionTypes.MESSAGE_COMPONENT, applicationId, customId, componentId };
      obj.data = obj;
      obj.onFailure = function onFailure(code) {
        let tmp2 = null == arg1;
        if (tmp2) {
          tmp2 = null != code;
        }
        if (tmp2) {
          outer3_1(outer3_2[9]).sendClydeError(channelId, code);
          const obj = outer3_1(outer3_2[9]);
        }
      };
      obj2.addQueued(tmp3, obj);
      if (null != localState) {
        const obj6 = outer2_0(outer2_2[6]);
        const result = obj6.queueInteractionComponentState(messageId, tmp3, localState, componentId);
      }
      obj1 = { type: outer2_0(outer2_2[7]).InteractionTypes.MESSAGE_COMPONENT, nonce: fromTimestampResult, guild_id: guildId, channel_id: channelId, message_flags: messageFlags, message_id: messageId, application_id: applicationId, session_id: outer2_4.getSessionId() };
      obj2 = { component_type: componentType, custom_id: customId };
      const merged = Object.assign(outer2_16(localState));
      obj1.data = obj2;
      const HTTP = outer2_0(outer2_2[8]).HTTP;
      const obj3 = { url: outer2_6.INTERACTIONS, body: obj1, timeout: 3000, rejectWithError: outer2_0(outer2_2[8]).rejectWithMigratedError() };
      yield HTTP.post(obj3, (arg0) => {
        outer3_17(c3, arg0, applicationId, channelId, guildId);
      });
      const obj10 = outer2_0(outer2_2[8]);
    }
  })();
  iter.next();
  return iter;
}
function mapMessageComponentLocalStateForAPI(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (require(1881) /* PermissionOverwriteType */.ComponentType.TEXT_INPUT !== type) {
      if (require(1881) /* PermissionOverwriteType */.ComponentType.FILE_UPLOAD !== type) {
        if (require(1881) /* PermissionOverwriteType */.ComponentType.RADIO_GROUP !== type) {
          if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX_GROUP !== type) {
            if (require(1881) /* PermissionOverwriteType */.ComponentType.CHECKBOX !== type) {
              if (require(1881) /* PermissionOverwriteType */.ComponentType.STRING_SELECT === type) {
                return type;
              } else {
                if (require(1881) /* PermissionOverwriteType */.ComponentType.USER_SELECT !== type) {
                  if (require(1881) /* PermissionOverwriteType */.ComponentType.ROLE_SELECT !== type) {
                    if (require(1881) /* PermissionOverwriteType */.ComponentType.MENTIONABLE_SELECT !== type) {
                      if (require(1881) /* PermissionOverwriteType */.ComponentType.CHANNEL_SELECT !== type) {
                        return null;
                      }
                    }
                  }
                }
                const selectedOptions = type.selectedOptions;
                const obj = { type: type.type, values: selectedOptions.map((value) => value.value) };
                return obj;
              }
            }
          }
        }
      }
    }
    return null;
  }
}
function handleInteractionResponse(nonce, ok, applicationId, channelId, arg4) {
  if (!ok.ok) {
    if (ok.hasErr) {
      require(7799) /* _fetchMessageInteractionData */.setFailed(nonce);
      const obj10 = require(7799) /* _fetchMessageInteractionData */;
    } else {
      if (ok.status >= 400) {
        if (ok.status < 500) {
          if (ok.body) {
            if (ok.body.code === constants.INVALID_FORM_BODY) {
              if (ok.body.errors) {
                const firstSkemaError = require(7800) /* getFirstSkemaFieldError */.getFirstSkemaError(ok.body.errors);
                let tmp25 = null == firstSkemaError;
                if (!tmp25) {
                  let tmp26 = "INTERACTION_APPLICATION_COMMAND_INVALID_VERSION" !== firstSkemaError.code;
                  if (tmp26) {
                    tmp26 = "INTERACTION_APPLICATION_COMMAND_INVALID" !== firstSkemaError.code;
                  }
                  tmp25 = tmp26;
                }
                if (!tmp25) {
                  let obj = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId, channelId };
                  let tmp29 = null;
                  if (null != arg4) {
                    tmp29 = arg4;
                  }
                  obj.guildId = tmp29;
                  importDefault(686).dispatch(obj);
                  const obj7 = importDefault(686);
                }
                const obj6 = require(7800) /* getFirstSkemaFieldError */;
                let message;
                if (null != firstSkemaError) {
                  message = firstSkemaError.message;
                }
                require(7799) /* _fetchMessageInteractionData */.setFailed(nonce, undefined, message);
              }
            }
            if (ok.body.code === constants.UNKNOWN_INTEGRATION) {
              obj = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId, channelId };
              let tmp16 = null;
              if (null != arg4) {
                tmp16 = arg4;
              }
              obj.guildId = tmp16;
              importDefault(686).dispatch(obj);
              const obj3 = importDefault(686);
              require(7799) /* _fetchMessageInteractionData */.setFailed(nonce, undefined, ok.body.message);
              const obj5 = require(7799) /* _fetchMessageInteractionData */;
            } else {
              const obj2 = require(7799) /* _fetchMessageInteractionData */;
              obj2.setFailed(nonce, ok.body.code, ok.body.message, ok.status);
            }
            return tmp13;
          }
        }
      }
      let code;
      obj = require(7799) /* _fetchMessageInteractionData */;
      const body = ok.body;
      if (null != body) {
        code = body.code;
      }
      obj.setFailed(nonce, code);
    }
  }
}
({ Endpoints: closure_6, AbortCodes: closure_7, MessageStates: closure_8, MessageFlags: closure_9 } = ME);
let obj = { SENDING: 0, [0]: "SENDING", CREATED: 1, [1]: "CREATED", FAILED: 2, [2]: "FAILED", TIMED_OUT: 3, [3]: "TIMED_OUT", EPHEMERAL_SUCCESS: 4, [4]: "EPHEMERAL_SUCCESS" };
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/interactions/InteractionUtils.tsx");

export { getInteractionTimeoutTimestamp };
export { getInteractionInitialResponseDeadlineTimestamp };
export const executeMessageComponentInteraction = function executeMessageComponentInteraction(arg0) {
  return _executeMessageComponentInteraction(...arguments);
};
export { handleInteractionResponse };
export const InteractionStatusViewState = obj;
export const getInteractionStatusViewState = function getInteractionStatusViewState(state, state2) {
  if (null != state2) {
    state = state2.state;
  }
  let tmp = state.state === constants2.SENT;
  if (tmp) {
    const _Date = Date;
    tmp = getInteractionTimeoutTimestamp(state.id) < Date.now();
    const tmp3 = getInteractionTimeoutTimestamp(state.id);
  }
  let tmp5 = state.state === constants2.SEND_FAILED;
  if (tmp5) {
    const _Date2 = Date;
    tmp5 = getInteractionInitialResponseDeadlineTimestamp(state.id) < Date.now();
    const tmp7 = getInteractionInitialResponseDeadlineTimestamp(state.id);
  }
  let interactionType;
  if (null != state2) {
    interactionType = state2.data.interactionType;
  }
  const tmp10 = interactionType === require(1881) /* PermissionOverwriteType */.InteractionTypes.APPLICATION_COMMAND;
  const isCommandTypeResult = state.isCommandType();
  if (!tmp10) {
    if (isCommandTypeResult) {
      if (state.state === constants2.SENDING) {
        return SENDING;
      }
    }
    if (!tmp10) {
      if (null != state.interaction) {
        SENDING = obj.TIMED_OUT;
      }
      if (isCommandTypeResult) {
        if (state.state === constants2.SEND_FAILED) {
          SENDING = obj.FAILED;
        }
      }
      if (null != state.interaction) {
        if (state.hasFlag(constants3.EPHEMERAL)) {
          SENDING = obj.EPHEMERAL_SUCCESS;
        }
      }
    }
    SENDING = obj.CREATED;
  }
  SENDING = obj.SENDING;
};
export const canRetryInteractionData = function canRetryInteractionData(interactionData) {
  const options = interactionData.options;
  let length;
  if (null != options) {
    length = options.length;
  }
  let items = options;
  if (1 === length) {
    let tmp4 = options;
    if (options[0].type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
      while (true) {
        let options1 = tmp4[0].options;
        let length1;
        if (null != options1) {
          length1 = options1.length;
        }
        items = options1;
        if (1 !== length1) {
          break;
        } else {
          let tmp6 = require;
          let tmp7 = dependencyMap;
          tmp4 = options1;
          if (options1[0].type === require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
            continue;
          } else {
            let tmp8 = require;
            let tmp9 = dependencyMap;
            tmp4 = options1;
            items = options1;
            if (options1[0].type !== require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.SUB_COMMAND) {
              break;
            }
          }
          continue;
        }
      }
    } else {
      tmp4 = options;
      items = options;
    }
  }
  if (null == items) {
    items = [];
  }
  const tmp10Result = _createForOfIteratorHelperLoose(items);
  let iter = tmp10Result();
  if (!iter.done) {
    while (tmp12 !== require(1881) /* PermissionOverwriteType */.ApplicationCommandOptionType.ATTACHMENT) {
      let iter2 = tmp10Result();
      iter = iter2;
    }
    return false;
  }
  return true;
};
export const interactionCallbackErrorReason = require("interactionCallbackErrorReason").interactionCallbackErrorReason;
