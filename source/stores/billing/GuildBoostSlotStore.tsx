// Module ID: 4023
// Function ID: 33491
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3782, 566, 686, 2]

// Module 4023 (_isNativeReflectConstruct)
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

function _isNativeReflectConstruct() {
  let initialize = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return initialize;
  }
  const result = _isNativeReflectConstruct();
}
function handleGuildBoostsUpdate(guildBoostSlot) {
  guildBoostSlot = guildBoostSlot.guildBoostSlot;
  const obj = {};
  const merged = Object.assign(obj);
  obj[guildBoostSlot.id] = guildBoostSlot;
}
function handleSubscriptionStoreUpdate() {
  let length;
  const obj = {};
  const values = Object.values(obj);
  let num = 0;
  if (0 < values.length) {
    do {
      let tmp = values[num];
      obj[tmp.id] = tmp;
      let tmp2 = subscriptionById;
      tmp.subscription = subscriptionById.getSubscriptionById(tmp.subscriptionId);
      num = num + 1;
      length = values.length;
    } while (num < length);
  }
}
let c6 = false;
let c7 = false;
let closure_8 = {};
let tmp2 = ((Store) => {
  class GuildBoostSlotStore {
    constructor() {
      self = this;
      tmp = GuildBoostSlotStore(this, GuildBoostSlotStore);
      obj = outer1_3(GuildBoostSlotStore);
      tmp2 = outer1_2;
      if (outer1_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(GuildBoostSlotStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [outer1_5];
      this.syncWith(items, outer1_10);
    }
  };
  let items = [obj, , , , ];
  obj = {
    key: "hasFetched",
    get() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetching",
    get() {
      return outer1_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "boostSlots",
    get() {
      return outer1_8;
    }
  };
  items[4] = {
    key: "getGuildBoostSlot",
    value(arg0) {
      return outer1_8[arg0];
    }
  };
  return callback(GuildBoostSlotStore, items);
})(require("initialize").Store);
tmp2.displayName = "GuildBoostSlotStore";
tmp2 = new tmp2(require("dispatcher"), {
  GUILD_BOOST_SLOTS_FETCH: function handleGuildBoostsFetch() {
    let c7 = true;
  },
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function handleGuildBoostsFetchSuccess(guildBoostSlots) {
    guildBoostSlots = guildBoostSlots.guildBoostSlots;
    let closure_8 = {};
    const item = guildBoostSlots.forEach((id) => {
      closure_8[id.id] = id;
    });
    let c7 = false;
    let c6 = true;
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_CREATE: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_UPDATE: handleGuildBoostsUpdate,
  LOGOUT: function handleLogout() {
    let closure_8 = {};
    let c6 = false;
    let c7 = false;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/billing/GuildBoostSlotStore.tsx");

export default tmp2;
