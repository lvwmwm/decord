// Module ID: 9408
// Function ID: 9409
// Name: PlayStationLinkPreConnect
// Dependencies: [19, 9405, 21, 4790, 558, 568, 1488, 9409, 1119, 9385, 2]

// Module 9408 (PlayStationLinkPreConnect)
import _modDef9409 from "module_9409" /* 9409 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9405).PlayStationLinkModalScenes;
const jsx = fn(21).jsx;
const createStyles = fn(4790);
let closure_6 = createStyles.createStyles({ image: { width: 231, height: 160 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/playstation/PlayStationLinkPreConnect.tsx");

export const PlayStationLinkPreConnect = ReactCompilerGating.isReactCompilerEnabled() ? ((platformType) => {
  const cResult = navigation(568).c(12);
  platformType = platformType.platformType;
  const tmp4 = closure_6();
  const obj = navigation(568);
  navigation = navigation(1488).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function s(arg0) {
      navigation.push(constants.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function f() {
      navigation.push(constants.ERROR, {});
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { uri: _modDef9409 };
    cResult[4] = obj3;
    let tmp8 = obj3;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t["6n+UPR"]);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.JaaqIf);
    cResult[5] = stringResult;
    cResult[6] = stringResult1;
    let tmp11 = stringResult1;
    let tmp10 = stringResult;
  } else {
    tmp10 = cResult[5];
    tmp11 = cResult[6];
  }
  if (cResult[7] === tmp7) {
    if (cResult[8] === tmp6) {
      if (cResult[9] === platformType) {
        if (cResult[10] === tmp4.image) {
          let tmp14 = cResult[11];
        }
        return tmp14;
      }
    }
  }
  const tmp15 = jsx(navigation(9385).TwoWayLinkPreConnect, { platformType, onError: tmp7, onNext: tmp6, img: tmp8, imgStyle: tmp4.image, title: tmp10, body: tmp11 });
  cResult[7] = tmp7;
  cResult[8] = tmp6;
  cResult[9] = platformType;
  cResult[10] = tmp4.image;
  cResult[11] = tmp15;
  tmp14 = tmp15;
}) : ((platformType) => {
  let navigation;
  const tmp = closure_6();
  navigation = navigation(1488).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR, {});
  }, items1);
  const memo = noop.useMemo(() => ({ uri: _modDef9409 }), []);
  const obj2 = { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null };
  const intl = navigation(1119).intl;
  obj2.title = intl.string(navigation(1119).t["6n+UPR"]);
  const intl2 = navigation(1119).intl;
  obj2.body = intl2.string(navigation(1119).t.JaaqIf);
  return jsx(navigation(9385).TwoWayLinkPreConnect, { platformType: platformType.platformType, onError: callback1, onNext: callback, img: memo, imgStyle: tmp.image, title: null, body: null });
});
