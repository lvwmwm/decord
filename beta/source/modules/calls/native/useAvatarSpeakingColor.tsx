// Module ID: 8902
// Function ID: 8903
// Name: useAvatarSpeakingColor
// Dependencies: [19, 4825, 8903, 504, 8904, 4531, 576, 4683, 672, 2]
// Exports: useAvatarSpeakingColor

// Module 8902 (useAvatarSpeakingColor)
import _modDef672 from "module_672" /* 672 */;
import ColorUtils from "ColorUtils" /* 4683 */;
import VadColorConstants from "VadColorConstants" /* 8903 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4825 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let closure_5 = VadColorConstants.VAD_COLOR_MIN_CONTRAST_RATIO;
const result = size.fileFinishedImporting("modules/calls/native/useAvatarSpeakingColor.tsx");

export const useAvatarSpeakingColor = function useAvatarSpeakingColor(arg0) {
  let closure_1;
  let guildId;
  let ratio;
  let userId;
  let stateFromStores;
  importDefault = undefined;
  let token;
  ({ userId, guildId } = arg0);
  let obj = stateFromStores(token[3]);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => {
    let num = 1;
    if (AccessibilityStore.desaturateUserColors) {
      num = AccessibilityStore.saturation;
    }
    return num;
  });
  const tmp2 = require("useVadColors")({ userId, guildId });
  importDefault = tmp2;
  const obj2 = stateFromStores(token[5]);
  token = obj2.useToken(require("native").colors.BACKGROUND_BASE_LOWER);
  const obj3 = stateFromStores(token[5]);
  const token1 = obj3.useToken(require("native").colors.STATUS_SPEAKING);
  const items1 = [tmp2, token, token1, stateFromStores];
  return token1.useMemo(() => {
    let hexResult;
    let first;
    if (closure_1 != null) {
      first = closure_1[0];
    }
    if (null == first) {
      hexResult = token1;
    } else {
      const obj = { foreground: _modDef672(first), background: _modDef672(token), ratio, saturationFactor: stateFromStores };
      const getAccessibleForegroundColor = ColorUtils.getAccessibleForegroundColor;
      ColorUtils;
      const accessibleForegroundColor = getAccessibleForegroundColor(obj);
      hexResult = accessibleForegroundColor.hex();
    }
    return hexResult;
  }, items1);
};
