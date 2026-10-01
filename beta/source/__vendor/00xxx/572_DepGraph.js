// Module ID: 572
// Function ID: 573
// Name: DepGraph
// Dependencies: []

// Module 572 (DepGraph)
let arr1, captureStackTraceResult, setPrototypeOfResult, str, str2, str3, tmp10, tmp15, tmp17, tmp22, tmp23, tmp25, tmp6, tmp7, tmp8;

let obj2;
class DepGraph {
  constructor(circular) {

  }
}
DepGraph.prototype = {
  size() {
    return Object.keys(this.nodes).length;
  },
  addNode(arg0, arg1) {
    const self = this;
    if (!this.hasNode(arg0)) {
      tmp = arg0;
      const nodes = self.nodes;
      if (2 === arguments.length) {
        tmp = arg1;
      }
      nodes[arg0] = tmp;
      self.outgoingEdges[arg0] = [];
      self.incomingEdges[arg0] = [];
    }
  },
  removeNode(arg0) {
    const self = this;
    tmp = arg0;
    let closure_0 = arg0;
    if (this.hasNode(arg0)) {
      delete self.nodes[tmp];
      delete self.outgoingEdges[tmp];
      delete self.incomingEdges[tmp];
      const items = [, ];
      ({ incomingEdges: arr[0], outgoingEdges: arr[1] } = self);
      let item = items.forEach(function(item) {
        const keys = Object.keys(item);
        item = keys.forEach((item) => {
          const arr = item[item];
          const index = arr.indexOf(item);
          tmp = item;
          if (index >= 0) {
            const arr2 = tmp[item];
            arr2.splice(index, 1);
          }
        }, this);
      });
    }
  },
  hasNode(keys) {
    const nodes = this.nodes;
    return nodes.hasOwnProperty(keys);
  },
  getNodeData(prop) {
    if (this.hasNode(prop)) {
      return this.nodes[prop];
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Node does not exist: " + prop);
      throw error;
    }
  },
  setNodeData(arg0, arg1) {
    if (this.hasNode(arg0)) {
      this.nodes[arg0] = arg1;
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Node does not exist: " + arg0);
      throw error;
    }
  },
  addDependency(arg0, arg1) {
    const self = this;
    if (this.hasNode(arg0)) {
      if (self.hasNode(arg1)) {
        const arr = self.outgoingEdges[arg0];
        if (-1 === arr.indexOf(arg1)) {
          const arr2 = self.outgoingEdges[arg0];
          arr2.push(arg1);
        }
        const arr3 = self.incomingEdges[arg1];
        if (-1 === arr3.indexOf(arg0)) {
          const arr4 = self.incomingEdges[arg1];
          arr4.push(arg0);
        }
        return true;
      } else {
        const _Error2 = Error;
        const self4 = this;
        const self5 = this;
        const error = new Error("Node does not exist: " + arg1);
        throw error;
      }
    } else {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error1 = new Error("Node does not exist: " + arg0);
      throw error1;
    }
  },
  removeDependency(arg0, arg1) {
    let tmp2;
    const self = this;
    let hasNodeResult = this.hasNode(arg0);
    if (hasNodeResult) {
      const arr = self.outgoingEdges[arg0];
      const index = arr.indexOf(arg1);
      hasNodeResult = index >= 0;
      tmp2 = index;
    }
    if (hasNodeResult) {
      const arr2 = self.outgoingEdges[arg0];
      arr2.splice(tmp2, 1);
    }
    let hasNodeResult1 = self.hasNode(arg1);
    if (hasNodeResult1) {
      const arr3 = self.incomingEdges[arg1];
      const index1 = arr3.indexOf(arg0);
      hasNodeResult1 = index1 >= 0;
      tmp2 = index1;
    }
    if (hasNodeResult1) {
      const arr4 = self.incomingEdges[arg1];
      arr4.splice(tmp2, 1);
    }
  },
  clone() {
    const self = this;
    if (typeof DepGraph === "function") {
      const obj = { nodes: {}, outgoingEdges: {}, incomingEdges: {}, circular: undefined };
      const _Object = Object;
      const keys = Object.keys(tmp.nodes);
      const item = keys.forEach((item) => {
        obj.nodes[item] = self.nodes[item];
        const arr = self.outgoingEdges[item];
        obj.outgoingEdges[item] = arr.slice(0);
        const arr2 = self.incomingEdges[item];
        obj.incomingEdges[item] = arr2.slice(0);
      });
      return obj;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  },
  dependenciesOf(item, arg1) {
    const self = this;
    if (this.hasNode(item)) {
      const items = [];
      const outgoingEdges = self.outgoingEdges;
      let closure_1 = arg1;
      const circular = self.circular;
      let closure_4 = [];
      let closure_5 = {};
      let closure_6 = {};
      let closure_7 = {};
      class DFS {
        constructor(arg0) {
          closure_1_5[item] = true;
          tmp = item;
          arr = closure_1_4.push(item);
          closure_1_7[item] = true;
          tmp3 = self;
          num = 0;
          if (0 < self[item].length) {
            while (true) {
              tmp4 = self;
              tmp5 = self[item][num];
              tmp6 = closure_1_5;
              tmp7 = num;
              if (closure_1_5[tmp5]) {
                tmp10 = closure_1_7;
                if (closure_1_7[tmp5]) {
                  obj = closure_1_4;
                  arr1 = closure_1_4.push(tmp5);
                  tmp12 = closure_1_3;
                  if (!tmp12) {
                    break;
                  }
                }
              } else {
                tmp8 = closure_1_8;
                tmp9 = closure_1_8(tmp5);
              }
              num = num + 1;
              tmp3 = tmp4;
            }
            if (typeof c1 === "function") {
              str = " -> ";
              str2 = "Dependency Cycle Found: ";
              tmp15 = globalThis;
              _Error = Error;
              self = this;
              self2 = this;
              error = new Error("Dependency Cycle Found: " + obj.join(" -> "));
              tmp17 = error;
              error.cyclePath = obj;
              _Object = Object;
              _Object2 = Object;
              setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(tmp14));
              _Error2 = Error;
              if (Error.captureStackTrace) {
                _Error3 = Error;
                captureStackTraceResult = Error.captureStackTrace(error, tmp13);
              }
              throw error;
            } else {
              str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          arr2 = closure_1_4.pop();
          delete closure_1_7[tmp];
          tmp21 = DFS && 0 !== tmp3[item].length;
          if (!tmp21) {
            tmp22 = closure_1_6;
            tmp21 = closure_1_6[item];
          }
          if (!tmp21) {
            tmp23 = DFS;
            arr3 = DFS.push(item);
            tmp25 = closure_1_6;
            closure_1_6[item] = true;
          }
          return;
        }
      }
      DFS(item);
      const index = items.indexOf(item);
      if (index >= 0) {
        items.splice(index, 1);
      }
      return items;
    } else {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Node does not exist: " + item);
      throw error;
    }
  },
  dependantsOf(item, arg1) {
    const self = this;
    if (this.hasNode(item)) {
      const items = [];
      const incomingEdges = self.incomingEdges;
      let closure_1 = arg1;
      const circular = self.circular;
      let closure_4 = [];
      let closure_5 = {};
      let closure_6 = {};
      let closure_7 = {};
      class DFS {
        constructor(arg0) {
          closure_1_5[item] = true;
          tmp = item;
          arr = closure_1_4.push(item);
          closure_1_7[item] = true;
          tmp3 = self;
          num = 0;
          if (0 < self[item].length) {
            while (true) {
              tmp4 = self;
              tmp5 = self[item][num];
              tmp6 = closure_1_5;
              tmp7 = num;
              if (closure_1_5[tmp5]) {
                tmp10 = closure_1_7;
                if (closure_1_7[tmp5]) {
                  obj = closure_1_4;
                  arr1 = closure_1_4.push(tmp5);
                  tmp12 = closure_1_3;
                  if (!tmp12) {
                    break;
                  }
                }
              } else {
                tmp8 = closure_1_8;
                tmp9 = closure_1_8(tmp5);
              }
              num = num + 1;
              tmp3 = tmp4;
            }
            if (typeof c1 === "function") {
              str = " -> ";
              str2 = "Dependency Cycle Found: ";
              tmp15 = globalThis;
              _Error = Error;
              self = this;
              self2 = this;
              error = new Error("Dependency Cycle Found: " + obj.join(" -> "));
              tmp17 = error;
              error.cyclePath = obj;
              _Object = Object;
              _Object2 = Object;
              setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(tmp14));
              _Error2 = Error;
              if (Error.captureStackTrace) {
                _Error3 = Error;
                captureStackTraceResult = Error.captureStackTrace(error, tmp13);
              }
              throw error;
            } else {
              str3 = "Trying to call a non-function";
              throw new TypeError("Trying to call a non-function");
            }
          }
          arr2 = closure_1_4.pop();
          delete closure_1_7[tmp];
          tmp21 = DFS && 0 !== tmp3[item].length;
          if (!tmp21) {
            tmp22 = closure_1_6;
            tmp21 = closure_1_6[item];
          }
          if (!tmp21) {
            tmp23 = DFS;
            arr3 = DFS.push(item);
            tmp25 = closure_1_6;
            closure_1_6[item] = true;
          }
          return;
        }
      }
      DFS(item);
      const index = items.indexOf(item);
      if (index >= 0) {
        items.splice(index, 1);
      }
      return items;
    } else {
      const _Error = Error;
      const self2 = this;
      const self3 = this;
      const error = new Error("Node does not exist: " + item);
      throw error;
    }
  },
  overallOrder(arg0) {
    let tmp3;
    let self = this;
    const items = [];
    const keys = Object.keys(this.nodes);
    if (0 === keys.length) {
      return items;
    } else {
      tmp = arg0;
      let outgoingEdges = self.outgoingEdges;
      let c1 = false;
      let closure_2 = [];
      let circular = self.circular;
      let closure_4 = [];
      let closure_5 = {};
      let closure_6 = {};
      let closure_7 = {};
      class DFS {
        constructor(item) {
          let obj;
          closure_5[item] = true;
          closure_4.push(item);
          closure_7[item] = true;
          let tmp3 = outgoingEdges;
          let num = 0;
          tmp = item;
          if (0 < outgoingEdges[item].length) {
            while (true) {
              let tmp4 = outgoingEdges;
              let tmp5 = outgoingEdges[item][num];
              if (closure_5[tmp5]) {
                if (closure_7[tmp5]) {
                  obj = closure_4;
                  let arr4 = closure_4.push(tmp5);
                  let tmp12 = circular;
                  if (!tmp12) {
                    break;
                  }
                }
              } else {
                let tmp9 = self(tmp5);
              }
              num = num + 1;
              tmp3 = tmp4;
            }
            if (typeof c1 === "function") {
              const _Error = Error;
              self = this;
              const self2 = this;
              const error = new Error("Dependency Cycle Found: " + obj.join(" -> "));
              error.cyclePath = obj;
              const _Object = Object;
              const _Object2 = Object;
              Object.setPrototypeOf(error, Object.getPrototypeOf(tmp14));
              const _Error2 = Error;
              if (Error.captureStackTrace) {
                const _Error3 = Error;
                Error.captureStackTrace(error, tmp13);
              }
              throw error;
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          closure_4.pop();
          delete closure_7[tmp];
          const tmp21 = closure_1 && 0 !== tmp3[item].length || closure_6[item];
          if (!tmp21) {
            items.push(item);
            closure_6[item] = true;
          }
        }
      }
      const item = keys.forEach((item) => {
        DFS(item);
      });
      outgoingEdges = self.outgoingEdges;
      let closure_1 = arg0;
      circular = self.circular;
      closure_4 = [];
      closure_5 = {};
      closure_6 = {};
      closure_7 = {};
      self = tmp3;
      const found = keys.filter((item) => 0 === self.incomingEdges[item].length);
      const item1 = found.forEach((item) => {
        self(item);
      });
      return items;
    }
  }
};
class tmp {
  constructor(join) {
    const error = new Error("Dependency Cycle Found: " + join.join(" -> "));
    error.cyclePath = join;
    Object.setPrototypeOf(error, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
      const _Error = Error;
      Error.captureStackTrace(error, tmp);
    }
    return error;
  }
}
let obj = { constructor: obj2 };
obj2 = { value: Error, enumerable: false, writable: true, configurable: true };
tmp.prototype = Object.create(Error.prototype, obj);
Object.setPrototypeOf(tmp, Error);

export { DepGraph };
export const DepGraphCycleError = tmp;
