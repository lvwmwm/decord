// Module ID: 17004
// Function ID: 17005
// Name: useConjureProjectEventLine
// Dependencies: [19, 2086, 1389, 558, 576, 16937, 504, 4922, 16996, 1126, 3827, 2]

// Module 17004 (useConjureProjectEventLine)
import conjureMessageAuthors from "conjureMessageAuthors" /* 16937 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import UserStore from "UserStore" /* 1389 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectEventLine(arg0, actor_user_id, arg2) {
  let closure_1;
  let stateFromStores;
  let tmp10;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp4;
  let tmp5;
  let tmp7;
  let tmp9;
  function userHook(arg0, arg1) {
    return closure_1(stateFromStores.id, name, arg1);
  }
  _require = actor_user_id;
  importDefault = arg2;
  const tmp = _require;
  let tmp2 = actor_user_id;
  let obj = require("react");
  const cResult = obj.c(19);
  actor_user_id = actor_user_id.actor_user_id;
  if (cResult[0] !== actor_user_id) {
    const fn = function c() {
      const obj = conjureMessageAuthors;
      return obj.requestMessageAuthor(actor_user_id);
    };
    const items = [actor_user_id];
    cResult[0] = actor_user_id;
    cResult[1] = fn;
    cResult[2] = items;
    tmp5 = items;
    tmp4 = fn;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
  }
  const effect = stateFromStores.useEffect(tmp4, tmp5);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[3] = items1;
    tmp7 = items1;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] !== actor_user_id) {
    const fn2 = function v() {
      let user = null;
      if (null != actor_user_id) {
        user = UserStore.getUser(tmp);
      }
      return user;
    };
    const items2 = [actor_user_id];
    cResult[4] = actor_user_id;
    cResult[5] = fn2;
    cResult[6] = items2;
    tmp10 = items2;
    tmp9 = fn2;
  } else {
    tmp9 = cResult[5];
    tmp10 = cResult[6];
  }
  const tmpResult = tmp(tmp2[6]);
  stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
  const tmpResult3 = tmp(tmp2[7]);
  let name = tmpResult3.useName(stateFromStores);
  const tmp14 = require("useConjurePublishedAppName")(arg0);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items3 = [name];
    cResult[7] = items3;
    tmp15 = items3;
  } else {
    tmp15 = cResult[7];
  }
  if (cResult[8] !== actor_user_id.guild_id) {
    const fn3 = function y() {
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
    };
    const items4 = [actor_user_id.guild_id];
    cResult[8] = actor_user_id.guild_id;
    cResult[9] = fn3;
    cResult[10] = items4;
    tmp18 = items4;
    tmp17 = fn3;
  } else {
    tmp17 = cResult[9];
    tmp18 = cResult[10];
  }
  const tmpResult4 = tmp(tmp2[6]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp15, tmp17, tmp18);
  if (cResult[11] === stateFromStores) {
    if (cResult[12] === tmp14) {
      if (cResult[13] === actor_user_id.channel_name) {
        if (cResult[14] === actor_user_id.type) {
          if (cResult[15] === stateFromStores1) {
            if (cResult[16] === arg2) {
              let tmp20;
              if (cResult[17] === name) {
                tmp20 = cResult[18];
              }
              const _Symbol = Symbol;
              if (tmp20 !== Symbol.for("react.early_return_sentinel")) {
                return tmp20;
              }
            }
          }
        }
      }
    }
  }
  let forResult = Symbol.for("react.early_return_sentinel");
  let stringResult = stateFromStores1;
  if (stateFromStores1 == null) {
    const intl = tmp(tmp2[9]).intl;
    stringResult = intl.string(tmp13(tmp2[10]).R1tPlP);
  }
  let tmp23 = null;
  if (null != stateFromStores) {
    tmp23 = null;
    if (null != name) {
      tmp23 = { user: name, userHook };
      const obj2 = { user: name, userHook };
    }
  }
  const type = actor_user_id.type;
  if ("app_removed" === type) {
    let formatResult;
    if (null == tmp23) {
      const intl9 = tmp(tmp2[9]).intl;
      const obj3 = { app: tmp14, server: stringResult };
      formatResult = intl9.format(tmp13(tmp2[10]).Lwsrhg, obj3);
    } else {
      const intl8 = tmp(tmp2[9]).intl;
      const format4 = intl8.format;
      const obj4 = { app: tmp14, server: stringResult };
      const qqePfT = tmp13(tmp2[10]).qqePfT;
      const merged = Object.assign(tmp23);
      formatResult = format4(qqePfT, obj4);
    }
    forResult = formatResult;
  } else if ("bot_removed" === type) {
    let formatResult1;
    if (null == tmp23) {
      const intl7 = tmp(tmp2[9]).intl;
      const obj5 = { app: tmp14, server: stringResult };
      formatResult1 = intl7.format(tmp13(tmp2[10]).mT7EQG, obj5);
    } else {
      const intl6 = tmp(tmp2[9]).intl;
      const format3 = intl6.format;
      const obj6 = { app: tmp14, server: stringResult };
      const prop = tmp13(tmp2[10])["lA/crI"];
      const merged1 = Object.assign(tmp23);
      formatResult1 = format3(prop, obj6);
    }
    forResult = formatResult1;
  } else if ("preview_bot_removed" === type) {
    let formatResult2;
    if (null == tmp23) {
      const intl5 = tmp(tmp2[9]).intl;
      const obj7 = { app: tmp14, server: stringResult };
      formatResult2 = intl5.format(tmp13(tmp2[10])["4LVIeo"], obj7);
    } else {
      const intl4 = tmp(tmp2[9]).intl;
      const format2 = intl4.format;
      const obj8 = { app: tmp14, server: stringResult };
      const YJOV6D = tmp13(tmp2[10]).YJOV6D;
      const merged2 = Object.assign(tmp23);
      formatResult2 = format2(YJOV6D, obj8);
    }
    forResult = formatResult2;
  } else if ("app_channel_deleted" === type) {
    let formatResult3;
    let str = actor_user_id.channel_name;
    if (str == null) {
      str = "";
    }
    if (null == tmp23) {
      const intl3 = tmp(tmp2[9]).intl;
      const obj9 = { channel: str, server: stringResult };
      formatResult3 = intl3.format(tmp13(tmp2[10])["4VQfid"], obj9);
    } else {
      const intl2 = tmp(tmp2[9]).intl;
      const format = intl2.format;
      const obj10 = { channel: str, server: stringResult };
      const RlMIJN = tmp13(tmp2[10]).RlMIJN;
      const merged3 = Object.assign(tmp23);
      formatResult3 = format(RlMIJN, obj10);
    }
    forResult = formatResult3;
  }
  cResult[11] = stateFromStores;
  cResult[12] = tmp14;
  cResult[13] = actor_user_id.channel_name;
  cResult[14] = actor_user_id.type;
  cResult[15] = stateFromStores1;
  cResult[16] = arg2;
  cResult[17] = name;
  cResult[18] = forResult;
  tmp20 = forResult;
}) : (function useConjureProjectEventLine(arg0, actor_user_id, arg2) {
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
    return obj.requestMessageAuthor(actor_user_id);
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
    const intl = tmp2(tmp3[9]).intl;
    stateFromStores1 = intl.string(tmp6(tmp3[10]).R1tPlP);
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
      const intl9 = tmp2(tmp3[9]).intl;
      const obj5 = { app: tmp7, server: stateFromStores1 };
      formatResult = intl9.format(tmp6(tmp3[10]).Lwsrhg, obj5);
    } else {
      const intl8 = tmp2(tmp3[9]).intl;
      const format4 = intl8.format;
      const obj6 = { app: tmp7, server: stateFromStores1 };
      const qqePfT = tmp6(tmp3[10]).qqePfT;
      const merged = Object.assign(tmp9);
      formatResult = format4(qqePfT, obj6);
    }
    return formatResult;
  } else if ("bot_removed" === type) {
    let formatResult1;
    if (null == tmp9) {
      const intl7 = tmp2(tmp3[9]).intl;
      const obj7 = { app: tmp7, server: stateFromStores1 };
      formatResult1 = intl7.format(tmp6(tmp3[10]).mT7EQG, obj7);
    } else {
      const intl6 = tmp2(tmp3[9]).intl;
      const format3 = intl6.format;
      const obj8 = { app: tmp7, server: stateFromStores1 };
      const prop = tmp6(tmp3[10])["lA/crI"];
      const merged1 = Object.assign(tmp9);
      formatResult1 = format3(prop, obj8);
    }
    return formatResult1;
  } else if ("preview_bot_removed" === type) {
    let formatResult2;
    if (null == tmp9) {
      const intl5 = tmp2(tmp3[9]).intl;
      const obj9 = { app: tmp7, server: stateFromStores1 };
      formatResult2 = intl5.format(tmp6(tmp3[10])["4LVIeo"], obj9);
    } else {
      const intl4 = tmp2(tmp3[9]).intl;
      const format2 = intl4.format;
      const obj10 = { app: tmp7, server: stateFromStores1 };
      const YJOV6D = tmp6(tmp3[10]).YJOV6D;
      const merged2 = Object.assign(tmp9);
      formatResult2 = format2(YJOV6D, obj10);
    }
    return formatResult2;
  } else if ("app_channel_deleted" === type) {
    let formatResult3;
    let str = actor_user_id.channel_name;
    if (str == null) {
      str = "";
    }
    if (null == tmp9) {
      const intl3 = tmp2(tmp3[9]).intl;
      const obj11 = { channel: str, server: stateFromStores1 };
      formatResult3 = intl3.format(tmp6(tmp3[10])["4VQfid"], obj11);
    } else {
      const intl2 = tmp2(tmp3[9]).intl;
      const format = intl2.format;
      const obj12 = { channel: str, server: stateFromStores1 };
      const RlMIJN = tmp6(tmp3[10]).RlMIJN;
      const merged3 = Object.assign(tmp9);
      formatResult3 = format(RlMIJN, obj12);
    }
    return formatResult3;
  }
});
const result = size.fileFinishedImporting("modules/conjure/chat/useConjureProjectEventLine.tsx");

export default tmp2;
