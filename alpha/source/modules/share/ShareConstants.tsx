// Module ID: 10192
// Function ID: 10193
// Name: ShareConstants
// Dependencies: [10178, 2]
// Exports: isAllowedType

// Module 10192 (ShareConstants)
import _mod10178 from "module_10178" /* 10178 */;
import size from "module_2" /* 2 */;

const items = [_mod10178.AutocompleterResultTypes.USER, _mod10178.AutocompleterResultTypes.TEXT_CHANNEL, _mod10178.AutocompleterResultTypes.VOICE_CHANNEL, _mod10178.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
