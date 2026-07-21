// Module ID: 9678
// Function ID: 75345
// Name: GiftingBadgeIcon
// Dependencies: []
// Exports: default

// Module 9678 (GiftingBadgeIcon)
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/premium/gifting/native/views/GiftingBadgeIcon.tsx");

export default function GiftingBadgeIcon(size) {
  size = size.size;
  const source = { uri: size.icon };
  const style = [{ width: size, height: size }, size.style];
  return <Image source={source} style={style} />;
};
