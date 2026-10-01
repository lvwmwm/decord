// Module ID: 10445
// Function ID: 10446
// Name: ShareConstants
// Dependencies: [9290, 2]
// Exports: isAllowedType

// Module 10445 (ShareConstants)
import _mod9290 from "module_9290" /* 9290 */;
import size from "module_2" /* 2 */;

const items = [_mod9290.AutocompleterResultTypes.USER, _mod9290.AutocompleterResultTypes.TEXT_CHANNEL, _mod9290.AutocompleterResultTypes.VOICE_CHANNEL, _mod9290.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
