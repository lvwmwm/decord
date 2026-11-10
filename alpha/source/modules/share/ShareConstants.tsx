// Module ID: 13630
// Function ID: 13631
// Name: ShareConstants
// Dependencies: [9221, 2]
// Exports: isAllowedType

// Module 13630 (ShareConstants)
import _mod9221 from "module_9221" /* 9221 */;
import size from "module_2" /* 2 */;

const items = [_mod9221.AutocompleterResultTypes.USER, _mod9221.AutocompleterResultTypes.TEXT_CHANNEL, _mod9221.AutocompleterResultTypes.VOICE_CHANNEL, _mod9221.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
