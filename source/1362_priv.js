// Module ID: 1362
// Function ID: 16299
// Name: priv
// Dependencies: [1363, 1365, 1366]

// Module 1362 (priv)
function priv(self, lruList, dispose) {
  let tmp = dispose;
  if (dependencyMap2[lruList]) {
    let tmp3 = dependencyMap2[lruList];
  } else {
    tmp3 = callback(lruList);
    dependencyMap2[lruList] = tmp3;
  }
  if (2 === arguments.length) {
    tmp = self[tmp3];
  } else {
    self[tmp3] = tmp;
  }
  return tmp;
}
function naiveLength() {
  return 1;
}
class LRUCache {
  constructor(arg0) {
    self = this;
    if (this instanceof LRUCache) {
      str = "number";
      obj = global;
      if ("number" === typeof global) {
        obj = {};
        obj.max = global;
      }
      if (!obj) {
        obj = {};
      }
      tmp7 = priv;
      str2 = "max";
      tmp8 = priv(self, "max", obj.max);
      tmp9 = !tmp8 || "number" !== typeof tmp8;
      if (!tmp9) {
        num = 0;
        tmp9 = tmp8 <= 0;
      }
      if (tmp9) {
        tmp10 = priv;
        num2 = Infinity;
        tmp11 = priv(self, "max", Infinity);
      }
      tmp12 = obj.length || naiveLength;
      str3 = "function";
      if ("function" !== typeof tmp12) {
        tmp12 = naiveLength;
      }
      str4 = "lengthCalculator";
      tmp13 = priv;
      tmp14 = priv(self, "lengthCalculator", tmp12);
      tmp15 = obj.stale || false;
      str5 = "allowStale";
      tmp13Result = tmp13(self, "allowStale", tmp15);
      num3 = obj.maxAge;
      tmp17 = priv;
      if (!num3) {
        num3 = 0;
      }
      str6 = "maxAge";
      tmp17Result = tmp17(self, "maxAge", num3);
      tmp19 = priv;
      str7 = "dispose";
      tmp20 = priv(self, "dispose", obj.dispose);
      resetResult = self.reset();
      return;
    } else {
      tmp = LRUCache;
      prototype = LRUCache.prototype;
      tmp2 = new.target;
      tmp3 = new.target;
      tmp4 = global;
      tmp5 = new LRUCache(global);
      tmp6 = tmp5;
      return tmp5;
    }
  }
  rforEach(arg0, arg1) {
    tmp = require;
    self = this;
    if (!require) {
      tmp = self;
    }
    prev = priv(self, "lruList").tail;
    if (null !== prev) {
      do {
        tmp3 = forEachStep;
        tmp4 = self;
        tmp5 = global;
        tmp6 = prev;
        tmp7 = tmp;
        tmp8 = forEachStep(self, global, prev, tmp);
        prev = prev.prev;
      } while (null !== tmp2);
    }
    return;
  }
  forEach(arg0, arg1) {
    tmp = require;
    self = this;
    if (!require) {
      tmp = self;
    }
    iter = priv(self, "lruList").head;
    if (null !== iter) {
      do {
        tmp3 = forEachStep;
        tmp4 = self;
        tmp5 = global;
        tmp6 = iter;
        tmp7 = tmp;
        tmp8 = forEachStep(self, global, iter, tmp);
        iter = iter.next;
      } while (null !== tmp2);
    }
    return;
  }
  keys() {
    obj = priv(this, "lruList");
    toArrayResult = obj.toArray();
    return toArrayResult.map((key) => key.key, this);
  }
  values() {
    obj = priv(this, "lruList");
    toArrayResult = obj.toArray();
    return toArrayResult.map((value) => value.value, this);
  }
  reset() {
    self = this;
    length = priv(this, "dispose");
    if (length) {
      tmp = priv;
      str = "lruList";
      length = priv(self, "lruList");
    }
    if (length) {
      tmp2 = priv;
      str2 = "lruList";
      length = priv(self, "lruList").length;
    }
    if (length) {
      tmp3 = priv;
      str3 = "lruList";
      arr = priv(self, "lruList");
      item = arr.forEach(function(key) {
        outer1_4(this, "dispose").call(this, key.key, key.value);
      }, self);
    }
    tmp5 = require("PseudoMap");
    tmp5 = new tmp5();
    tmp7 = priv(self, "cache", tmp5);
    tmp8 = require("Yallist");
    tmp8 = new tmp8();
    tmp10 = priv(self, "lruList", tmp8);
    tmp11 = priv(self, "length", 0);
    return;
  }
  dump() {
    arr = priv(this, "lruList");
    mapped = arr.map(function(arg0) {
      let maxAge;
      let now;
      if (!outer1_9(this, arg0)) {
        const obj = {};
        ({ key: obj.k, value: obj.v, maxAge, now } = arg0);
        if (!maxAge) {
          maxAge = 0;
        }
        obj.e = now + maxAge;
        return obj;
      }
    }, this);
    toArrayResult = mapped.toArray();
    return toArrayResult.filter((arg0) => arg0);
  }
  dumpLru() {
    return priv(this, "lruList");
  }
  inspect(arg0, arg1) {
    self = this;
    closure_0 = require;
    c1 = "LRUCache {";
    c2 = false;
    flag = false;
    if (priv(this, "allowStale")) {
      tmp = c1;
      str = "\n  allowStale: true";
      c1 = `${c1}
  allowStale: true`;
      flag2 = true;
      c2 = true;
      flag = true;
    }
    tmp2 = priv(self, "max");
    tmp3 = tmp2;
    if (tmp2) {
      num = Infinity;
      tmp3 = tmp2 !== Infinity;
    }
    flag3 = flag;
    if (tmp3) {
      if (flag) {
        tmp4 = c1;
        str2 = ",";
        c1 = `${c1},`;
      }
      tmp5 = c1;
      tmp6 = closure_0;
      tmp7 = c1;
      num2 = 2;
      obj = require("inspect");
      str3 = "\n  max: ";
      c1 = `${c1}
  max: ${obj.inspect(tmp2, require)}`;
      flag4 = true;
      c2 = true;
      flag3 = true;
    }
    tmp8 = priv(self, "maxAge");
    closure_3 = tmp8;
    flag5 = flag3;
    if (tmp8) {
      if (flag3) {
        tmp9 = c1;
        str4 = ",";
        c1 = `${c1},`;
      }
      tmp10 = c1;
      tmp11 = closure_0;
      tmp12 = c1;
      num3 = 2;
      obj2 = require("inspect");
      str5 = "\n  maxAge: ";
      c1 = `${c1}
  maxAge: ${obj2.inspect(tmp8, require)}`;
      flag6 = true;
      c2 = true;
      flag5 = true;
    }
    tmp13 = priv(self, "lengthCalculator");
    priv = tmp13;
    tmp14 = tmp13;
    if (tmp13) {
      tmp15 = c5;
      tmp14 = tmp13 !== c5;
    }
    flag7 = flag5;
    if (tmp14) {
      if (flag5) {
        tmp16 = c1;
        str6 = ",";
        c1 = `${c1},`;
      }
      tmp17 = c1;
      tmp18 = closure_0;
      tmp19 = c1;
      num4 = 2;
      tmp20 = require("inspect");
      tmp22 = priv;
      str7 = "length";
      str8 = "\n  length: ";
      c1 = `${c1}
  length: ${tmp21(priv(self, "length"), require)}`;
      flag8 = true;
      c2 = true;
      flag7 = true;
    }
    c5 = false;
    arr = priv(self, "lruList");
    item = arr.forEach(function(key) {
      if (c5) {
        let dependencyMap = `${closure_1},
        `;
      } else {
        if (c2) {
          dependencyMap = `${closure_1},
      `;
        }
        c5 = true;
        dependencyMap = `${closure_1}
        `;
      }
      let obj = callback(1366);
      const parts = obj.inspect(key.key).split("\n");
      obj = { value: key.value };
      const joined = parts.join("\n  ");
      if (key.maxAge !== closure_3) {
        obj.maxAge = key.maxAge;
      }
      if (closure_4 !== c5) {
        obj.length = key.length;
      }
      if (outer1_9(this, key)) {
        obj.stale = true;
      }
      const str4 = obj.inspect(key.key);
      const obj4 = callback(1366);
      const parts1 = callback(1366).inspect(obj, callback).split("\n");
      dependencyMap = `${closure_1}${tmp5} => ${obj5.join("\n  ")}`;
    });
    tmp24 = c5;
    if (!c5) {
      tmp24 = flag7;
    }
    if (tmp24) {
      tmp25 = c1;
      str9 = "\n";
      c1 = `${c1}
`;
    }
    c1 = `${c1}}`;
    return `${c1}}`;
  }
  set(arg0, arg1, arg2) {
    tmp = importDefault;
    self = this;
    if (!importDefault) {
      tmp2 = priv;
      str = "maxAge";
      tmp = priv(self, "maxAge");
    }
    num = 0;
    if (tmp) {
      tmp3 = globalThis;
      _Date = Date;
      num = Date.now();
    }
    obj = priv(self, "lengthCalculator");
    callResult = obj.call(self, require, global);
    obj2 = priv(self, "cache");
    if (obj2.has(global)) {
      tmp24 = priv;
      str6 = "max";
      if (callResult > priv(self, "max")) {
        tmp32 = del;
        tmp33 = priv;
        obj6 = priv(self, "cache");
        tmp34 = del(self, obj6.get(global));
        flag3 = false;
        return false;
      } else {
        tmp35 = priv;
        obj7 = priv(self, "cache");
        iter = obj7.get(global).value;
        str8 = "dispose";
        if (priv(self, "dispose")) {
          tmp25 = priv;
          obj5 = priv(self, "dispose");
          callResult1 = obj5.call(self, global, iter.value);
        }
        iter.now = num;
        iter.maxAge = tmp;
        iter.value = require;
        tmp27 = priv;
        str7 = "length";
        tmp28 = priv(self, "length", priv(self, "length") + (callResult - iter.length));
        iter.length = callResult;
        value = self.get(global);
        tmp30 = trim;
        tmp31 = trim(self);
        flag2 = true;
        return true;
      }
    } else {
      tmp5 = Entry;
      prototype = Entry.prototype;
      tmp6 = new.target;
      tmp7 = new.target;
      tmp8 = global;
      tmp9 = require;
      tmp10 = callResult;
      tmp11 = num;
      tmp12 = tmp;
      arr = new Entry(global, require, callResult, num, tmp);
      tmp13 = arr;
      tmp14 = priv;
      str2 = "max";
      if (arr.length > priv(self, "max")) {
        tmp21 = priv;
        str5 = "dispose";
        flag = false;
        if (priv(self, "dispose")) {
          tmp22 = priv;
          obj4 = priv(self, "dispose");
          callResult2 = obj4.call(self, global, require);
          flag = false;
        }
      } else {
        tmp15 = priv;
        str3 = "length";
        tmp16 = priv(self, "length", priv(self, "length") + arr.length);
        str4 = "lruList";
        arr2 = priv(self, "lruList");
        arr = arr2.unshift(arr);
        obj3 = priv(self, "cache");
        result = obj3.set(global, priv(self, "lruList").head);
        tmp19 = trim;
        tmp20 = trim(self);
        flag = true;
      }
      return flag;
    }
  }
  has(arg0) {
    self = this;
    obj = priv(this, "cache");
    tmp = !obj.has(global);
    tmp2 = !tmp;
    if (!tmp) {
      tmp3 = isStale;
      tmp4 = priv;
      obj2 = priv(self, "cache");
      tmp2 = !isStale(self, obj2.get(global).value);
    }
    return tmp2;
  }
  get(arg0) {
    return get(this, global, true);
  }
  peek(arg0) {
    return get(this, global, false);
  }
  pop() {
    iter = priv(this, "lruList").tail;
    value = null;
    if (iter) {
      tmp2 = del;
      tmp3 = del(this, iter);
      value = iter.value;
    }
    return value;
  }
  del(arg0) {
    obj = priv(this, "cache");
    tmp = del(this, obj.get(global));
    return;
  }
  load(arg0) {
    self = this;
    resetResult = this.reset();
    diff = global.length - 1;
    if (diff >= 0) {
      do {
        tmp5 = global[diff];
        tmp6 = tmp5.e || 0;
        if (0 === tmp6) {
          result = self.set(tmp5.k, tmp5.v);
          tmp8 = tmp4;
        } else {
          diff1 = tmp6 - tmp2;
          tmp8 = diff1;
          if (diff1 > 0) {
            result1 = self.set(tmp5.k, tmp5.v, diff1);
            tmp8 = diff1;
          }
        }
        diff = diff - 1;
        tmp4 = tmp8;
      } while (diff >= 0);
    }
    return;
  }
  prune() {
    self = this;
    arr = priv(this, "cache");
    item = arr.forEach((arg0, arg1) => {
      outer1_8(self, arg1, false);
    });
    return;
  }
}
function forEachStep(self, call, iter, arg3) {
  const value = iter.value;
  iter = value;
  if (isStale(self, value)) {
    del(self, iter);
    iter = value;
  }
  if (iter) {
    call.call(arg3, iter.value, iter.key, self);
  }
}
function get(self) {
  const iter = priv(self, "cache").get(arg1);
  let value;
  if (iter) {
    value = iter.value;
    if (isStale(self, value)) {
      del(self, iter);
      let iter2 = value;
    } else {
      iter2 = value;
      if (arg2) {
        priv(self, "lruList").unshiftNode(iter);
        iter2 = value;
        const obj2 = priv(self, "lruList");
      }
    }
    value = iter2;
    if (iter2) {
      value = iter2.value;
    }
  }
  return value;
}
function isStale(self, maxAge) {
  if (maxAge) {
    const _Date = Date;
    const diff = Date.now() - maxAge.now;
    if (maxAge.maxAge) {
      let tmp5 = diff > maxAge.maxAge;
    } else {
      tmp5 = priv(self, "maxAge");
      if (tmp5) {
        tmp5 = diff > priv(self, "maxAge");
      }
    }
    return tmp5;
  }
  return false;
}
function trim(self) {
  if (tmp > priv(self, "max")) {
    let tail = priv(self, "lruList").tail;
    if (tmp3 > priv(self, "max")) {
      if (null !== tail) {
        const prev = tail.prev;
        del(self, tail);
        while (tmp8 > priv(self, "max")) {
          tail = prev;
          if (null === prev) {
            break;
          }
        }
        tmp8 = priv(self, "length");
      }
    }
    tmp3 = priv(self, "length");
  }
}
function del(self, value) {
  if (value) {
    if (priv(self, "dispose")) {
      self = this;
      priv(self, "dispose").call(this, iter.key, iter.value);
      const obj = priv(self, "dispose");
    }
    priv(self, "length", priv(self, "length") - value.value.length);
    priv(self, "cache").delete(value.value.key);
    const obj2 = priv(self, "cache");
    priv(self, "lruList").removeNode(value);
    const obj3 = priv(self, "lruList");
  }
}
function Entry(key, value, arg2, now) {
  let num = arg4;
  this.key = key;
  this.value = value;
  this.length = arg2;
  this.now = now;
  if (!arg4) {
    num = 0;
  }
  this.maxAge = num;
}
let closure_3 = {};
let closure_2 = "function" === typeof Symbol ? (function makeSymbol(arg0) {
  return Symbol.for(arg0);
}) : (function makeSymbol(arg0) {
  return "_" + arg0;
});
let obj = {
  set(dispose) {
    let num = dispose;
    const self = this;
    let tmp = !dispose;
    if (!tmp) {
      tmp = "number" !== typeof num;
    }
    if (!tmp) {
      tmp = num <= 0;
    }
    if (tmp) {
      num = Infinity;
    }
    priv(self, "max", num);
    trim(self);
  },
  get() {
    return priv(this, "max");
  },
  enumerable: true
};
Object.defineProperty(LRUCache.prototype, "max", obj);
obj = {
  set(dispose) {
    priv(this, "allowStale", dispose);
  },
  get() {
    return priv(this, "allowStale");
  },
  enumerable: true
};
Object.defineProperty(LRUCache.prototype, "allowStale", obj);
obj = {
  set(dispose) {
    let num = dispose;
    const self = this;
    let tmp = !dispose;
    if (!tmp) {
      tmp = "number" !== typeof num;
    }
    if (!tmp) {
      tmp = num < 0;
    }
    if (tmp) {
      num = 0;
    }
    priv(self, "maxAge", num);
    trim(self);
  },
  get() {
    return priv(this, "maxAge");
  },
  enumerable: true
};
Object.defineProperty(LRUCache.prototype, "maxAge", obj);
Object.defineProperty(LRUCache.prototype, "lengthCalculator", {
  set(dispose) {
    let tmp = dispose;
    const self = this;
    if ("function" !== typeof dispose) {
      tmp = naiveLength;
    }
    if (tmp !== priv(self, "lengthCalculator")) {
      priv(self, "lengthCalculator", tmp);
      priv(self, "length", 0);
      const item = priv(self, "lruList").forEach(function(value) {
        value.length = outer1_4(this, "lengthCalculator").call(this, value.value, value.key);
        outer1_4(this, "length", outer1_4(this, "length") + value.length);
      }, self);
      const arr = priv(self, "lruList");
    }
    trim(self);
  },
  get() {
    return priv(this, "lengthCalculator");
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, "length", {
  get() {
    return priv(this, "length");
  },
  enumerable: true
});
Object.defineProperty(LRUCache.prototype, "itemCount", {
  get() {
    return priv(this, "lruList").length;
  },
  enumerable: true
});

export default LRUCache;
