// Module ID: 10257
// Function ID: 79271
// Name: Timestamp
// Dependencies: []
// Exports: default

// Module 10257 (Timestamp)
importAll(dependencyMap[0]);
const jsx = arg1(dependencyMap[1]).jsx;
let obj = arg1(dependencyMap[2]);
obj = {};
obj = { color: importDefault(dependencyMap[3]).colors.TEXT_DEFAULT, backgroundColor: importDefault(dependencyMap[3]).colors.BORDER_SUBTLE };
obj.timestamp = obj;
let closure_4 = obj.createStyles(obj);
const result = arg1(dependencyMap[7]).fileFinishedImporting("modules/markup/Timestamp.native.tsx");

export default function Timestamp(node) {
  node = node.node;
  const arg1 = node;
  let style = node.style;
  const tmp = callback();
  const obj = {};
  const timestamp = tmp.timestamp;
  if (null != timestamp) {
    style = timestamp;
  }
  obj.style = style;
  obj.onPress = function onPress() {
    let obj = callback(closure_2[6]);
    obj = { key: "TIMESTAMP", content: node.full };
    obj.open(obj);
  };
  obj.children = importDefault(dependencyMap[4])(node);
  return jsx(arg1(dependencyMap[5]).LegacyText, obj);
};
