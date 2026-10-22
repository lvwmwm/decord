// Module ID: 12827
// Function ID: 12828
// Name: ShareConstants
// Dependencies: [9036, 2]
// Exports: isAllowedType

// Module 12827 (ShareConstants)
import _mod9036 from "module_9036" /* 9036 */;
import size from "module_2" /* 2 */;

const items = [_mod9036.AutocompleterResultTypes.USER, _mod9036.AutocompleterResultTypes.TEXT_CHANNEL, _mod9036.AutocompleterResultTypes.VOICE_CHANNEL, _mod9036.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
