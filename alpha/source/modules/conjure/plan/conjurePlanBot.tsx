// Module ID: 17079
// Function ID: 17080
// Name: conjurePlanBot
// Dependencies: [1998, 2]
// Exports: getConjurePlanBotExchanges, getConjurePlanBotInteraction

// Module 17079 (conjurePlanBot)
import Server from "Server" /* 1998 */;
import size from "module_2" /* 2 */;

function isAppCommand(kind) {
  let hasItem = "launch" !== kind.kind;
  if (hasItem) {
    let CHAT = kind.type;
    const has = set.has;
    if (CHAT == null) {
      CHAT = Server.ApplicationCommandType.CHAT;
    }
    hasItem = has(CHAT);
  }
  return hasItem;
}
function isContextMenuExchange(kind) {
  return "user_command" === kind.kind || "message_command" === kind.kind;
}
function pickSamples(items3, arg1) {
  let items1 = items3;
  let closure_0 = items3;
  let tmp = arg1;
  const flatMapResult = closure_2.flatMap((item) => {
    closure_0 = item;
    let found = closure_0.find((kind) => kind.kind === closure_0);
    if (found == null) {
      found = [];
    }
    return found;
  });
  const items = [...flatMapResult.filter((kind) => !("user_command" === kind.kind || "message_command" === kind.kind)), ...flatMapResult.filter(isContextMenuExchange)];
  const substr = items.slice(0, 3);
  if (!arg1) {
    tmp = 1 === flatMapResult.length;
  }
  if (!tmp) {
    items1 = [];
  }
  for (const item10029 of items1) {
    let tmp2 = item10029;
    if (substr.length >= 3) {
      obj.return();
      break;
    } else {
      let hasItem = substr.includes(tmp2);
      if (!hasItem) {
        hasItem = isContextMenuExchange(tmp2);
      }
      if (!hasItem) {
        let arr = substr.push(tmp2);
      }
      continue;
    }
    return closure_2.flatMap((item) => {
      closure_0 = item;
      return closure_0.filter((kind) => {
        const hasItem = kind.kind === item && substr.includes(kind);
        return hasItem;
      });
    });
  }
}
let closure_2 = ["command", "user_command", "message_command", "message"];
let items = [Server.ApplicationCommandType.CHAT, Server.ApplicationCommandType.USER, Server.ApplicationCommandType.MESSAGE];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/conjure/plan/conjurePlanBot.tsx");

export const getConjurePlanBotInteraction = function getConjurePlanBotInteraction(bot) {
  if (null != bot.bot) {
    return bot.bot.interaction;
  } else {
    let str2;
    const commands = bot.commands;
    const someResult = commands.some(isAppCommand);
    const privileged_intents = bot.privileged_intents;
    let hasItem;
    if (privileged_intents != null) {
      hasItem = privileged_intents.includes("MESSAGE_CONTENT");
    }
    if (!someResult) {
      let str3 = "commands";
      if (!someResult) {
        let str4 = "messages";
        if (true !== hasItem) {
          if (true !== bot.is_activity) {
            let tmp3;
            if (null == bot.automod) {
              tmp3 = "events";
            }
            str4 = tmp3;
          }
          tmp3 = null;
        }
        str3 = str4;
      }
      str2 = str3;
    } else {
      str2 = "both";
    }
    return str2;
  }
};
export const getConjurePlanBotExchanges = function getConjurePlanBotExchanges(bot, cResult, bot2) {
  let closure_0 = cResult;
  let closure_1 = bot2;
  bot = bot.bot;
  let example_exchanges;
  if (bot != null) {
    example_exchanges = bot.example_exchanges;
  }
  if (example_exchanges == null) {
    example_exchanges = [];
  }
  let obj = { kind: "event", user: "", bot: bot2.event };
  if ("events" === cResult) {
    const substr = example_exchanges.slice(0, 3);
    let mapped = substr.map((bot) => {
      let tmp;
      if ("" !== bot.bot.trim()) {
        obj = { bot: bot.bot };
        const merged = Object.assign(obj);
        tmp = obj;
      } else {
        tmp = obj;
      }
      return tmp;
    });
    if (mapped.length <= 0) {
      let items = [obj];
      mapped = items;
    }
    return mapped;
  } else {
    let items2;
    let tmp4Result;
    const flatMapResult = example_exchanges.flatMap((item) => {
      let bot;
      let items;
      let user;
      ({ user, bot } = item);
      if ("" === user.trim()) {
        items = [];
      } else {
        let str3 = "message";
        if ("messages" !== require) {
          str3 = "message";
          const trimStartResult = user.trimStart();
          if (trimStartResult.startsWith("/")) {
            str3 = "command";
          }
        }
        items = [{ kind: str3, user, bot }];
        obj = { kind: str3, user, bot };
      }
      return items;
    });
    let obj3 = { kind: "message", user: null, bot: null };
    ({ message: obj2.user, reply: obj2.bot } = bot2);
    let str2 = "messages";
    if ("messages" === cResult) {
      if (0 === flatMapResult.length) {
        const items1 = [obj3];
        return items1;
      }
    }
    const commands = bot.commands;
    const found = commands.filter(isAppCommand);
    const mapped1 = found.map((description) => {
      let str2;
      const tmp = bot2;
      if (description.description != null) {
        str2 = str.trim();
      }
      if (str2 == null) {
        str2 = "";
      }
      if ("" === str2) {
        str2 = tmp.reply;
      }
      let CHAT = description.type;
      if (CHAT == null) {
        CHAT = Server.ApplicationCommandType.CHAT;
      }
      if (Server.ApplicationCommandType.USER === CHAT) {
        obj = { kind: "user_command", user: description.name, bot: str2 };
        const obj2 = { kind: "user_command", user: description.name, bot: str2 };
      } else if (Server.ApplicationCommandType.MESSAGE === CHAT) {
        obj = { kind: "message_command", user: description.name, bot: str2 };
        const obj3 = { kind: "message_command", user: description.name, bot: str2 };
      } else {
        obj = { kind: "command", user: "/" + description.name, bot: str2 };
        const _HermesInternal = HermesInternal;
      }
      return obj;
    });
    if ("messages" === cResult) {
      items2 = [];
    } else {
      items2 = mapped1.filter(isContextMenuExchange);
    }
    if (flatMapResult.length > 0) {
      const items3 = [];
      HermesBuiltin.arraySpread(items3, items2, HermesBuiltin.arraySpread(items3, flatMapResult, 0));
      tmp4Result = pickSamples(items3, true);
    } else {
      const str = "both";
      let tmp5 = mapped1;
      let tmp4 = pickSamples;
      if ("both" === cResult) {
        const items4 = [];
        items4[HermesBuiltin.arraySpread(items4, mapped1, 0)] = obj3;
        tmp5 = items4;
      }
      tmp4Result = tmp4(tmp5, false);
    }
    if (tmp4Result.length <= 0) {
      const items5 = [obj];
      tmp4Result = items5;
    }
    return tmp4Result;
  }
};
