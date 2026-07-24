// Module ID: 10144
// Function ID: 78469
// Dependencies: [31, 27, 33, 4130, 689, 1273, 10145, 4126, 1212, 2]

// Module 10144
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importAllResult from "result";

let closure_4;
let closure_5;
const require = arg1;
({ jsx: closure_4, jsxs: closure_5 } = jsxProd);
let obj = {};
obj = { flex: 1, flexDirection: "row", alignItems: "center", gap: require("_createForOfIteratorHelperLoose").space.PX_8 };
obj.header = obj;
let closure_6 = _createForOfIteratorHelperLoose.createStyles(obj);
const memoResult = require("result").memo(function GuildRoleSubscriptionsChannelHeader() {
  let obj = { style: callback3().header };
  obj = { source: importDefault(10145), size: require(1273) /* Button */.Icon.Sizes.MEDIUM, disableColor: true };
  const items = [callback(require(1273) /* Button */.Icon, obj), ];
  obj = { variant: "heading-lg/extrabold", color: "interactive-text-active" };
  const intl = require(1212) /* getSystemLocale */.intl;
  obj.children = intl.string(require(1212) /* getSystemLocale */.t["KzCF/6"]);
  items[1] = callback(require(4126) /* Text */.Text, obj);
  obj.children = items;
  return callback2(View, obj);
});
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/overview_tab/GuildRoleSubscriptionsChannelHeader.tsx");

export default memoResult;
