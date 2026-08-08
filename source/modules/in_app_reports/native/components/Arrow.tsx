// Module ID: 8030
// Function ID: 8031
// Name: Arrow
// Dependencies: [19, 21, 4303, 712, 1297, 8031, 2]
// Exports: default

// Module 8030 (Arrow)
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { tintColor: null };
createCacheKey = { tintColor: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("createCacheKey").fileFinishedImporting("modules/in_app_reports/native/components/Arrow.tsx");

export default function Arrow() {
  const obj = { source: null, size: null, style: null };
  obj[0] = importDefault(8031);
  obj[1] = require(1297) /* Button */.Icon.Sizes.MEDIUM;
  obj[2] = createCacheKey().tintColor;
  return jsx(require(1297) /* Button */.Icon, { source: null, size: null, style: null });
};
