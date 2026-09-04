// Module ID: 16169
// Function ID: 16170
// Name: GenericUpsellActionSheet
// Dependencies: [19, 17, 1383, 21, 4481, 709, 8101, 7090, 5542, 7094, 4477, 1296, 4936, 2]
// Exports: default

// Module 16169 (GenericUpsellActionSheet)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import preloadDefault from "preload" /* 5542 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1383 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { image: { width: "100%" }, content: null, description: null };
createCacheKey = { paddingHorizontal: ThemesDefault.space.PX_16, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginBottom: ThemesDefault.space.PX_16, flex: 1 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginBottom: ThemesDefault.space.PX_16, flex: 1 };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/feature_education/GenericUpsellActionSheet.tsx");

export default function GenericUpsellActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  ({ imageSource, header, body, onCTAPress, cta } = markAsDismissed);
  const tmp = callback3();
  let obj = markAsDismissed(8101);
  bottomSheetRef = obj.useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
  obj = {
    ref: bottomSheetRef,
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(closure_1_4.UNKNOWN);
    },
    handleDisabled: true,
    header: null,
    children: null
  };
  obj = { children: null };
  const items = [callback(preloadDefault, { source: imageSource, style: tmp.image }), callback(markAsDismissed(7094).ActionSheetHeaderBar, { variant: "floating", onPress: bottomSheetClose })];
  obj[0] = items;
  obj[4] = callback2(View, obj);
  const obj2 = { style: tmp.content, children: null };
  const items1 = [callback(markAsDismissed(4477).Text, { accessibilityRole: "header", variant: "heading-xl/medium", color: "mobile-text-heading-primary", children: header }), callback(markAsDismissed(1296).Spacer, { size: 12 }), callback(markAsDismissed(4477).Text, { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: body }), callback(markAsDismissed(4936).Button, { variant: "primary", grow: true, onPress: onCTAPress, text: cta })];
  obj2[1] = items1;
  obj[5] = callback2(View, obj2);
  return callback(markAsDismissed(7090).BottomSheet, obj);
};
