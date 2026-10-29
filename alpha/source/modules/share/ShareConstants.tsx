// Module ID: 13185
// Function ID: 13186
// Name: ShareConstants
// Dependencies: [9103, 2]
// Exports: isAllowedType

// Module 13185 (ShareConstants)
import _mod9103 from "module_9103" /* 9103 */;
import size from "module_2" /* 2 */;

const items = [_mod9103.AutocompleterResultTypes.USER, _mod9103.AutocompleterResultTypes.TEXT_CHANNEL, _mod9103.AutocompleterResultTypes.VOICE_CHANNEL, _mod9103.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
