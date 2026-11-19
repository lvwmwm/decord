// Module ID: 14223
// Function ID: 14224
// Name: socialLayerStorefrontEmbedColors
// Dependencies: [4792, 575, 2]

// Module 14223 (socialLayerStorefrontEmbedColors)
import nativeDefault from "native" /* 575 */;
import createStyles from "createStyles" /* 4792 */;
import size from "module_2" /* 2 */;

const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overlayTextColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const nativeStyleProperties = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedColors.tsx");

export const getSocialLayerStorefrontEmbedColors = nativeStyleProperties;
