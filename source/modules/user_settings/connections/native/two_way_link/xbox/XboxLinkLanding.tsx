// Module ID: 8939
// Function ID: 70477
// Name: XboxLinkLanding
// Dependencies: [31, 8938, 653, 33, 4130, 1212, 4658, 8011, 4646, 8940, 1456, 1920, 8941, 8942, 2]
// Exports: default

// Module 8939 (XboxLinkLanding)
import result from "result";
import { XboxLinkModalScenes } from "XboxLinkModalScenes";
import ME from "ME";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_5;
let closure_6;
const require = arg1;
({ HelpdeskArticles: closure_5, PlatformTypes: closure_6 } = ME);
let closure_8 = _createForOfIteratorHelperLoose.createStyles({ image: { width: 230, height: 160 } });
const result = require("ME").fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default function XboxLinkLanding() {
  let obj = navigation(1456);
  navigation = obj.useNavigation();
  const tmp = callback();
  const articleURL = importDefault(1920).getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1212).intl;
  const obj2 = importDefault(1920);
  let items = [navigation];
  const memo = React.useMemo(() => {
    let obj = {};
    const intl = navigation(outer1_2[5]).intl;
    obj.label = intl.string(navigation(outer1_2[5]).t.ihQXsb);
    obj.icon = navigation(outer1_2[6]).VoiceNormalIcon;
    const items = [obj, , , ];
    obj = {};
    const intl2 = navigation(outer1_2[5]).intl;
    obj.label = intl2.string(navigation(outer1_2[5]).t.Xt1n4P);
    obj.icon = navigation(outer1_2[7]).ScreenStreamIcon;
    items[1] = obj;
    obj = {};
    const intl3 = navigation(outer1_2[5]).intl;
    obj.label = intl3.string(navigation(outer1_2[5]).t.xqVY3p);
    obj.icon = navigation(outer1_2[8]).GroupIcon;
    items[2] = obj;
    const obj1 = {};
    const intl4 = navigation(outer1_2[5]).intl;
    obj1.label = intl4.string(navigation(outer1_2[5]).t.iQsKVW);
    obj1.icon = navigation(outer1_2[9]).GameControllerIcon;
    items[3] = obj1;
    return items;
  }, []);
  callback = React.useCallback(() => {
    navigation.push(outer1_4.PRE_CONNECT);
  }, items);
  const memo1 = React.useMemo(() => ({ uri: outer1_1(outer1_2[12]) }), []);
  obj = { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image };
  let intl2 = navigation(1212).intl;
  obj.headerConnect = intl2.string(navigation(1212).t.m8aahn);
  let intl3 = navigation(1212).intl;
  obj.headerReconnect = intl3.string(navigation(1212).t.z3rAhq);
  obj.body = intl.format(navigation(1212).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  obj.onNext = callback;
  obj.valueProps = memo;
  return jsx(navigation(8942).TwoWayLinkLanding, { platformType: constants2.XBOX, img: memo1, imgStyle: tmp.image });
};
