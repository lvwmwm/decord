// Module ID: 13592
// Function ID: 13593
// Name: ShareConstants
// Dependencies: [9233, 2]
// Exports: isAllowedType

// Module 13592 (ShareConstants)
import _mod9233 from "module_9233" /* 9233 */;
import size from "module_2" /* 2 */;

const items = [_mod9233.AutocompleterResultTypes.USER, _mod9233.AutocompleterResultTypes.TEXT_CHANNEL, _mod9233.AutocompleterResultTypes.VOICE_CHANNEL, _mod9233.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
