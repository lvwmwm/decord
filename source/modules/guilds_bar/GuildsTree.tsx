// Module ID: 4969
// Function ID: 42755
// Name: randomFolderId
// Dependencies: []
// Exports: createFolderNode, createGuildNode

// Module 4969 (randomFolderId)
function randomFolderId() {
  return Math.floor(4294967296 * Math.random());
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
const obj = { ROOT: "root", FOLDER: "folder", GUILD: "guild" };
const tmp2 = () => {
  class GuildsTree {
    constructor() {
      tmp = closure_3(this, GuildsTree);
      obj = { type: closure_5.ROOT, children: [] };
      this.root = obj;
      this.nodes = {};
      this.version = 0;
      return;
    }
  }
  const arg1 = GuildsTree;
  let obj = {
    key: "getSnapshot",
    value() {
      const self = this;
      let obj = {};
      for (const key10007 in this.nodes) {
        let tmp = key10007;
        let tmp2 = self.nodes[key10007];
        obj = {};
        let tmp3 = obj;
        let tmp4 = tmp2;
        let merged = Object.assign(tmp2);
        obj["children"] = undefined;
        let children = tmp2.children;
        obj["childrenIds"] = children.map((id) => id.id);
        obj[key10007] = obj;
      }
      obj = { rootChildrenIds: children1.map((id) => id.id), nodes: obj };
      const children1 = self.root.children;
      return obj;
    }
  };
  const items = [obj, , , , , , , , , , , , , , ];
  obj = {
    key: "loadSnapshot",
    value(nodes) {
      const self = this;
      const GuildsTree = this;
      this.nodes = nodes.nodes;
      for (const key10006 in this.nodes) {
        let tmp = key10006;
        let tmp2 = self.nodes[key10006];
        if (!("childrenIds" in tmp2)) {
          continue;
        } else {
          let childrenIds = tmp2.childrenIds;
          tmp2.children = childrenIds.map((arg0) => self.nodes[arg0]);
          delete r9.childrenIds;
          // continue
        }
        continue;
      }
      const rootChildrenIds = nodes.rootChildrenIds;
      self.root.children = rootChildrenIds.map((arg0) => self.nodes[arg0]);
      self.version = self.version + 1;
    }
  };
  items[1] = obj;
  obj = {
    key: "moveNextTo",
    value(type, parentId) {
      let flag = arg2;
      const self = this;
      if (arg2 === undefined) {
        flag = false;
      }
      self._pluckNode(type);
      if (null != parentId.parentId) {
        let root = self.nodes[parentId.parentId];
      } else {
        root = self.root;
      }
      const children = root.children;
      const index = children.indexOf(parentId);
      let tmp4 = type.type === constants.FOLDER;
      if (tmp4) {
        tmp4 = root.type === constants.FOLDER;
      }
      callback(closure_2[2])(!tmp4, "[GUILDS TREE] Tried moving a folder (" + type.id + ") inside of another folder (" + root.id + ")");
      const tmp3 = callback(closure_2[2]);
      callback(closure_2[2])(index >= 0, "[GUILDS TREE] target node (" + parentId.id + ") did not exist within its specified parent (" + parentId.parentId + ")");
      let num = 0;
      if (flag) {
        num = 1;
      }
      const items = [...root.children];
      root.children = items;
      const children1 = root.children;
      children1.splice(index + num, 0, type);
      type.parentId = root.id;
      self.version = self.version + 1;
      return self;
    }
  };
  items[2] = obj;
  items[3] = {
    key: "moveInto",
    value(arg0, children) {
      let flag = arg2;
      const self = this;
      if (arg2 === undefined) {
        flag = true;
      }
      self._pluckNode(arg0);
      let num = 0;
      if (flag) {
        num = children.children.length;
      }
      const items = [...children.children];
      children.children = items;
      children = children.children;
      children.splice(num, 0, arg0);
      arg0.parentId = children.id;
      self.version = self.version + 1;
      return self;
    }
  };
  items[4] = {
    key: "addNode",
    value(type) {
      let root = arg1;
      let flag = arg2;
      const self = this;
      if (arg1 === undefined) {
        root = self.root;
      }
      if (flag === undefined) {
        flag = true;
      }
      callback(closure_2[2])(type.type !== constants.ROOT, "[GUILDS TREE] Tried adding another root node into the tree");
      callback(closure_2[2])(null != type.id, "[GUILDS TREE] Tried adding a node without an id");
      callback(closure_2[2])(null == self.nodes[type.id], "[GUILDS TREE] Tried adding a node that already exists (" + type.id + ")");
      self.nodes[type.id] = type;
      self.version = self.version + 1;
      return self.moveInto(type, root, flag);
    }
  };
  items[5] = {
    key: "removeNode",
    value(id) {
      callback(closure_2[2])(id !== this.root, "[GUILDS TREE] Tried removing the root node from the tree");
      callback(closure_2[2])(null != id.id, "[GUILDS TREE] Tried removing a node without an id");
      this._pluckNode(id);
      id.parentId = undefined;
      delete r2[r1];
      this.version = this.version + 1;
      return this;
    }
  };
  items[6] = {
    key: "replaceNode",
    value(id, id2) {
      const self = this;
      callback(closure_2[2])(null != id.id, "[GUILDS TREE] Tried replacing a node without an id");
      callback(closure_2[2])(null != id2.id, "[GUILDS TREE] Tried replacing a node with one that does not have an id");
      if (null != id.parentId) {
        let root = self.nodes[id.parentId];
      } else {
        root = self.root;
      }
      const children = root.children;
      const index = children.indexOf(id);
      callback(closure_2[2])(index >= 0, "[GUILDS TREE] existing node (" + id.id + ") did not exist within its specified parent (" + id.parentId + ")");
      const items = [...root.children];
      root.children = items;
      const children1 = root.children;
      children1.splice(index, 1, id2);
      id2.parentId = root.id;
      id.parentId = undefined;
      delete r2[r1];
      self.nodes[id2.id] = id2;
      self.version = self.version + 1;
      return self;
    }
  };
  items[7] = {
    key: "cloneNode",
    value(arg0) {
      return GuildsTree(closure_2[3]).clone(arg0);
    }
  };
  items[8] = {
    key: "convertToFolder",
    value(arg0) {
      let node;
      const self = this;
      let tmp = callback3();
      if (null != this.getNode(tmp)) {
        do {
          let tmp2 = closure_6;
          let tmp3 = closure_6();
          tmp = tmp3;
          node = self.getNode(tmp3);
        } while (null != node);
      }
      const obj = { type: constants.FOLDER, id: tmp, expanded: false, children: [] };
      self.replaceNode(arg0, obj);
      self.removeNode(arg0);
      self.addNode(arg0, obj, false);
      self.version = self.version + 1;
      return obj;
    }
  };
  items[9] = {
    key: "allNodes",
    value() {
      return Object.values(this.nodes);
    }
  };
  items[10] = {
    key: "getNode",
    value(arg0) {
      return this.nodes[arg0];
    }
  };
  items[11] = {
    key: "getRoots",
    value() {
      return this.root.children;
    }
  };
  items[12] = {
    key: "size",
    get() {
      return this.allNodes().length;
    }
  };
  items[13] = {
    key: "sortedGuildNodes",
    value() {
      function collectChildren(root) {
        if (root.type === constants.GUILD) {
          const items = [root];
          let items1 = items;
        } else if (null == root.children) {
          items1 = [];
        } else {
          const children = root.children;
          const mapped = children.map((arg0) => callback(arg0));
          items1 = mapped.flat();
        }
        return items1;
      }
      const GuildsTree = collectChildren;
      return collectChildren(this.root);
    }
  };
  items[14] = {
    key: "_pluckNode",
    value(parentId) {
      const self = this;
      const GuildsTree = parentId;
      if (null != parentId.parentId) {
        let root = self.nodes[parentId.parentId];
      } else {
        root = self.root;
      }
      callback(closure_2[2])(null != root, "[GUILDS TREE] source node (" + parentId.id + ") had a parent id (" + parentId.parentId + ") which doesn't exist in the tree");
      const children = root.children;
      const tmp = callback(closure_2[2]);
      const tmp2 = null != root;
      callback(closure_2[2])(null != children, "[GUILDS TREE] source node (" + parentId.id + ") had a parent id (" + parentId.parentId + ") which contains no children");
      root.children = children.filter((arg0) => arg0 !== arg0);
      parentId.parentId = undefined;
      self.version = self.version + 1;
    }
  };
  return callback(GuildsTree, items);
}();
const result = arg1(dependencyMap[4]).fileFinishedImporting("modules/guilds_bar/GuildsTree.tsx");

export const GuildsNodeType = obj;
export const GuildsTree = tmp2;
export const createGuildNode = function createGuildNode(value, id) {
  const obj = { type: obj.GUILD, id: value, parentId: id, children: [], unavailable: false };
  return obj;
};
export const createFolderNode = function createFolderNode(value, parentId, closure_11) {
  let tmp = closure_11;
  const obj = { type: obj.FOLDER, id: value.folderId, parentId };
  const folderName = value.folderName;
  let tmp2;
  if (null != folderName) {
    tmp2 = folderName;
  }
  obj.name = tmp2;
  const folderColor = value.folderColor;
  let tmp3;
  if (null != folderColor) {
    tmp3 = folderColor;
  }
  obj.color = tmp3;
  if (null == tmp) {
    const expanded = value.expanded;
    tmp = null != expanded && expanded;
    const tmp4 = null != expanded && expanded;
  }
  obj.expanded = tmp;
  obj.children = [];
  return obj;
};
