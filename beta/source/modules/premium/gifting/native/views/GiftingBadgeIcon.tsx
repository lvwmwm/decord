// Module ID: 10214
// Function ID: 10215
// Name: GiftingBadgeIcon
// Dependencies: [19, 17, 21, 2]
// Exports: default

// Module 10214 (GiftingBadgeIcon)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const Image = react_native.Image;
const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(uri) {
  size = uri.size;
  const items = [{ width: size, height: size }, uri.style];
  return <Image source={{ uri: arg0.icon }} resizeMode="contain" style={items} />;
};
