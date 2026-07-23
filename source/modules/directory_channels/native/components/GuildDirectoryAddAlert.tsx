// Module ID: 10052
// Function ID: 77684
// Name: GuildDirectoryAddAlert
// Dependencies: [31, 27, 33, 4130, 689, 4561, 1212, 5515, 4126, 2]
// Exports: default

// Module 10052 (GuildDirectoryAddAlert)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { marginBottom: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.guildIcon = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.title = { marginBottom: 8, textAlign: "center" };
_createForOfIteratorHelperLoose.description = { textAlign: "center" };
_createForOfIteratorHelperLoose.container = { alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddAlert.tsx");

export default function GuildDirectoryAddAlert(arg0) {
  let directoryGuildName;
  let guild;
  let onClose;
  ({ onClose, guild, directoryGuildName } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = {};
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.confirmText = intl.string(require(1212) /* getSystemLocale */.t["X0WK+6"]);
  obj.onConfirm = onClose;
  obj = { style: tmp.container };
  obj = { style: tmp.guildIcon, guild };
  const tmp2 = importDefault(4561);
  obj.size = require(5515) /* makeSizeStyle */.GuildIconSizes.XLARGE;
  const items = [callback(importDefault(5515), obj), , ];
  const obj1 = { style: tmp.title, accessibilityRole: "header", variant: "text-lg/bold", color: "mobile-text-heading-primary" };
  const intl2 = require(1212) /* getSystemLocale */.intl;
  obj1.children = intl2.string(require(1212) /* getSystemLocale */.t.CueiPY);
  items[1] = callback(require(4126) /* Text */.Text, obj1);
  const obj2 = { style: tmp.description, variant: "text-sm/medium", color: "text-default" };
  const intl3 = require(1212) /* getSystemLocale */.intl;
  obj2.children = intl3.format(require(1212) /* getSystemLocale */.t.R7Pqn5, { guildName: directoryGuildName });
  items[2] = callback(require(4126) /* Text */.Text, obj2);
  obj.children = items;
  obj.children = callback2(View, obj);
  return callback(tmp2, obj);
};
