// Module ID: 227
// Function ID: 3139
// Name: URLSearchParams
// Dependencies: [65, 57, 6, 7]

// Module 227 (URLSearchParams)
import _toConsumableArray from "_toConsumableArray";
import _slicedToArray from "_slicedToArray";
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const URLSearchParams = (() => {
  class URLSearchParams {
    constructor(arg0) {
      self = this;
      tmp = outer1_2(this, self);
      map = new Map();
      this._searchParams = map;
      if (null !== arg0) {
        tmp6 = typeof arg0;
        str5 = "string";
        if ("string" === tmp6) {
          str2 = "";
          str3 = arg0.replace(/^\?/, "");
          str4 = "&";
          parts = str3.split("&");
          item = parts.forEach((str) => {
            if (str) {
              const parts = str.split("=");
              const tmp2 = outer2_1(parts.map((str) => decodeURIComponent(str.replace(/\+/g, " "))), 2);
              self.append(tmp2[0], tmp2[1]);
            }
          });
        } else {
          _Array = Array;
          if (Array.isArray(arg0)) {
            item1 = arg0.forEach((arg0) => {
              const tmp = outer2_1(arg0, 2);
              return self.append(tmp[0], tmp[1]);
            });
          } else {
            str = "object";
            if ("object" === tmp6) {
              _Object = Object;
              entries = Object.entries(arg0);
              item2 = entries.forEach((arg0) => {
                const tmp = outer2_1(arg0, 2);
                return self.append(tmp[0], tmp[1]);
              });
            }
          }
        }
      }
      return;
    }
  }
  let obj = {
    key: "size",
    get() {
      return this._searchParams.size;
    }
  };
  let items = [obj, , , , , , , , , , , , , ];
  obj = {
    key: "append",
    value: function append(arg0, arg1) {
      let _searchParams;
      let _searchParams2;
      ({ _searchParams, _searchParams: _searchParams2 } = this);
      if (_searchParams.has(arg0)) {
        const value = _searchParams2.get(arg0);
        if (null != value) {
          value.push(arg1);
        }
      } else {
        const items = [arg1];
        const result = _searchParams2.set(arg0, items);
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value: function _delete(arg0) {
      const _searchParams = this._searchParams;
      _searchParams.delete(arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value: function get(arg0) {
      const _searchParams = this._searchParams;
      const value = _searchParams.get(arg0);
      let first = null;
      if (value) {
        first = value[0];
      }
      return first;
    }
  };
  items[4] = {
    key: "getAll",
    value: function getAll(arg0) {
      const _searchParams = this._searchParams;
      let items = _searchParams.get(arg0);
      if (null == items) {
        items = [];
      }
      return items;
    }
  };
  items[5] = {
    key: "has",
    value: function has(arg0) {
      const _searchParams = this._searchParams;
      return _searchParams.has(arg0);
    }
  };
  items[6] = {
    key: "set",
    value: function set(arg0, arg1) {
      const _searchParams = this._searchParams;
      const items = [arg1];
      const result = _searchParams.set(arg0, items);
    }
  };
  items[7] = {
    key: "keys",
    value: function keys() {
      const _searchParams = this._searchParams;
      return _searchParams.keys();
    }
  };
  items[8] = {
    key: "values",
    value: function values() {
      return (function* generateValues(_searchParams) {
        const values = _searchParams.values();
        for (const item10006 of values) {
          let tmp2 = item10006;
          for (const item10010 of item10006) {
            let tmp3 = yield item10010;
            continue;
          }
          continue;
        }
      })(this._searchParams);
    }
  };
  items[9] = {
    key: "entries",
    value: function entries() {
      return (function* generateEntries(_searchParams) {
        let tmp5;
        let tmp6;
        while (tmp !== undefined) {
          let tmp3 = outer3_1;
          let tmp4 = outer3_1(tmp2, 2);
          [tmp5, tmp6] = tmp4;
          let tmp7 = tmp6;
          for (const item10015 of tmp6) {
            let tmp8 = tmp5;
            let items = [tmp5, item10015];
            let tmp9 = yield items;
            continue;
          }
          continue;
        }
      })(this._searchParams);
    }
  };
  items[10] = {
    key: "forEach",
    value: function forEach(arg0) {
      let tmp5;
      let tmp6;
      while (tmp !== undefined) {
        let tmp3 = outer1_1;
        let tmp4 = outer1_1(tmp2, 2);
        [tmp5, tmp6] = tmp4;
        let tmp7 = tmp6;
        for (const item10018 of tmp6) {
          let tmp8 = arg0;
          let tmp9 = tmp5;
          let tmp10 = arg0(item10018, tmp5, this);
          continue;
        }
        continue;
      }
    }
  };
  items[11] = {
    key: "sort",
    value: function sort() {
      const _searchParams = this._searchParams;
      const obj = URLSearchParams(_searchParams.entries());
      this._searchParams = new Map(URLSearchParams(_searchParams.entries()).sort((arg0, arg1) => {
        const first = outer2_1(arg0, 1)[0];
        return first.localeCompare(outer2_1(arg1, 1)[0]);
      }));
    }
  };
  items[12] = {
    key: Symbol.iterator,
    value() {
      let tmp5;
      let tmp6;
      const items = [];
      while (tmp !== undefined) {
        let tmp3 = outer1_1;
        let tmp4 = outer1_1(tmp2, 2);
        [tmp5, tmp6] = tmp4;
        let tmp7 = tmp6;
        for (const item10018 of tmp6) {
          let tmp8 = items;
          let tmp9 = tmp5;
          let items1 = [tmp5, item10018];
          let arr = items.push(items1);
          continue;
        }
        continue;
      }
      return items[Symbol.iterator]();
    }
  };
  items[13] = {
    key: "toString",
    value: function toString() {
      const _searchParams = this._searchParams;
      let mapped = Array.from(_searchParams.entries()).map((arg0) => {
        const tmp = outer2_1(arg0, 2);
        let _toConsumableArray = tmp[0];
        const mapped = tmp[1].map((arg0) => {
          const replaced = encodeURIComponent(_toConsumableArray).replace(/%20/g, "+");
          const str = encodeURIComponent(_toConsumableArray);
          return "" + replaced + "=" + encodeURIComponent(arg0).replace(/%20/g, "+");
        });
        return mapped.join("&");
      });
      return mapped.join("&");
    }
  };
  return callback(URLSearchParams, items);
})();
