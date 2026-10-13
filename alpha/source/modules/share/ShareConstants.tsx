// Module ID: 12312
// Function ID: 12313
// Name: ShareConstants
// Dependencies: [8700, 2]
// Exports: isAllowedType

// Module 12312 (ShareConstants)
import _mod8700 from "module_8700" /* 8700 */;
import size from "module_2" /* 2 */;

const items = [_mod8700.AutocompleterResultTypes.USER, _mod8700.AutocompleterResultTypes.TEXT_CHANNEL, _mod8700.AutocompleterResultTypes.VOICE_CHANNEL, _mod8700.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
