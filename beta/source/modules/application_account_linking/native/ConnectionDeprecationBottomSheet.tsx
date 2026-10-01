// Module ID: 16764
// Function ID: 16765
// Name: ConnectionDeprecationBottomSheet
// Dependencies: [19, 17, 5063, 5593, 2042, 21, 4836, 576, 4540, 1613, 504, 5595, 6586, 6583, 6603, 16765, 4800, 16767, 1981, 6570, 6571, 5279, 16752, 4832, 1115, 3135, 8298, 5281, 12512, 4538, 1397, 5283, 6593, 6589, 2]
// Exports: default, useShouldShowConnectionDeprecationBottomSheet

// Module 16764 (ConnectionDeprecationBottomSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import AvatarUtils from "AvatarUtils" /* 1397 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2042 */;
import themes from "themes" /* 4538 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import Icon from "Icon" /* 5283 */;
import useStartAuthorizeDefault from "useStartAuthorize" /* 6586 */;
import GameIcon from "GameIcon" /* 6593 */;
import AccountLinkManager from "AccountLinkManager" /* 16765 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5063 */;
import ConnectedAccountsStore from "ConnectedAccountsStore" /* 5593 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const IconDefault = Icon;
const GameIconDefault = GameIcon;
let BottomSheet;

let c9;
let metroImportAll;
let obj2;
function ConnectionIcon(arg0) {
  let obj4;
  let platform;
  let theme;
  let tmp6;
  ({ platform, theme } = arg0);
  const tmp = closure_10();
  const obj = themes;
  const icon = platform.icon;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const obj3 = { style: tmp.iconContainer, children: metroImportAll(tmp6, obj4) };
  const obj2 = AvatarUtils;
  const source = obj2.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj4 = { size: Icon.IconSizes.CUSTOM, source, disableColor: true, style: tmp.connectionIcon };
  tmp6 = IconDefault;
  return metroImportAll(View, obj3);
}
function ApplicationIcon(application) {
  let tmpResult;
  application = application.application;
  const obj = { style: closure_10().iconContainer, children: tmpResult };
  tmpResult = null;
  const tmp2 = View;
  if (null != application) {
    const obj2 = { game: application, size: GameIcon.GameIconSizes.NORMAL };
    const tmp6 = GameIconDefault;
    tmpResult = tmp(tmp6, obj2);
  }
  return metroImportAll(tmp2, obj);
}
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let obj = { iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" }, content: obj2, text: { textAlign: "center" }, connectionIcon: { height: 48, width: 48 } };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx");

export default function ConnectionDeprecationBottomSheet(arg0) {
  let Stack;
  let WindowLaunchIcon;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items4;
  let items5;
  let items6;
  let items7;
  let markAsDismissed;
  let obj13;
  let obj16;
  let obj4;
  let obj5;
  ({ platformTypes: require, markAsDismissed } = arg0);
  let replacedBy;
  let startAuthorization;
  let analyticsLocations;
  let onSuccess;
  const tmp = closure_10();
  const tmp2 = require;
  let obj = require("native");
  const theme = obj.useThemeContext().theme;
  const bottom = markAsDismissed(replacedBy[9])().bottom;
  let obj2 = require("get initialized");
  const items = [ConnectedAccountsStore];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    const accounts = ConnectedAccountsStore.getAccounts();
    const found = accounts.find((type) => closure_1_0.includes(type.type));
    let type;
    if (found != null) {
      type = found.type;
    }
    return type;
  });
  let value = null;
  if (null != stateFromStores) {
    const tmp4Result = markAsDismissed(replacedBy[11]);
    value = tmp4Result.get(stateFromStores);
  }
  replacedBy = undefined;
  if (value != null) {
    const migrationData = value.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const items1 = [onSuccess];
  const tmp2Result = tmp2(replacedBy[10]);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => ApplicationStore.getApplication(replacedBy));
  startAuthorization = tmp4(tmp3[12])(stateFromStores1).startAuthorization;
  const tmp4Result2 = markAsDismissed(replacedBy[13]);
  analyticsLocations = tmp4Result2(tmp4(tmp3[14]).ACTION_SHEET).analyticsLocations;
  const items2 = [replacedBy];
  onSuccess = startAuthorization.useCallback(() => {
    let paths;
    let obj = AccountLinkManager;
    const obj2 = {
      applicationId: replacedBy,
      onSuccess() {
        const obj = markAsDismissed(paths[16]);
        obj.openLazy(closure_1_0(paths[18])(paths[17], paths.paths), "IncentivizedAccountLinkConfirmationBottomSheet");
      }
    };
    const result = obj.claimIncentivizedAccountLinkingReward(obj2);
  }, items2);
  const items3 = [analyticsLocations, startAuthorization, markAsDismissed, onSuccess];
  if (null != value) {
    if (null != stateFromStores1) {
      const obj3 = {
        startExpanded: true,
        contentStyles: tmp.content,
        header: closure_8(tmp2(replacedBy[19]).BottomSheetTitleHeader, { title: null }),
        onDismiss() {
              return markAsDismissed(ContentDismissActionType.DISMISS);
            },
        children: closure_9(Stack, obj4)
      };
      closure_8(tmp2(replacedBy[19]).BottomSheetTitleHeader, { title: null });
      BottomSheet = tmp2(tmp3[20]).BottomSheet;
      obj4 = { spacing: 24, style: obj5, children: items5 };
      obj5 = { paddingBottom: bottom };
      Stack = tmp2(tmp3[21]).Stack;
      const obj6 = { justify: "center", align: "center", direction: "horizontal", children: items4 };
      const obj7 = { theme, platform: value };
      const Stack2 = tmp2(tmp3[21]).Stack;
      items4 = [closure_8(ConnectionIcon, obj7), , ];
      const obj8 = { theme };
      items4[1] = closure_8(tmp2(replacedBy[22]).UnionIcon, obj8);
      const obj9 = { application: stateFromStores1 };
      items4[2] = closure_8(ApplicationIcon, obj9);
      items5 = [closure_9(Stack2, obj6), , ];
      const obj10 = { justify: "center", children: items6 };
      const Stack3 = tmp2(tmp3[21]).Stack;
      const obj11 = { variant: "heading-xl/bold", style: tmp.text, children: intl.string(markAsDismissed(replacedBy[25]).vycLU2) };
      const Text = tmp2(tmp3[23]).Text;
      intl = tmp2(tmp3[24]).intl;
      items6 = [closure_8(Text, obj11), ];
      const obj12 = { variant: "text-md/medium", style: tmp.text, children: intl2.format(markAsDismissed(replacedBy[25]).qV9zT6, obj13) };
      const Text2 = tmp2(tmp3[23]).Text;
      intl2 = tmp2(tmp3[24]).intl;
      obj13 = {
        connectionName: value.name,
        orbCount: 200,
        orbsIconHook() {
              const obj = { size: "xs", color: markAsDismissed(replacedBy[7]).colors.TEXT_STRONG };
              const OrbsIcon = require("OrbsIcon").OrbsIcon;
              return closure_1_8(OrbsIcon, obj);
            }
      };
      items6[1] = closure_8(Text2, obj12);
      items5[1] = closure_9(Stack3, obj10);
      const obj14 = { children: items7 };
      const Stack4 = tmp2(tmp3[21]).Stack;
      const obj15 = { text: intl3.string(markAsDismissed(replacedBy[25]).ZeOhh9), icon: closure_8(WindowLaunchIcon, obj16), iconPosition: "end", size: "lg", onPress: tmp11 };
      const Button = tmp2(tmp3[27]).Button;
      intl3 = tmp2(tmp3[24]).intl;
      obj16 = { size: "sm", color: markAsDismissed(replacedBy[7]).colors.WHITE };
      WindowLaunchIcon = tmp2(tmp3[28]).WindowLaunchIcon;
      items7 = [closure_8(Button, obj15), ];
      const obj17 = {
        text: intl4.string(tmp2(replacedBy[24]).t.TulDPl),
        variant: "secondary",
        size: "lg",
        onPress() {
              const obj = ActionSheetActionCreatorsDefault;
              obj.hideActionSheet();
              if (markAsDismissed != null) {
                tmp2(ContentDismissActionType.DISMISS);
              }
            }
      };
      const Button2 = tmp2(tmp3[27]).Button;
      intl4 = tmp2(tmp3[24]).intl;
      items7[1] = closure_8(Button2, obj17);
      items5[2] = closure_9(Stack4, obj14);
      return closure_8(BottomSheet, obj3);
    }
  }
  return false;
};
export const useShouldShowConnectionDeprecationBottomSheet = function useShouldShowConnectionDeprecationBottomSheet(deprecatedPlatformTypes) {
  let canStartAuthorization;
  let fetchingConnections;
  let hasAlreadyLinked;
  let matchingPlatform;
  deprecatedPlatformTypes = deprecatedPlatformTypes.deprecatedPlatformTypes;
  let obj = deprecatedPlatformTypes(504);
  const items = [ConnectedAccountsStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let mapped;
    let obj = {
      fetchingConnections: ConnectedAccountsStore.isFetching(),
      matchingPlatform: mapped.find((migrationData) => {
        migrationData = migrationData.migrationData;
        let migrationExperimentEnabled;
        if (migrationData != null) {
          migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionDeprecationBottomSheet");
        }
        if (migrationExperimentEnabled) {
          migrationExperimentEnabled = deprecatedPlatformTypes.includes(migrationData.type);
        }
        return migrationExperimentEnabled;
      })
    };
    const accounts = ConnectedAccountsStore.getAccounts();
    mapped = accounts.map((type) => {
      const obj = closure_1_1(closure_1_2[11]);
      return obj.get(type.type);
    });
    return obj;
  });
  ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
  let replacedBy;
  const useGetOrFetchApplication = deprecatedPlatformTypes(6589).useGetOrFetchApplication;
  deprecatedPlatformTypes(6589);
  if (matchingPlatform != null) {
    let migrationData = matchingPlatform.migrationData;
    if (migrationData != null) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const getOrFetchApplication = useGetOrFetchApplication(replacedBy);
  const tmp6 = useStartAuthorizeDefault(getOrFetchApplication);
  ({ hasAlreadyLinked, canStartAuthorization } = tmp6);
  if (!fetchingConnections) {
    fetchingConnections = !tmp6.fetched;
  }
  if (!fetchingConnections) {
    fetchingConnections = !canStartAuthorization;
  }
  if (!fetchingConnections) {
    fetchingConnections = null == getOrFetchApplication;
  }
  return !fetchingConnections && !hasAlreadyLinked;
};
