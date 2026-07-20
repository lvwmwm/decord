// Module ID: 15518
// Function ID: 118489
// Name: styles
// Dependencies: []

// Module 15518 (styles)
const _module = require(dependencyMap[0]);
let obj = {};
obj = { color: importDefault(dependencyMap[1]).colors.BACKGROUND_MOD_STRONG };
obj.iconBackground = obj;
obj.iconBackgroundBrand = { color: importDefault(dependencyMap[1]).colors.BACKGROUND_BRAND };
const obj1 = { color: importDefault(dependencyMap[1]).colors.BACKGROUND_BRAND };
obj.iconStroke = { color: importDefault(dependencyMap[1]).colors.BORDER_SUBTLE };
const styles = _module.createStyles(obj);
const _module1 = require(dependencyMap[2]);
const result = _module1.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;
