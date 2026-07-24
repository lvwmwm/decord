// Module ID: 11278
// Function ID: 87780
// Name: PlaceholderCommandRow
// Dependencies: [5, 31, 27, 8007, 1455, 653, 4566, 33, 4130, 11279, 689, 11204, 5165, 10911, 11254, 6753, 10860, 1557, 8233, 1881, 11286, 8006, 6755, 11201, 477, 11288, 4126, 1212, 11290, 11251, 11292, 9050, 1273, 11299, 11301, 4098, 4324, 10861, 2]
// Exports: default

// Module 11278 (PlaceholderCommandRow)
import ME from "ME";
import module_9050 from "module_9050";
import { View } from "getSystemLocale";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { AnalyticEvents } from "ME";
import { DISCOVERY_COMMANDS_QUERY_LIMIT as closure_12 } from "TRUE_OPTION_NAME";
import jsxProd from "FrecencyCommandsSection";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_13;
let closure_14;
let closure_15;
let closure_7;
let closure_8;
const require = arg1;
function PlaceholderCommandRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = _createForOfIteratorHelperLoose();
  let obj = require(11204) /* usePlaceholderWidth */;
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = require(11204) /* usePlaceholderWidth */;
  const placeholderWidth1 = obj1.usePlaceholderWidth(30, 90);
  obj = {};
  obj = {};
  const items = [tmp.loadingTextPlaceholder, ];
  obj1 = { width: "" + placeholderWidth + "%" };
  items[1] = obj1;
  obj.style = items;
  obj.label = callback3(View, obj);
  const obj2 = {};
  const items1 = [tmp.loadingTextPlaceholderSmall, { width: "" + placeholderWidth1 + "%" }];
  obj2.style = items1;
  obj.subLabel = callback3(View, obj2);
  obj.subLabelLineClamp = 1;
  obj.start = flag;
  obj.end = flag2;
  return callback3(require(5165) /* TableRowInner */.TableRow, obj);
}
class CommandRow {
  constructor(arg0) {
    command = global.command;
    ({ onPressCommand, context } = global);
    ({ section, location, sectionName } = global);
    ({ isFirstRow, isLastRow, onExecuteCommand, installOnDemand, icon } = global);
    obj = require("useAppLauncherChatInputRefDummy");
    entrypoint = obj.useAppLauncherContext().entrypoint;
    tmp = useUserIndexState(true, true);
    tmp2 = useContextIndexState(context, true, true);
    tmp3 = jsx;
    obj = {
      start: isFirstRow,
      end: isLastRow,
      label: command.displayName,
      labelLineClamp: 1,
      subLabel: command.displayDescription,
      subLabelLineClamp: 1,
      icon,
      onPress() {
            return callback(command, closure_3, ME);
          }
    };
    tmp4 = jsx;
    obj1 = {
      command,
      context,
      beforeExecuteCommand() {
            let obj = command(outer1_3[15]);
            obj = { command, location: ME, triggerSection: command(outer1_3[15]).getCommandTriggerSection(closure_3), sectionName };
            return obj.trackCommandSelected(obj);
          },
      onExecuteCommand
    };
    tmp6 = undefined;
    tmp5 = require("CommandRowIcon");
    if (installOnDemand) {
      tmp6 = (() => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = outer1_4(tmp);
        return function() {
          return callback(...arguments);
        };
      })();
    }
    obj1.tryExecuteCommand = tmp6;
    obj1.sectionName = sectionName;
    obj.trailing = tmp4(tmp5, obj1);
    return tmp3(require("TableRowInner").TableRow, obj);
  }
}
({ useContextIndexState: closure_7, useUserIndexState: closure_8 } = _isNativeReflectConstruct);
const DEFAULT_CONTENT_PADDING = APP_LAUNCHER_BUILT_IN_SECTION_ICON.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = APP_LAUNCHER_BUILT_IN_SECTION_ICON.useAppLauncherNavigation;
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { height: require("xl").EXPANDED_HEADER_HEIGHT - require("xl").SHEET_HANDLE_CONTAINER_HEIGHT };
_createForOfIteratorHelperLoose.headerSpacer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING };
_createForOfIteratorHelperLoose.commandsHeaderContainer = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 8 };
_createForOfIteratorHelperLoose.commandsHeaderTextContainer = { alignItems: "center", flexDirection: "row", gap: 8 };
_createForOfIteratorHelperLoose.viewContainerStyle = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
let obj2 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.CARD_BACKGROUND_DEFAULT, paddingHorizontal: 12, paddingVertical: 16 };
_createForOfIteratorHelperLoose.mainContainerStyle = obj2;
let obj1 = { borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.monetizationDisclosureTextStyle = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
let obj4 = { flexDirection: "row", alignItems: "center", marginBottom: require("_createForOfIteratorHelperLoose").space.PX_24, gap: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.monetizationDisclosureContainerStyle = obj4;
_createForOfIteratorHelperLoose.monetizationDisclosureStyle = { flexDirection: "row", alignItems: "center" };
let obj5 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, marginBottom: 4, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
_createForOfIteratorHelperLoose.loadingTextPlaceholder = obj5;
let obj3 = { marginLeft: require("_createForOfIteratorHelperLoose").space.PX_4 };
_createForOfIteratorHelperLoose.loadingTextPlaceholderSmall = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
_createForOfIteratorHelperLoose.noCommandsTextContainer = { alignItems: "center" };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj7 = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", COMMAND: 1, [1]: "COMMAND" };
const array = new Array(6);
let closure_18 = array.fill({ type: obj7.PLACEHOLDER });
let obj6 = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg, alignSelf: "flex-start" };
let obj8 = { type: obj7.PLACEHOLDER };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx");

export default function AppDetailContent(context) {
  let closure_13;
  let commands;
  let installOnDemand;
  let lockableScrollableContentOffsetY;
  let onActivityItemSelected;
  let onPressBack;
  context = context.context;
  const application = context.application;
  ({ lockableScrollableContentOffsetY, installOnDemand } = context);
  const sectionName = context.sectionName;
  const entrypoint = context.entrypoint;
  const onCommandExecuted = context.onCommandExecuted;
  const onAauth2Cancel = context.onAauth2Cancel;
  let c15;
  let callback;
  let callback1;
  let found;
  let c19;
  ({ onPressBack, onActivityItemSelected } = context);
  const tmp = callback();
  let closure_7 = tmp;
  let obj = context(sectionName[13]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  let obj1 = installOnDemand(sectionName[18]);
  obj = { context };
  obj = {};
  let items = [context(sectionName[19]).ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  obj.filters = obj;
  obj1 = { placeholderCount: 0, limit: loading, includeFrecency: true, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj1.useDiscovery(obj);
  const filterSection = discovery.filterSection;
  const sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  const tmp4 = application(sectionName[20])({ sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection });
  ({ setSortOrder: closure_13, commands } = tmp4);
  let canSort = tmp4.canSort;
  let result = chatInputRef(true, true).result;
  let tmp5;
  if (null != result) {
    tmp5 = result.sections[application.id];
  }
  let tmp7 = !loading;
  if (tmp7) {
    tmp7 = 0 === commands.length;
  }
  let tmp8 = tmp7;
  if (tmp7) {
    tmp8 = tmp6;
  }
  if (tmp8) {
    let obj6 = context(sectionName[21]);
    tmp8 = !obj6.isEmbeddedApp(application);
  }
  let items1 = [loading, commands, context.type];
  let items2 = [application.id, filterSection];
  const memo = onCommandExecuted.useMemo(() => {
    if ("channel" !== context.type) {
      let items = [];
    } else if (loading) {
      items = found;
    } else {
      items = commands.map((command) => ({ type: callback1.COMMAND, command }));
    }
    return items;
  }, items1);
  const effect = onCommandExecuted.useEffect(() => {
    filterSection(application.id);
  }, items2);
  const tmp13 = filterSection();
  c15 = tmp13;
  const items3 = [context, entrypoint, installOnDemand, tmp13, onCommandExecuted, sectionDescriptors, sectionName];
  callback = onCommandExecuted.useCallback((command, section) => {
    let APP_LAUNCHER_APPLICATION_VIEW = arg2;
    if (arg2 === undefined) {
      APP_LAUNCHER_APPLICATION_VIEW = context(sectionName[22]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
    }
    let obj = context(sectionName[23]);
    obj = { location: APP_LAUNCHER_APPLICATION_VIEW, context, command, section, sectionDescriptors, query: "", navigation: c15, installOnDemand, sectionName, entrypoint, onCommandExecuted };
    const result = obj.handleApplicationCommandSelected(obj);
  }, items3);
  const items4 = [chatInputRef, keyboardCloseReasonRef, onCommandExecuted];
  callback1 = onCommandExecuted.useCallback(() => {
    const current = chatInputRef.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = context(sectionName[13]).AppLauncherKeyboardCloseReason.COMMAND;
    if (null != onCommandExecuted) {
      onCommandExecuted();
    }
  }, items4);
  found = sectionDescriptors.find((id) => id.id === application.id);
  const items5 = [callback, commands.length, context, callback1, found, installOnDemand, sectionName];
  const sum = application(sectionName[17])().bottom + keyboardCloseReasonRef;
  c19 = sum;
  const items6 = [application, , , ];
  ({ monetizationDisclosureContainerStyle: arr8[1], monetizationDisclosureStyle: arr8[2], monetizationDisclosureTextStyle: arr8[3] } = tmp);
  const callback2 = onCommandExecuted.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const type = item.type;
    if (callback1.PLACEHOLDER === type) {
      let obj = { isFirstRow: 0 === index, isLastRow: index === found.length - 1 };
      return outer1_13(c19, obj);
    } else if (callback1.COMMAND === type) {
      obj = { command: item.command, onPressCommand: callback, isFirstRow: 0 === index, isLastRow: index === commands.length - 1, context, onExecuteCommand: callback1, section: found, location: context(sectionName[22]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, installOnDemand, sectionName };
      return outer1_13(outer1_20, obj);
    } else {
      return null;
    }
  }, items5);
  const memo1 = onCommandExecuted.useMemo(() => {
    let obj = context(sectionName[24]);
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      let obj1 = context(sectionName[21]);
      isAndroidResult = obj1.isApplicationMonetizedWithIAP(application);
    }
    let obj2 = context(sectionName[21]);
    const result = obj2.isApplicationAdSupported(application);
    let tmp6 = null;
    if (result) {
      obj = { style: tmp.monetizationDisclosureStyle };
      const items = [outer1_13(context(sectionName[25]).BillIcon, { size: "sm", color: "icon-muted" }), ];
      obj = { style: tmp.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1 };
      const intl = context(sectionName[27]).intl;
      obj.children = intl.string(context(sectionName[27]).t["5khEk8"]);
      items[1] = outer1_13(context(sectionName[26]).Text, obj);
      obj.children = items;
      tmp6 = commands(onAauth2Cancel, obj);
    }
    let tmp14 = null;
    if (isAndroidResult) {
      obj1 = { style: tmp.monetizationDisclosureStyle };
      const items1 = [outer1_13(context(sectionName[28]).ShopIcon, { size: "sm", color: "icon-muted" }), ];
      obj2 = { style: tmp.monetizationDisclosureTextStyle, variant: "text-xs/normal", color: "text-subtle", lineClamp: 1 };
      const intl2 = context(sectionName[27]).intl;
      obj2.children = intl2.string(context(sectionName[27]).t["8z5B2U"]);
      items1[1] = outer1_13(context(sectionName[26]).Text, obj2);
      obj1.children = items1;
      tmp14 = commands(onAauth2Cancel, obj1);
    }
    if (isAndroidResult) {
      const obj3 = { style: tmp.monetizationDisclosureContainerStyle };
      const items2 = [tmp14, tmp6];
      obj3.children = items2;
      let tmp22 = commands(onAauth2Cancel, obj3);
    } else {
      tmp22 = null;
    }
    return tmp22;
  }, items6);
  const items7 = [sum, tmp.list];
  const items8 = [sum];
  const memo2 = onCommandExecuted.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp.list);
    obj["paddingBottom"] = c19;
    return obj;
  }, items7);
  const memo3 = onCommandExecuted.useMemo(() => ({ bottom: c19 }), items8);
  let obj7 = context(sectionName[29]);
  const appLauncherFlashListProps = obj7.useAppLauncherFlashListProps();
  let obj3 = {};
  const obj4 = {};
  const obj5 = {};
  obj6 = { style: tmp.headerSpacer };
  const items9 = [callback3(onAauth2Cancel, obj6), , , , , , ];
  let obj12 = context(sectionName[21]);
  if (obj12.isEmbeddedApp(application)) {
    obj7 = { application, context, sectionName, onActivityItemSelected, entrypoint, hasCommands: commands.length > 0 };
    let tmp27Result = tmp27(tmp28(tmp29[30]), obj7);
  } else {
    const obj8 = { application };
    ({ viewContainerStyle: obj14.viewContainerStyle, mainContainerStyle: obj14.mainContainerStyle } = tmp);
    tmp27Result = tmp27(tmp28(tmp29[31]), obj8);
  }
  items9[1] = tmp27Result;
  const obj9 = {};
  let num4 = 24;
  if (null != memo1) {
    num4 = application(sectionName[10]).space.PX_16;
  }
  obj9.size = num4;
  items9[2] = callback3(context(sectionName[32]).Spacer, obj9);
  items9[3] = memo1;
  let tmp34 = commands.length > 1 && !loading;
  if (tmp34) {
    tmp34 = "channel" === context.type;
  }
  if (tmp34) {
    const obj10 = { context, allCommands: commands, onPressCommand: callback, section: found, onExecuteCommand: callback1, installOnDemand, sectionName };
    tmp34 = callback3(application(sectionName[33]), obj10);
  }
  items9[4] = tmp34;
  let tmp38 = null;
  if (tmp7) {
    let obj17 = context(sectionName[21]);
    tmp38 = null;
    if (!obj17.isEmbeddedApp(application)) {
      const obj11 = { style: tmp.noCommandsTextContainer };
      obj12 = { variant: "text-sm/normal", color: "text-default" };
      let intl = context(sectionName[27]).intl;
      obj12.children = intl.string(context(sectionName[27]).t["w8+YDM"]);
      obj11.children = callback3(context(sectionName[26]).Text, obj12);
      tmp38 = callback3(onAauth2Cancel, obj11);
    }
  }
  items9[5] = tmp38;
  let tmp50Result = null;
  if (!tmp7) {
    tmp50Result = null;
    if ("channel" === context.type) {
      const obj13 = { style: tmp.commandsHeaderContainer };
      const obj14 = { style: tmp.commandsHeaderTextContainer };
      const obj15 = { variant: "text-md/medium", color: "text-default" };
      let intl2 = context(sectionName[27]).intl;
      obj15.children = intl2.string(context(sectionName[27]).t.GOXqks);
      obj14.children = callback3(context(sectionName[26]).Heading, obj15);
      const items10 = [callback3(onAauth2Cancel, obj14), ];
      if (canSort) {
        const obj16 = {
          sortOrder: tmp4.sortOrder,
          onSortOptionPress(arg0) {
                  callback(arg0);
                }
        };
        canSort = callback3(application(sectionName[34]), obj16);
      }
      items10[1] = canSort;
      obj13.children = items10;
      tmp50Result = commands(onAauth2Cancel, obj13);
      const tmp50 = commands;
      const tmp51 = onAauth2Cancel;
    }
  }
  items9[6] = tmp50Result;
  obj5.children = items9;
  obj4.ListHeaderComponent = commands(c15, obj5);
  obj4.contentContainerStyle = memo2;
  obj4.scrollIndicatorInsets = memo3;
  obj4.renderItem = callback2;
  obj4.data = memo;
  obj4.preserveScrollMomentum = true;
  obj4.lockableScrollableContentOffsetY = lockableScrollableContentOffsetY;
  obj4.automaticallyAdjustsScrollIndicatorInsets = false;
  obj4.keyboardDismissMode = "none";
  ({ onScroll: obj10.animatedOnScroll, scrollerRef: obj10.ref, gestureRef: obj10.simultaneousHandlers, animatedProps: obj10.animatedProps } = appLauncherFlashListProps);
  let str3;
  if (loading) {
    str3 = "loading";
  }
  const items11 = [callback3(application(sectionName[29]), obj4, str3), ];
  obj17 = {
    application,
    onPressBack,
    scrollOffsetY: lockableScrollableContentOffsetY,
    showsAddCTA: tmp8,
    onAddAppMenuClick(installAppProps) {
      installAppProps = installAppProps.installAppProps;
      let obj;
      obj = application(sectionName[35]);
      obj.hideActionSheet();
      keyboardCloseReasonRef.current = context(sectionName[13]).AppLauncherKeyboardCloseReason.OAUTH_MODAL;
      const current = chatInputRef.current;
      if (null != current) {
        current.closeCustomKeyboard();
      }
      obj = { location: context(sectionName[22]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU, application_id: application.id, section_name: sectionName, source: entrypoint };
      if (null == installAppProps.customInstallUrl) {
        context(sectionName[36]).trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj);
        const obj3 = context(sectionName[36]);
      }
      obj = {};
      const merged = Object.assign(installAppProps);
      obj["source"] = "app_launcher_app_details";
      obj["oauth2Callback"] = function oauth2Callback(canceled) {
        if (canceled.canceled) {
          if (null != outer1_6) {
            outer1_6();
          }
        } else if (null != tmp) {
          const obj = context(sectionName[36]);
          obj.trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj);
        }
      };
      context(sectionName[37]).installApplication(obj);
    }
  };
  items11[1] = callback3(application(sectionName[9]), obj17);
  obj3.children = items11;
  return commands(c15, obj3);
};
export const BETWEEN_SECTIONS_MARGIN = 24;
export { CommandRow };
