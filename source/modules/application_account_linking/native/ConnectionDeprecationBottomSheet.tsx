// Module ID: 15498
// Function ID: 118263
// Name: ConnectionIcon
// Dependencies: []
// Exports: default, useShouldShowConnectionDeprecationBottomSheet

// Module 15498 (ConnectionIcon)
function ConnectionIcon(arg0) {
  let platform;
  let theme;
  ({ platform, theme } = arg0);
  const tmp = callback3();
  let obj = arg1(dependencyMap[29]);
  const isThemeDarkResult = obj.isThemeDark(theme);
  const icon = platform.icon;
  obj = { style: tmp.iconContainer };
  const source = arg1(dependencyMap[30]).makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj = {};
  const obj2 = arg1(dependencyMap[30]);
  obj.size = arg1(dependencyMap[31]).IconSizes.CUSTOM;
  obj.source = source;
  obj.disableColor = true;
  obj.style = tmp.connectionIcon;
  obj.children = callback(importDefault(dependencyMap[31]), obj);
  return callback(View, obj);
}
function ApplicationIcon(application) {
  application = application.application;
  let obj = { style: callback3().iconContainer };
  let tmp3 = null;
  if (null != application) {
    obj = { game: application, size: arg1(dependencyMap[32]).GameIconSizes.NORMAL };
    tmp3 = callback(importDefault(dependencyMap[32]), obj);
    const tmp7 = importDefault(dependencyMap[32]);
  }
  obj.children = tmp3;
  return callback(View, obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
const ContentDismissActionType = arg1(dependencyMap[4]).ContentDismissActionType;
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { iconContainer: {} };
obj = { paddingHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.content = obj;
obj.text = { textAlign: "center" };
obj.connectionIcon = { y: "row", isArray: "center" };
let closure_10 = obj.createStyles(obj);
const tmp2 = arg1(dependencyMap[5]);
const result = arg1(dependencyMap[34]).fileFinishedImporting("modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx");

export default function ConnectionDeprecationBottomSheet(arg0) {
  let applicationName;
  let markAsDismissed;
  ({ platformTypes: closure_0, applicationName, markAsDismissed } = arg0);
  const importDefault = markAsDismissed;
  let dependencyMap;
  let React;
  let View;
  let closure_5;
  const tmp = callback3();
  let obj = arg1(dependencyMap[8]);
  const theme = obj.useThemeContext().theme;
  let obj1 = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const accounts = accounts.getAccounts();
    const found = accounts.find((type) => closure_0.includes(type.type));
    let type;
    if (null != found) {
      type = found.type;
    }
    return type;
  });
  let value = null;
  if (null != stateFromStores) {
    let obj2 = importDefault(dependencyMap[11]);
    value = obj2.get(stateFromStores);
  }
  let replacedBy;
  if (null != value) {
    const migrationData = value.migrationData;
    if (null != migrationData) {
      replacedBy = migrationData.replacedBy;
    }
  }
  dependencyMap = replacedBy;
  let obj3 = arg1(dependencyMap[10]);
  const items1 = [closure_5];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => callback.getApplication(replacedBy));
  const startAuthorization = importDefault(dependencyMap[12])(stateFromStores1).startAuthorization;
  React = startAuthorization;
  const analyticsLocations = importDefault(dependencyMap[13])(importDefault(dependencyMap[14]).ACTION_SHEET).analyticsLocations;
  View = analyticsLocations;
  const items2 = [replacedBy];
  const callback = React.useCallback(() => {
    let obj = callback(replacedBy[15]);
    obj = {
      applicationId: replacedBy,
      onSuccess() {
        callback2(paths[16]).openLazy(callback(paths[18])(paths[17], paths.paths), "IncentivizedAccountLinkConfirmationBottomSheet");
      }
    };
    const result = obj.claimIncentivizedAccountLinkingReward(obj);
  }, items2);
  closure_5 = callback;
  const items3 = [analyticsLocations, startAuthorization, markAsDismissed, callback];
  if (null != value) {
    if (null != stateFromStores1) {
      if (null == applicationName) {
        applicationName = stateFromStores1.name;
      }
      obj = { title: null };
      obj = { startExpanded: true, contentStyles: tmp.content };
      obj.header = callback(arg1(dependencyMap[19]).BottomSheetTitleHeader, obj);
      obj.onDismiss = function onDismiss() {
        return markAsDismissed(constants.DISMISS);
      };
      obj1 = { spacing: 24 };
      obj2 = { paddingBottom: importDefault(dependencyMap[9])().bottom };
      obj1.style = obj2;
      obj3 = { "Null": 6917534905505154000, "Null": 605546228749688850000000000000000000000000000000000000000000000000, "Null": 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015154482640141524 };
      const obj4 = { theme, platform: value };
      const items4 = [callback(ConnectionIcon, obj4), , ];
      const obj5 = { theme };
      items4[1] = callback(arg1(dependencyMap[22]).UnionIcon, obj5);
      const obj6 = { application: stateFromStores1 };
      items4[2] = callback(ApplicationIcon, obj6);
      obj3.children = items4;
      const items5 = [callback2(arg1(dependencyMap[21]).Stack, obj3), , ];
      const obj7 = { justify: "center" };
      const obj8 = { variant: "heading-xl/bold", style: tmp.text };
      const intl = arg1(dependencyMap[24]).intl;
      obj8.children = intl.string(importDefault(dependencyMap[25]).vycLU2);
      const items6 = [callback(arg1(dependencyMap[23]).Text, obj8), ];
      const obj9 = { variant: "text-md/medium", style: tmp.text };
      const intl2 = arg1(dependencyMap[24]).intl;
      const obj10 = {
        connectionName: value.name,
        applicationName,
        orbCount: 200,
        orbsIconHook() {
              const obj = { size: "xs", color: markAsDismissed(replacedBy[7]).colors.TEXT_STRONG };
              return callback2(callback(replacedBy[26]).OrbsIcon, obj);
            }
      };
      obj9.children = intl2.format(importDefault(dependencyMap[25]).DfSSdL, obj10);
      items6[1] = callback(arg1(dependencyMap[23]).Text, obj9);
      obj7.children = items6;
      items5[1] = callback2(arg1(dependencyMap[21]).Stack, obj7);
      const obj11 = {};
      const obj12 = {};
      const intl3 = arg1(dependencyMap[24]).intl;
      obj12.text = intl3.string(importDefault(dependencyMap[25]).ZeOhh9);
      const obj13 = { size: "sm", color: importDefault(dependencyMap[7]).colors.WHITE };
      obj12.icon = callback(arg1(dependencyMap[28]).WindowLaunchIcon, obj13);
      obj12.iconPosition = "end";
      obj12.size = "lg";
      obj12.onPress = tmp10;
      const items7 = [callback(arg1(dependencyMap[27]).Button, obj12), ];
      const obj14 = { _monthsRegex: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000012882297944488606, overflow: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000076436369851344, messageHasObscurableMedia: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002134690713675183 };
      const intl4 = arg1(dependencyMap[24]).intl;
      obj14.text = intl4.string(arg1(dependencyMap[24]).t.TulDPl);
      obj14.onPress = function onPress() {
        markAsDismissed(replacedBy[16]).hideActionSheet();
        if (null != markAsDismissed) {
          markAsDismissed(constants.DISMISS);
        }
      };
      items7[1] = callback(arg1(dependencyMap[27]).Button, obj14);
      obj11.children = items7;
      items5[2] = callback2(arg1(dependencyMap[21]).Stack, obj11);
      obj1.children = items5;
      obj.children = callback2(arg1(dependencyMap[21]).Stack, obj1);
      return callback(arg1(dependencyMap[20]).BottomSheet, obj);
    }
  }
  return false;
};
export const useShouldShowConnectionDeprecationBottomSheet = function useShouldShowConnectionDeprecationBottomSheet(deprecatedPlatformTypes) {
  let canStartAuthorization;
  let fetchingConnections;
  let hasAlreadyLinked;
  let matchingPlatform;
  const arg1 = deprecatedPlatformTypes.deprecatedPlatformTypes;
  const items = [closure_6];
  const stateFromStoresObject = arg1(dependencyMap[10]).useStateFromStoresObject(items, () => {
    const obj = { fetchingConnections: closure_6.isFetching() };
    const accounts = closure_6.getAccounts();
    const mapped = accounts.map((type) => callback(closure_2[11]).get(type.type));
    obj.matchingPlatform = mapped.find((migrationData) => {
      migrationData = migrationData.migrationData;
      let migrationExperimentEnabled;
      if (null != migrationData) {
        migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionDeprecationBottomSheet");
      }
      if (migrationExperimentEnabled) {
        migrationExperimentEnabled = closure_0.includes(migrationData.type);
      }
      return migrationExperimentEnabled;
    });
    return obj;
  });
  ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
  const obj = arg1(dependencyMap[10]);
  let replacedBy;
  if (null != matchingPlatform) {
    const migrationData = matchingPlatform.migrationData;
    if (null != migrationData) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const getOrFetchApplication = arg1(dependencyMap[33]).useGetOrFetchApplication(replacedBy);
  const tmp4 = importDefault(dependencyMap[12])(getOrFetchApplication);
  ({ hasAlreadyLinked, canStartAuthorization } = tmp4);
  if (!fetchingConnections) {
    fetchingConnections = !tmp4.fetched;
  }
  if (!fetchingConnections) {
    fetchingConnections = !canStartAuthorization;
  }
  if (!fetchingConnections) {
    fetchingConnections = null == getOrFetchApplication;
  }
  return !fetchingConnections && !hasAlreadyLinked;
};
