// Module ID: 9032
// Function ID: 71051
// Name: CrunchyrollLinkPreConnect
// Dependencies: [31, 9029, 653, 8353, 33, 4130, 1456, 8986, 9033, 1212, 2]
// Exports: default

// Module 9032 (CrunchyrollLinkPreConnect)
import result from "result";
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes";
import { PlatformTypes } from "ME";
import { CRUNCHYROLL_LINK_DEST_ORIGIN as closure_6 } from "CRUNCHYROLL_LINK_DEST_ORIGIN";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 152, height: 123 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
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
  obj = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: importDefault(9033), imgStyle: callback().image };
  const intl = navigation(1212).intl;
  obj.title = intl.string(navigation(1212).t.siPkNp);
  const intl2 = navigation(1212).intl;
  obj.body = intl2.string(navigation(1212).t.oS4NEH);
  obj.redirectDestination = closure_6;
  return jsx(navigation(8986).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: importDefault(9033), imgStyle: callback().image });
};
