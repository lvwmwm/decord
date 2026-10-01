// Module ID: 8532
// Function ID: 8533
// Name: XboxLinkLanding
// Dependencies: [19, 8531, 1074, 21, 4836, 1115, 5415, 8533, 5403, 8535, 1485, 2111, 8536, 8537, 2]
// Exports: default

// Module 8532 (XboxLinkLanding)
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2111 */;
import XboxLinkConstants from "XboxLinkConstants" /* 8531 */;
import _modDef8536 from "module_8536" /* 8536 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
const XboxLinkModalScenes = XboxLinkConstants.XboxLinkModalScenes;
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/xbox/XboxLinkLanding.tsx");

export default function XboxLinkLanding() {
  const tmp = closure_8();
  let obj = navigation(1485);
  navigation = obj.useNavigation();
  let obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1115).intl;
  let items = [navigation];
  const formatResult = intl.format(navigation(1115).t.CIc3IN, { helpdeskArticleUrl: articleURL });
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let intl4;
    const obj = { label: intl.string(navigation(dependencyMap[5]).t.ihQXsb), icon: navigation(dependencyMap[6]).VoiceNormalIcon };
    intl = navigation(dependencyMap[5]).intl;
    const items = [obj, , , ];
    const obj2 = { label: intl2.string(navigation(dependencyMap[5]).t.Xt1n4P), icon: navigation(dependencyMap[7]).ScreenStreamIcon };
    intl2 = navigation(dependencyMap[5]).intl;
    items[1] = obj2;
    const obj3 = { label: intl3.string(navigation(dependencyMap[5]).t.xqVY3p), icon: navigation(dependencyMap[8]).GroupIcon };
    intl3 = navigation(dependencyMap[5]).intl;
    items[2] = obj3;
    const obj4 = { label: intl4.string(navigation(dependencyMap[5]).t.iQsKVW), icon: navigation(dependencyMap[9]).GameControllerIcon };
    intl4 = navigation(dependencyMap[5]).intl;
    items[3] = obj4;
    return items;
  }, []);
  const callback = react.useCallback(() => {
    navigation.push(XboxLinkModalScenes.PRE_CONNECT);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = { uri: _modDef8536 };
    return obj;
  }, []);
  const TwoWayLinkLanding = navigation(8537).TwoWayLinkLanding;
  let intl2 = navigation(1115).intl;
  let intl3 = navigation(1115).intl;
  return <TwoWayLinkLanding platformType={constants2.XBOX} img={memo1} imgStyle={tmp.image} headerConnect={intl2.string(navigation(1115).t.m8aahn)} headerReconnect={intl3.string(navigation(1115).t.z3rAhq)} body={formatResult} onNext={callback} valueProps={memo} />;
};
