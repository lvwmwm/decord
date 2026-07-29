// Module ID: 11180
// Function ID: 11181
// Name: ForumPostPinIcon
// Dependencies: [19, 17, 21, 4189, 712, 1297, 11181, 2]
// Exports: default

// Module 11180 (ForumPostPinIcon)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { pin: null, pinIcon: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: require("Themes").radii.round, width: 23, height: 23, marginEnd: 4, backgroundColor: require("Themes").colors.BACKGROUND_BRAND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 14, width: 14, tintColor: require("Themes").colors.WHITE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { height: 14, width: 14, tintColor: require("Themes").colors.WHITE };
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/posts/ForumPostPinIcon.tsx");

export default function ForumPostPinIcon(containerStyle) {
  const tmp = createCacheKey();
  let obj = { style: items, children: null };
  items = [tmp.pin, containerStyle.containerStyle];
  obj = { source: null, style: null };
  obj[0] = importDefault(11181);
  obj[1] = tmp.pinIcon;
  obj[1] = jsx(require(1297) /* Button */.Icon, { source: null, style: null });
  return <View source={null} style={null} />;
};
