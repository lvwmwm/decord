// Module ID: 1858
// Function ID: 20492
// Name: Record
// Dependencies: []

// Module 1858 (Record)
let closure_0 = importDefault(dependencyMap[0]);
let closure_1 = importDefault(dependencyMap[1]);
const tmp2 = () => {
  class Record {
    constructor() {
      tmp = Record(this, Record);
      return;
    }
  }
  let closure_0 = Record;
  let obj = {
    key: "toJS",
    value() {
      const merged = Object.assign(this);
      return {};
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "set",
    value(arg0, getTime) {
      const self = this;
      let obj = this[arg0];
      if (getTime instanceof Date) {
        const _Date = Date;
        if (obj instanceof Date) {
          const time = getTime.getTime();
          let tmp2 = self;
        }
        return tmp2;
      }
      let constructor = self;
      if (obj !== getTime) {
        constructor = self.constructor;
        obj = {};
        const merged = Object.assign(self);
        obj[arg0] = getTime;
        const prototype = constructor.prototype;
        constructor = new constructor(obj);
      }
      tmp2 = constructor;
    }
  };
  items[1] = obj;
  obj = {
    key: "merge",
    value(arg0) {
      const self = this;
      let tmp2 = null;
      let tmp3 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = tmp2;
        while (keys[tmp] !== undefined) {
          let tmp21 = tmp6;
          if (!arg0.hasOwnProperty(tmp6)) {
            continue;
          } else {
            let obj = self[tmp6];
            let obj2 = arg0[tmp6];
            let _Date = Date;
            let tmp7 = obj2 instanceof Date;
            if (tmp7) {
              let _Date2 = Date;
              tmp7 = obj instanceof Date;
            }
            if (tmp7) {
              let time = obj2.getTime();
              tmp7 = time === obj.getTime();
            }
            tmp2 = tmp5;
            let tmp9 = obj;
            let tmp10 = obj2;
            if (tmp7) {
              continue;
            } else {
              tmp2 = tmp5;
              if (obj !== obj2) {
                let tmp11 = tmp5;
                if (null == tmp5) {
                  obj = {};
                  let tmp12 = obj;
                  let tmp13 = self;
                  let merged = Object.assign(self);
                  tmp11 = obj;
                }
                tmp11[tmp6] = arg0[tmp6];
                tmp2 = tmp11;
              }
              let tmp15 = obj;
              let tmp16 = obj2;
              // continue
            }
            continue;
          }
          continue;
        }
      }
      let constructor = self;
      if (null != tmp3) {
        constructor = self.constructor;
        const prototype = constructor.prototype;
        constructor = new constructor(tmp3);
      }
      return constructor;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "update",
    value(arg0, arg1, arg2) {
      let tmp = arg2;
      const self = this;
      if (null == arg2) {
        tmp = arg1;
      }
      let tmp4 = tmp3;
      if (self[arg0] instanceof Record) {
        if (undefined === tmp4) {
          tmp4 = arg1;
        }
        return self.set(arg0, tmp(tmp4));
      } else {
        const _Array = Array;
        if (tmp3 instanceof Array) {
          const items = [];
          HermesBuiltin.arraySpread(tmp3, 0);
          let tmp6 = items;
        } else {
          const _Object = Object;
          tmp6 = tmp3;
          if (tmp3 instanceof Object) {
            const obj = {};
            const merged = Object.assign(tmp3);
            tmp6 = obj;
          }
        }
      }
    }
  };
  return callback(Record, items);
}();
const tmp3 = () => {
  class TypedRecord {
    constructor() {
      tmp = TypedRecord(this, TypedRecord);
      return;
    }
  }
  let closure_0 = TypedRecord;
  let obj = {
    key: "toJS",
    value() {
      const merged = Object.assign(this);
      return {};
    }
  };
  const items = [obj, , , ];
  obj = {
    key: "set",
    value(arg0, arg1) {
      return this.merge({ [arg0]: arg1 });
    }
  };
  items[1] = obj;
  obj = {
    key: "merge",
    value(arg0) {
      const self = this;
      let toJSResult = null;
      let tmp3 = null;
      const keys = Object.keys();
      if (keys !== undefined) {
        tmp3 = toJSResult;
        while (keys[tmp] !== undefined) {
          let tmp11 = tmp6;
          if (!arg0.hasOwnProperty(tmp6)) {
            continue;
          } else {
            toJSResult = tmp5;
            if (self[tmp6] === arg0[tmp6]) {
              continue;
            } else {
              toJSResult = tmp5;
              if (null == tmp5) {
                toJSResult = self.toJS();
              }
              toJSResult[tmp6] = arg0[tmp6];
              // continue
            }
            continue;
          }
          continue;
        }
      }
      let constructor = self;
      if (null != tmp3) {
        constructor = self.constructor;
        const prototype = constructor.prototype;
        constructor = new constructor(tmp3);
      }
      return constructor;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "update",
    value(arg0, arg1, arg2) {
      const self = this;
      const tmp = this[arg0];
      let tmp2 = tmp;
      if (tmp instanceof closure_2) {
        if (undefined === tmp2) {
          tmp2 = arg1;
        }
        return self.set(arg0, arg2(tmp2));
      } else {
        const _Array = Array;
        if (tmp instanceof Array) {
          const items = [];
          HermesBuiltin.arraySpread(tmp, 0);
          let tmp4 = items;
        } else {
          const _Object = Object;
          tmp4 = tmp;
          if (tmp instanceof Object) {
            const obj = {};
            const merged = Object.assign(tmp);
            tmp4 = obj;
          }
        }
      }
    }
  };
  return callback(TypedRecord, items);
}();
const result = arg1(dependencyMap[2]).fileFinishedImporting("lib/Record.tsx");

export default tmp2;
export const TypedRecord = tmp3;
