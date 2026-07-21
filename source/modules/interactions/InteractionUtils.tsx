// Module ID: 7791
// Function ID: 62190
// Name: _createForOfIteratorHelperLoose
// Dependencies: [0, 4294967295, 4294967295, 0, 0, 0, 0]
// Exports: canRetryInteractionData, executeMessageComponentInteraction, getInteractionStatusViewState

// Module 7791 (_createForOfIteratorHelperLoose)
import closure_3 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

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
function getInteractionTimeoutTimestamp(id) {
  if (null != id) {
    if ("" !== id) {
      const _Number = Number;
      if (!Number.isNaN(id)) {
        let sum = importDefault(dependencyMap[4]).extractTimestamp(id) + 900000;
        const obj = importDefault(dependencyMap[4]);
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
        let sum = importDefault(dependencyMap[4]).extractTimestamp(id) + 3000;
        const obj = importDefault(dependencyMap[4]);
      }
      return sum;
    }
  }
  sum = Date.now();
}
async function _executeMessageComponentInteraction(arg0, arg1) {
  const fn = function*(channelId) {
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
    let fromTimestampResult;
    ({ componentType, messageFlags } = channelId);
    yield undefined;
    let obj = channelId(guildId[4]);
    fromTimestampResult = obj.fromTimestamp(Date.now());
    if (closure_5.canQueueInteraction(messageId, fromTimestampResult)) {
      let obj1 = channelId(guildId[5]);
      yield obj1.unarchiveThreadIfNecessary(channelId);
      let obj2 = applicationId(guildId[6]);
      obj = { messageId };
      obj = { interactionType: applicationId(guildId[7]).InteractionTypes.MESSAGE_COMPONENT, applicationId, customId, componentId };
      obj.data = obj;
      obj.onFailure = function onFailure(code) {
        let tmp2 = null == arg1;
        if (tmp2) {
          tmp2 = null != code;
        }
        if (tmp2) {
          channelId(guildId[9]).sendClydeError(channelId, code);
          const obj = channelId(guildId[9]);
        }
      };
      obj2.addQueued(fromTimestampResult, obj);
      if (null != localState) {
        const obj6 = applicationId(guildId[6]);
        const result = obj6.queueInteractionComponentState(messageId, fromTimestampResult, localState, componentId);
      }
      obj1 = { type: applicationId(guildId[7]).InteractionTypes.MESSAGE_COMPONENT, nonce: fromTimestampResult, guild_id: guildId, channel_id: channelId, message_flags: messageFlags, message_id: messageId, application_id: applicationId, session_id: sessionId.getSessionId() };
      obj2 = { component_type: componentType, custom_id: customId };
      const merged = Object.assign(callback(localState));
      obj1.data = obj2;
      const HTTP = applicationId(guildId[8]).HTTP;
      const obj3 = { url: constants.INTERACTIONS, body: obj1, timeout: 3000, rejectWithError: applicationId(guildId[8]).rejectWithMigratedError() };
      yield HTTP.post(obj3, (arg0) => {
        callback(fromTimestampResult, arg0, applicationId, channelId, guildId);
      });
      const obj10 = applicationId(guildId[8]);
    }
  };
  fn.next();
  return fn;
}
function mapMessageComponentLocalStateForAPI(type) {
  if (null == type) {
    return null;
  } else {
    type = type.type;
    if (arg1(dependencyMap[7]).ComponentType.TEXT_INPUT !== type) {
      if (arg1(dependencyMap[7]).ComponentType.FILE_UPLOAD !== type) {
        if (arg1(dependencyMap[7]).ComponentType.RADIO_GROUP !== type) {
          if (arg1(dependencyMap[7]).ComponentType.CHECKBOX_GROUP !== type) {
            if (arg1(dependencyMap[7]).ComponentType.CHECKBOX !== type) {
              if (arg1(dependencyMap[7]).ComponentType.STRING_SELECT === type) {
                return type;
              } else {
                if (arg1(dependencyMap[7]).ComponentType.USER_SELECT !== type) {
                  if (arg1(dependencyMap[7]).ComponentType.ROLE_SELECT !== type) {
                    if (arg1(dependencyMap[7]).ComponentType.MENTIONABLE_SELECT !== type) {
                      if (arg1(dependencyMap[7]).ComponentType.CHANNEL_SELECT !== type) {
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
      ok(dependencyMap[6]).setFailed(nonce);
      const obj10 = ok(dependencyMap[6]);
    } else {
      if (ok.status >= 400) {
        if (ok.status < 500) {
          if (ok.body) {
            if (ok.body.code === constants.INVALID_FORM_BODY) {
              if (ok.body.errors) {
                const firstSkemaError = ok(dependencyMap[10]).getFirstSkemaError(ok.body.errors);
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
                  importDefault(dependencyMap[11]).dispatch(obj);
                  const obj7 = importDefault(dependencyMap[11]);
                }
                const obj6 = ok(dependencyMap[10]);
                let message;
                if (null != firstSkemaError) {
                  message = firstSkemaError.message;
                }
                ok(dependencyMap[6]).setFailed(nonce, undefined, message);
              }
            }
            if (ok.body.code === constants.UNKNOWN_INTEGRATION) {
              obj = { type: "APPLICATION_COMMAND_EXECUTE_BAD_VERSION", applicationId, channelId };
              let tmp16 = null;
              if (null != arg4) {
                tmp16 = arg4;
              }
              obj.guildId = tmp16;
              importDefault(dependencyMap[11]).dispatch(obj);
              const obj3 = importDefault(dependencyMap[11]);
              ok(dependencyMap[6]).setFailed(nonce, undefined, ok.body.message);
              const obj5 = ok(dependencyMap[6]);
            } else {
              const obj2 = ok(dependencyMap[6]);
              obj2.setFailed(nonce, ok.body.code, ok.body.message, ok.status);
            }
            return tmp13;
          }
        }
      }
      let code;
      obj = ok(dependencyMap[6]);
      const body = ok.body;
      if (null != body) {
        code = body.code;
      }
      obj.setFailed(nonce, code);
    }
  }
}
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ Endpoints: closure_6, AbortCodes: closure_7, MessageStates: closure_8, MessageFlags: closure_9 } = require("__exportStarResult1"));
const obj = { SENDING: 0, [0]: "SENDING", CREATED: 1, [1]: "CREATED", FAILED: 2, [2]: "FAILED", TIMED_OUT: 3, [3]: "TIMED_OUT", EPHEMERAL_SUCCESS: 4, [4]: "EPHEMERAL_SUCCESS" };
const result = arg1(dependencyMap[13]).fileFinishedImporting("modules/interactions/InteractionUtils.tsx");

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
  const tmp10 = interactionType === state2(dependencyMap[7]).InteractionTypes.APPLICATION_COMMAND;
  const isCommandTypeResult = state.isCommandType();
  if (!tmp10) {
    if (isCommandTypeResult) {
      if (state.state === constants2.SENDING) {
        return SENDING;
      }
    }
    if (!tmp10) {
      if (null != state.interaction) {
        let SENDING = obj.TIMED_OUT;
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
    if (options[0].type === arg1(dependencyMap[7]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
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
          let tmp6 = arg1;
          let tmp7 = dependencyMap;
          tmp4 = options1;
          if (options1[0].type === arg1(dependencyMap[7]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
            continue;
          } else {
            let tmp8 = arg1;
            let tmp9 = dependencyMap;
            tmp4 = options1;
            items = options1;
            if (options1[0].type !== arg1(dependencyMap[7]).ApplicationCommandOptionType.SUB_COMMAND) {
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
    while (tmp12 !== arg1(dependencyMap[7]).ApplicationCommandOptionType.ATTACHMENT) {
      let iter2 = tmp10Result();
      iter = iter2;
    }
    return false;
  }
  return true;
};
export const interactionCallbackErrorReason = arg1(dependencyMap[14]).interactionCallbackErrorReason;
