// Module ID: 13979
// Function ID: 106289
// Name: NavigateForwardButton
// Dependencies: [0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 13979 (NavigateForwardButton)
import "result";
import result from "result";
import result from "result";
import result from "result";

({ jsx: closure_3, jsxs: closure_4 } = result);
result = {};
result = { "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006919491832839148, "Null": 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000033995391320984753, "Null": 139264.00004577637, "Null": 63211459066726305000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, backgroundColor: require("result").colors.BACKGROUND_MOD_NORMAL };
result.container = result;
result.text = { flexGrow: 1 };
result = result.createStyles(result);
result = result.fileFinishedImporting("modules/guild_role_subscriptions/native/components/NavigateForwardButton.tsx");

export default function NavigateForwardButton(arg0) {
  let onPress;
  let text;
  ({ onPress, text } = arg0);
  const tmp = result();
  let obj = { style: tmp.container, onPress };
  obj = { Promise: "<string:1340029796>", marginTop: "<string:1072076685>", flags: "<string:16823617>", style: tmp.text, children: text };
  const items = [callback(arg1(dependencyMap[5]).Text, obj), ];
  obj = { source: importDefault(dependencyMap[7]) };
  items[1] = callback(arg1(dependencyMap[6]).Icon, obj);
  obj.children = items;
  return callback2(arg1(dependencyMap[4]).PressableHighlight, obj);
};
