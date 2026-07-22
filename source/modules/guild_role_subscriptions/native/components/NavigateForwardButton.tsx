// Module ID: 13996
// Function ID: 106384
// Name: NavigateForwardButton
// Dependencies: [4294967295, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13996 (NavigateForwardButton)
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

importAll(dependencyMap[0]);
({ jsx: closure_3, jsxs: closure_4 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { "Bool(true)": -352059390, "Bool(true)": -984547326, "Bool(true)": -1469300479, "Bool(true)": -347013118, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_MOD_NORMAL };
__exportStarResult1.container = __exportStarResult1;
__exportStarResult1.text = { flexGrow: 1 };
__exportStarResult1 = __exportStarResult1.createStyles(__exportStarResult1);
const result = __exportStarResult1.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  let onPress;
  let text;
  ({ onPress, text } = arg0);
  const tmp = __exportStarResult1();
  let obj = { style: tmp.container, onPress };
  obj = { "Null": "isArray", "Null": "isArray", alignItems: "isArray", style: tmp.text, children: text };
  const items = [callback(arg1(dependencyMap[5]).Text, obj), ];
  obj = { source: importDefault(dependencyMap[7]) };
  items[1] = callback(arg1(dependencyMap[6]).Icon, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[4]).PressableHighlight, obj);
};
