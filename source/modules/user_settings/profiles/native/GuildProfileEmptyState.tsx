// Module ID: 13666
// Function ID: 104919
// Name: GuildProfileEmptyState
// Dependencies: [5, 31, 27, 33, 4130, 13667, 4126, 1212, 4543, 11764, 1934, 2]
// Exports: default

// Module 13666 (GuildProfileEmptyState)
import SvgComponent from "SvgComponent";
import "result";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let closure_6;
let closure_7;
const require = arg1;
({ ScrollView: closure_4, View: closure_5 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: closure_7 } = jsxProd);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ container: { paddingHorizontal: 16, alignItems: "center" }, image: { marginBottom: 16, marginTop: 64, textAlign: "center" }, header: { textAlign: "center", marginStart: 8, marginEnd: 8, marginBottom: 8 }, createButton: { marginTop: 16, marginBottom: 12 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_settings/profiles/native/GuildProfileEmptyState.tsx");

export default function GuildProfileEmptyState() {
  const tmp2 = callback4();
  let obj = { contentContainerStyle: tmp2.container };
  obj = { style: tmp2.image, children: callback2(importDefault(13667), obj) };
  obj = { style: tmp2.image };
  const items = [callback2(closure_5, obj), , , , ];
  const obj1 = { style: tmp2.header, variant: "heading-xl/semibold", color: "mobile-text-heading-primary" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl.string(require(1212) /* getSystemLocale */.t.Z1OZCV);
  items[1] = callback2(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp2.header, variant: "text-sm/normal", color: "text-default" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl2.string(require(1212) /* getSystemLocale */.t.UEmBq7);
  items[2] = callback2(require(4126) /* Text */.Text, obj2);
  const obj3 = { style: tmp2.createButton };
  const obj4 = {};
  const intl3 = require(1212) /* getSystemLocale */.intl;
  const stringResult = intl3.string(require(1212) /* getSystemLocale */.t["6dIB4R"]);
  obj4.text = stringResult;
  // CreateGeneratorClosureLongIndex (0x67)
  obj4.onPress = callback(stringResult);
  obj3.children = callback2(require(4543) /* Button */.Button, obj4);
  items[3] = callback2(closure_5, obj3);
  const obj5 = {};
  const intl4 = require(1212) /* getSystemLocale */.intl;
  obj5.text = intl4.string(require(1212) /* getSystemLocale */.t.yRjK4p);
  obj5.variant = "secondary";
  // CreateGeneratorClosureLongIndex (0x67)
  obj5.onPress = callback(tmp);
  items[4] = callback2(require(4543) /* Button */.Button, obj5);
  obj.children = items;
  return callback3(closure_4, obj);
};
