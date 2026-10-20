// Module ID: 18189
// Function ID: 18190
// Name: useUserTileBackground
// Dependencies: [558, 576, 9349, 8679, 2]

// Module 18189 (useUserTileBackground)
import react from "react" /* 576 */;
import useProfileTileGradientDefault from "useProfileTileGradient" /* 8679 */;
import DominantColorUtils from "DominantColorUtils" /* 9349 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useUserTileBackground(arg0) {
  let _location;
  let avatarURI;
  let guildId;
  let userId;
  const obj = react;
  const cResult = obj.c(7);
  ({ userId, guildId, location: _location, avatarURI } = arg0);
  DominantColorUtils;
  if (cResult[0] === guildId) {
    if (cResult[1] === _location) {
      let tmp5;
      if (cResult[2] === userId) {
        tmp5 = cResult[3];
      }
      const tmp7 = useProfileTileGradientDefault(tmp5);
      let str = "transparent";
      if (null == tmp7) {
        str = tmp4;
      }
      if (cResult[4] === tmp7) {
        let tmp9;
        if (cResult[5] === str) {
          tmp9 = cResult[6];
        }
        return tmp9;
      }
      const obj2 = { gradientStops: tmp7, backgroundColor: str };
      cResult[4] = tmp7;
      cResult[5] = str;
      cResult[6] = obj2;
      tmp9 = obj2;
    }
  }
  const obj3 = { userId, guildId, location: _location };
  cResult[0] = guildId;
  cResult[1] = _location;
  cResult[2] = userId;
  cResult[3] = obj3;
  tmp5 = obj3;
}) : (function useUserTileBackground(arg0) {
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
});
const result = size.fileFinishedImporting("modules/voice_panel/native/card/useUserTileBackground.tsx");

export default tmp2;
