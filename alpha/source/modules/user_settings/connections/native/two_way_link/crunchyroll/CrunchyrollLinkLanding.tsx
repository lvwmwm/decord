// Module ID: 7207
// Function ID: 7208
// Name: CrunchyrollLinkLanding
// Dependencies: [19, 7206, 1071, 21, 4913, 1112, 7208, 1500, 7043, 7210, 2187, 2]
// Exports: default

// Module 7207 (CrunchyrollLinkLanding)
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2187 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 7206 */;
import AssetRegistryDefault from "AssetRegistry" /* 7210 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1071 */;
import createStyles from "createStyles" /* 4913 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let closure_4 = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 234, height: 147 } });
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx");

export default function CrunchyrollLinkLanding() {
  const tmp = closure_8();
  let obj = navigation(1500);
  navigation = obj.useNavigation();
  let items = [navigation];
  const memo = react.useMemo(() => {
    let intl;
    const obj = { label: intl.string(navigation(dependencyMap[5]).t["2TXHQd"]), icon: navigation(dependencyMap[6]).PlayIcon };
    intl = navigation(dependencyMap[5]).intl;
    const items = [obj];
    return items;
  }, []);
  const callback = react.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const TwoWayLinkLanding = navigation(7043).TwoWayLinkLanding;
  let intl = navigation(1112).intl;
  const intl2 = navigation(1112).intl;
  const obj3 = HelpdeskUtilsDefault;
  return <TwoWayLinkLanding platformType={constants2.CRUNCHYROLL} img={AssetRegistryDefault} imgStyle={tmp.image} headerConnect={intl.string(navigation(1112).t["Da+3NJ"])} body={intl2.string(navigation(1112).t.MaPpPL)} learnMoreLink={obj3.getArticleURL(constants.CRUNCHYROLL_CONNECTION)} onNext={callback} valueProps={memo} />;
};
