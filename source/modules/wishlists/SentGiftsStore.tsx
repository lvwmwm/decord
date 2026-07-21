// Module ID: 9745
// Function ID: 75824
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 9745 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function getSentGiftKey(skuId, recipientId) {
  return "" + skuId + ":" + recipientId;
}
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
let closure_2 = importDefault(dependencyMap[2]);
let closure_3 = importDefault(dependencyMap[3]);
let closure_4 = importDefault(dependencyMap[4]);
let closure_5 = importDefault(dependencyMap[5]);
let closure_6 = { sentGifts: {} };
let tmp2 = (PersistedStore) => {
  class SentGiftsStore {
    constructor() {
      self = this;
      tmp = closure_1(this, SentGiftsStore);
      obj = closure_4(SentGiftsStore);
      tmp2 = closure_3;
      if (closure_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  let closure_0 = SentGiftsStore;
  callback2(SentGiftsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        self.cleanupExpiredGifts();
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return closure_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasSentGift",
    value(arg0, arg1) {
      let tmp2 = null != tmp;
      if (tmp2) {
        const _Date = Date;
        const date = new Date(tmp.expiresAt);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = date >= date1;
      }
      return tmp2;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getSentGift",
    value(arg0, arg1) {
      let tmp2 = null;
      if (null != closure_6.sentGifts[closure_8(undefined, arg0, arg1)]) {
        const _Date = Date;
        const date = new Date(tmp.expiresAt);
        const _Date2 = Date;
        const date1 = new Date();
        tmp2 = null;
        if (date >= date1) {
          tmp2 = tmp;
        }
      }
      return tmp2;
    }
  };
  items[4] = {
    key: "cleanupExpiredGifts",
    value() {
      const entries = Object.entries(closure_6.sentGifts);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp2 = SentGiftsStore;
        let tmp3 = SentGiftsStore(entries[num], 2);
        let first = tmp3[0];
        let _Date = Date;
        let tmp5 = new.target;
        let tmp6 = new.target;
        let date1 = new Date(tmp3[1].expiresAt);
        let tmp8 = date1;
        if (date1 < date) {
          let tmp9 = closure_6;
          let sentGifts = closure_6.sentGifts;
          delete r1[r10];
        }
      }
    }
  };
  return callback(SentGiftsStore, items);
}(importDefault(dependencyMap[6]).PersistedStore);
tmp2.displayName = "SentGiftsStore";
tmp2.persistKey = "SentGiftsStore";
tmp2 = new tmp2(importDefault(dependencyMap[7]), {
  WISHLIST_GIFT_SENT: function handleGiftSent(skuId) {
    const date = new Date();
    const tmp = getSentGiftKey(skuId.skuId, skuId.recipientId);
    const date1 = new Date(date.getTime() + 172800000);
    sentGifts.sentGifts[tmp] = { skuId: skuId.skuId, recipientId: skuId.recipientId, sentAt: date.toISOString(), expiresAt: new Date(date.getTime() + 172800000).toISOString() };
  }
});
const result = arg1(dependencyMap[8]).fileFinishedImporting("modules/wishlists/SentGiftsStore.tsx");

export default tmp2;
