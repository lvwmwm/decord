// Module ID: 5694
// Function ID: 49028
// Name: MobileLurkerServerPreviewExperiment
// Dependencies: []
// Exports: getMobileLurkerServerPreview, useMobileLurkerServerPreview

// Module 5694 (MobileLurkerServerPreviewExperiment)
const obj = { 9223372036854775807: 7, 0: 6, defaultConfig: {}, variations: { [1]: {}, [2]: {} } };
const tmp2 = importDefault(dependencyMap[0])(obj);
const result = arg1(dependencyMap[1]).fileFinishedImporting("modules/lurker_mode/experiments/MobileLurkerServerPreviewExperiment.tsx");

export default tmp2;
export const MobileLurkerServerPreviewExperiment = tmp2;
export const useMobileLurkerServerPreview = function useMobileLurkerServerPreview(ChannelListStickyHeader) {
  return tmp2.useConfig({ location: ChannelListStickyHeader });
};
export const getMobileLurkerServerPreview = function getMobileLurkerServerPreview(AcceptInviteManager) {
  return tmp2.getConfig({ location: AcceptInviteManager });
};
