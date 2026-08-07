// Module ID: 14638
// Function ID: 14639
// Name: SettingsItemAppIcon
// Dependencies: [19, 7602, 21, 4302, 712, 7601, 7603, 9468, 14639, 2]
// Exports: default

// Module 14638 (SettingsItemAppIcon)
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
  let obj = require(7601) /* fetchCurrentAppIcon */;
  const currentAppIcon = obj.useCurrentAppIcon();
  const tmp3 = createCacheKey();
  const tmp4 = require;
  if (currentAppIcon !== require(7603) /* FreemiumAppIconIds */.FreemiumAppIconIds.DEFAULT) {
    if (null != tmp7) {
      obj = { style: null, id: null, size: 32 };
      obj[0] = tmp3.icon;
      obj[1] = currentAppIcon;
      let tmp11 = jsx(importDefault(14639), { style: null, id: null, size: 32 });
    }
    return tmp11;
  }
  tmp11 = jsx(tmp4(9468).ClydeIcon, { color: INTERACTIVE_ICON_DEFAULT });
};
