// Module ID: 633
// Function ID: 7301
// Name: createDFS
// Dependencies: []

// Module 633 (createDFS)
function createDFS(incomingEdges, arg1, items, circular) {
  let closure_0 = incomingEdges;
  let closure_1 = arg1;
  let closure_2 = items;
  let closure_3 = circular;
  let closure_4 = [];
  let closure_5 = {};
  let closure_6 = {};
  let closure_7 = {};
  class DFS {
    constructor(arg0) {
      closure_5[incomingEdges] = true;
      arr = closure_4.push(incomingEdges);
      closure_7[incomingEdges] = true;
      num = 0;
      if (0 < closure_0[incomingEdges].length) {
        while (true) {
          tmp4 = closure_0;
          tmp5 = closure_0[incomingEdges][num];
          tmp6 = closure_5;
          if (closure_5[tmp5]) {
            tmp9 = closure_7;
            if (closure_7[tmp5]) {
              tmp10 = closure_4;
              arr1 = closure_4.push(tmp5);
              tmp12 = closure_3;
              if (!closure_3) {
                break;
              }
            }
          } else {
            tmp7 = DFS;
            tmp8 = DFS(tmp5);
          }
          num = num + 1;
          tmp19 = closure_0;
        }
        tmp13 = closure_1;
        tmp14 = closure_4;
        prototype = closure_1.prototype;
        tmp15 = new.target;
        tmp16 = new.target;
        tmp17 = new closure_1(closure_4);
        tmp18 = tmp17;
        throw tmp17;
      }
      arr2 = closure_4.pop();
      delete tmp2[tmp];
      tmp21 = closure_1;
      if (closure_1) {
        tmp22 = closure_0;
        tmp21 = 0 !== closure_0[incomingEdges].length;
      }
      if (!tmp21) {
        tmp23 = closure_6;
        tmp21 = closure_6[incomingEdges];
      }
      if (!tmp21) {
        tmp24 = closure_2;
        arr3 = closure_2.push(incomingEdges);
        tmp26 = closure_6;
        closure_6[incomingEdges] = true;
      }
      return;
    }
  }
  return DFS;
}
class DepGraph {
  constructor(arg0) {
    this.nodes = {};
    this.outgoingEdges = {};
    this.incomingEdges = {};
    tmp = arg0;
    if (arg0) {
      tmp = arg0.circular;
    }
    this.circular = tmp;
    return;
  }
}
arg5.DepGraph = DepGraph;
DepGraph.prototype = {
  size() {
    return Object.keys(this.nodes).length;
  },
  addNode(arg0, arg1) {
    const self = this;
    if (!this.hasNode(arg0)) {
      let tmp = arg0;
      if (2 === arguments.length) {
        tmp = arg1;
      }
      self.nodes[arg0] = tmp;
      self.outgoingEdges[arg0] = [];
      self.incomingEdges[arg0] = [];
    }
  },
  removeNode(arg0) {
    const self = this;
    let closure_0 = arg0;
    if (this.hasNode(arg0)) {
      const nodes = self.nodes;
      delete tmp[tmp2];
      const outgoingEdges = self.outgoingEdges;
      delete tmp[tmp2];
      const incomingEdges = self.incomingEdges;
      delete tmp[tmp2];
      const items = [, ];
      ({ incomingEdges: arr[0], outgoingEdges: arr[1] } = self);
      let item = items.forEach(function(arg0) {
        let closure_0 = arg0;
        const keys = Object.keys(arg0);
        const item = keys.forEach((arg0) => {
          const index = dependencyMap[arg0].indexOf(dependencyMap);
          if (index >= 0) {
            dependencyMap[arg0].splice(index, 1);
            const arr2 = dependencyMap[arg0];
          }
        }, this);
      });
    }
  },
  hasNode(arg0) {
    const nodes = this.nodes;
    return nodes.hasOwnProperty(arg0);
  },
  getNodeData(arg0) {
    if (this.hasNode(arg0)) {
      return this.nodes[arg0];
    } else {
      const _Error = Error;
      const error = new Error("Node does not exist: " + arg0);
      throw error;
    }
  },
  setNodeData(arg0, arg1) {
    if (this.hasNode(arg0)) {
      this.nodes[arg0] = arg1;
    } else {
      const _Error = Error;
      const error = new Error("Node does not exist: " + arg0);
      throw error;
    }
  },
  addDependency(arg0, arg1) {
    const self = this;
    if (this.hasNode(arg0)) {
      if (self.hasNode(arg1)) {
        let arr = self.outgoingEdges[arg0];
        if (-1 === arr.indexOf(arg1)) {
          arr = self.outgoingEdges[arg0].push(arg1);
          const arr2 = self.outgoingEdges[arg0];
        }
        if (-1 === arr3.indexOf(arg0)) {
          arr = self.incomingEdges[arg1].push(arg0);
          const arr4 = self.incomingEdges[arg1];
        }
        return true;
      } else {
        const _Error2 = Error;
        const error = new Error("Node does not exist: " + arg1);
        throw error;
      }
    } else {
      const _Error = Error;
      const error1 = new Error("Node does not exist: " + arg0);
      throw error1;
    }
  },
  removeDependency(arg0, arg1) {
    const self = this;
    let hasNodeResult = this.hasNode(arg0);
    if (hasNodeResult) {
      const index = self.outgoingEdges[arg0].indexOf(arg1);
      hasNodeResult = index >= 0;
      let tmp2 = index;
      const arr = self.outgoingEdges[arg0];
    }
    if (hasNodeResult) {
      self.outgoingEdges[arg0].splice(tmp2, 1);
      const arr2 = self.outgoingEdges[arg0];
    }
    let hasNodeResult1 = self.hasNode(arg1);
    if (hasNodeResult1) {
      const index1 = self.incomingEdges[arg1].indexOf(arg0);
      hasNodeResult1 = index1 >= 0;
      tmp2 = index1;
      const arr3 = self.incomingEdges[arg1];
    }
    if (hasNodeResult1) {
      self.incomingEdges[arg1].splice(tmp2, 1);
      const arr4 = self.incomingEdges[arg1];
    }
  },
  clone() {
    const self = this;
    const tmp = new self();
    let closure_1 = tmp;
    const keys = Object.keys(this.nodes);
    const item = keys.forEach((arg0) => {
      tmp.nodes[arg0] = self.nodes[arg0];
      tmp.outgoingEdges[arg0] = self.outgoingEdges[arg0].slice(0);
      tmp.incomingEdges[arg0] = self.incomingEdges[arg0].slice(0);
    });
    return tmp;
  },
  dependenciesOf(arg0, arg1) {
    const self = this;
    if (this.hasNode(arg0)) {
      const items = [];
      createDFS(self.outgoingEdges, arg1, items, self.circular)(arg0);
      const index = items.indexOf(arg0);
      if (index >= 0) {
        items.splice(index, 1);
      }
      return items;
    } else {
      const _Error = Error;
      const error = new Error("Node does not exist: " + arg0);
      throw error;
    }
  },
  dependantsOf(arg0, arg1) {
    const self = this;
    if (this.hasNode(arg0)) {
      const items = [];
      createDFS(self.incomingEdges, arg1, items, self.circular)(arg0);
      const index = items.indexOf(arg0);
      if (index >= 0) {
        items.splice(index, 1);
      }
      return items;
    } else {
      const _Error = Error;
      const error = new Error("Node does not exist: " + arg0);
      throw error;
    }
  },
  overallOrder(arg0) {
    let self = this;
    self = this;
    const items = [];
    const keys = Object.keys(this.nodes);
    if (0 === keys.length) {
      return items;
    } else {
      let closure_1 = createDFS(self.outgoingEdges, false, [], self.circular);
      const item = keys.forEach((arg0) => {
        callback(arg0);
      });
      createDFS = createDFS(self.outgoingEdges, arg0, items, self.circular);
      const found = keys.filter((arg0) => 0 === self.incomingEdges[arg0].length);
      const item1 = found.forEach((arg0) => {
        callback2(arg0);
      });
      return items;
    }
  }
};
class tmp {
  constructor(arg0) {
    error = new Error("Dependency Cycle Found: " + arg0.join(" -> "));
    error.cyclePath = arg0;
    setPrototypeOfResult = Object.setPrototypeOf(error, Object.getPrototypeOf(this));
    if (Error.captureStackTrace) {
      _Error = Error;
      tmp3 = f7323;
      captureStackTraceResult = Error.captureStackTrace(error, f7323);
    }
    return error;
  }
}
arg5.DepGraphCycleError = tmp;
let closure_1 = tmp;
const obj = { value: Error, enumerable: false, writable: true, configurable: true };
tmp.prototype = Object.create(Error.prototype, { constructor: obj });
Object.setPrototypeOf(tmp, Error);
