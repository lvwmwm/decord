// Module ID: 13711
// Function ID: 103763
// Name: UserSettingsAuthedApps
// Dependencies: []
// Exports: DisclosureIcon, default

// Module 13711 (UserSettingsAuthedApps)
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, ActivityIndicator: closure_5, FlatList: closure_6 } = arg1(dependencyMap[1]));
let closure_7 = importDefault(dependencyMap[2]);
const FetchState = arg1(dependencyMap[2]).FetchState;
const tmp2 = arg1(dependencyMap[1]);
({ AnalyticsPages: closure_9, UserSettingsSections: closure_10 } = arg1(dependencyMap[3]));
const tmp3 = arg1(dependencyMap[3]);
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[4]));
const PX_24 = importDefault(dependencyMap[5]).space.PX_24;
let obj = arg1(dependencyMap[6]);
obj = { spinner: { padding: 16 }, emptyText: { marginTop: 24 }, emptyContainer: { padding: 16 } };
obj = { paddingHorizontal: 16, paddingTop: importDefault(dependencyMap[5]).space.PX_24 };
obj.container = obj;
obj.headerDescription = { marginTop: 12 };
obj.appListHeader = { marginTop: 24 };
let closure_15 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[4]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_settings/authorized_apps/native/UserSettingsAuthedApps.tsx");

export default function UserSettingsAuthedApps() {
  function renderHeader() {
    let obj = {};
    obj = {};
    obj = { "Bool(false)": "", "Bool(false)": "" };
    const intl = tmp(navigation[17]).intl;
    obj.children = intl.string(tmp(navigation[17]).t.HU3RFw);
    const items = [callback2(tmp(navigation[16]).Text, obj), ];
    const obj1 = { style: tmp.headerDescription, variant: "heading-sm/medium" };
    const intl2 = tmp(navigation[17]).intl;
    obj1.children = intl2.string(tmp(navigation[17]).t.Nu5Yi0);
    items[1] = callback2(tmp(navigation[16]).Text, obj1);
    obj.children = items;
    const items1 = [callback3(closure_4, obj), ];
    const obj2 = { style: tmp.appListHeader };
    const obj3 = {};
    const intl3 = tmp(navigation[17]).intl;
    obj3.title = intl3.string(tmp(navigation[17]).t.PHjkRE);
    obj2.children = callback2(tmp(navigation[18]).TableRowGroupTitle, obj3);
    items1[1] = callback2(closure_4, obj2);
    obj.children = items1;
    return callback3(closure_13, obj);
  }
  const tmp = callback3();
  const arg1 = tmp;
  let obj = arg1(dependencyMap[12]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ fetchState: authStore.getFetchState(), appAuthTokens: authStore.getNewestTokensForNonChildrenApplications() }));
  const appAuthTokens = stateFromStoresObject.appAuthTokens;
  const importDefault = appAuthTokens;
  let obj1 = arg1(dependencyMap[13]);
  const navigation = obj1.useNavigation();
  const dependencyMap = navigation;
  let obj2 = arg1(dependencyMap[14]);
  const focusEffect = obj2.useFocusEffect(React.useCallback(() => appAuthTokens(navigation[15]).fetch(), []));
  const items1 = [navigation];
  const React = React.useCallback((item) => {
    item = item.item;
    const index = item.index;
    let obj = appAuthTokens(navigation[19]);
    obj = { id: item.application.id, icon: item.application.icon };
    const applicationIconSource = obj.getApplicationIconSource(obj);
    obj = {
      icon: callback2(appAuthTokens(navigation[21]), { iconSource: applicationIconSource, iconBorderRadius: 6 }),
      label: item.application.name,
      onPress() {
        let obj = callback(arr[22]);
        obj.setSection(constants2.AUTHORIZED_APP);
        let obj1 = item(arr[23]);
        obj = { destinationPane: constants2.AUTHORIZED_APP, source: obj, applicationId: item.application.id };
        obj = { page: constants.USER_SETTINGS };
        const result = obj1.trackUserSettingsPaneViewed(obj);
        obj1 = { oauth2Token: item };
        const arr = arr.push(constants2.AUTHORIZED_APP, obj1);
      },
      arrow: true,
      start: 0 === index,
      end: index === item.numItems - 1
    };
    return callback2(item(navigation[20]).TableRow, obj, item.id);
  }, items1);
  if (null != appAuthTokens) {
    if (stateFromStoresObject.fetchState === FetchState.FETCHED) {
      if (0 === appAuthTokens.length) {
        obj = { style: tmp.emptyContainer };
        const items2 = [renderHeader(), ];
        obj = { <string:1537349871>: "interactive-text-default", <string:4161884830>: "5.9.4", <string:2338427745>: 24, style: tmp.emptyText };
        const intl = arg1(dependencyMap[17]).intl;
        obj.children = intl.string(arg1(dependencyMap[17]).t.E+SM6T);
        items2[1] = callback(arg1(dependencyMap[16]).Text, obj);
        obj.children = items2;
        let tmp8 = callback2(closure_4, obj);
      } else {
        obj1 = {};
        const items3 = [tmp.container, ];
        obj2 = { paddingBottom: importDefault(dependencyMap[11])().bottom + PX_24 };
        items3[1] = obj2;
        obj1.contentContainerStyle = items3;
        obj1.ListHeaderComponent = renderHeader();
        obj1.renderItem = function renderItem(item) {
          return callback({ item: item.item, index: item.index, numItems: appAuthTokens.length });
        };
        obj1.data = appAuthTokens.sort((id, id2) => Number(id2.id) - Number(id.id));
        tmp8 = callback(closure_6, obj1);
      }
    }
    return tmp8;
  }
  tmp8 = callback(closure_5, { style: tmp.spinner });
};
export const DisclosureIcon = function DisclosureIcon(disclosure) {
  disclosure = disclosure.disclosure;
  const arg1 = disclosure;
  const style = disclosure.style;
  const importDefault = style;
  const items = [disclosure, style];
  return React.useMemo(() => {
    if (disclosure(closure_2[7]).ApplicationDisclosureType.IP_LOCATION === disclosure) {
      let obj = { style, size: "xs" };
      return callback(disclosure(closure_2[8]).GlobeEarthIcon, obj);
    } else if (disclosure(closure_2[7]).ApplicationDisclosureType.DISPLAYS_ADVERTISEMENTS === tmp) {
      obj = { style, size: "xs" };
      return callback(disclosure(closure_2[9]).EmbedIcon, obj);
    } else {
      obj = { style, size: "xs" };
      return callback(disclosure(closure_2[10]).CircleInformationIcon, obj);
    }
    const tmp = disclosure;
  }, items);
};
