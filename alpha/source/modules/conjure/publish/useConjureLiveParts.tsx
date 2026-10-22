// Module ID: 12247
// Function ID: 12248
// Name: useConjureLiveParts
// Dependencies: [2045, 4899, 5180, 4843, 6758, 558, 576, 504, 7330, 2]

// Module 12247 (useConjureLiveParts)
import GuildChannelStore2 from "GuildChannelStore" /* 4899 */;
import ApplicationStore from "ApplicationStore" /* 2045 */;
import GuildMemberCountStore from "GuildMemberCountStore" /* 5180 */;
import GuildStore from "GuildStore" /* 4843 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6758 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let _require, channel, dependencyMap, tmp3, tmp4;

let closure_4 = GuildChannelStore2.GUILD_SELECTABLE_CHANNELS_KEY;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureLiveParts(arg0, arg1) {
  let closure_0;
  let closure_1;
  let first;
  let items9;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp17;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp6;
  let tmp7;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("react");
  const cResult = obj.c(30);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function _() {
      let project = ConjureProjectStore.getProject(closure_0);
      if (project == null) {
        project = null;
      }
      return project;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [application_id];
    cResult[4] = items2;
    tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== application_id) {
    const fn2 = function f() {
      let tmp2 = null;
      if (null != application_id) {
        let application = ApplicationStore.getApplication(tmp);
        if (application == null) {
          application = null;
        }
        tmp2 = application;
      }
      return tmp2;
    };
    const items3 = [application_id];
    cResult[5] = application_id;
    cResult[6] = fn2;
    cResult[7] = items3;
    tmp13 = items3;
    tmp12 = fn2;
  } else {
    tmp12 = cResult[6];
    tmp13 = cResult[7];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores1 = tmpResult5.useStateFromStores(tmp10, tmp12, tmp13);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    const items4 = [GuildStore];
    cResult[8] = items4;
    tmp15 = items4;
  } else {
    tmp15 = cResult[8];
  }
  if (cResult[9] !== arg1) {
    class A {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let guild = GuildStore.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
    const items5 = [arg1];
    cResult[9] = arg1;
    cResult[10] = A;
    cResult[11] = items5;
    tmp18 = items5;
    tmp17 = A;
  } else {
    class A {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let guild = GuildStore.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
    tmp18 = cResult[11];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores2 = tmpResult6.useStateFromStores(tmp15, tmp17, tmp18);
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let guild = GuildStore.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
    const items6 = [GuildMemberCountStore];
    cResult[12] = items6;
    tmp20 = items6;
  } else {
    class A {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let guild = GuildStore.getGuild(tmp);
          if (guild == null) {
            guild = null;
          }
          tmp2 = guild;
        }
        return tmp2;
      }
    }
  }
  if (cResult[13] !== arg1) {
    class I {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let memberCount = GuildMemberCountStore.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    const items7 = [arg1];
    cResult[13] = arg1;
    cResult[14] = I;
    cResult[15] = items7;
    tmp22 = items7;
    tmp21 = I;
  } else {
    class I {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let memberCount = GuildMemberCountStore.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    tmp22 = cResult[15];
  }
  const tmpResult7 = tmp(504);
  const stateFromStores3 = tmpResult7.useStateFromStores(tmp20, tmp21, tmp22);
  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let memberCount = GuildMemberCountStore.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    const items8 = [GuildChannelStore];
    cResult[16] = items8;
    tmp24 = items8;
  } else {
    class I {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let memberCount = GuildMemberCountStore.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
  }
  if (cResult[17] === application_id) {
    class I {
      constructor() {
        let tmp2 = null;
        if (null != closure_1) {
          let memberCount = GuildMemberCountStore.getMemberCount(tmp);
          if (memberCount == null) {
            memberCount = null;
          }
          tmp2 = memberCount;
        }
        return tmp2;
      }
    }
    const tmpResult8 = tmp(504);
    const stateFromStoresArray = tmpResult8.useStateFromStoresArray(tmp24, M, items9);
    let tmp26;
    if (stateFromStores1 != null) {
      class I {
        constructor() {
          let tmp2 = null;
          if (null != closure_1) {
            let memberCount = GuildMemberCountStore.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    if (tmp26 == null) {
      class I {
        constructor() {
          let tmp2 = null;
          if (null != closure_1) {
            let memberCount = GuildMemberCountStore.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
      if (stateFromStores != null) {
        class I {
          constructor() {
            let tmp2 = null;
            if (null != closure_1) {
              let memberCount = GuildMemberCountStore.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
      }
      tmp26 = tmp27;
    }
    if (tmp26 == null) {
      class I {
        constructor() {
          let tmp2 = null;
          if (null != closure_1) {
            let memberCount = GuildMemberCountStore.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    const tmp28 = cResult[21];
    if (stateFromStores1 != null) {
      class I {
        constructor() {
          let tmp2 = null;
          if (null != closure_1) {
            let memberCount = GuildMemberCountStore.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    if (tmp28 !== undefined) {
      class I {
        constructor() {
          let tmp2 = null;
          if (null != closure_1) {
            let memberCount = GuildMemberCountStore.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
      if (stateFromStores1 != null) {
        class I {
          constructor() {
            let tmp2 = null;
            if (null != closure_1) {
              let memberCount = GuildMemberCountStore.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
        if (tmp32 != null) {
          class I {
            constructor() {
              let tmp2 = null;
              if (null != closure_1) {
                let memberCount = GuildMemberCountStore.getMemberCount(tmp);
                if (memberCount == null) {
                  memberCount = null;
                }
                tmp2 = memberCount;
              }
              return tmp2;
            }
          }
        }
      }
      if (tmp31 == null) {
        class I {
          constructor() {
            let tmp2 = null;
            if (null != closure_1) {
              let memberCount = GuildMemberCountStore.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
      }
      if (stateFromStores1 != null) {
        class I {
          constructor() {
            let tmp2 = null;
            if (null != closure_1) {
              let memberCount = GuildMemberCountStore.getMemberCount(tmp);
              if (memberCount == null) {
                memberCount = null;
              }
              tmp2 = memberCount;
            }
            return tmp2;
          }
        }
      }
      cResult[21] = undefined;
      cResult[22] = tmp31;
    } else {
      class I {
        constructor() {
          let tmp2 = null;
          if (null != closure_1) {
            let memberCount = GuildMemberCountStore.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    if (cResult[23] === stateFromStoresArray) {
      class I {
        constructor() {
          let tmp2 = null;
          if (null != closure_1) {
            let memberCount = GuildMemberCountStore.getMemberCount(tmp);
            if (memberCount == null) {
              memberCount = null;
            }
            tmp2 = memberCount;
          }
          return tmp2;
        }
      }
    }
    const obj2 = { project: stateFromStores, liveName: tmp26, liveDescription: tmp30, channels: stateFromStoresArray, guild: stateFromStores2, memberCount: stateFromStores3 };
    cResult[23] = stateFromStoresArray;
    cResult[24] = stateFromStores2;
    cResult[25] = stateFromStores3;
    cResult[26] = stateFromStores;
    cResult[27] = tmp26;
    cResult[28] = tmp30;
    cResult[29] = obj2;
  }
  class M {
    constructor() {
      if (null != closure_1) {
        tmp2 = c2;
        if (null != c2) {
          tmp3 = closure_3;
          tmp4 = closure_4;
          arr = closure_3.getChannels(tmp)[closure_4];
          found = arr.filter((channel) => {
            channel = channel.channel;
            const obj = closure_0(closure_1[8]);
            return obj.conjureChannelAppId(channel) === application_id;
          });
          mapped = found.map((channel) => channel.channel);
        }
        return [];
      }
      return;
    }
  }
  items9 = [arg1, application_id];
  cResult[17] = application_id;
  cResult[18] = arg1;
  cResult[19] = M;
  cResult[20] = items9;
}) : (function useConjureLiveParts(arg0, arg1) {
  let closure_0;
  let closure_1;
  let stateFromStoresArray;
  let str;
  let str2;
  _require = arg0;
  dependencyMap = arg1;
  const tmp = _require;
  let tmp2 = dependencyMap;
  let obj = require("get initialized");
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let project = ConjureProjectStore.getProject(closure_0);
    if (project == null) {
      project = null;
    }
    return project;
  }, items1);
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  const items2 = [application_id];
  const items3 = [application_id];
  const tmpResult = tmp(504);
  const stateFromStores1 = tmpResult.useStateFromStores(items2, () => {
    let tmp2 = null;
    if (null != application_id) {
      let application = ApplicationStore.getApplication(tmp);
      if (application == null) {
        application = null;
      }
      tmp2 = application;
    }
    return tmp2;
  }, items3);
  const items4 = [GuildStore];
  const items5 = [arg1];
  const tmpResult4 = tmp(504);
  const stateFromStores2 = tmpResult4.useStateFromStores(items4, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let guild = GuildStore.getGuild(tmp);
      if (guild == null) {
        guild = null;
      }
      tmp2 = guild;
    }
    return tmp2;
  }, items5);
  const items6 = [GuildMemberCountStore];
  const items7 = [arg1];
  const tmpResult5 = tmp(504);
  const stateFromStores3 = tmpResult5.useStateFromStores(items6, () => {
    let tmp2 = null;
    if (null != closure_1) {
      let memberCount = GuildMemberCountStore.getMemberCount(tmp);
      if (memberCount == null) {
        memberCount = null;
      }
      tmp2 = memberCount;
    }
    return tmp2;
  }, items7);
  const items8 = [GuildChannelStore];
  const items9 = [arg1, application_id];
  const obj2 = { project: stateFromStores, liveName: str, liveDescription: str2, channels: stateFromStoresArray, guild: stateFromStores2, memberCount: stateFromStores3 };
  str = undefined;
  const tmpResult6 = tmp(504);
  stateFromStoresArray = tmpResult6.useStateFromStoresArray(items8, () => {
    if (null != closure_1) {
      if (null != application_id) {
        const arr = GuildChannelStore.getChannels(tmp)[closure_4];
        const found = arr.filter((channel) => {
          channel = channel.channel;
          const obj = closure_0(closure_1[8]);
          return obj.conjureChannelAppId(channel) === application_id;
        });
        const mapped = found.map((channel) => channel.channel);
      }
      return [];
    }
  }, items9);
  if (stateFromStores1 != null) {
    str = stateFromStores1.name;
  }
  if (str == null) {
    let name;
    if (stateFromStores != null) {
      name = stateFromStores.name;
    }
    str = name;
  }
  if (str == null) {
    str = "";
  }
  str2 = undefined;
  if (stateFromStores1 != null) {
    if (stateFromStores1.description != null) {
      str2 = str3.trim();
    }
  }
  if (str2 == null) {
    str2 = "";
  }
  return obj2;
});
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureLiveParts.tsx");

export default tmp2;
