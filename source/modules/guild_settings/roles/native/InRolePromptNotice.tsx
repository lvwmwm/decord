// Module ID: 16373
// Function ID: 127721
// Name: InRolePromptNotice
// Dependencies: [31, 27, 653, 33, 4130, 689, 1360, 16374, 1273, 8524, 4126, 1212, 2]
// Exports: default

// Module 16373 (InRolePromptNotice)
import "result";
import { View } from "get ActivityIndicator";
import { RoleFlags } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ jsx: closure_5, jsxs: closure_6 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_4, flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.promptRow = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.promptText = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.icon = { height: 16, width: 16 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
const result = require("ME").fileFinishedImporting("modules/guild_settings/roles/native/InRolePromptNotice.tsx");

export default function InRolePromptNotice(role) {
  role = role.role;
  let stringResult = _createForOfIteratorHelperLoose();
  let obj = require(1360) /* hasFlag */;
  if (!obj.hasFlag(role.flags, RoleFlags.IN_PROMPT)) {
    return null;
  } else {
    let obj1 = require(16374) /* _createForOfIteratorHelperLoose */;
    obj = { style: stringResult.promptRow };
    let Icon = require(1273) /* Button */.Icon;
    if (isRolePowerfulResult) {
      obj = { style: stringResult.icon, source: importDefault(8524), color: importDefault(689).unsafe_rawColors.YELLOW_300 };
      const items = [tmp7(Icon, obj), ];
      obj1 = { style: stringResult.promptText, variant: "text-sm/medium" };
      const intl2 = tmp8(1212).intl;
      stringResult = intl2.string(tmp8(1212).t.YRbgXz);
      obj1.children = stringResult;
      Icon = tmp7(tmp8(4126).Text, obj1);
      items[1] = Icon;
      obj.children = items;
      let tmp5Result = tmp5(tmp6, obj);
    } else {
      const obj2 = { style: stringResult.icon, source: importDefault(8524) };
      const items1 = [tmp7(Icon, obj2), ];
      const obj3 = { style: stringResult.promptText, variant: "text-sm/medium" };
      const intl = tmp8(1212).intl;
      obj3.children = intl.string(tmp8(1212).t.mqeO2v);
      items1[1] = tmp7(tmp8(4126).Text, obj3);
      obj.children = items1;
      tmp5Result = tmp5(tmp6, obj);
    }
    isRolePowerfulResult = obj1.isRolePowerful(role);
  }
};
