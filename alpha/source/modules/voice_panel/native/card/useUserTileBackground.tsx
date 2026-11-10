// Module ID: 19511
// Function ID: 19512
// Name: useUserTileBackground
// Dependencies: [9612, 8904, 2]
// Exports: default

// Module 19511 (useUserTileBackground)
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8904 */;
import DominantColorUtils from "DominantColorUtils" /* 9612 */;
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
