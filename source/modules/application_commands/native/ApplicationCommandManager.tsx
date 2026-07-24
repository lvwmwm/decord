// Module ID: 11491
// Function ID: 89460
// Name: _createForOfIteratorHelperLoose
// Dependencies: [57, 6, 7, 4468, 7021, 653, 4567, 1552, 11147, 7019, 6753, 8233, 6755, 8229, 11146, 1881, 11182, 4118, 22, 11309, 11148, 4099, 4324, 9593, 8025, 3996, 1555, 11307, 2]

// Module 11491 (_createForOfIteratorHelperLoose)
import _slicedToArray from "_slicedToArray";
import closure_5 from "regExp";
import DRAG_HANDLE from "DRAG_HANDLE";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import ME from "ME";
import regExp from "regExp";
import { MediaKeyboardTarget } from "DRAG_HANDLE";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
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
function getNextOption(options) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  options = options.options;
  let found;
  if (null != options) {
    found = options.filter((required) => {
      let tmp = required.required || closure_1;
      if (tmp) {
        tmp = !set.has(required.name);
      }
      return tmp;
    });
  }
  let first = null;
  if (null != found) {
    first = null;
    if (found.length > 0) {
      first = found[0];
    }
  }
  return first;
}
({ AnalyticEvents: closure_9, AutoCompleteResultTypes: closure_10, WHITESPACE_RE: closure_11 } = ME);
({ COMMAND_SENTINEL: closure_12, formatGameMentionRaw: closure_13 } = regExp);
let closure_15 = { FULL_COMMAND: 0, [0]: "FULL_COMMAND", PARTIAL_COMMAND: 1, [1]: "PARTIAL_COMMAND" };
const tmp4 = (() => {
  class ApplicationCommandManager {
    constructor(arg0) {
      self = this;
      self = this;
      tmp = outer1_5(this, self);
      this.chatInputNodes = [];
      map = new Map();
      this.optionsToNodes = map;
      map1 = new Map();
      this.optionValueNodes = map1;
      map2 = new Map();
      this.mentionGames = map2;
      tmp5 = outer1_1(outer1_3[8]);
      tmp5 = new tmp5();
      this.parser = tmp5;
      this.optionValues = {};
      this.optionValidationResults = {};
      this.canAutoInsertFirstOption = true;
      this.preferredOptionValues = {};
      this.setAutoCompleteResult = (channelId, displayText) => {
        let insertOrJumpCommandOption = arg3;
        const activeOption = outer2_8.getActiveOption(channelId);
        if (arg2) {
          if (null != self.props.activeCommand) {
            if (null != activeOption) {
              if (insertOrJumpCommandOption.type === outer2_10.GAME_MENTION) {
                return false;
              } else {
                const type = insertOrJumpCommandOption.type;
                if (outer2_10.USER === type) {
                  let obj = { type: "userMention", userId: insertOrJumpCommandOption.user.id };
                  let tmp8 = obj;
                  insertOrJumpCommandOption = self.insertOrJumpCommandOption;
                  obj = { displayText, preferred: true, value: tmp8 };
                  const result = insertOrJumpCommandOption(activeOption, undefined, false, obj);
                } else if (outer2_10.ROLE !== type) {
                  if (outer2_10.CHANNEL === type) {
                    const obj1 = { type: "channelMention", channelId: insertOrJumpCommandOption.channel.id };
                    tmp8 = obj1;
                  }
                }
                const obj2 = { type: "roleMention", roleId: insertOrJumpCommandOption.id };
                tmp8 = obj2;
              }
            }
          }
        }
        if (insertOrJumpCommandOption.type !== outer2_10.SLASH) {
          return false;
        } else {
          obj = { channelId };
          ({ command: obj.command, section: obj.section, location: obj.location, visualSection: obj.visualSection, query: obj.query } = insertOrJumpCommandOption);
          obj.addSpace = true;
          self.setCommand(obj);
          return true;
        }
      };
      this.setCommand = (arg0) => {
        let _location;
        let channelId;
        let command;
        let commandText;
        let query;
        let section;
        let visualSection;
        ({ command, query, commandText } = arg0);
        const current = self.ref.current;
        ({ channelId, section, location: _location, visualSection } = arg0);
        if (null == commandText) {
          const _HermesInternal = HermesInternal;
          let str = "";
          const combined = "" + outer2_12 + command.displayName;
          if (tmp) {
            str = " ";
          }
          commandText = combined + str;
        }
        current.setText(commandText);
        let obj = ApplicationCommandManager(outer2_3[9]);
        obj = { channelId, command, section, location: _location, triggerSection: ApplicationCommandManager(outer2_3[10]).getCommandTriggerSection(visualSection) };
        let length;
        if (null != query) {
          length = query.length;
        }
        obj.queryLength = length;
        obj.setActiveCommand(obj);
        let id;
        if (null != self) {
          const preferredCommand = self.preferredCommand;
          if (null != preferredCommand) {
            id = preferredCommand.id;
          }
        }
        if (command.id !== id) {
          if (null != self) {
            obj = {};
            const obj1 = {};
            const merged = Object.assign(command);
            obj1["preferredCommandType"] = outer2_15.FULL_COMMAND;
            obj.preferredCommand = obj1;
            const result = self.updateApplicationCommandManagerState(obj);
          }
        }
      };
      this.setPartialCommand = (id, untranslatedName, location) => {
        const current = self.ref.current;
        current.setText("" + outer2_12 + untranslatedName);
        const preferredCommand = self.preferredCommand;
        id = undefined;
        if (null != preferredCommand) {
          id = preferredCommand.id;
        }
        if (id !== id) {
          let obj = {};
          obj = { id, untranslatedName, displayName: untranslatedName, preferredCommandType: outer2_15.PARTIAL_COMMAND };
          obj.preferredCommand = obj;
          obj.location = location;
          const result = self.updateApplicationCommandManagerState(obj);
        }
      };
      this.setPastedCommand = (arg0, channel) => {
        let application;
        let bot;
        let command;
        let id;
        let name;
        const parsed = JSON.parse(arg0);
        let obj = ApplicationCommandManager(outer2_3[10]);
        const result = obj.extractInteractionDataProps(parsed);
        let interactionOptions = result.interactionOptions;
        let obj1 = outer2_2(outer2_3[11]);
        obj = { type: "channel", channel };
        const cachedCommand = obj1.getCachedCommand(obj, result.commandKey);
        ({ application, command } = cachedCommand);
        if (null != command) {
          let tmp8 = null;
          if (null != application) {
            obj = { type: ApplicationCommandManager(outer2_3[12]).ApplicationCommandSectionType.APPLICATION };
            ({ id: obj4.id, icon: obj4.icon, bot } = application);
            let username;
            if (null != bot) {
              username = bot.username;
            }
            if (null == username) {
              username = application.name;
            }
            obj.name = username;
            obj.application = application;
            tmp8 = obj;
          }
          if (null == interactionOptions) {
            interactionOptions = [];
          }
          const initialValuesFromInteractionOptions = ApplicationCommandManager(outer2_3[13]).getInitialValuesFromInteractionOptions(command, interactionOptions);
          const _Object = Object;
          const keys = Object.keys(initialValuesFromInteractionOptions);
          const mapped = keys.map((arg0) => {
            let options = arg0;
            options = options.options;
            let found;
            if (null != options) {
              found = options.find((name) => name.name === closure_0);
            }
            iter = iter[arg0];
            if (null != found) {
              if (null != iter) {
                let str = iter.value;
                str = undefined;
                if (null != str) {
                  str = str.toString();
                }
                if (null != found.choices) {
                  const choices = found.choices;
                  const found1 = choices.find((value) => value.value === iter.value);
                  let displayName;
                  if (null != found1) {
                    displayName = found1.displayName;
                  }
                  str = displayName;
                }
                const _HermesInternal = HermesInternal;
                return "" + found.displayName + ":" + str;
              }
            }
            return null;
          });
          let found = mapped.filter((arg0) => null != arg0);
          const joined = found.join(" ");
          obj1 = { channelId: channel.id, command, section: tmp8, location: ApplicationCommandManager(outer2_3[12]).ApplicationCommandTriggerLocations.PASTE };
          let _HermesInternal = HermesInternal;
          let str2 = "";
          const combined = "" + outer2_12 + command.displayName;
          if (0 !== joined.length) {
            const _HermesInternal2 = HermesInternal;
            str2 = " " + joined;
          }
          obj1.commandText = combined + str2;
          command.setCommand(obj1);
          const obj5 = ApplicationCommandManager(outer2_3[13]);
        } else {
          ({ id, name } = parsed);
          command.setPartialCommand(id, name, ApplicationCommandManager(outer2_3[12]).ApplicationCommandTriggerLocations.PASTE);
        }
      };
      this.updateApplicationCommandManagerState = (newState) => {
        let _location;
        let preferredCommand;
        let props = newState.newState;
        const obj = {};
        ({ preferredCommand, location: _location } = newState);
        if (null == props) {
          props = self.props;
        }
        const merged = Object.assign(props);
        obj["preferredCommand"] = preferredCommand;
        obj["location"] = _location;
        self.mergePropsAndUpdate(obj);
      };
      this.addCommandOptionParserRules = () => {
        const parser = self.parser;
        let obj = {
          ruleId: "commandOptionParserRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION,
          matchFunction(arg0, arg1) {
            return ApplicationCommandManager(outer3_3[14]).getMatchedOptions(arg0, arg1);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.commandOption();
          },
          deleteNodeOnBackspace: true,
          editDisabled: true
        };
        parser.addRule(obj);
        const parser2 = self.parser;
        obj = {
          ruleId: "commandOptionValueParserRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE,
          matchFunction(arg0, arg1) {
            return ApplicationCommandManager(outer3_3[14]).getMatchedOptionsWithValue(arg0, arg1);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.commandOption();
          },
          editDisabled(data) {
            data = data.data;
            let type;
            if (null != data) {
              type = data.option.type;
            }
            return type === ApplicationCommandManager(outer3_3[15]).ApplicationCommandOptionType.ATTACHMENT;
          }
        };
        parser2.addRule(obj);
        const parser3 = self.parser;
        obj = {
          ruleId: "emojiHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.EMOJI_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getEmojiHighlightNodes(outer1_0.props.channel, arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.autocomplete();
          },
          editDisabled() {
            return false;
          }
        };
        parser3.addRule(obj);
        const parser4 = self.parser;
        parser4.addRule({
          ruleId: "roleHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.ROLE_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getRoleHighlightNodes(outer1_0.props.channel, arg0);
          },
          style(data) {
            data = data.data;
            let color;
            if (null != data) {
              color = data.color;
            }
            const styles = outer1_0.styles;
            let tmp2;
            if (null != color) {
              tmp2 = color;
            }
            return styles.autocomplete(tmp2);
          },
          editDisabled() {
            return false;
          }
        });
        const parser5 = self.parser;
        const obj1 = {
          ruleId: "roleHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.ROLE_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getRoleHighlightNodes(outer1_0.props.channel, arg0);
          },
          style(data) {
            data = data.data;
            let color;
            if (null != data) {
              color = data.color;
            }
            const styles = outer1_0.styles;
            let tmp2;
            if (null != color) {
              tmp2 = color;
            }
            return styles.autocomplete(tmp2);
          },
          editDisabled() {
            return false;
          }
        };
        parser5.addRule({
          ruleId: "userHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.USER_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getUsernameHighlightNodes(outer1_0.props.channel, arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.autocomplete();
          },
          editDisabled() {
            return false;
          }
        });
        const parser6 = self.parser;
        const obj2 = {
          ruleId: "userHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.USER_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getUsernameHighlightNodes(outer1_0.props.channel, arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.autocomplete();
          },
          editDisabled() {
            return false;
          }
        };
        parser6.addRule({
          ruleId: "channelHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.CHANNEL_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getChannelHighlightNodes(outer1_0.props.channel, arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.autocomplete();
          },
          editDisabled() {
            return false;
          }
        });
        const parser7 = self.parser;
        const obj3 = {
          ruleId: "channelHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.CHANNEL_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getChannelHighlightNodes(outer1_0.props.channel, arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.autocomplete();
          },
          editDisabled() {
            return false;
          }
        };
        parser7.addRule({
          ruleId: "silentHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.SILENT_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getSilentHighlightNodes(arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.autocomplete();
          },
          editDisabled() {
            return false;
          }
        });
        const parser8 = self.parser;
        const obj4 = {
          ruleId: "silentHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.SILENT_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getSilentHighlightNodes(arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.autocomplete();
          },
          editDisabled() {
            return false;
          }
        };
        parser8.addRule({
          ruleId: "gameHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.GAME_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getGameHighlightNodes(outer1_0.mentionGames, arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.gameMention();
          },
          deleteNodeOnBackspace: true,
          editDisabled() {
            return true;
          }
        });
        const parser9 = self.parser;
        const obj5 = {
          ruleId: "gameHighlightRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.GAME_HIGHLIGHT,
          matchFunction(arg0) {
            return ApplicationCommandManager(outer3_3[14]).getGameHighlightNodes(outer1_0.mentionGames, arg0);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.gameMention();
          },
          deleteNodeOnBackspace: true,
          editDisabled() {
            return true;
          }
        };
        parser9.addRule({
          ruleId: "gameMentionInputRuleId",
          type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.GAME_MENTION_INPUT,
          matchFunction(arr) {
            return ApplicationCommandManager(outer3_3[14]).getGameMentionInputNodes(arr);
          },
          style() {
            const styles = outer1_0.styles;
            return styles.commandOption();
          },
          deleteNodeOnBackspace: true,
          editDisabled() {
            return true;
          }
        });
      };
      this.getCurrentCommand = (str, channel, displayName, section) => {
        let closure_2;
        let text;
        const _self = channel;
        let closure_1 = displayName;
        if (null != str) {
          if (!_self.props.commandsDisabled) {
            if (str.startsWith(outer2_12)) {
              let obj = ApplicationCommandManager(outer2_3[14]);
              const textBeforeFirstOption = obj.getTextBeforeFirstOption(str);
              ({ match: closure_2, text } = textBeforeFirstOption);
              let flag = false;
              if (null != displayName) {
                const _HermesInternal = HermesInternal;
                if (text.startsWith("" + outer2_12 + displayName.displayName)) {
                  flag = true;
                  if (displayName.preferredCommandType === outer2_15.FULL_COMMAND) {
                    obj = { command: displayName, section };
                    return obj;
                  }
                } else {
                  const _HermesInternal2 = HermesInternal;
                  flag = false;
                }
              }
              if (null == _self.contextCommands) {
                return null;
              } else {
                obj = { channel, type: "channel" };
                const commandContext = ApplicationCommandManager(outer2_3[16]).getCommandContext(obj);
                let preferredCommandType;
                if (null != displayName) {
                  preferredCommandType = displayName.preferredCommandType;
                }
                if (preferredCommandType === outer2_15.PARTIAL_COMMAND) {
                  const contextCommands = _self.contextCommands;
                  let found = contextCommands.find((id) => id.id === displayName.id);
                  if (null != found) {
                    let obj2 = outer2_2(outer2_3[11]);
                    let obj1 = { channel, type: "channel" };
                    let cachedApplicationSection = obj2.getCachedApplicationSection(obj1, ApplicationCommandManager(outer2_3[15]).ApplicationCommandType.CHAT, found.applicationId);
                    let tmp21 = null;
                    if (null != cachedApplicationSection) {
                      obj2 = {};
                      let obj3 = {};
                      let merged = Object.assign(found);
                      obj3["preferredCommandType"] = outer2_15.FULL_COMMAND;
                      obj2.command = obj3;
                      obj2.section = cachedApplicationSection;
                      tmp21 = obj2;
                    }
                    return tmp21;
                  }
                } else {
                  const parts = text.slice(1).split(" ", 3);
                  function _loop() {
                    const substr = parts.slice(0, parts.length - num5);
                    const joined = substr.join(" ");
                    let obj1 = ApplicationCommandManager(outer3_3[10]);
                    let obj2 = outer3_1(outer3_3[17]);
                    const regExp = new RegExp("^" + obj2.escape(joined), "i");
                    const matchingGroupCommands = obj1.getMatchingGroupCommands(displayName.contextCommands, regExp, closure_3, 2);
                    const found = matchingGroupCommands.filter((inputType) => {
                      let tmp = inputType.inputType !== ApplicationCommandManager(outer4_3[12]).ApplicationCommandInputType.PLACEHOLDER;
                      if (tmp) {
                        let tmp3 = inputType.displayName === joined;
                        if (!tmp3) {
                          tmp3 = inputType.untranslatedName === joined;
                        }
                        tmp = tmp3;
                      }
                      return tmp;
                    });
                    if (found.length > 0) {
                      const first = found[0];
                      let tmp5 = num5 > 0;
                      if (!tmp5) {
                        tmp5 = null != closure_2;
                      }
                      let obj3 = outer3_2(outer3_3[11]);
                      let obj = { channel: joined, type: "channel" };
                      const cachedApplicationSection = obj3.getCachedApplicationSection(obj, ApplicationCommandManager(outer3_3[15]).ApplicationCommandType.CHAT, first.applicationId);
                      if (null == cachedApplicationSection) {
                        obj = { v: null };
                        obj1 = obj;
                      } else {
                        obj1 = {};
                        obj2 = {};
                        obj3 = {};
                        const merged = Object.assign(first);
                        obj3["preferredCommandType"] = outer3_15.FULL_COMMAND;
                        obj2.command = obj3;
                        obj2.section = cachedApplicationSection;
                        obj1.v = obj2;
                      }
                      return obj1;
                    }
                    return matchingGroupCommands.length > 0 ? 0 : undefined;
                  }
                  let num5 = 0;
                  if (0 < parts.length) {
                    let _loopResult = _loop();
                    num5 = 0;
                    if (0 !== _loopResult) {
                      while (!_loopResult) {
                        num5 = num5 + 1;
                        if (num5 < parts.length) {
                          _loopResult = _loop();
                        }
                      }
                      return _loopResult.v;
                    }
                  }
                  const str2 = text.slice(1);
                }
                let tmp16 = null;
                if (flag) {
                  tmp16 = null;
                  if (null != displayName) {
                    const obj4 = { command: displayName, section: null };
                    tmp16 = obj4;
                  }
                }
                return tmp16;
              }
            }
          }
        }
        return null;
      };
      this.getCurrentOption = (arg0, arg1) => {
        const _self = arg1;
        if (arg0) {
          const _Array = Array;
          const optionValueNodes = _self.optionValueNodes;
          const findLastResult = outer2_1(outer2_3[18]).findLast(Array.from(optionValueNodes.values()), (location) => location.location <= closure_0);
          if (null != findLastResult) {
            const data = findLastResult.data;
            if (null != data) {
              const option = data.option;
            }
          }
          if (null != findLastResult) {
            if (null != option) {
              let tmp9;
              if (null != _self.preferredOptionValues[_self.props.channel.id]) {
                tmp9 = tmp8[option.name];
              }
              return option;
            }
          }
          return null;
        } else {
          return null;
        }
      };
      this.getAllCommandOptionValues = (options, str) => {
        let arr;
        let iter;
        let tmp3;
        if (null == options.options) {
          return {};
        } else {
          const obj = {};
          const tmp17 = outer2_16(self.optionValueNodes);
          const iter3 = tmp17();
          let iter2 = iter3;
          if (!iter3.done) {
            do {
              let tmp = outer2_4;
              let tmp2 = outer2_4(iter2.value, 2);
              [tmp3, arr] = tmp2;
              let data = arr.data;
              let type;
              if (null != data) {
                type = data.type;
              }
              let tmp5 = ApplicationCommandManager;
              let tmp6 = outer2_3;
              if (type === ApplicationCommandManager(outer2_3[8]).ChatInputParseResultDataType.COMMAND_OPTION) {
                let tmp18 = self;
                let tmp19 = self.preferredOptionValues[self.props.channel.id];
                let tmp8 = tmp19;
                let optionValue;
                if (null != tmp19) {
                  let tmp7 = tmp19[tmp3];
                  tmp8 = tmp7;
                  if (null != tmp7) {
                    optionValue = tmp7.optionValue;
                    tmp8 = tmp7;
                  }
                }
                if (null != optionValue) {
                  let items = [optionValue];
                  obj[tmp3] = items;
                  let tmp13 = tmp8;
                  let tmp14 = optionValue;
                } else {
                  let option = arr.data.option;
                  let tmp10 = self;
                  let optionValueParser = self.optionValueParser;
                  let items1 = [optionValueParser.parse(str.substring(arr.location + option.displayName.length + 1, arr.location + arr.length), option)];
                  obj[tmp3] = items1;
                  let tmp11 = tmp8;
                  let tmp12 = optionValue;
                }
              }
              iter = tmp17();
              iter2 = iter;
            } while (!iter.done);
          }
          return obj;
        }
      };
      this.insertFirstOptionIfValid = (str, displayName) => {
        if (str.startsWith("" + outer2_12 + arg2)) {
          if (str.length > arg2.length + 1) {
            if (outer2_11.test(str[arg2.length + 1])) {
              const _Set = Set;
              const optionValueNodes = self.optionValueNodes;
              const set = new Set(optionValueNodes.keys());
              const tmp10 = outer2_18(displayName, set, true);
              if (null != tmp10) {
                const result = self.insertOrJumpCommandOption(tmp10, displayName.displayName.length + 2, true, undefined, displayName);
              }
              return true;
            }
          }
        }
        return false;
      };
      this.insertOrJumpCommandOption = (name, arg1, arg2, displayText) => {
        let selectionStart;
        let text;
        let flag = arg2;
        let activeCommand = arg4;
        if (arg2 === undefined) {
          flag = false;
        }
        if (null == activeCommand) {
          activeCommand = self.props.activeCommand;
        }
        if (null != activeCommand) {
          ({ text, selectionStart } = self.props);
          const optionValueNodes2 = self.optionValueNodes;
          if (null != optionValueNodes2) {
            const value = optionValueNodes2.get(name.name);
          }
          displayText = undefined;
          if (null != displayText) {
            displayText = displayText.displayText;
          }
          if (null == displayText) {
            if (null == value) {
              if (null != arg1) {
                selectionStart = arg1;
              }
              let tmp30 = null != text && selectionStart <= text.length;
              if (tmp30) {
                const _Math3 = Math;
                tmp30 = !outer2_11.test(text[Math.min(Math, selectionStart - 1, text.length - 1)]);
              }
              const current3 = self.ref.current;
              let obj = { location: selectionStart, length: 0 };
              let str8 = "";
              if (tmp30) {
                str8 = " ";
              }
              const _HermesInternal6 = HermesInternal;
              obj.text = "" + str8 + name.displayName + ":";
              obj = { type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION };
              const styles3 = self.styles;
              obj.style = styles3.commandOption();
              let num11 = 0;
              if (tmp30) {
                num11 = 1;
              }
              obj.location = num11;
              obj.length = name.displayName.length + 1;
              const items = [obj];
              obj.nodes = items;
              obj.keepCursorPosition = flag;
              obj.editId = self.editId;
              current3.replaceRange(obj);
            } else {
              const current2 = self.ref.current;
              current2.setSelectedRange(value.location + name.displayName.length + 1, value.length - name.displayName.length - 1);
            }
          } else {
            if (null != value) {
              let _location = value.location;
            } else {
              _location = selectionStart;
              if (null != arg1) {
                _location = arg1;
              }
            }
            let num = 0;
            if (null != value) {
              num = value.length;
            }
            let tmp3 = null != text && _location <= text.length;
            if (tmp3) {
              const _Math = Math;
              tmp3 = !outer2_11.test(text[Math.min(Math, _location - 1, text.length - 1)]);
            }
            const _Set = Set;
            const optionValueNodes = self.optionValueNodes;
            const set = new Set(optionValueNodes.keys());
            set.add(name.name);
            const tmp13 = outer2_18(activeCommand, set);
            let tmp14 = null != displayText;
            if (tmp14) {
              let tmp15 = _location + num !== text.length;
              if (tmp15) {
                const _Math2 = Math;
                tmp15 = !outer2_11.test(text[Math.min(Math, _location + num, text.length - 1)]);
              }
              if (!tmp15) {
                tmp15 = null != tmp13;
              }
              tmp14 = tmp15;
            }
            let displayText1;
            if (null != displayText) {
              displayText1 = displayText.displayText;
            }
            if ("" !== displayText1) {
              const _HermesInternal2 = HermesInternal;
              let combined = "" + name.displayName + ":" + displayText.displayText;
            } else {
              const _HermesInternal = HermesInternal;
              combined = "" + name.displayName + ":";
            }
            let str4 = "";
            if (tmp3) {
              str4 = " ";
            }
            let str5 = "";
            if (tmp14) {
              str5 = " ";
            }
            const _HermesInternal3 = HermesInternal;
            const combined1 = "" + str4 + combined + str5;
            if (null != tmp13) {
              const _HermesInternal4 = HermesInternal;
              const combined2 = "" + tmp13.displayName + ":";
              const _HermesInternal5 = HermesInternal;
              const obj1 = {};
              const combined3 = "" + combined1 + combined2;
              obj1.type = ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE;
              const styles = self.styles;
              obj1.style = styles.commandOption();
              let num6 = 0;
              if (tmp3) {
                num6 = 1;
              }
              obj1.location = num6;
              obj1.length = combined.length;
              const items1 = [obj1, ];
              const obj2 = { type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION };
              const styles2 = self.styles;
              obj2.style = styles2.commandOption();
              obj2.location = combined1.length;
              obj2.length = combined2.length;
              items1[1] = obj2;
              const current = self.ref.current;
              const obj3 = { location: _location, length: num, text: combined3, nodes: items1, editId: self.editId };
              current.replaceRange(obj3);
            } else {
              const current4 = self.ref.current;
              const obj4 = { location: _location, length: num, text: combined1 };
              const obj5 = { type: ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE };
              const styles4 = self.styles;
              obj5.style = styles4.commandOption();
              let num4 = 0;
              if (tmp3) {
                num4 = 1;
              }
              obj5.location = num4;
              obj5.length = combined.length;
              const items2 = [obj5];
              obj4.nodes = items2;
              obj4.keepCursorPosition = flag;
              obj4.editId = self.editId;
              current4.replaceRange(obj4);
            }
          }
          if (tmp40) {
            if (null != self) {
              const result = self.setPreferredOptionValue(self.props.channel.id, name.name, displayText);
            }
          }
          tmp40 = null != displayText && displayText.preferred;
        }
      };
      this.sendCommand = (substr1, id) => {
        let commands;
        let sections;
        const activeCommand = obj.props.activeCommand;
        if (null != activeCommand) {
          let obj2 = ApplicationCommandManager(outer2_3[19]);
          let prop = obj.optionValidationResults;
          if (null == prop) {
            prop = {};
          }
          const firstInvalidOption = obj2.getFirstInvalidOption(activeCommand, prop);
          obj = {};
          const _Object = Object;
          const entries = Object.entries(outer2_8.getOptionStates(id.id));
          const item = entries.forEach((arg0) => {
            let tmp;
            let tmp2;
            [tmp, tmp2] = arg0;
            if (null != tmp2.optionValue) {
              obj[tmp] = tmp2.optionValue;
            }
          });
          if (null == firstInvalidOption) {
            arg2(activeCommand, ApplicationCommandManager(outer2_3[20]).parseOptionValuesForSend(id, activeCommand, obj));
            const obj6 = ApplicationCommandManager(outer2_3[20]);
          } else {
            const result = obj.insertOrJumpCommandOption(firstInvalidOption);
            const result1 = obj.updateValidationResults();
            const result2 = ApplicationCommandManager(outer2_3[21]).triggerHapticFeedback(ApplicationCommandManager(outer2_3[21]).HapticFeedbackTypes.NOTIFICATION_ERROR);
            const obj10 = ApplicationCommandManager(outer2_3[21]);
            obj = {};
            let applicationId;
            if (null != activeCommand) {
              applicationId = activeCommand.applicationId;
            }
            obj.application_id = applicationId;
            id = undefined;
            if (null != activeCommand) {
              const rootCommand = activeCommand.rootCommand;
              if (null != rootCommand) {
                id = rootCommand.id;
              }
            }
            obj.command_id = id;
            const type = firstInvalidOption.type;
            let num5 = 3;
            if (null != type) {
              num5 = type;
            }
            obj.argument_type = ApplicationCommandManager(outer2_3[15]).ApplicationCommandOptionType[num5];
            let required;
            if (null != firstInvalidOption) {
              required = firstInvalidOption.required;
            }
            obj.is_required = required;
            ApplicationCommandManager(outer2_3[22]).trackWithMetadata(outer2_9.APPLICATION_COMMAND_VALIDATION_FAILED, obj);
            const obj11 = ApplicationCommandManager(outer2_3[22]);
          }
          return true;
        } else {
          let query = null;
          if (obj7.getPrefix(substr1) === outer2_12) {
            obj = ApplicationCommandManager(outer2_3[23]);
            query = obj.getQuery(substr1);
          }
          if (null != query) {
            const obj1 = { channel: id, type: "channel" };
            const obj8 = outer2_2(outer2_3[11]);
            ({ commands, sections } = outer2_2(outer2_3[11]).getCachedResults(obj1, ApplicationCommandManager(outer2_3[15]).ApplicationCommandType.CHAT, query));
            if (null != commands) {
              if (commands.length > 0) {
                if (commands[0].inputType !== ApplicationCommandManager(outer2_3[12]).ApplicationCommandInputType.PLACEHOLDER) {
                  const first = commands[0];
                  const found = sections.find((application) => {
                    application = application.application;
                    let id;
                    if (null != application) {
                      id = application.id;
                    }
                    return id === first.applicationId;
                  });
                  obj2 = { channelId: id.id, command: first };
                  let tmp9 = null;
                  if (null != found) {
                    tmp9 = found;
                  }
                  obj2.section = tmp9;
                  obj2.location = ApplicationCommandManager(outer2_3[12]).ApplicationCommandTriggerLocations.DISCOVERY;
                  obj2.query = query;
                  obj.setCommand(obj2);
                  return true;
                }
              }
            }
            const cachedResults = outer2_2(outer2_3[11]).getCachedResults(obj1, ApplicationCommandManager(outer2_3[15]).ApplicationCommandType.CHAT, query);
          }
          return false;
        }
      };
      ({ props: this.props, ref: this.ref, optionValueParser: this.optionValueParser, styles: this.styles } = arg0);
      result = this.addCommandOptionParserRules();
      return;
    }
  }
  let obj = {
    key: "addGameMention",
    value: function addGameMention(game) {
      const mentionGames = this.mentionGames;
      const result = mentionGames.set(game.id, game);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "getMentionGames",
    value: function getMentionGames() {
      return this.mentionGames;
    }
  };
  items[1] = obj;
  obj = {
    key: "setPreferredOptionValue",
    value: function setPreferredOptionValue(id, name, displayText) {
      const self = this;
      if (null == this.preferredOptionValues[id]) {
        self.preferredOptionValues[id] = {};
      }
      self.preferredOptionValues[id][name] = displayText;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "mergePropsAndUpdate",
    value: function mergePropsAndUpdate(editId) {
      let activeCommand;
      let channel;
      let command;
      let focused;
      let iter2;
      let iter4;
      let lastCommandAutocompleteResponseNonce;
      let queryCommands;
      let section;
      let selectionEnd;
      let selectionStart;
      let text;
      let self = this;
      self = this;
      let closure_1 = editId;
      const props = this.props;
      ({ text, editId, channel } = props);
      let tmp3 = editId !== editId.editId;
      ({ selectionStart, selectionEnd, focused, queryCommands, lastCommandAutocompleteResponseNonce } = props);
      if (tmp3) {
        tmp3 = null != editId.editId;
      }
      if (tmp3) {
        self.editId = editId.editId;
      }
      let closure_2 = tmp5;
      ({ activeCommand, activeCommandSection: section } = self);
      if (text === editId.text) {
        if (queryCommands === editId.queryCommands) {
          let tmp9 = section;
          let flag = false;
        }
        let id;
        if (null != activeCommand) {
          id = activeCommand.id;
        }
        const activeCommand3 = self.activeCommand;
        let id1;
        if (null != activeCommand3) {
          id1 = activeCommand3.id;
        }
        let tmp60 = id !== id1;
        let closure_3 = tmp60;
        let activeOption = self.activeOption;
        let currentOption = activeOption;
        let tmp61 = tmp5;
        if (!tmp5) {
          tmp61 = tmp6;
        }
        if (!tmp61) {
          tmp61 = tmp7;
        }
        if (!tmp61) {
          tmp61 = tmp60;
        }
        if (tmp61) {
          let focused2 = editId.focused;
          if (!focused2) {
            let obj5 = ApplicationCommandManager(outer1_3[25]);
            const keyboardType = obj5.getKeyboardType();
            focused2 = keyboardType !== ApplicationCommandManager(outer1_3[26]).KeyboardTypes.SYSTEM;
          }
          currentOption = self.getCurrentOption(focused2, editId.selectionStart);
          activeOption = currentOption;
        }
        let tmp66 = tmp60;
        if (tmp60) {
          tmp66 = null != self.activeCommand;
        }
        if (tmp66) {
          outer1_1(outer1_3[24]).clearAll(channel.id, outer1_7.SlashCommand);
          const obj7 = outer1_1(outer1_3[24]);
        }
        let name;
        if (null != activeOption) {
          name = activeOption.name;
        }
        const activeOption2 = self.activeOption;
        let name1;
        if (null != activeOption2) {
          name1 = activeOption2.name;
        }
        let closure_5 = tmp73;
        let tmp75 = tmp5;
        if (!tmp5) {
          tmp75 = tmp73;
        }
        if (!tmp75) {
          tmp75 = tmp74;
        }
        if (tmp75) {
          let preferredCommandType;
          if (null != activeCommand) {
            preferredCommandType = activeCommand.preferredCommandType;
          }
          tmp75 = preferredCommandType === outer1_15.FULL_COMMAND;
        }
        if (tmp75) {
          self.optionValues = self.getAllCommandOptionValues(activeCommand, editId.text);
          const obj8 = ApplicationCommandManager(outer1_3[27]);
          self.optionValidationResults = obj8.getValidationResults(activeCommand, self.optionValues, editId.channel.guild_id, editId.channel.id, false);
          const chatInputNodes = self.chatInputNodes;
          self.chatInputNodes = chatInputNodes.map((type) => {
            if (type.type === ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION) {
              if (null != type.data) {
                const option = type.data.option;
                if (type.type === ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE) {
                  let name;
                  if (null != currentOption) {
                    name = currentOption.name;
                  }
                  if (option.name === name) {
                    if (closure_2) {
                      let obj = {};
                      const merged = Object.assign(type);
                      obj["style"] = undefined;
                      return obj;
                    }
                  }
                }
                obj = {};
                const merged1 = Object.assign(type);
                let name1;
                if (null != currentOption) {
                  name1 = currentOption.name;
                }
                if (option.name !== name1) {
                  if (undefined !== tmp17) {
                    if (!tmp17.success) {
                      const styles = self.styles;
                      obj.style = styles.commandErrorOption();
                    }
                    let tmp21 = null != tmp17 && tmp17.success;
                    if (tmp21) {
                      tmp21 = option.type === ApplicationCommandManager(outer2_3[15]).ApplicationCommandOptionType.ATTACHMENT;
                    }
                    if (tmp21) {
                      obj = { action: "tapAttachment", channelId: editId.channel.id, optionName: option.name };
                      obj.tapAction = obj;
                      obj.deleteNodeOnBackspace = true;
                    }
                    return obj;
                  }
                }
                const styles2 = self.styles;
                obj.style = styles2.commandOption();
              }
            }
            return type;
          });
        }
        let tmp82 = tmp5;
        if (!tmp5) {
          tmp82 = tmp60;
        }
        if (!tmp82) {
          tmp82 = tmp73;
        }
        if (!tmp82) {
          tmp82 = editId !== editId.editId;
        }
        if (tmp82) {
          const current = self.ref.current;
          let result = current.updateNativeTextBlocksThrottled(self.chatInputNodes, editId.editId);
        }
        let tmp84 = tmp60;
        if (tmp60) {
          tmp84 = null != activeCommand;
        }
        if (tmp84) {
          self.canAutoInsertFirstOption = true;
        }
        if (!obj9.isEmpty(self.optionsToNodes)) {
          self.canAutoInsertFirstOption = false;
        }
        let preferredCommandType1;
        if (null != activeCommand) {
          preferredCommandType1 = activeCommand.preferredCommandType;
        }
        if (preferredCommandType1 !== outer1_15.FULL_COMMAND) {
          let items = [];
        } else {
          items = undefined;
          if (null != activeCommand) {
            items = activeCommand.options;
          }
        }
        const tmp90 = items.filter((required) => required.required).length > 0;
        let preferredCommandType2;
        if (null != activeCommand) {
          preferredCommandType2 = activeCommand.preferredCommandType;
        }
        if (preferredCommandType2 !== outer1_15.FULL_COMMAND) {
          let items1 = [];
        } else {
          items1 = undefined;
          if (null != activeCommand) {
            items1 = activeCommand.options;
          }
        }
        const tmp94 = 1 === items1.filter((required) => !required.required).length;
        let canAutoInsertFirstOption = self.canAutoInsertFirstOption;
        if (canAutoInsertFirstOption) {
          let preferredCommandType3;
          if (null != activeCommand) {
            preferredCommandType3 = activeCommand.preferredCommandType;
          }
          canAutoInsertFirstOption = preferredCommandType3 === outer1_15.FULL_COMMAND;
        }
        if (canAutoInsertFirstOption) {
          canAutoInsertFirstOption = ApplicationCommandManager(outer1_3[18]).isEmpty(self.optionsToNodes);
          const obj10 = ApplicationCommandManager(outer1_3[18]);
        }
        if (canAutoInsertFirstOption) {
          canAutoInsertFirstOption = editId.text.length >= text.length;
        }
        if (canAutoInsertFirstOption) {
          let result1 = activeCommand;
          result1 = tmp90;
          result1 = tmp94;
          if (!self.insertFirstOptionIfValid(editId.text, activeCommand, activeCommand.displayName, tmp90, tmp94)) {
            result1 = self;
            result1 = activeCommand;
            result1 = tmp90;
            result1 = tmp94;
            result1 = self.insertFirstOptionIfValid(editId.text, activeCommand, activeCommand.untranslatedName, tmp90, tmp94);
          }
        }
        if (name !== name1) {
          result1 = undefined;
          if (null != activeOption) {
            result1 = activeOption.type;
          }
          result1 = ApplicationCommandManager;
          result1 = outer1_3;
          if (result1 === ApplicationCommandManager(outer1_3[15]).ApplicationCommandOptionType.ATTACHMENT) {
            if (!self.optionValidationResults[activeOption.name].success) {
              const current2 = self.ref.current;
              let obj = {};
              result1 = ApplicationCommandManager;
              result1 = outer1_3;
              obj.type = ApplicationCommandManager(outer1_3[26]).KeyboardTypes.MEDIA;
              obj = {};
              result1 = outer1_14;
              obj.target = outer1_14.COMMAND;
              obj.option = activeOption;
              obj.context = obj;
              result1 = current2.openCustomKeyboard(obj);
            }
            self.props = editId;
            const obj1 = {};
            result1 = undefined;
            if (null != activeCommand) {
              result1 = activeCommand.preferredCommandType;
            }
            result1 = outer1_15;
            if (result1 === outer1_15.FULL_COMMAND) {
              if (tmp73) {
                result1 = null == activeCommand;
                let arr6 = activeCommand;
                if (!result1) {
                  let options = activeCommand.options;
                  result1 = null == options;
                  arr6 = options;
                }
                if (!result1) {
                  result1 = arr6.forEach((name) => {
                    name = name.name;
                    const obj = {};
                    name = undefined;
                    if (null != currentOption) {
                      name = currentOption.name;
                    }
                    obj.isActive = name === name;
                    obj.optionValue = self.optionValues[name];
                    let tmp3 = null != arr;
                    if (tmp3) {
                      tmp3 = arr.length > 0;
                    }
                    obj.hasValue = tmp3;
                    const optionsToNodes = self.optionsToNodes;
                    let value = optionsToNodes.get(name);
                    let _location;
                    if (null != value) {
                      _location = value.location;
                    }
                    obj.location = _location;
                    const optionsToNodes2 = self.optionsToNodes;
                    value = optionsToNodes2.get(name);
                    let length;
                    if (null != value) {
                      length = value.length;
                    }
                    obj.length = length;
                    obj1[name] = obj;
                  });
                }
                if (tmp73) {
                  if (null != activeOption) {
                    obj1[activeOption.name].hasValue = true;
                  }
                  if (null != self.activeOption) {
                    result1 = obj1[self.activeOption.name];
                    if (null != result1) {
                      if (result1.hasValue) {
                        obj1[self.activeOption.name].lastValidationResult = self.optionValidationResults[self.activeOption.name];
                      }
                    }
                  }
                }
              }
            }
            result1 = self.getCurrentOption(true, editId.selectionStart);
            if (tmp5) {
              if (null != result1) {
                const name2 = result1.name;
                let obj2 = obj1[name2];
                if (null == obj2) {
                  obj2 = {};
                }
                let optionsToNodes2 = self.optionsToNodes;
                result1 = optionsToNodes2.get(name2);
                result1 = undefined;
                if (null != result1) {
                  result1 = result1.location;
                }
                obj2.location = result1;
                const optionsToNodes3 = self.optionsToNodes;
                let value = optionsToNodes3.get(name2);
                result1 = undefined;
                if (null != value) {
                  result1 = value.length;
                }
                obj2.length = result1;
                obj2.optionValue = self.optionValues[name2];
                obj2.hasValue = true;
                obj1[name2] = obj2;
              }
            }
            self.activeCommand = activeCommand;
            self.activeCommandSection = tmp9;
            self.activeOption = activeOption;
            if (!tmp60) {
              result1 = globalThis;
              const _Object = Object;
              tmp60 = Object.keys(obj1).length > 0;
            }
            if (!tmp60) {
              tmp60 = flag;
            }
            if (tmp60) {
              result1 = outer1_2;
              result1 = outer1_3;
              let obj3 = { channelId: editId.channel.id };
              const activeCommand4 = self.activeCommand;
              result1 = undefined;
              if (null != activeCommand4) {
                result1 = activeCommand4.preferredCommandType;
              }
              result1 = outer1_15;
              result1 = null;
              if (result1 === outer1_15.FULL_COMMAND) {
                result1 = self.activeCommand;
              }
              obj3.command = result1;
              const activeCommandSection = self.activeCommandSection;
              result1 = null;
              if (null != activeCommandSection) {
                result1 = activeCommandSection;
              }
              obj3.section = result1;
              const preferredCommand6 = self.preferredCommand;
              result1 = undefined;
              if (null != preferredCommand6) {
                result1 = preferredCommand6.id;
              }
              result1 = null;
              obj3.preferredCommandId = result1;
              obj3.location = self.location;
              obj3.changedOptionStates = obj1;
              result1 = outer1_2(outer1_3[9]).updateChannelState(obj3);
              const obj16 = outer1_2(outer1_3[9]);
            }
          }
        }
        result1 = tmp73;
        if (name !== name1) {
          result1 = null != activeOption;
        }
        if (result1) {
          result1 = ApplicationCommandManager;
          result1 = outer1_3;
          result1 = activeOption.type !== ApplicationCommandManager(outer1_3[15]).ApplicationCommandOptionType.ATTACHMENT;
        }
        if (result1) {
          result1 = ApplicationCommandManager;
          result1 = outer1_3;
          result1 = ApplicationCommandManager(outer1_3[25]).getKeyboardType();
          result1 = result1 !== ApplicationCommandManager(outer1_3[26]).KeyboardTypes.SYSTEM;
          const obj13 = ApplicationCommandManager(outer1_3[25]);
        }
        if (result1) {
          const current3 = self.ref.current;
          result1 = current3.closeCustomKeyboard();
          const current4 = self.ref.current;
          result1 = current4.focus();
        }
        obj9 = ApplicationCommandManager(outer1_3[18]);
        tmp74 = lastCommandAutocompleteResponseNonce !== editId.lastCommandAutocompleteResponseNonce;
      }
      self.contextCommands = editId.queryCommands;
      const preferredCommand = self.preferredCommand;
      if (null != editId.preferredCommand) {
        ({ preferredCommand: self.preferredCommand, location: self.location } = editId);
      }
      if (editId.commandsDisabled) {
        command = null;
        if (null != null) {
          ({ command, section } = null);
        }
        const preferredCommand2 = self.preferredCommand;
        let id2;
        if (null != preferredCommand2) {
          id2 = preferredCommand2.id;
        }
        let id3;
        if (null != command) {
          id3 = command.id;
        }
        if (id2 !== id3) {
          if (tmp5) {
            self.preferredCommand = null;
            self.preferredCommandSection = null;
            self.location = undefined;
          }
        } else {
          const preferredCommand3 = self.preferredCommand;
          let preferredCommandType4;
          if (null != preferredCommand3) {
            preferredCommandType4 = preferredCommand3.preferredCommandType;
          }
          let tmp17 = preferredCommandType4 === outer1_15.PARTIAL_COMMAND;
          if (tmp17) {
            let preferredCommandType5;
            if (null != command) {
              preferredCommandType5 = command.preferredCommandType;
            }
            tmp17 = preferredCommandType5 === outer1_15.FULL_COMMAND;
          }
          if (tmp17) {
            self.preferredCommand = command;
          }
        }
        let id4;
        if (null != preferredCommand) {
          id4 = preferredCommand.id;
        }
        const preferredCommand4 = self.preferredCommand;
        let id5;
        if (null != preferredCommand4) {
          id5 = preferredCommand4.id;
        }
        let tmp22 = id4 !== id5;
        if (!tmp22) {
          let preferredCommandType6;
          if (null != preferredCommand) {
            preferredCommandType6 = preferredCommand.preferredCommandType;
          }
          const preferredCommand5 = self.preferredCommand;
          let preferredCommandType7;
          if (null != preferredCommand5) {
            preferredCommandType7 = preferredCommand5.preferredCommandType;
          }
          tmp22 = preferredCommandType6 !== preferredCommandType7;
        }
        let obj4 = self.preferredOptionValues[channel.id];
        if (null == obj4) {
          obj4 = {};
        }
        const parser = self.parser;
        obj5 = {};
        let preferredCommandType8;
        if (null != command) {
          preferredCommandType8 = command.preferredCommandType;
        }
        let tmp27 = null;
        if (preferredCommandType8 === outer1_15.FULL_COMMAND) {
          tmp27 = command;
        }
        obj5.activeCommand = tmp27;
        obj5.preferredOptionValues = obj4;
        self.chatInputNodes = parser.parse(editId.text, obj5);
        const mentionGames = self.mentionGames;
        const items2 = [];
        HermesBuiltin.arraySpread(mentionGames.values(), 0);
        const mapped = items2.map((name) => name.name);
        const tmp32 = outer1_16(self.mentionGames);
        let iter = tmp32();
        if (!iter.done) {
          do {
            let tmp33 = outer1_4;
            let tmp34 = outer1_4(iter.value, 2);
            let first = tmp34[0];
            let tmp36 = ApplicationCommandManager;
            let tmp37 = outer1_3;
            obj3 = ApplicationCommandManager(outer1_3[14]);
            let hasItem = 0 !== obj3.findGameMentionTokens(editId.text, tmp34[1].name, mapped).locations.length;
            if (!hasItem) {
              let text2 = editId.text;
              let tmp39 = outer1_13;
              hasItem = text2.includes(outer1_13(first));
            }
            if (!hasItem) {
              let mentionGames2 = self.mentionGames;
              let deleteResult = mentionGames2.delete(first);
            }
            iter2 = tmp32();
            iter = iter2;
          } while (!iter2.done);
        }
        let optionsToNodes = self.optionsToNodes;
        optionsToNodes.clear();
        let optionValueNodes = self.optionValueNodes;
        optionValueNodes.clear();
        const chatInputNodes1 = self.chatInputNodes;
        const item = chatInputNodes1.forEach((type) => {
          if (type.type === ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION) {
            const data = type.data;
            type = undefined;
            if (null != data) {
              type = data.type;
            }
            if (type === ApplicationCommandManager(outer2_3[8]).ChatInputParseResultDataType.COMMAND_OPTION) {
              const optionsToNodes = self.optionsToNodes;
              const result = optionsToNodes.set(type.data.option.name, type);
            }
          }
          let tmp5 = type.type === ApplicationCommandManager(outer2_3[8]).ChatInputNodeType.COMMAND_OPTION_WITH_VALUE;
          if (tmp5) {
            const data2 = type.data;
            let type1;
            if (null != data2) {
              type1 = data2.type;
            }
            tmp5 = type1 === ApplicationCommandManager(outer2_3[8]).ChatInputParseResultDataType.COMMAND_OPTION;
          }
          if (tmp5) {
            const optionValueNodes = self.optionValueNodes;
            const result1 = optionValueNodes.set(type.data.option.name, type);
          }
        });
        if (tmp5) {
          const activeCommand2 = self.activeCommand;
          let preferredCommandType9;
          if (null != activeCommand2) {
            preferredCommandType9 = activeCommand2.preferredCommandType;
          }
          if (preferredCommandType9 === outer1_15.FULL_COMMAND) {
            const items3 = [];
            const activeCommand5 = self.activeCommand;
            options = undefined;
            result1 = outer1_16;
            if (null != activeCommand5) {
              options = activeCommand5.options;
            }
            if (null == options) {
              options = [];
            }
            const result1Result = result1(options);
            let iter3 = result1Result();
            if (!iter3.done) {
              do {
                value = iter3.value;
                name = value.name;
                let tmp47 = obj4[name];
                let optionValueNodes2 = self.optionValueNodes;
                value = optionValueNodes2.get(name);
                let tmp48 = null == tmp47 || "" === tmp47.displayText;
                if (!tmp48) {
                  let tmp49 = null != value;
                  if (tmp49) {
                    let str2 = editId.text;
                    tmp49 = str2.substring(value.location + value.displayName.length + 1, value.location + value.length) === tmp47.displayText;
                  }
                  tmp48 = tmp49;
                }
                if (!tmp48) {
                  delete tmp[tmp2];
                  let tmp50 = ApplicationCommandManager;
                  let tmp51 = outer1_3;
                  if (value.type === ApplicationCommandManager(outer1_3[15]).ApplicationCommandOptionType.ATTACHMENT) {
                    let arr = items3.push(name);
                  }
                }
                iter4 = result1Result();
                iter3 = iter4;
              } while (!iter4.done);
            }
            if (items3.length > 0) {
              obj4 = outer1_1(outer1_3[24]);
              obj4.removeFiles(channel.id, items3, outer1_7.SlashCommand);
            }
          }
        }
        self.preferredOptionValues[channel.id] = obj4;
        activeCommand = command;
        tmp9 = section;
        flag = tmp22;
      } else {
        if (!tmp5) {
          if (null != self.preferredCommand) {
            if (self.preferredCommand.preferredCommandType === outer1_15.FULL_COMMAND) {
              let currentCommand = {};
              ({ preferredCommand: obj.command, preferredCommandSection: obj.section } = self);
            }
          }
        }
        currentCommand = self.getCurrentCommand(editId.text, editId.channel, self.preferredCommand, self.preferredCommandSection);
      }
    }
  };
  items[4] = {
    key: "updateValidationResults",
    value: function updateValidationResults() {
      let self = this;
      self = this;
      let obj = {};
      const activeCommand = this.activeCommand;
      let preferredCommandType;
      if (null != activeCommand) {
        preferredCommandType = activeCommand.preferredCommandType;
      }
      if (preferredCommandType === outer1_15.FULL_COMMAND) {
        const activeCommand2 = self.activeCommand;
        let tmp2 = null == activeCommand2;
        let arr = activeCommand2;
        if (!tmp2) {
          const options = activeCommand2.options;
          tmp2 = null == options;
          arr = options;
        }
        if (!tmp2) {
          const item = arr.forEach((name) => {
            name = name.name;
            const obj = { lastValidationResult: self.optionValidationResults[name] };
            obj[name] = obj;
          });
        }
      }
      outer1_2(outer1_3[9]).updateOptionStates(self.props.channel.id, obj);
    }
  };
  return callback(ApplicationCommandManager, items);
})();
let result = require("_defineProperties").fileFinishedImporting("modules/application_commands/native/ApplicationCommandManager.tsx");

export default tmp4;
