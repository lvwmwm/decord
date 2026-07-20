// Module ID: 13182
// Function ID: 99753
// Name: URLSearchParamsImpl
// Dependencies: []

// Module 13182 (URLSearchParamsImpl)
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);

export const implementation = () => {
  class URLSearchParamsImpl {
    constructor(arg0, arg1, arg2) {
      self = this;
      doNotStripQMark = arg2.doNotStripQMark;
      tmp = undefined !== doNotStripQMark && doNotStripQMark;
      tmp2 = closure_2(self, URLSearchParamsImpl);
      first = arg1[0];
      self._list = [];
      self._url = null;
      if (!tmp) {
        tmp3 = first;
        str = "string";
        tmp = "string" !== typeof first;
      }
      if (!tmp) {
        tmp4 = first;
        str2 = "?";
        tmp = "?" !== first[0];
      }
      if (!tmp) {
        tmp5 = first;
        num = 1;
        first = first.slice(1);
      }
      if (Array.isArray(first)) {
        tmp14 = first;
        iter = tmp6[Symbol.iterator]();
        num3 = 1;
        num4 = 2;
        nextResult = iter.next();
        tmp15 = iter;
        while (iter !== undefined) {
          tmp16 = nextResult;
          if (2 !== nextResult.length) {
            _TypeError = TypeError;
            prototype = TypeError.prototype;
            tmp19 = new.target;
            str4 = "Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.";
            tmp20 = new.target;
            typeError = new TypeError("Failed to construct 'URLSearchParams': parameter 1 sequence's element does not contain exactly two elements.");
            tmp22 = typeError;
            throw typeError;
          } else {
            _list = self._list;
            tmp17 = nextResult;
            items = [, ];
            [arr4[0], arr4[1]] = tmp16;
            arr = _list.push(items);
            // continue
          }
        }
      } else {
        str3 = "object";
        if ("object" === typeof first) {
          _Object = Object;
          tmp7 = first;
          if (null === Object.getPrototypeOf(first)) {
            _Object2 = Object;
            tmp11 = first;
            keys = Object.keys(first);
            tmp13 = keys;
            for (const item10050 of keys) {
              tmp23 = first;
              _list1 = self._list;
              items1 = [, ];
              items1[0] = item10050;
              items1[1] = first[item10050];
              arr1 = _list1.push(items1);
            }
          }
        }
        tmp8 = URLSearchParamsImpl;
        tmp9 = closure_1;
        num2 = 2;
        obj = URLSearchParamsImpl(closure_1[2]);
        tmp10 = first;
        self._list = obj.parseUrlencoded(first);
      }
      return;
    }
  }
  const require = URLSearchParamsImpl;
  let obj = {
    key: "_updateSteps",
    value: function _updateSteps() {
      const self = this;
      if (null !== this._url) {
        let serializeUrlencodedResult = URLSearchParamsImpl(closure_1[2]).serializeUrlencoded(self._list);
        if ("" === serializeUrlencodedResult) {
          serializeUrlencodedResult = null;
        }
        self._url._url.query = serializeUrlencodedResult;
        const obj = URLSearchParamsImpl(closure_1[2]);
      }
    }
  };
  const items = [obj, , , , , , , , , ];
  obj = {
    key: "append",
    value: function append(arg0, arg1) {
      const _list = this._list;
      const items = [arg0, arg1];
      _list.push(items);
      this._updateSteps();
    }
  };
  items[1] = obj;
  obj = {
    key: "delete",
    value: function _delete(arg0) {
      let sum;
      const self = this;
      let num = 0;
      if (0 < this._list.length) {
        do {
          if (self._list[num][0] === arg0) {
            let _list = self._list;
            let spliceResult = _list.splice(num, 1);
            sum = num;
          } else {
            sum = num + 1;
          }
          num = sum;
        } while (sum < self._list.length);
      }
      self._updateSteps();
    }
  };
  items[2] = obj;
  items[3] = {
    key: "get",
    value: function get(arg0) {
      const iter = this._list[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = arg0;
        if (nextResult[0] === arg0) {
          let tmp4 = nextResult;
          let num = 1;
          iter.return();
          return tmp2[1];
        } else {
          // continue
        }
      }
      return null;
    }
  };
  items[4] = {
    key: "getAll",
    value: function getAll(arg0) {
      const items = [];
      const iter = this._list[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp3 = arg0;
        if (nextResult[0] === arg0) {
          let tmp4 = items;
          let tmp5 = nextResult;
          let arr = items.push(tmp2[1]);
        }
        // continue
      }
      return items;
    }
  };
  items[5] = {
    key: "has",
    value: function has(arg0) {
      const iter = this._list[Symbol.iterator]();
      while (iter !== undefined) {
        let tmp = arg0;
        if (iter.next()[0] === arg0) {
          iter.return();
          let flag = true;
          return true;
        } else {
          // continue
        }
      }
      return false;
    }
  };
  items[6] = {
    key: "set",
    value: function set(arg0, arg1) {
      let sum;
      const self = this;
      let flag = false;
      let num = 0;
      let flag2 = false;
      if (0 < this._list.length) {
        do {
          if (self._list[num][0] === arg0) {
            let _list = self._list;
            if (flag) {
              let spliceResult = _list.splice(num, 1);
              let flag3 = flag;
              sum = num;
            } else {
              _list[num][1] = arg1;
              sum = num + 1;
              flag3 = true;
            }
          } else {
            sum = num + 1;
            flag3 = flag;
          }
          flag = flag3;
          num = sum;
          flag2 = flag3;
        } while (sum < self._list.length);
      }
      if (!flag2) {
        const _list1 = self._list;
        const items = [arg0, arg1];
        _list1.push(items);
      }
      self._updateSteps();
    }
  };
  items[7] = {
    key: "sort",
    value: function sort() {
      this._list = function stableSortBy(_list, arg1) {
        const mapped = _list.map((item, index) => ({ item, index }));
        const sorted = mapped.sort((item, item2) => item2(item.item, item2.item) || item.index - item2.index);
        return sorted.map((item) => item.item);
      }(this._list, (arg0, arg1) => arg0[0] > arg1[0]);
      this._updateSteps();
    }
  };
  items[8] = {
    key: Symbol.iterator,
    value() {
      const _list = this._list;
      return _list[Symbol.iterator]();
    }
  };
  items[9] = {
    key: "toString",
    value: function toString() {
      return URLSearchParamsImpl(closure_1[2]).serializeUrlencoded(this._list);
    }
  };
  return callback(URLSearchParamsImpl, items);
}();
