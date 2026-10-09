// Module ID: 17078
// Function ID: 17079
// Name: useConjurePlanBotPreviewItems
// Dependencies: [19, 5437, 2068, 1404, 1390, 10617, 1085, 558, 576, 504, 8289, 5431, 9782, 5439, 17079, 1126, 3827, 4923, 2]

// Module 17078 (useConjurePlanBotPreviewItems)
import react2 from "react" /* 576 */;
import intl4 from "intl" /* 1126 */;
import ChannelRecord from "ChannelRecord" /* 2068 */;
import _modDef3827 from "module_3827" /* 3827 */;
import MessageRecordUtils from "MessageRecordUtils" /* 5431 */;
import InteractionTypes from "InteractionTypes" /* 5439 */;
import UserActionCreators from "UserActionCreators" /* 8289 */;
import createMessage from "createMessage" /* 9782 */;
import conjurePlanBot from "conjurePlanBot" /* 17079 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5437 */;
import UserRecord from "UserRecord" /* 1404 */;
import UserStore from "UserStore" /* 1390 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const createMessageDefault = createMessage;
let dependencyMap, importDefault;

let c9;
let metroImportAll;
function mentionBot(user, bot) {
  const str = user.trim();
  return str.replace(re15, "<@" + bot.id + ">");
}
function mentionMember(bot, member) {
  const parts = bot.split("@" + member.username);
  return parts.join("<@" + member.id + ">");
}
function buildPreviewItems(arg0, arg1, memberMessage) {
  let bot;
  let bot3;
  let currentUser;
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
    let obj6;
    let tmp2Result;
    let obj = arg2;
    if (arg2 === undefined) {
      obj = {};
    }
    ({ interactionName, messageType } = obj);
    const menu = obj.menu;
    const StringResult = String(items.length + 1);
    const createMessageRecord = MessageRecordUtils.createMessageRecord;
    const obj2 = { channelId: guildTextChannelRecord.id, content: bot, author: bot2, type: messageType };
    MessageRecordUtils;
    const arr = items;
    const tmp5 = createMessageDefault;
    if (messageType == null) {
      messageType = constants.DEFAULT;
    }
    const obj3 = { id: StringResult, state: metroImportAll.SENT };
    const merged = Object.assign(tmp5(obj2));
    if (null != interactionName) {
      const obj4 = { interaction: obj5 };
      obj5 = { id: StringResult, name: interactionName, type: InteractionTypes.InteractionTypes.APPLICATION_COMMAND, user: tmp2Result.userRecordToServer(currentUser) };
      obj6 = obj4;
      tmp2Result = createMessage;
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
            let addResult1 = add(mentionBot(tmp2.user, bot), currentUser);
            let bot2 = tmp2.bot;
            let tmp6 = bot2;
            let tmp7 = viewer;
            if (bot2.includes("<@")) {
              combined = bot2;
            } else {
              let _HermesInternal = HermesInternal;
              combined = "<@" + tmp7.id + "> " + tmp6;
            }
            let addResult2 = add(combined, bot);
          } else if ("event" === kind) {
            let addResult3 = add(mentionMember(tmp2.bot, member), bot);
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
const GuildTextChannelRecord = ChannelRecord.GuildTextChannelRecord;
({ MessageStates: metroImportAll, MessageTypes: c9 } = Constants);
let c10 = "31337";
let c11 = "31338";
let c12 = "31339";
let obj = { id: "1337", guild_id: "1337", type: Constants.ChannelTypes.GUILD_TEXT, name: "preview" };
const guildTextChannelRecord = new GuildTextChannelRecord(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function useSampleUser(id, username, arg2) {
  let bot;
  let discriminator;
  let enabled;
  let tmp10;
  let tmp4;
  let tmp7;
  let tmp9;
  const _require = id;
  importDefault = username;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(20);
  if (cResult[0] !== arg2) {
    let obj2 = arg2;
    if (undefined === arg2) {
      obj2 = {};
    }
    cResult[0] = arg2;
    cResult[1] = obj2;
    tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  ({ bot, discriminator, enabled } = tmp4);
  dependencyMap = tmp5;
  let str = "0000";
  if (undefined !== discriminator) {
    str = discriminator;
  }
  let closure_4 = tmp6;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== id) {
    const fn = function p() {
      return UserStore.getUser(id);
    };
    const items1 = [id];
    cResult[3] = id;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[6] === (undefined !== bot && bot)) {
    if (cResult[7] === str) {
      if (cResult[8] === (undefined === enabled || enabled)) {
        if (cResult[9] === id) {
          username = undefined;
          const tmp12 = cResult[10];
          if (stateFromStores != null) {
            username = stateFromStores.username;
          }
          if (tmp12 === username) {
            let tmp15;
            if (cResult[11] === username) {
              tmp15 = cResult[12];
            }
            if (cResult[13] === (undefined !== bot && bot)) {
              if (cResult[14] === str) {
                if (cResult[15] === (undefined === enabled || enabled)) {
                  if (cResult[16] === id) {
                    if (cResult[17] === stateFromStores) {
                      let tmp17;
                      if (cResult[18] === username) {
                        tmp17 = cResult[19];
                      }
                      const effect = str.useEffect(tmp15, tmp17);
                      return stateFromStores;
                    }
                  }
                }
              }
            }
            const items2 = [tmp6, stateFromStores, id, username, str, tmp5];
            cResult[13] = undefined !== bot && bot;
            cResult[14] = str;
            cResult[15] = undefined === enabled || enabled;
            cResult[16] = id;
            cResult[17] = stateFromStores;
            cResult[18] = username;
            cResult[19] = items2;
            tmp17 = items2;
          }
        }
      }
    }
  }
  cResult[6] = undefined !== bot && bot;
  cResult[7] = str;
  cResult[8] = undefined === enabled || enabled;
  cResult[9] = id;
  let username1;
  if (stateFromStores != null) {
    username1 = stateFromStores.username;
  }
  class E {
    constructor() {
      let tmp = closure_4;
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
        const obj = { id, username, discriminator: str, bot };
        const insertStaticUser = UserActionCreators.insertStaticUser;
        UserActionCreators;
        const tmp14 = new UserRecord(obj);
        insertStaticUser(tmp14);
      }
    }
  }
  cResult[10] = username1;
  cResult[11] = username;
  cResult[12] = E;
  tmp15 = E;
}) : (function useSampleUser(id, username) {
  const _require = id;
  let obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.bot;
  if (flag === undefined) {
    flag = false;
  }
  let str = obj.discriminator;
  if (str === undefined) {
    str = "0000";
  }
  let flag2 = obj.enabled;
  if (flag2 === undefined) {
    flag2 = true;
  }
  const items = [UserStore];
  const items1 = [id];
  const obj2 = require("get initialized");
  const stateFromStores = obj2.useStateFromStores(items, () => UserStore.getUser(id), items1);
  const items2 = [flag2, stateFromStores, id, username, str, flag];
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
});
const re15 = /^@\S+/;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanBotExchanges(bot) {
  let intl;
  let intl2;
  let intl3;
  let items;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(8);
  if (cResult[0] !== bot) {
    const tmpResult = conjurePlanBot;
    const conjurePlanBotInteraction = tmpResult.getConjurePlanBotInteraction(bot);
    cResult[0] = bot;
    cResult[1] = conjurePlanBotInteraction;
    tmp4 = conjurePlanBotInteraction;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === tmp4) {
    let tmp6;
    if (cResult[3] === bot) {
      tmp6 = cResult[4];
    }
    if (cResult[5] === tmp6) {
      let tmp7;
      if (cResult[6] === tmp4) {
        tmp7 = cResult[7];
      }
      return tmp7;
    }
    const obj2 = { botInteraction: tmp4, botExchanges: tmp6 };
    cResult[5] = tmp6;
    cResult[6] = tmp4;
    cResult[7] = obj2;
    tmp7 = obj2;
  }
  if (null == tmp4) {
    items = [];
  } else {
    const obj3 = { message: intl.string(_modDef3827.J7qggf), reply: intl2.string(_modDef3827.nqYtiy), event: intl3.string(_modDef3827["05lU9W"]) };
    const getConjurePlanBotExchanges = conjurePlanBot.getConjurePlanBotExchanges;
    conjurePlanBot;
    intl = tmp(1126).intl;
    intl2 = tmp(1126).intl;
    intl3 = tmp(1126).intl;
    items = getConjurePlanBotExchanges(bot, tmp4, obj3);
  }
  cResult[2] = tmp4;
  cResult[3] = bot;
  cResult[4] = items;
  tmp6 = items;
}) : (function useConjurePlanBotExchanges(bot) {
  const _require = bot;
  let obj = require("conjurePlanBot");
  const conjurePlanBotInteraction = obj.getConjurePlanBotInteraction(bot);
  let items = [bot, conjurePlanBotInteraction];
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
        const obj = { message: intl.string(_modDef3827.J7qggf), reply: intl2.string(_modDef3827.nqYtiy), event: intl3.string(_modDef3827["05lU9W"]) };
        const getConjurePlanBotExchanges = conjurePlanBot.getConjurePlanBotExchanges;
        conjurePlanBot;
        intl = intl4.intl;
        intl2 = intl4.intl;
        intl3 = intl4.intl;
        items = getConjurePlanBotExchanges(bot, tmp, obj);
      }
      return items;
    }, items)
  };
  return obj2;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePlanBotPreviewItems(arg0, arg1) {
  let closure_0;
  let currentUser;
  let stringResult;
  let tmp10;
  let tmp13;
  let tmp15;
  let tmp16;
  let tmp19;
  let tmp23;
  let tmp24;
  let tmp25;
  let tmp30;
  let tmp34;
  let tmp35;
  let tmp39;
  let tmp4;
  let tmp42;
  let tmp5;
  let tmp8;
  const _require = arg0;
  const tmp = _require;
  const obj = require("react");
  const cResult = obj.c(36);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureProjectStore];
    cResult[2] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== arg0) {
    const fn2 = function p() {
      return ConjureProjectStore.getProject(closure_0);
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
    tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp8, tmp10);
  let application_id;
  if (stateFromStores1 != null) {
    application_id = stateFromStores1.application_id;
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ApplicationStore];
    cResult[5] = items2;
    tmp13 = items2;
  } else {
    tmp13 = cResult[5];
  }
  if (cResult[6] !== application_id) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    const items3 = [application_id];
    cResult[6] = application_id;
    cResult[7] = I;
    cResult[8] = items3;
    tmp16 = items3;
    tmp15 = I;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    tmp16 = cResult[8];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp13, tmp15, tmp16);
  const tmp18 = cResult[9];
  if (stateFromStores1 != null) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  if (tmp18 !== undefined) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    if (stateFromStores1 != null) {
      class I {
        constructor() {
          const application = ApplicationStore.getApplication(application_id);
          let iconURL;
          if (application != null) {
            iconURL = application.getIconURL(80);
          }
          if (iconURL == null) {
            iconURL = null;
          }
          return iconURL;
        }
      }
    }
    if (stringResult == null) {
      class I {
        constructor() {
          const application = ApplicationStore.getApplication(application_id);
          let iconURL;
          if (application != null) {
            iconURL = application.getIconURL(80);
          }
          if (iconURL == null) {
            iconURL = null;
          }
          return iconURL;
        }
      }
      stringResult = obj5.string(application_id(3827).JEYq8M);
    }
    if (stateFromStores1 != null) {
      class I {
        constructor() {
          const application = ApplicationStore.getApplication(application_id);
          let iconURL;
          if (application != null) {
            iconURL = application.getIconURL(80);
          }
          if (iconURL == null) {
            iconURL = null;
          }
          return iconURL;
        }
      }
    }
    cResult[9] = undefined;
    cResult[10] = stringResult;
    tmp19 = stringResult;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    const items4 = [UserStore];
    cResult[11] = items4;
    tmp23 = items4;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  if (cResult[12] !== application_id) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    const items5 = [application_id];
    cResult[12] = application_id;
    cResult[13] = items5;
    cResult[14] = tmp26;
    tmp25 = tmp26;
    tmp24 = items5;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    tmp25 = cResult[14];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp23, tmp25, tmp24);
  if (stateFromStores3 != null) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  if (cResult[15] !== true !== undefined) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    tmp31[1] = true !== undefined;
    cResult[15] = true !== undefined;
    cResult[16] = tmp31;
    tmp30 = tmp31;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  const tmp33 = closure_14(c10, tmp19, tmp30);
  if (true === undefined) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    const stringResult1 = obj7.string(application_id(3827)["9iAOsw"]);
    const obj2 = { discriminator: "0003" };
    cResult[17] = stringResult1;
    cResult[18] = obj2;
    tmp35 = obj2;
    tmp34 = stringResult1;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    tmp35 = cResult[18];
  }
  closure_14(c11, tmp34, tmp35);
  if (cResult[19] !== stateFromStores) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    const name = obj9.getName(stateFromStores);
    if (name == null) {
      class I {
        constructor() {
          const application = ApplicationStore.getApplication(application_id);
          let iconURL;
          if (application != null) {
            iconURL = application.getIconURL(80);
          }
          if (iconURL == null) {
            iconURL = null;
          }
          return iconURL;
        }
      }
    }
    cResult[19] = stateFromStores;
    cResult[20] = name;
    tmp39 = name;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  if (cResult[21] !== (null != stateFromStores)) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
    tmp43[0] = null != stateFromStores;
    cResult[21] = null != stateFromStores;
    cResult[22] = tmp43;
    tmp42 = tmp43;
  } else {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  closure_14(c12, tmp39, tmp42);
  if (cResult[23] === tmp33) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
  if (null != stateFromStores) {
    class I {
      constructor() {
        const application = ApplicationStore.getApplication(application_id);
        let iconURL;
        if (application != null) {
          iconURL = application.getIconURL(80);
        }
        if (iconURL == null) {
          iconURL = null;
        }
        return iconURL;
      }
    }
  }
}) : (function useConjurePlanBotPreviewItems(arg0, arg1) {
  let closure_0;
  let closure_1;
  let currentUser;
  let items6;
  let obj6;
  let stateFromStores;
  const _require = arg0;
  importDefault = arg1;
  const tmp = _require;
  let obj = require("get initialized");
  const items = [currentUser];
  const tmp3 = currentUser;
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = require("get initialized");
  const items1 = [ConjureProjectStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => ConjureProjectStore.getProject(closure_0));
  let application_id;
  if (stateFromStores1 != null) {
    application_id = stateFromStores1.application_id;
  }
  const items2 = [obj6];
  const items3 = [application_id];
  const tmpResult = tmp(stateFromStores[9]);
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
    let intl = tmp(tmp2[15]).intl;
    name = intl.string(require("module_3827").JEYq8M);
  }
  const items4 = [tmp3];
  const items5 = [application_id];
  const tmpResult3 = tmp(stateFromStores[9]);
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
  const obj3 = { bot: true, enabled: true !== bot };
  obj6 = closure_14(c10, name, obj3);
  if (true === bot) {
    obj6 = stateFromStores3;
  }
  let intl2 = tmp(tmp2[15]).intl;
  const tmp13Result = closure_14(c11, intl2.string(require("module_3827")["9iAOsw"]), { discriminator: "0003" });
  let closure_5 = tmp13Result;
  const tmpResult4 = tmp(stateFromStores[17]);
  let str = tmpResult4.getName(stateFromStores);
  const tmp15 = c12;
  if (str == null) {
    str = "";
  }
  const obj4 = { enabled: null != stateFromStores };
  const tmp13Result2 = closure_14(tmp15, str, obj4);
  currentUser = tmp13Result2;
  const obj5 = {
    items: application_id.useMemo(() => {
      let intl;
      let intl2;
      if (null != stateFromStores) {
        if (null != currentUser) {
          if (null != obj6) {
            if (null != closure_5) {
              const obj = { bot: tmp4, currentUser: tmp, viewer: tmp3, member: tmp5 };
              const obj2 = { targetMessage: intl.string(_modDef3827["y+QYes"]), memberMessage: intl2.string(_modDef3827.BUTRDc) };
              intl = intl4.intl;
              intl2 = intl4.intl;
              buildPreviewItems(closure_1, obj, obj2);
            }
            return [];
          }
        }
      }
    }, items6),
    botIcon: stateFromStores2,
    appIconSrc: stateFromStores2
  };
  items6 = [arg1, obj6, stateFromStores, tmp13Result2, tmp13Result];
  if (stateFromStores2 == null) {
    let avatarURL;
    if (obj6 != null) {
      avatarURL = obj6.getAvatarURL(undefined, 80);
    }
    stateFromStores2 = avatarURL;
  }
  return obj5;
});
const result = size.fileFinishedImporting("modules/conjure/plan/useConjurePlanBotPreviewItems.tsx");

export const CONJURE_PLAN_BOT_PREVIEW_CHANNEL = guildTextChannelRecord;
export const useConjurePlanBotExchanges = tmp4;
export const useConjurePlanBotPreviewItems = tmp5;
