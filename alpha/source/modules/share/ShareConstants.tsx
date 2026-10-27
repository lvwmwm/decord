// Module ID: 12908
// Function ID: 12909
// Name: ShareConstants
// Dependencies: [9067, 2]
// Exports: isAllowedType

// Module 12908 (ShareConstants)
import _mod9067 from "module_9067" /* 9067 */;
import size from "module_2" /* 2 */;

const items = [_mod9067.AutocompleterResultTypes.USER, _mod9067.AutocompleterResultTypes.TEXT_CHANNEL, _mod9067.AutocompleterResultTypes.VOICE_CHANNEL, _mod9067.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
