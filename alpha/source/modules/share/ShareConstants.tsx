// Module ID: 12612
// Function ID: 12613
// Name: ShareConstants
// Dependencies: [8926, 2]
// Exports: isAllowedType

// Module 12612 (ShareConstants)
import _mod8926 from "module_8926" /* 8926 */;
import size from "module_2" /* 2 */;

const items = [_mod8926.AutocompleterResultTypes.USER, _mod8926.AutocompleterResultTypes.TEXT_CHANNEL, _mod8926.AutocompleterResultTypes.VOICE_CHANNEL, _mod8926.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
