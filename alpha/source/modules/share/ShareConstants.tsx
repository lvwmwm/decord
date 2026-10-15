// Module ID: 12583
// Function ID: 12584
// Name: ShareConstants
// Dependencies: [8917, 2]
// Exports: isAllowedType

// Module 12583 (ShareConstants)
import _mod8917 from "module_8917" /* 8917 */;
import size from "module_2" /* 2 */;

const items = [_mod8917.AutocompleterResultTypes.USER, _mod8917.AutocompleterResultTypes.TEXT_CHANNEL, _mod8917.AutocompleterResultTypes.VOICE_CHANNEL, _mod8917.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
