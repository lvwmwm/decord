// Module ID: 15257
// Function ID: 116222
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 1387, 5736, 566, 686, 2]

// Module 15257 (_isNativeReflectConstruct)
import fromGuildPropertiesWithAdditionalFields from "fromGuildPropertiesWithAdditionalFields";
import _startLurking from "_startLurking";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_8 = [];
let closure_9 = [];
let c10 = 0;
let tmp2 = ((Store) => {
  class ICYMIPopularGuildsStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, ICYMIPopularGuildsStore);
      obj = outer1_5(ICYMIPopularGuildsStore);
      tmp2 = outer1_4;
      if (outer1_11()) {
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
  callback2(ICYMIPopularGuildsStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "getOnboardingCategoryIds",
    value() {
      return outer1_8;
    }
  };
  items[1] = obj;
  obj = {
    key: "getOnboardingGuilds",
    value() {
      return outer1_9;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getCurrentOnboardingGuildOffset",
    value() {
      return outer1_10;
    }
  };
  return callback(ICYMIPopularGuildsStore, items);
})(require("initialize").Store);
tmp2.displayName = "ICYMIPopularGuildsStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOAD_ICYMI_POPULAR_GUILDS: function loadOnboardingPopularGuilds(categoryIds) {
    let guilds;
    let offset;
    ({ guilds, offset } = categoryIds);
    let set;
    let set1;
    if (0 === offset) {
      categoryIds = categoryIds.categoryIds;
      let items = [];
      offset = 0;
    }
    set = new Set(items.map((id) => id.id));
    set1 = new Set(guildIds.getGuildIds());
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
    items = [...found];
  },
  LOGOUT: function handleLogout() {
    let closure_8 = [];
    let closure_9 = [];
    let c10 = 0;
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("modules/icymi/ICYMIPopularGuildsStore.tsx");

export default tmp2;
