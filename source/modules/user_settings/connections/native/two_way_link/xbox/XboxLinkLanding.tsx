// Module ID: 9149
// Function ID: 9150
// Name: XboxLinkLanding
// Dependencies: [19, 9148, 673, 21, 4481, 1233, 5062, 9150, 5050, 9152, 1498, 1994, 9153, 9154, 2]
// Exports: default

// Module 9149 (XboxLinkLanding)
import combinedDefault from "combined" /* 1994 */;
import closure_3 from "noop" /* 19 */;
import { XboxLinkModalScenes } from "XboxLinkModalScenes" /* 9148 */;
import ME from "ME" /* 673 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4481 */;

const require = arg1;
({ HelpdeskArticles: c5, PlatformTypes: closure_6 } = ME);
let closure_8 = createCacheKey.createStyles({ image: { width: 230, height: 160 } });
const result = require("set").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default function XboxLinkLanding() {
  let obj = navigation(1498);
  navigation = obj.useNavigation();
  const tmp = callback();
  const articleURL = combinedDefault.getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1233).intl;
  const obj2 = combinedDefault;
  let items = [navigation];
  const memo = React.useMemo(() => {
    let obj = { label: null, icon: null };
    const intl = navigation(1233).intl;
    obj[0] = intl.string(navigation(1233).t.ihQXsb);
    obj[1] = navigation(5062).VoiceNormalIcon;
    const items = [obj, , , ];
    obj = { label: null, icon: null };
    const intl2 = navigation(1233).intl;
    obj[0] = intl2.string(navigation(1233).t.Xt1n4P);
    obj[1] = navigation(9150).ScreenStreamIcon;
    items[1] = obj;
    obj = { label: null, icon: null };
    const intl3 = navigation(1233).intl;
    obj[0] = intl3.string(navigation(1233).t.xqVY3p);
    obj[1] = navigation(5050).GroupIcon;
    items[2] = obj;
    obj1 = { label: null, icon: null };
    const intl4 = navigation(1233).intl;
    obj1[0] = intl4.string(navigation(1233).t.iQsKVW);
    obj1[1] = navigation(9152).GameControllerIcon;
    items[3] = obj1;
    return items;
  }, []);
  callback = React.useCallback(() => {
    navigation.push(closure_1_4.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: callback(9153) }), []);
  obj = { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1233).intl;
  obj[3] = intl2.string(navigation(1233).t.m8aahn);
  let intl3 = navigation(1233).intl;
  obj[4] = intl3.string(navigation(1233).t.z3rAhq);
  obj[5] = intl.format(navigation(1233).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj[6] = callback;
  obj[7] = memo;
  return jsx(navigation(9154).TwoWayLinkLanding, { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};
