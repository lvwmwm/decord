// Module ID: 7396
// Function ID: 59484
// Name: getWhatYouLoseProfileTier1Source
// Dependencies: []
// Exports: WhatYouLoseProfileTier1

// Module 7396 (getWhatYouLoseProfileTier1Source)
function getWhatYouLoseProfileTier1Source(theme) {
  let obj = arg1(dependencyMap[3]);
  obj = {
    dark() {
      return callback(closure_1[4]);
    },
    darker() {
      return callback(closure_1[5]);
    },
    light() {
      return callback(closure_1[6]);
    }
  };
  return obj.getIllustrationSource(theme, obj);
}
function useWhatYouLoseProfileTier1Source() {
  return getWhatYouLoseProfileTier1Source(arg1(dependencyMap[7]).useThemeContext().theme);
}
importAll(dependencyMap[0]);
const Image = arg1(dependencyMap[1]).Image;
const jsx = arg1(dependencyMap[2]).jsx;
const result = arg1(dependencyMap[8]).fileFinishedImporting("design/components/Illustration/native/redesign/generated/WhatYouLoseProfileTier1.tsx");

export { getWhatYouLoseProfileTier1Source };
export { useWhatYouLoseProfileTier1Source };
export const WhatYouLoseProfileTier1 = function WhatYouLoseProfileTier1(arg0) {
  const obj = {};
  const merged = Object.assign(arg0);
  obj["source"] = useWhatYouLoseProfileTier1Source();
  return <Image {...obj} />;
};
