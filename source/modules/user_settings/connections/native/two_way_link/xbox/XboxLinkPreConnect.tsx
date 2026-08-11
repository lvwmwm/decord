// Module ID: 10506
// Function ID: 10507
// Name: XboxLinkPreConnect
// Dependencies: [19, 10500, 676, 21, 4303, 1499, 10507, 10508, 1236, 2]
// Exports: default

// Module 10506 (XboxLinkPreConnect)
import noop from "noop";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ image: { width: 231, height: 160 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkPreConnect.tsx");

export default function XboxLinkPreConnect() {
  let obj = navigation(1499);
  navigation = obj.useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = React.useCallback((arg0) => {
    navigation.push(outer1_4.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = React.useCallback(() => {
    navigation.push(outer1_4.ERROR);
  }, items1);
  const memo = React.useMemo(() => ({ uri: callback(table[6]) }), []);
  obj = { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image, title: null, body: null };
  const intl = navigation(1236).intl;
  obj[5] = intl.string(navigation(1236).t["e/z3na"]);
  const intl2 = navigation(1236).intl;
  obj[6] = intl2.string(navigation(1236).t["7tXu0i"]);
  return jsx(navigation(10508).TwoWayLinkPreConnect, { platformType: PlatformTypes.XBOX, onError: callback1, onNext: callback, img: memo, imgStyle: callback().image, title: null, body: null });
};
