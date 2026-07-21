// Module ID: 12782
// Function ID: 97925
// Name: styles
// Dependencies: []

// Module 12782 (styles)
const Fonts = require(dependencyMap[0]).Fonts;
let obj = {};
const _module = require(dependencyMap[1]);
obj = { header: {} };
obj = {};
const merged = Object.assign(importDefault(dependencyMap[2])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj["backgroundColor"] = importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWEST;
obj.textInput = obj;
const importDefaultResult = importDefault(dependencyMap[2]);
obj.disabledTextInput = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
const obj2 = {};
const obj1 = { backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
const merged2 = Object.assign(importDefault(dependencyMap[2])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj2["backgroundColor"] = importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH;
obj.dropdownInput = obj2;
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
