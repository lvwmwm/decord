// Module ID: 15406
// Function ID: 15407
// Name: socialLayerStorefrontEmbedColors
// Dependencies: [5140, 575, 2]

// Module 15406 (socialLayerStorefrontEmbedColors)
import nativeDefault from "native" /* 575 */;
import createStyles from "createStyles" /* 5140 */;
import size from "module_2" /* 2 */;

const obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, overlayTextColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_TEXT_DEFAULT };
const nativeStyleProperties = createStyles.createNativeStyleProperties(obj);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/socialLayerStorefrontEmbedColors.tsx");

export const getSocialLayerStorefrontEmbedColors = nativeStyleProperties;
