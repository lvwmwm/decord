// Module ID: 1839
// Function ID: 20097
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1839 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(@@iterator) {
  let arg1 = Symbol_iterator;
  @@iterator = "undefined" !== typeof Symbol;
  if (Symbol_iterator) {
    const _Symbol = Symbol;
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (!Symbol_iterator) {
    @@iterator = Symbol_iterator[Symbol.iterator];
  }
  if (Symbol_iterator) {
    const iter = Symbol_iterator.call(Symbol_iterator);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = Symbol_iterator;
    if (!Array.isArray(Symbol_iterator)) {
      let tmp2;
      if (Symbol_iterator) {
        if ("string" === typeof Symbol_iterator) {
          tmp2 = _arrayLikeToArray(Symbol_iterator, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(Symbol_iterator).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = Symbol_iterator.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(Symbol_iterator, undefined);
              } else {
                const obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(Symbol_iterator);
          const callResult = toString.call(Symbol_iterator);
          const tmp3 = "Object" === substr && Symbol_iterator.constructor;
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
      arg1 = tmp;
    }
    let closure_1 = 0;
    return () => {
      if (closure_1 >= tmp.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = tmp[+closure_1];
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
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = Symbol("version");
let closure_9 = Object.freeze({});
let importDefaultResult = importDefault(dependencyMap[5]);
importDefaultResult = new importDefaultResult("LibdiscoreStore");
let closure_11 = () => {
  class SecondaryIndexMetadata {
    constructor(arg0, arg1, arg2, arg3, arg4) {
      tmp = closure_6(this, SecondaryIndexMetadata);
      this.type = arg0;
      this.kkvDatabase = arg1;
      this.k1key = arg2;
      this.k2key = arg3;
      this.shouldIndex = arg4;
      return;
    }
  }
  const arg1 = SecondaryIndexMetadata;
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
}();
const tmp4 = () => {
  class KVDatabase {
    constructor(arg0, arg1) {
      tmp = closure_6(this, KVDatabase);
      this.kkvDatabase = arg0;
      this.partition = arg1;
      return;
    }
  }
  const arg1 = KVDatabase;
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
}();
const tmp5 = () => {
  class KKVDatabase {
    constructor(arg0) {
      tmp = closure_6(this, KKVDatabase);
      this.nextVersion = arg0;
      this.secondaryIndexes = [];
      this.state = this.emptyState();
      return;
    }
  }
  const arg1 = KKVDatabase;
  let obj = {
    key: "addSecondaryKVIndex",
    value(arg0, arg1) {
      const obj = new KKVDatabase(this.nextVersion);
      const secondaryIndexes = this.secondaryIndexes;
      secondaryIndexes.push(new closure_11("kv", obj, arg0, undefined, arg1));
      return obj.intoKV();
    }
  };
  const items = [obj, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ];
  obj = {
    key: "addSecondaryKKVIndex",
    value(arg0, arg1, arg2) {
      const tmp = new KKVDatabase(this.nextVersion);
      const secondaryIndexes = this.secondaryIndexes;
      secondaryIndexes.push(new closure_11("kkv", tmp, arg0, arg1, arg2));
      return tmp;
    }
  };
  items[1] = obj;
  obj = {
    key: "intoKV",
    value(arg0) {
      let tmp = closure_12;
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
      const tmp = this.state.root[arg0];
      if (null == tmp) {
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
      const tmp = this.state.root[arg0];
      let tmp2;
      if (null != tmp) {
        tmp2 = tmp.root[arg1];
      }
      return null != tmp2;
    }
  };
  items[7] = {
    key: "getRecord",
    value(arg0, arg1) {
      const tmp = this.state.root[arg0];
      let tmp2;
      if (null != tmp) {
        tmp2 = tmp.root[arg1];
      }
      return tmp2;
    }
  };
  items[8] = {
    key: "getManyRecords",
    value(arg0, arg1) {
      let iter2;
      const tmp = this.state.root[arg0];
      if (null == tmp) {
        return [];
      } else {
        const items = [];
        const tmp4 = callback2(arg1);
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
      const tmp = this.state.root[arg0];
      return null != tmp ? tmp.root : closure_9;
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
      const tmp = this.state.root[arg0];
      let num = 0;
      if (null != tmp) {
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
      const tmp = this.state.root[arg0];
      let root = null;
      if (null != tmp) {
        root = tmp.root;
      }
      return root;
    }
  };
  items[16] = {
    key: "_derivedVersion",
    value(arg0) {
      const self = this;
      let tmp = arg0[closure_8];
      if (null == tmp) {
        const nextVersionResult = self.nextVersion();
        arg0[closure_8] = nextVersionResult;
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
      }
      return items;
    }
  };
  items[18] = {
    key: "memoizedPartition",
    value(arg0, arg1) {
      let tmp = arg1;
      const KKVDatabase = this;
      let closure_2 = Symbol();
      if (undefined === arg1) {
        tmp = arg0("", {});
      }
      return (arg0) => {
        if (null == self.state.root[arg0]) {
          return tmp;
        } else {
          const memoized = tmp.derived.memoized;
          let tmp3 = memoized[closure_2];
          const _Object = Object;
          if (!hasOwnProperty.call(memoized, closure_2)) {
            const tmp6 = arg0(arg0, tmp.root);
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
      const KKVDatabase = this;
      let closure_3 = Symbol();
      if (undefined === arg2) {
        tmp = arg1(closure_9);
      }
      return () => {
        if (null == self.state.root[closure_1]) {
          return tmp;
        } else {
          const memoized = tmp.derived.memoized;
          let tmp3 = memoized[closure_3];
          const _Object = Object;
          if (!hasOwnProperty.call(memoized, closure_3)) {
            const tmp6 = arg1(tmp.root);
            memoized[closure_3] = tmp6;
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
      const KKVDatabase = this;
      let closure_2 = Symbol();
      return () => {
        const memoized = self.state.derived.memoized;
        let tmp = memoized[closure_2];
        if (!hasOwnProperty.call(memoized, closure_2)) {
          const tmp4 = arg0(self.state.root);
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
      return { root: {}, version: this.nextVersion(), derived: { memoized: {} } };
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
      const tmp = callback2(this.secondaryIndexes);
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
      let flag = null != tmp2;
      if (flag) {
        const _Object = Object;
        const result = self.updateSecondaryIndexes(undefined, Object.values(tmp2.root), nextVersionResult);
        const root = self.state.root;
        delete r3[r5];
        let derived = self.state.derived;
        derived.numPartitions = derived.numPartitions - 1;
        self.state.version = nextVersionResult;
        self.state.derived.memoized = {};
        derived = self.state.derived;
        derived.length = derived.length - tmp2.derived.length;
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
      } else if (null == tmp2.root[arg1]) {
        return tmp5;
      } else {
        const items = [tmp4];
        const result = obj.updateSecondaryIndexes(undefined, items, nextVersionResult);
        const root = tmp2.root;
        delete r5[r6];
        let derived = tmp2.derived;
        derived.length = derived.length - 1;
        if (0 === tmp2.derived.length) {
          const root2 = obj.state.root;
          delete r2[r4];
          derived = obj.state.derived;
          derived.numPartitions = derived.numPartitions - 1;
        } else {
          tmp2.derived.memoized = {};
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
        const obj = {};
        const merged = Object.assign(tmp2);
        const merged1 = Object.assign(arg2);
        const tmp10 = arg3(obj);
        const items = [tmp10];
        const items1 = [self.state.root[arg0].root[arg1]];
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
      const tmp = callback2(this.secondaryIndexes);
      const iter = tmp();
      let iter2 = iter;
      if (!iter.done) {
        do {
          let value = iter2.value;
          let tmp7 = tmp2;
          let tmp8 = tmp3;
          if (undefined !== arg1) {
            let tmp29 = closure_15;
            let tmp30 = closure_15(arg1);
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
                let iter3 = tmp30();
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
            let tmp33 = closure_15;
            let tmp34 = closure_15(arg0);
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
                let iter5 = tmp34();
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
          let tmp4 = tmp15;
          let tmp5 = tmp16;
          let tmp6 = tmp17;
          iter2 = iter7;
          let tmp2 = tmp7;
          let tmp3 = tmp8;
        } while (!iter7.done);
      }
    }
  };
  return callback2(KKVDatabase, items);
}();
const tmp6 = (Store) => {
  class LibdiscoreStore {
    constructor(arg0) {
      str = arg1;
      self = this;
      LibdiscoreStore = Store;
      if (arg1 === undefined) {
        str = "typescript";
      }
      apply = undefined;
      closure_2 = undefined;
      Store = undefined;
      tmp = closure_6(self, LibdiscoreStore);
      obj = {};
      closure_2 = obj;
      if ("typescript" === str) {
        tmp3 = Store;
        for (const key10013 in arg0) {
          tmp14 = key10013;
          closure_3 = key10013;
          tmp2Result = tmp2();
        }
      } else {
        str2 = "typescript-libdiscore-dual-read";
      }
      items = [, ];
      items[0] = apply(closure_2[6]);
      items[1] = obj;
      obj2 = closure_4(LibdiscoreStore);
      tmp4 = Store;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_4;
        constructResult = Reflect.construct(obj2, items, closure_4(self).constructor);
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
  const arg1 = LibdiscoreStore;
  callback(LibdiscoreStore, Store);
  let obj = {
    key: "getMode",
    value: function getMode() {
      return this.mode;
    }
  };
  const items = [obj, , , , , , , , , , ];
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
      const LibdiscoreStore = this;
      const self = this;
      let closure_2 = Symbol("didValidatePartition");
      let closure_3 = { root: {}, derived: { length: 0, memoized: {} } };
      this.addChangeListener(() => {
        const shadowDatabases = self.shadowDatabases;
        const self = shadowDatabases;
        if (null != shadowDatabases) {
          if (!self.dualReadValidationDisabled) {
            for (const key10011 in closure_0.state.databases) {
              let tmp4 = key10011;
              closure_1 = key10011;
              let tmp2Result = tmp2();
            }
          }
        }
      });
    }
  };
  items[4] = {
    key: "addKKVDatabase",
    value: function addKKVDatabase(guildStickers, closure_13) {
      let tmp = closure_13;
      const self = this;
      const nextVersion = this.nextVersion;
      const tmp2 = new ctor(nextVersion.bind(this));
      this.state.databases[guildStickers] = tmp2;
      const recordCreators = this.recordCreators;
      let tmp3 = closure_13;
      if (null == closure_13) {
        tmp3 = closure_17;
      }
      const result = recordCreators.set(guildStickers, tmp3);
      if (null != self.shadowDatabases) {
        const nextVersion2 = self.nextVersion;
        const prototype = ctor.prototype;
        const tmp8 = new ctor(nextVersion2.bind(self));
        self.shadowDatabases[guildStickers] = tmp8;
        const shadowRecordCreators = self.shadowRecordCreators;
        if (null == tmp) {
          tmp = closure_17;
        }
        const result1 = shadowRecordCreators.set(guildStickers, tmp);
      }
      return tmp2;
    }
  };
  items[5] = {
    key: "addKVDatabase",
    value: function addKVDatabase(guilds, closure_20) {
      let tmp = closure_20;
      const self = this;
      const nextVersion = this.nextVersion;
      const obj = new ctor(nextVersion.bind(this));
      this.state.databases[guilds] = obj;
      const recordCreators = this.recordCreators;
      let tmp3 = closure_20;
      if (null == closure_20) {
        tmp3 = closure_17;
      }
      const result = recordCreators.set(guilds, tmp3);
      if (null != self.shadowDatabases) {
        const nextVersion2 = self.nextVersion;
        const prototype = ctor.prototype;
        const tmp8 = new ctor(nextVersion2.bind(self));
        self.shadowDatabases[guilds] = tmp8;
        const shadowRecordCreators = self.shadowRecordCreators;
        if (null == tmp) {
          tmp = closure_17;
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
      const tmp2 = callback4(databaseChanges);
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
        const tmp23 = callback4(opcodes);
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
            let tmp15 = tmp2;
            iter3 = iter2;
          } while (!iter2.done);
        }
      }
      const obj = flag ? self.shadowRecordCreators : self.recordCreators;
    }
  };
  items[10] = {
    key: "nextVersion",
    value: function nextVersion() {
      const tmp = +this._nextVersion;
      this._nextVersion = tmp + 1;
      return tmp;
    }
  };
  return callback2(LibdiscoreStore, items);
}(arg1(dependencyMap[8]).Store);
const result = arg1(dependencyMap[9]).fileFinishedImporting("modules/libdiscore/stores/LibdiscoreStore.tsx");

export const KVDatabase = tmp4;
export const KKVDatabase = tmp5;
export const LibdiscoreStore = tmp6;
