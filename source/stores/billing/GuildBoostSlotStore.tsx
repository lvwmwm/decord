// Module ID: 4021
// Function ID: 33479
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 4021 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function handleGuildBoostsUpdate(guildBoostSlot) {
  guildBoostSlot = guildBoostSlot.guildBoostSlot;
  const obj = {};
  const merged = Object.assign(closure_8);
  obj[guildBoostSlot.id] = guildBoostSlot;
  closure_8 = obj;
}
function handleSubscriptionStoreUpdate() {
  let length;
  const obj = {};
  const values = Object.values(closure_8);
  let num = 0;
  if (0 < values.length) {
    do {
      let tmp = values[num];
      obj[tmp.id] = tmp;
      let tmp2 = closure_5;
      tmp.subscription = closure_5.getSubscriptionById(tmp.subscriptionId);
      num = num + 1;
      length = values.length;
    } while (num < length);
  }
  closure_8 = obj;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = false;
let closure_7 = false;
let closure_8 = {};
let tmp2 = (Store) => {
  class GuildBoostSlotStore {
    constructor() {
      self = this;
      tmp = GuildBoostSlotStore(this, GuildBoostSlotStore);
      obj = closure_3(GuildBoostSlotStore);
      tmp2 = closure_2;
      if (closure_9()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_3;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_3(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = GuildBoostSlotStore;
  callback2(GuildBoostSlotStore, Store);
  let obj = {
    key: "initialize",
    value() {
      const items = [closure_5];
      this.syncWith(items, closure_10);
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "hasFetched",
    get() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "isFetching",
    get() {
      return closure_7;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "boostSlots",
    get() {
      return closure_8;
    }
  };
  items[4] = {
    key: "getGuildBoostSlot",
    value(arg0) {
      return closure_8[arg0];
    }
  };
  return callback(GuildBoostSlotStore, items);
}(importDefault(dependencyMap[6]).Store);
tmp2.displayName = "GuildBoostSlotStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  GUILD_BOOST_SLOTS_FETCH: function handleGuildBoostsFetch() {
    let closure_7 = true;
  },
  GUILD_BOOST_SLOTS_FETCH_SUCCESS: function handleGuildBoostsFetchSuccess(guildBoostSlots) {
    guildBoostSlots = guildBoostSlots.guildBoostSlots;
    let closure_8 = {};
    const item = guildBoostSlots.forEach((id) => {
      closure_8[id.id] = id;
    });
    let closure_7 = false;
    let closure_6 = true;
  },
  GUILD_BOOST_SLOT_UPDATE_SUCCESS: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_CREATE: handleGuildBoostsUpdate,
  GUILD_BOOST_SLOT_UPDATE: handleGuildBoostsUpdate,
  LOGOUT: function handleLogout() {
    let closure_8 = {};
    let closure_6 = false;
    let closure_7 = false;
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("stores/billing/GuildBoostSlotStore.tsx");

export default tmp2;
