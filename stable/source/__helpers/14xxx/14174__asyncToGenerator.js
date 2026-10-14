// Module ID: 14174
// Function ID: 14175
// Name: _asyncToGenerator
// Dependencies: [5]
// Exports: default

// Module 14174 (_asyncToGenerator)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let c7, c8;

let closure_1 = { ignore: [] };

export default (arg0) => {
  let closure_0 = arg0;
  return (asyncStorageHandler) => {
    closure_0 = asyncStorageHandler;
    let tmp = closure_1;
    let obj = closure_0;
    const _Object = Object;
    if (!closure_0) {
      obj = {};
    }
    let closure_8 = assign({}, tmp, obj).ignore || tmp.ignore;
    let c9 = false;
    function sendToReactotron(action, data) {
      const obj = { action, data };
      closure_0.send("asyncStorage.mutation", obj);
    }
    const tmp2 = assign({}, tmp, obj).ignore || tmp.ignore;
    _asyncToGenerator(async (arg0, value, arg2) => {
      let tmp6;
      closure_0 = arg0;
      closure_1 = value;
      let closure_2 = arg2;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj = { value, done: true };
          return obj;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              let closure_4 = tmp;
              let closure_3 = tmp6;
              c6 = 1;
              tmp6 = c8;
              const tmp20 = closure_0;
              const tmp21 = closure_1;
              if (c8.indexOf(closure_0) < 0) {
                tmp6 = closure_1_10;
                const entry = { key: tmp20, value: tmp21 };
                closure_1_10("setItem", entry);
              }
              c6 = 0;
            }
          } else {
            c6 = 0;
          }
          tmp6 = closure_1(closure_0, closure_1, closure_2);
          c8 = 3;
          const obj3 = { value: tmp6, done: true };
          return obj3;
        } catch (tmp14) {
          let closure_5 = tmp14;
          if (0 === c6) {
            c8 = 3;
            throw tmp14;
          } else {
            c7 = 1;
          }
        }
      }
    });
    function setItem(arg0, arg1, arg2) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0, value) => {
      let closure_2;
      closure_0 = arg0;
      closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let tmp6;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              c5 = 1;
              tmp6 = closure_1_8;
              const tmp19 = closure_0;
              if (closure_1_8.indexOf(closure_0) < 0) {
                tmp6 = closure_1_10;
                const obj = { key: tmp19 };
                closure_1_10("removeItem", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          tmp6 = tmp6(closure_0, closure_1);
          c7 = 3;
          const obj4 = { value: tmp6, done: true };
          return obj4;
        } catch (tmp13) {
          let closure_4 = tmp13;
          if (0 === c5) {
            c7 = 3;
            throw tmp13;
          } else {
            c6 = 1;
          }
        }
      }
    });
    function removeItem(arg0, arg1) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0, value, arg2) => {
      let closure_3;
      closure_0 = arg0;
      closure_1 = value;
      let closure_2 = arg2;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj = { value, done: true };
          return obj;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c6;
        try {
          let tmp6;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj2 = { value, done: true };
              return obj2;
            } else {
              let closure_4 = tmp;
              c6 = 1;
              tmp6 = c8;
              const tmp20 = closure_0;
              const tmp21 = closure_1;
              if (c8.indexOf(closure_0) < 0) {
                tmp6 = closure_1_10;
                const entry = { key: tmp20, value: tmp21 };
                closure_1_10("mergeItem", entry);
              }
              c6 = 0;
            }
          } else {
            c6 = 0;
          }
          tmp6 = tmp6(closure_0, closure_1, closure_2);
          c8 = 3;
          const obj3 = { value: tmp6, done: true };
          return obj3;
        } catch (tmp14) {
          let closure_5 = tmp14;
          if (0 === c6) {
            c8 = 3;
            throw tmp14;
          } else {
            c7 = 1;
          }
        }
      }
    });
    function mergeItem(arg0, arg1, arg2) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0, value) => {
      let tmp13;
      let v0;
      closure_0 = arg0;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c4;
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_2 = tmp;
              closure_1 = tmp13;
              closure_1_10("clear");
              c4 = 0;
            }
          } else {
            c4 = 0;
          }
          tmp13 = c4(closure_0);
          c6 = 3;
          const obj = { value: tmp13, done: true };
          return obj;
        } catch (tmp14) {
          let closure_3 = tmp14;
          if (0 === c4) {
            c6 = 3;
            throw tmp14;
          } else {
            c5 = 1;
          }
        }
      }
    });
    function clear(arg0) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0, value) => {
      let tmp;
      let v0;
      closure_0 = arg0;
      closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let filter;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let items = closure_0;
              c5 = 1;
              if (!closure_0) {
                items = [];
              }
              filter = items.filter;
              const found = filter((arg0) => {
                const tmp = arg0 && arg0[0] && closure_1_8.indexOf(arg0[0]) < 0;
                return tmp;
              });
              if (found.length > 0) {
                filter = closure_1_10;
                const obj = { pairs: found };
                closure_1_10("multiSet", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          filter = c5(closure_0, closure_1);
          c7 = 3;
          const obj4 = { value: filter, done: true };
          return obj4;
        } catch (tmp12) {
          let closure_4 = tmp12;
          if (0 === c5) {
            c7 = 3;
            throw tmp12;
          } else {
            c6 = 1;
          }
        }
      }
    });
    function multiSet(arg0, arg1) {
      return closure_0(...arguments);
    }
    _asyncToGenerator(async (arg0, value) => {
      let v1;
      closure_0 = arg0;
      closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let filter;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let items = closure_0;
              c5 = 1;
              if (!closure_0) {
                items = [];
              }
              filter = items.filter;
              const found = filter((arg0) => closure_1_8.indexOf(arg0) < 0);
              if (found.length > 0) {
                filter = closure_1_10;
                const obj = { keys: found };
                closure_1_10("multiRemove", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          filter = c6(closure_0, closure_1);
          c7 = 3;
          const obj4 = { value: filter, done: true };
          return obj4;
        } catch (tmp12) {
          let closure_4 = tmp12;
          if (0 === c5) {
            c7 = 3;
            throw tmp12;
          } else {
            c6 = 1;
          }
        }
      }
    });
    function multiRemove(arg0, arg1) {
      return closure_0(...arguments);
    }
    closure_0 = _asyncToGenerator(async (arg0, value) => {
      let tmp;
      let v3;
      closure_0 = arg0;
      closure_1 = value;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c5;
        try {
          let filter;
          c7 = 2;
          if (0 === c6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_3 = tmp;
              let items = closure_0;
              c5 = 1;
              if (!closure_0) {
                items = [];
              }
              filter = items.filter;
              const found = filter((arg0) => {
                const tmp = arg0 && arg0[0] && closure_1_8.indexOf(arg0[0]) < 0;
                return tmp;
              });
              if (found.length > 0) {
                filter = closure_1_10;
                const obj = { pairs: found };
                closure_1_10("multiMerge", obj);
              }
              c5 = 0;
            }
          } else {
            c5 = 0;
          }
          filter = c7(closure_0, closure_1);
          c7 = 3;
          const obj4 = { value: filter, done: true };
          return obj4;
        } catch (tmp12) {
          let closure_4 = tmp12;
          if (0 === c5) {
            c7 = 3;
            throw tmp12;
          } else {
            c6 = 1;
          }
        }
      }
    });
    function multiMerge(arg0, arg1) {
      return closure_0(...arguments);
    }
    if (asyncStorageHandler.asyncStorageHandler) {
      const tmp3 = c9;
      if (!tmp3) {
        setItem = asyncStorageHandler.asyncStorageHandler.setItem;
        asyncStorageHandler.asyncStorageHandler.setItem = setItem;
        removeItem = asyncStorageHandler.asyncStorageHandler.removeItem;
        asyncStorageHandler.asyncStorageHandler.removeItem = removeItem;
        mergeItem = asyncStorageHandler.asyncStorageHandler.mergeItem;
        asyncStorageHandler.asyncStorageHandler.mergeItem = mergeItem;
        clear = asyncStorageHandler.asyncStorageHandler.clear;
        asyncStorageHandler.asyncStorageHandler.clear = clear;
        multiSet = asyncStorageHandler.asyncStorageHandler.multiSet;
        asyncStorageHandler.asyncStorageHandler.multiSet = multiSet;
        multiRemove = asyncStorageHandler.asyncStorageHandler.multiRemove;
        asyncStorageHandler.asyncStorageHandler.multiRemove = multiRemove;
        multiMerge = asyncStorageHandler.asyncStorageHandler.multiMerge;
        asyncStorageHandler.asyncStorageHandler.multiMerge = multiMerge;
        c9 = true;
      }
    }
    let obj2 = {
      features: {
        trackAsyncStorage() {
          const tmp = c9;
          if (!tmp) {
            setItem = closure_0.asyncStorageHandler.setItem;
            closure_0.asyncStorageHandler.setItem = setItem;
            removeItem = closure_0.asyncStorageHandler.removeItem;
            closure_0.asyncStorageHandler.removeItem = removeItem;
            mergeItem = closure_0.asyncStorageHandler.mergeItem;
            closure_0.asyncStorageHandler.mergeItem = mergeItem;
            clear = closure_0.asyncStorageHandler.clear;
            closure_0.asyncStorageHandler.clear = clear;
            multiSet = closure_0.asyncStorageHandler.multiSet;
            closure_0.asyncStorageHandler.multiSet = multiSet;
            multiRemove = closure_0.asyncStorageHandler.multiRemove;
            closure_0.asyncStorageHandler.multiRemove = multiRemove;
            multiMerge = closure_0.asyncStorageHandler.multiMerge;
            closure_0.asyncStorageHandler.multiMerge = multiMerge;
            c9 = true;
          }
        },
        untrackAsyncStorage() {
          const tmp = c9;
          if (tmp) {
            closure_0.asyncStorageHandler.setItem = setItem;
            closure_0.asyncStorageHandler.removeItem = removeItem;
            closure_0.asyncStorageHandler.mergeItem = mergeItem;
            closure_0.asyncStorageHandler.clear = clear;
            closure_0.asyncStorageHandler.multiSet = multiSet;
            closure_0.asyncStorageHandler.multiRemove = multiRemove;
            closure_0.asyncStorageHandler.multiMerge = multiMerge;
            c9 = false;
          }
        }
      }
    };
    return obj2;
  };
};
