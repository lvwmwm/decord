// Module ID: 11313
// Function ID: 88045
// Name: getContainerStyles
// Dependencies: []
// Exports: default

// Module 11313 (getContainerStyles)
function getContainerStyles(arg0) {
  if (obj.RED === arg0) {
    let obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_FEEDBACK_CRITICAL, borderColor: importDefault(dependencyMap[3]).colors.BORDER_FEEDBACK_CRITICAL };
    return obj;
  } else if (obj.YELLOW === arg0) {
    obj = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_FEEDBACK_WARNING, borderColor: importDefault(dependencyMap[3]).colors.STATUS_WARNING };
    return obj;
  }
}
function getTextColor(arg0) {
  if (obj.RED === arg0) {
    return importDefault(dependencyMap[3]).colors.TEXT_FEEDBACK_CRITICAL;
  } else if (obj.YELLOW === arg0) {
    return importDefault(dependencyMap[3]).colors.TEXT_FEEDBACK_WARNING;
  }
}
importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const jsx = arg1(dependencyMap[2]).jsx;
const obj = { RED: 0, [0]: "RED", YELLOW: 1, [1]: "YELLOW" };
let closure_6 = arg1(dependencyMap[4]).createStyles((arg0) => {
  let obj = {};
  obj = {};
  const merged = Object.assign(getContainerStyles(arg0));
  obj["alignItems"] = "center";
  obj["borderRadius"] = importDefault(dependencyMap[3]).radii.xs;
  obj["borderWidth"] = 1;
  obj["padding"] = 8;
  obj["width"] = "100%";
  obj.container = obj;
  obj = { textAlign: "center", color: getTextColor(arg0) };
  obj.text = obj;
  return obj;
});
const obj2 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/guild_role_subscriptions/native/components/MessageBlock.tsx");

export default function MessageBlock(children) {
  const tmp = callback(children.color);
  let obj = { style: tmp.container, children: jsx(arg1(dependencyMap[5]).LegacyText, obj) };
  obj = { style: tmp.text, children: children.children };
  return <View {...obj} />;
};
export const MessageBlockColors = obj;
