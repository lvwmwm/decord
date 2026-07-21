// Module ID: 8177
// Function ID: 64539
// Name: _createForOfIteratorHelperLoose
// Dependencies: []
// Exports: default, retryCommandMessage

// Module 8177 (_createForOfIteratorHelperLoose)
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
async function _executeCommand(arg0, arg1) {
  const fn = function*(source) {
    let command;
    let commandOrigin;
    let commandTargetId;
    let context;
    let interactionLifecycleOptionsFactory;
    let iter;
    let maxSizeCallback;
    let optionValues;
    let rootCommand;
    let rootCommand2;
    let sectionName;
    ({ command, optionValues } = source);
    ({ context, commandTargetId, commandOrigin, maxSizeCallback } = source);
    if (commandOrigin === undefined) {
      source = optionValues;
      commandOrigin = optionValues(closure_3[9]).CommandOrigin.CHAT;
    }
    ({ interactionLifecycleOptionsFactory, sectionName } = source);
    if (interactionLifecycleOptionsFactory === undefined) {
      interactionLifecycleOptionsFactory = closure_22;
    }
    source = source.source;
    yield undefined;
    if (null != context.channel) {
      source = store;
      source = store.getSource(context.channel.id);
      commandOrigin = store.getCommandOrigin(context.channel.id);
      if (null == context.autocomplete) {
        let obj = callback(closure_3[10]);
        obj = { type: "APPLICATION_COMMAND_USED", context, command, commandOrigin };
        obj.dispatch(obj);
      }
      let obj2 = callback(closure_3[11]);
      yield obj2.unarchiveThreadIfNecessary(context.channel.id);
      const items = [];
      const items1 = [];
      let obj3 = optionValues(closure_3[12]);
      const commandAttachmentDraftType = obj3.getCommandAttachmentDraftType(commandOrigin);
      if (null != command.options) {
        source = callback2;
        source = callback2(command.options);
        const iter3 = source();
        source = globalThis;
        let iter2 = iter3;
        if (!iter3.done) {
          do {
            let value = iter2.value;
            let tmp15 = closure_0;
            let tmp16 = closure_3;
            let tmp17 = source;
            let tmp18 = source;
            let tmp19 = source;
            let tmp20 = source;
            let tmp21 = source;
            let tmp22 = source;
            let tmp23 = source;
            let tmp24 = source;
            let tmp25 = source;
            let tmp26 = source;
            let tmp27 = source;
            let tmp28 = source;
            let tmp29 = source;
            let tmp30 = source;
            let tmp31 = source;
            let tmp32 = source;
            let tmp33 = source;
            let tmp34 = source;
            let tmp35 = source;
            let tmp36 = source;
            let tmp37 = source;
            let tmp38 = source;
            let tmp39 = source;
            if (value.type !== closure_0(closure_3[13]).ApplicationCommandOptionType.SUB_COMMAND) {
              source = closure_0;
              source = closure_3;
              tmp17 = source;
              tmp18 = source;
              tmp19 = source;
              tmp20 = source;
              tmp21 = source;
              tmp22 = source;
              tmp23 = source;
              tmp24 = source;
              tmp25 = source;
              tmp26 = source;
              tmp27 = source;
              tmp28 = source;
              tmp29 = source;
              tmp30 = source;
              tmp31 = source;
              tmp32 = source;
              tmp33 = source;
              tmp34 = source;
              tmp35 = source;
              tmp36 = source;
              tmp37 = source;
              tmp38 = source;
              tmp39 = source;
              if (value.type !== closure_0(closure_3[13]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
                tmp17 = source;
                tmp18 = source;
                tmp19 = source;
                tmp20 = source;
                tmp21 = source;
                tmp22 = source;
                tmp23 = source;
                tmp24 = source;
                tmp25 = source;
                tmp26 = source;
                tmp27 = source;
                tmp28 = source;
                tmp29 = source;
                tmp30 = source;
                tmp31 = source;
                tmp32 = source;
                tmp33 = source;
                tmp34 = source;
                tmp35 = source;
                tmp36 = source;
                tmp37 = source;
                tmp38 = source;
                tmp39 = source;
                if (value.name in optionValues) {
                  let autocomplete = context.autocomplete;
                  let name;
                  if (null != autocomplete) {
                    name = autocomplete.name;
                  }
                  let tmp41 = name === value.name || undefined;
                  let tmp42 = closure_0;
                  let tmp43 = closure_3;
                  if (value.type !== closure_0(closure_3[13]).ApplicationCommandOptionType.STRING) {
                    let tmp56 = closure_0;
                    let tmp57 = closure_3;
                    if (value.type !== closure_0(closure_3[13]).ApplicationCommandOptionType.ATTACHMENT) {
                      let tmp62 = closure_2;
                      let tmp63 = closure_3;
                      let obj8 = closure_2(closure_3[14]);
                      let filterEmptyResult = obj8.filterEmpty(optionValues[value.name]);
                      let tmp64 = closure_1;
                      let tmp66 = null != context.autocomplete;
                      let tmp65 = closure_1(closure_3[16]);
                      if (!tmp66) {
                        tmp66 = 1 === filterEmptyResult.length;
                      }
                      let _HermesInternal2 = HermesInternal;
                      let tmp65Result = tmp65(tmp66, "Option \"" + value.name + "\" expects a single option type");
                      if (null != filterEmptyResult[0]) {
                        let first = filterEmptyResult[0];
                        obj = first;
                        if (null == first) {
                          obj = { v: "<string:3444703234>", w: "<string:299071619>" };
                        }
                        let type = value.type;
                        let tmp69 = closure_0;
                        let tmp70 = closure_3;
                        if (closure_0(closure_3[13]).ApplicationCommandOptionType.CHANNEL === type) {
                          if ("channelMention" === obj.type) {
                            let roleId = obj.channelId;
                            let tmp75 = source;
                            let tmp76 = source;
                            let tmp77 = source;
                            let tmp78 = source;
                            let tmp79 = source;
                            let tmp80 = source;
                            let tmp81 = source;
                            let tmp82 = source;
                            let tmp83 = source;
                            let tmp84 = source;
                            let tmp85 = source;
                            let tmp86 = source;
                            let tmp87 = source;
                          } else {
                            tmp75 = source;
                            tmp76 = source;
                            tmp77 = source;
                            tmp78 = source;
                            tmp79 = source;
                            tmp80 = source;
                            tmp81 = source;
                            tmp82 = source;
                            tmp83 = source;
                            tmp84 = source;
                            tmp85 = source;
                            tmp86 = source;
                            tmp87 = source;
                            if ("text" === obj.type) {
                              source = closure_0;
                              source = closure_3;
                              let obj33 = closure_0(closure_3[12]);
                              if (obj33.isSnowflake(obj.text)) {
                                let str7 = obj.text;
                                roleId = str7.trim();
                                tmp75 = source;
                                tmp76 = source;
                                tmp77 = source;
                                tmp78 = source;
                                tmp79 = source;
                                tmp80 = source;
                                tmp81 = source;
                                tmp82 = source;
                                tmp83 = source;
                                tmp84 = source;
                                tmp85 = source;
                                tmp86 = source;
                                tmp87 = source;
                              } else {
                                source = closure_0;
                                source = closure_3;
                                let obj21 = closure_0(closure_3[17]);
                                let guild6 = context.guild;
                                source = undefined;
                                if (null != guild6) {
                                  source = guild6.id;
                                }
                                source = obj21.resolveApplicationCommandOption(obj.text, source, context.channel.id);
                                source = closure_1;
                                source = closure_3;
                                source = undefined;
                                source = closure_1(closure_3[16]);
                                if (null != source) {
                                  source = source.type;
                                }
                                let _HermesInternal7 = HermesInternal;
                                source = source("channelMention" === source, "Failed to resolve " + obj.text);
                                roleId = source.channelId;
                                tmp75 = guild6;
                                tmp76 = source;
                                tmp77 = source;
                                tmp78 = source;
                                tmp79 = source;
                                tmp80 = source;
                                tmp81 = source;
                                tmp82 = source;
                                tmp83 = source;
                                tmp84 = source;
                                tmp85 = source;
                                tmp86 = source;
                                tmp87 = source;
                              }
                            }
                          }
                        } else {
                          source = closure_0;
                          source = closure_3;
                          if (closure_0(closure_3[13]).ApplicationCommandOptionType.ROLE === type) {
                            if ("roleMention" === obj.type) {
                              roleId = obj.roleId;
                              tmp75 = source;
                              tmp76 = source;
                              tmp77 = source;
                              tmp78 = source;
                              tmp79 = source;
                              tmp80 = source;
                              tmp81 = source;
                              tmp82 = source;
                              tmp83 = source;
                              tmp84 = source;
                              tmp85 = source;
                              tmp86 = source;
                              tmp87 = source;
                            } else if ("text" === obj.type) {
                              source = closure_0;
                              source = closure_3;
                              let obj18 = closure_0(closure_3[12]);
                              if (obj18.isSnowflake(obj.text)) {
                                let str6 = obj.text;
                                roleId = str6.trim();
                                tmp75 = source;
                                tmp76 = source;
                                tmp77 = source;
                                tmp78 = source;
                                tmp79 = source;
                                tmp80 = source;
                                tmp81 = source;
                                tmp82 = source;
                                tmp83 = source;
                                tmp84 = source;
                                tmp85 = source;
                                tmp86 = source;
                                tmp87 = source;
                              } else {
                                source = closure_0;
                                source = closure_3;
                                let obj19 = closure_0(closure_3[17]);
                                let text2 = obj.text;
                                let guild5 = context.guild;
                                source = undefined;
                                if (null != guild5) {
                                  source = guild5.id;
                                }
                                let obj1 = { allowUsers: false };
                                source = obj19;
                                source = text2;
                                source = obj1;
                                source = obj19.resolveApplicationCommandOption(text2, source, context.channel.id, obj1);
                                source = closure_1;
                                source = closure_3;
                                source = undefined;
                                source = closure_1(closure_3[16]);
                                if (null != source) {
                                  source = source.type;
                                }
                                let _HermesInternal6 = HermesInternal;
                                source = source("roleMention" === source, "Failed to resolve " + obj.text);
                                roleId = source.roleId;
                                tmp75 = source;
                                tmp76 = source;
                                tmp77 = guild5;
                                tmp78 = source;
                                tmp79 = source;
                                tmp80 = source;
                                tmp81 = source;
                                tmp82 = source;
                                tmp83 = source;
                                tmp84 = source;
                                tmp85 = source;
                                tmp86 = source;
                                tmp87 = source;
                              }
                            } else {
                              tmp75 = source;
                              tmp76 = source;
                              tmp77 = source;
                              tmp78 = source;
                              tmp79 = source;
                              tmp80 = source;
                              tmp81 = source;
                              tmp82 = source;
                              tmp83 = source;
                              tmp84 = source;
                              tmp85 = source;
                              tmp86 = source;
                              tmp87 = source;
                              if ("textMention" === obj.type) {
                                tmp75 = source;
                                tmp76 = source;
                                tmp77 = source;
                                tmp78 = source;
                                tmp79 = source;
                                tmp80 = source;
                                tmp81 = source;
                                tmp82 = source;
                                tmp83 = source;
                                tmp84 = source;
                                tmp85 = source;
                                tmp86 = source;
                                tmp87 = source;
                                if ("@everyone" === obj.text) {
                                  let guild7 = context.guild;
                                  source = undefined;
                                  if (null != guild7) {
                                    source = guild7.id;
                                  }
                                  roleId = source;
                                  tmp75 = source;
                                  tmp76 = source;
                                  tmp77 = source;
                                  tmp78 = source;
                                  tmp79 = guild7;
                                  tmp80 = source;
                                  tmp81 = source;
                                  tmp82 = source;
                                  tmp83 = source;
                                  tmp84 = source;
                                  tmp85 = source;
                                  tmp86 = source;
                                  tmp87 = source;
                                }
                              }
                            }
                          } else {
                            source = closure_0;
                            source = closure_3;
                            if (closure_0(closure_3[13]).ApplicationCommandOptionType.USER === type) {
                              if ("userMention" === obj.type) {
                                roleId = obj.userId;
                                tmp75 = source;
                                tmp76 = source;
                                tmp77 = source;
                                tmp78 = source;
                                tmp79 = source;
                                tmp80 = source;
                                tmp81 = source;
                                tmp82 = source;
                                tmp83 = source;
                                tmp84 = source;
                                tmp85 = source;
                                tmp86 = source;
                                tmp87 = source;
                              } else {
                                tmp75 = source;
                                tmp76 = source;
                                tmp77 = source;
                                tmp78 = source;
                                tmp79 = source;
                                tmp80 = source;
                                tmp81 = source;
                                tmp82 = source;
                                tmp83 = source;
                                tmp84 = source;
                                tmp85 = source;
                                tmp86 = source;
                                tmp87 = source;
                                if ("text" === obj.type) {
                                  source = closure_0;
                                  source = closure_3;
                                  let obj32 = closure_0(closure_3[12]);
                                  if (obj32.isSnowflake(obj.text)) {
                                    let str5 = obj.text;
                                    roleId = str5.trim();
                                    tmp75 = source;
                                    tmp76 = source;
                                    tmp77 = source;
                                    tmp78 = source;
                                    tmp79 = source;
                                    tmp80 = source;
                                    tmp81 = source;
                                    tmp82 = source;
                                    tmp83 = source;
                                    tmp84 = source;
                                    tmp85 = source;
                                    tmp86 = source;
                                    tmp87 = source;
                                  } else {
                                    source = closure_0;
                                    source = closure_3;
                                    let obj16 = closure_0(closure_3[17]);
                                    let text = obj.text;
                                    let guild4 = context.guild;
                                    source = undefined;
                                    if (null != guild4) {
                                      source = guild4.id;
                                    }
                                    obj2 = { allowRoles: false };
                                    source = obj16;
                                    source = text;
                                    source = obj2;
                                    source = obj16.resolveApplicationCommandOption(text, source, context.channel.id, obj2);
                                    source = closure_1;
                                    source = closure_3;
                                    source = undefined;
                                    source = closure_1(closure_3[16]);
                                    if (null != source) {
                                      source = source.type;
                                    }
                                    let _HermesInternal5 = HermesInternal;
                                    source = source("userMention" === source, "Failed to resolve " + obj.text);
                                    roleId = source.userId;
                                    tmp75 = source;
                                    tmp76 = source;
                                    tmp77 = source;
                                    tmp78 = source;
                                    tmp79 = source;
                                    tmp80 = guild4;
                                    tmp81 = source;
                                    tmp82 = source;
                                    tmp83 = source;
                                    tmp84 = source;
                                    tmp85 = source;
                                    tmp86 = source;
                                    tmp87 = source;
                                  }
                                }
                              }
                            } else {
                              source = closure_0;
                              source = closure_3;
                              if (closure_0(closure_3[13]).ApplicationCommandOptionType.MENTIONABLE === type) {
                                if ("userMention" === obj.type) {
                                  roleId = obj.userId;
                                  tmp75 = source;
                                  tmp76 = source;
                                  tmp77 = source;
                                  tmp78 = source;
                                  tmp79 = source;
                                  tmp80 = source;
                                  tmp81 = source;
                                  tmp82 = source;
                                  tmp83 = source;
                                  tmp84 = source;
                                  tmp85 = source;
                                  tmp86 = source;
                                  tmp87 = source;
                                } else if ("roleMention" === obj.type) {
                                  roleId = obj.roleId;
                                  tmp75 = source;
                                  tmp76 = source;
                                  tmp77 = source;
                                  tmp78 = source;
                                  tmp79 = source;
                                  tmp80 = source;
                                  tmp81 = source;
                                  tmp82 = source;
                                  tmp83 = source;
                                  tmp84 = source;
                                  tmp85 = source;
                                  tmp86 = source;
                                  tmp87 = source;
                                } else {
                                  if ("textMention" === obj.type) {
                                    if ("@everyone" === obj.text) {
                                      let guild3 = context.guild;
                                      source = undefined;
                                      if (null != guild3) {
                                        source = guild3.id;
                                      }
                                      roleId = source;
                                      tmp75 = source;
                                      tmp76 = source;
                                      tmp77 = source;
                                      tmp78 = source;
                                      tmp79 = source;
                                      tmp80 = source;
                                      tmp81 = source;
                                      tmp82 = guild3;
                                      tmp83 = source;
                                      tmp84 = source;
                                      tmp85 = source;
                                      tmp86 = source;
                                      tmp87 = source;
                                    }
                                  }
                                  tmp75 = source;
                                  tmp76 = source;
                                  tmp77 = source;
                                  tmp78 = source;
                                  tmp79 = source;
                                  tmp80 = source;
                                  tmp81 = source;
                                  tmp82 = source;
                                  tmp83 = source;
                                  tmp84 = source;
                                  tmp85 = source;
                                  tmp86 = source;
                                  tmp87 = source;
                                  if ("text" === obj.type) {
                                    source = closure_0;
                                    source = closure_3;
                                    let obj31 = closure_0(closure_3[12]);
                                    if (obj31.isSnowflake(obj.text)) {
                                      let str4 = obj.text;
                                      roleId = str4.trim();
                                      tmp75 = source;
                                      tmp76 = source;
                                      tmp77 = source;
                                      tmp78 = source;
                                      tmp79 = source;
                                      tmp80 = source;
                                      tmp81 = source;
                                      tmp82 = source;
                                      tmp83 = source;
                                      tmp84 = source;
                                      tmp85 = source;
                                      tmp86 = source;
                                      tmp87 = source;
                                    } else {
                                      let tmp98 = closure_0;
                                      let tmp99 = closure_3;
                                      let obj15 = closure_0(closure_3[17]);
                                      let guild = context.guild;
                                      source = undefined;
                                      if (null != guild) {
                                        source = guild.id;
                                      }
                                      source = obj15.resolveApplicationCommandOption(obj.text, source, context.channel.id);
                                      source = undefined;
                                      if (null != source) {
                                        source = source.type;
                                      }
                                      if ("userMention" === source) {
                                        roleId = source.userId;
                                        tmp75 = source;
                                        tmp76 = source;
                                        tmp77 = source;
                                        tmp78 = source;
                                        tmp79 = source;
                                        tmp80 = source;
                                        tmp81 = source;
                                        tmp82 = source;
                                        tmp83 = guild;
                                        tmp84 = source;
                                        tmp85 = source;
                                        tmp86 = source;
                                        tmp87 = source;
                                      } else {
                                        source = undefined;
                                        if (null != source) {
                                          source = source.type;
                                        }
                                        if ("roleMention" === source) {
                                          roleId = source.roleId;
                                          tmp75 = source;
                                          tmp76 = source;
                                          tmp77 = source;
                                          tmp78 = source;
                                          tmp79 = source;
                                          tmp80 = source;
                                          tmp81 = source;
                                          tmp82 = source;
                                          tmp83 = guild;
                                          tmp84 = source;
                                          tmp85 = source;
                                          tmp86 = source;
                                          tmp87 = source;
                                        } else {
                                          source = undefined;
                                          if (null != source) {
                                            source = source.type;
                                          }
                                          if ("textMention" === source) {
                                            if ("@everyone" === source.text) {
                                              let guild2 = context.guild;
                                              source = undefined;
                                              if (null != guild2) {
                                                source = guild2.id;
                                              }
                                              roleId = source;
                                              tmp75 = source;
                                              tmp76 = source;
                                              tmp77 = source;
                                              tmp78 = source;
                                              tmp79 = source;
                                              tmp80 = source;
                                              tmp81 = source;
                                              tmp82 = source;
                                              tmp83 = guild;
                                              tmp84 = source;
                                              tmp85 = guild2;
                                              tmp86 = source;
                                              tmp87 = source;
                                            }
                                          }
                                          source = closure_1;
                                          source = closure_3;
                                          let _HermesInternal4 = HermesInternal;
                                          source = closure_1(closure_3[16]);
                                          source = source(false, "Failed to resolve " + obj.text);
                                          tmp75 = source;
                                          tmp76 = source;
                                          tmp77 = source;
                                          tmp78 = source;
                                          tmp79 = source;
                                          tmp80 = source;
                                          tmp81 = source;
                                          tmp82 = source;
                                          tmp83 = guild;
                                          tmp84 = source;
                                          tmp85 = source;
                                          tmp86 = source;
                                          tmp87 = source;
                                        }
                                      }
                                    }
                                  }
                                }
                              } else {
                                source = closure_0;
                                source = closure_3;
                                if (closure_0(closure_3[13]).ApplicationCommandOptionType.BOOLEAN === type) {
                                  tmp75 = source;
                                  tmp76 = source;
                                  tmp77 = source;
                                  tmp78 = source;
                                  tmp79 = source;
                                  tmp80 = source;
                                  tmp81 = source;
                                  tmp82 = source;
                                  tmp83 = source;
                                  tmp84 = source;
                                  tmp85 = source;
                                  tmp86 = source;
                                  tmp87 = source;
                                  if ("text" === obj.type) {
                                    source = closure_0;
                                    source = closure_3;
                                    let obj30 = closure_0(closure_3[15]);
                                    let str24 = obj.text;
                                    roleId = obj30.toChoiceBooleanValue(str24.trim());
                                    tmp75 = source;
                                    tmp76 = source;
                                    tmp77 = source;
                                    tmp78 = source;
                                    tmp79 = source;
                                    tmp80 = source;
                                    tmp81 = source;
                                    tmp82 = source;
                                    tmp83 = source;
                                    tmp84 = source;
                                    tmp85 = source;
                                    tmp86 = source;
                                    tmp87 = source;
                                  }
                                } else {
                                  source = closure_0;
                                  source = closure_3;
                                  if (closure_0(closure_3[13]).ApplicationCommandOptionType.INTEGER === type) {
                                    tmp75 = source;
                                    tmp76 = source;
                                    tmp77 = source;
                                    tmp78 = source;
                                    tmp79 = source;
                                    tmp80 = source;
                                    tmp81 = source;
                                    tmp82 = source;
                                    tmp83 = source;
                                    tmp84 = source;
                                    tmp85 = source;
                                    tmp86 = source;
                                    tmp87 = source;
                                    if ("text" === obj.type) {
                                      let str23 = obj.text;
                                      source = str23.trim();
                                      if (null != value.choices) {
                                        let tmp96 = closure_0;
                                        let tmp97 = closure_3;
                                        let obj14 = closure_0(closure_3[15]);
                                        let query3 = obj14.findChoiceNumberValue(value.choices, source);
                                      } else if (value.autocomplete) {
                                        if (null != context.autocomplete) {
                                          if (tmp41) {
                                            query3 = context.autocomplete.query;
                                          }
                                        }
                                        let tmp93 = closure_0;
                                        let tmp94 = closure_3;
                                        let obj13 = closure_0(closure_3[15]);
                                        let result = obj13.findAutocompleteChoiceNumberValue(context.channel.id, value.name, source);
                                      }
                                      roleId = query3;
                                      tmp75 = source;
                                      tmp76 = source;
                                      tmp77 = source;
                                      tmp78 = source;
                                      tmp79 = source;
                                      tmp80 = source;
                                      tmp81 = source;
                                      tmp82 = source;
                                      tmp83 = source;
                                      tmp84 = source;
                                      tmp85 = source;
                                      tmp86 = source;
                                      tmp87 = source;
                                      if (null == query3) {
                                        let _Number2 = Number;
                                        source = closure_2;
                                        source = closure_3;
                                        let obj29 = closure_2(closure_3[14]);
                                        source = closure_6;
                                        roleId = Number(obj29.normalizeNumericString(closure_6.locale, source));
                                        tmp75 = source;
                                        tmp76 = source;
                                        tmp77 = source;
                                        tmp78 = source;
                                        tmp79 = source;
                                        tmp80 = source;
                                        tmp81 = source;
                                        tmp82 = source;
                                        tmp83 = source;
                                        tmp84 = source;
                                        tmp85 = source;
                                        tmp86 = source;
                                        tmp87 = source;
                                      }
                                    }
                                  } else {
                                    source = closure_0;
                                    source = closure_3;
                                    if (closure_0(closure_3[13]).ApplicationCommandOptionType.NUMBER === type) {
                                      tmp75 = source;
                                      tmp76 = source;
                                      tmp77 = source;
                                      tmp78 = source;
                                      tmp79 = source;
                                      tmp80 = source;
                                      tmp81 = source;
                                      tmp82 = source;
                                      tmp83 = source;
                                      tmp84 = source;
                                      tmp85 = source;
                                      tmp86 = source;
                                      tmp87 = source;
                                      if ("text" === obj.type) {
                                        let str22 = obj.text;
                                        source = str22.trim();
                                        if (null != value.choices) {
                                          let tmp91 = closure_0;
                                          let tmp92 = closure_3;
                                          let obj12 = closure_0(closure_3[15]);
                                          let query2 = obj12.findChoiceNumberValue(value.choices, source);
                                        } else if (value.autocomplete) {
                                          if (null != context.autocomplete) {
                                            if (tmp41) {
                                              query2 = context.autocomplete.query;
                                            }
                                          }
                                          let tmp88 = closure_0;
                                          let tmp89 = closure_3;
                                          let obj11 = closure_0(closure_3[15]);
                                          let result1 = obj11.findAutocompleteChoiceNumberValue(context.channel.id, value.name, source);
                                        }
                                        roleId = query2;
                                        tmp75 = source;
                                        tmp76 = source;
                                        tmp77 = source;
                                        tmp78 = source;
                                        tmp79 = source;
                                        tmp80 = source;
                                        tmp81 = source;
                                        tmp82 = source;
                                        tmp83 = source;
                                        tmp84 = source;
                                        tmp85 = source;
                                        tmp86 = source;
                                        tmp87 = source;
                                        if (null == query2) {
                                          let _Number = Number;
                                          source = closure_2;
                                          source = closure_3;
                                          let obj28 = closure_2(closure_3[14]);
                                          source = closure_6;
                                          roleId = Number(obj28.normalizeNumericString(closure_6.locale, source));
                                          tmp75 = source;
                                          tmp76 = source;
                                          tmp77 = source;
                                          tmp78 = source;
                                          tmp79 = source;
                                          tmp80 = source;
                                          tmp81 = source;
                                          tmp82 = source;
                                          tmp83 = source;
                                          tmp84 = source;
                                          tmp85 = source;
                                          tmp86 = source;
                                          tmp87 = source;
                                        }
                                      }
                                    } else {
                                      let _Error = Error;
                                      let _HermesInternal3 = HermesInternal;
                                      let str3 = "Unsupported option type: ";
                                      let tmp71 = new.target;
                                      let tmp72 = new.target;
                                      let error = new Error("Unsupported option type: " + value.type);
                                      let tmp74 = error;
                                      throw error;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                        source = "" !== roleId || null == context.autocomplete || tmp41;
                        tmp17 = autocomplete;
                        tmp18 = first;
                        tmp19 = tmp41;
                        tmp20 = roleId;
                        tmp21 = filterEmptyResult;
                        tmp22 = obj;
                        tmp23 = tmp75;
                        tmp24 = tmp76;
                        tmp25 = tmp77;
                        tmp26 = tmp78;
                        tmp27 = tmp79;
                        tmp28 = tmp80;
                        tmp29 = tmp81;
                        tmp30 = tmp82;
                        tmp31 = tmp83;
                        tmp32 = tmp84;
                        tmp33 = tmp85;
                        tmp34 = tmp86;
                        tmp35 = tmp87;
                        tmp36 = source;
                        tmp37 = source;
                        tmp38 = source;
                        tmp39 = source;
                        if (source) {
                          source = closure_1;
                          source = closure_3;
                          source = null != context.autocomplete;
                          source = closure_1(closure_3[16]);
                          if (!source) {
                            source = null != roleId;
                          }
                          let _HermesInternal8 = HermesInternal;
                          source = source(source, "Unexpected value for option \"" + value.name + "\"");
                          tmp17 = autocomplete;
                          tmp18 = first;
                          tmp19 = tmp41;
                          tmp20 = roleId;
                          tmp21 = filterEmptyResult;
                          tmp22 = obj;
                          tmp23 = tmp75;
                          tmp24 = tmp76;
                          tmp25 = tmp77;
                          tmp26 = tmp78;
                          tmp27 = tmp79;
                          tmp28 = tmp80;
                          tmp29 = tmp81;
                          tmp30 = tmp82;
                          tmp31 = tmp83;
                          tmp32 = tmp84;
                          tmp33 = tmp85;
                          tmp34 = tmp86;
                          tmp35 = tmp87;
                          tmp36 = source;
                          tmp37 = source;
                          tmp38 = source;
                          tmp39 = source;
                          if (null != roleId) {
                            obj3 = {};
                            ({ type: obj22.type, name: obj22.name } = value);
                            obj3.value = roleId;
                            obj3.focused = tmp41;
                            source = items.push(obj3);
                            tmp17 = autocomplete;
                            tmp18 = first;
                            tmp19 = tmp41;
                            tmp20 = roleId;
                            tmp21 = filterEmptyResult;
                            tmp22 = obj;
                            tmp23 = tmp75;
                            tmp24 = tmp76;
                            tmp25 = tmp77;
                            tmp26 = tmp78;
                            tmp27 = tmp79;
                            tmp28 = tmp80;
                            tmp29 = tmp81;
                            tmp30 = tmp82;
                            tmp31 = tmp83;
                            tmp32 = tmp84;
                            tmp33 = tmp85;
                            tmp34 = tmp86;
                            tmp35 = tmp87;
                            tmp36 = source;
                            tmp37 = source;
                            tmp38 = source;
                            tmp39 = source;
                          }
                        }
                      } else {
                        tmp17 = autocomplete;
                        tmp18 = source;
                        tmp19 = tmp41;
                        tmp21 = filterEmptyResult;
                        tmp22 = source;
                        tmp23 = source;
                        tmp24 = source;
                        tmp25 = source;
                        tmp26 = source;
                        tmp27 = source;
                        tmp28 = source;
                        tmp29 = source;
                        tmp30 = source;
                        tmp31 = source;
                        tmp32 = source;
                        tmp33 = source;
                        tmp34 = source;
                        tmp35 = source;
                        tmp36 = source;
                        tmp37 = source;
                        tmp38 = source;
                        tmp39 = source;
                      }
                    } else {
                      tmp17 = autocomplete;
                      tmp18 = source;
                      tmp19 = tmp41;
                      tmp21 = source;
                      tmp22 = source;
                      tmp23 = source;
                      tmp24 = source;
                      tmp25 = source;
                      tmp26 = source;
                      tmp27 = source;
                      tmp28 = source;
                      tmp29 = source;
                      tmp30 = source;
                      tmp31 = source;
                      tmp32 = source;
                      tmp33 = source;
                      tmp34 = source;
                      tmp35 = source;
                      tmp36 = source;
                      tmp37 = source;
                      tmp38 = source;
                      tmp39 = source;
                      if (null == context.autocomplete) {
                        let tmp58 = closure_8;
                        let upload = closure_8.getUpload(context.channel.id, value.name, commandAttachmentDraftType);
                        tmp17 = autocomplete;
                        tmp18 = source;
                        tmp19 = tmp41;
                        tmp21 = source;
                        tmp22 = source;
                        tmp23 = source;
                        tmp24 = source;
                        tmp25 = source;
                        tmp26 = source;
                        tmp27 = source;
                        tmp28 = source;
                        tmp29 = source;
                        tmp30 = source;
                        tmp31 = source;
                        tmp32 = source;
                        tmp33 = source;
                        tmp34 = source;
                        tmp35 = source;
                        tmp36 = upload;
                        tmp37 = source;
                        tmp38 = source;
                        tmp39 = source;
                        if (null != upload) {
                          let arr = items1.push(upload);
                          let obj4 = {};
                          ({ type: obj8.type, name: obj8.name } = value);
                          obj4.value = items1.length;
                          obj4.focused = tmp41;
                          arr = items.push(obj4);
                          tmp17 = autocomplete;
                          tmp18 = source;
                          tmp19 = tmp41;
                          tmp21 = source;
                          tmp22 = source;
                          tmp23 = source;
                          tmp24 = source;
                          tmp25 = source;
                          tmp26 = source;
                          tmp27 = source;
                          tmp28 = source;
                          tmp29 = source;
                          tmp30 = source;
                          tmp31 = source;
                          tmp32 = source;
                          tmp33 = source;
                          tmp34 = source;
                          tmp35 = source;
                          tmp36 = upload;
                          tmp37 = source;
                          tmp38 = source;
                          tmp39 = source;
                        }
                      }
                    }
                  } else {
                    source = closure_2;
                    source = closure_3;
                    let obj27 = closure_2(closure_3[14]);
                    let str21 = obj27.getOptionalString(optionValues, value.name);
                    let trimmed;
                    if (null != str21) {
                      trimmed = str21.trim();
                    }
                    let str2 = "";
                    if (null != trimmed) {
                      str2 = trimmed;
                    }
                    if (null != value.choices) {
                      let tmp48 = closure_0;
                      let tmp49 = closure_3;
                      let obj5 = closure_0(closure_3[15]);
                      let query = obj5.findChoiceStringValue(value.choices, str2);
                    } else if (value.autocomplete) {
                      if (null != context.autocomplete) {
                        if (tmp41) {
                          query = context.autocomplete.query;
                        }
                      }
                      let tmp45 = closure_0;
                      let tmp46 = closure_3;
                      obj4 = closure_0(closure_3[15]);
                      let result2 = obj4.findAutocompleteChoiceStringValue(context.channel.id, value.name, str2);
                    }
                    if (null == query) {
                      query = str2;
                    }
                    if ("" === query) {
                      if (null != context.autocomplete) {
                        tmp17 = autocomplete;
                        tmp18 = source;
                        tmp19 = tmp41;
                        tmp20 = query;
                        tmp21 = source;
                        tmp22 = source;
                        tmp23 = source;
                        tmp24 = source;
                        tmp25 = source;
                        tmp26 = source;
                        tmp27 = source;
                        tmp28 = source;
                        tmp29 = source;
                        tmp30 = source;
                        tmp31 = source;
                        tmp32 = source;
                        tmp33 = source;
                        tmp34 = source;
                        tmp35 = source;
                        tmp36 = source;
                        tmp37 = trimmed;
                        tmp38 = str21;
                        tmp39 = str2;
                      }
                    }
                    let tmp50 = closure_1;
                    let tmp51 = closure_3;
                    let tmp53 = null != context.autocomplete;
                    let tmp52 = closure_1(closure_3[16]);
                    if (!tmp53) {
                      tmp53 = null != query;
                    }
                    let _HermesInternal = HermesInternal;
                    let tmp52Result = tmp52(tmp53, "Option \"" + value.name + "\" expects a value");
                    obj5 = {};
                    ({ type: obj7.type, name: obj7.name } = value);
                    obj5.value = query;
                    obj5.focused = tmp41;
                    let arr1 = items.push(obj5);
                    tmp17 = autocomplete;
                    tmp18 = source;
                    tmp19 = tmp41;
                    tmp20 = query;
                    tmp21 = source;
                    tmp22 = source;
                    tmp23 = source;
                    tmp24 = source;
                    tmp25 = source;
                    tmp26 = source;
                    tmp27 = source;
                    tmp28 = source;
                    tmp29 = source;
                    tmp30 = source;
                    tmp31 = source;
                    tmp32 = source;
                    tmp33 = source;
                    tmp34 = source;
                    tmp35 = source;
                    tmp36 = source;
                    tmp37 = trimmed;
                    tmp38 = str21;
                    tmp39 = str2;
                  }
                }
              }
            }
            iter = source();
            source = tmp17;
            source = tmp18;
            source = tmp19;
            source = tmp20;
            source = tmp21;
            source = tmp22;
            source = tmp23;
            source = tmp24;
            source = tmp25;
            source = tmp26;
            source = tmp27;
            source = tmp28;
            source = tmp29;
            source = tmp30;
            source = tmp31;
            source = tmp32;
            source = tmp33;
            source = tmp34;
            source = tmp35;
            source = tmp36;
            source = tmp37;
            source = tmp38;
            source = tmp39;
            iter2 = iter;
          } while (!iter.done);
        }
      }
      source = items;
      if (null != command.subCommandPath) {
        source = command.subCommandPath.length - 1;
        source = items;
        source = items;
        if (source >= 0) {
          do {
            source = command.subCommandPath[source];
            let obj6 = { type: source.type, name: source.name, options: source };
            let items2 = [obj6];
            source = source - 1;
            source = items2;
            source = items2;
          } while (source >= 0);
        }
      }
      if (null != command.execute) {
        source = callback;
        source = closure_3;
        source = constants;
        const obj7 = {};
        ({ id: obj26.command_id, applicationId: obj26.application_id, type: obj26.command_type } = command);
        source = callback3;
        obj7.location = callback3(commandOrigin);
        obj7.source = source;
        source = callback(closure_3[18]).trackWithMetadata(constants.APPLICATION_COMMAND_USED, obj7);
        return command.execute(source, context);
      } else {
        source = optionValues;
        source = closure_3;
        if (command.inputType !== optionValues(closure_3[9]).ApplicationCommandInputType.BUILT_IN) {
          source = optionValues;
          source = closure_3;
          if (command.inputType !== optionValues(closure_3[9]).ApplicationCommandInputType.BUILT_IN_TEXT) {
            source = optionValues;
            source = closure_3;
            if (command.inputType !== optionValues(closure_3[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION) {
              obj8 = {};
              ({ version: obj34.version, rootCommand: rootCommand2 } = command);
              source = undefined;
              if (null != rootCommand2) {
                source = rootCommand2.id;
              }
              if (null == source) {
                source = command.id;
              }
              obj8.id = source;
              ({ guildId: obj34.guild_id, rootCommand } = command);
              source = undefined;
              if (null != rootCommand) {
                source = rootCommand.name;
              }
              if (null == source) {
                source = command.untranslatedName;
              }
              obj8.name = source;
              obj8.type = command.type;
              obj8.options = source;
              obj8.application_command = command.rootCommand;
              if (null != commandTargetId) {
                obj8.target_id = commandTargetId;
              }
              if (null != context.autocomplete) {
                source = optionValues;
                source = closure_3;
                source = optionValues(closure_3[19]).performAutocomplete(command, context, obj8);
                const obj24 = optionValues(closure_3[19]);
              } else {
                source = callback;
                source = closure_3;
                source = callback(closure_3[20]).clearAll(context.channel.id, commandAttachmentDraftType);
                const obj9 = {
                  applicationId: command.applicationId,
                  data: obj8,
                  context,
                  attachments: items1,
                  maxSizeCallback,
                  onMessageSuccess() {
                                function trackEmojiUsage(optionValues) {
                                  const values = Object.values(optionValues);
                                  const flatMapResult = values.flatMap((arr) => {
                                    const mapped = arr.map(() => { ... });
                                    return mapped.filter(callback(closure_3[22]).isNotNullish);
                                  });
                                  if (flatMapResult.length > 0) {
                                    const obj = { type: "EMOJI_TRACK_USAGE", emojiUsed: flatMapResult };
                                    callback(closure_3[10]).dispatch(obj);
                                    const obj2 = callback(closure_3[10]);
                                  }
                                }(optionValues);
                              }
                };
                source = callback3;
                source = closure_20;
                obj9.analytics_location = callback3(commandOrigin);
                obj9.sectionName = sectionName;
                obj9.source = source;
                obj9.interactionLifecycleOptions = yield interactionLifecycleOptionsFactory(command, context, obj8);
                source = source(obj9);
                const obj35 = callback(closure_3[20]);
              }
            }
          }
        }
      }
    }
  };
  fn.next();
  return fn;
}
async function _retryCommandMessage(isCommandType, channel, command, arg3) {
  if (isCommandType.isCommandType()) {
    if (null != isCommandType.interactionData) {
      if (null != command.command) {
        let obj = { channel };
        let guild = null;
        if (null != channel.guild_id) {
          guild = guild.getGuild(channel.guild_id);
        }
        obj.guild = guild;
        obj = { applicationId: command.command.applicationId, data: isCommandType.interactionData };
        obj.context = obj;
        obj.interactionLifecycleOptions = yield closure_22(command.command, obj, isCommandType.interactionData);
        closure_20(obj);
        const tmp4 = closure_20;
      }
    }
  }
}
function enqueueCommandInteraction(interactionLifecycleOptions) {
  let applicationId;
  let attachments;
  let context;
  let maxSizeCallback;
  let onMessageSuccess;
  ({ applicationId, context, attachments, maxSizeCallback, onMessageSuccess } = interactionLifecycleOptions);
  const arg1 = onMessageSuccess;
  interactionLifecycleOptions = interactionLifecycleOptions.interactionLifecycleOptions;
  let importDefault;
  if (null != context.channel) {
    const guild = context.guild;
    let id = context.channel.id;
    id = undefined;
    if (null != guild) {
      id = guild.id;
    }
    let obj = { applicationId, channelId: id, guildId: id, data: tmp };
    let nonce = interactionLifecycleOptions.nonce;
    if (null == nonce) {
      nonce = arg1(dependencyMap[23]).createNonce();
      const obj2 = arg1(dependencyMap[23]);
    }
    obj.nonce = nonce;
    obj.attachments = attachments;
    obj.maxSizeCallback = maxSizeCallback;
    obj.analytics_location = tmp2;
    obj.sectionName = tmp3;
    obj.source = tmp4;
    importDefault = obj;
    obj = {};
    ({ messageId: obj4.messageId, onCreate: obj4.onCreate, onSuccess: obj4.onSuccess, onFailure: obj4.onFailure } = interactionLifecycleOptions);
    obj = { interactionType: arg1(dependencyMap[13]).InteractionTypes.APPLICATION_COMMAND, applicationId, channelId: id };
    obj.data = obj;
    importAll(dependencyMap[24]).addQueued(obj.nonce, obj);
    if (null != attachments) {
      if (attachments.length > 0) {
        function stageAttachments(attachments, nonce, id, maxSizeCallback) {
          return callback2(...arguments);
        }(attachments, obj.nonce, id, maxSizeCallback).then((arg0) => {
          if (arg0) {
            callback(obj, onMessageSuccess);
          }
        });
        const promise = function stageAttachments(attachments, nonce, id, maxSizeCallback) {
          return callback2(...arguments);
        }(attachments, obj.nonce, id, maxSizeCallback);
      }
    }
    queueCommand(obj, onMessageSuccess);
    const obj3 = importAll(dependencyMap[24]);
  }
}
function queueCommand(message, onMessageSuccess) {
  onMessageSuccess = message;
  const importDefault = onMessageSuccess;
  let obj = importDefault(dependencyMap[25]);
  obj = { type: onMessageSuccess(dependencyMap[25]).MessageDataType.COMMAND, message };
  obj.enqueue(obj, (ok) => {
    let applicationId;
    let channelId;
    let guildId;
    let nonce;
    ({ nonce, applicationId, channelId, guildId } = ok);
    let tmp = null;
    if (null != guildId) {
      tmp = guildId;
    }
    const result = ok(closure_3[26]).handleInteractionResponse(nonce, ok, applicationId, channelId, tmp);
    ok = ok.ok;
    if (ok) {
      ok = null != arg1;
    }
    if (ok) {
      arg1();
    }
  });
}
function displayInteractionLifecycleInChat() {
  return _displayInteractionLifecycleInChat(...arguments);
}
async function _displayInteractionLifecycleInChat(applicationId, channel, type, arg3) {
  let obj;
  if (null == channel.channel) {
    return {};
  } else {
    obj = { channel: channel.channel, type: "channel" };
    const cachedApplicationSection = obj(closure_3[27]).getCachedApplicationSection(obj, type.type, applicationId.applicationId);
    if (null == cachedApplicationSection) {
      return {};
    } else {
      const application = tmp28.application;
      let bot;
      if (null != application) {
        bot = application.bot;
      }
      if (null == bot) {
        if (null != tmp28.botId) {
          obj = obj(closure_3[28]);
          yield obj.getUser(tmp28.botId);
        }
      }
      while (true) {
        obj = {};
        let tmp7 = channel;
        let tmp8 = closure_3;
        let num2 = 29;
        let obj1 = { channelId: channel.channel.id };
        let str = "";
        obj1.content = "";
        let tmp10 = applicationId;
        let num3 = 13;
        let tmp9 = channel(closure_3[29]);
        if (type.type === applicationId(closure_3[13]).ApplicationCommandType.CHAT) {
          let tmp12 = constants;
          let CONTEXT_MENU_COMMAND = constants.CHAT_INPUT_COMMAND;
        } else {
          let tmp11 = constants;
          CONTEXT_MENU_COMMAND = constants.CONTEXT_MENU_COMMAND;
        }
        obj1.type = CONTEXT_MENU_COMMAND;
        if (null == bot) {
          let obj2 = {};
          let tmp13 = cachedApplicationSection;
          ({ id: obj4.id, name: obj4.username } = tmp28);
          let tmp14 = closure_14;
          obj2.discriminator = closure_14;
          obj2.avatar = null;
          let flag = true;
          obj2.bot = true;
          bot = obj2;
        }
        obj1.author = bot;
        let tmp15 = obj;
        let merged = Object.assign(tmp9(obj1));
        let str2 = "application";
        obj["application"] = cachedApplicationSection.application;
        let obj3 = {};
        ({ id: obj5.id, name: obj5.name } = type);
        obj3.name_localized = applicationId.displayName;
        let tmp17 = applicationId;
        let tmp18 = closure_3;
        obj3.type = applicationId(closure_3[13]).InteractionTypes.APPLICATION_COMMAND;
        let obj5 = applicationId(closure_3[29]);
        let tmp19 = currentUser;
        obj3.user = obj5.userRecordToServer(currentUser.getCurrentUser());
        let str3 = "interaction";
        obj["interaction"] = obj3;
        let str4 = "interaction_data";
        obj["interaction_data"] = type;
        let tmp20 = channel;
        let num4 = 30;
        let obj7 = channel(closure_3[30]);
        let obj4 = { applicationId: applicationId.applicationId, command: applicationId };
        let flag2 = true;
        let tmp21 = obj7;
        let tmp22 = obj;
        let tmp23 = obj4;
        let receiveMessageResult = obj7.receiveMessage(channel.channel.id, obj, true, obj4);
        obj5 = {};
        let str5 = "messageId";
        Object.defineProperty(obj5, "messageId", { get: () => obj.id, set: undefined });
        let str6 = "nonce";
        Object.defineProperty(obj5, "nonce", { get: () => obj.id, set: undefined });
        obj5.onCreate = function onCreate(id) {
          if (null != obj.interaction) {
            obj.interaction.id = id;
          }
        };
        obj5.onSuccess = function onSuccess() {

        };
        obj5.onFailure = function onFailure(code, arg1, arg2, reason) {
          let result = arg1;
          if (null != arg1.channel) {
            if (tmp2) {
              let obj = arg1(closure_3[30]);
              obj.sendClydeError(arg1.channel.id, code);
            }
            if (tmp7) {
              result = code(closure_3[26]).interactionCallbackErrorReason(reason, code.applicationId);
              const obj2 = code(closure_3[26]);
            }
            obj = { type: "MESSAGE_SEND_FAILED" };
            obj.messageId = obj.id;
            obj.channelId = arg1.channel.id;
            obj.reason = result;
            arg1(closure_3[10]).dispatch(obj);
            const obj3 = arg1(closure_3[10]);
            const tmp2 = null == result && null != code;
            const tmp7 = null == result && null != reason;
          }
        };
        return obj5;
      }
    }
    const obj10 = obj(closure_3[27]);
  }
}
function getAnalyticsLocationFromCommandOrigin(arg0) {
  if (arg1(dependencyMap[9]).CommandOrigin.APPLICATION_LAUNCHER === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.APP_LAUNCHER;
  } else if (arg1(dependencyMap[9]).CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
  } else if (arg1(dependencyMap[9]).CommandOrigin.IMAGE_RECS_MENU === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.IMAGE_RECS_MENU;
  } else if (arg1(dependencyMap[9]).CommandOrigin.IMAGE_RECS_SUBMENU === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.IMAGE_RECS_SUBMENU;
  } else if (arg1(dependencyMap[9]).CommandOrigin.ACTIVITY_INSTANCE_EMBED === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.ACTIVITY_INSTANCE_EMBED;
  } else if (arg1(dependencyMap[9]).CommandOrigin.ACTIVITY_BOOKMARK_EMBED === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.ACTIVITY_BOOKMARK_EMBED;
  } else if (arg1(dependencyMap[9]).CommandOrigin.MINI_SHELF === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.ACTIVITIES_MINI_SHELF;
  } else if (arg1(dependencyMap[9]).CommandOrigin.VOICE_TILE_ACTIVITY_SUGGESTIONS === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.VC_TILE_ACTIVITY_SUGGESTION;
  } else if (arg1(dependencyMap[9]).CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON === arg0) {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
  } else {
    return arg1(dependencyMap[9]).ApplicationCommandTriggerLocations.SLASH_UI;
  }
}
function getMaxAndTotalFileSize() {
  return _getMaxAndTotalFileSize(...arguments);
}
async function _getMaxAndTotalFileSize(arg0, arg1, arg2) {
  const tmp = callback(arg0);
  const iter = tmp();
  let iter2 = iter;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (!iter.done) {
    const value = iter2.value;
    while (arg1) {
      let currentSize = value.currentSize;
      let num5 = 0;
      if (null != currentSize) {
        num5 = currentSize;
      }
      let tmp5 = num5;
      let tmp6 = currentSize;
      if (num5 > num2) {
        num2 = num5;
      }
      num = num + num5;
      let iter3 = tmp();
      iter2 = iter3;
      num3 = num;
      num4 = num2;
    }
    const getSize = value.getSize;
    const tmp2 = yield getSize();
    return tmp2;
  }
  const obj = { totalSize: num3, largestUploadedFileSize: num4 };
  return obj;
}
async function _stageAttachments(arg0, arg1, guildId, arg3, arg4) {
  let largestUploadedFileSize;
  let totalSize;
  let maxFileSizeResult;
  function handleUploadsTooLarge(largestUploadedFileSize) {
    if (null != arg3) {
      arg3(maxFileSizeResult, largestUploadedFileSize);
    }
    let obj = maxFileSizeResult(closure_3[24]);
    const intl = arg1(closure_3[32]).intl;
    obj = { maxSize: arg1(closure_3[31]).sizeString(maxFileSizeResult) };
    obj.setFailed(arg1, constants.ENTITY_TOO_LARGE, intl.formatToPlainString(arg1(closure_3[32]).t.fxEKdS, obj));
  }
  maxFileSizeResult = arg1(closure_3[31]).maxFileSize(guildId);
  const obj2 = arg1(closure_3[31]);
  ({ totalSize, largestUploadedFileSize } = yield closure_25(arg0, false));
  if (largestUploadedFileSize <= Math.max(maxFileSizeResult, closure_15)) {
    if (totalSize <= arg1(closure_3[33]).MAX_TOTAL_ATTACHMENT_SIZE) {
      yield closure_1(closure_3[34])(obj);
      const tmp5 = yield closure_25(obj, true);
      const largestUploadedFileSize2 = tmp5.largestUploadedFileSize;
      const someResult = obj.some((error) => error.error === constants.ENTITY_TOO_LARGE);
      let tmp8 = someResult;
      if (!someResult) {
        tmp8 = tmp5.totalSize > arg1(closure_3[33]).MAX_TOTAL_ATTACHMENT_SIZE;
      }
      let flag2 = tmp11;
      if (!!tmp8) {
        const result = handleUploadsTooLarge(largestUploadedFileSize2);
        flag2 = false;
      }
      return flag2;
    }
  }
  const result1 = handleUploadsTooLarge(largestUploadedFileSize);
  return false;
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
({ AbortCodes: closure_11, AnalyticEvents: closure_12, MessageTypes: closure_13, NON_USER_BOT_DISCRIMINATOR: closure_14 } = arg1(dependencyMap[7]));
let closure_15 = arg1(dependencyMap[8]).DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE;
const tmp2 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[35]).fileFinishedImporting("modules/application_commands/executeCommand.tsx");

export default function executeCommand() {
  return _executeCommand(...arguments);
};
export const retryCommandMessage = function retryCommandMessage(id2, id, arg2) {
  return _retryCommandMessage(...arguments);
};
