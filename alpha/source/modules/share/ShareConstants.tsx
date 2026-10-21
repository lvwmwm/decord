// Module ID: 12795
// Function ID: 12796
// Name: ShareConstants
// Dependencies: [9027, 2]
// Exports: isAllowedType

// Module 12795 (ShareConstants)
import _mod9027 from "module_9027" /* 9027 */;
import size from "module_2" /* 2 */;

const items = [_mod9027.AutocompleterResultTypes.USER, _mod9027.AutocompleterResultTypes.TEXT_CHANNEL, _mod9027.AutocompleterResultTypes.VOICE_CHANNEL, _mod9027.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
