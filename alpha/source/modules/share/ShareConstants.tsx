// Module ID: 13521
// Function ID: 13522
// Name: ShareConstants
// Dependencies: [9263, 2]
// Exports: isAllowedType

// Module 13521 (ShareConstants)
import _mod9263 from "module_9263" /* 9263 */;
import size from "module_2" /* 2 */;

const items = [_mod9263.AutocompleterResultTypes.USER, _mod9263.AutocompleterResultTypes.TEXT_CHANNEL, _mod9263.AutocompleterResultTypes.VOICE_CHANNEL, _mod9263.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
