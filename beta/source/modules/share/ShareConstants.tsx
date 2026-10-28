// Module ID: 12938
// Function ID: 12939
// Name: ShareConstants
// Dependencies: [9099, 2]
// Exports: isAllowedType

// Module 12938 (ShareConstants)
import _mod9099 from "module_9099" /* 9099 */;
import size from "module_2" /* 2 */;

const items = [_mod9099.AutocompleterResultTypes.USER, _mod9099.AutocompleterResultTypes.TEXT_CHANNEL, _mod9099.AutocompleterResultTypes.VOICE_CHANNEL, _mod9099.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export const isAllowedType = function isAllowedType(type) {
  return arr.includes(type.type);
};
