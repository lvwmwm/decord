// Module ID: 12845
// Function ID: 12846
// Name: ShareConstants
// Dependencies: [9043, 2]
// Exports: isAllowedType

// Module 12845 (ShareConstants)
import _mod9043 from "module_9043" /* 9043 */;
import size from "module_2" /* 2 */;

const items = [_mod9043.AutocompleterResultTypes.USER, _mod9043.AutocompleterResultTypes.TEXT_CHANNEL, _mod9043.AutocompleterResultTypes.VOICE_CHANNEL, _mod9043.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
