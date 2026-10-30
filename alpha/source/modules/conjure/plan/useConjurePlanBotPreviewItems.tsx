// Module ID: 12698
// Function ID: 12699
// Name: useConjurePlanBotPreviewItems
// Dependencies: [19, 2040, 4862, 1398, 1384, 6838, 1072, 504, 8744, 6058, 10299, 6065, 12699, 1114, 3865, 5063, 2]
// Exports: useConjurePlanBotExchanges, useConjurePlanBotPreviewItems, useConjurePlanCommandExchanges

// Module 12698 (useConjurePlanBotPreviewItems)
import intl4 from "intl" /* 1114 */;
import _modDef3865 from "module_3865" /* 3865 */;
import ChannelRecord from "ChannelRecord" /* 4862 */;
import UserActionCreators from "UserActionCreators" /* 8744 */;
import conjurePlanBot from "conjurePlanBot" /* 12699 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2040 */;
import UserRecord from "UserRecord" /* 1398 */;
import UserStore from "UserStore" /* 1384 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;
import Constants from "Constants" /* 1072 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let c9;
let metroImportAll;
function useSampleUser(_31337, name, bot) {
  let id;
  _require = _31337;
  let username = name;
  let flag = bot.bot;
  if (flag === undefined) {
    flag = false;
  }
  let str = bot.discriminator;
  if (str === undefined) {
    str = "0000";
  }
  let flag2 = bot.enabled;
  if (flag2 === undefined) {
    flag2 = true;
  }
  let obj = require("get initialized");
  const items = [UserStore];
  const items1 = [_31337];
  const stateFromStores = obj.useStateFromStores(items, () => UserStore.getUser(id), items1);
  const items2 = [flag2, stateFromStores, _31337, name, str, flag];
  const effect = str.useEffect(function() {
    let tmp = flag2;
    if (tmp) {
      username = undefined;
      if (stateFromStores != null) {
        username = stateFromStores.username;
      }
      tmp = username !== username;
    }
    if (tmp) {
      const self = this;
      const self2 = this;
      const obj = { id, username, discriminator: str, bot: flag };
      const insertStaticUser = UserActionCreators.insertStaticUser;
      UserActionCreators;
      const tmp14 = new UserRecord(obj);
      insertStaticUser(tmp14);
    }
  }, items2);
  return stateFromStores;
}
function mentionBot(str, id) {
  str = str.trim();
  return str.replace(re12, "<@" + id.id + ">");
}
function mentionMember(str, username) {
  const parts = str.split("@" + username.username);
  return parts.join("<@" + username.id + ">");
}
const GuildTextChannelRecord = ChannelRecord.GuildTextChannelRecord;
({ MessageStates: metroImportAll, MessageTypes: c9 } = Constants);
let obj = { id: "1337", guild_id: "1337", type: Constants.ChannelTypes.GUILD_TEXT, name: "preview" };
const guildTextChannelRecord = new GuildTextChannelRecord(obj);
const re12 = /^@\S+/;
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanBotPreviewItems.tsx");

export const CONJURE_PLAN_BOT_PREVIEW_CHANNEL = guildTextChannelRecord;
export function useConjurePlanBotExchanges(proposal) {
  _require = proposal;
  let obj = require("conjurePlanBot");
  const conjurePlanBotInteraction = obj.getConjurePlanBotInteraction(proposal);
  let items = [proposal, conjurePlanBotInteraction];
  const obj2 = {
    botInteraction: conjurePlanBotInteraction,
    botExchanges: react.useMemo(() => {
      let intl;
      let intl2;
      let intl3;
      let items;
      if (null == conjurePlanBotInteraction) {
        items = [];
      } else {
        const obj = { message: intl.string(_modDef3865.J7qggf), reply: intl2.string(_modDef3865.nqYtiy), event: intl3.string(_modDef3865["05lU9W"]) };
        const getConjurePlanBotExchanges = conjurePlanBot.getConjurePlanBotExchanges;
        conjurePlanBot;
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        items = getConjurePlanBotExchanges(proposal, tmp, obj);
      }
      return items;
    }, items)
  };
  return obj2;
}
export function useConjurePlanCommandExchanges(proposal) {
  const items = [proposal];
  return react.useMemo(() => {
    let conjurePlanBotExchanges;
    let intl;
    let intl2;
    let intl3;
    const commands = proposal.commands;
    if (commands.some(conjurePlanBot.isAppCommand)) {
      const obj = { bot: undefined };
      const getConjurePlanBotExchanges = conjurePlanBot.getConjurePlanBotExchanges;
      conjurePlanBot;
      const merged = Object.assign(tmp);
      const obj2 = { message: intl.string(_modDef3865.J7qggf), reply: intl2.string(_modDef3865.nqYtiy), event: intl3.string(_modDef3865["05lU9W"]) };
      intl = tmp2(1114).intl;
      intl2 = tmp2(1114).intl;
      intl3 = tmp2(1114).intl;
      conjurePlanBotExchanges = getConjurePlanBotExchanges(obj, "commands", obj2);
    } else {
      conjurePlanBotExchanges = [];
    }
    return conjurePlanBotExchanges;
  }, items);
}
export function useConjurePlanBotPreviewItems(projectId, exchanges) {
  let currentUser;
  let items6;
  let obj6;
  let stateFromStores;
  _require = projectId;
  importDefault = exchanges;
  const tmp = _require;
  let tmp2 = stateFromStores;
  let obj = require("get initialized");
  let items = [currentUser];
  let tmp3 = currentUser;
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = require("get initialized");
  const items1 = [ConjureProjectStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ConjureProjectStore.getProject(projectId));
  let application_id;
  if (stateFromStores1 != null) {
    application_id = stateFromStores1.application_id;
  }
  const items2 = [obj6];
  const items3 = [application_id];
  const tmpResult = tmp(tmp2[7]);
  let stateFromStores2 = tmpResult.useStateFromStores(items2, () => {
    const application = ApplicationStore.getApplication(application_id);
    let iconURL;
    if (application != null) {
      iconURL = application.getIconURL(80);
    }
    if (iconURL == null) {
      iconURL = null;
    }
    return iconURL;
  }, items3);
  let name;
  if (stateFromStores1 != null) {
    name = stateFromStores1.name;
  }
  if (name == null) {
    let intl = tmp(tmp2[13]).intl;
    let tmp9 = importDefault;
    name = intl.string(require("module_3865").JEYq8M);
  }
  const items4 = [tmp3];
  const items5 = [application_id];
  const tmpResult3 = tmp(tmp2[7]);
  const stateFromStores3 = tmpResult3.useStateFromStores(items4, () => {
    let user;
    if (null != application_id) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items5);
  let bot;
  if (stateFromStores3 != null) {
    bot = stateFromStores3.bot;
  }
  let tmp12 = true === bot;
  let tmp13 = useSampleUser;
  let obj3 = { bot: true, enabled: !tmp12 };
  obj6 = useSampleUser("31337", name, obj3);
  if (tmp12) {
    obj6 = stateFromStores3;
  }
  let intl2 = tmp(tmp2[13]).intl;
  const tmp13Result = tmp13("31338", intl2.string(require("module_3865")["9iAOsw"]), { discriminator: "0003" });
  let closure_5 = tmp13Result;
  const tmpResult4 = tmp(tmp2[15]);
  let str = tmpResult4.getName(stateFromStores);
  if (str == null) {
    str = "";
  }
  let obj4 = { enabled: null != stateFromStores };
  const tmp13Result2 = tmp13("31339", str, obj4);
  currentUser = tmp13Result2;
  let obj5 = {
    items: application_id.useMemo(() => {
      let constants2;
      let id;
      let intl;
      let intl2;
      let tmp3;
      let tmp4;
      let tmp5;
      function buildPreviewItems(arg0, arg1, memberMessage) {
        let bot;
        let bot3;
        let member;
        let obj3;
        let user;
        let viewer;
        ({ bot, currentUser } = arg1);
        ({ viewer, member } = arg1);
        function add(bot, bot2, arg2) {
          let interactionName;
          let messageType;
          let obj5;
          let tmp2Result;
          let obj = arg2;
          if (arg2 === undefined) {
            obj = {};
          }
          ({ interactionName, messageType } = obj);
          const menu = obj.menu;
          const StringResult = String(items.length + 1);
          const createMessageRecord = projectId(stateFromStores[9]).createMessageRecord;
          const obj2 = { channelId: id.id, content: bot, author: bot2, type: messageType };
          projectId(stateFromStores[9]);
          const arr = items;
          const tmp5 = exchanges(stateFromStores[10]);
          if (messageType == null) {
            messageType = constants2.DEFAULT;
          }
          const obj3 = { id: StringResult, state: constants.SENT };
          const merged = Object.assign(tmp5(obj2));
          if (null != interactionName) {
            const obj4 = { interaction: obj5 };
            obj5 = { id: StringResult, name: interactionName, type: projectId(stateFromStores[11]).InteractionTypes.APPLICATION_COMMAND, user: tmp2Result.userRecordToServer(currentUser) };
            obj6 = obj4;
            tmp2Result = projectId(stateFromStores[10]);
          } else {
            obj6 = {};
          }
          const merged1 = Object.assign(obj6);
          const obj7 = { key: StringResult, record: createMessageRecord(obj3), isCommandReply: null != interactionName, menu };
          arr.push(obj7);
        }
        const items = [];
        const iter = arg0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp2 = nextResult;
          let kind = nextResult.kind;
          if ("command" === kind) {
            ({ user, bot: bot3 } = tmp2);
            let str2 = user.trim();
            let str3 = str2.replace(/^\//, "");
            let str4 = str3.split(/\s+/)[0];
            if (str4 == null) {
              str4 = "";
            }
            let obj2 = { interactionName: str4, messageType: constants2.CHAT_INPUT_COMMAND };
            let addResult = add(bot3, bot, obj2);
          } else {
            if ("user_command" !== kind) {
              if ("message_command" !== kind) {
                if ("message" === kind) {
                  let combined;
                  let addResult1 = add(closure_13(tmp2.user, bot), currentUser);
                  let bot2 = tmp2.bot;
                  let tmp6 = viewer;
                  let tmp7 = bot2;
                  if (bot2.includes("<@")) {
                    combined = bot2;
                  } else {
                    let _HermesInternal = HermesInternal;
                    combined = "<@" + tmp6.id + "> " + tmp7;
                  }
                  let addResult2 = add(combined, bot);
                } else if ("event" === kind) {
                  let addResult3 = add(closure_14(tmp2.bot, member), bot);
                }
              }
            }
            let tmp13 = "user_command" === tmp2.kind;
            let tmp14 = tmp13;
            let tmp17 = currentUser;
            let tmp15 = tmp13 ? memberMessage.memberMessage : memberMessage.targetMessage;
            if (tmp14) {
              tmp17 = member;
            }
            let str = "message";
            if (tmp14) {
              str = "user";
            }
            let obj = { menu: obj3 };
            obj3 = { target: str, commandName: tmp2.user };
            let addResult4 = add(tmp15, tmp17, obj);
            let obj4 = { interactionName: tmp2.user, messageType: constants2.CONTEXT_MENU_COMMAND };
            let addResult5 = add(tmp2.bot, bot, obj4);
          }
          continue;
        }
        return items;
      }
      if (null != stateFromStores) {
        if (null != currentUser) {
          if (null != obj6) {
            if (null != closure_5) {
              let tmp6 = exchanges;
              let obj = { bot: tmp4, currentUser: tmp, viewer: tmp3, member: tmp5 };
              let obj2 = { targetMessage: intl.string(_modDef3865["y+QYes"]), memberMessage: intl2.string(_modDef3865.BUTRDc) };
              let tmp7 = require;
              let tmp8 = dependencyMap;
              intl = intl4.intl;
              let tmp9 = importDefault;
              intl2 = intl4.intl;
              let tmp2 = buildPreviewItems(exchanges, obj, obj2);
            }
            return [];
          }
        }
      }
    }, items6),
    botIcon: stateFromStores2,
    appIconSrc: stateFromStores2
  };
  items6 = [exchanges, obj6, stateFromStores, tmp13Result2, tmp13Result];
  if (stateFromStores2 == null) {
    let avatarURL;
    if (obj6 != null) {
      avatarURL = obj6.getAvatarURL(undefined, 80);
    }
    stateFromStores2 = avatarURL;
  }
  return obj5;
}
