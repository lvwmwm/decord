// Module ID: 12872
// Function ID: 12873
// Name: PlayStationLinkLanding
// Dependencies: [19, 12871, 1085, 21, 5091, 1126, 8212, 9184, 558, 576, 1503, 2127, 12873, 9186, 2]

// Module 12872 (PlayStationLinkLanding)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1085 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2127 */;
import PlayStationLinkConstants from "PlayStationLinkConstants" /* 12871 */;
import _modDef12873 from "module_12873" /* 12873 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigation;

let closure_4 = PlayStationLinkConstants.PlayStationLinkModalScenes;
const HelpdeskArticles = Constants.HelpdeskArticles;
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function PlayStationLinkLanding(platformType) {
  let first;
  let intl2;
  let intl3;
  let intl4;
  let tmp11;
  let tmp12;
  let tmp13;
  let tmp15;
  let tmp16;
  const obj = navigation(576);
  const cResult = obj.c(11);
  platformType = platformType.platformType;
  const tmp4 = closure_7();
  const obj2 = navigation(1503);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = HelpdeskUtilsDefault;
    const articleURL = obj3.getArticleURL(HelpdeskArticles.PS_CONNECTION);
    const intl = tmp(1126).intl;
    const obj4 = { helpdeskArticleUrl: articleURL };
    const formatResult = intl.format(navigation(1126).t.kqZQNe, obj4);
    cResult[0] = formatResult;
    first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { label: intl2.string(navigation(1126).t["+eJP7o"]), subLabel: intl3.string(navigation(1126).t["+0VIUh"]), icon: navigation(8212).VoiceNormalIcon };
    intl2 = tmp(1126).intl;
    intl3 = tmp(1126).intl;
    const items = [obj5, ];
    const obj6 = { label: intl4.string(navigation(1126).t.ZH4QFa), icon: navigation(9184).GameControllerIcon };
    intl4 = tmp(1126).intl;
    items[1] = obj6;
    cResult[1] = items;
    tmp11 = items;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn = function f() {
      navigation.push(constants.PRE_CONNECT);
    };
    cResult[2] = navigation;
    cResult[3] = fn;
    tmp12 = fn;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { uri: _modDef12873 };
    cResult[4] = obj7;
    tmp13 = obj7;
  } else {
    tmp13 = cResult[4];
  }
  const image = tmp4.image;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl5 = tmp(1126).intl;
    const stringResult = intl5.string(navigation(1126).t.xAWHOy);
    const intl6 = tmp(1126).intl;
    const stringResult1 = intl6.string(navigation(1126).t["ZJ/vBh"]);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    tmp16 = stringResult1;
    tmp15 = stringResult;
  } else {
    tmp15 = cResult[5];
    tmp16 = cResult[6];
  }
  if (cResult[7] === tmp12) {
    if (cResult[8] === platformType) {
      let tmp19;
      if (cResult[9] === tmp4.image) {
        tmp19 = cResult[10];
      }
      return tmp19;
    }
  }
  const tmp20 = jsx(navigation(9186).TwoWayLinkLanding, { platformType, img: tmp13, imgStyle: image, headerConnect: tmp15, headerReconnect: tmp16, body: first, onNext: tmp12, valueProps: tmp11 });
  cResult[7] = tmp12;
  cResult[8] = platformType;
  cResult[9] = tmp4.image;
  cResult[10] = tmp20;
  tmp19 = tmp20;
}) : (function PlayStationLinkLanding(platformType) {
  navigation = undefined;
  platformType = platformType.platformType;
  const tmp = closure_7();
  let obj = navigation(1503);
  navigation = obj.useNavigation();
  let obj2 = HelpdeskUtilsDefault;
  const articleURL = obj2.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1126).intl;
  let items = [navigation];
  const formatResult = intl.format(navigation(1126).t.kqZQNe, { helpdeskArticleUrl: articleURL });
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
    const obj = { uri: _modDef12873 };
    return obj;
  }, []);
  const TwoWayLinkLanding = navigation(9186).TwoWayLinkLanding;
  let intl2 = navigation(1126).intl;
  let intl3 = navigation(1126).intl;
  return <TwoWayLinkLanding platformType={platformType} img={memo1} imgStyle={tmp.image} headerConnect={intl2.string(navigation(1126).t.xAWHOy)} headerReconnect={intl3.string(navigation(1126).t["ZJ/vBh"])} body={formatResult} onNext={callback} valueProps={memo} />;
});
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = tmp2;
