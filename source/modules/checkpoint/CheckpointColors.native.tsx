// Module ID: 9890
// Function ID: 76556
// Name: items
// Dependencies: []

// Module 9890 (items)
const CheckpointPersonas = require(dependencyMap[0]).CheckpointPersonas;
let obj = {};
obj = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ZERO_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ZERO_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ZERO_BACKGROUND_OVERLAY };
const items = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ZERO_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ZERO_GRADIENT_END];
obj.gradient = items;
obj[CheckpointPersonas.ZERO] = obj;
obj = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ONE_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ONE_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ONE_BACKGROUND_OVERLAY };
const items1 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ONE_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_ONE_GRADIENT_END];
obj.gradient = items1;
obj[CheckpointPersonas.ONE] = obj;
const obj1 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_TWO_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_TWO_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_TWO_BACKGROUND_OVERLAY };
const items2 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_TWO_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_TWO_GRADIENT_END];
obj1.gradient = items2;
obj[CheckpointPersonas.TWO] = obj1;
const obj2 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_THREE_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_THREE_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_THREE_BACKGROUND_OVERLAY };
const items3 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_THREE_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_THREE_GRADIENT_END];
obj2.gradient = items3;
obj[CheckpointPersonas.THREE] = obj2;
const obj3 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FOUR_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FOUR_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FOUR_BACKGROUND_OVERLAY };
const items4 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FOUR_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FOUR_GRADIENT_END];
obj3.gradient = items4;
obj[CheckpointPersonas.FOUR] = obj3;
const obj4 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FIVE_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FIVE_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FIVE_BACKGROUND_OVERLAY };
const items5 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FIVE_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_FIVE_GRADIENT_END];
obj4.gradient = items5;
obj[CheckpointPersonas.FIVE] = obj4;
const obj5 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SIX_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SIX_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SIX_BACKGROUND_OVERLAY };
const items6 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SIX_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SIX_GRADIENT_END];
obj5.gradient = items6;
obj[CheckpointPersonas.SIX] = obj5;
const obj6 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SEVEN_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SEVEN_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SEVEN_BACKGROUND_OVERLAY };
const items7 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SEVEN_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_SEVEN_GRADIENT_END];
obj6.gradient = items7;
obj[CheckpointPersonas.SEVEN] = obj6;
const obj7 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_EIGHT_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_EIGHT_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_EIGHT_BACKGROUND_OVERLAY };
const items8 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_EIGHT_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_EIGHT_GRADIENT_END];
obj7.gradient = items8;
obj[CheckpointPersonas.EIGHT] = obj7;
const obj8 = { primaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_NINE_PRIMARY, secondaryColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_NINE_SECONDARY, backgroundOverlayColor: importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_NINE_BACKGROUND_OVERLAY };
const items9 = [importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_NINE_GRADIENT_START, importDefault(dependencyMap[1]).unsafe_rawColors.CHECKPOINT_PERSONA_NINE_GRADIENT_END];
obj8.gradient = items9;
obj[CheckpointPersonas.NINE] = obj8;
const _module = require(dependencyMap[2]);
const result = _module.fileFinishedImporting("modules/checkpoint/CheckpointColors.native.tsx");

export const CHECKPOINT_PERSONA_COLORS = obj;
