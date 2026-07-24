// Module ID: 8984
// Function ID: 70707
// Name: XboxLinkPreConnect
// Dependencies: [31, 8977, 653, 33, 4130, 1456, 8985, 8986, 1212, 2]
// Exports: default

// Module 8984 (XboxLinkPreConnect)
import result from "result";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 231, height: 160 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect() {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(outer1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_4.ERROR);
  }, items1);
  const memo = React.useMemo(() => ({ uri: outer1_1(outer1_2[6]) }), []);
  obj = { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image };
  const intl = navigation(1212).intl;
  obj.title = intl.string(navigation(1212).t["e/z3na"]);
  const intl2 = navigation(1212).intl;
  obj.body = intl2.string(navigation(1212).t["7tXu0i"]);
  return jsx(navigation(8986).TwoWayLinkPreConnect, { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image });
};
