// Module ID: 9948
// Function ID: 9949
// Name: ShareConstants
// Dependencies: [9940, 2]
// Exports: isAllowedType

// Module 9948 (ShareConstants)
import _mod9940 from "module_9940" /* 9940 */;
import size from "module_2" /* 2 */;

const items = [_mod9940.AutocompleterResultTypes.USER, _mod9940.AutocompleterResultTypes.TEXT_CHANNEL, _mod9940.AutocompleterResultTypes.VOICE_CHANNEL, _mod9940.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
