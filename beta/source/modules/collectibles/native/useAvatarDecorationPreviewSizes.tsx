// Module ID: 11380
// Function ID: 11381
// Name: useAvatarDecorationPreviewSizes
// Dependencies: [558, 568, 1482, 9089, 2]

// Module 11380 (useAvatarDecorationPreviewSizes)
import c from "c" /* 568 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1482 */;
import AvatarDecorationSampleV2 from "AvatarDecorationSampleV2" /* 9089 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/useAvatarDecorationPreviewSizes.tsx");

export const useAvatarDecorationPreviewSizes = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(3);
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  const result1 = result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio;
  if (cResult[0] === result) {
    if (cResult[1] === result1) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { avatarDecorationSize: result, avatarSize: result1 };
  cResult[0] = result;
  cResult[1] = result1;
  cResult[2] = obj2;
  tmp4 = obj2;
}) : (() => {
  const size = useWindowDimensionsDefault();
  const result = 2 * Math.min(size.width, size.height) / 3;
  return { avatarDecorationSize: result, avatarSize: result * AvatarDecorationSampleV2.avatarPlaceholderSizeRatio };
});
