// Module ID: 12614
// Function ID: 12615
// Name: useConjureProjectEventLine
// Dependencies: [19, 4880, 1384, 12598, 504, 5063, 12615, 1114, 3865, 2]
// Exports: default

// Module 12614 (useConjureProjectEventLine)
import conjureMessageAuthors from "conjureMessageAuthors" /* 12598 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 4880 */;
import UserStore from "UserStore" /* 1384 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

const result = size.fileFinishedImporting("modules/conjure/chat/useConjureProjectEventLine.tsx");

export default function useConjureProjectEventLine(arg0, actor_user_id, arg2) {
  let closure_1;
  let stateFromStores;
  function userHook(arg0, arg1) {
    return closure_1(stateFromStores.id, name, arg1);
  }
  _require = actor_user_id;
  importDefault = arg2;
  actor_user_id = actor_user_id.actor_user_id;
  const items = [actor_user_id];
  const effect = stateFromStores.useEffect(() => {
    const obj = conjureMessageAuthors;
    const messageAuthor = obj.requestMessageAuthor(actor_user_id);
  }, items);
  let tmp2 = _require;
  let obj = require("get initialized");
  const items1 = [UserStore];
  const items2 = [actor_user_id];
  stateFromStores = obj.useStateFromStores(items1, () => {
    let user = null;
    if (null != actor_user_id) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items2);
  const obj2 = require("UserUtils");
  let name = obj2.useName(stateFromStores);
  const tmp7 = require("useConjurePublishedAppName")(arg0);
  const items3 = [name];
  const items4 = [actor_user_id.guild_id];
  const obj3 = require("get initialized");
  let stateFromStores1 = obj3.useStateFromStores(items3, () => {
    let tmp2 = null;
    if (null != actor_user_id.guild_id) {
      const guild = GuildStore.getGuild(tmp.guild_id);
      name = undefined;
      if (guild != null) {
        name = guild.name;
      }
      tmp2 = name;
    }
    return tmp2;
  }, items4);
  if (stateFromStores1 == null) {
    const intl = tmp2(tmp3[7]).intl;
    stateFromStores1 = intl.string(tmp6(tmp3[8]).R1tPlP);
  }
  let tmp9 = null;
  if (null != stateFromStores) {
    tmp9 = null;
    if (null != name) {
      tmp9 = { user: name, userHook };
      const obj4 = { user: name, userHook };
    }
  }
  const type = actor_user_id.type;
  if ("app_removed" === type) {
    let formatResult;
    if (null == tmp9) {
      const intl11 = tmp2(tmp3[7]).intl;
      const obj5 = { app: tmp7, server: stateFromStores1 };
      formatResult = intl11.format(tmp6(tmp3[8]).Lwsrhg, obj5);
    } else {
      const intl10 = tmp2(tmp3[7]).intl;
      const format4 = intl10.format;
      const obj6 = { app: tmp7, server: stateFromStores1 };
      const qqePfT = tmp6(tmp3[8]).qqePfT;
      const merged = Object.assign(tmp9);
      formatResult = format4(qqePfT, obj6);
    }
    return formatResult;
  } else if ("bot_removed" === type) {
    let formatResult1;
    if (null == tmp9) {
      const intl9 = tmp2(tmp3[7]).intl;
      const obj7 = { app: tmp7, server: stateFromStores1 };
      formatResult1 = intl9.format(tmp6(tmp3[8]).mT7EQG, obj7);
    } else {
      const intl8 = tmp2(tmp3[7]).intl;
      const format3 = intl8.format;
      const obj8 = { app: tmp7, server: stateFromStores1 };
      const prop = tmp6(tmp3[8])["lA/crI"];
      const merged1 = Object.assign(tmp9);
      formatResult1 = format3(prop, obj8);
    }
    return formatResult1;
  } else if ("preview_bot_removed" === type) {
    let formatResult2;
    if (null == tmp9) {
      const intl7 = tmp2(tmp3[7]).intl;
      const obj9 = { app: tmp7, server: stateFromStores1 };
      formatResult2 = intl7.format(tmp6(tmp3[8])["4LVIeo"], obj9);
    } else {
      const intl6 = tmp2(tmp3[7]).intl;
      const format2 = intl6.format;
      const obj10 = { app: tmp7, server: stateFromStores1 };
      const YJOV6D = tmp6(tmp3[8]).YJOV6D;
      const merged2 = Object.assign(tmp9);
      formatResult2 = format2(YJOV6D, obj10);
    }
    return formatResult2;
  } else if ("app_channel_deleted" === type) {
    let formatResult3;
    let str2 = actor_user_id.channel_name;
    if (str2 == null) {
      str2 = "";
    }
    if (null == tmp9) {
      const intl5 = tmp2(tmp3[7]).intl;
      const obj11 = { channel: str2, server: stateFromStores1 };
      formatResult3 = intl5.format(tmp6(tmp3[8])["4VQfid"], obj11);
    } else {
      const intl4 = tmp2(tmp3[7]).intl;
      const format = intl4.format;
      const obj12 = { channel: str2, server: stateFromStores1 };
      const RlMIJN = tmp6(tmp3[8]).RlMIJN;
      const merged3 = Object.assign(tmp9);
      formatResult3 = format(RlMIJN, obj12);
    }
    return formatResult3;
  } else if ("remixed" === type) {
    const intl3 = tmp2(tmp3[7]).intl;
    const obj13 = { source: actor_user_id.source_name };
    return intl3.format(require("module_3865").mHCXtm, obj13);
  } else if ("voice_channel_pin" === type) {
    const intl2 = tmp2(tmp3[7]).intl;
    return intl2.string(require("module_3865").UGAfl9);
  }
};
