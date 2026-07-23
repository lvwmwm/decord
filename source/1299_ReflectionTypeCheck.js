// Module ID: 1299
// Function ID: 15180
// Name: ReflectionTypeCheck
// Dependencies: [6, 7, 1300, 1297]

// Module 1299 (ReflectionTypeCheck)
import _classCallCheck from "_classCallCheck";
import _defineProperties from "_defineProperties";


export const ReflectionTypeCheck = (() => {
  class ReflectionTypeCheck {
    constructor(arg0) {
      tmp = outer1_2(this, ReflectionTypeCheck);
      fields = arg0.fields;
      if (null === fields) {
        fields = [];
      }
      this.fields = fields;
      return;
    }
  }
  let obj = {
    key: "prepare",
    value: function prepare() {
      const self = this;
      if (!this.data) {
        const items = [];
        const items1 = [];
        const items2 = [];
        const fields = self.fields;
        const iter = fields[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          let tmp27 = nextResult;
          if (nextResult.oneof) {
            let tmp17 = items2;
            let tmp18 = nextResult;
            if (!items2.includes(tmp27.oneof)) {
              let tmp19 = items2;
              let tmp20 = nextResult;
              let arr = items2.push(tmp27.oneof);
              let tmp22 = items;
              arr = items.push(tmp27.oneof);
              let tmp24 = items1;
              let arr1 = items1.push(tmp27.oneof);
            }
          } else {
            let tmp4 = items1;
            let tmp5 = nextResult;
            let arr2 = items1.push(tmp27.localName);
            let kind = tmp27.kind;
            if ("scalar" !== kind) {
              if ("enum" !== kind) {
                if ("message" === kind) {
                  let tmp7 = nextResult;
                  if (tmp27.repeat) {
                    let tmp8 = items;
                    let tmp9 = nextResult;
                    let arr3 = items.push(tmp27.localName);
                  }
                } else if ("map" === kind) {
                  let tmp28 = items;
                  let tmp29 = nextResult;
                  let arr4 = items.push(tmp27.localName);
                }
              }
            }
            let tmp11 = nextResult;
            let opt = tmp27.opt;
            let tmp12 = opt;
            if (opt) {
              let tmp13 = nextResult;
              tmp12 = !tmp27.repeat;
            }
            if (!tmp12) {
              let tmp14 = items;
              let tmp15 = nextResult;
              let arr5 = items.push(tmp27.localName);
            }
          }
          continue;
        }
        const obj = { req: items, known: items1 };
        const _Object = Object;
        obj.oneofs = Object.values(items2);
        self.data = obj;
      }
    }
  };
  let items = [obj, , , , , , , ];
  obj = {
    key: "is",
    value: function is(arg0, arg1) {
      let self = this;
      let closure_0 = arg0;
      let closure_1 = arg1;
      self = this;
      const tmp3 = arguments.length > 2 && undefined !== arguments[2] && arguments[2];
      let closure_3 = tmp3;
      if (arg1 < 0) {
        return true;
      } else {
        if (null != tmp) {
          if ("object" === typeof tmp) {
            self.prepare();
            const _Object = Object;
            const keys = Object.keys(tmp);
            const data = self.data;
            if (keys.length >= data.req.length) {
              const req = data.req;
              if (!req.some((arg0) => !keys.includes(arg0))) {
                if (!tmp4) {
                  if (keys.some((arg0) => {
                    const known = data.known;
                    return !known.includes(arg0);
                  })) {
                    return false;
                  }
                }
                if (tmp2 < 1) {
                  return true;
                } else {
                  function _loop() {
                    const table = tmp;
                    let obj = ReflectionTypeCheck(outer2_1[2]);
                    if (obj.isOneofGroup(table[closure_6])) {
                      if (undefined === tmp.oneofKind) {
                        return 0;
                      } else {
                        const fields = self.fields;
                        const found = fields.find((localName) => localName.localName === tmp.oneofKind);
                        if (!found) {
                          obj = { v: false };
                          const tmp9 = obj;
                        }
                        return tmp9;
                      }
                    } else {
                      obj = { v: false };
                      return obj;
                    }
                  }
                  const oneofs = data.oneofs;
                  for (const item10025 of oneofs) {
                    let closure_6 = item10025;
                    let tmp7 = _loop;
                    let _loopResult = _loop();
                    if (0 !== _loopResult) {
                      let tmp10 = _loopResult;
                      if (tmp9) {
                        obj2.return();
                        return _loopResult.v;
                      }
                    }
                    continue;
                  }
                  let fields = self.fields;
                  for (const item10036 of fields) {
                    let tmp12 = item10036;
                    if (undefined === item10036.oneof) {
                      let tmp13 = arg0;
                      let tmp14 = item10036;
                      let tmp15 = tmp3;
                      let tmp16 = arg1;
                      let tmp17 = self;
                      let tmp18 = tmp12;
                      if (!self.field(tmp[tmp12.localName], item10036, tmp4, tmp2)) {
                        obj.return();
                        let flag2 = false;
                        return false;
                      }
                    }
                    continue;
                  }
                  return true;
                }
              }
            }
            return false;
          }
        }
        return false;
      }
    }
  };
  items[1] = obj;
  obj = {
    key: "field",
    value: function field(keys, opt) {
      let kind;
      let repeat;
      const self = this;
      ({ repeat, kind } = opt);
      if ("scalar" === kind) {
        if (undefined === keys) {
          let opt2 = opt.opt;
        } else if (repeat) {
          opt2 = self.scalars(keys, opt.T, arg3, opt.L);
        } else {
          opt2 = self.scalar(keys, opt.T, opt.L);
        }
        return opt2;
      } else if ("enum" === kind) {
        if (undefined === keys) {
          opt = opt.opt;
        } else if (repeat) {
          opt = self.scalars(keys, ReflectionTypeCheck(outer1_1[3]).ScalarType.INT32, arg3);
        } else {
          opt = self.scalar(keys, ReflectionTypeCheck(outer1_1[3]).ScalarType.INT32);
        }
        return opt;
      } else if ("message" === kind) {
        if (undefined === keys) {
          return tmp13;
        } else if (repeat) {
          let messagesResult = self.messages(keys, opt.T(), arg2, arg3);
        } else {
          messagesResult = self.message(keys, opt.T(), arg2, arg3);
        }
      } else {
        if ("map" === kind) {
          if ("object" === typeof keys) {
            if (null !== keys) {
              if (arg3 < 2) {
                return true;
              } else if (self.mapKeys(keys, opt.K, arg3)) {
                const kind2 = opt.V.kind;
                if ("scalar" === kind2) {
                  const _Object3 = Object;
                  return self.scalars(Object.values(keys), opt.V.T, arg3, opt.V.L);
                } else if ("enum" === kind2) {
                  const _Object2 = Object;
                  let values = Object.values(keys);
                  return self.scalars(values, ReflectionTypeCheck(outer1_1[3]).ScalarType.INT32, arg3);
                } else if ("message" === kind2) {
                  const _Object = Object;
                  const V = opt.V;
                  values = Object.values(keys);
                  return self.messages(values, V.T(), arg2, arg3);
                }
              } else {
                return false;
              }
            }
          }
          return false;
        }
        return true;
      }
    }
  };
  items[2] = obj;
  items[3] = {
    key: "message",
    value: function message(arg0, isAssignable) {
      if (arg2) {
        let isAssignableResult = isAssignable.isAssignable(arg0, arg3);
      } else {
        isAssignableResult = isAssignable.is(arg0, arg3);
      }
      return isAssignableResult;
    }
  };
  items[4] = {
    key: "messages",
    value: function messages(database, V, arg2, arg3) {
      if (Array.isArray(database)) {
        if (arg3 < 2) {
          return true;
        } else {
          if (arg2) {
            if (0 < length) {
              let num5 = 0;
              if (0 < arg3) {
                while (V.isAssignable(database[num5], arg3 - 1)) {
                  num5 = num5 + 1;
                }
                return false;
              }
            }
          } else if (0 < length) {
            let num3 = 0;
            if (0 < arg3) {
              while (V.is(database[num3], arg3 - 1)) {
                num3 = num3 + 1;
              }
              return false;
            }
          }
          return true;
        }
      } else {
        return false;
      }
    }
  };
  items[5] = {
    key: "scalar",
    value: function scalar(arg0, arg1, arg2) {
      if (ReflectionTypeCheck(outer1_1[3]).ScalarType.UINT64 !== arg1) {
        if (ReflectionTypeCheck(outer1_1[3]).ScalarType.FIXED64 !== arg1) {
          if (ReflectionTypeCheck(outer1_1[3]).ScalarType.INT64 !== arg1) {
            if (ReflectionTypeCheck(outer1_1[3]).ScalarType.SFIXED64 !== arg1) {
              if (ReflectionTypeCheck(outer1_1[3]).ScalarType.SINT64 !== arg1) {
                if (ReflectionTypeCheck(outer1_1[3]).ScalarType.BOOL === arg1) {
                  return "boolean" === tmp;
                } else if (ReflectionTypeCheck(outer1_1[3]).ScalarType.STRING === arg1) {
                  return "string" === tmp;
                } else if (ReflectionTypeCheck(outer1_1[3]).ScalarType.BYTES === arg1) {
                  const _Uint8Array = Uint8Array;
                  return arg0 instanceof Uint8Array;
                } else {
                  if (ReflectionTypeCheck(outer1_1[3]).ScalarType.DOUBLE !== arg1) {
                    if (ReflectionTypeCheck(outer1_1[3]).ScalarType.FLOAT !== arg1) {
                      let isIntegerResult = "number" === tmp;
                      if (isIntegerResult) {
                        const _Number = Number;
                        isIntegerResult = Number.isInteger(arg0);
                      }
                      return isIntegerResult;
                    }
                  }
                  let tmp6 = "number" === tmp;
                  if (tmp6) {
                    const _isNaN = isNaN;
                    tmp6 = !isNaN(arg0);
                  }
                  return tmp6;
                }
              }
            }
          }
        }
      }
      if (ReflectionTypeCheck(outer1_1[3]).LongType.BIGINT === arg2) {
        return "bigint" === tmp;
      } else if (ReflectionTypeCheck(outer1_1[3]).LongType.NUMBER === arg2) {
        let tmp11 = "number" === tmp;
        if (tmp11) {
          const _isNaN2 = isNaN;
          tmp11 = !isNaN(arg0);
        }
        return tmp11;
      } else {
        return "string" === tmp;
      }
    }
  };
  items[6] = {
    key: "scalars",
    value: function scalars(keys, INT32, arg2, L) {
      const self = this;
      if (Array.isArray(keys)) {
        if (arg2 < 2) {
          return true;
        } else {
          const _Array = Array;
          if (Array.isArray(keys)) {
            if (0 < keys.length) {
              let num3 = 0;
              if (0 < arg2) {
                while (self.scalar(keys[num3], INT32, L)) {
                  num3 = num3 + 1;
                }
                return false;
              }
            }
          }
          return true;
        }
      } else {
        return false;
      }
    }
  };
  items[7] = {
    key: "mapKeys",
    value: function mapKeys(arg0, INT32) {
      const self = this;
      const keys = Object.keys(arg0);
      if (ReflectionTypeCheck(outer1_1[3]).ScalarType.INT32 !== INT32) {
        if (ReflectionTypeCheck(outer1_1[3]).ScalarType.FIXED32 !== INT32) {
          if (ReflectionTypeCheck(outer1_1[3]).ScalarType.SFIXED32 !== INT32) {
            if (ReflectionTypeCheck(outer1_1[3]).ScalarType.SINT32 !== INT32) {
              if (ReflectionTypeCheck(outer1_1[3]).ScalarType.UINT32 !== INT32) {
                if (ReflectionTypeCheck(outer1_1[3]).ScalarType.BOOL === INT32) {
                  const substr = keys.slice(0, arg2);
                  return self.scalars(substr.map((arg0) => {
                    let tmp = "true" == arg0;
                    if (!tmp) {
                      tmp = "false" != arg0 && arg0;
                      const tmp2 = "false" != arg0 && arg0;
                    }
                    return tmp;
                  }), INT32, arg2);
                } else {
                  return self.scalars(keys, INT32, arg2, ReflectionTypeCheck(outer1_1[3]).LongType.STRING);
                }
              }
            }
          }
        }
      }
      const substr1 = keys.slice(0, arg2);
      return self.scalars(substr1.map((replaced) => parseInt(replaced)), INT32, arg2);
    }
  };
  return _defineProperties(ReflectionTypeCheck, items);
})();
