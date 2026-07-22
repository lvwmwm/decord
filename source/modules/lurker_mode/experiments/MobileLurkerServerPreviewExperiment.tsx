// Module ID: 5693
// Function ID: 49044
// Name: MobileLurkerServerPreviewExperiment
// Dependencies: []
// Exports: getMobileLurkerServerPreview, useMobileLurkerServerPreview

// Module 5693 (MobileLurkerServerPreviewExperiment)
const obj = { y: 7, DateToSystemTimezoneSetter: 6, defaultConfig: { ầ: true, ằ: true }, variations: { [1]: { ầ: "<string:1040334421>", ằ: "<string:1040334338>" }, [2]: { ầ: null, ằ: null } } };
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
