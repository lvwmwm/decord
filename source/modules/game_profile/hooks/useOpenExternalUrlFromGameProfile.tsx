// Module ID: 8597
// Function ID: 68266
// Name: _getDeepLinkUrl
// Dependencies: [57, 5, 31, 8598, 8599, 3821, 2]
// Exports: default

// Module 8597 (_getDeepLinkUrl)
import _slicedToArray from "_slicedToArray";
import _openURL from "_openURL";
import result from "result";

const require = arg1;
function _getDeepLinkUrl() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  return obj(...arguments);
}
const steam = "steam";
const re7 = /^\/app\/(\d+)(?:\/)?/;
const re8 = /^\/games\/store\/title\/([^/]+)/;
const result = require("result").fileFinishedImporting("modules/game_profile/hooks/useOpenExternalUrlFromGameProfile.tsx");

export default function useOpenExternalUrlFromGameProfile(arg0) {
  let closure_0 = arg0;
  const tmp = callback(React.useState(false), 2);
  const first = tmp[0];
  let closure_2 = tmp[1];
  const items = [arg0, first];
  return React.useCallback((() => {
    // CreateGeneratorClosureLongIndex (0x67)
    let closure_0 = outer1_4(tmp);
    return function() {
      return callback(...arguments);
    };
  })(), items);
};
