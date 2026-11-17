// Module ID: 10688
// Function ID: 10689
// Name: ShareConstants
// Dependencies: [10680, 2]
// Exports: isAllowedType

// Module 10688 (ShareConstants)
import _mod10680 from "module_10680" /* 10680 */;
import size from "module_2" /* 2 */;

const items = [_mod10680.AutocompleterResultTypes.USER, _mod10680.AutocompleterResultTypes.TEXT_CHANNEL, _mod10680.AutocompleterResultTypes.VOICE_CHANNEL, _mod10680.AutocompleterResultTypes.GROUP_DM];
const ALLOWED_TYPES = Array.from(items);
const result = size.fileFinishedImporting("modules/share/ShareConstants.tsx");

export { ALLOWED_TYPES };
export function isAllowedType(type) {
  return arr.includes(type.type);
}
