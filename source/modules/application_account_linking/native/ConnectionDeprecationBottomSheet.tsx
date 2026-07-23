// Module ID: 15623
// Function ID: 120479
// Name: ConnectionIcon
// Dependencies: [31, 27, 4167, 4812, 1345, 33, 4130, 689, 3842, 1557, 566, 4814, 5467, 5464, 5484, 15624, 4098, 15626, 1934, 5186, 5187, 4541, 15612, 4126, 1212, 2748, 8708, 4543, 10157, 3840, 1392, 4545, 5474, 5470, 2]
// Exports: default, useShouldShowConnectionDeprecationBottomSheet

// Module 15623 (ConnectionIcon)
import getIconSize from "getIconSize";
import { View } from "Button";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "useGetOrFetchApplications";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
function ConnectionIcon(arg0) {
  let platform;
  let theme;
  ({ platform, theme } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(3840) /* isThemeLight */;
  const isThemeDarkResult = obj.isThemeDark(theme);
  const icon = platform.icon;
  obj = { style: tmp.iconContainer };
  const source = require(1392) /* getAvatarURL */.makeSource(isThemeDarkResult ? icon.darkPNG : icon.lightPNG);
  obj = {};
  const obj2 = require(1392) /* getAvatarURL */;
  obj.size = require(4545) /* getIconSize */.IconSizes.CUSTOM;
  obj.source = source;
  obj.disableColor = true;
  obj.style = tmp.connectionIcon;
  obj.children = callback(importDefault(4545), obj);
  return callback(View, obj);
}
function ApplicationIcon(application) {
  application = application.application;
  let obj = { style: _createForOfIteratorHelperLoose().iconContainer };
  let tmp3 = null;
  if (null != application) {
    obj = { game: application, size: require(5474) /* GameIcon */.GameIconSizes.NORMAL };
    tmp3 = callback(importDefault(5474), obj);
    const tmp7 = importDefault(5474);
  }
  obj.children = tmp3;
  return callback(View, obj);
}
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
_createForOfIteratorHelperLoose = { iconContainer: { width: 56, height: 56, alignItems: "center", justifyContent: "center" } };
_createForOfIteratorHelperLoose = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.content = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.text = { textAlign: "center" };
_createForOfIteratorHelperLoose.connectionIcon = { height: 48, width: 48 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/application_account_linking/native/ConnectionDeprecationBottomSheet.tsx");

export default function ConnectionDeprecationBottomSheet(arg0) {
  let applicationName;
  let markAsDismissed;
  let require;
  ({ platformTypes: require, applicationName, markAsDismissed } = arg0);
  let replacedBy;
  let startAuthorization;
  let analyticsLocations;
  let callback;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(replacedBy[8]);
  const theme = obj.useThemeContext().theme;
  let obj1 = require(replacedBy[10]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => {
    const accounts = outer1_6.getAccounts();
    const found = accounts.find((type) => outer1_0.includes(type.type));
    let type;
    if (null != found) {
      type = found.type;
    }
    return type;
  });
  let value = null;
  if (null != stateFromStores) {
    let obj2 = markAsDismissed(replacedBy[11]);
    value = obj2.get(stateFromStores);
  }
  replacedBy = undefined;
  if (null != value) {
    const migrationData = value.migrationData;
    if (null != migrationData) {
      replacedBy = migrationData.replacedBy;
    }
  }
  let obj3 = require(replacedBy[10]);
  const items1 = [callback];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => callback.getApplication(replacedBy));
  startAuthorization = markAsDismissed(replacedBy[12])(stateFromStores1).startAuthorization;
  analyticsLocations = markAsDismissed(replacedBy[13])(markAsDismissed(replacedBy[14]).ACTION_SHEET).analyticsLocations;
  const items2 = [replacedBy];
  callback = startAuthorization.useCallback(() => {
    let obj = outer1_0(replacedBy[15]);
    obj = {
      applicationId: replacedBy,
      onSuccess() {
        markAsDismissed(replacedBy[16]).openLazy(outer2_0(replacedBy[18])(replacedBy[17], replacedBy.paths), "IncentivizedAccountLinkConfirmationBottomSheet");
      }
    };
    const result = obj.claimIncentivizedAccountLinkingReward(obj);
  }, items2);
  const items3 = [analyticsLocations, startAuthorization, markAsDismissed, callback];
  if (null != value) {
    if (null != stateFromStores1) {
      if (null == applicationName) {
        applicationName = stateFromStores1.name;
      }
      obj = { title: null };
      obj = { startExpanded: true, contentStyles: tmp.content };
      obj.header = callback(require(replacedBy[19]).BottomSheetTitleHeader, obj);
      obj.onDismiss = function onDismiss() {
        return markAsDismissed(outer1_7.DISMISS);
      };
      obj1 = { spacing: 24 };
      obj2 = { paddingBottom: markAsDismissed(replacedBy[9])().bottom };
      obj1.style = obj2;
      obj3 = { justify: "center", align: "center", direction: "horizontal" };
      const obj4 = { theme, platform: value };
      const items4 = [callback(ConnectionIcon, obj4), , ];
      const obj5 = { theme };
      items4[1] = callback(require(replacedBy[22]).UnionIcon, obj5);
      const obj6 = { application: stateFromStores1 };
      items4[2] = callback(ApplicationIcon, obj6);
      obj3.children = items4;
      const items5 = [callback2(require(replacedBy[21]).Stack, obj3), , ];
      const obj7 = { justify: "center" };
      const obj8 = { variant: "heading-xl/bold", style: tmp.text };
      const intl = require(replacedBy[24]).intl;
      obj8.children = intl.string(markAsDismissed(replacedBy[25]).vycLU2);
      const items6 = [callback(require(replacedBy[23]).Text, obj8), ];
      const obj9 = { variant: "text-md/medium", style: tmp.text };
      const intl2 = require(replacedBy[24]).intl;
      const obj10 = {
        connectionName: value.name,
        applicationName,
        orbCount: 200,
        orbsIconHook() {
              const obj = { size: "xs", color: markAsDismissed(replacedBy[7]).colors.TEXT_STRONG };
              return outer1_8(outer1_0(replacedBy[26]).OrbsIcon, obj);
            }
      };
      obj9.children = intl2.format(markAsDismissed(replacedBy[25]).DfSSdL, obj10);
      items6[1] = callback(require(replacedBy[23]).Text, obj9);
      obj7.children = items6;
      items5[1] = callback2(require(replacedBy[21]).Stack, obj7);
      const obj11 = {};
      const obj12 = {};
      const intl3 = require(replacedBy[24]).intl;
      obj12.text = intl3.string(markAsDismissed(replacedBy[25]).ZeOhh9);
      const obj13 = { size: "sm", color: markAsDismissed(replacedBy[7]).colors.WHITE };
      obj12.icon = callback(require(replacedBy[28]).WindowLaunchIcon, obj13);
      obj12.iconPosition = "end";
      obj12.size = "lg";
      obj12.onPress = tmp10;
      const items7 = [callback(require(replacedBy[27]).Button, obj12), ];
      const obj14 = { text: null, variant: "secondary", size: "lg" };
      const intl4 = require(replacedBy[24]).intl;
      obj14.text = intl4.string(require(replacedBy[24]).t.TulDPl);
      obj14.onPress = function onPress() {
        markAsDismissed(replacedBy[16]).hideActionSheet();
        if (null != markAsDismissed) {
          markAsDismissed(outer1_7.DISMISS);
        }
      };
      items7[1] = callback(require(replacedBy[27]).Button, obj14);
      obj11.children = items7;
      items5[2] = callback2(require(replacedBy[21]).Stack, obj11);
      obj1.children = items5;
      obj.children = callback2(require(replacedBy[21]).Stack, obj1);
      return callback(require(replacedBy[20]).BottomSheet, obj);
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
  const items = [closure_6];
  const stateFromStoresObject = deprecatedPlatformTypes(566).useStateFromStoresObject(items, () => {
    const obj = { fetchingConnections: outer1_6.isFetching() };
    const accounts = outer1_6.getAccounts();
    const mapped = accounts.map((type) => outer2_1(outer2_2[11]).get(type.type));
    obj.matchingPlatform = mapped.find((migrationData) => {
      migrationData = migrationData.migrationData;
      let migrationExperimentEnabled;
      if (null != migrationData) {
        migrationExperimentEnabled = migrationData.getMigrationExperimentEnabled("ConnectionDeprecationBottomSheet");
      }
      if (migrationExperimentEnabled) {
        migrationExperimentEnabled = outer1_0.includes(migrationData.type);
      }
      return migrationExperimentEnabled;
    });
    return obj;
  });
  ({ fetchingConnections, matchingPlatform } = stateFromStoresObject);
  let obj = deprecatedPlatformTypes(566);
  let replacedBy;
  if (null != matchingPlatform) {
    let migrationData = matchingPlatform.migrationData;
    if (null != migrationData) {
      replacedBy = migrationData.replacedBy;
    }
  }
  const getOrFetchApplication = deprecatedPlatformTypes(5470).useGetOrFetchApplication(replacedBy);
  const tmp4 = importDefault(5467)(getOrFetchApplication);
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
