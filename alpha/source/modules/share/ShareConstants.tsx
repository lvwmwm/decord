// Module ID: 13370
// Function ID: 13371
// Name: ShareConstants
// Dependencies: [9135, 2]
// Exports: isAllowedType

// Module 13370 (ShareConstants)
import _mod9135 from "module_9135" /* 9135 */;
import size from "module_2" /* 2 */;

const items = [_mod9135.AutocompleterResultTypes.USER, _mod9135.AutocompleterResultTypes.TEXT_CHANNEL, _mod9135.AutocompleterResultTypes.VOICE_CHANNEL, _mod9135.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
