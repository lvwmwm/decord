// Module ID: 12930
// Function ID: 12931
// Name: CrunchyrollLinkLanding
// Dependencies: [19, 12929, 1085, 21, 5092, 1126, 8400, 558, 576, 1503, 2128, 9213, 12931, 2]

// Module 12930 (CrunchyrollLinkLanding)
import Fragment from "Fragment" /* 21 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2128 */;
import CrunchyrollLinkConstants from "CrunchyrollLinkConstants" /* 12929 */;
import AssetRegistryDefault from "AssetRegistry" /* 12931 */;
import react from "react" /* 19 */;
import Constants from "Constants" /* 1085 */;
import createStyles from "createStyles" /* 5092 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let hasOwnProperty;
let metroRequire;
let closure_4 = CrunchyrollLinkConstants.CrunchyrollLinkModalScenes;
({ HelpdeskArticles: hasOwnProperty, PlatformTypes: metroRequire } = Constants);
const jsx = Fragment.jsx;
let closure_8 = createStyles.createStyles({ image: { width: 234, height: 147 } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function CrunchyrollLinkLanding() {
  let first;
  let intl;
  let tmp10;
  let tmp7;
  let tmp8;
  let tmp9;
  const obj = navigation(576);
  const cResult = obj.c(9);
  const tmp4 = closure_8();
  const obj2 = navigation(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { label: intl.string(navigation(1126).t["2TXHQd"]), icon: navigation(8400).PlayIcon };
    intl = tmp(1126).intl;
    const items = [obj3];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== navigation) {
    const fn = function y() {
      navigation.push(constants.PRE_CONNECT);
    };
    cResult[1] = navigation;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const image = tmp4.image;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult = intl2.string(navigation(1126).t["Da+3NJ"]);
    const intl3 = tmp(1126).intl;
    const stringResult1 = intl3.string(navigation(1126).t.MaPpPL);
    const obj4 = HelpdeskUtilsDefault;
    const articleURL = obj4.getArticleURL(constants.CRUNCHYROLL_CONNECTION);
    cResult[3] = stringResult;
    cResult[4] = stringResult1;
    cResult[5] = articleURL;
    tmp10 = articleURL;
    tmp9 = stringResult1;
    tmp8 = stringResult;
  } else {
    tmp8 = cResult[3];
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  if (cResult[6] === tmp7) {
    let tmp16;
    if (cResult[7] === tmp4.image) {
      tmp16 = cResult[8];
    }
    return tmp16;
  }
  const TwoWayLinkLanding = tmp(9213).TwoWayLinkLanding;
  const tmp17 = <TwoWayLinkLanding platformType={constants2.CRUNCHYROLL} img={AssetRegistryDefault} imgStyle={image} headerConnect={tmp8} body={tmp9} learnMoreLink={tmp10} onNext={tmp7} valueProps={first} />;
  cResult[6] = tmp7;
  cResult[7] = tmp4.image;
  cResult[8] = tmp17;
  tmp16 = tmp17;
}) : (function CrunchyrollLinkLanding() {
  const tmp = closure_8();
  let obj = navigation(1503);
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
  const TwoWayLinkLanding = navigation(9213).TwoWayLinkLanding;
  let intl = navigation(1126).intl;
  const intl2 = navigation(1126).intl;
  const obj3 = HelpdeskUtilsDefault;
  return <TwoWayLinkLanding platformType={constants2.CRUNCHYROLL} img={AssetRegistryDefault} imgStyle={tmp.image} headerConnect={intl.string(navigation(1126).t["Da+3NJ"])} body={intl2.string(navigation(1126).t.MaPpPL)} learnMoreLink={obj3.getArticleURL(constants.CRUNCHYROLL_CONNECTION)} onNext={callback} valueProps={memo} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkLanding.tsx");

export default tmp3;
