// Module ID: 14193
// Function ID: 14194
// Name: socialLayerStorefrontEmbedColors
// Dependencies: [4794, 575, 2]

// Module 14193 (socialLayerStorefrontEmbedColors)
import nativeDefault from "native" /* 575 */;
import createStyles from "createStyles" /* 4794 */;
import size from "module_2" /* 2 */;

const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overlayTextColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const nativeStyleProperties = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedColors.tsx");

export const getSocialLayerStorefrontEmbedColors = nativeStyleProperties;
