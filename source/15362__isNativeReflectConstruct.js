// Module ID: 15362
// Function ID: 117135
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 15362 (_isNativeReflectConstruct)
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
let closure_8 = null;
let closure_9 = {};
let tmp2 = (Store) => {
  class RegionStore {
    constructor() {
      self = this;
      tmp = closure_2(this, RegionStore);
      obj = closure_5(RegionStore);
      tmp2 = closure_4;
      if (closure_10()) {
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
  const importDefault = RegionStore;
  callback2(RegionStore, Store);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_7);
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
          found = RegionStore(closure_1[6]).sample(regions);
          const obj = RegionStore(closure_1[6]);
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
        sampleResult = RegionStore(closure_1[6]).sample(regions);
        const obj = RegionStore(closure_1[6]);
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
        let tmp = closure_9[arg0];
      } else {
        tmp = closure_8;
      }
      return tmp;
    }
  };
  return callback(RegionStore, items);
}(importDefault(dependencyMap[7]).Store);
tmp2.displayName = "RegionStore";
tmp2 = new tmp2(importDefault(dependencyMap[8]), {
  LOAD_REGIONS: function handleLoadRegions(regions) {
    const sortByResult = importDefault(dependencyMap[6]).sortBy(regions.regions, (name) => name.name);
    if (null != regions.guildId) {
      closure_9[regions.guildId] = sortByResult;
    } else {
      let closure_8 = sortByResult;
    }
  },
  GUILD_DELETE: function handleDeleteGuild(arg0) {
    delete r1[r0];
  }
});
const result = arg1(dependencyMap[9]).fileFinishedImporting("stores/RegionStore.tsx");

export default tmp2;
