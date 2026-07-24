// Module ID: 5698
// Function ID: 49081
// Name: MobileLurkerServerPreviewExperiment
// Dependencies: [1325, 2]
// Exports: getMobileLurkerServerPreview, useMobileLurkerServerPreview

// Module 5698 (MobileLurkerServerPreviewExperiment)
const obj = { name: "2026-05-mobile-lurker-server-preview", kind: "user", defaultConfig: { enabled: false, stickyLurk: false }, variations: { [1]: { enabled: true, stickyLurk: false }, [2]: { enabled: true, stickyLurk: true } } };
const tmp2 = require("getUnitId")(obj);
let closure_0 = tmp2;
const result = require("set").fileFinishedImporting("modules/lurker_mode/experiments/MobileLurkerServerPreviewExperiment.tsx");

export default tmp2;
export const MobileLurkerServerPreviewExperiment = tmp2;
export const useMobileLurkerServerPreview = function useMobileLurkerServerPreview(ChannelListStickyHeader) {
  return tmp2.useConfig({ location: ChannelListStickyHeader });
};
export const getMobileLurkerServerPreview = function getMobileLurkerServerPreview(AcceptInviteManager) {
  return tmp2.getConfig({ location: AcceptInviteManager });
};
