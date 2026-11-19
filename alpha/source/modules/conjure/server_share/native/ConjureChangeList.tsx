// Module ID: 18338
// Function ID: 18339
// Name: ConjureChangeList
// Dependencies: [19, 17, 21, 12108, 7585, 17057, 7729, 6921, 10010, 6919, 12260, 13686, 12372, 10309, 4792, 575, 5808, 5383, 1113, 4089, 2]
// Exports: default

// Module 18338 (ConjureChangeList)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import _modDef4089 from "module_4089" /* 4089 */;
import Text_Text from "Text/Text" /* 5383 */;
import Stack_Stack from "Stack/Stack" /* 5808 */;
import GroupIcon from "GroupIcon" /* 6919 */;
import GameControllerIcon from "GameControllerIcon" /* 6921 */;
import AppsIcon from "AppsIcon" /* 7585 */;
import IdCardIcon from "IdCardIcon" /* 7729 */;
import ShieldIcon from "ShieldIcon" /* 10010 */;
import SettingsIcon from "SettingsIcon" /* 10309 */;
import RobotIcon from "RobotIcon" /* 12108 */;
import UserIcon from "UserIcon" /* 12260 */;
import ServerIcon from "ServerIcon" /* 12372 */;
import MagicWandIcon from "MagicWandIcon" /* 13686 */;
import BeakerIcon from "BeakerIcon" /* 17057 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let closure_4;
let hasOwnProperty;
let obj3;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { bots: RobotIcon.RobotIcon, channels: AppsIcon.AppsIcon, test_app: BeakerIcon.BeakerIcon, profile_widget: IdCardIcon.IdCardIcon, overlay: GameControllerIcon.GameControllerIcon, automod: ShieldIcon.ShieldIcon, collaboration: GroupIcon.GroupIcon, only_you: UserIcon.UserIcon, location: MagicWandIcon.MagicWandIcon, server: ServerIcon.ServerIcon, settings: SettingsIcon.SettingsIcon };
let obj2 = { box: obj3, rowText: { flex: 1 } };
obj3 = { padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let closure_7 = createStyles.createStyles(obj2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/ConjureChangeList.tsx");

export default function ConjureChangeList(rows) {
  let Stack2;
  let intl;
  let items;
  let obj4;
  let rowText;
  rows = rows.rows;
  let tmp = closure_7();
  _require = tmp;
  obj = { spacing: 8, children: items };
  let Stack = require("Stack/Stack").Stack;
  let obj2 = { variant: "body-md/semibold", color: "text-strong", children: intl.string(_modDef4089["kG/2e8"]) };
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items = [closure_4(Text, obj2), ];
  const obj3 = { style: tmp.box, children: closure_4(Stack2, obj4) };
  obj4 = {
    spacing: 8,
    children: rows.map((children) => {
      let items;
      const tmp = obj[children.key];
      obj = { direction: "horizontal", spacing: 8, align: "flex-start", children: items };
      const Stack = Stack_Stack.Stack;
      items = [React3(tmp, { size: "sm", color: "text-subtle" }), ];
      const obj2 = { variant: "body-sm/medium", color: "text-subtle", style: rowText.rowText, children: children.text };
      items[1] = React3(Text_Text.Text, obj2);
      return hasOwnProperty(Stack, obj, children.key);
    })
  };
  Stack2 = require("Stack/Stack").Stack;
  items[1] = closure_4(View, obj3);
  return closure_5(Stack, obj);
};
