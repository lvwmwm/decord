// Module ID: 8961
// Function ID: 8962
// Name: ShareConstants
// Dependencies: [8947, 2]
// Exports: isAllowedType

// Module 8961 (ShareConstants)
import _mod8947 from "module_8947" /* 8947 */;
import size from "module_2" /* 2 */;

const items = [_mod8947.AutocompleterResultTypes.USER, _mod8947.AutocompleterResultTypes.TEXT_CHANNEL, _mod8947.AutocompleterResultTypes.VOICE_CHANNEL, _mod8947.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
