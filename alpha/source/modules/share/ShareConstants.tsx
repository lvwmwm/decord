// Module ID: 12714
// Function ID: 12715
// Name: ShareConstants
// Dependencies: [8988, 2]
// Exports: isAllowedType

// Module 12714 (ShareConstants)
import _mod8988 from "module_8988" /* 8988 */;
import size from "module_2" /* 2 */;

const items = [_mod8988.AutocompleterResultTypes.USER, _mod8988.AutocompleterResultTypes.TEXT_CHANNEL, _mod8988.AutocompleterResultTypes.VOICE_CHANNEL, _mod8988.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
