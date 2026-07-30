// Module ID: 8984
// Function ID: 8985
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 8981, 676, 8170, 21, 4189, 1480, 8938, 8985, 1236, 2]
// Exports: default

// Module 8984 (CrunchyrollLinkPreConnect)
import noop from "noop";
import { CrunchyrollLinkModalScenes as closure_4 } from "CrunchyrollLinkModalScenes";
import { PlatformTypes } from "ME";
import { CRUNCHYROLL_LINK_DEST_ORIGIN as closure_6 } from "CRUNCHYROLL_LINK_DEST_ORIGIN";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_8 = createCacheKey.createStyles({ image: { width: 152, height: 123 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  let obj = navigation(1480);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(outer1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_4.ERROR);
  }, items1);
  obj = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: null, imgStyle: null, title: null, body: null, redirectDestination: null };
  obj[3] = importDefault(8985);
  obj[4] = callback().image;
  const intl = navigation(1236).intl;
  obj[5] = intl.string(navigation(1236).t.siPkNp);
  const intl2 = navigation(1236).intl;
  obj[6] = intl2.string(navigation(1236).t.oS4NEH);
  obj[7] = closure_6;
  return jsx(navigation(8938).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: null, imgStyle: null, title: null, body: null, redirectDestination: null });
};
