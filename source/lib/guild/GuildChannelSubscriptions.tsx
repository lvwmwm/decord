// Module ID: 5664
// Function ID: 48663
// Name: serializeChannelRanges
// Dependencies: [6, 7, 1362, 22, 2]

// Module 5664 (serializeChannelRanges)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";

function serializeChannelRanges(arr) {
  const obj = {};
  const item = arr.forEach((arg0, arg1) => {
    obj[arg1] = arg0;
  });
  return obj;
}
const tmp2 = (() => {
  class GuildChannelSubscriptions {
    constructor(arg0) {
      tmp = outer1_2(this, GuildChannelSubscriptions);
      this._subscriptions = {};
      this._onChange = arg0;
      return;
    }
  }
  let obj = {
    key: "reset",
    value() {
      this._subscriptions = {};
    }
  };
  const items = [obj, , , , ];
  obj = {
    key: "get",
    value(arg0) {
      return outer1_4(this._get(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "_get",
    value(arg0) {
      let tmp = this._subscriptions[arg0];
      if (null == tmp) {
        const tmp4 = GuildChannelSubscriptions(outer1_1[2]);
        const obj = { max: 5 };
        const prototype = tmp4.prototype;
        tmp = new tmp4(obj);
      }
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "clear",
    value(arg0) {
      delete tmp2[tmp];
    }
  };
  items[4] = {
    key: "subscribe",
    value(_pending) {
      const self = this;
      const _getResult = this._get(_pending);
      let flag = !GuildChannelSubscriptions(outer1_1[3]).isEqual(_getResult.get(arg1), arg2);
      if (flag) {
        const result = _getResult.set(arg1, arg2);
        self._subscriptions[_pending] = _getResult;
        self._onChange(_pending, outer1_4(_getResult));
        flag = true;
      }
      return flag;
    }
  };
  return callback(GuildChannelSubscriptions, items);
})();
let result = require("priv").fileFinishedImporting("lib/guild/GuildChannelSubscriptions.tsx");
let items = [[0, 99]];

export default tmp2;
export const MINIMUM_RANGE = 100;
export const DEFAULT_RANGES = items;
