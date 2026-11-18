// Module ID: 9969
// Function ID: 9970
// Name: ShareConstants
// Dependencies: [9961, 2]
// Exports: isAllowedType

// Module 9969 (ShareConstants)
import _mod9961 from "module_9961" /* 9961 */;
import size from "module_2" /* 2 */;

const items = [_mod9961.AutocompleterResultTypes.USER, _mod9961.AutocompleterResultTypes.TEXT_CHANNEL, _mod9961.AutocompleterResultTypes.VOICE_CHANNEL, _mod9961.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
