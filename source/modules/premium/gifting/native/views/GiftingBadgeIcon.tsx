// Module ID: 10097
// Function ID: 10098
// Name: GiftingBadgeIcon
// Dependencies: [19, 17, 21, 2]
// Exports: default

// Module 10097 (GiftingBadgeIcon)
import "noop";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(size) {
  size = size.size;
  const source = { uri: size.icon };
  const style = [{ width: size, height: size }, size.style];
  return <Image source={source} style={style} />;
};
