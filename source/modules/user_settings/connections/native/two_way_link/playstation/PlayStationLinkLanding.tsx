// Module ID: 10523
// Function ID: 10524
// Name: PlayStationLinkLanding
// Dependencies: [19, 10522, 676, 21, 4342, 1236, 4870, 8811, 1499, 1993, 10524, 10460, 2]
// Exports: PlayStationLinkLanding

// Module 10523 (PlayStationLinkLanding)
import noop from "noop";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkModalScenes";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_7 = createCacheKey.createStyles({ image: { width: 230, height: 160 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = function PlayStationLinkLanding(platformType) {
  let navigation;
  let obj = navigation(1499);
  navigation = obj.useNavigation();
  const tmp = callback();
  const articleURL = importDefault(1993).getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1236).intl;
  const obj2 = importDefault(1993);
  let items = [navigation];
  const memo = React.useMemo(() => {
    let obj = { label: null, subLabel: null, icon: null };
    const intl = navigation(1236).intl;
    obj[0] = intl.string(navigation(1236).t["+eJP7o"]);
    const intl2 = navigation(1236).intl;
    obj[1] = intl2.string(navigation(1236).t["+0VIUh"]);
    obj[2] = navigation(4870).VoiceNormalIcon;
    const items = [obj, ];
    obj = { label: null, icon: null };
    const intl3 = navigation(1236).intl;
    obj[0] = intl3.string(navigation(1236).t.ZH4QFa);
    obj[1] = navigation(8811).GameControllerIcon;
    items[1] = obj;
    return items;
  }, []);
  callback = React.useCallback(() => {
    navigation.push(outer1_4.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: callback(10524) }), []);
  obj = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1236).intl;
  obj[3] = intl2.string(navigation(1236).t.xAWHOy);
  let intl3 = navigation(1236).intl;
  obj[4] = intl3.string(navigation(1236).t["ZJ/vBh"]);
  obj[5] = intl.format(navigation(1236).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj[6] = callback;
  obj[7] = memo;
  return jsx(navigation(10460).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
};
