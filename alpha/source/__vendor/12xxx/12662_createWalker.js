// Module ID: 12662
// Function ID: 12663
// Name: createWalker
// Dependencies: []

// Module 12662 (createWalker)
let skip;

function noop() {

}

export default function createWalker(node) {
  let obj6;
  const f117253 = (arg0, arg1, fn, arg3) => {
    let tmp;
    if (closure_3) {
      tmp = arg1[context2];
      arg1[context2] = arg0;
    }
    let num = 0;
    if (0 < substr.length) {
      while (true) {
        let tmp3 = substr[num];
        let arr2 = arg0[tmp3.name];
        if (!tmp3.nullable) {
          if ("list" === tmp3.type) {
            let reduceRightResult;
            let tmp5 = c0;
            if (tmp5) {
              reduceRightResult = arr2.reduceRight(arg3, false);
            } else {
              reduceRightResult = arr2.reduce(arg3, false);
            }
            if (reduceRightResult) {
              let flag2 = true;
              return true;
            }
          } else if (fn(arr2)) {
            break;
          }
        }
        num = num + 1;
      }
      return true;
    }
    const tmp7 = closure_3;
    if (tmp7) {
      arg1[context2] = tmp;
    }
  };
  let obj = {};
  for (const key10012 in node.node) {
    if (!obj.call(node.node, key10012)) {
      continue;
    } else {
      let tmp = node.node[key10012];
      if (tmp.structure) {
        let structure = tmp.structure;
        let items = [];
        let tmp4 = structure;
        for (const key10030 in structure) {
          if (false === obj.call(structure, key10030)) {
            continue;
          } else {
            let num;
            let arr2 = structure[key10030];
            let obj2 = { name: key10030, type: false, nullable: false };
            let _Array = Array;
            if (!Array.isArray(structure[key10030])) {
              let items1 = [structure[key10030]];
              arr2 = items1;
            }
            for (let num = 0; num < arr2.length; num = num + 1) {
              let tmp5 = arr2[num];
              let tmp6 = num;
              if (null === tmp5) {
                obj2.nullable = true;
              } else if (typeof tmp5 === "string") {
                obj2.type = "node";
              } else {
                let _Array2 = Array;
                if (Array.isArray(tmp5)) {
                  obj2.type = "list";
                }
              }
            }
            if (!obj2.type) {
              continue;
            } else {
              let arr = items.push(obj2);
              continue;
            }
            continue;
          }
          continue;
        }
        let tmp8 = null;
        if (items.length) {
          let obj3 = { context: tmp.walkContext, fields: items };
          tmp8 = obj3;
        }
        obj[key10012] = tmp8;
        continue;
      } else {
        let _Error = Error;
        let str = "Missed `structure` field in `";
        let self = this;
        let str2 = "` node type definition";
        let self2 = this;
        let error = new Error("Missed `structure` field in `" + key10012 + "` node type definition");
        let tmp3 = error;
        throw error;
      }
    }
    continue;
  }
  let obj4 = {};
  const obj5 = {};
  const SymbolResult = Symbol("break-walk");
  let closure_3 = SymbolResult;
  const SymbolResult1 = Symbol("skip-node");
  let keys = Object.keys();
  if (keys !== undefined) {
    const first = keys[0];
    while (first !== undefined) {
      let tmp19 = first;
      let tmp13 = obj.call(obj, first) && null !== obj[first];
      if (!tmp13) {
        continue;
      } else {
        let tmp14 = obj[first];
        let fields = tmp14.fields;
        let closure_1 = fields.slice();
        let context = tmp14.context;
        closure_3 = typeof context === "string";
        obj4[first] = f117253;
        let tmp15 = obj[first];
        let c0 = true;
        let fields1 = tmp15.fields;
        let substr = fields1.slice();
        let context2 = tmp15.context;
        closure_3 = typeof context2 === "string";
        let reversed = substr.reverse();
        obj5[first] = f117253;
        continue;
      }
      continue;
    }
  }
  const obj7 = { Atrule: { StyleSheet: obj5.StyleSheet, Atrule: obj5.Atrule, Rule: obj5.Rule, Block: obj5.Block }, Rule: { StyleSheet: obj5.StyleSheet, Atrule: obj5.Atrule, Rule: obj5.Rule, Block: obj5.Block }, Declaration: { StyleSheet: obj5.StyleSheet, Atrule: obj5.Atrule, Rule: obj5.Rule, Block: obj5.Block, DeclarationList: obj5.DeclarationList } };
  function walk(root, enter) {
    let closure_4;
    let obj2;
    let obj3;
    let tmp7;
    let tmp8;
    const f117252 = function(type, arg1, arg2) {
      if (type.type === visit) {
        const self = this;
        leave.call(self, type, arg1, arg2);
      }
    };
    function walkNode(type, arg1, arg2) {
      const callResult = fn.call(obj, type, arg1, arg2);
      let tmp5 = callResult === closure_3;
      if (!tmp5) {
        let tmp7 = callResult !== SymbolResult1;
        if (tmp7) {
          const hasOwnPropertyResult = closure_4.hasOwnProperty(type.type);
          let tmp10 = !hasOwnPropertyResult;
          if (hasOwnPropertyResult) {
            tmp10 = !tmp8[type.type](type, tmp2, walkNode, walkReducer);
          }
          let tmp16 = !tmp10;
          if (tmp10) {
            tmp16 = fn2.call(tmp2, type, arg1, arg2) === tmp4;
          }
          tmp7 = tmp16;
        }
        tmp5 = tmp7;
      }
      return tmp5;
    }
    function walkReducer(arg0, type, arg2, arg3) {
      let tmp = arg0;
      if (!tmp) {
        const callResult = fn.call(obj, type, arg2, arg3);
        let tmp9 = callResult === closure_3;
        if (!tmp9) {
          let tmp11 = callResult !== SymbolResult1;
          if (tmp11) {
            const hasOwnPropertyResult = closure_4.hasOwnProperty(type.type);
            let tmp14 = !hasOwnPropertyResult;
            if (hasOwnPropertyResult) {
              tmp14 = !tmp12[type.type](type, tmp6, walkNode, walkReducer);
            }
            let tmp20 = !tmp14;
            if (tmp14) {
              tmp20 = fn2.call(tmp6, type, arg2, arg3) === tmp8;
            }
            tmp11 = tmp20;
          }
          tmp9 = tmp11;
        }
        tmp = tmp9;
      }
      return tmp;
    }
    let tmp = obj4;
    let fn = obj4;
    let fn2 = obj4;
    const tmp2 = walkReducer;
    skip = walkReducer;
    obj = { break: fn2, skip, root, stylesheet: null, atrule: null, atrulePrelude: null, rule: null, selector: null, block: null, declaration: null, function: null };
    const tmp3 = fn2;
    const tmp4 = skip;
    if (typeof enter === "function") {
      fn = enter;
      obj2 = tmp2;
      obj3 = tmp;
      obj4 = enter;
      tmp7 = tmp;
      tmp8 = enter;
    } else {
      obj2 = tmp2;
      obj3 = tmp;
      obj4 = tmp;
      tmp7 = tmp;
      tmp8 = tmp;
      if (enter) {
        enter = enter.enter;
        if (typeof enter !== "function") {
          enter = tmp;
        }
        fn = enter;
        let leave = enter.leave;
        if (typeof leave !== "function") {
          leave = tmp;
        }
        fn2 = leave;
        let tmp5 = tmp2;
        if (enter.reverse) {
          const tmp6 = fn;
          skip = fn;
          tmp5 = fn;
        }
        obj2 = tmp5;
        obj3 = leave;
        obj4 = enter;
        tmp7 = leave;
        tmp8 = enter;
        if (enter.visit) {
          let tmp9 = obj;
          if (obj.hasOwnProperty(enter.visit)) {
            let tmp15;
            if (enter.reverse) {
              let tmp16 = obj7;
              tmp15 = obj7[enter.visit];
            } else {
              tmp15 = tmp9[enter.visit];
            }
            skip = tmp15;
            tmp5 = tmp15;
          } else {
            let tmp10 = walkNode;
            if (!walkNode.hasOwnProperty(enter.visit)) {
              let tmp11 = globalThis;
              const _Error = Error;
              const _Object = Object;
              const text = `Bad value \`${enter.visit}`;
              const keys = Object.keys(tmp10);
              let self = this;
              const self2 = this;
              const error = new Error(`Bad value \`${enter.visit}` + "` for `visit` option (should be: " + keys.join(", ") + ")");
              let tmp14 = error;
              throw error;
            }
          }
          fn = f117252;
          const visit = enter.visit;
          fn2 = f117252;
          obj2 = tmp5;
          obj3 = fn2;
          obj4 = fn;
          tmp7 = fn2;
          tmp8 = fn;
        }
      }
    }
    if (tmp8 === tmp) {
      if (tmp7 === tmp) {
        const _Error2 = Error;
        const self3 = this;
        const self4 = this;
        const error1 = new Error("Neither `enter` nor `leave` walker handler is set or both aren't a function");
        throw error1;
      }
    }
    let callResult = obj4.call(obj, root, undefined, undefined);
    if (callResult !== tmp3) {
      if (callResult !== tmp4) {
        let hasOwnPropertyResult = obj2.hasOwnProperty(root.type);
        let tmp19 = !hasOwnPropertyResult;
        if (hasOwnPropertyResult) {
          let tmp20 = obj2;
          tmp19 = !obj2[root.type](root, obj, walkNode, walkReducer);
        }
        if (tmp19) {
          obj3.call(obj, root, undefined, undefined);
        }
      }
    }
  }
  walk.break = SymbolResult;
  walk.skip = SymbolResult1;
  walk.find = (arg0, arg1) => {
    let closure_0 = arg1;
    let c1 = null;
    walk(arg0, function(arg0, arg1, arg2) {
      const self = this;
      if (closure_0.call(self, arg0, arg1, arg2)) {
        c1 = arg0;
        return closure_3;
      }
    });
    return c1;
  };
  walk.findLast = (arg0, arg1) => {
    let closure_0 = arg1;
    let c1 = null;
    obj = {
      reverse: true,
      enter(arg0, arg1, arg2) {
        const self = this;
        if (closure_0.call(self, arg0, arg1, arg2)) {
          c1 = arg0;
          return closure_3;
        }
      }
    };
    walk(arg0, obj);
    return c1;
  };
  walk.findAll = (arg0, arg1) => {
    let closure_0 = arg1;
    const items = [];
    walk(arg0, function(arg0, arg1, arg2) {
      const self = this;
      if (closure_0.call(self, arg0, arg1, arg2)) {
        items.push(arg0);
      }
    });
    return items;
  };
  return walk;
};
