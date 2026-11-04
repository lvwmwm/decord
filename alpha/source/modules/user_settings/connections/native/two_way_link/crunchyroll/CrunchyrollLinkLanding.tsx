// Module ID: 14861
// Function ID: 14862
// Name: CrunchyrollLinkLanding
// Dependencies: [19, 14860, 1072, 21, 5141, 1113, 8989, 1499, 9879, 14862, 2190, 2]
// Exports: default

// Module 14861 (CrunchyrollLinkLanding)
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2190 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 14860 */;
import AssetRegistryDefault from "AssetRegistry" /* 14862 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5141 */;
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
  let obj = navigation(1499);
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
  const TwoWayLinkLanding = navigation(9879).TwoWayLinkLanding;
  let intl = navigation(1113).intl;
  const intl2 = navigation(1113).intl;
  const obj3 = HelpdeskUtilsDefault;
  return <TwoWayLinkLanding platformType={constants2.CRUNCHYROLL} img={AssetRegistryDefault} imgStyle={tmp.image} headerConnect={intl.string(navigation(1113).t["Da+3NJ"])} body={intl2.string(navigation(1113).t.MaPpPL)} learnMoreLink={obj3.getArticleURL(constants.CRUNCHYROLL_CONNECTION)} onNext={callback} valueProps={memo} />;
};
