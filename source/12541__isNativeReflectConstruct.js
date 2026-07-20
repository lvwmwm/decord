// Module ID: 12541
// Function ID: 96411
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 12541 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = {};
let tmp2 = (Store) => {
  class ChannelSKUStore {
    constructor() {
      self = this;
      tmp = ChannelSKUStore(this, ChannelSKUStore);
      obj = closure_3(ChannelSKUStore);
      tmp2 = closure_2;
      if (closure_6()) {
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
  let closure_0 = ChannelSKUStore;
  callback2(ChannelSKUStore, Store);
  const items = [
    {
      key: "getSkuIdForChannel",
      value(arg0) {
        return closure_5[arg0];
      }
    }
  ];
  return callback(ChannelSKUStore, items);
}(importDefault(dependencyMap[5]).Store);
tmp2.displayName = "ChannelSKUStore";
tmp2 = new tmp2(importDefault(dependencyMap[6]), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    let closure_5 = {};
  },
  STORE_LISTING_FETCH_SUCCESS: function handleStoreListingFetchSuccess(channelId) {
    channelId = channelId.channelId;
    if (null != channelId) {
      closure_5[channelId] = tmp.sku.id;
    }
  }
});
const result = arg1(dependencyMap[7]).fileFinishedImporting("stores/ChannelSKUStore.tsx");

export default tmp2;
