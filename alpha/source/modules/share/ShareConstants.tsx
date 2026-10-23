// Module ID: 12864
// Function ID: 12865
// Name: ShareConstants
// Dependencies: [9066, 2]
// Exports: isAllowedType

// Module 12864 (ShareConstants)
import _mod9066 from "module_9066" /* 9066 */;
import size from "module_2" /* 2 */;

const items = [_mod9066.AutocompleterResultTypes.USER, _mod9066.AutocompleterResultTypes.TEXT_CHANNEL, _mod9066.AutocompleterResultTypes.VOICE_CHANNEL, _mod9066.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
