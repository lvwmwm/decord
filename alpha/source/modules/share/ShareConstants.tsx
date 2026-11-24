// Module ID: 8820
// Function ID: 8821
// Name: ShareConstants
// Dependencies: [8806, 2]
// Exports: isAllowedType

// Module 8820 (ShareConstants)
import _mod8806 from "module_8806" /* 8806 */;
import size from "module_2" /* 2 */;

const items = [_mod8806.AutocompleterResultTypes.USER, _mod8806.AutocompleterResultTypes.TEXT_CHANNEL, _mod8806.AutocompleterResultTypes.VOICE_CHANNEL, _mod8806.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
