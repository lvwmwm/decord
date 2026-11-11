// Module ID: 10194
// Function ID: 10195
// Name: ShareConstants
// Dependencies: [10180, 2]
// Exports: isAllowedType

// Module 10194 (ShareConstants)
import _mod10180 from "module_10180" /* 10180 */;
import size from "module_2" /* 2 */;

const items = [_mod10180.AutocompleterResultTypes.USER, _mod10180.AutocompleterResultTypes.TEXT_CHANNEL, _mod10180.AutocompleterResultTypes.VOICE_CHANNEL, _mod10180.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
