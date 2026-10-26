// Module ID: 12453
// Function ID: 12454
// Name: conjurePlanBot
// Dependencies: [2000, 12454, 6774, 2]
// Exports: getConjurePlanBotExchanges, getConjurePlanBotInteraction, getConjurePlanExperienceBotExchanges, getConjurePlanSectionBotExchanges, mergeConjurePlanBotExchanges

// Module 12453 (conjurePlanBot)
import Server from "Server" /* 2000 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6774 */;
import conjurePlanTags from "conjurePlanTags" /* 12454 */;
import size from "module_2" /* 2 */;

const f114598 = (bot) => {
  const str = bot.bot;
  return "" !== str.trim();
};
const f114599 = (item) => {
  let bot;
  let obj2;
  let user;
  ({ user, bot } = item);
  const trimmed = user.trim();
  if ("" === trimmed) {
    obj2 = { kind: "event", user: "", bot };
    const obj = { kind: "event", user: "", bot };
  } else {
    let str2 = "message";
    if (trimmed.startsWith("/")) {
      str2 = "command";
    }
    obj2 = { kind: str2, user: trimmed, bot };
  }
  return obj2;
};
const f114600 = (kind) => {
  let tmp = "command" === kind.kind;
  if (!tmp) {
    tmp = "user_command" === kind.kind || "message_command" === kind.kind;
    const tmp2 = "user_command" === kind.kind || "message_command" === kind.kind;
  }
  return tmp;
};
function isAppCommand(type) {
  let CHAT = type.type;
  const has = set.has;
  if (CHAT == null) {
    CHAT = Server.ApplicationCommandType.CHAT;
  }
  return has(CHAT);
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

export { isAppCommand };
export const getConjurePlanBotInteraction = function getConjurePlanBotInteraction(bot) {
  let tmp2;
  const obj = conjurePlanTags;
  const planDeclaresSurfaceResult = obj.planDeclaresSurface(bot, ConjureProjectTypes.ConjureSupportedSurface.APPLICATION_COMMANDS);
  const obj2 = conjurePlanTags;
  if (obj2.planDeclaresSurface(bot, ConjureProjectTypes.ConjureSupportedSurface.BOT)) {
    let str;
    if (null != bot.bot) {
      str = bot.bot.interaction;
    } else {
      str = null;
      if (planDeclaresSurfaceResult) {
        const commands = bot.commands;
        str = null;
        if (commands.some(isAppCommand)) {
          str = "commands";
        }
      }
    }
    tmp2 = str;
  } else {
    tmp2 = null;
  }
  return tmp2;
};
export const getConjurePlanExperienceBotExchanges = function getConjurePlanExperienceBotExchanges(arr) {
  const found = arr.filter(f114598);
  const substr = found.slice(0, 3);
  return substr.map(f114599);
};
export const mergeConjurePlanBotExchanges = function mergeConjurePlanBotExchanges(arr, arg1) {
  if (0 !== arg1.length) {
    let items;
    if (!arr.some(f114600)) {
      items = [];
      items[HermesBuiltin.arraySpread(items, arr.slice(0, 2), 0)] = arg1[0];
    }
    return items;
  }
  items = arr.slice(0, 3);
};
export const getConjurePlanSectionBotExchanges = function getConjurePlanSectionBotExchanges(kind, botExchanges, conjurePlanCommandExchanges) {
  if ("commands" === kind.kind) {
    return conjurePlanCommandExchanges;
  } else {
    let example_exchanges = kind.example_exchanges;
    if (example_exchanges == null) {
      example_exchanges = [];
    }
    let arr2 = botExchanges;
    const found = example_exchanges.filter(f114598);
    const substr = found.slice(0, 3);
    const mapped = substr.map(f114599);
    if (mapped.length > 0) {
      arr2 = mapped;
    }
    if (0 !== conjurePlanCommandExchanges.length) {
      let items;
      if (!arr2.some(f114600)) {
        items = [];
        let tmp2 = items;
        items[HermesBuiltin.arraySpread(items, arr2.slice(0, 2), 0)] = conjurePlanCommandExchanges[0];
      }
      return items;
    }
    items = arr2.slice(0, 3);
  }
};
export const getConjurePlanBotExchanges = function getConjurePlanBotExchanges(bot, commands, bot2) {
  let closure_0 = commands;
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
  if ("events" === commands) {
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
        if ("messages" !== commands) {
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
    if ("messages" === commands) {
      if (0 === flatMapResult.length) {
        const items1 = [obj3];
        return items1;
      }
    }
    commands = bot.commands;
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
    if ("messages" === commands) {
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
      if ("both" === commands) {
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
