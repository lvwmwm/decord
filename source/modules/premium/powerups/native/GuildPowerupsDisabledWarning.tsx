// Module ID: 11605
// Function ID: 90281
// Name: GuildPowerupsDisabledWarning
// Dependencies: [27, 33, 4130, 689, 7631, 4126, 2]
// Exports: default

// Module 11605 (GuildPowerupsDisabledWarning)
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING_BACKGROUND, borderWidth: 1, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, padding: require("_createForOfIteratorHelperLoose").space.PX_12, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING };
obj.container = obj;
obj.text = { flex: 1 };
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsDisabledWarning.tsx");

export default function GuildPowerupsDisabledWarning(text) {
  const tmp = callback3();
  let obj = { style: tmp.container };
  obj = { color: importDefault(689).colors.TEXT_FEEDBACK_WARNING, size: "md" };
  const items = [callback(require(7631) /* WarningIcon */.WarningIcon, obj), ];
  obj = { style: tmp.text, variant: "text-md/semibold", color: "text-feedback-warning", children: text.text };
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
};
