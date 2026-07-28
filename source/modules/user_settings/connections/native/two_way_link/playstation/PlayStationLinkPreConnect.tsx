// Module ID: 8947
// Function ID: 70628
// Name: PlayStationLinkPreConnect
// Dependencies: [31, 8944, 33, 4165, 1456, 8948, 8918, 1212, 2]
// Exports: PlayStationLinkPreConnect

// Module 8947 (PlayStationLinkPreConnect)
import result from "result";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkModalScenes";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_6 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 231, height: 160 } });
const result = require("jsxProd").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = function PlayStationLinkPreConnect(platformType) {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(outer1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_4.ERROR, {});
  }, items1);
  const memo = React.useMemo(() => ({ uri: outer1_1(outer1_2[5]) }), []);
  obj = { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image };
  const intl = navigation(1212).intl;
  obj.title = intl.string(navigation(1212).t["6n+UPR"]);
  const intl2 = navigation(1212).intl;
  obj.body = intl2.string(navigation(1212).t.JaaqIf);
  return jsx(navigation(8918).TwoWayLinkPreConnect, { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image });
};
