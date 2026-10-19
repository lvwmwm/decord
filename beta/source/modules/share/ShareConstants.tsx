// Module ID: 12694
// Function ID: 12695
// Name: ShareConstants
// Dependencies: [8972, 2]
// Exports: isAllowedType

// Module 12694 (ShareConstants)
import _mod8972 from "module_8972" /* 8972 */;
import size from "module_2" /* 2 */;

const items = [_mod8972.AutocompleterResultTypes.USER, _mod8972.AutocompleterResultTypes.TEXT_CHANNEL, _mod8972.AutocompleterResultTypes.VOICE_CHANNEL, _mod8972.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
