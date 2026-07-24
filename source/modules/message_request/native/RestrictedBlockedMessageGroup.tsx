// Module ID: 15632
// Function ID: 120471
// Name: RestrictedBlockedMessageGroup
// Dependencies: [57, 31, 27, 33, 4130, 15630, 689, 4660, 4126, 1212, 2]
// Exports: default

// Module 15632 (RestrictedBlockedMessageGroup)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginLeft: require("RESTRICTED_AVATAR_SIZE").RESTRICTED_CONTENT_INSET, marginVertical: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.toggle = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("get ActivityIndicator").fileFinishedImporting("modules/message_request/native/RestrictedBlockedMessageGroup.tsx");

export default function RestrictedBlockedMessageGroup(arg0) {
  let messages;
  let require;
  ({ messages, renderMessage: require } = arg0);
  const tmp2 = callback(React.useState(false), 2);
  let first = tmp2[0];
  const dependencyMap = tmp2[1];
  let obj = {};
  callback = React.useCallback(() => {
    callback2((arg0) => !arg0);
  }, []);
  obj = { style: _createForOfIteratorHelperLoose().toggle, accessibilityRole: "button", accessibilityState: obj, onPress: callback };
  obj = { expanded: first };
  const obj1 = { variant: "text-sm/medium", color: "text-muted" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.format(require(1212) /* getSystemLocale */.t["+FcYM/"], { count: messages.length });
  obj.children = callback2(require(4126) /* Text */.Text, obj1);
  const items = [callback2(require(4660) /* PressableBase */.PressableOpacity, obj), ];
  if (first) {
    first = messages.map((id) => outer1_5(outer1_4, { children: callback(id) }, id.id));
  }
  items[1] = first;
  obj.children = items;
  return closure_6(View, obj);
};
