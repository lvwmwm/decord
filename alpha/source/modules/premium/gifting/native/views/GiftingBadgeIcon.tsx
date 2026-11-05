// Module ID: 10803
// Function ID: 10804
// Name: GiftingBadgeIcon
// Dependencies: [19, 21, 5854, 2]
// Exports: default

// Module 10803 (GiftingBadgeIcon)
import Fragment from "Fragment" /* 21 */;
import FastImageDefault from "FastImage" /* 5854 */;
import react from "react" /* 19 */;
import size_mod from "module_2" /* 2 */;

const jsx = Fragment.jsx;
let size = size_mod;
const result = size.fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(size) {
  let icon;
  let style;
  size = size.size;
  ({ icon, style } = size);
  const items = [{ width: size, height: size }, style];
  return jsx(FastImageDefault, { source: { uri: icon }, resizeMode: "contain", style: items });
};
