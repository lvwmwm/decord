// Module ID: 11109
// Function ID: 86453
// Name: executeCommand
// Dependencies: []
// Exports: handleLegacyCommands

// Module 11109 (executeCommand)
function executeCommand(command, action) {
  let obj = importDefault(dependencyMap[10]);
  obj = { command };
  obj.trackWithMetadata(constants.SLASH_COMMAND_USED, obj);
  return action.action(arg2, arg3);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
({ AnalyticEvents: closure_6, MARKDOWN_SPOILER_WRAPPER: closure_7, ME: closure_8 } = arg1(dependencyMap[3]));
let closure_9 = /\\([*?+/])/g;
let obj = { tts: obj, me: obj, tableflip: obj1, unflip: obj2, shrug: obj3, nick: obj4 };
obj = {
  action() {
    const obj = {};
    const EnableTTSCommand = arg1(dependencyMap[4]).EnableTTSCommand;
    obj.tts = EnableTTSCommand.getSetting();
    return obj;
  }
};
obj = {
  action(arg0) {
    return { content: "_" + arg0 + "_" };
  }
};
const obj5 = {};
const obj1 = {
  action(arg0) {
    const obj = { content: "" + arg0 + " (\u256F\u00B0\u25A1\u00B0)\u256F\uFE35 \u253B\u2501\u253B".trim() };
    return obj;
  }
};
const obj2 = {
  action(arg0) {
    const obj = { content: "" + arg0 + " \u252C\u2500\u252C\u30CE( \u00BA _ \u00BA\u30CE)".trim() };
    return obj;
  }
};
const obj3 = {
  action(arg0) {
    const obj = { content: "" + arg0 + " \u00AF\\_(\u30C4)_/\u00AF".trim() };
    return obj;
  }
};
const obj4 = {
  action(arg0, channel) {
    channel = channel.channel;
    if (null != channel.guild_id) {
      let obj = importDefault(dependencyMap[5]);
      obj.changeNickname(channel.guild_id, channel.id, closure_8, arg0);
      obj = { content: "" };
      return obj;
    }
  }
};
const tmp2 = arg1(dependencyMap[3]);
obj5.match = importDefault(dependencyMap[6]).anyScopeRegex(/^\+:(.+?): *$/);
obj5.action = function action(str, channel) {
  channel = channel.channel;
  if (!channel.isEdit) {
    if (store.hasPresent(channel.id)) {
      const messages = store.getMessages(channel.id);
      const lastResult = messages.last();
      if (null != lastResult) {
        if (null != lastResult.id) {
          const disambiguatedEmojiContext = disambiguatedEmojiContext.getDisambiguatedEmojiContext(channel.guild_id);
          const trimmed = str.trim();
          const byName = disambiguatedEmojiContext.getByName(trimmed.slice(2, -1));
          if (null != byName) {
            const obj2 = channel(dependencyMap[7]);
            obj2.addReaction(channel.id, lastResult.id, channel(dependencyMap[8]).toReactionEmoji(byName));
            const obj = { content: "" };
            return obj;
          }
        }
      }
    }
  }
};
obj.reaction = obj5;
const obj6 = {};
const importDefaultResult = importDefault(dependencyMap[6]);
obj6.match = importDefault(dependencyMap[6]).anyScopeRegex(/^s\/([^\/\\]*(?:\\.[^\/\\]*)*)\/([^\/\\]*(?:\\.[^\/\\]*)*)(?:\/([g]*))?$/);
obj6.action = function action(str, channel) {
  channel = channel.channel;
  if (!channel.isEdit) {
    const lastEditableMessage = store.getLastEditableMessage(channel.id);
    if (null != lastEditableMessage) {
      if (null != lastEditableMessage.id) {
        const self = this;
        let match = str.match(this.match.regex);
        if (null == match) {
          match = [];
        }
        const tmp5 = callback(Array.from(match), 4);
        const first = tmp5[0];
        let parts;
        if (null != tmp5[3]) {
          parts = str3.split("");
        }
        if (null == parts) {
          parts = [];
        }
        const replaced = tmp5[1].replace(closure_9, (arg0, arg1) => arg1);
        const replaced1 = tmp5[2].replace(closure_9, (arg0, arg1) => arg1);
        if (parts.includes("g")) {
          let str7 = str6.replaceAll(replaced, replaced1);
        } else {
          str7 = str6.replace(replaced, replaced1);
        }
        if (null == str7) {
          if (0 === lastEditableMessage.attachments.length) {
            let obj = importDefault(dependencyMap[9]);
            obj.deleteMessage(channel.id, lastEditableMessage.id);
          }
          obj = { content: "" };
          return obj;
        }
        if (str7 !== lastEditableMessage.content) {
          let obj1 = importDefault(dependencyMap[9]);
          obj = { content: str7 };
          obj1.editMessage(channel.id, lastEditableMessage.id, obj);
        }
        str = tmp5[1];
        const str2 = tmp5[2];
      }
    }
    obj1 = { content: "" };
    return obj1;
  }
};
obj.searchReplace = obj6;
obj.spoiler = {
  action(arg0) {
    const obj = { content: callback2(arg0).trim() };
    return obj;
  }
};
Object.setPrototypeOf(obj, null);
const importDefaultResult1 = importDefault(dependencyMap[6]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/messages/LegacyCommands.tsx");

export const COMMANDS = obj;
export const handleLegacyCommands = function handleLegacyCommands(text, arg1) {
  for (const key10006 in closure_10) {
    let tmp9 = closure_10;
    let str = closure_10[key10006];
    if (null == str.match) {
      continue;
    } else {
      let regex = str.match.regex;
      let tmp = regex;
      if (null == regex) {
        continue;
      } else {
        let tmp2 = regex;
        if (!regex.test(arg0)) {
          continue;
        } else {
          let tmp3 = closure_11;
          let tmp4 = arg1;
          let tmp5 = key10006;
          let tmp6 = str;
          let tmp7 = arg0;
          return closure_11(tmp8, str, arg0, arg1);
        }
      }
      continue;
    }
    continue;
  }
};
