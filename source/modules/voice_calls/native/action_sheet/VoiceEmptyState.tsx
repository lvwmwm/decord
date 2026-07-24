// Module ID: 12761
// Function ID: 99308
// Name: VoiceEmptyState
// Dependencies: [31, 27, 653, 33, 4130, 5052, 689, 1557, 1273, 1212, 12762, 12763, 2]
// Exports: default

// Module 12761 (VoiceEmptyState)
import "result";
import { View } from "get ActivityIndicator";
import { Fonts } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { justifyContent: "center" }, button: { paddingHorizontal: 12, paddingTop: 16 } };
_createForOfIteratorHelperLoose = {};
const merged = Object.assign(require("createTextStyle")(Fonts.DISPLAY_EXTRABOLD, require("_createForOfIteratorHelperLoose").colors.MOBILE_TEXT_HEADING_PRIMARY, 18));
_createForOfIteratorHelperLoose["textTransform"] = "none";
_createForOfIteratorHelperLoose["lineHeight"] = 24;
_createForOfIteratorHelperLoose.emptyTitle = _createForOfIteratorHelperLoose;
const obj1 = {};
const merged1 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.TEXT_SUBTLE, 16));
obj1["lineHeight"] = 20;
obj1["fontWeight"] = "600";
_createForOfIteratorHelperLoose.emptyBody = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("ME").fileFinishedImporting("modules/voice_calls/native/action_sheet/VoiceEmptyState.tsx");

export default function VoiceEmptyState(channel) {
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const items = [tmp.container, ];
  obj = { paddingBottom: importDefault(1557)().bottom };
  items[1] = obj;
  obj.style = items;
  obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.title = intl.string(require(1212) /* getSystemLocale */.t["/HABZo"]);
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj.body = intl2.string(require(1212) /* getSystemLocale */.t["5Jy2FY"]);
  obj.lightSource = importDefault(12762);
  obj.darkSource = importDefault(12762);
  ({ emptyTitle: obj3.titleStyle, emptyBody: obj3.bodyStyle } = tmp);
  obj.imageStyle = { marginBottom: 16, marginTop: 20 };
  const items1 = [callback(require(1273) /* Button */.ThemedEmptyState, obj), callback(importDefault(12763), { channel: channel.channel, style: tmp.button })];
  obj.children = items1;
  return callback2(View, obj);
};
