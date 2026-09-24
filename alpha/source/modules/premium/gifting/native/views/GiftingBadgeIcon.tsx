// Module ID: 11097
// Function ID: 11098
// Name: GiftingBadgeIcon
// Dependencies: [19, 17, 21, 2]
// Exports: default

// Module 11097 (GiftingBadgeIcon)
import noop from "module_19" /* 19 */;

const Image = fn(17).Image;
const jsx = fn(21).jsx;
let size = fn(2);
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(uri) {
  const size = uri.size;
  const obj = { source: { uri: uri.icon }, resizeMode: "contain", style: null };
  const items = [{ width: size, height: size }, uri.style];
  obj.style = items;
  return <Image source={{ uri: arg0.icon }} resizeMode="contain" style={null} />;
};
