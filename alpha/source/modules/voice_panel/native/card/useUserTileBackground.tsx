// Module ID: 19410
// Function ID: 19411
// Name: useUserTileBackground
// Dependencies: [9624, 8916, 2]
// Exports: default

// Module 19410 (useUserTileBackground)
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8916 */;
import DominantColorUtils from "DominantColorUtils" /* 9624 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/voice_panel/native/card/useUserTileBackground.tsx");

export default function useUserTileBackground(arg0) {
  let _location;
  let avatarURI;
  let guildId;
  let str;
  let userId;
  ({ userId, guildId, avatarURI, location: _location } = arg0);
  const obj = DominantColorUtils;
  const dominantColorFromImage = obj.useDominantColorFromImage(avatarURI);
  const tmp2 = useProfileTileGradientDefault({ userId, guildId, location: _location });
  const obj2 = { gradientStops: tmp2, backgroundColor: str };
  str = "transparent";
  if (null == tmp2) {
    str = dominantColorFromImage;
  }
  return obj2;
};
