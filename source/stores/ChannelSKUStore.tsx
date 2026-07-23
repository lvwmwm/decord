// Module ID: 12669
// Function ID: 98640
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 566, 686, 2]

// Module 12669 (_isNativeReflectConstruct)
import dispatcher from "dispatcher";
import set from "set";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let dispatcher = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return dispatcher;
  }
  const result = _isNativeReflectConstruct();
}
let closure_5 = {};
let tmp2 = ((Store) => {
  class ChannelSKUStore {
    constructor() {
      self = this;
      tmp = ChannelSKUStore(this, ChannelSKUStore);
      obj = outer1_3(ChannelSKUStore);
      tmp2 = outer1_2;
      if (outer1_6()) {
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
  callback2(ChannelSKUStore, Store);
  const items = [
    {
      key: "getSkuIdForChannel",
      value(arg0) {
        return outer1_5[arg0];
      }
    }
  ];
  return callback(ChannelSKUStore, items);
})(require("initialize").Store);
tmp2.displayName = "ChannelSKUStore";
tmp2 = new tmp2(require("dispatcher"), {
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
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/ChannelSKUStore.tsx");

export default tmp2;
