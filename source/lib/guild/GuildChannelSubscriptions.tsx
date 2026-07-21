// Module ID: 5660
// Function ID: 48610
// Name: serializeChannelRanges
// Dependencies: []

// Module 5660 (serializeChannelRanges)
function serializeChannelRanges(arr) {
  const obj = {};
  const importDefault = obj;
  const item = arr.forEach((arg0, arg1) => {
    obj[arg1] = arg0;
  });
  return obj;
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class GuildChannelSubscriptions {
    constructor(arg0) {
      tmp = closure_2(this, GuildChannelSubscriptions);
      this._subscriptions = {};
      this._onChange = arg0;
      return;
    }
  }
  const importDefault = GuildChannelSubscriptions;
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
      return callback2(this._get(arg0));
    }
  };
  items[1] = obj;
  obj = {
    key: "_get",
    value(arg0) {
      let tmp = this._subscriptions[arg0];
      if (null == tmp) {
        const tmp4 = GuildChannelSubscriptions(closure_1[2]);
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
      delete r1[r0];
    }
  };
  items[4] = {
    key: "subscribe",
    value(_pending) {
      const self = this;
      const _getResult = this._get(_pending);
      let flag = !GuildChannelSubscriptions(closure_1[3]).isEqual(_getResult.get(arg1), arg2);
      if (flag) {
        const result = _getResult.set(arg1, arg2);
        self._subscriptions[_pending] = _getResult;
        self._onChange(_pending, callback2(_getResult));
        flag = true;
      }
      return flag;
    }
  };
  return callback(GuildChannelSubscriptions, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("lib/guild/GuildChannelSubscriptions.tsx");
const items = [[]];

export default tmp2;
export const MINIMUM_RANGE = 100;
export const DEFAULT_RANGES = items;
