// Module ID: 13986
// Function ID: 106312
// Name: NavigateForwardButton
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13986 (NavigateForwardButton)
import "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";
import __exportStarResult1 from "__exportStarResult1";

({ jsx: closure_3, jsxs: closure_4 } = __exportStarResult1);
__exportStarResult1 = {};
__exportStarResult1 = { "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, "Bool(true)": true, backgroundColor: require("__exportStarResult1").colors.BACKGROUND_MOD_NORMAL };
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
  obj = { "Null": "<string:1340029796>", "Null": "<string:1072076685>", "Null": "<string:16825665>", style: tmp.text, children: text };
  const items = [callback(arg1(dependencyMap[5]).Text, obj), ];
  obj = { source: importDefault(dependencyMap[7]) };
  items[1] = callback(arg1(dependencyMap[6]).Icon, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[4]).PressableHighlight, obj);
};
