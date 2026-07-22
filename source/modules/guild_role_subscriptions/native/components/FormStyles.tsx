// Module ID: 12791
// Function ID: 97980
// Name: styles
// Dependencies: []

// Module 12791 (styles)
const Fonts = require(dependencyMap[0]).Fonts;
let obj = {};
const _module = require(dependencyMap[1]);
obj = { header: {} };
obj = {};
const merged = Object.assign(importDefault(dependencyMap[2])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj["backgroundColor"] = importDefault(dependencyMap[3]).colors.BACKGROUND_BASE_LOWEST;
obj.textInput = obj;
const obj1 = { 1507939603: "column", 2021029889: "flex-end", backgroundColor: importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH };
obj.disabledTextInput = obj1;
const obj2 = {};
const importDefaultResult = importDefault(dependencyMap[2]);
const merged2 = Object.assign(importDefault(dependencyMap[2])(Fonts.PRIMARY_MEDIUM, importDefault(dependencyMap[3]).colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj2["backgroundColor"] = importDefault(dependencyMap[3]).colors.BACKGROUND_SURFACE_HIGH;
obj.dropdownInput = obj2;
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[4]);
const result = _module1.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
