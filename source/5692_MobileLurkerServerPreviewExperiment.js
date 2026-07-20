// Module ID: 5692
// Function ID: 48985
// Name: MobileLurkerServerPreviewExperiment
// Dependencies: []
// Exports: getMobileLurkerServerPreview, useMobileLurkerServerPreview

// Module 5692 (MobileLurkerServerPreviewExperiment)
const obj = { -1269606814: 7, -1845285747: 6, defaultConfig: {}, variations: { [1]: { æ: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000021043611947808288, ầ: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000053357352779429986 }, [2]: { æ: null, ầ: null } } };
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
