// Module ID: 3947
// Function ID: 32571
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3948, 1194, 3951, 1838, 653, 1198, 3952, 3965, 566, 686, 2]

// Module 3947 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_3 from "_isNativeReflectConstruct";
import set from "set";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import ME from "ME";

let closure_11;
let closure_12;
const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleConnectionOpen() {
  let tmp = null != c13;
  if (tmp) {
    tmp = null == store2.getGuild(c13);
  }
  if (tmp) {
    tmp = null == store.getRequest(c13);
  }
  if (tmp) {
    c13 = null;
  }
  let tmp6 = null != c14;
  if (tmp6) {
    tmp6 = null == store2.getGuild(c14);
  }
  if (tmp6) {
    tmp6 = null == store.getRequest(c14);
  }
  if (tmp6) {
    c14 = null;
  }
  updateLastSelectedGuildMillis(c13);
}
function updateLastSelectedGuildMillis(guildId) {
  if (null != guildId) {
    const _Date = Date;
    closure_15[guildId] = Date.now();
  }
}
function handleGuildRemove(guildId) {
  delete tmp[tmp2];
  let flag = false;
  if (c14 === guildId) {
    c14 = null;
    flag = true;
  }
  if (c13 === guildId) {
    let tmp12 = (function pickFallbackGuildId(guildId) {
      let closure_0 = guildId;
      if (null != c14) {
        if (null != outer1_10.getGuild(c14)) {
          return c14;
        }
      }
      const keys = Object.keys(outer1_15);
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
            let tmp8 = outer1_15;
            let tmp9 = outer1_15[tmp5];
            let tmp10 = tmp9 > num;
            if (tmp10) {
              let tmp11 = outer1_10;
              tmp10 = null != outer1_10.getGuild(tmp5);
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
        const guildsArray = outer1_10.getGuildsArray();
        const found = guildsArray.find((id) => id.id !== closure_0);
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
    })(guildId);
    if (null != tmp12) {
      c13 = tmp12;
      require(1198) /* shouldNavigate */.replaceWith(closure_12.CHANNEL(tmp12));
      flag = true;
      const obj2 = require(1198) /* shouldNavigate */;
    } else {
      c13 = null;
      require(1198) /* shouldNavigate */.replaceWith(closure_12.ME);
      flag = true;
      const obj = require(1198) /* shouldNavigate */;
    }
  }
  return flag;
}
({ ME: closure_11, Routes: closure_12 } = ME);
let c13 = null;
let c14 = null;
let closure_15 = {};
let tmp3 = ((PersistedStore) => {
  class SelectedGuildStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, SelectedGuildStore);
      obj = outer1_5(SelectedGuildStore);
      tmp2 = outer1_4;
      if (outer1_16()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_5;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_5(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SelectedGuildStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(selectedGuildTimestampMillis) {
      this.mustEmitChanges((type) => "CONNECTION_OPEN" !== type.type);
      this.waitFor(outer1_8, outer1_9, outer1_10, outer1_7);
      let prop;
      if (null != selectedGuildTimestampMillis) {
        prop = selectedGuildTimestampMillis.selectedGuildTimestampMillis;
      }
      if (null == prop) {
        prop = {};
      }
      const outer1_15 = prop;
      let selectedGuildId;
      if (null != selectedGuildTimestampMillis) {
        selectedGuildId = selectedGuildTimestampMillis.selectedGuildId;
      }
      let tmp4 = null;
      if (null != selectedGuildId) {
        tmp4 = selectedGuildId;
      }
      let outer1_13 = tmp4;
      let lastSelectedGuildId;
      if (null != selectedGuildTimestampMillis) {
        lastSelectedGuildId = selectedGuildTimestampMillis.lastSelectedGuildId;
      }
      let tmp6 = null;
      if (null != lastSelectedGuildId) {
        tmp6 = lastSelectedGuildId;
      }
      const outer1_14 = tmp6;
      const obj = {};
      const RouteParam = SelectedGuildStore(outer1_1[12]).RouteParam;
      obj.path = outer1_12.CHANNEL(RouteParam.guildId());
      const matchPathResult = SelectedGuildStore(outer1_1[11]).matchPath(outer1_9.lastNonVoiceRoute, obj);
      let guildId;
      if (null != matchPathResult) {
        const params = matchPathResult.params;
        if (null != params) {
          guildId = params.guildId;
        }
      }
      let tmp9 = null;
      if (guildId !== outer1_11) {
        let tmp10 = null;
        if (null != guildId) {
          tmp10 = guildId;
        }
        tmp9 = tmp10;
      }
      let tmp11 = null != tmp9;
      if (tmp11) {
        tmp11 = tmp9 !== outer1_13;
      }
      if (tmp11) {
        outer1_13 = tmp9;
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return { selectedGuildTimestampMillis: outer1_15, selectedGuildId: outer1_13, lastSelectedGuildId: outer1_14 };
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildId",
    value() {
      return outer1_13;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getLastSelectedGuildId",
    value() {
      return outer1_14;
    }
  };
  items[4] = {
    key: "getLastSelectedTimestamp",
    value(arg0) {
      let num = -1;
      if (outer1_13 !== arg0) {
        num = outer1_15[arg0];
      }
      return num;
    }
  };
  return callback(SelectedGuildStore, items);
})(require("initialize").PersistedStore);
tmp3.displayName = "SelectedGuildStore";
tmp3.persistKey = "SelectedGuildStore";
tmp3 = new tmp3(require("dispatcher"), {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: function handleOverlayInitialize(selectedGuildId) {
    selectedGuildId = selectedGuildId.selectedGuildId;
    let c14;
    handleConnectionOpen();
  },
  CHANNEL_SELECT: function handleChannelSelect(guildId) {
    guildId = guildId.guildId;
    if (guildId === guildId) {
      return false;
    } else {
      updateLastSelectedGuildMillis(guildId);
      updateLastSelectedGuildMillis(guildId);
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
    let c13 = null;
    let c14 = null;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/SelectedGuildStore.tsx");

export default tmp3;
export const SELECTED_GUILD_TIMESTAMP_NOW = -1;
