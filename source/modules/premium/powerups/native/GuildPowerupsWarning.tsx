// Module ID: 11593
// Function ID: 90086
// Name: GuildPowerupsWarning
// Dependencies: [31, 27, 33, 4130, 689, 11594, 7507, 4126, 2]
// Exports: default

// Module 11593 (GuildPowerupsWarning)
import "result";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_4;
let closure_5;
let require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flexDirection: "row", alignItems: "flex-start", padding: require("_createForOfIteratorHelperLoose").space.PX_24, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_FEEDBACK_WARNING, borderWidth: 1, borderColor: require("_createForOfIteratorHelperLoose").colors.STATUS_WARNING, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, gap: require("_createForOfIteratorHelperLoose").space.PX_8, overflow: "hidden" };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
let obj1 = { flex: 1, gap: require("_createForOfIteratorHelperLoose").space.PX_4, alignItems: "center" };
_createForOfIteratorHelperLoose.contentContainer = obj1;
_createForOfIteratorHelperLoose.warningText = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { marginTop: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsWarning.tsx");

export default function GuildPowerupsWarning(warnings) {
  let guildId;
  let powerupNames;
  warnings = warnings.warnings;
  ({ guildId, powerupNames } = warnings);
  const tmp = _createForOfIteratorHelperLoose();
  const require = tmp;
  let tmp6Result = null;
  if (tmp2.shouldShow) {
    let obj = { style: tmp.container };
    obj = { style: tmp.contentContainer };
    obj = { color: importDefault(689).colors.TEXT_FEEDBACK_WARNING, size: "md" };
    let items = [callback(require(7507) /* CircleErrorIcon */.CircleErrorIcon, obj), , , ];
    const obj1 = { variant: "text-md/semibold", color: "text-feedback-warning", style: tmp.text, children: tmp3 };
    items[1] = callback(require(4126) /* Text */.Text, obj1);
    const obj2 = { variant: "text-sm/medium", style: tmp.text, children: tmp4 };
    items[2] = callback(require(4126) /* Text */.Text, obj2);
    let mapped;
    if (null != warnings) {
      mapped = warnings.map((children) => {
        const obj = { variant: "text-sm/medium", color: "text-feedback-warning" };
        const items = [, ];
        ({ warningText: arr[0], text: arr[1] } = tmp);
        obj.style = items;
        obj.children = children;
        return outer1_4(tmp(outer1_2[7]).Text, obj, "warning-" + arg1);
      });
    }
    items[3] = mapped;
    obj.children = items;
    obj.children = closure_5(View, obj);
    tmp6Result = callback(tmp7, obj);
    const tmp6 = callback;
    const tmp8 = closure_5;
  }
  return tmp6Result;
};
