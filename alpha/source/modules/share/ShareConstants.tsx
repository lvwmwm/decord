// Module ID: 13617
// Function ID: 13618
// Name: ShareConstants
// Dependencies: [9287, 2]
// Exports: isAllowedType

// Module 13617 (ShareConstants)
import _mod9287 from "module_9287" /* 9287 */;
import size from "module_2" /* 2 */;

const items = [_mod9287.AutocompleterResultTypes.USER, _mod9287.AutocompleterResultTypes.TEXT_CHANNEL, _mod9287.AutocompleterResultTypes.VOICE_CHANNEL, _mod9287.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
