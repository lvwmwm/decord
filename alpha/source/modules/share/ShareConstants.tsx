// Module ID: 12348
// Function ID: 12349
// Name: ShareConstants
// Dependencies: [8705, 2]
// Exports: isAllowedType

// Module 12348 (ShareConstants)
import _mod8705 from "module_8705" /* 8705 */;
import size from "module_2" /* 2 */;

const items = [_mod8705.AutocompleterResultTypes.USER, _mod8705.AutocompleterResultTypes.TEXT_CHANNEL, _mod8705.AutocompleterResultTypes.VOICE_CHANNEL, _mod8705.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
