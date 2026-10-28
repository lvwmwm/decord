// Module ID: 12964
// Function ID: 12965
// Name: ShareConstants
// Dependencies: [9100, 2]
// Exports: isAllowedType

// Module 12964 (ShareConstants)
import _mod9100 from "module_9100" /* 9100 */;
import size from "module_2" /* 2 */;

const items = [_mod9100.AutocompleterResultTypes.USER, _mod9100.AutocompleterResultTypes.TEXT_CHANNEL, _mod9100.AutocompleterResultTypes.VOICE_CHANNEL, _mod9100.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
