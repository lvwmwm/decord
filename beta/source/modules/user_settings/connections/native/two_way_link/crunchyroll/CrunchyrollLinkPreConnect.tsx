// Module ID: 9387
// Function ID: 9388
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 9384, 1078, 8614, 21, 4758, 558, 568, 1488, 1119, 9353, 9388, 2]

// Module 9387 (CrunchyrollLinkPreConnect)
import _modDef9388 from "module_9388" /* 9388 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(9384).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1078).PlatformTypes;
const redirectDestination = fn(8614).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = fn(21).jsx;
const createStyles = fn(4758);
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(568).c(10);
  const tmp4 = closure_8();
  const obj = navigation(568);
  navigation = navigation(1488).useNavigation();
  if (cResult[0] !== navigation) {
    const fn = function t(arg0) {
      navigation.push(constants.DISCORD_CONSENT, arg0);
    };
    cResult[0] = navigation;
    cResult[1] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  if (cResult[2] !== navigation) {
    const fn2 = function y() {
      navigation.push(constants.ERROR);
    };
    cResult[2] = navigation;
    cResult[3] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1119).intl;
    const stringResult = intl.string(tmp(1119).t.siPkNp);
    const intl2 = tmp(1119).intl;
    const stringResult1 = intl2.string(tmp(1119).t.oS4NEH);
    cResult[4] = stringResult;
    cResult[5] = stringResult1;
    let tmp9 = stringResult1;
    let tmp8 = stringResult;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  if (cResult[6] === tmp7) {
    if (cResult[7] === tmp6) {
      if (cResult[8] === tmp4.image) {
        let tmp12 = cResult[9];
      }
      return tmp12;
    }
  }
  const obj2 = navigation(1488);
  const tmp13 = jsx(navigation(9353).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: tmp7, onNext: tmp6, img: _modDef9388, imgStyle: tmp4.image, title: tmp8, body: tmp9, redirectDestination });
  cResult[6] = tmp7;
  cResult[7] = tmp6;
  cResult[8] = tmp4.image;
  cResult[9] = tmp13;
  tmp12 = tmp13;
}) : (() => {
  const tmp = closure_8();
  navigation = navigation(1488).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const obj2 = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef9388, imgStyle: tmp.image, title: null, body: null, redirectDestination: null };
  const intl = navigation(1119).intl;
  obj2.title = intl.string(navigation(1119).t.siPkNp);
  const intl2 = navigation(1119).intl;
  obj2.body = intl2.string(navigation(1119).t.oS4NEH);
  obj2.redirectDestination = redirectDestination;
  return jsx(navigation(9353).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef9388, imgStyle: tmp.image, title: null, body: null, redirectDestination: null });
});
