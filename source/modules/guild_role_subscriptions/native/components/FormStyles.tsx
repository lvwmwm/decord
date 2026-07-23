// Module ID: 12905
// Function ID: 100136
// Name: styles
// Dependencies: [653, 4130, 5052, 689, 2]

// Module 12905 (styles)
import { Fonts } from "ME";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
obj = { header: { marginTop: 24, paddingStart: 16 } };
obj = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST;
obj.textInput = obj;
const obj1 = { padding: 16, width: "100%", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
obj.disabledTextInput = obj1;
const obj2 = {};
const merged2 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj2["backgroundColor"] = require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH;
obj.dropdownInput = obj2;
const styles = _createForOfIteratorHelperLoose.createStyles(obj);
const result = require("createTextStyle").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
