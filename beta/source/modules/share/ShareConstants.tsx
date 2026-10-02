// Module ID: 10478
// Function ID: 10479
// Name: ShareConstants
// Dependencies: [9268, 2]
// Exports: isAllowedType

// Module 10478 (ShareConstants)
import _mod9268 from "module_9268" /* 9268 */;
import size from "module_2" /* 2 */;

const items = [_mod9268.AutocompleterResultTypes.USER, _mod9268.AutocompleterResultTypes.TEXT_CHANNEL, _mod9268.AutocompleterResultTypes.VOICE_CHANNEL, _mod9268.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
