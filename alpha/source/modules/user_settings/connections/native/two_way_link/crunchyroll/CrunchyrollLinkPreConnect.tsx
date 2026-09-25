// Module ID: 8568
// Function ID: 8569
// Name: CrunchyrollLinkPreConnect
// Dependencies: [19, 8565, 1074, 7778, 21, 4829, 1484, 8534, 8569, 1115, 2]
// Exports: default

// Module 8568 (CrunchyrollLinkPreConnect)
import _modDef8569 from "module_8569" /* 8569 */;
import noop from "module_19" /* 19 */;

const require = fn;
let closure_4 = fn(8565).CrunchyrollLinkModalScenes;
const PlatformTypes = fn(1074).PlatformTypes;
const redirectDestination = fn(7778).CRUNCHYROLL_LINK_DEST_ORIGIN;
const jsx = fn(21).jsx;
const createStyles = fn(4829);
let closure_8 = createStyles.createStyles({ image: { width: 152, height: 123 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/connections/native/two_way_link/crunchyroll/CrunchyrollLinkPreConnect.tsx");

export default function CrunchyrollLinkPreConnect() {
  const tmp = closure_8();
  navigation = navigation(1484).useNavigation();
  const items = [navigation];
  const items1 = [navigation];
  const callback = noop.useCallback((arg0) => {
    navigation.push(constants.DISCORD_CONSENT, arg0);
  }, items);
  const callback1 = noop.useCallback(() => {
    navigation.push(constants.ERROR);
  }, items1);
  const obj2 = { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef8569, imgStyle: tmp.image, title: null, body: null, redirectDestination: null };
  const intl = navigation(1115).intl;
  obj2.title = intl.string(navigation(1115).t.siPkNp);
  const intl2 = navigation(1115).intl;
  obj2.body = intl2.string(navigation(1115).t.oS4NEH);
  obj2.redirectDestination = redirectDestination;
  return jsx(navigation(8534).TwoWayLinkPreConnect, { platformType: PlatformTypes.CRUNCHYROLL, onError: callback1, onNext: callback, img: _modDef8569, imgStyle: tmp.image, title: null, body: null, redirectDestination: null });
};
