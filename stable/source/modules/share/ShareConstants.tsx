// Module ID: 10261
// Function ID: 10262
// Name: ShareConstants
// Dependencies: [10247, 2]
// Exports: isAllowedType

// Module 10261 (ShareConstants)
import _mod10247 from "module_10247" /* 10247 */;
import size from "module_2" /* 2 */;

const items = [_mod10247.AutocompleterResultTypes.USER, _mod10247.AutocompleterResultTypes.TEXT_CHANNEL, _mod10247.AutocompleterResultTypes.VOICE_CHANNEL, _mod10247.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
