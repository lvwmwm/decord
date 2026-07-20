// Module ID: 11232
// Function ID: 87442
// Name: PlaceholderCommandRow
// Dependencies: [0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4294967295, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
// Exports: default

// Module 11232 (PlaceholderCommandRow)
import closure_4 from "result";
import closure_5 from "result";
import result from "result";
import result from "result";
import { AnalyticEvents } from "result";
import { DISCOVERY_COMMANDS_QUERY_LIMIT as closure_12 } from "result";
import result from "result";
import result from "result";
import result from "result";

function PlaceholderCommandRow(isFirstRow) {
  let flag = isFirstRow.isFirstRow;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = isFirstRow.isLastRow;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const tmp = result();
  let obj = arg1(dependencyMap[11]);
  const placeholderWidth = obj.usePlaceholderWidth(10, 50);
  let obj1 = arg1(dependencyMap[11]);
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
  return callback3(arg1(dependencyMap[12]).TableRow, obj);
}
class CommandRow {
  constructor(arg0) {
    command = global.command;
    arg1 = command;
    ({ onPressCommand: closure_1, context } = global);
    importAll = context;
    ({ section: closure_3, location: closure_4, sectionName } = global);
    ({ isFirstRow, isLastRow, onExecuteCommand, installOnDemand, icon } = global);
    obj = require("result");
    View = obj.useAppLauncherContext().entrypoint;
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
            return callback(command, closure_3, closure_4);
          }
    };
    tmp4 = jsx;
    obj1 = {
      command,
      context,
      beforeExecuteCommand() {
            let obj = command(closure_3[15]);
            obj = { command, location: closure_4, triggerSection: command(closure_3[15]).getCommandTriggerSection(closure_3), sectionName };
            return obj.trackCommandSelected(obj);
          },
      onExecuteCommand
    };
    tmp6 = undefined;
    tmp5 = require("result");
    if (installOnDemand) {
      tmp6 = () => {
        // CreateGeneratorClosureLongIndex (0x67)
        let closure_0 = callback2(tmp);
        return function() {
          return callback(...arguments);
        };
      }();
    }
    obj1.tryExecuteCommand = tmp6;
    obj1.sectionName = sectionName;
    obj.trailing = tmp4(tmp5, obj1);
    return tmp3(require("result").TableRow, obj);
  }
}
const View = arg1(dependencyMap[2]).View;
({ useContextIndexState: closure_7, useUserIndexState: closure_8 } = result);
const DEFAULT_CONTENT_PADDING = result.DEFAULT_CONTENT_PADDING;
const useAppLauncherNavigation = result.useAppLauncherNavigation;
({ jsx: closure_13, jsxs: closure_14, Fragment: closure_15 } = result);
result = {};
result = { height: require("result").EXPANDED_HEADER_HEIGHT - require("result").SHEET_HANDLE_CONTAINER_HEIGHT };
result.headerSpacer = result;
result.list = { paddingHorizontal: DEFAULT_CONTENT_PADDING };
result.commandsHeaderContainer = {};
result.commandsHeaderTextContainer = {};
result.viewContainerStyle = { borderRadius: require("result").radii.lg };
const obj1 = { borderRadius: require("result").radii.lg };
result.mainContainerStyle = { backgroundColor: require("result").colors.CARD_BACKGROUND_DEFAULT };
result.expandDescriptionCTAStyle = { "Null": "<string:16777479>", "Null": "<string:36295491>" };
const obj2 = { backgroundColor: require("result").colors.CARD_BACKGROUND_DEFAULT };
result.monetizationDisclosureTextStyle = { marginLeft: require("result").space.PX_4 };
const obj4 = { -9223372036854775808: true, filter: true, marginBottom: require("result").space.PX_24, gap: require("result").space.PX_16 };
result.monetizationDisclosureContainerStyle = obj4;
result.monetizationDisclosureStyle = { -9223372036854775808: true, filter: true };
const obj3 = { marginLeft: require("result").space.PX_4 };
result.loadingTextPlaceholder = { backgroundColor: require("result").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("result").radii.lg };
const obj5 = { backgroundColor: require("result").colors.BACKGROUND_MOD_SUBTLE, borderRadius: require("result").radii.lg };
result.loadingTextPlaceholderSmall = { backgroundColor: require("result").colors.BACKGROUND_MOD_SUBTLE, height: 16, borderRadius: require("result").radii.lg, alignSelf: "flex-start" };
result.noCommandsTextContainer = { alignItems: "center" };
result = result.createStyles(result);
const obj7 = { PLACEHOLDER: 0, [0]: "PLACEHOLDER", COMMAND: 1, [1]: "COMMAND" };
const array = new Array(6);
let closure_18 = array.fill({ type: obj7.PLACEHOLDER });
result = result.fileFinishedImporting("modules/app_launcher/native/screens/application_view/app/AppDetailContent.tsx");

export default function AppDetailContent(context) {
  let commands;
  let installOnDemand;
  let lockableScrollableContentOffsetY;
  let onActivityItemSelected;
  let onPressBack;
  context = context.context;
  const arg1 = context;
  const application = context.application;
  const importDefault = application;
  ({ lockableScrollableContentOffsetY, installOnDemand } = context);
  const importAll = installOnDemand;
  const sectionName = context.sectionName;
  const dependencyMap = sectionName;
  const entrypoint = context.entrypoint;
  let closure_4 = entrypoint;
  const onCommandExecuted = context.onCommandExecuted;
  const React = onCommandExecuted;
  const View = context.onAauth2Cancel;
  let tmp13;
  let result;
  let obj7;
  let closure_18;
  let PlaceholderCommandRow;
  ({ onPressBack, onActivityItemSelected } = context);
  const tmp = result();
  let obj = arg1(dependencyMap[13]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  const DEFAULT_CONTENT_PADDING = keyboardCloseReasonRef;
  let obj1 = importAll(dependencyMap[18]);
  obj = { context };
  obj = {};
  const items = [arg1(dependencyMap[19]).ApplicationCommandType.CHAT];
  obj.commandTypes = items;
  obj.filters = obj;
  obj1 = { limit: closure_12, allowApplicationState: installOnDemand, installOnDemand, applicationId: application.id };
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj1.useDiscovery(obj);
  const filterSection = discovery.filterSection;
  const useAppLauncherNavigation = filterSection;
  const sectionDescriptors = discovery.sectionDescriptors;
  const AnalyticEvents = sectionDescriptors;
  const loading = discovery.loading;
  closure_12 = loading;
  const tmp4 = importDefault(dependencyMap[20])({ sectionId: application.id, commandsByActiveSection: discovery.commandsByActiveSection });
  ({ setSortOrder: closure_13, commands } = tmp4);
  let canSort = tmp4.canSort;
  result = chatInputRef(true, true).result;
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
    let obj6 = arg1(dependencyMap[21]);
    tmp8 = !obj6.isEmbeddedApp(application);
  }
  const items1 = [loading, commands, context.type];
  const items2 = [application.id, filterSection];
  const memo = React.useMemo(() => {
    if ("channel" !== context.type) {
      let items = [];
    } else if (loading) {
      items = found;
    } else {
      items = commands.map((command) => ({ type: constants.COMMAND, command }));
    }
    return items;
  }, items1);
  const effect = React.useEffect(() => {
    filterSection(application.id);
  }, items2);
  tmp13 = useAppLauncherNavigation();
  const items3 = [context, entrypoint, installOnDemand, tmp13, onCommandExecuted, sectionDescriptors, sectionName];
  const callback = React.useCallback((command, section) => {
    let APP_LAUNCHER_APPLICATION_VIEW = arg2;
    if (arg2 === undefined) {
      APP_LAUNCHER_APPLICATION_VIEW = context(sectionName[22]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW;
    }
    let obj = context(sectionName[23]);
    obj = { location: APP_LAUNCHER_APPLICATION_VIEW, context, command, section, sectionDescriptors, query: "", navigation: tmp13, installOnDemand, sectionName, entrypoint, onCommandExecuted };
    const result = obj.handleApplicationCommandSelected(obj);
  }, items3);
  result = callback;
  const items4 = [chatInputRef, keyboardCloseReasonRef, onCommandExecuted];
  const callback1 = React.useCallback(() => {
    const current = chatInputRef.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
    keyboardCloseReasonRef.current = context(sectionName[13]).AppLauncherKeyboardCloseReason.COMMAND;
    if (null != onCommandExecuted) {
      onCommandExecuted();
    }
  }, items4);
  obj7 = callback1;
  const found = sectionDescriptors.find((id) => id.id === application.id);
  closure_18 = found;
  const items5 = [callback, commands.length, context, callback1, found, installOnDemand, sectionName];
  const sum = importDefault(dependencyMap[17])().bottom + DEFAULT_CONTENT_PADDING;
  PlaceholderCommandRow = sum;
  const items6 = [application, , , ];
  ({ monetizationDisclosureContainerStyle: arr8[1], monetizationDisclosureStyle: arr8[2], monetizationDisclosureTextStyle: arr8[3] } = tmp);
  const callback2 = React.useCallback((arg0) => {
    let index;
    let item;
    ({ item, index } = arg0);
    const type = item.type;
    if (callback1.PLACEHOLDER === type) {
      let obj = { isFirstRow: 0 === index, isLastRow: index === found.length - 1 };
      return callback(sum, obj);
    } else if (callback1.COMMAND === type) {
      obj = { command: item.command, onPressCommand: callback, isFirstRow: 0 === index, isLastRow: index === commands.length - 1, context, onExecuteCommand: callback1, section: found, location: context(sectionName[22]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, installOnDemand, sectionName };
      return callback(closure_20, obj);
    } else {
      return null;
    }
  }, items5);
  const memo1 = React.useMemo(() => {
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
      const items = [callback(context(sectionName[25]).BillIcon, { flexDirection: "png", alignItems: true }), ];
      obj = { style: tmp.monetizationDisclosureTextStyle };
      const intl = context(sectionName[27]).intl;
      obj.children = intl.string(context(sectionName[27]).t.5khEk8);
      items[1] = callback(context(sectionName[26]).Text, obj);
      obj.children = items;
      tmp6 = commands(onAauth2Cancel, obj);
    }
    let tmp14 = null;
    if (isAndroidResult) {
      obj1 = { style: tmp.monetizationDisclosureStyle };
      const items1 = [callback(context(sectionName[28]).ShopIcon, { flexDirection: "png", alignItems: true }), ];
      obj2 = { style: tmp.monetizationDisclosureTextStyle };
      const intl2 = context(sectionName[27]).intl;
      obj2.children = intl2.string(context(sectionName[27]).t.8z5B2U);
      items1[1] = callback(context(sectionName[26]).Text, obj2);
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
  const memo2 = React.useMemo(() => {
    const obj = {};
    const merged = Object.assign(tmp.list);
    obj["paddingBottom"] = sum;
    return obj;
  }, items7);
  const memo3 = React.useMemo(() => ({ bottom: sum }), items8);
  obj7 = arg1(dependencyMap[29]);
  const appLauncherFlashListProps = obj7.useAppLauncherFlashListProps();
  const obj3 = {};
  const obj4 = {};
  const obj5 = {};
  obj6 = { style: tmp.headerSpacer };
  const items9 = [callback3(View, obj6), , , , , , ];
  let obj12 = arg1(dependencyMap[21]);
  if (obj12.isEmbeddedApp(application)) {
    obj7 = { application, context, sectionName, onActivityItemSelected, entrypoint, hasCommands: commands.length > 0 };
    let tmp27Result = tmp27(tmp28(tmp29[30]), obj7);
  } else {
    const obj8 = { application };
    ({ viewContainerStyle: obj14.viewContainerStyle, mainContainerStyle: obj14.mainContainerStyle, expandDescriptionCTAStyle: obj14.expandDescriptionCTAStyle } = tmp);
    tmp27Result = tmp27(tmp28(tmp29[31]), obj8);
  }
  items9[1] = tmp27Result;
  const obj9 = {};
  let num4 = 24;
  if (null != memo1) {
    num4 = importDefault(dependencyMap[10]).space.PX_16;
  }
  obj9.size = num4;
  items9[2] = callback3(arg1(dependencyMap[32]).Spacer, obj9);
  items9[3] = memo1;
  let tmp34 = commands.length > 1 && !loading;
  if (tmp34) {
    tmp34 = "channel" === context.type;
  }
  if (tmp34) {
    const obj10 = { context, allCommands: commands, onPressCommand: callback, section: found, onExecuteCommand: callback1, installOnDemand, sectionName };
    tmp34 = callback3(importDefault(dependencyMap[33]), obj10);
  }
  items9[4] = tmp34;
  let tmp38 = null;
  if (tmp7) {
    let obj17 = arg1(dependencyMap[21]);
    tmp38 = null;
    if (!obj17.isEmbeddedApp(application)) {
      const obj11 = { style: tmp.noCommandsTextContainer };
      obj12 = { INTEGRATION_CREATE: "AutomodMentionRaidLimit", ConstraintReasonCode: "%URIError%" };
      const intl = arg1(dependencyMap[27]).intl;
      obj12.children = intl.string(arg1(dependencyMap[27]).t.w8+YDM);
      obj11.children = callback3(arg1(dependencyMap[26]).Text, obj12);
      tmp38 = callback3(View, obj11);
    }
  }
  items9[5] = tmp38;
  let tmp50Result = null;
  if (!tmp7) {
    tmp50Result = null;
    if ("channel" === context.type) {
      const obj13 = { style: tmp.commandsHeaderContainer };
      const obj14 = { style: tmp.commandsHeaderTextContainer };
      const obj15 = {};
      const intl2 = arg1(dependencyMap[27]).intl;
      obj15.children = intl2.string(arg1(dependencyMap[27]).t.GOXqks);
      obj14.children = callback3(arg1(dependencyMap[26]).Heading, obj15);
      const items10 = [callback3(View, obj14), ];
      if (canSort) {
        const obj16 = {
          sortOrder: tmp4.sortOrder,
          onSortOptionPress(arg0) {
                  callback(arg0);
                }
        };
        canSort = callback3(importDefault(dependencyMap[34]), obj16);
      }
      items10[1] = canSort;
      obj13.children = items10;
      tmp50Result = commands(View, obj13);
      const tmp50 = commands;
      const tmp51 = View;
    }
  }
  items9[6] = tmp50Result;
  obj5.children = items9;
  obj4.ListHeaderComponent = commands(tmp13, obj5);
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
  const items11 = [callback3(importDefault(dependencyMap[29]), obj4, str3), ];
  obj17 = {
    application,
    onPressBack,
    scrollOffsetY: lockableScrollableContentOffsetY,
    showsAddCTA: tmp8,
    onAddAppMenuClick(installAppProps) {
      installAppProps = installAppProps.installAppProps;
      let context;
      let obj = application(sectionName[35]);
      obj.hideActionSheet();
      keyboardCloseReasonRef.current = context(sectionName[13]).AppLauncherKeyboardCloseReason.OAUTH_MODAL;
      const current = chatInputRef.current;
      if (null != current) {
        current.closeCustomKeyboard();
      }
      obj = { location: context(sectionName[22]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW_MORE_MENU, application_id: application.id, section_name: sectionName, source: entrypoint };
      context = obj;
      if (null == installAppProps.customInstallUrl) {
        context(sectionName[36]).trackWithMetadata(sectionDescriptors.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj);
        const obj3 = context(sectionName[36]);
      }
      obj = {};
      const merged = Object.assign(installAppProps);
      obj["source"] = "app_launcher_app_details";
      obj["oauth2Callback"] = function oauth2Callback(canceled) {
        if (canceled.canceled) {
          if (null != callback) {
            callback();
          }
        } else if (null != tmp) {
          const obj = obj(closure_3[36]);
          obj.trackWithMetadata(obj.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj);
        }
      };
      context(sectionName[37]).installApplication(obj);
    }
  };
  items11[1] = callback3(importDefault(dependencyMap[9]), obj17);
  obj3.children = items11;
  return commands(tmp13, obj3);
};
export const BETWEEN_SECTIONS_MARGIN = 24;
export { CommandRow };
