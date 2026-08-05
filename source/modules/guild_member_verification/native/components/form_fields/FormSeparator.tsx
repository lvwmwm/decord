// Module ID: 8226
// Function ID: 8227
// Name: FormSeparator
// Dependencies: [19, 17, 21, 4255, 712, 2]
// Exports: default

// Module 8226 (FormSeparator)
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

createCacheKey = { separator: null };
createCacheKey = { borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1, marginVertical: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/guild_member_verification/native/components/form_fields/FormSeparator.tsx");

export default function FormSeparator(style) {
  const obj = {};
  const merged = Object.assign(style);
  const items = [createCacheKey().separator, style.style];
  obj.style = items;
  return <View />;
};
