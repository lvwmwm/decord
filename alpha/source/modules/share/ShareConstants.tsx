// Module ID: 13335
// Function ID: 13336
// Name: ShareConstants
// Dependencies: [9116, 2]
// Exports: isAllowedType

// Module 13335 (ShareConstants)
import _mod9116 from "module_9116" /* 9116 */;
import size from "module_2" /* 2 */;

const items = [_mod9116.AutocompleterResultTypes.USER, _mod9116.AutocompleterResultTypes.TEXT_CHANNEL, _mod9116.AutocompleterResultTypes.VOICE_CHANNEL, _mod9116.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
