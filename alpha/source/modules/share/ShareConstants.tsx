// Module ID: 11511
// Function ID: 11512
// Name: ShareConstants
// Dependencies: [8684, 2]
// Exports: isAllowedType

// Module 11511 (ShareConstants)
import _mod8684 from "module_8684" /* 8684 */;
import size from "module_2" /* 2 */;

const items = [_mod8684.AutocompleterResultTypes.USER, _mod8684.AutocompleterResultTypes.TEXT_CHANNEL, _mod8684.AutocompleterResultTypes.VOICE_CHANNEL, _mod8684.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
