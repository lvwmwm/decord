// Module ID: 633
// Function ID: 7301
// Name: createDFS
// Dependencies: []

// Module 633 (createDFS)
function createDFS(incomingEdges, arg1, items, circular) {
  const DepGraph = incomingEdges;
  const createDFS = items;
  let closure_4 = [];
  let closure_5 = {};
  let closure_6 = {};
  let closure_7 = {};
  class DFS {
    constructor(arg0) {
      circular[incomingEdges] = true;
      arr = circular.push(incomingEdges);
      circular[incomingEdges] = true;
      num = 0;
      if (0 < incomingEdges[incomingEdges].length) {
        while (true) {
          tmp2 = incomingEdges;
          tmp3 = incomingEdges[incomingEdges][num];
          tmp4 = circular;
          if (circular[tmp3]) {
            tmp7 = circular;
            if (circular[tmp3]) {
              tmp8 = circular;
              arr1 = circular.push(tmp3);
              tmp10 = circular;
              if (!circular) {
                break;
              }
            }
          } else {
            tmp5 = DFS;
            tmp6 = DFS(tmp3);
          }
          num = num + 1;
          tmp17 = incomingEdges;
        }
        tmp11 = arg1;
        tmp12 = circular;
        prototype = arg1.prototype;
        tmp13 = new.target;
        tmp14 = new.target;
        tmp15 = new arg1(circular);
        tmp16 = tmp15;
        throw tmp15;
      }
      arr2 = circular.pop();
      delete r4[r3];
      tmp19 = arg1;
      if (arg1) {
        tmp20 = incomingEdges;
        tmp19 = 0 !== incomingEdges[incomingEdges].length;
      }
      if (!tmp19) {
        tmp21 = circular;
        tmp19 = circular[incomingEdges];
      }
      if (!tmp19) {
        tmp22 = items;
        arr3 = items.push(incomingEdges);
        tmp24 = circular;
        circular[incomingEdges] = true;
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
    const DepGraph = arg0;
    if (this.hasNode(arg0)) {
      const nodes = self.nodes;
      delete r2[r3];
      const outgoingEdges = self.outgoingEdges;
      delete r2[r3];
      const incomingEdges = self.incomingEdges;
      delete r2[r3];
      const items = [, ];
      ({ incomingEdges: arr[0], outgoingEdges: arr[1] } = self);
      const item = items.forEach(function(arg0) {
        const keys = Object.keys(arg0);
        const item = keys.forEach((arg0) => {
          const index = arg0[arg0].indexOf(arg0);
          if (index >= 0) {
            arg0[arg0].splice(index, 1);
            const arr2 = arg0[arg0];
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
    const DepGraph = this;
    const tmp = new DepGraph();
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
    const self = this;
    const DepGraph = this;
    const items = [];
    const keys = Object.keys(this.nodes);
    if (0 === keys.length) {
      return items;
    } else {
      let closure_1 = createDFS(self.outgoingEdges, false, [], self.circular);
      const item = keys.forEach((arg0) => {
        callback(arg0);
      });
      const createDFS = createDFS(self.outgoingEdges, arg0, items, self.circular);
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
const obj = { 1837105156: 1, 894631940: "column", 65904547: 200, 1233076609: "", value: Error };
tmp.prototype = Object.create(Error.prototype, { constructor: obj });
Object.setPrototypeOf(tmp, Error);
