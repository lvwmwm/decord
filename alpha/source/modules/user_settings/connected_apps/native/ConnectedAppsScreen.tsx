// Module ID: 16832
// Function ID: 16833
// Name: ConnectedAppsScreen
// Dependencies: [19, 17, 7276, 502, 6572, 2062, 1072, 21, 5014, 575, 5253, 7682, 504, 14991, 1498, 7347, 5624, 1113, 4287, 6027, 16833, 16834, 6977, 9720, 16842, 5717, 1409, 5021, 5634, 1625, 16843, 1497, 5258, 16844, 1994, 7294, 2]
// Exports: default

// Module 16832 (ConnectedAppsScreen)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import intl6 from "intl" /* 1113 */;
import AvatarUtils from "AvatarUtils" /* 1409 */;
import shared from "shared" /* 5021 */;
import useThemeDefault from "useTheme" /* 5253 */;
import FastImageDefault from "FastImage" /* 5717 */;
import Card_Card from "Card/Card" /* 6977 */;
import useConnectionFilteredAppIdentitiesDefault from "useConnectionFilteredAppIdentities" /* 14991 */;
import ConnectedApplicationIdentityDefault from "ConnectedApplicationIdentity" /* 16833 */;
import ConnectedAccountDefault from "ConnectedAccount" /* 16834 */;
import UserSettingsAuthedApps from "UserSettingsAuthedApps" /* 16843 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import AuthorizedAppsStore from "AuthorizedAppsStore" /* 7276 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 6572 */;
import LocaleStore from "LocaleStore" /* 2062 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5014 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let closure_12;
let closure_4;
let hasOwnProperty;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let size;
let tmp2;
let unpackModuleId;
const _modDef4287 = tmp2(4287);
function ConnectionsSection(onAdd) {
  let Button;
  let accounts;
  let fetching;
  let id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let locale;
  let locale2;
  let newestTokensForNonChildrenApplications;
  let obj15;
  let theme;
  let tile;
  let tmp12Result;
  onAdd = onAdd.onAdd;
  importDefault = undefined;
  dependencyMap = undefined;
  let tmp = closure_14();
  _require = tmp;
  let tmp3 = dependencyMap;
  importDefault = useThemeDefault();
  const tmp4 = _require;
  let obj = require("ConnectionsHooks");
  const emptyStatePlatforms = obj.useEmptyStatePlatforms();
  let obj2 = require("get initialized");
  const items = [LocaleStore];
  dependencyMap = obj2.useStateFromStores(items, () => locale2.locale);
  let obj3 = require("get initialized");
  const items1 = [AuthenticationStore];
  const stateFromStores = obj3.useStateFromStores(items1, () => id.getId());
  const items2 = [ConnectedAccountsStore];
  const obj4 = require("get initialized");
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    const obj = { fetching: ConnectedAccountsStore.isFetching(), accounts: ConnectedAccountsStore.getAccounts() };
    return obj;
  });
  ({ accounts, fetching } = stateFromStoresObject);
  const items3 = [AuthorizedAppsStore];
  const obj5 = require("get initialized");
  const authorizedApps = obj5.useStateFromStoresObject(items3, () => {
    const obj = { authorizedApps: newestTokensForNonChildrenApplications.getNewestTokensForNonChildrenApplications() };
    return obj;
  }).authorizedApps;
  const tmp7 = useConnectionFilteredAppIdentitiesDefault(stateFromStores, { includeHidden: true });
  const prop = tmp7.filteredAppIdentities;
  let tmp8 = accounts.length > 0;
  const isLoading = tmp7.isLoading;
  if (!tmp8) {
    tmp8 = prop.length > 0;
  }
  const tmp4Result = tmp4(1498);
  const focusEffect = tmp4Result.useFocusEffect(authorizedApps.useCallback(() => {
    const obj = theme(locale[15]);
    const response = obj.fetch();
  }, []));
  const obj6 = { style: tmp.section, children: items6 };
  const obj7 = { children: items5 };
  const obj8 = { style: tmp.header, children: items4 };
  const obj9 = { style: tmp.title, variant: "heading-md/semibold", color: "text-strong", children: intl.string(tmp4(1113).t["3fe7U5"]) };
  const Heading = tmp4(5624).Heading;
  intl = tmp4(1113).intl;
  items4 = [closure_11(Heading, obj9), ];
  const obj10 = { variant: "text-sm/medium", color: "text-link", style: tmp.addAction, accessibilityRole: "button", accessibilityLabel: intl2.string(tmp4(1113).t.Zhcj9X), onPress: onAdd, children: intl3.string(tmp4(1113).t.OYkgVk) };
  const Text = tmp4(5624).Text;
  intl2 = tmp4(1113).intl;
  intl3 = tmp4(1113).intl;
  items4[1] = closure_11(Text, obj10);
  items5 = [closure_12(closure_5, obj8), ];
  const obj11 = { variant: "text-sm/normal", color: "text-default", children: intl4.string(_modDef4287["0y44+Q"]) };
  const Text2 = tmp4(5624).Text;
  intl4 = tmp4(1113).intl;
  items5[1] = closure_11(Text2, obj11);
  items6 = [closure_12(closure_5, obj7), ];
  if (tmp8) {
    const obj12 = { spacing: 16, children: items7 };
    const Stack = tmp4(6027).Stack;
    items7 = [
      prop.map((identity) => {
          let closure_0 = identity;
          const obj = { identity, token: authorizedApps.find((application) => application.application.id === application_id.application_id) };
          const tmp = ConnectedApplicationIdentityDefault;
          return unpackModuleId(tmp, obj, "" + identity.application_id + "-" + identity.provider_issued_user_id);
        }),
      accounts.map((account) => {
          const obj = { theme, locale, account };
          return unpackModuleId(ConnectedAccountDefault, obj, account.id);
        })
    ];
    tmp12Result = tmp10(Stack, obj12);
  } else {
    if (!fetching) {
      if (!isLoading) {
        const obj13 = { style: tmp.tiles, children: items8 };
        const substr = emptyStatePlatforms.slice(0, 4);
        items8 = [
          substr.map((accessibilityLabel) => {
                  let obj3;
                  let tmp3;
                  const type = accessibilityLabel.type;
                  const icon = accessibilityLabel.icon;
                  let obj = {
                    variant: "secondary",
                    border: "none",
                    radius: 12,
                    style: tile.tile,
                    accessibilityLabel: accessibilityLabel.name,
                    onPress() {
                      const obj = { platformType: type, location: constants.CONNECTIONS_EMPTY_STATE };
                      theme(locale[23])(obj);
                      const obj2 = tile(locale[24]);
                      const obj3 = { platformType: type };
                      const result = obj2.trackEmptyStateCardClicked(obj3);
                    },
                    children: tmp(tmp3, obj3)
                  };
                  const Card = Card_Card.Card;
                  tmp3 = FastImageDefault;
                  const makeSource = AvatarUtils.makeSource;
                  AvatarUtils;
                  let obj2 = shared;
                  obj3 = { source: makeSource(obj2.isThemeDark(theme) ? icon.darkPNG : icon.lightPNG), style: tile.icon, resizeMode: "contain", accessible: false };
                  return unpackModuleId(Card, obj, type);
                }),

        ];
        const obj14 = { style: tmp.moreButton, children: closure_11(Button, obj15) };
        obj15 = { variant: "secondary", size: "lg", grow: true, text: intl5.string(tmp4(1113).t["UKOtz+"]), onPress: onAdd };
        Button = tmp4(5634).Button;
        intl5 = tmp4(1113).intl;
        items8[1] = closure_11(closure_5, obj14);
        tmp12Result = tmp10(tmp11, obj13);
      }
    }
    tmp12Result = tmp12(closure_4, {});
  }
  items6[1] = tmp12Result;
  return closure_12(closure_5, obj6);
}
({ ActivityIndicator: closure_4, View: hasOwnProperty } = react_native);
const AnalyticsLocations = Constants.AnalyticsLocations;
({ jsx: unpackModuleId, jsxs: closure_12, Fragment: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, section: obj3, header: obj4, title: { flex: 1 }, tiles: obj5, tile: obj6, moreButton: { flex: 2 }, addAction: obj7, icon: size };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_16 };
obj4 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "row", gap: nativeDefault.space.PX_8 };
obj6 = { flex: 1, minHeight: nativeDefault.space.PX_48, padding: nativeDefault.space.PX_12, alignItems: "center", justifyContent: "center" };
obj7 = { paddingVertical: nativeDefault.space.PX_12 + 1, paddingLeft: nativeDefault.space.PX_24 };
size = { width: nativeDefault.space.PX_24, height: nativeDefault.space.PX_24 };
let closure_14 = createStyles(obj);
size = size_mod;
let result = size.fileFinishedImporting("modules/user_settings/connected_apps/native/ConnectedAppsScreen.tsx");

export default function ConnectedAppsScreen() {
  let apps;
  let items1;
  let items2;
  let obj5;
  let paths;
  let stackNavigation;
  const tmp = closure_14();
  const bottom = stackNavigation(1625)().bottom;
  let obj = apps(16843);
  const authorizedApps = obj.useAuthorizedApps();
  apps = authorizedApps.apps;
  const loading = authorizedApps.loading;
  const obj2 = apps(1497);
  stackNavigation = obj2.useStackNavigation();
  const items = [stackNavigation];
  const callback = react.useCallback(() => {
    const obj = stackNavigation(paths[32]);
    obj.openLazy(apps(paths[34])(paths[33], paths.paths), "AddConnection");
  }, []);
  const layoutEffect = react.useLayoutEffect(() => {
    let intl;
    const setOptions = stackNavigation.setOptions;
    const obj = { title: intl.string(intl6.t.lrVuZO) };
    intl = intl6.intl;
    setOptions(obj);
  }, items);
  const obj3 = {
    contentContainerStyle: items1,
    ListHeaderComponent: closure_12(closure_13, obj5),
    ListEmptyComponent: closure_11(apps(16843).AuthorizedAppsEmpty, { loading }),
    data: apps,
    renderItem(app) {
      const index = app.index;
      const obj = { app: app.item, start: 0 === index, end: index === apps.length - 1 };
      return unpackModuleId(UserSettingsAuthedApps.AuthorizedAppRow, obj);
    },
    keyExtractor(id) {
      return id.id;
    }
  };
  items1 = [tmp.container, ];
  const obj4 = { paddingBottom: bottom + stackNavigation(575).space.PX_24 };
  const FlashList = apps(7294).FlashList;
  items1[1] = obj4;
  obj5 = { children: items2 };
  items2 = [closure_11(ConnectionsSection, { onAdd: callback }), closure_11(apps(16843).AuthorizedAppsHeader, {})];
  return closure_11(FlashList, obj3);
};
