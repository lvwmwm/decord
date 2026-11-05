// Module ID: 19418
// Function ID: 19419
// Name: useUserTileBackground
// Dependencies: [9675, 8970, 2]
// Exports: default

// Module 19418 (useUserTileBackground)
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8970 */;
import DominantColorUtils from "DominantColorUtils" /* 9675 */;
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
