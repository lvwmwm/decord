// Module ID: 5240
// Function ID: 44272
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 5240 (_isNativeReflectConstruct)
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
function insertUnsortedGuilds(arg0, arg1) {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(store2.getGuildIds());
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let isLurkingResult = !arg0(value);
      if (!isLurkingResult) {
        let tmp3 = closure_9;
        isLurkingResult = closure_9.isLurking(value);
      }
      if (!isLurkingResult) {
        let tmp4 = closure_13;
        isLurkingResult = closure_13.isCurrentUserGuest(value);
      }
      if (!isLurkingResult) {
        let tmp5 = arg1(value);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function convertNodeToGuildFolder(type) {
  let children;
  type = type.type;
  if (arg1(dependencyMap[15]).GuildsNodeType.FOLDER === type) {
    let obj = {};
    ({ id: obj2.folderId, name: obj2.folderName, color: obj2.folderColor, expanded: obj2.expanded, children } = type);
    obj.guildIds = children.map((id) => id.id);
    return obj;
  } else if (arg1(dependencyMap[15]).GuildsNodeType.GUILD === type) {
    obj = { folderId: undefined };
    const items = [type.id];
    obj.guildIds = items;
    return obj;
  } else {
    const _Error = Error;
    throw Error("[SortedGuildStore] Unexpected guilds tree node type.");
  }
}
function rebuildTree(arg0, arg1) {
  let done;
  let iter9;
  let guildsTree = new arg1(dependencyMap[15]).GuildsTree();
  if (0 === arg0.length) {
    if (arg1.length > 0) {
      const tmp19 = _createForOfIteratorHelperLoose(arg1);
      let iter6 = tmp19();
      if (!iter6.done) {
        do {
          let tmp20 = closure_18;
          let tmp21 = closure_0;
          let tmp22 = closure_2;
          let obj3 = closure_0(closure_2[15]);
          let addNodeResult = closure_18.addNode(obj3.createGuildNode(iter6.value));
          let iter7 = tmp19();
          iter6 = iter7;
          done = iter7.done;
        } while (!done);
      }
    }
    const tmp26 = _createForOfIteratorHelperLoose(guildsTree.allNodes());
    let iter8 = tmp26();
    if (!iter8.done) {
      do {
        let value = iter8.value;
        let tmp28 = closure_0;
        let tmp29 = closure_2;
        let tmp30 = value.type === closure_0(closure_2[15]).GuildsNodeType.GUILD;
        if (tmp30) {
          let tmp31 = closure_9;
          let isLurkingResult = closure_9.isLurking(value.id);
          if (!isLurkingResult) {
            let tmp33 = closure_13;
            isLurkingResult = closure_13.isCurrentUserGuest(value.id);
          }
          if (!isLurkingResult) {
            let tmp34 = closure_14;
            let tmp35 = null == closure_14.getGuild(value.id);
            if (tmp35) {
              let tmp36 = closure_12;
              tmp35 = !closure_12.isUnavailable(value.id);
            }
            isLurkingResult = tmp35;
          }
          tmp30 = isLurkingResult;
        }
        if (tmp30) {
          let tmp37 = closure_18;
          let removeNodeResult = closure_18.removeNode(value);
        }
        iter9 = tmp26();
        iter8 = iter9;
      } while (!iter9.done);
    }
    const _Object = Object;
    const values = Object.values(guildsTree.nodes);
    for (let num = 0; num < values.length; num = num + 1) {
      let element = values[num];
      let tmp41 = arg1;
      let tmp42 = dependencyMap;
      let tmp43 = element.type === arg1(dependencyMap[15]).GuildsNodeType.FOLDER && 0 === element.children.length;
      if (tmp43) {
        let tmp44 = guildsTree;
        let removeNodeResult1 = guildsTree.removeNode(element);
      }
    }
    insertUnsortedGuilds((arg0) => null == tmp.nodes[arg0], (value) => tmp.addNode(callback(closure_2[15]).createGuildNode(value), tmp.root, false));
    guildsTree.version = tmp.version;
    const tmp52 = importDefault(dependencyMap[16])(tmp, guildsTree);
    if (tmp52) {
      guildsTree = tmp;
    } else {
      guildsTree.version = tmp.version + 1;
    }
    return !tmp52;
  }
  const tmp3 = _createForOfIteratorHelperLoose(arg0);
  const iter = tmp3();
  let iter2 = iter;
  if (!iter.done) {
    while (true) {
      value = iter2.value;
      let tmp7 = tmp4;
      let tmp8 = tmp5;
      let tmp9 = tmp6;
      if (0 !== value.guildIds.length) {
        if (null == value.folderId) {
          let tmp14 = guildsTree;
          let tmp15 = arg1;
          let tmp16 = dependencyMap;
          let obj2 = arg1(dependencyMap[15]);
          let addNodeResult1 = guildsTree.addNode(obj2.createGuildNode(value.guildIds[0]));
          tmp7 = tmp4;
          tmp8 = tmp5;
          tmp9 = tmp6;
        } else {
          let tmp54 = arg1;
          let tmp55 = dependencyMap;
          let obj4 = arg1(dependencyMap[15]);
          let tmp56 = closure_11;
          let folderNode = obj4.createFolderNode(value, undefined, closure_11.isFolderExpanded(value.folderId));
          let tmp58 = guildsTree;
          let addNodeResult2 = guildsTree.addNode(folderNode);
          let tmp60 = _createForOfIteratorHelperLoose;
          let tmp61 = _createForOfIteratorHelperLoose(value.guildIds);
          let iter10 = tmp61();
          let iter4 = iter10;
          tmp7 = folderNode;
          tmp8 = iter10;
          tmp9 = tmp61;
          if (!iter10.done) {
            let tmp10 = guildsTree;
            let tmp11 = arg1;
            let tmp12 = dependencyMap;
            let obj = arg1(dependencyMap[15]);
            let addNodeResult3 = guildsTree.addNode(obj.createGuildNode(iter4.value), folderNode);
            let iter3 = tmp61();
            iter4 = iter3;
            tmp7 = folderNode;
            tmp8 = iter3;
            tmp9 = tmp61;
          }
        }
      }
      let iter5 = tmp3();
      let tmp4 = tmp7;
      let tmp5 = tmp8;
      let tmp6 = tmp9;
      iter2 = iter5;
      if (iter5.done) {
        break;
      } else {
        // continue
      }
    }
  }
}
function handleRebuild() {
  let guildFolders = store.getGuildFolders();
  if (null == guildFolders) {
    guildFolders = [];
  }
  guildFolders = store.settings.guildFolders;
  let guildPositions;
  if (null != guildFolders) {
    guildPositions = guildFolders.guildPositions;
  }
  if (null == guildPositions) {
    guildPositions = [];
  }
  return rebuildTree(guildFolders, guildPositions);
}
function handleSettingsUpdate() {
  let guildFolders = store.getGuildFolders();
  let tmp6Result = null == guildFolders;
  if (!tmp6Result) {
    tmp6Result = !importDefault(dependencyMap[16])(guildFolders, guildFolders);
  }
  if (tmp6Result) {
    guildFolders = store.settings.guildFolders;
    let guildPositions;
    if (null != guildFolders) {
      guildPositions = guildFolders.guildPositions;
    }
    if (null == guildPositions) {
      guildPositions = [];
    }
    tmp6Result = rebuildTree(null != guildFolders ? guildFolders : [], guildPositions);
    const tmp6 = rebuildTree;
    const tmp7 = null != guildFolders ? guildFolders : [];
  }
  return tmp6Result;
}
function handleMoveById(sourceId) {
  let combine;
  let moveToBelow;
  ({ moveToBelow, combine } = sourceId);
  const node = guildsTree.getNode(sourceId.sourceId);
  const node1 = guildsTree.getNode(sourceId.targetId);
  if (null != node) {
    if (null != node1) {
      let tmp5 = combine;
      if (combine) {
        tmp5 = node.type === arg1(dependencyMap[15]).GuildsNodeType.FOLDER;
      }
      const _HermesInternal = HermesInternal;
      importDefault(dependencyMap[17])(!tmp5, "[SORTED GUILDS] Can't combine a folder " + node.id + " with another guilds list item");
      let tmp12 = combine;
      const tmp31 = importDefault(dependencyMap[17]);
      const tmp6 = !tmp5;
      if (combine) {
        tmp12 = null != node1.parentId;
      }
      const _HermesInternal2 = HermesInternal;
      importDefault(dependencyMap[17])(!tmp12, "[SORTED GUILDS] Can't combine with a guild " + node1.id + " that's already inside of a folder");
      const tmp11 = importDefault(dependencyMap[17]);
      const tmp13 = !tmp12;
      const tmp17 = importDefault(dependencyMap[17]);
      const _HermesInternal3 = HermesInternal;
      tmp17(!(node.type === arg1(dependencyMap[15]).GuildsNodeType.FOLDER && null != node1.parentId), "[SORTED GUILDS] Can't move a folder " + node.id + " to inside of another folder " + node1.parentId);
      if (combine) {
        let convertToFolderResult = node1;
        if (node1.type !== arg1(dependencyMap[15]).GuildsNodeType.FOLDER) {
          convertToFolderResult = guildsTree.convertToFolder(node1);
        }
        guildsTree.moveInto(node, convertToFolderResult, moveToBelow);
      } else {
        guildsTree.moveNextTo(node, node1, moveToBelow);
      }
    }
  }
  return false;
}
function handleGuildFolderCreateLocal(sourceIds) {
  sourceIds = sourceIds.sourceIds;
  let arg1;
  const arr = sourceIds.shift();
  if (null == arr) {
    return false;
  } else {
    const node = guildsTree.getNode(arr);
    if (null == node) {
      return false;
    } else {
      const convertToFolderResult = guildsTree.convertToFolder(node);
      arg1 = convertToFolderResult;
      convertToFolderResult.name = sourceIds.name;
      const item = sourceIds.forEach((arg0) => {
        const node = closure_18.getNode(arg0);
        if (null != node) {
          closure_18.moveInto(node, convertToFolderResult, true);
        }
      });
    }
  }
}
function handleGuildFolderEditLocal(arg0) {
  let sourceIds;
  let targetId;
  ({ targetId, sourceIds } = arg0);
  const obj = Object.create(null);
  obj.targetId = 0;
  obj.sourceIds = 0;
  const merged = Object.assign(arg0, obj);
  let arg1;
  let importDefault;
  let dependencyMap;
  const node = guildsTree.getNode(targetId);
  if (null == node) {
    return false;
  } else if (node.type !== arg1(dependencyMap[15]).GuildsNodeType.FOLDER) {
    return false;
  } else {
    let name;
    if ("" !== merged.name) {
      name = merged.name;
    }
    if (name !== node.name) {
      const cloneNodeResult = guildsTree.cloneNode(node);
      importDefault(dependencyMap[17])(cloneNodeResult.id === node.id, "[SORTED GUILDS] Replacement folder node must have same id.");
      cloneNodeResult.name = name;
      guildsTree.replaceNode(node, cloneNodeResult);
    }
    const node1 = guildsTree.getNode(targetId);
    arg1 = node1;
    if (null == node1) {
      return false;
    } else {
      const children = node1.children;
      const mapped = children.map((id) => id.id);
      const found = mapped.filter(arg1(dependencyMap[18]).isNotNullish);
      const _Set = Set;
      const set = new Set(found);
      importDefault = set;
      const _Set2 = Set;
      const set1 = new Set(sourceIds);
      dependencyMap = set1;
      const _Set3 = Set;
      const items = [];
      HermesBuiltin.arraySpread(found, 0);
      const set2 = new Set(items.filter((arg0) => !set1.has(arg0)));
      const found1 = sourceIds.filter((arg0) => !set.has(arg0));
      const item = found1.forEach((arg0) => {
        const node = store.getNode(arg0);
        if (null != node) {
          store.moveInto(node, node1, true);
        }
      });
      const item1 = set2.forEach((arg0) => {
        const node = store.getNode(arg0);
        if (null != node) {
          store.moveNextTo(node, node1, true);
        }
      });
    }
  }
}
function handleGuildFolderDeleteLocal(targetId) {
  const element = guildsTree.getNode(targetId.targetId);
  const arg1 = element;
  let tmp = null != element;
  if (tmp) {
    const tmp4 = element.type === arg1(dependencyMap[15]).GuildsNodeType.FOLDER;
    if (tmp4) {
      const children = element.children;
      const mapped = children.map((id) => id.id);
      const found = mapped.filter(arg1(dependencyMap[18]).isNotNullish);
      const item = found.forEach((arg0) => {
        const node = closure_18.getNode(arg0);
        if (null != node) {
          closure_18.moveNextTo(node, element, true);
        }
      });
    }
    tmp = tmp4;
  }
  return tmp;
}
function handleJoinedLurkingGuild(joinedAt) {
  let guildId;
  let user;
  joinedAt = joinedAt.joinedAt;
  ({ guildId, user } = joinedAt);
  const currentUser = currentUser.getCurrentUser();
  const guild = store2.getGuild(guildId);
  let id;
  if (null != currentUser) {
    id = currentUser.id;
  }
  if (id === user.id) {
    if (null != guild) {
      let date = joinedAt;
      if ("string" === typeof joinedAt) {
        const _Date = Date;
        date = new Date(joinedAt);
      }
      let tmp9 = date !== guild.joinedAt && null != date;
      if (tmp9) {
        tmp9 = handleRebuild();
      }
      return tmp9;
    }
  }
  return false;
}
function handleGuildFolderExpand(folderId) {
  folderId = folderId.folderId;
  const node = guildsTree.getNode(folderId);
  const isFolderExpandedResult = closure_11.isFolderExpanded(folderId);
  if (null != node) {
    if (node.type === arg1(dependencyMap[15]).GuildsNodeType.FOLDER) {
      if (node.expanded !== isFolderExpandedResult) {
        setNodeExpanded(node, isFolderExpandedResult);
      }
    }
  }
  return false;
}
function handleFolderExpanded(expanded) {
  expanded = expanded.expanded;
  const node = guildsTree.getNode(expanded.folderId);
  if (null != node) {
    if (node.type === arg1(dependencyMap[15]).GuildsNodeType.FOLDER) {
      if (node.expanded !== expanded) {
        setNodeExpanded(node, expanded);
      }
    }
  }
  return false;
}
function handleCollapseAll() {
  let iter2;
  const tmp = _createForOfIteratorHelperLoose(guildsTree.allNodes());
  let iter = tmp();
  if (!iter.done) {
    do {
      let value = iter.value;
      let tmp2 = closure_0;
      let tmp3 = closure_2;
      let tmp4 = value.type === closure_0(closure_2[15]).GuildsNodeType.FOLDER && value.expanded;
      if (tmp4) {
        let tmp5 = closure_39;
        let tmp6 = closure_39(value, false);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function setNodeExpanded(node, expanded) {
  const cloneNodeResult = guildsTree.cloneNode(node);
  importDefault(dependencyMap[17])(cloneNodeResult.id === node.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.");
  cloneNodeResult.expanded = expanded;
  guildsTree.replaceNode(node, cloneNodeResult);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
let closure_11 = importDefault(dependencyMap[8]);
let closure_12 = importDefault(dependencyMap[9]);
let closure_13 = importDefault(dependencyMap[10]);
let closure_14 = importDefault(dependencyMap[11]);
let closure_15 = importDefault(dependencyMap[13]);
let closure_16 = importDefault(dependencyMap[14]);
const guildsTree = new arg1(dependencyMap[15]).GuildsTree();
const importDefaultResult = importDefault(dependencyMap[12]);
let closure_19 = arg1(dependencyMap[19]).cachedFunction((sortedGuildNodes) => sortedGuildNodes.sortedGuildNodes().map((id) => id.id));
const obj = arg1(dependencyMap[19]);
let closure_20 = arg1(dependencyMap[19]).cachedFunction((getRoots) => {
  const roots = getRoots.getRoots();
  return roots.map(convertNodeToGuildFolder);
});
const obj2 = arg1(dependencyMap[19]);
let closure_21 = arg1(dependencyMap[19]).cachedFunction((root) => {
  const items = [];
  const arg1 = items;
  function flattenNodes(root) {
    let done;
    const type = root.type;
    if (items(closure_2[15]).GuildsNodeType.FOLDER === type) {
      items.push(root);
    }
    const tmp5 = callback(root.children);
    let iter = tmp5();
    if (!iter.done) {
      do {
        let tmp6 = closure_1;
        let tmp7 = closure_1(iter.value);
        let iter2 = tmp5();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  }
  const importDefault = flattenNodes;
  flattenNodes(root.root);
  return items;
});
const obj3 = arg1(dependencyMap[19]);
let closure_22 = arg1(dependencyMap[19]).cachedFunction((root) => {
  const children = root.root.children;
  return children.map(convertNodeToGuildFolder);
});
let tmp4 = (importDefaultResult) => {
  class SortedGuildStore {
    constructor() {
      self = this;
      tmp = closure_3(this, SortedGuildStore);
      obj = {
        CONNECTION_OPEN: closure_29,
        OVERLAY_INITIALIZE: closure_29,
        CACHE_LOADED() {
              return tmp2Result.loadCache();
            },
        GUILD_CREATE: closure_29,
        GUILD_DELETE: closure_29,
        GUILD_MEMBER_ADD: closure_35,
        USER_SETTINGS_PROTO_UPDATE: closure_30,
        GUILD_MOVE_BY_ID: closure_31,
        GUILD_FOLDER_CREATE_LOCAL: closure_32,
        GUILD_FOLDER_EDIT_LOCAL: closure_33,
        GUILD_FOLDER_DELETE_LOCAL: closure_34,
        TOGGLE_GUILD_FOLDER_EXPAND: closure_36,
        SET_GUILD_FOLDER_EXPANDED: closure_37,
        GUILD_FOLDER_COLLAPSE: closure_38
      };
      items = [];
      items[0] = obj;
      obj2 = closure_6(SortedGuildStore);
      tmp2 = closure_5;
      if (closure_23()) {
        tmp4 = globalThis;
        _Reflect = Reflect;
        tmp5 = closure_6;
        constructResult = Reflect.construct(obj2, items, closure_6(self).constructor);
      } else {
        constructResult = obj2.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      SortedGuildStore = tmp2Result;
      tmp2Result.loadCache = () => {
        let iter;
        const snapshot = tmp2Result.readSnapshot(tmp2Result.LATEST_SNAPSHOT_VERSION);
        let tree;
        if (null != snapshot) {
          tree = snapshot.tree;
        }
        if (null != tree) {
          const GuildsTree = tmp2Result(closure_2[15]).GuildsTree;
          const prototype = GuildsTree.prototype;
          const guildsTree = new GuildsTree();
          const snapshot1 = guildsTree.loadSnapshot(tree);
          const tmp14 = callback(guildsTree.allNodes());
          let iter2 = tmp14();
          if (!iter2.done) {
            do {
              let value = iter2.value;
              let tmp3 = closure_0;
              let tmp4 = closure_2;
              if (value.type === closure_0(closure_2[15]).GuildsNodeType.FOLDER) {
                let tmp5 = closure_11;
                value.expanded = closure_11.isFolderExpanded(value.id);
              }
              iter = tmp14();
              iter2 = iter;
            } while (!iter.done);
          }
        }
      };
      return tmp2Result;
    }
  }
  const arg1 = SortedGuildStore;
  callback2(SortedGuildStore, importDefaultResult);
  let obj = {
    key: "initialize",
    value() {
      this.waitFor(closure_14, closure_15, closure_10, closure_12, closure_9, closure_11, closure_8);
    }
  };
  const items = [obj, , , , , , , , ];
  obj = {
    key: "getGuildsTree",
    value() {
      return closure_18;
    }
  };
  items[1] = obj;
  obj = {
    key: "getGuildFolders",
    value() {
      return callback4(store, store.version);
    }
  };
  items[2] = obj;
  items[3] = {
    key: "getGuildFolderById",
    value(arg0) {
      const SortedGuildStore = arg0;
      const guildFolders = this.getGuildFolders();
      return guildFolders.find((folderId) => folderId.folderId === folderId);
    }
  };
  items[4] = {
    key: "getFlattenedGuildIds",
    value() {
      return callback3(store, store.version);
    }
  };
  items[5] = {
    key: "getFlattenedGuildFolderList",
    value() {
      return callback5(store, store.version);
    }
  };
  items[6] = {
    key: "getCompatibleGuildFolders",
    value() {
      return callback6(store, store.version);
    }
  };
  items[7] = {
    key: "getFastListGuildFolders",
    value() {
      return store.getRoots();
    }
  };
  items[8] = {
    key: "takeSnapshot",
    value() {
      let obj = { version: SortedGuildStore.LATEST_SNAPSHOT_VERSION };
      obj = { tree: store.getSnapshot() };
      obj.data = obj;
      return obj;
    }
  };
  return callback(SortedGuildStore, items);
}(importDefaultResult);
tmp4.displayName = "SortedGuildStore";
tmp4.LATEST_SNAPSHOT_VERSION = 2;
tmp4 = new tmp4();
const obj4 = arg1(dependencyMap[19]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("stores/SortedGuildStore.tsx");

export default tmp4;
export const GuildsNodeType = arg1(dependencyMap[15]).GuildsNodeType;
export { insertUnsortedGuilds };
