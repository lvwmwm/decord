// Module ID: 4970
// Function ID: 42706
// Name: _isNativeReflectConstruct
// Dependencies: [6, 7, 15, 17, 18, 3948, 3759, 1316, 4971, 4469, 1917, 1838, 1196, 4325, 1849, 4972, 636, 44, 1327, 1916, 2]

// Module 4970 (_isNativeReflectConstruct)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_4 from "_isNativeReflectConstruct";
import randomFolderId from "randomFolderId";
import invariant from "invariant";
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import closure_12 from "_isNativeReflectConstruct";
import closure_13 from "_isNativeReflectConstruct";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import closure_15 from "_isNativeReflectConstruct";
import closure_16 from "_isNativeReflectConstruct";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";
import areArraysShallowlyEqual from "areArraysShallowlyEqual";
import tmp4 from "_isNativeReflectConstruct";
import importDefaultResult from "_isNativeReflectConstruct";

const require = arg1;
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function _createForOfIteratorHelperLoose(iterable) {
  let closure_0 = iterable;
  iterable = "undefined" !== typeof Symbol;
  if (iterable) {
    const _Symbol = Symbol;
    iterable = iterable[Symbol.iterator];
  }
  if (!iterable) {
    iterable = iterable[Symbol.iterator];
  }
  if (iterable) {
    const iter = iterable.call(iterable);
    const next = iter.next;
    return next.bind(iter);
  } else {
    const _Array = Array;
    let tmp = iterable;
    if (!Array.isArray(iterable)) {
      let tmp2;
      if (iterable) {
        if ("string" === typeof iterable) {
          tmp2 = _arrayLikeToArray(iterable, undefined);
        } else {
          const toString = {}.toString;
          const substr = toString.call(iterable).slice(8, -1);
          let name = substr;
          if (tmp3) {
            name = iterable.constructor.name;
          }
          if ("Map" !== name) {
            if ("Set" !== name) {
              if ("Arguments" === name) {
                let arr = _arrayLikeToArray(iterable, undefined);
              } else {
                let obj = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
              }
            }
            tmp2 = arr;
          }
          const _Array2 = Array;
          arr = Array.from(iterable);
          const callResult = toString.call(iterable);
          tmp3 = "Object" === substr && iterable.constructor;
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
      closure_0 = tmp;
    }
    let c1 = 0;
    return () => {
      if (closure_1 >= length.length) {
        let obj = { done: true };
      } else {
        obj = { done: false };
        closure_1 = tmp3 + 1;
        obj.value = length[+closure_1];
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
  if (require(4972) /* randomFolderId */.GuildsNodeType.FOLDER === type) {
    let obj = {};
    ({ id: obj2.folderId, name: obj2.folderName, color: obj2.folderColor, expanded: obj2.expanded, children } = type);
    obj.guildIds = children.map((id) => id.id);
    return obj;
  } else if (require(4972) /* randomFolderId */.GuildsNodeType.GUILD === type) {
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
  let iter5;
  let iter9;
  let guildsTree = new require(4972) /* randomFolderId */.GuildsTree();
  if (0 === arg0.length) {
    if (arg1.length > 0) {
      const tmp19 = _createForOfIteratorHelperLoose(arg1);
      let iter6 = tmp19();
      if (!iter6.done) {
        do {
          let tmp20 = guildsTree;
          let tmp21 = require;
          let tmp22 = dependencyMap;
          let obj3 = require(4972) /* randomFolderId */;
          let addNodeResult = guildsTree.addNode(obj3.createGuildNode(iter6.value));
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
        let tmp28 = require;
        let tmp29 = dependencyMap;
        let tmp30 = value.type === require(4972) /* randomFolderId */.GuildsNodeType.GUILD;
        if (tmp30) {
          let tmp31 = closure_9;
          let isLurkingResult = closure_9.isLurking(value.id);
          if (!isLurkingResult) {
            let tmp33 = closure_13;
            isLurkingResult = closure_13.isCurrentUserGuest(value.id);
          }
          if (!isLurkingResult) {
            let tmp34 = store2;
            let tmp35 = null == store2.getGuild(value.id);
            if (tmp35) {
              let tmp36 = unavailable;
              tmp35 = !unavailable.isUnavailable(value.id);
            }
            isLurkingResult = tmp35;
          }
          tmp30 = isLurkingResult;
        }
        if (tmp30) {
          let tmp37 = guildsTree;
          let removeNodeResult = guildsTree.removeNode(value);
        }
        iter9 = tmp26();
        iter8 = iter9;
      } while (!iter9.done);
    }
    const _Object = Object;
    const values = Object.values(guildsTree.nodes);
    for (let num = 0; num < values.length; num = num + 1) {
      let element = values[num];
      let tmp41 = require;
      let tmp42 = dependencyMap;
      let tmp43 = element.type === require(4972) /* randomFolderId */.GuildsNodeType.FOLDER && 0 === element.children.length;
      if (tmp43) {
        let tmp44 = guildsTree;
        let removeNodeResult1 = guildsTree.removeNode(element);
      }
    }
    insertUnsortedGuilds((arg0) => null == guildsTree.nodes[arg0], (value) => guildsTree.addNode(outer1_0(outer1_2[15]).createGuildNode(value), guildsTree.root, false));
    guildsTree.version = tmp.version;
    const tmp52 = importDefault(636)(tmp, guildsTree);
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
    do {
      value = iter2.value;
      let tmp7 = tmp4;
      let tmp8 = tmp5;
      let tmp9 = tmp6;
      if (0 !== value.guildIds.length) {
        if (null == value.folderId) {
          let tmp14 = guildsTree;
          let tmp15 = require;
          let tmp16 = dependencyMap;
          let obj2 = require(4972) /* randomFolderId */;
          let addNodeResult1 = guildsTree.addNode(obj2.createGuildNode(value.guildIds[0]));
          tmp7 = tmp4;
          tmp8 = tmp5;
          tmp9 = tmp6;
        } else {
          let tmp54 = require;
          let tmp55 = dependencyMap;
          let obj4 = require(4972) /* randomFolderId */;
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
            let tmp11 = require;
            let tmp12 = dependencyMap;
            let obj = require(4972) /* randomFolderId */;
            let addNodeResult3 = guildsTree.addNode(obj.createGuildNode(iter4.value), folderNode);
            let iter3 = tmp61();
            iter4 = iter3;
            tmp7 = folderNode;
            tmp8 = iter3;
            tmp9 = tmp61;
          }
        }
      }
      iter5 = tmp3();
      tmp4 = tmp7;
      tmp5 = tmp8;
      tmp6 = tmp9;
      iter2 = iter5;
    } while (!iter5.done);
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
    tmp6Result = !importDefault(636)(guildFolders, guildFolders);
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
        tmp5 = node.type === require(4972) /* randomFolderId */.GuildsNodeType.FOLDER;
      }
      const _HermesInternal = HermesInternal;
      importDefault(44)(!tmp5, "[SORTED GUILDS] Can't combine a folder " + node.id + " with another guilds list item");
      let tmp12 = combine;
      const tmp31 = importDefault(44);
      const tmp6 = !tmp5;
      if (combine) {
        tmp12 = null != node1.parentId;
      }
      const _HermesInternal2 = HermesInternal;
      importDefault(44)(!tmp12, "[SORTED GUILDS] Can't combine with a guild " + node1.id + " that's already inside of a folder");
      const tmp11 = importDefault(44);
      const tmp13 = !tmp12;
      const tmp17 = importDefault(44);
      const _HermesInternal3 = HermesInternal;
      tmp17(!(node.type === require(4972) /* randomFolderId */.GuildsNodeType.FOLDER && null != node1.parentId), "[SORTED GUILDS] Can't move a folder " + node.id + " to inside of another folder " + node1.parentId);
      if (combine) {
        let convertToFolderResult = node1;
        if (node1.type !== require(4972) /* randomFolderId */.GuildsNodeType.FOLDER) {
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
  let c0;
  const arr = sourceIds.shift();
  if (null == arr) {
    return false;
  } else {
    let node = guildsTree.getNode(arr);
    if (null == node) {
      return false;
    } else {
      const convertToFolderResult = guildsTree.convertToFolder(node);
      c0 = convertToFolderResult;
      convertToFolderResult.name = sourceIds.name;
      const item = sourceIds.forEach((arg0) => {
        const node = outer1_18.getNode(arg0);
        if (null != node) {
          outer1_18.moveInto(node, c0, true);
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
  let node1;
  let set;
  let set1;
  let node = guildsTree.getNode(targetId);
  if (null == node) {
    return false;
  } else if (node.type !== node1(set1[15]).GuildsNodeType.FOLDER) {
    return false;
  } else {
    let name;
    if ("" !== merged.name) {
      name = merged.name;
    }
    if (name !== node.name) {
      const cloneNodeResult = guildsTree.cloneNode(node);
      set(set1[17])(cloneNodeResult.id === node.id, "[SORTED GUILDS] Replacement folder node must have same id.");
      cloneNodeResult.name = name;
      guildsTree.replaceNode(node, cloneNodeResult);
    }
    node1 = guildsTree.getNode(targetId);
    if (null == node1) {
      return false;
    } else {
      const children = node1.children;
      const mapped = children.map((id) => id.id);
      const found = mapped.filter(node1(set1[18]).isNotNullish);
      const _Set = Set;
      set = new Set(found);
      const _Set2 = Set;
      set1 = new Set(sourceIds);
      const _Set3 = Set;
      const items = [];
      HermesBuiltin.arraySpread(found, 0);
      const set2 = new Set(items.filter((arg0) => !set1.has(arg0)));
      const found1 = sourceIds.filter((arg0) => !set.has(arg0));
      const item = found1.forEach((arg0) => {
        const node = outer1_18.getNode(arg0);
        if (null != node) {
          outer1_18.moveInto(node, node1, true);
        }
      });
      const item1 = set2.forEach((arg0) => {
        const node = outer1_18.getNode(arg0);
        if (null != node) {
          outer1_18.moveNextTo(node, node1, true);
        }
      });
    }
  }
}
function handleGuildFolderDeleteLocal(targetId) {
  const element = guildsTree.getNode(targetId.targetId);
  let tmp = null != element;
  if (tmp) {
    const tmp4 = element.type === element(4972).GuildsNodeType.FOLDER;
    if (tmp4) {
      const children = element.children;
      const mapped = children.map((id) => id.id);
      const found = mapped.filter(element(1327).isNotNullish);
      const item = found.forEach((arg0) => {
        const node = outer1_18.getNode(arg0);
        if (null != node) {
          outer1_18.moveNextTo(node, element, true);
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
  currentUser = currentUser.getCurrentUser();
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
    if (node.type === require(4972) /* randomFolderId */.GuildsNodeType.FOLDER) {
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
    if (node.type === require(4972) /* randomFolderId */.GuildsNodeType.FOLDER) {
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
      let tmp2 = require;
      let tmp3 = dependencyMap;
      let tmp4 = value.type === require(4972) /* randomFolderId */.GuildsNodeType.FOLDER && value.expanded;
      if (tmp4) {
        let tmp5 = setNodeExpanded;
        let tmp6 = setNodeExpanded(value, false);
      }
      iter2 = tmp();
      iter = iter2;
    } while (!iter2.done);
  }
}
function setNodeExpanded(node, expanded) {
  const cloneNodeResult = guildsTree.cloneNode(node);
  importDefault(44)(cloneNodeResult.id === node.id, "[SORTED GUILDS] setNodeExpanded: Replacement folder node must have same id.");
  cloneNodeResult.expanded = expanded;
  guildsTree.replaceNode(node, cloneNodeResult);
}
let guildsTree = new require("randomFolderId").GuildsTree();
let closure_19 = areArraysShallowlyEqual.cachedFunction((sortedGuildNodes) => sortedGuildNodes.sortedGuildNodes().map((id) => id.id));
let closure_20 = areArraysShallowlyEqual.cachedFunction((getRoots) => {
  const roots = getRoots.getRoots();
  return roots.map(convertNodeToGuildFolder);
});
let closure_21 = areArraysShallowlyEqual.cachedFunction((root) => {
  const items = [];
  function flattenNodes(root) {
    let done;
    const type = root.type;
    if (items(outer1_2[15]).GuildsNodeType.FOLDER === type) {
      items.push(root);
    }
    const tmp5 = outer1_24(root.children);
    let iter = tmp5();
    if (!iter.done) {
      do {
        let tmp6 = flattenNodes;
        let tmp7 = flattenNodes(iter.value);
        let iter2 = tmp5();
        iter = iter2;
        done = iter2.done;
      } while (!done);
    }
  }
  flattenNodes(root.root);
  return items;
});
let closure_22 = areArraysShallowlyEqual.cachedFunction((root) => {
  const children = root.root.children;
  return children.map(convertNodeToGuildFolder);
});
tmp4.displayName = "SortedGuildStore";
tmp4.LATEST_SNAPSHOT_VERSION = 2;
tmp4 = new tmp4();
let result = require("_possibleConstructorReturn").fileFinishedImporting("stores/SortedGuildStore.tsx");

export default tmp4;
export const GuildsNodeType = require("randomFolderId").GuildsNodeType;
export { insertUnsortedGuilds };
