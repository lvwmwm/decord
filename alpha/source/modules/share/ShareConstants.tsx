// Module ID: 8919
// Function ID: 8920
// Name: ShareConstants
// Dependencies: [8905, 2]
// Exports: isAllowedType

// Module 8919 (ShareConstants)
import _mod8905 from "module_8905" /* 8905 */;
import size from "module_2" /* 2 */;

const items = [_mod8905.AutocompleterResultTypes.USER, _mod8905.AutocompleterResultTypes.TEXT_CHANNEL, _mod8905.AutocompleterResultTypes.VOICE_CHANNEL, _mod8905.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
