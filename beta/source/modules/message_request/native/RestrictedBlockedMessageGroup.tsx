// Module ID: 16724
// Function ID: 16725
// Name: RestrictedBlockedMessageGroup
// Dependencies: [32, 19, 17, 21, 4836, 16722, 576, 5435, 4832, 1115, 2]
// Exports: default

// Module 16724 (RestrictedBlockedMessageGroup)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl2 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import Pressables from "Pressables" /* 5435 */;
import RestrictedMessagePreviewLayout from "RestrictedMessagePreviewLayout" /* 16722 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let dependencyMap;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { toggle: obj2 };
obj2 = { marginLeft: RestrictedMessagePreviewLayout.RESTRICTED_CONTENT_INSET, marginVertical: nativeDefault.space.PX_8 };
let closure_7 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  let Text;
  let _undefined;
  let c1;
  let intl;
  let mapped;
  let messages;
  let obj2;
  let obj3;
  let tmp3;
  ({ messages, renderMessage: require } = arg0);
  dependencyMap = undefined;
  const tmp = closure_7();
  [tmp3, c1] = react.useState(false);
  _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(() => {
    _undefined((arg0) => !arg0);
  }, []);
  let obj = { style: tmp.toggle, accessibilityRole: "button", accessibilityState: { expanded: mapped }, onPress: callback, children: closure_5(Text, obj2) };
  const PressableOpacity = Pressables.PressableOpacity;
  obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl.format(intl2.t["+FcYM/"], obj3) };
  Text = Text_Text.Text;
  intl = intl2.intl;
  obj3 = { count: messages.length };
  const children = [closure_5(PressableOpacity, obj), ];
  const tmp5 = closure_6;
  const tmp6 = View;
  if (mapped) {
    mapped = messages.map((id) => {
      const obj = { children: require(id) };
      return hasOwnProperty(View, obj, id.id);
    });
  }
  children[1] = mapped;
  return tmp5(tmp6, { children });
};
