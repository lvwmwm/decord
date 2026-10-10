// Module ID: 11557
// Function ID: 11558
// Name: ShareConstants
// Dependencies: [8699, 2]
// Exports: isAllowedType

// Module 11557 (ShareConstants)
import _mod8699 from "module_8699" /* 8699 */;
import size from "module_2" /* 2 */;

const items = [_mod8699.AutocompleterResultTypes.USER, _mod8699.AutocompleterResultTypes.TEXT_CHANNEL, _mod8699.AutocompleterResultTypes.VOICE_CHANNEL, _mod8699.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
