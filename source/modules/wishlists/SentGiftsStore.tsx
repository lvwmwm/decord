// Module ID: 9753
// Function ID: 75878
// Name: _isNativeReflectConstruct
// Dependencies: [57, 6, 7, 15, 17, 18, 566, 686, 2]

// Module 9753 (_isNativeReflectConstruct)
import _slicedToArray from "_slicedToArray";
import initialize from "initialize";
import dispatcher from "dispatcher";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";

function _isNativeReflectConstruct() {
  let _slicedToArray = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return _slicedToArray;
  }
  const result = _isNativeReflectConstruct();
}
function getSentGiftKey(skuId, recipientId) {
  return "" + skuId + ":" + recipientId;
}
let closure_6 = { sentGifts: {} };
let tmp2 = ((PersistedStore) => {
  class SentGiftsStore {
    constructor() {
      self = this;
      tmp = outer1_1(this, SentGiftsStore);
      obj = outer1_4(SentGiftsStore);
      tmp2 = outer1_3;
      if (outer1_7()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, outer1_4(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  callback2(SentGiftsStore, PersistedStore);
  let obj = {
    key: "initialize",
    value(arg0) {
      const self = this;
      if (null != arg0) {
        const outer1_6 = arg0;
        self.cleanupExpiredGifts();
      }
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "getState",
    value() {
      return outer1_6;
    }
  };
  items[1] = obj;
  obj = {
    key: "hasSentGift",
    value(arg0, arg1) {
      const tmp = outer1_6.sentGifts[outer1_8(undefined, arg0, arg1)];
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
      const tmp = outer1_6.sentGifts[outer1_8(undefined, arg0, arg1)];
      let tmp2 = null;
      if (null != tmp) {
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
      const entries = Object.entries(outer1_6.sentGifts);
      for (let num = 0; num < entries.length; num = num + 1) {
        let tmp4 = SentGiftsStore;
        let tmp5 = SentGiftsStore(entries[num], 2);
        let first = tmp5[0];
        let _Date = Date;
        let tmp7 = new.target;
        let tmp8 = new.target;
        let date1 = new Date(tmp5[1].expiresAt);
        let tmp10 = date1;
        if (date1 < date) {
          let tmp11 = outer1_6;
          let sentGifts = outer1_6.sentGifts;
          delete tmp[tmp2];
        }
      }
    }
  };
  return callback(SentGiftsStore, items);
})(require("initialize").PersistedStore);
tmp2.displayName = "SentGiftsStore";
tmp2.persistKey = "SentGiftsStore";
tmp2 = new tmp2(require("dispatcher"), {
  WISHLIST_GIFT_SENT: function handleGiftSent(skuId) {
    const date = new Date();
    const tmp = getSentGiftKey(skuId.skuId, skuId.recipientId);
    const date1 = new Date(date.getTime() + 172800000);
    sentGifts.sentGifts[tmp] = { skuId: skuId.skuId, recipientId: skuId.recipientId, sentAt: date.toISOString(), expiresAt: new Date(date.getTime() + 172800000).toISOString() };
  }
});
let result = require("_defineProperties").fileFinishedImporting("modules/wishlists/SentGiftsStore.tsx");

export default tmp2;
