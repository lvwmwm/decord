// Module ID: 14744
// Function ID: 111183
// Name: toNeighbor
// Dependencies: []
// Exports: default

// Module 14744 (toNeighbor)
function toNeighbor(node) {
  let tmp = null;
  if (null != node) {
    const obj = { node, isFolder: node.type === arg1(dependencyMap[1]).GuildsNodeType.FOLDER };
    tmp = obj;
  }
  return tmp;
}
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[2]).fileFinishedImporting("modules/guilds_bar/native/utils/getGuildBarNeighbors.tsx");

export default function getGuildBarNeighbors(arg0) {
  const guildsTree = guildsTree.getGuildsTree();
  const node = guildsTree.getNode(arg0);
  if (null != node) {
    if (node.type === arg1(dependencyMap[1]).GuildsNodeType.GUILD) {
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
          if (root.type === arg1(dependencyMap[1]).GuildsNodeType.FOLDER) {
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
