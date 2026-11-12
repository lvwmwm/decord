// Module ID: 13649
// Function ID: 13650
// Name: ShareConstants
// Dependencies: [9248, 2]
// Exports: isAllowedType

// Module 13649 (ShareConstants)
import _mod9248 from "module_9248" /* 9248 */;
import size from "module_2" /* 2 */;

const items = [_mod9248.AutocompleterResultTypes.USER, _mod9248.AutocompleterResultTypes.TEXT_CHANNEL, _mod9248.AutocompleterResultTypes.VOICE_CHANNEL, _mod9248.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
