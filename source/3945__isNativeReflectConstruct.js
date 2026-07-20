// Module ID: 3945
// Function ID: 32558
// Name: _isNativeReflectConstruct
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 4294967295, 0, 0, 0]

// Module 3945 (_isNativeReflectConstruct)
import closure_2 from "result";
import closure_3 from "result";
import closure_5 from "result";
import closure_6 from "result";
import closure_7 from "result";
import closure_8 from "result";
import closure_9 from "result";
import closure_10 from "result";
import result from "result";
import result from "result";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  let tmp = null != closure_13;
  if (tmp) {
    tmp = null == store2.getGuild(closure_13);
  }
  if (tmp) {
    tmp = null == store.getRequest(closure_13);
  }
  if (tmp) {
    closure_13 = null;
  }
  let tmp6 = null != closure_14;
  if (tmp6) {
    tmp6 = null == store2.getGuild(closure_14);
  }
  if (tmp6) {
    tmp6 = null == store.getRequest(closure_14);
  }
  if (tmp6) {
    closure_14 = null;
  }
  updateLastSelectedGuildMillis(closure_13);
}
function updateLastSelectedGuildMillis(closure_13) {
  if (null != closure_13) {
    const _Date = Date;
    closure_15[closure_13] = Date.now();
  }
}
function handleGuildRemove(guildId) {
  delete r0[r3];
  let flag = false;
  if (closure_14 === guildId) {
    closure_14 = null;
    flag = true;
  }
  if (closure_13 === guildId) {
    const tmp10 = function pickFallbackGuildId(guildId) {
      if (null != closure_14) {
        if (null != store.getGuild(closure_14)) {
          return closure_14;
        }
      }
      const keys = Object.keys(closure_15);
      let tmp3 = null;
      let num = 0;
      let num2 = 0;
      let tmp4 = null;
      if (0 < keys.length) {
        do {
          let tmp5 = keys[num2];
          let tmp6 = tmp3;
          let tmp7 = num;
          if (tmp5 !== guildId) {
            let tmp8 = closure_15;
            let tmp9 = closure_15[tmp5];
            let tmp10 = tmp9 > num;
            if (tmp10) {
              let tmp11 = closure_10;
              tmp10 = null != closure_10.getGuild(tmp5);
            }
            tmp6 = tmp3;
            tmp7 = num;
            let tmp12 = tmp9;
            if (tmp10) {
              tmp6 = tmp5;
              tmp7 = tmp9;
              let tmp13 = tmp9;
            }
          }
          num2 = num2 + 1;
          tmp3 = tmp6;
          num = tmp7;
          tmp4 = tmp6;
        } while (num2 < keys.length);
      }
      if (null != tmp4) {
        return tmp4;
      } else {
        const guildsArray = store.getGuildsArray();
        const found = guildsArray.find((id) => id.id !== id);
        let id;
        if (null != found) {
          id = found.id;
        }
        let tmp17 = null;
        if (null != id) {
          tmp17 = id;
        }
        return tmp17;
      }
    }(guildId);
    if (null != tmp10) {
      closure_13 = tmp10;
      arg1(dependencyMap[10]).replaceWith(closure_12.CHANNEL(tmp10));
      flag = true;
      const obj2 = arg1(dependencyMap[10]);
    } else {
      closure_13 = null;
      arg1(dependencyMap[10]).replaceWith(closure_12.ME);
      flag = true;
      const obj = arg1(dependencyMap[10]);
    }
  }
  return flag;
}
let closure_4 = importDefault(dependencyMap[2]);
({ ME: closure_11, Routes: closure_12 } = result);
let closure_13 = null;
let closure_14 = null;
let closure_15 = {};
let tmp3 = (PersistedStore) => {
  class SelectedGuildStore {
    constructor() {
      self = this;
      tmp = closure_2(this, SelectedGuildStore);
      obj = closure_5(SelectedGuildStore);
      tmp2 = closure_4;
      if (closure_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = SelectedGuildStore;
  callback2(SelectedGuildStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(selectedGuildTimestampMillis) {
      this.mustEmitChanges((type) => "CONNECTION_OPEN" !== type.type);
      this.waitFor(closure_8, lastNonVoiceRoute, closure_10, closure_7);
      let prop;
      if (null != selectedGuildTimestampMillis) {
        prop = selectedGuildTimestampMillis.selectedGuildTimestampMillis;
      }
      if (null == prop) {
        prop = {};
      }
      let selectedGuildId;
      if (null != selectedGuildTimestampMillis) {
        selectedGuildId = selectedGuildTimestampMillis.selectedGuildId;
      }
      let tmp4 = null;
      if (null != selectedGuildId) {
        tmp4 = selectedGuildId;
      }
      let tmp9 = tmp4;
      let lastSelectedGuildId;
      if (null != selectedGuildTimestampMillis) {
        lastSelectedGuildId = selectedGuildTimestampMillis.lastSelectedGuildId;
      }
      let tmp6 = null;
      if (null != lastSelectedGuildId) {
        tmp6 = lastSelectedGuildId;
      }
      const obj = {};
      const RouteParam = SelectedGuildStore(closure_1[12]).RouteParam;
      obj.path = closure_12.CHANNEL(RouteParam.guildId());
      const matchPathResult = SelectedGuildStore(closure_1[11]).matchPath(lastNonVoiceRoute.lastNonVoiceRoute, obj);
      let guildId;
      if (null != matchPathResult) {
        const params = matchPathResult.params;
        if (null != params) {
          guildId = params.guildId;
        }
      }
      tmp9 = null;
      if (guildId !== closure_11) {
        let tmp10 = null;
        if (null != guildId) {
          tmp10 = guildId;
        }
        tmp9 = tmp10;
      }
      let tmp11 = null != tmp9;
      if (tmp11) {
        tmp11 = tmp9 !== tmp9;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return { selectedGuildTimestampMillis: closure_15, selectedGuildId: closure_13, lastSelectedGuildId: closure_14 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildId",
    value() {
      return closure_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastSelectedGuildId",
    value() {
      return closure_14;
    }
  };
  items[4] = {
    key: "getLastSelectedTimestamp",
    value(arg0) {
      let num = -1;
      if (closure_13 !== arg0) {
        num = closure_15[arg0];
      }
      return num;
    }
  };
  return callback(SelectedGuildStore, items);
}(require("result").PersistedStore);
tmp3.displayName = "SelectedGuildStore";
tmp3.persistKey = "SelectedGuildStore";
tmp3 = new tmp3(require("result"), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedGuildId) {
    selectedGuildId = selectedGuildId.selectedGuildId;
    let closure_14;
    handleConnectionOpen();
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (closure_13 === guildId) {
      return false;
    } else {
      updateLastSelectedGuildMillis(closure_13);
      updateLastSelectedGuildMillis(guildId);
      if (null != guildId) {
        let closure_14 = guildId;
      }
      closure_13 = guildId;
    }
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    let tmp = user.user.id === id.getId();
    if (tmp) {
      tmp = handleGuildRemove(user.guildId);
    }
    return tmp;
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    let tmp2 = true !== guild.guild.unavailable;
    if (tmp2) {
      tmp2 = handleGuildRemove(tmp);
    }
    return tmp2;
  },
  LOGOUT: function handleLogout() {
    let closure_13 = null;
    let closure_14 = null;
  }
});
result = result.fileFinishedImporting("stores/SelectedGuildStore.tsx");

export default tmp3;
export const SELECTED_GUILD_TIMESTAMP_NOW = -1;
