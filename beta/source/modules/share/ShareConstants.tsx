// Module ID: 10071
// Function ID: 10072
// Name: ShareConstants
// Dependencies: [10063, 2]
// Exports: isAllowedType

// Module 10071 (ShareConstants)
import _mod10063 from "module_10063" /* 10063 */;
import size from "module_2" /* 2 */;

const items = [_mod10063.AutocompleterResultTypes.USER, _mod10063.AutocompleterResultTypes.TEXT_CHANNEL, _mod10063.AutocompleterResultTypes.VOICE_CHANNEL, _mod10063.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
