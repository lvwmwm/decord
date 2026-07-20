// Module ID: 16381
// Function ID: 126584
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 16381 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
let closure_11 = arg1(dependencyMap[7]).DISCOVERY_ALL_CATEGORIES_ID;
const Endpoints = arg1(dependencyMap[8]).Endpoints;
let tmp2 = (arg0) => {
  class GlobalDiscoveryServersFeaturedSearchManager {
    constructor(arg0) {
      self = this;
      items = [...arguments];
      tmp = closure_6(this, GlobalDiscoveryServersFeaturedSearchManager);
      items1 = [...items];
      obj = closure_8(GlobalDiscoveryServersFeaturedSearchManager);
      tmp2 = closure_7;
      if (closure_13()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_8;
        constructResult = Reflect.construct(obj, items1, closure_8(self).constructor);
      } else {
        constructResult = obj.apply(self, items1);
      }
      tmp2Result = tmp2(self, constructResult);
      GlobalDiscoveryServersFeaturedSearchManager = tmp2Result;
      tmp2Result.actions = {
        POST_CONNECTION_OPEN() {
              return tmp2Result.handleConnectionOpen();
            }
      };
      set = new Set();
      tmp2Result.queue = set;
      tmp2Result.isFetchEnabled = false;
      tmp2Result.handleConnectionOpen = () => {
        tmp2Result.isFetchEnabled = true;
        const queue = tmp2Result.queue;
        const item = queue.forEach((categoryId) => {
          if (categoryId === closure_11) {
            const featuredGuilds = closure_0.fetchFeaturedGuilds();
          } else {
            const obj = { categoryId };
            const categoryFeaturedGuilds = closure_0.fetchCategoryFeaturedGuilds(obj);
          }
        });
      };
      tmp2Result.fetchFeaturedGuilds = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      tmp2Result.fetchCategoryFeaturedGuilds = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
      return tmp2Result;
    }
  }
  const arg1 = GlobalDiscoveryServersFeaturedSearchManager;
  callback2(GlobalDiscoveryServersFeaturedSearchManager, arg0);
  return callback(GlobalDiscoveryServersFeaturedSearchManager);
}(importDefault(dependencyMap[15]));
tmp2 = new tmp2();
const result = arg1(dependencyMap[16]).fileFinishedImporting("modules/global_discovery_servers/GlobalDiscoveryServersFeaturedSearchManager.tsx");

export default tmp2;
