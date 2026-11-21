// Module ID: 7196
// Function ID: 7197
// Name: PlayStationLinkLanding
// Dependencies: [19, 7195, 1071, 21, 4913, 1112, 7034, 7040, 1500, 2187, 7197, 7043, 2]
// Exports: PlayStationLinkLanding

// Module 7196 (PlayStationLinkLanding)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1071 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 7195 */;
import _modDef7197 from "module_7197" /* 7197 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export function PlayStationLinkLanding(platformType) {
  navigation = undefined;
  platformType = platformType.platformType;
  const tmp = closure_7();
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  let obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1112).intl;
  let items = [navigation];
  const formatResult = intl.format(navigation(1112).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    const obj = { label: intl.string(navigation(dependencyMap[5]).t["+eJP7o"]), subLabel: intl2.string(navigation(dependencyMap[5]).t["+0VIUh"]), icon: navigation(dependencyMap[6]).VoiceNormalIcon };
    intl = navigation(dependencyMap[5]).intl;
    intl2 = navigation(dependencyMap[5]).intl;
    const items = [obj, ];
    const obj2 = { label: intl3.string(navigation(dependencyMap[5]).t.ZH4QFa), icon: navigation(dependencyMap[7]).GameControllerIcon };
    intl3 = navigation(dependencyMap[5]).intl;
    items[1] = obj2;
    return items;
  }, []);
  const callback = react.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = react.useMemo(() => {
    const obj = { uri: _modDef7197 };
    return obj;
  }, []);
  const TwoWayLinkLanding = navigation(7043).TwoWayLinkLanding;
  let intl2 = navigation(1112).intl;
  let intl3 = navigation(1112).intl;
  return <TwoWayLinkLanding platformType={platformType} img={memo1} imgStyle={tmp.image} headerConnect={intl2.string(navigation(1112).t.xAWHOy)} headerReconnect={intl3.string(navigation(1112).t["ZJ/vBh"])} body={formatResult} onNext={callback} valueProps={memo} />;
}
