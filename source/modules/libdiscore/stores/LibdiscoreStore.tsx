// Module ID: 1839
// Function ID: 20099
// Name: _isNativeReflectConstruct
// Dependencies: [15, 17, 18, 6, 7, 3, 686, 1840, 566, 2]

// Module 1839 (_isNativeReflectConstruct)
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import dispatcher from "dispatcher";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "_classCallCheck";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
        }
      }
      tmp = tmp2;
      if (!tmp2) {
        const _TypeError = TypeError;
        const typeError = new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        throw typeError;
      }
    }
    if (tmp) {
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
      }
      return obj;
    };
  }
}
function _arrayLikeToArray(arg0, arg1) {
  let length;
  if (tmp) {
    length = arg0.length;
  }
  const ArrayResult = Array(length);
  for (let num = 0; num < length; num = num + 1) {
    ArrayResult[num] = arg0[num];
  }
  return ArrayResult;
}
function identity(arg0) {
  return arg0;
}
let closure_8 = Symbol("version");
let closure_9 = Object.freeze({});
importDefaultResult = new importDefaultResult("LibdiscoreStore");
let closure_11 = (() => {
  class SecondaryIndexMetadata {
    constructor(arg0, arg1, arg2, arg3, arg4) {
      tmp = outer1_6(this, SecondaryIndexMetadata);
      this.type = arg0;
      this.kkvDatabase = arg1;
      this.k1key = arg2;
      this.k2key = arg3;
      this.shouldIndex = arg4;
      return;
    }
  }
  let obj = {
    key: "getK1Key",
    value(arg0) {
      let self = this;
      if ("kv" === this.type) {
        return "0";
      } else if ("string" === typeof self.k1key) {
        self = self.k1key;
        let k1keyResult = arg0[self];
      } else {
        k1keyResult = self.k1key(arg0);
      }
    }
  };
  const items = [obj, ];
  obj = {
    key: "getK2Key",
    value(arg0) {
      const self = this;
      const tmp = "kv" === this.type ? self.k1key : self.k2key;
      if (null == self.shouldIndex) {
        if (null != tmp) {
          if ("string" === typeof tmp) {
            let tmpResult = arg0[tmp];
          } else {
            tmpResult = tmp(arg0);
          }
          return tmpResult;
        }
      }
    }
  };
  items[1] = obj;
  return callback2(SecondaryIndexMetadata, items);
})();
let tmp4 = (() => {
  class KVDatabase {
    constructor(arg0, arg1) {
      tmp = outer1_6(this, KVDatabase);
      this.kkvDatabase = arg0;
      this.partition = arg1;
      return;
    }
  }
  let obj = {
    key: "set",
    value(arg0, arg1) {
      const kkvDatabase = this.kkvDatabase;
      kkvDatabase.setRecord(this.partition, arg0, arg1);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "get",
    value(arg0) {
      const kkvDatabase = this.kkvDatabase;
      return kkvDatabase.getRecord(this.partition, arg0);
    }
  };
  items[1] = obj;
  obj = {
    key: "has",
    value(arg0) {
      const kkvDatabase = this.kkvDatabase;
      return kkvDatabase.hasRecord(this.partition, arg0);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getAllRecords",
    value() {
      const kkvDatabase = this.kkvDatabase;
      return kkvDatabase.getPartition(this.partition);
    }
  };
  items[4] = {
    key: "remove",
    value(arg0) {
      const kkvDatabase = this.kkvDatabase;
      return kkvDatabase.removeRecord(this.partition, arg0);
    }
  };
  items[5] = {
    key: "clear",
    value() {
      const kkvDatabase = this.kkvDatabase;
      kkvDatabase.removePartition(this.partition);
      const kkvDatabase2 = this.kkvDatabase;
      kkvDatabase2.setPartition(this.partition, {});
    }
  };
  items[6] = {
    key: "length",
    value() {
      const kkvDatabase = this.kkvDatabase;
      return kkvDatabase.partitionLength(this.partition);
    }
  };
  items[7] = {
    key: "version",
    value() {
      const kkvDatabase = this.kkvDatabase;
      let partitionVersionResult = kkvDatabase.partitionVersion(this.partition);
      if (null == partitionVersionResult) {
        const kkvDatabase2 = this.kkvDatabase;
        partitionVersionResult = kkvDatabase2.version();
      }
      return partitionVersionResult;
    }
  };
  items[8] = {
    key: "memoized",
    value(arg0, arg1) {
      const kkvDatabase = this.kkvDatabase;
      return kkvDatabase.memoizedSinglePartition(this.partition, arg0, arg1);
    }
  };
  return callback2(KVDatabase, items);
})();
let closure_12 = tmp4;
let tmp5 = (() => {
  class KKVDatabase {
    constructor(arg0) {
      tmp = outer1_6(this, KKVDatabase);
      this.nextVersion = arg0;
      this.secondaryIndexes = [];
      this.state = this.emptyState();
      return;
    }
  }
  let obj = {
    key: "addSecondaryKVIndex",
    value(arg0, arg1) {
      const obj = new KKVDatabase(this.nextVersion);
      const secondaryIndexes = this.secondaryIndexes;
      secondaryIndexes.push(new outer1_11("kv", obj, arg0, undefined, arg1));
      return obj.intoKV();
    }
  };
  let items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "addSecondaryKKVIndex",
    value(arg0, arg1, arg2) {
      const tmp = new KKVDatabase(this.nextVersion);
      const secondaryIndexes = this.secondaryIndexes;
      secondaryIndexes.push(new outer1_11("kkv", tmp, arg0, arg1, arg2));
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "intoKV",
    value(arg0) {
      let tmp = outer1_12;
      let str = "0";
      if (null != arg0) {
        str = arg0;
      }
      tmp = new tmp(this, str);
      return tmp;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "version",
    value() {
      return this.state.version;
    }
  };
  items[4] = {
    key: "partitionVersion",
    value(arg0) {
      const self = this;
      if (null == this.state.root[arg0]) {
        let versionResult = self.version();
      } else {
        versionResult = self._derivedVersion(tmp.derived.memoized);
      }
      return versionResult;
    }
  };
  items[5] = {
    key: "hasPartition",
    value(arg0) {
      return null != this.state.root[arg0];
    }
  };
  items[6] = {
    key: "hasRecord",
    value(arg0, arg1) {
      let tmp2;
      if (null != this.state.root[arg0]) {
        tmp2 = tmp.root[arg1];
      }
      return null != tmp2;
    }
  };
  items[7] = {
    key: "getRecord",
    value(arg0, arg1) {
      let tmp2;
      if (null != this.state.root[arg0]) {
        tmp2 = tmp.root[arg1];
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "getManyRecords",
    value(arg0, arg1) {
      let iter2;
      if (null == this.state.root[arg0]) {
        return [];
      } else {
        const items = [];
        const tmp4 = outer1_15(arg1);
        let iter = tmp4();
        if (!iter.done) {
          do {
            let tmp5 = tmp.root[iter.value];
            if (null != tmp5) {
              let arr = items.push(tmp5);
            }
            iter2 = tmp4();
            iter = iter2;
          } while (!iter2.done);
        }
        return items;
      }
    }
  };
  items[9] = {
    key: "getPartition",
    value(arg0) {
      return null != this.state.root[arg0] ? this.state.root[arg0].root : outer1_9;
    }
  };
  items[10] = {
    key: "getAllPartitions",
    value() {
      return this.state.root;
    }
  };
  items[11] = {
    key: "getPartitionKeys",
    value() {
      return Object.keys(this.state.root);
    }
  };
  items[12] = {
    key: "partitionLength",
    value(arg0) {
      let num = 0;
      if (null != this.state.root[arg0]) {
        num = tmp.derived.length;
      }
      return num;
    }
  };
  items[13] = {
    key: "length",
    value() {
      return this.state.derived.length;
    }
  };
  items[14] = {
    key: "numPartitions",
    value() {
      return this.state.derived.numPartitions;
    }
  };
  items[15] = {
    key: "getNullablePartition",
    value(arg0) {
      let root = null;
      if (null != this.state.root[arg0]) {
        root = tmp.root;
      }
      return root;
    }
  };
  items[16] = {
    key: "_derivedVersion",
    value(arg0) {
      const self = this;
      let tmp = arg0[outer1_8];
      if (null == tmp) {
        const nextVersionResult = self.nextVersion();
        arg0[outer1_8] = nextVersionResult;
        tmp = nextVersionResult;
      }
      return tmp;
    }
  };
  items[17] = {
    key: "mapPartitions",
    value(arg0) {
      const items = [];
      const root = this.state.root;
      for (const key10008 in root) {
        let tmp = key10008;
        let obj = { partitionKey: key10008, values: arg0(root[key10008].root, key10008) };
        let arr = items.push(obj);
        continue;
      }
      return items;
    }
  };
  items[18] = {
    key: "memoizedPartition",
    value(arg0, arg1) {
      let tmp = arg1;
      const self = this;
      let closure_1 = arg0;
      let closure_2 = Symbol();
      if (undefined === arg1) {
        tmp = arg0("", {});
      }
      let _possibleConstructorReturn = tmp;
      return (arg0) => {
        if (null == self.state.root[arg0]) {
          return _possibleConstructorReturn;
        } else {
          const memoized = tmp.derived.memoized;
          let tmp3 = memoized[closure_2];
          const _Object = Object;
          if (!hasOwnProperty.call(memoized, closure_2)) {
            const tmp6 = callback(arg0, tmp.root);
            memoized[closure_2] = tmp6;
            tmp3 = tmp6;
          }
          return tmp3;
        }
      };
    }
  };
  items[19] = {
    key: "memoizedSinglePartition",
    value(arg0, arg1, arg2) {
      let tmp = arg2;
      const self = this;
      let closure_1 = arg0;
      let closure_2 = arg1;
      let _possibleConstructorReturn = Symbol();
      if (undefined === arg2) {
        tmp = arg1(outer1_9);
      }
      let _getPrototypeOf = tmp;
      return () => {
        if (null == self.state.root[closure_1]) {
          return _getPrototypeOf;
        } else {
          const memoized = tmp.derived.memoized;
          let tmp3 = memoized[_possibleConstructorReturn];
          const _Object = Object;
          if (!hasOwnProperty.call(memoized, _possibleConstructorReturn)) {
            const tmp6 = callback(tmp.root);
            memoized[_possibleConstructorReturn] = tmp6;
            tmp3 = tmp6;
          }
          return tmp3;
        }
      };
    }
  };
  items[20] = {
    key: "memoized",
    value(arg0) {
      const self = this;
      let closure_1 = arg0;
      let closure_2 = Symbol();
      return () => {
        const memoized = self.state.derived.memoized;
        let tmp = memoized[closure_2];
        if (!hasOwnProperty.call(memoized, closure_2)) {
          const tmp4 = callback(self.state.root);
          memoized[closure_2] = tmp4;
          tmp = tmp4;
        }
        return tmp;
      };
    }
  };
  items[21] = {
    key: "emptyState",
    value() {
      obj = { root: {}, version: this.nextVersion(), derived: obj };
      obj = { length: 0, numPartitions: 0, memoized: {} };
      return obj;
    }
  };
  items[22] = {
    key: "emptyPartitionState",
    value(arg0) {
      let nextVersionResult = arg0;
      const self = this;
      const obj = { root: {} };
      if (null == arg0) {
        nextVersionResult = self.nextVersion();
      }
      obj.version = nextVersionResult;
      obj.derived = { length: 0, memoized: {} };
      return obj;
    }
  };
  items[23] = {
    key: "clear",
    value() {
      let done;
      this.state = this.emptyState();
      const tmp = outer1_15(this.secondaryIndexes);
      let iter = tmp();
      if (!iter.done) {
        do {
          let kkvDatabase = iter.value.kkvDatabase;
          let clearResult = kkvDatabase.clear();
          let iter2 = tmp();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[24] = {
    key: "removePartition",
    value(arg0, arg1) {
      let nextVersionResult = arg1;
      const self = this;
      if (arg1 == null) {
        nextVersionResult = self.nextVersion();
      }
      let flag = null != tmp4;
      if (flag) {
        const _Object = Object;
        const result = self.updateSecondaryIndexes(undefined, Object.values(tmp4.root), nextVersionResult);
        const root = self.state.root;
        delete tmp[tmp2];
        let derived = self.state.derived;
        derived.numPartitions = derived.numPartitions - 1;
        self.state.version = nextVersionResult;
        self.state.derived.memoized = {};
        derived = self.state.derived;
        derived.length = derived.length - tmp4.derived.length;
        flag = true;
      }
      return flag;
    }
  };
  items[25] = {
    key: "removeRecord",
    value(arg0, arg1, arg2) {
      let nextVersionResult = arg2;
      let obj = this;
      if (arg2 == null) {
        nextVersionResult = obj.nextVersion();
      }
      if (null == obj.state.root[arg0]) {
        return false;
      } else if (null == tmp6.root[arg1]) {
        return tmp9;
      } else {
        const items = [tmp8];
        const result = obj.updateSecondaryIndexes(undefined, items, nextVersionResult);
        const root = tmp6.root;
        delete tmp3[tmp4];
        let derived = tmp6.derived;
        derived.length = derived.length - 1;
        if (0 === tmp6.derived.length) {
          const root2 = obj.state.root;
          delete tmp[tmp2];
          derived = obj.state.derived;
          derived.numPartitions = derived.numPartitions - 1;
        } else {
          tmp6.derived.memoized = {};
        }
        const derived1 = obj.state.derived;
        derived1.length = derived1.length - 1;
        obj.state.version = nextVersionResult;
        obj = {};
        obj.state.derived.memoized = obj;
      }
    }
  };
  items[26] = {
    key: "updateRecord",
    value(arg0, arg1, arg2, arg3, arg4) {
      let nextVersionResult = arg4;
      const self = this;
      if (arg4 == null) {
        nextVersionResult = self.nextVersion();
      }
      if (null == self.state.root[arg0]) {
        const _Error2 = Error;
        const _HermesInternal2 = HermesInternal;
        const error = new Error("Partition " + arg0 + " does not exist");
        throw error;
      } else if (null == self.state.root[arg0].root[arg1]) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error1 = new Error("Record " + arg1 + " does not exist in partition " + arg0);
        throw error1;
      } else {
        const tmp2 = self.state.root[arg0].root[arg1];
        const obj = {};
        const merged = Object.assign(tmp2);
        const merged1 = Object.assign(arg2);
        const tmp10 = arg3(obj);
        const items = [tmp10];
        const items1 = [tmp2];
        const result = self.updateSecondaryIndexes(items, items1, nextVersionResult);
        self.touchPartition(arg0, nextVersionResult).root[arg1] = tmp10;
        return true;
      }
    }
  };
  items[27] = {
    key: "touchPartition",
    value(arg0, arg1) {
      let nextVersionResult = arg1;
      const self = this;
      if (arg1 == null) {
        nextVersionResult = self.nextVersion();
      }
      if (null == self.state.root[arg0]) {
        self.state.root[arg0] = self.emptyPartitionState(nextVersionResult);
        const derived = self.state.derived;
        derived.numPartitions = derived.numPartitions + 1;
      } else {
        self.state.root[arg0].version = nextVersionResult;
        self.state.root[arg0].derived.memoized = {};
      }
      self.state.version = nextVersionResult;
      self.state.derived.memoized = {};
      return self.state.root[arg0];
    }
  };
  items[28] = {
    key: "setRecord",
    value(arg0, arg1, arg2, arg3) {
      let nextVersionResult = arg3;
      const self = this;
      if (arg3 == null) {
        nextVersionResult = self.nextVersion();
      }
      const touchPartitionResult = self.touchPartition(arg0, nextVersionResult);
      if (null == touchPartitionResult.root[arg1]) {
        const derived = touchPartitionResult.derived;
        derived.length = derived.length + 1;
        const derived1 = self.state.derived;
        derived1.length = derived1.length + 1;
      }
      touchPartitionResult.root[arg1] = arg2;
      const items = [arg2];
      const result = self.updateSecondaryIndexes(items, undefined, nextVersionResult);
      return true;
    }
  };
  items[29] = {
    key: "setPartition",
    value(arg0, root) {
      let nextVersionResult = arg2;
      const self = this;
      if (arg2 == null) {
        nextVersionResult = self.nextVersion();
      }
      self.removePartition(arg0, nextVersionResult);
      const length = Object.keys(root).length;
      if (0 === length) {
        return true;
      } else {
        const _Object = Object;
        const result = self.updateSecondaryIndexes(Object.values(root), undefined, nextVersionResult);
        const touchPartitionResult = self.touchPartition(arg0, nextVersionResult);
        touchPartitionResult.root = root;
        touchPartitionResult.derived.length = length;
        const derived = self.state.derived;
        derived.length = derived.length + length;
        return true;
      }
    }
  };
  items[30] = {
    key: "updateSecondaryIndexes",
    value(arg0, arg1, arg2) {
      let iter7;
      const tmp = outer1_15(this.secondaryIndexes);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp7 = tmp2;
          let tmp8 = tmp3;
          if (undefined !== arg1) {
            let tmp29 = outer1_15;
            let tmp30 = outer1_15(arg1);
            let iter8 = tmp30();
            let iter4 = iter8;
            let tmp31 = iter8;
            let tmp32 = tmp30;
            tmp7 = tmp2;
            tmp8 = tmp3;
            if (!iter8.done) {
              do {
                value = iter4.value;
                let k1Key = value.getK1Key(value);
                let k2Key = value.getK2Key(value);
                let tmp11 = null != k1Key && null != k2Key;
                if (tmp11) {
                  let kkvDatabase = value.kkvDatabase;
                  let removeRecordResult = kkvDatabase.removeRecord(k1Key, k2Key, arg2);
                }
                iter3 = tmp30();
                iter4 = iter3;
                let tmp13 = iter3;
                let tmp14 = tmp30;
                tmp7 = k1Key;
                tmp8 = k2Key;
              } while (!iter3.done);
            }
          }
          let tmp15 = tmp4;
          let tmp16 = tmp5;
          let tmp17 = tmp6;
          if (undefined !== arg0) {
            let tmp33 = outer1_15;
            let tmp34 = outer1_15(arg0);
            let iter9 = tmp34();
            let iter6 = iter9;
            let tmp35 = iter9;
            let tmp36 = tmp34;
            tmp15 = tmp4;
            tmp16 = tmp5;
            tmp17 = tmp6;
            if (!iter9.done) {
              do {
                value = iter6.value;
                let k1Key1 = value.getK1Key(value);
                let k2Key1 = value.getK2Key(value);
                let tmp20 = null != k1Key1 && null != k2Key1;
                if (tmp20) {
                  let kkvDatabase2 = value.kkvDatabase;
                  let tmp21 = kkvDatabase2;
                  let tmp22 = k1Key1;
                  let tmp23 = k2Key1;
                  let tmp24 = value;
                  let tmp25 = arg2;
                  let setRecordResult = kkvDatabase2.setRecord(k1Key1, k2Key1, value, arg2);
                }
                iter5 = tmp34();
                iter6 = iter5;
                let tmp27 = iter5;
                let tmp28 = tmp34;
                tmp15 = value;
                tmp16 = k1Key1;
                tmp17 = k2Key1;
              } while (!iter5.done);
            }
          }
          iter7 = tmp();
          tmp4 = tmp15;
          tmp5 = tmp16;
          tmp6 = tmp17;
          iter2 = iter7;
          tmp2 = tmp7;
          tmp3 = tmp8;
        } while (!iter7.done);
      }
    }
  };
  return callback2(KKVDatabase, items);
})();
let closure_13 = tmp5;
let tmp6 = ((Store) => {
  class LibdiscoreStore {
    constructor(arg0) {
      str = arg1;
      self = this;
      closure_0 = Store;
      if (arg1 === undefined) {
        str = "typescript";
      }
      apply = undefined;
      c2 = undefined;
      _possibleConstructorReturn = undefined;
      tmp = outer1_6(self, closure_0);
      obj = {};
      c2 = obj;
      if ("typescript" === str) {
        tmp3 = Store;
        for (const key10013 in arg0) {
          tmp14 = key10013;
          _possibleConstructorReturn = key10013;
          tmp2Result = tmp2();
          continue;
        }
      } else {
        str2 = "typescript-libdiscore-dual-read";
      }
      items = [, ];
      items[0] = outer1_1(outer1_2[6]);
      items[1] = obj;
      obj2 = outer1_4(closure_0);
      tmp4 = outer1_3;
      if (outer1_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = outer1_4;
        constructResult = Reflect.construct(obj2, items, outer1_4(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp4Result = tmp4(self, constructResult);
      apply = tmp4Result;
      tmp4Result.mode = str;
      tmp4Result._nextVersion = 0;
      map = new Map();
      tmp4Result.recordCreators = map;
      tmp4Result.wrappedState = null;
      tmp4Result.shadowDatabases = null;
      tmp4Result.shadowRecordCreators = null;
      tmp4Result.dualReadValidationDisabled = false;
      tmp4Result.state = { databases: {} };
      if ("typescript-libdiscore-dual-read" === str) {
        tmp4Result.shadowDatabases = {};
        _Map = Map;
        prototype = Map.prototype;
        tmp10 = new.target;
        tmp11 = new.target;
        map1 = new Map();
        tmp13 = map1;
        tmp4Result.shadowRecordCreators = map1;
      }
      return tmp4Result;
    }
  }
  callback(LibdiscoreStore, Store);
  let obj = {
    key: "getMode",
    value: function getMode() {
      return this.mode;
    }
  };
  let items = [obj, , , , , , , , , , ];
  obj = {
    key: "disableDualReadValidation",
    value: function disableDualReadValidation() {
      if ("typescript-libdiscore-dual-read" === this.mode) {
        tmp.dualReadValidationDisabled = true;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "connectWithLibdiscore",
    value: function connectWithLibdiscore(connectStore) {
      const self = this;
      if ("typescript" === this.mode) {
        const _Error = Error;
        const error = new Error("connectWithLibdiscore should not be called in TypeScript mode.");
        throw error;
      } else {
        const obj = { storeName: self.getName() };
        const _Object = Object;
        const keys = Object.keys(self.state.databases);
        obj.databases = keys.map((name) => ({ name, type: "kkv" }));
        const connectStoreResult = connectStore.connectStore(obj);
        self.applyChanges(connectStoreResult.initialState);
        if ("typescript-libdiscore-dual-read" === self.mode) {
          const result = self.setupDualReadValidation();
        }
        return connectStoreResult.storeToken;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "setupDualReadValidation",
    value: function setupDualReadValidation() {
      let self = this;
      self = this;
      let closure_2 = Symbol("didValidatePartition");
      let _possibleConstructorReturn = { root: {}, derived: { length: 0, memoized: {} } };
      this.addChangeListener(() => {
        shadowDatabases = shadowDatabases.shadowDatabases;
        if (null != shadowDatabases) {
          if (!shadowDatabases.dualReadValidationDisabled) {
            for (const key10011 in shadowDatabases.state.databases) {
              let tmp4 = key10011;
              let self = key10011;
              let tmp2Result = tmp2();
              continue;
            }
          }
        }
      });
    }
  };
  items[4] = {
    key: "addKKVDatabase",
    value: function addKKVDatabase(guildStickers, outer1_13) {
      let tmp = outer1_13;
      const self = this;
      const nextVersion = this.nextVersion;
      const tmp2 = new outer1_13(nextVersion.bind(this));
      this.state.databases[guildStickers] = tmp2;
      const recordCreators = this.recordCreators;
      let tmp3 = outer1_13;
      if (null == outer1_13) {
        tmp3 = outer1_17;
      }
      const result = recordCreators.set(guildStickers, tmp3);
      if (null != self.shadowDatabases) {
        const nextVersion2 = self.nextVersion;
        const prototype = outer1_13.prototype;
        const tmp8 = new outer1_13(nextVersion2.bind(self));
        self.shadowDatabases[guildStickers] = tmp8;
        const shadowRecordCreators = self.shadowRecordCreators;
        if (null == tmp) {
          tmp = outer1_17;
        }
        const result1 = shadowRecordCreators.set(guildStickers, tmp);
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "addKVDatabase",
    value: function addKVDatabase(guilds, outer1_20) {
      let tmp = outer1_20;
      const self = this;
      const nextVersion = this.nextVersion;
      const obj = new outer1_13(nextVersion.bind(this));
      this.state.databases[guilds] = obj;
      const recordCreators = this.recordCreators;
      let tmp3 = outer1_20;
      if (null == outer1_20) {
        tmp3 = outer1_17;
      }
      const result = recordCreators.set(guilds, tmp3);
      if (null != self.shadowDatabases) {
        const nextVersion2 = self.nextVersion;
        const prototype = outer1_13.prototype;
        const tmp8 = new outer1_13(nextVersion2.bind(self));
        self.shadowDatabases[guilds] = tmp8;
        const shadowRecordCreators = self.shadowRecordCreators;
        if (null == tmp) {
          tmp = outer1_17;
        }
        const result1 = shadowRecordCreators.set(guilds, tmp);
      }
      return obj.intoKV();
    }
  };
  items[6] = {
    key: "applyChanges",
    value: function applyChanges(databaseChanges) {
      let done;
      const self = this;
      const tmp2 = outer1_15(databaseChanges);
      let iter = tmp2();
      if (!iter.done) {
        do {
          let result = self.executeDatabaseChange(iter.value, tmp);
          let iter2 = tmp2();
          iter = iter2;
          done = iter2.done;
        } while (!done);
      }
    }
  };
  items[7] = {
    key: "clearAllDatabases",
    value: function clearAllDatabases() {
      for (const key10004 in this.state.databases) {
        let tmp2 = key10004;
        let obj = tmp.state.databases[key10004];
        let clearResult = obj.clear();
        continue;
      }
    }
  };
  items[8] = {
    key: "markDirty",
    value: function markDirty() {
      this._nextVersion = this._nextVersion + 1;
    }
  };
  items[9] = {
    key: "executeDatabaseChange",
    value: function executeDatabaseChange(value, arg1) {
      let clusteringKey;
      let databaseName;
      let iter2;
      let opcodes;
      let partitionKey;
      let flag = arg1;
      const self = this;
      if (arg1 === undefined) {
        flag = false;
      }
      ({ databaseName, opcodes } = value);
      const nextVersionResult = self.nextVersion();
      if (flag) {
        let databases = self.shadowDatabases;
      } else {
        databases = self.state.databases;
      }
      if (null == databases[databaseName]) {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const error = new Error("Database " + databaseName + " does not exist");
        throw error;
      } else {
        value = obj.get(databaseName);
        const tmp23 = outer1_15(opcodes);
        const iter4 = tmp23();
        let iter3 = iter4;
        if (!iter4.done) {
          do {
            let iter = iter3.value;
            let opcode = iter.opcode;
            if ("removePartition" === opcode) {
              let removePartitionResult = obj2.removePartition(iter.partitionKey, nextVersionResult);
              let tmp2 = tmp15;
            } else if ("setPartition" === opcode) {
              let partition = iter.partition;
              let tmp12 = partition;
              for (const key10039 in partition) {
                let tmp25 = key10039;
                partition[key10039] = value(partition[key10039]);
                continue;
              }
              let setPartitionResult = obj2.setPartition(iter.partitionKey, partition, nextVersionResult);
              tmp2 = partition;
            } else if ("updateRecord" === opcode) {
              let tmp8 = obj2;
              let tmp9 = value;
              let tmp10 = nextVersionResult;
              let updateRecordResult = obj2.updateRecord(iter.partitionKey, iter.clusteringKey, iter.value, value, nextVersionResult);
              tmp2 = tmp15;
            } else if ("setRecord" === opcode) {
              ({ partitionKey, clusteringKey } = iter);
              let tmp4 = obj2;
              let tmp5 = partitionKey;
              let tmp6 = nextVersionResult;
              let setRecordResult = obj2.setRecord(partitionKey, clusteringKey, value(iter.value), nextVersionResult);
              tmp2 = tmp15;
            } else if ("removeRecord" === opcode) {
              let removeRecordResult = obj2.removeRecord(iter.partitionKey, iter.clusteringKey, nextVersionResult);
              tmp2 = tmp15;
            } else {
              tmp2 = tmp15;
              if ("clearDatabase" === opcode) {
                let clearResult = obj2.clear();
                tmp2 = tmp15;
              }
            }
            iter2 = tmp23();
            tmp15 = tmp2;
            iter3 = iter2;
          } while (!iter2.done);
        }
      }
      obj = flag ? self.shadowRecordCreators : self.recordCreators;
    }
  };
  items[10] = {
    key: "nextVersion",
    value: function nextVersion() {
      this._nextVersion = +this._nextVersion + 1;
      return +this._nextVersion;
    }
  };
  return callback2(LibdiscoreStore, items);
})(require("initialize").Store);
let result = require("_inherits").fileFinishedImporting("modules/libdiscore/stores/LibdiscoreStore.tsx");

export const KVDatabase = tmp4;
export const KKVDatabase = tmp5;
export const LibdiscoreStore = tmp6;
