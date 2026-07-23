// Module ID: 15497
// Function ID: 119415
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 1838, 22, 566, 686, 2]

// Module 15497 (_isNativeReflectConstruct)
import apply from "apply";
import initialize from "initialize";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let c8 = null;
let closure_9 = {};
let tmp2 = ((Store) => {
  class RegionStore {
    constructor() {
      self = this;
      tmp = outer1_2(this, RegionStore);
      obj = outer1_5(RegionStore);
      tmp2 = outer1_4;
      if (outer1_10()) {
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
  callback2(RegionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(outer1_7);
    }
  };
  const items = [obj, , , , , ];
  obj = {
    key: "getOptimalRegion",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      const regions = self.getRegions(tmp);
      let tmp2 = null;
      if (null != regions) {
        let found = regions.find((optimal) => optimal.optimal);
        if (null == found) {
          found = RegionStore(outer1_1[6]).sample(regions);
          const obj = RegionStore(outer1_1[6]);
        }
        tmp2 = found;
      }
      return tmp2;
    }
  };
  items[1] = obj;
  obj = {
    key: "getOptimalRegionId",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      const optimalRegion = self.getOptimalRegion(tmp);
      let id = null;
      if (null != optimalRegion) {
        id = optimalRegion.id;
      }
      return id;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getRandomRegion",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      const regions = self.getRegions(tmp);
      let sampleResult = null;
      if (null != regions) {
        sampleResult = RegionStore(outer1_1[6]).sample(regions);
        const obj = RegionStore(outer1_1[6]);
      }
      return sampleResult;
    }
  };
  items[4] = {
    key: "getRandomRegionId",
    value() {
      let tmp = arg0;
      const self = this;
      if (arg0 === undefined) {
        tmp = null;
      }
      const randomRegion = self.getRandomRegion(tmp);
      let id = null;
      if (null != randomRegion) {
        id = randomRegion.id;
      }
      return id;
    }
  };
  items[5] = {
    key: "getRegions",
    value(arg0) {
      if (null != arg0) {
        let tmp = outer1_9[arg0];
      } else {
        tmp = outer1_8;
      }
      return tmp;
    }
  };
  return callback(RegionStore, items);
})(require("initialize").Store);
tmp2.displayName = "RegionStore";
tmp2 = new tmp2(require("dispatcher"), {
  LOAD_REGIONS: function handleLoadRegions(regions) {
    const sortByResult = importDefault(22).sortBy(regions.regions, (name) => name.name);
    if (null != regions.guildId) {
      closure_9[regions.guildId] = sortByResult;
    } else {
      let c8 = sortByResult;
    }
  },
  GUILD_DELETE: function handleDeleteGuild(arg0) {
    delete tmp2[tmp];
  }
});
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/RegionStore.tsx");

export default tmp2;
