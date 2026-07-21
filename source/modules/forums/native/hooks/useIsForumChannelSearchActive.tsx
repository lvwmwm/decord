// Module ID: 10114
// Function ID: 78281
// Name: useIsForumChannelSearchActive
// Dependencies: []
// Exports: useIsForumChannelSearchActive

// Module 10114 (useIsForumChannelSearchActive)
let closure_2 = importDefault(dependencyMap[0]);
const result = arg1(dependencyMap[3]).fileFinishedImporting("modules/forums/native/hooks/useIsForumChannelSearchActive.tsx");

export const useIsForumChannelSearchActive = function useIsForumChannelSearchActive(channelId) {
  const arg1 = channelId;
  let canSearchForumPostsByChannelId = arg1(dependencyMap[1]).useCanSearchForumPostsByChannelId(channelId);
  arg1(dependencyMap[2]);
  [][0] = channelId;
  if (canSearchForumPostsByChannelId) {
    canSearchForumPostsByChannelId = null != tmp3;
  }
  return canSearchForumPostsByChannelId;
};
