// Module ID: 8228
// Function ID: 64816
// Name: _createForOfIteratorHelperLoose
// Dependencies: [5, 4991, 1921, 1838, 4467, 1849, 7021, 653, 4123, 6755, 686, 7006, 6753, 1881, 8229, 8231, 44, 8232, 4324, 7019, 8025, 3771, 1327, 6995, 7890, 7075, 7889, 8233, 7976, 6994, 6691, 4670, 1212, 4666, 7082, 2]
// Exports: default, retryCommandMessage

// Module 8228 (_createForOfIteratorHelperLoose)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_5 from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import ME from "ME";
import { DEFAULT_MOBILE_PRE_COMPRESSION_MAX_ATTACHMENT_SIZE as closure_15 } from "MESSAGE_GROUP_SPACING";

let closure_11;
let closure_12;
let closure_13;
let closure_14;
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
async function _executeCommand(arg0, arg1) {
  let iter = (function*(source) {
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
      source = outer2_0;
      commandOrigin = outer2_0(outer2_3[9]).CommandOrigin.CHAT;
    }
    ({ interactionLifecycleOptionsFactory, sectionName } = source);
    if (interactionLifecycleOptionsFactory === undefined) {
      interactionLifecycleOptionsFactory = outer2_22;
    }
    source = source.source;
    yield undefined;
    if (null != context.channel) {
      source = outer2_10;
      source = outer2_10.getSource(context.channel.id);
      commandOrigin = outer2_10.getCommandOrigin(context.channel.id);
      if (null == context.autocomplete) {
        let obj = outer2_1(outer2_3[10]);
        obj = { type: "APPLICATION_COMMAND_USED", context, command, commandOrigin };
        obj.dispatch(obj);
      }
      let obj2 = outer2_1(outer2_3[11]);
      yield obj2.unarchiveThreadIfNecessary(context.channel.id);
      let items = [];
      const items1 = [];
      let obj3 = outer2_0(outer2_3[12]);
      const commandAttachmentDraftType = obj3.getCommandAttachmentDraftType(commandOrigin);
      if (null != command.options) {
        source = outer2_16;
        source = outer2_16(command.options);
        const iter3 = source();
        source = globalThis;
        let iter2 = iter3;
        if (!iter3.done) {
          do {
            let value = iter2.value;
            let tmp15 = outer2_0;
            let tmp16 = outer2_3;
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
            if (value.type !== outer2_0(outer2_3[13]).ApplicationCommandOptionType.SUB_COMMAND) {
              source = outer2_0;
              source = outer2_3;
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
              if (value.type !== outer2_0(outer2_3[13]).ApplicationCommandOptionType.SUB_COMMAND_GROUP) {
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
                  let tmp42 = outer2_0;
                  let tmp43 = outer2_3;
                  if (value.type !== outer2_0(outer2_3[13]).ApplicationCommandOptionType.STRING) {
                    let tmp56 = outer2_0;
                    let tmp57 = outer2_3;
                    if (value.type !== outer2_0(outer2_3[13]).ApplicationCommandOptionType.ATTACHMENT) {
                      let tmp62 = outer2_2;
                      let tmp63 = outer2_3;
                      let obj8 = outer2_2(outer2_3[14]);
                      let filterEmptyResult = obj8.filterEmpty(optionValues[value.name]);
                      let tmp64 = outer2_1;
                      let tmp66 = null != context.autocomplete;
                      let tmp65 = outer2_1(outer2_3[16]);
                      if (!tmp66) {
                        tmp66 = 1 === filterEmptyResult.length;
                      }
                      let _HermesInternal2 = HermesInternal;
                      let tmp65Result = tmp65(tmp66, "Option \"" + value.name + "\" expects a single option type");
                      if (null != filterEmptyResult[0]) {
                        let first = filterEmptyResult[0];
                        obj = first;
                        if (null == first) {
                          obj = { type: "text", text: "" };
                        }
                        let type = value.type;
                        let tmp69 = outer2_0;
                        let tmp70 = outer2_3;
                        if (outer2_0(outer2_3[13]).ApplicationCommandOptionType.CHANNEL === type) {
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
                              source = outer2_0;
                              source = outer2_3;
                              let obj33 = outer2_0(outer2_3[12]);
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
                                source = outer2_0;
                                source = outer2_3;
                                let obj21 = outer2_0(outer2_3[17]);
                                let guild6 = context.guild;
                                source = undefined;
                                if (null != guild6) {
                                  source = guild6.id;
                                }
                                source = obj21.resolveApplicationCommandOption(obj.text, source, context.channel.id);
                                source = outer2_1;
                                source = outer2_3;
                                source = undefined;
                                source = outer2_1(outer2_3[16]);
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
                          source = outer2_0;
                          source = outer2_3;
                          if (outer2_0(outer2_3[13]).ApplicationCommandOptionType.ROLE === type) {
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
                              source = outer2_0;
                              source = outer2_3;
                              let obj18 = outer2_0(outer2_3[12]);
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
                                source = outer2_0;
                                source = outer2_3;
                                let obj19 = outer2_0(outer2_3[17]);
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
                                source = outer2_1;
                                source = outer2_3;
                                source = undefined;
                                source = outer2_1(outer2_3[16]);
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
                            source = outer2_0;
                            source = outer2_3;
                            if (outer2_0(outer2_3[13]).ApplicationCommandOptionType.USER === type) {
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
                                  source = outer2_0;
                                  source = outer2_3;
                                  let obj32 = outer2_0(outer2_3[12]);
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
                                    source = outer2_0;
                                    source = outer2_3;
                                    let obj16 = outer2_0(outer2_3[17]);
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
                                    source = outer2_1;
                                    source = outer2_3;
                                    source = undefined;
                                    source = outer2_1(outer2_3[16]);
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
                              source = outer2_0;
                              source = outer2_3;
                              if (outer2_0(outer2_3[13]).ApplicationCommandOptionType.MENTIONABLE === type) {
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
                                    source = outer2_0;
                                    source = outer2_3;
                                    let obj31 = outer2_0(outer2_3[12]);
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
                                      let tmp98 = outer2_0;
                                      let tmp99 = outer2_3;
                                      let obj15 = outer2_0(outer2_3[17]);
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
                                          source = outer2_1;
                                          source = outer2_3;
                                          let _HermesInternal4 = HermesInternal;
                                          source = outer2_1(outer2_3[16]);
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
                                source = outer2_0;
                                source = outer2_3;
                                if (outer2_0(outer2_3[13]).ApplicationCommandOptionType.BOOLEAN === type) {
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
                                    source = outer2_0;
                                    source = outer2_3;
                                    let obj30 = outer2_0(outer2_3[15]);
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
                                  source = outer2_0;
                                  source = outer2_3;
                                  if (outer2_0(outer2_3[13]).ApplicationCommandOptionType.INTEGER === type) {
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
                                        let tmp96 = outer2_0;
                                        let tmp97 = outer2_3;
                                        let obj14 = outer2_0(outer2_3[15]);
                                        let query3 = obj14.findChoiceNumberValue(value.choices, source);
                                      } else if (value.autocomplete) {
                                        if (null != context.autocomplete) {
                                          if (tmp41) {
                                            query3 = context.autocomplete.query;
                                          }
                                        }
                                        let tmp93 = outer2_0;
                                        let tmp94 = outer2_3;
                                        let obj13 = outer2_0(outer2_3[15]);
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
                                        source = outer2_2;
                                        source = outer2_3;
                                        let obj29 = outer2_2(outer2_3[14]);
                                        source = outer2_6;
                                        roleId = Number(obj29.normalizeNumericString(outer2_6.locale, source));
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
                                    source = outer2_0;
                                    source = outer2_3;
                                    if (outer2_0(outer2_3[13]).ApplicationCommandOptionType.NUMBER === type) {
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
                                          let tmp91 = outer2_0;
                                          let tmp92 = outer2_3;
                                          let obj12 = outer2_0(outer2_3[15]);
                                          let query2 = obj12.findChoiceNumberValue(value.choices, source);
                                        } else if (value.autocomplete) {
                                          if (null != context.autocomplete) {
                                            if (tmp41) {
                                              query2 = context.autocomplete.query;
                                            }
                                          }
                                          let tmp88 = outer2_0;
                                          let tmp89 = outer2_3;
                                          let obj11 = outer2_0(outer2_3[15]);
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
                                          source = outer2_2;
                                          source = outer2_3;
                                          let obj28 = outer2_2(outer2_3[14]);
                                          source = outer2_6;
                                          roleId = Number(obj28.normalizeNumericString(outer2_6.locale, source));
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
                          source = outer2_1;
                          source = outer2_3;
                          source = null != context.autocomplete;
                          source = outer2_1(outer2_3[16]);
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
                        let tmp58 = outer2_8;
                        let upload = outer2_8.getUpload(context.channel.id, value.name, commandAttachmentDraftType);
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
                    source = outer2_2;
                    source = outer2_3;
                    let obj27 = outer2_2(outer2_3[14]);
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
                      let tmp48 = outer2_0;
                      let tmp49 = outer2_3;
                      let obj5 = outer2_0(outer2_3[15]);
                      let query = obj5.findChoiceStringValue(value.choices, str2);
                    } else if (value.autocomplete) {
                      if (null != context.autocomplete) {
                        if (tmp41) {
                          query = context.autocomplete.query;
                        }
                      }
                      let tmp45 = outer2_0;
                      let tmp46 = outer2_3;
                      obj4 = outer2_0(outer2_3[15]);
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
                    let tmp50 = outer2_1;
                    let tmp51 = outer2_3;
                    let tmp53 = null != context.autocomplete;
                    let tmp52 = outer2_1(outer2_3[16]);
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
        source = outer2_1;
        source = outer2_3;
        source = outer2_12;
        const obj7 = {};
        ({ id: obj26.command_id, applicationId: obj26.application_id, type: obj26.command_type } = command);
        source = outer2_24;
        obj7.location = outer2_24(commandOrigin);
        obj7.source = source;
        source = outer2_1(outer2_3[18]).trackWithMetadata(outer2_12.APPLICATION_COMMAND_USED, obj7);
        return command.execute(source, context);
      } else {
        source = outer2_0;
        source = outer2_3;
        if (command.inputType !== outer2_0(outer2_3[9]).ApplicationCommandInputType.BUILT_IN) {
          source = outer2_0;
          source = outer2_3;
          if (command.inputType !== outer2_0(outer2_3[9]).ApplicationCommandInputType.BUILT_IN_TEXT) {
            source = outer2_0;
            source = outer2_3;
            if (command.inputType !== outer2_0(outer2_3[9]).ApplicationCommandInputType.BUILT_IN_INTEGRATION) {
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
                source = outer2_0;
                source = outer2_3;
                source = outer2_0(outer2_3[19]).performAutocomplete(command, context, obj8);
                const obj24 = outer2_0(outer2_3[19]);
              } else {
                source = outer2_1;
                source = outer2_3;
                source = outer2_1(outer2_3[20]).clearAll(context.channel.id, commandAttachmentDraftType);
                const obj9 = {
                  applicationId: command.applicationId,
                  data: obj8,
                  context,
                  attachments: items1,
                  maxSizeCallback,
                  onMessageSuccess(arg0) {
                                (function trackEmojiUsage(optionValues) {
                                  const values = Object.values(optionValues);
                                  const flatMapResult = values.flatMap((arr) => {
                                    const mapped = arr.map(() => { ... });
                                    return mapped.filter(outer5_0(outer5_3[22]).isNotNullish);
                                  });
                                  if (flatMapResult.length > 0) {
                                    let obj = { type: "EMOJI_TRACK_USAGE", emojiUsed: flatMapResult };
                                    outer4_1(outer4_3[10]).dispatch(obj);
                                    const obj2 = outer4_1(outer4_3[10]);
                                  }
                                })(optionValues);
                              }
                };
                source = outer2_24;
                source = outer2_20;
                obj9.analytics_location = outer2_24(commandOrigin);
                obj9.sectionName = sectionName;
                obj9.source = source;
                obj9.interactionLifecycleOptions = yield interactionLifecycleOptionsFactory(command, context, obj8);
                source = source(obj9);
                const obj35 = outer2_1(outer2_3[20]);
              }
            }
          }
        }
      }
    }
  })();
  iter.next();
  return iter;
}
async function _retryCommandMessage(arg0, arg1, arg2, arg3) {
  if (arg0.isCommandType()) {
    if (null != arg0.interactionData) {
      if (null != arg2.command) {
        let obj = { channel: arg1 };
        let guild = null;
        if (null != arg1.guild_id) {
          guild = outer2_7.getGuild(arg1.guild_id);
        }
        obj.guild = guild;
        obj = { applicationId: arg2.command.applicationId, data: arg0.interactionData };
        obj.context = obj;
        obj.interactionLifecycleOptions = yield outer2_22(arg2.command, obj, arg0.interactionData);
        outer2_20(obj);
        const tmp4 = outer2_20;
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
  interactionLifecycleOptions = interactionLifecycleOptions.interactionLifecycleOptions;
  let obj;
  if (null != context.channel) {
    const guild = context.guild;
    let id = context.channel.id;
    id = undefined;
    if (null != guild) {
      id = guild.id;
    }
    obj = { applicationId, channelId: id, guildId: id, data: tmp };
    let nonce = interactionLifecycleOptions.nonce;
    if (null == nonce) {
      nonce = onMessageSuccess(6995).createNonce();
      const obj2 = onMessageSuccess(6995);
    }
    obj.nonce = nonce;
    obj.attachments = attachments;
    obj.maxSizeCallback = maxSizeCallback;
    obj.analytics_location = tmp2;
    obj.sectionName = tmp3;
    obj.source = tmp4;
    obj = {};
    ({ messageId: obj4.messageId, onCreate: obj4.onCreate, onSuccess: obj4.onSuccess, onFailure: obj4.onFailure } = interactionLifecycleOptions);
    obj = { interactionType: onMessageSuccess(1881).InteractionTypes.APPLICATION_COMMAND, applicationId, channelId: id };
    obj.data = obj;
    importAll(7890).addQueued(obj.nonce, obj);
    if (null != attachments) {
      if (attachments.length > 0) {
        (function stageAttachments(attachments, nonce, id, maxSizeCallback) {
          return outer1_27(...arguments);
        })(attachments, obj.nonce, id, maxSizeCallback).then((arg0) => {
          if (arg0) {
            outer1_21(obj, onMessageSuccess);
          }
        });
        const promise = (function stageAttachments(attachments, nonce, id, maxSizeCallback) {
          return outer1_27(...arguments);
        })(attachments, obj.nonce, id, maxSizeCallback);
      }
    }
    queueCommand(obj, onMessageSuccess);
    const obj3 = importAll(7890);
  }
}
function queueCommand(message, onMessageSuccess) {
  const _require = message;
  const importDefault = onMessageSuccess;
  let obj = importDefault(7075);
  obj = { type: _require(7075).MessageDataType.COMMAND, message };
  obj.enqueue(obj, (ok) => {
    let applicationId;
    let channelId;
    let guildId;
    let nonce;
    ({ nonce, applicationId, channelId, guildId } = message);
    let tmp = null;
    if (null != guildId) {
      tmp = guildId;
    }
    const result = message(outer1_3[26]).handleInteractionResponse(nonce, ok, applicationId, channelId, tmp);
    ok = ok.ok;
    if (ok) {
      ok = null != onMessageSuccess;
    }
    if (ok) {
      onMessageSuccess();
    }
  });
}
function displayInteractionLifecycleInChat() {
  return _displayInteractionLifecycleInChat(...arguments);
}
async function _displayInteractionLifecycleInChat(arg0, arg1, arg2, arg3) {
  let closure_0 = arg0;
  let closure_1 = arg1;
  let obj;
  if (null == arg1.channel) {
    return {};
  } else {
    obj = { channel: arg1.channel, type: "channel" };
    const cachedApplicationSection = outer2_2(outer2_3[27]).getCachedApplicationSection(obj, arg2.type, arg0.applicationId);
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
          obj = outer2_2(outer2_3[28]);
          yield obj.getUser(tmp28.botId);
        }
      }
      while (true) {
        obj = {};
        let tmp7 = outer2_1;
        let tmp8 = outer2_3;
        let num2 = 29;
        let obj1 = { channelId: arg1.channel.id };
        let str = "";
        obj1.content = "";
        let tmp10 = outer2_0;
        let num3 = 13;
        let tmp9 = outer2_1(outer2_3[29]);
        if (arg2.type === outer2_0(outer2_3[13]).ApplicationCommandType.CHAT) {
          let tmp12 = outer2_13;
          let CONTEXT_MENU_COMMAND = outer2_13.CHAT_INPUT_COMMAND;
        } else {
          let tmp11 = outer2_13;
          CONTEXT_MENU_COMMAND = outer2_13.CONTEXT_MENU_COMMAND;
        }
        obj1.type = CONTEXT_MENU_COMMAND;
        if (null == bot) {
          let obj2 = {};
          let tmp13 = cachedApplicationSection;
          ({ id: obj4.id, name: obj4.username } = tmp28);
          let tmp14 = outer2_14;
          obj2.discriminator = outer2_14;
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
        ({ id: obj5.id, name: obj5.name } = arg2);
        obj3.name_localized = arg0.displayName;
        let tmp17 = outer2_0;
        let tmp18 = outer2_3;
        obj3.type = outer2_0(outer2_3[13]).InteractionTypes.APPLICATION_COMMAND;
        let obj5 = outer2_0(outer2_3[29]);
        let tmp19 = outer2_9;
        obj3.user = obj5.userRecordToServer(outer2_9.getCurrentUser());
        let str3 = "interaction";
        obj["interaction"] = obj3;
        let str4 = "interaction_data";
        obj["interaction_data"] = arg2;
        let tmp20 = outer2_1;
        let num4 = 30;
        let obj7 = outer2_1(outer2_3[30]);
        let obj4 = { applicationId: arg0.applicationId, command: arg0 };
        let flag2 = true;
        let tmp21 = obj7;
        let tmp22 = obj;
        let tmp23 = obj4;
        let receiveMessageResult = obj7.receiveMessage(arg1.channel.id, obj, true, obj4);
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
          if (null != channel.channel) {
            if (tmp2) {
              let obj = outer3_1(outer3_3[30]);
              obj.sendClydeError(channel.channel.id, code);
            }
            if (tmp7) {
              result = outer3_0(outer3_3[26]).interactionCallbackErrorReason(reason, applicationId.applicationId);
              const obj2 = outer3_0(outer3_3[26]);
            }
            obj = { type: "MESSAGE_SEND_FAILED" };
            obj.messageId = obj.id;
            obj.channelId = channel.channel.id;
            obj.reason = result;
            outer3_1(outer3_3[10]).dispatch(obj);
            const obj3 = outer3_1(outer3_3[10]);
            tmp2 = null == result && null != code;
            tmp7 = null == result && null != reason;
          }
        };
        return obj5;
      }
    }
    const obj10 = outer2_2(outer2_3[27]);
  }
}
function getAnalyticsLocationFromCommandOrigin(arg0) {
  if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.APPLICATION_LAUNCHER === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.APP_LAUNCHER;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.APP_LAUNCHER_APPLICATION_VIEW === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.IMAGE_RECS_MENU === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.IMAGE_RECS_MENU;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.IMAGE_RECS_SUBMENU === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.IMAGE_RECS_SUBMENU;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.ACTIVITY_INSTANCE_EMBED === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.ACTIVITY_INSTANCE_EMBED;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.ACTIVITY_BOOKMARK_EMBED === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.ACTIVITY_BOOKMARK_EMBED;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.MINI_SHELF === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.ACTIVITIES_MINI_SHELF;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.VOICE_TILE_ACTIVITY_SUGGESTIONS === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.VC_TILE_ACTIVITY_SUGGESTION;
  } else if (require(6755) /* ApplicationCommandSectionType */.CommandOrigin.APP_DMS_ENTRY_POINT_COMMAND_BUTTON === arg0) {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.APP_DMS_ENTRY_POINT_COMMAND_BUTTON;
  } else {
    return require(6755) /* ApplicationCommandSectionType */.ApplicationCommandTriggerLocations.SLASH_UI;
  }
}
function getMaxAndTotalFileSize() {
  return _getMaxAndTotalFileSize(...arguments);
}
async function _getMaxAndTotalFileSize(arg0, arg1, arg2) {
  const tmp = outer2_16(arg0);
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
async function _stageAttachments(arg0, arg1, arg2, arg3, arg4) {
  let largestUploadedFileSize;
  let totalSize;
  let closure_0 = arg1;
  let closure_1 = arg3;
  let c2;
  function handleUploadsTooLarge(largestUploadedFileSize) {
    if (null != callback) {
      callback(c2, largestUploadedFileSize);
    }
    let obj = outer3_2(outer3_3[24]);
    const intl = outer3_0(outer3_3[32]).intl;
    obj = { maxSize: outer3_0(outer3_3[31]).sizeString(c2) };
    obj.setFailed(closure_0, outer3_11.ENTITY_TOO_LARGE, intl.formatToPlainString(outer3_0(outer3_3[32]).t.fxEKdS, obj));
  }
  const maxFileSizeResult = outer2_0(outer2_3[31]).maxFileSize(arg2);
  c2 = maxFileSizeResult;
  const obj2 = outer2_0(outer2_3[31]);
  ({ totalSize, largestUploadedFileSize } = yield outer2_25(arg0, false));
  if (largestUploadedFileSize <= Math.max(maxFileSizeResult, outer2_15)) {
    if (totalSize <= outer2_0(outer2_3[33]).MAX_TOTAL_ATTACHMENT_SIZE) {
      yield outer2_1(outer2_3[34])(obj);
      const tmp5 = yield outer2_25(obj, true);
      const largestUploadedFileSize2 = tmp5.largestUploadedFileSize;
      const someResult = obj.some((error) => error.error === outer3_11.ENTITY_TOO_LARGE);
      let tmp8 = someResult;
      if (!someResult) {
        tmp8 = tmp5.totalSize > outer2_0(outer2_3[33]).MAX_TOTAL_ATTACHMENT_SIZE;
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
({ AbortCodes: closure_11, AnalyticEvents: closure_12, MessageTypes: closure_13, NON_USER_BOT_DISCRIMINATOR: closure_14 } = ME);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_commands/executeCommand.tsx");

export default function executeCommand() {
  return _executeCommand(...arguments);
};
export const retryCommandMessage = function retryCommandMessage(id2, id, arg2) {
  return _retryCommandMessage(...arguments);
};
