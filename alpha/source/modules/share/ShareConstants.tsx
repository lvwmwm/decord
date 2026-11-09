// Module ID: 13617
// Function ID: 13618
// Name: ShareConstants
// Dependencies: [9215, 2]
// Exports: isAllowedType

// Module 13617 (ShareConstants)
import _mod9215 from "module_9215" /* 9215 */;
import size from "module_2" /* 2 */;

const items = [_mod9215.AutocompleterResultTypes.USER, _mod9215.AutocompleterResultTypes.TEXT_CHANNEL, _mod9215.AutocompleterResultTypes.VOICE_CHANNEL, _mod9215.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
