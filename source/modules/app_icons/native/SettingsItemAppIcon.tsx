// Module ID: 14708
// Function ID: 14709
// Name: SettingsItemAppIcon
// Dependencies: [19, 7662, 21, 4303, 712, 7661, 7663, 9533, 14709, 2]
// Exports: default

// Module 14708 (SettingsItemAppIcon)
import "noop";
import { getIconById } from "items";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { icon: null };
createCacheKey = { borderRadius: require("Themes").radii.round };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/app_icons/native/SettingsItemAppIcon.tsx");

export default function SettingsItemAppIcon(color) {
  let INTERACTIVE_ICON_DEFAULT = color.color;
  if (INTERACTIVE_ICON_DEFAULT === undefined) {
    INTERACTIVE_ICON_DEFAULT = importDefault(712).colors.INTERACTIVE_ICON_DEFAULT;
  }
  let obj = require(7661) /* fetchCurrentAppIcon */;
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp3 = createCacheKey();
  const tmp4 = require;
  if (currentAppIcon !== require(7663) /* FreemiumAppIconIds */.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp7) {
      obj = { style: null, id: null, size: 32 };
      obj[0] = tmp3.icon;
      obj[1] = currentAppIcon;
      let tmp11 = jsx(importDefault(14709), { style: null, id: null, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(tmp4(9533).ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
};
