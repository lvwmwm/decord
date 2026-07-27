// Module ID: 14927
// Function ID: 113848
// Name: toNeighbor
// Dependencies: [4971, 4973, 2]
// Exports: default

// Module 14927 (toNeighbor)
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

const require = arg1;
function toNeighbor(node) {
  let tmp = null;
  if (null != node) {
    const obj = { node, isFolder: node.type === require(4973) /* randomFolderId */.GuildsNodeType.FOLDER };
    tmp = obj;
  }
  return tmp;
}
const result = require("set").fileFinishedImporting("modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx");

export default function getGuildBarNeighbors(arg0) {
  guildsTree = guildsTree.getGuildsTree();
  const node = guildsTree.getNode(arg0);
  if (null != node) {
    if (node.type === require(4973) /* randomFolderId */.GuildsNodeType.GUILD) {
      if (null != node.parentId) {
        let root = guildsTree.getNode(node.parentId);
      } else {
        root = guildsTree.root;
      }
      if (null == root) {
        return null;
      } else {
        const children = root.children;
        const index = children.indexOf(node);
        if (index < 0) {
          return null;
        } else {
          const obj = {};
          let tmp4 = null;
          if (root.type === require(4973) /* randomFolderId */.GuildsNodeType.FOLDER) {
            tmp4 = root;
          }
          obj.containingFolder = tmp4;
          obj.above = toNeighbor(root.children[index - 1]);
          obj.below = toNeighbor(root.children[index + 1]);
          return obj;
        }
      }
    }
  }
  return null;
};
