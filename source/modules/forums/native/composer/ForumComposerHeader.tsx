// Module ID: 9597
// Function ID: 74715
// Name: ForumComposerHeader
// Dependencies: [31, 27, 33, 4130, 689, 4320, 4660, 1212, 5119, 4645, 4126, 4633, 2]
// Exports: default

// Module 9597 (ForumComposerHeader)
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_3;
let closure_4;
let closure_5;
let closure_6;
const require = arg1;
({ StyleSheet: closure_3, View: closure_4 } = get_ActivityIndicator);
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
let closure_7 = _createForOfIteratorHelperLoose.createStyles((height) => {
  obj = { headerBar: obj, headerBarContent: { flexDirection: "row", alignItems: "center", flex: 1 } };
  obj = { height, flexDirection: "row", alignItems: "center" };
  obj = { marginHorizontal: importDefault(689).space.PX_16 };
  obj.headerBarText = obj;
  const obj1 = {};
  const merged = Object.assign(closure_3.absoluteFillObject);
  obj1["height"] = closure_3.hairlineWidth;
  obj1["backgroundColor"] = importDefault(689).colors.BORDER_SUBTLE;
  obj1["top"] = undefined;
  obj.headerBarSeparator = obj1;
  obj.button = { paddingHorizontal: importDefault(689).space.PX_16 };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default function ForumComposerHeader(height) {
  let channel;
  let onGuidelinesPress;
  let require;
  let submitting;
  let title;
  ({ title, channel, onClose: require } = height);
  ({ submitting, onGuidelinesPress } = height);
  const tmp = callback2(height.height);
  let obj = { style: tmp.headerBar };
  obj = { style: tmp.button, accessibilityRole: "button" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.accessibilityLabel = intl.string(require(1212) /* getSystemLocale */.t.cpT0Cq);
  obj.disabled = submitting;
  obj.onPress = function onPress() {
    return callback(false);
  };
  obj.children = callback(require(5119) /* XSmallIcon */.XSmallIcon, {});
  const items = [callback(require(4660) /* PressableBase */.PressableOpacity, obj), , , ];
  obj = { style: tmp.headerBarContent };
  const items1 = [callback(require(4645) /* ForumIcon */.ForumIcon, { size: "sm" }), ];
  const obj1 = { style: tmp.headerBarText };
  const obj2 = { lineClamp: 1, ellipsizeMode: "tail", variant: "text-md/semibold", color: "mobile-text-heading-primary" };
  if ("" === title) {
    const intl2 = require(1212) /* getSystemLocale */.intl;
    title = intl2.string(require(1212) /* getSystemLocale */.t["7EjFCk"]);
  }
  obj2.children = title;
  const items2 = [callback(require(4126) /* Text */.Text, obj2), ];
  const obj3 = { variant: "text-xs/medium", color: "text-default", children: importDefault(4320)(channel) };
  items2[1] = callback(require(4126) /* Text */.Text, obj3);
  obj1.children = items2;
  items1[1] = closure_6(closure_4, obj1);
  obj.children = items1;
  items[1] = closure_6(closure_4, obj);
  let length;
  if (null != channel) {
    length = channel.topic.length;
  }
  let tmp9 = null;
  if (length > 0) {
    const obj4 = { accessibilityRole: "button" };
    const intl3 = require(1212) /* getSystemLocale */.intl;
    obj4.accessibilityLabel = intl3.string(require(1212) /* getSystemLocale */.t.yR6HwZ);
    obj4.style = tmp.button;
    obj4.onPress = onGuidelinesPress;
    obj4.children = callback(require(4633) /* BookCheckIcon */.BookCheckIcon, {});
    tmp9 = callback(require(4660) /* PressableBase */.PressableOpacity, obj4);
  }
  items[2] = tmp9;
  items[3] = callback(closure_4, { style: tmp.headerBarSeparator });
  obj.children = items;
  return closure_6(closure_4, obj);
};
