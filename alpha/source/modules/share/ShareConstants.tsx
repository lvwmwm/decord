// Module ID: 9951
// Function ID: 9952
// Name: ShareConstants
// Dependencies: [9943, 2]
// Exports: isAllowedType

// Module 9951 (ShareConstants)
import _mod9943 from "module_9943" /* 9943 */;
import size from "module_2" /* 2 */;

const items = [_mod9943.AutocompleterResultTypes.USER, _mod9943.AutocompleterResultTypes.TEXT_CHANNEL, _mod9943.AutocompleterResultTypes.VOICE_CHANNEL, _mod9943.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
