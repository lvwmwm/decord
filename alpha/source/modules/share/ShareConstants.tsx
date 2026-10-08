// Module ID: 11578
// Function ID: 11579
// Name: ShareConstants
// Dependencies: [8675, 2]
// Exports: isAllowedType

// Module 11578 (ShareConstants)
import _mod8675 from "module_8675" /* 8675 */;
import size from "module_2" /* 2 */;

const items = [_mod8675.AutocompleterResultTypes.USER, _mod8675.AutocompleterResultTypes.TEXT_CHANNEL, _mod8675.AutocompleterResultTypes.VOICE_CHANNEL, _mod8675.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
