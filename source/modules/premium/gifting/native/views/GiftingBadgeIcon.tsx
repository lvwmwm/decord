// Module ID: 9686
// Function ID: 75399
// Name: GiftingBadgeIcon
// Dependencies: [31, 27, 33, 2]
// Exports: default

// Module 9686 (GiftingBadgeIcon)
import "result";
import { Image } from "get ActivityIndicator";
import { jsx } from "jsxProd";

const result = require("jsxProd").fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(size) {
  size = size.size;
  const source = { uri: size.icon };
  const style = [{ width: size, height: size }, size.style];
  return <Image source={source} style={style} />;
};
