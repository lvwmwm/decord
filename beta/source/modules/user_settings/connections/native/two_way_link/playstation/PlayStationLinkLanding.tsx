// Module ID: 9374
// Function ID: 9375
// Name: PlayStationLinkLanding
// Dependencies: [19, 9373, 1078, 21, 4758, 1119, 5321, 9346, 558, 568, 1488, 2112, 9375, 9348, 2]

// Module 9374 (PlayStationLinkLanding)
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2112 */;
import _modDef9375 from "module_9375" /* 9375 */;
import noop from "module_19" /* 19 */;

const require = fn;
const constants = fn(9373).PlayStationLinkModalScenes;
const HelpdeskArticles = fn(1078).HelpdeskArticles;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_7 = createStyles.createStyles({ image: { width: 230, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkLanding.tsx");

export const PlayStationLinkLanding = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  const cResult = navigation(568).c(11);
  platformType = platformType.platformType;
  const tmp4 = closure_7();
  const obj = navigation(568);
  navigation = navigation(1488).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
    const intl = tmp(1119).intl;
    const obj4 = { helpdeskArticleUrl: articleURL };
    const formatResult = intl.format(tmp(1119).t.kqZQNe, obj4);
    cResult[0] = formatResult;
    let first = formatResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { label: null, subLabel: null, icon: null };
    const intl2 = tmp(1119).intl;
    obj5.label = intl2.string(tmp(1119).t["+eJP7o"]);
    const intl3 = tmp(1119).intl;
    obj5.subLabel = intl3.string(tmp(1119).t["+0VIUh"]);
    obj5.icon = tmp(5321).VoiceNormalIcon;
    const items = [obj5, ];
    const obj6 = { label: null, icon: null };
    const intl4 = tmp(1119).intl;
    obj6.label = intl4.string(tmp(1119).t.ZH4QFa);
    obj6.icon = tmp(9346).GameControllerIcon;
    items[1] = obj6;
    cResult[1] = items;
    let tmp11 = items;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    cResult[2] = navigation;
    cResult[3] = N;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    tmp14[0] = _modDef9375;
    cResult[4] = tmp14;
    const tmp13 = tmp14;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    const stringResult = obj7.string(tmp(1119).t.xAWHOy);
    const intl5 = tmp(1119).intl;
    const stringResult1 = intl5.string(tmp(1119).t["ZJ/vBh"]);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    let tmp17 = stringResult1;
    const tmp16 = stringResult;
  } else {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
    tmp17 = cResult[6];
  }
  if (cResult[7] === tmp12) {
    class N {
      constructor() {
        arr = closure_0.push(closure_4.PRE_CONNECT);
        return;
      }
    }
  }
  const obj2 = navigation(1488);
  cResult[7] = tmp12;
  cResult[8] = platformType;
  cResult[9] = tmp4.image;
  cResult[10] = jsx(navigation(9348).TwoWayLinkLanding, { platformType, img: tmp13, imgStyle: tmp4.image, headerConnect: tmp16, headerReconnect: tmp17, body: first, onNext: tmp12, valueProps: tmp11 });
}) : ((platformType) => {
  let navigation;
  const tmp = closure_7();
  navigation = navigation(1488).useNavigation();
  let obj = navigation(1488);
  const articleURL = HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.PS_CONNECTION);
  let intl = navigation(1119).intl;
  let items = [navigation];
  const memo = noop.useMemo(() => {
    const obj = { label: null, subLabel: null, icon: null };
    const intl = navigation(1119).intl;
    obj.label = intl.string(navigation(1119).t["+eJP7o"]);
    const intl2 = navigation(1119).intl;
    obj.subLabel = intl2.string(navigation(1119).t["+0VIUh"]);
    obj.icon = navigation(5321).VoiceNormalIcon;
    const items = [obj, ];
    const obj2 = { label: null, icon: null };
    const intl3 = navigation(1119).intl;
    obj2.label = intl3.string(navigation(1119).t.ZH4QFa);
    obj2.icon = navigation(9346).GameControllerIcon;
    items[1] = obj2;
    return items;
  }, []);
  const callback = noop.useCallback(() => {
    navigation.push(constants.PRE_CONNECT);
  }, items);
  const memo1 = noop.useMemo(() => ({ uri: _modDef9375 }), []);
  const obj3 = { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null };
  let intl2 = navigation(1119).intl;
  obj3.headerConnect = intl2.string(navigation(1119).t.xAWHOy);
  let intl3 = navigation(1119).intl;
  obj3.headerReconnect = intl3.string(navigation(1119).t["ZJ/vBh"]);
  obj3.body = intl.format(navigation(1119).t.kqZQNe, { helpdeskArticleUrl: articleURL });
  obj3.onNext = callback;
  obj3.valueProps = memo;
  return jsx(navigation(9348).TwoWayLinkLanding, { platformType: platformType.platformType, img: memo1, imgStyle: tmp.image, headerConnect: null, headerReconnect: null, body: null, onNext: null, valueProps: null });
});
