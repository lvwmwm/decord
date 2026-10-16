// Module ID: 11559
// Function ID: 11560
// Name: ShareConstants
// Dependencies: [8695, 2]
// Exports: isAllowedType

// Module 11559 (ShareConstants)
import _mod8695 from "module_8695" /* 8695 */;
import size from "module_2" /* 2 */;

const items = [_mod8695.AutocompleterResultTypes.USER, _mod8695.AutocompleterResultTypes.TEXT_CHANNEL, _mod8695.AutocompleterResultTypes.VOICE_CHANNEL, _mod8695.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
