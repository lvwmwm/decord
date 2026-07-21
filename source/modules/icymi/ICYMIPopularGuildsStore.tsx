// Module ID: 15087
// Function ID: 113688
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15087 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
let closure_7 = importDefault(dependencyMap[5]);
let closure_8 = [];
let closure_9 = [];
let closure_10 = 0;
let tmp2 = (Store) => {
  class ICYMIPopularGuildsStore {
    constructor() {
      self = this;
      tmp = closure_2(this, ICYMIPopularGuildsStore);
      obj = closure_5(ICYMIPopularGuildsStore);
      tmp2 = closure_4;
      if (closure_11()) {
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
  const arg1 = ICYMIPopularGuildsStore;
  callback2(ICYMIPopularGuildsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getOnboardingCategoryIds",
    value() {
      return closure_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getOnboardingGuilds",
    value() {
      return closure_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCurrentOnboardingGuildOffset",
    value() {
      return closure_10;
    }
  };
  return callback(ICYMIPopularGuildsStore, items);
}(importDefault(dependencyMap[8]).Store);
tmp2.displayName = "ICYMIPopularGuildsStore";
tmp2 = new tmp2(importDefault(dependencyMap[9]), {
  LOAD_ICYMI_POPULAR_GUILDS: function loadOnboardingPopularGuilds(categoryIds) {
    let guilds;
    let offset;
    ({ guilds, offset } = categoryIds);
    let arg1;
    let dependencyMap;
    if (0 === offset) {
      categoryIds = categoryIds.categoryIds;
      let closure_9 = [];
      let closure_10 = 0;
    }
    arg1 = new Set(closure_9.map((id) => id.id));
    const set = new Set(closure_9.map((id) => id.id));
    dependencyMap = new Set(guildIds.getGuildIds());
    const mapped = guilds.map((body) => {
      const obj = set(set1[6]);
      return obj.fromClientDiscoverableGuild(set(set1[7]).makeDiscoverableGuild(body));
    });
    const found = mapped.filter((id) => {
      let tmp = !set1.has(id.id);
      if (tmp) {
        tmp = !set.has(id.id);
      }
      return tmp;
    });
    const items = [...found];
    closure_9 = items;
    closure_10 = offset;
  },
  LOGOUT: function handleLogout() {
    let closure_8 = [];
    let closure_9 = [];
    let closure_10 = 0;
  }
});
const result = arg1(dependencyMap[10]).fileFinishedImporting("modules/icymi/ICYMIPopularGuildsStore.tsx");

export default tmp2;
