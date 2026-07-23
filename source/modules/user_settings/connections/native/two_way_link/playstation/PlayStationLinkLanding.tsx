// Module ID: 8974
// Function ID: 70776
// Name: PlayStationLinkLanding
// Dependencies: [31, 8973, 653, 33, 4130, 1212, 4658, 8940, 1456, 1920, 8975, 8942, 2]
// Exports: PlayStationLinkLanding

// Module 8974 (PlayStationLinkLanding)
import result from "result";
import { PlayStationLinkModalScenes as closure_4 } from "PlayStationLinkModalScenes";
import { HelpdeskArticles } from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
let closure_7 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 230, height: 160 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = function PlayStationLinkLanding(platformType) {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const tmp = callback();
  const articleURL = importDefault(1920).getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1212).intl;
  const obj2 = importDefault(1920);
  let items = [navigation];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = navigation(outer1_2[5]).intl;
    obj.label = intl.string(navigation(outer1_2[5]).t["+eJP7o"]);
    const intl2 = navigation(outer1_2[5]).intl;
    obj.subLabel = intl2.string(navigation(outer1_2[5]).t["+0VIUh"]);
    obj.icon = navigation(outer1_2[6]).VoiceNormalIcon;
    const items = [obj, ];
    obj = {};
    const intl3 = navigation(outer1_2[5]).intl;
    obj.label = intl3.string(navigation(outer1_2[5]).t.ZH4QFa);
    obj.icon = navigation(outer1_2[7]).GameControllerIcon;
    items[1] = obj;
    return items;
  }, []);
  callback = React.useCallback(() => {
    navigation.push(outer1_4.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: outer1_1(outer1_2[10]) }), []);
  obj = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image };
  let intl2 = navigation(1212).intl;
  obj.headerConnect = intl2.string(navigation(1212).t.xAWHOy);
  let intl3 = navigation(1212).intl;
  obj.headerReconnect = intl3.string(navigation(1212).t["ZJ/vBh"]);
  obj.body = intl.format(navigation(1212).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(navigation(8942).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image });
};
