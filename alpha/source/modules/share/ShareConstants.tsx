// Module ID: 13605
// Function ID: 13606
// Name: ShareConstants
// Dependencies: [9280, 2]
// Exports: isAllowedType

// Module 13605 (ShareConstants)
import _mod9280 from "module_9280" /* 9280 */;
import size from "module_2" /* 2 */;

const items = [_mod9280.AutocompleterResultTypes.USER, _mod9280.AutocompleterResultTypes.TEXT_CHANNEL, _mod9280.AutocompleterResultTypes.VOICE_CHANNEL, _mod9280.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
