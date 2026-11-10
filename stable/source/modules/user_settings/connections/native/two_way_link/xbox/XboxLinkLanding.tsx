// Module ID: 9724
// Function ID: 9725
// Name: XboxLinkLanding
// Dependencies: [19, 9723, 1072, 21, 5014, 1113, 8673, 9725, 8661, 9727, 1497, 2061, 9728, 9729, 2]
// Exports: default

// Module 9724 (XboxLinkLanding)
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import XboxLinkConstants from "XboxLinkConstants" /* 9723 */;
import _modDef9728 from "module_9728" /* 9728 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5014 */;
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
  let obj = navigation(1497);
  navigation = obj.useNavigation();
  let obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(constants.XBOX_CONNECTION);
  let intl = navigation(1113).intl;
  let items = [navigation];
  const formatResult = intl.format(navigation(1113).t.CIc3IN, { helpdeskArticleUrl: articleURL });
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
    const obj = { uri: _modDef9728 };
    return obj;
  }, []);
  const TwoWayLinkLanding = navigation(9729).TwoWayLinkLanding;
  let intl2 = navigation(1113).intl;
  let intl3 = navigation(1113).intl;
  return <TwoWayLinkLanding platformType={constants2.XBOX} img={memo1} imgStyle={tmp.image} headerConnect={intl2.string(navigation(1113).t.m8aahn)} headerReconnect={intl3.string(navigation(1113).t.z3rAhq)} body={formatResult} onNext={callback} valueProps={memo} />;
};
