// Module ID: 12731
// Function ID: 12732
// Name: ShareConstants
// Dependencies: [9000, 2]
// Exports: isAllowedType

// Module 12731 (ShareConstants)
import _mod9000 from "module_9000" /* 9000 */;
import size from "module_2" /* 2 */;

const items = [_mod9000.AutocompleterResultTypes.USER, _mod9000.AutocompleterResultTypes.TEXT_CHANNEL, _mod9000.AutocompleterResultTypes.VOICE_CHANNEL, _mod9000.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
