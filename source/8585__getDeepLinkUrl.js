// Module ID: 8585
// Function ID: 68191
// Name: _getDeepLinkUrl
// Dependencies: []
// Exports: default

// Module 8585 (_getDeepLinkUrl)
function _getDeepLinkUrl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _getDeepLinkUrl = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
let closure_6 = "steam";
let closure_7 = /^\/app\/(\d+)(?:\/)?/;
let closure_8 = /^\/games\/store\/title\/([^/]+)/;
const result = arg1(dependencyMap[6]).fileFinishedImporting("modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx");

export default function useOpenExternalUrlFromGameProfile(arg0) {
  const arg1 = arg0;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const items = [arg0, first];
  return React.useCallback(() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = callback(tmp);
    return function() {
      return callback(...arguments);
    };
  }(), items);
};
