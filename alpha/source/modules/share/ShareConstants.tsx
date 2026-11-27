// Module ID: 8962
// Function ID: 8963
// Name: ShareConstants
// Dependencies: [8948, 2]
// Exports: isAllowedType

// Module 8962 (ShareConstants)
import _mod8948 from "module_8948" /* 8948 */;
import size from "module_2" /* 2 */;

const items = [_mod8948.AutocompleterResultTypes.USER, _mod8948.AutocompleterResultTypes.TEXT_CHANNEL, _mod8948.AutocompleterResultTypes.VOICE_CHANNEL, _mod8948.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
