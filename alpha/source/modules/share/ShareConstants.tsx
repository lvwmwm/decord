// Module ID: 12606
// Function ID: 12607
// Name: ShareConstants
// Dependencies: [8925, 2]
// Exports: isAllowedType

// Module 12606 (ShareConstants)
import _mod8925 from "module_8925" /* 8925 */;
import size from "module_2" /* 2 */;

const items = [_mod8925.AutocompleterResultTypes.USER, _mod8925.AutocompleterResultTypes.TEXT_CHANNEL, _mod8925.AutocompleterResultTypes.VOICE_CHANNEL, _mod8925.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
