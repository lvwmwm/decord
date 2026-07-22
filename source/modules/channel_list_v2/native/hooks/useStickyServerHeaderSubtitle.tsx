// Module ID: 14869
// Function ID: 112025
// Name: useStickyServerHeaderSubtitle
// Dependencies: []
// Exports: default

// Module 14869 (useStickyServerHeaderSubtitle)
let closure_2 = importDefault(dependencyMap[0]);
const GuildFeatures = arg1(dependencyMap[1]).GuildFeatures;
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/channel_list_v2/native/hooks/useStickyServerHeaderSubtitle.tsx");

export default function useStickyServerHeaderSubtitle(arg0) {
  const arg1 = arg0;
  const items = [closure_2];
  return arg1(dependencyMap[2]).useStateFromStores(items, (self) => {
    const features = self.features;
    let memberCount;
    if (features.has(constants.COMMUNITY)) {
      memberCount = memberCount.getMemberCount(self.id);
    }
    return memberCount;
  });
};
