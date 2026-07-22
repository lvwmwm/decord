// Module ID: 11253
// Function ID: 87557
// Name: Tag
// Dependencies: []
// Exports: default

// Module 11253 (Tag)
function Tag(arg0) {
  let accessibilityLabel;
  let icon;
  let tagName;
  ({ tagName, icon, accessibilityLabel } = arg0);
  const tmp = callback5();
  let obj = { style: tmp.tag, accessible: true, accessibilityLabel };
  const items = [icon, ];
  obj = { variant: "text-sm/normal", style: tmp.tagText, children: tagName };
  items[1] = callback3(arg1(dependencyMap[10]).Text, obj);
  obj.children = items;
  return callback4(View, obj);
}
function PrimaryEntryPointButton(applicationId) {
  let context;
  let disabled;
  let entrypoint;
  let onActivityItemSelected;
  let primaryEntryPointCommand;
  let sectionName;
  applicationId = applicationId.applicationId;
  const arg1 = applicationId;
  ({ context, primaryEntryPointCommand } = applicationId);
  const importDefault = primaryEntryPointCommand;
  const activityAction = applicationId.activityAction;
  const importAll = activityAction;
  let React;
  ({ sectionName, disabled, onActivityItemSelected, entrypoint } = applicationId);
  const id = React.useId();
  let obj = arg1(dependencyMap[11]);
  const requiredAppLauncherContext = obj.useRequiredAppLauncherContext();
  const chatInputRef = requiredAppLauncherContext.chatInputRef;
  const dependencyMap = chatInputRef;
  const keyboardCloseReasonRef = requiredAppLauncherContext.keyboardCloseReasonRef;
  let closure_4 = keyboardCloseReasonRef;
  const items = [chatInputRef, keyboardCloseReasonRef];
  const callback = React.useCallback(() => {
    keyboardCloseReasonRef.current = applicationId(chatInputRef[11]).AppLauncherKeyboardCloseReason.ACTIVITY;
    const current = chatInputRef.current;
    if (null != current) {
      current.closeCustomKeyboard();
    }
  }, items);
  let closure_5 = callback;
  obj = { applicationId, context, launchingComponentId: id };
  let tmp5;
  if (activityAction !== arg1(dependencyMap[13]).ActivityAction.LEAVE) {
    tmp5 = callback;
  }
  obj.onSubmissionComplete = tmp5;
  const tmp4 = importDefault(dependencyMap[12]);
  obj = { applicationId, context, sectionName, onActivityItemSelected, location: arg1(dependencyMap[15]).ApplicationCommandTriggerLocations.APP_LAUNCHER_APPLICATION_VIEW, entrypoint, launchingComponentId: id };
  const handleActivityItemSelected = arg1(dependencyMap[14]).useHandleActivityItemSelected(obj).handleActivityItemSelected;
  React = handleActivityItemSelected;
  const items1 = [primaryEntryPointCommand.displayName];
  let memo = React.useMemo(() => applicationId(chatInputRef[16]).formatPrimaryEntryPointCommandName(primaryEntryPointCommand.displayName), items1);
  if (null == memo) {
    const intl = arg1(dependencyMap[17]).intl;
    memo = intl.string(arg1(dependencyMap[17]).t.zKX8Nu);
  }
  if (activityAction === arg1(dependencyMap[13]).ActivityAction.JOIN) {
    const intl2 = arg1(dependencyMap[17]).intl;
    memo = intl2.string(arg1(dependencyMap[17]).t.d9PsMj);
    let str = "active";
  } else {
    str = "primary";
    if (activityAction === arg1(dependencyMap[13]).ActivityAction.LEAVE) {
      const intl3 = arg1(dependencyMap[17]).intl;
      memo = intl3.string(arg1(dependencyMap[17]).t.Hi1/aQ);
      str = "destructive";
    }
  }
  const items2 = [handleActivityItemSelected, activityAction, callback, applicationId];
  let tmp14 = null;
  if ("channel" === context.type) {
    const obj1 = { size: "lg", loading: tmp4(obj).submitting, variant: str, text: memo, disabled, onPress: tmp13 };
    tmp14 = callback3(arg1(dependencyMap[20]).Button, obj1);
  }
  return tmp14;
}
function TryItOutButton(botUserId) {
  botUserId = botUserId.botUserId;
  const arg1 = botUserId;
  const applicationId = botUserId.applicationId;
  const importDefault = applicationId;
  const analyticsLocations = botUserId.analyticsLocations;
  const importAll = analyticsLocations;
  const tmp2 = callback2(React.useState(false), 2);
  let closure_3 = tmp2[1];
  let callback = React.useRef(null);
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [botUserId, applicationId, analyticsLocations];
  let str = "primary";
  callback = React.useCallback(callback(tmp), items);
  if ("channel" === botUserId.context.type) {
    str = "secondary";
  }
  const obj = { size: "lg", loading: tmp2[0], variant: str };
  const intl = arg1(closure_3[17]).intl;
  obj.text = intl.string(arg1(closure_3[17]).t.AUM8hY);
  obj.onPress = callback;
  return callback3(arg1(closure_3[20]).Button, obj);
}
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importDefault(dependencyMap[1]);
let closure_6 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const AnalyticEvents = arg1(dependencyMap[6]).AnalyticEvents;
({ jsx: closure_11, jsxs: closure_12, Fragment: closure_13 } = arg1(dependencyMap[7]));
const PX_12 = importDefault(dependencyMap[8]).space.PX_12;
let obj = arg1(dependencyMap[9]);
obj = { container: { flex: 1 } };
obj = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[8]).radii.lg, overflow: "hidden", gap: importDefault(dependencyMap[8]).space.PX_16, paddingBottom: PX_12 };
obj.cardContainer = obj;
obj.activityHeroDetailsLandscape = { flexDirection: "row" };
obj.heroMediaContainerLandscape = { width: "65%" };
obj.detailsContainerLandscape = { width: "35%" };
obj.details = { paddingHorizontal: PX_12 };
const obj1 = { position: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000173019275103164, location: 0.000000007919535119815975, body: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000173019275103164, style: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030586903747, accessibilityRole: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000015493702643854248, mode: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003341471991908205, marginTop: importDefault(dependencyMap[8]).space.PX_8 };
obj.tagList = obj1;
const tmp2 = arg1(dependencyMap[7]);
obj.tag = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.tagText = { top: -1 };
obj.tagIcon = { marginRight: 4 };
obj.buttonContainer = { paddingTop: 16 };
obj.activityUrlOverrideInputContainer = { marginTop: -4 };
obj.expandDescriptionCTAStyle = { <string:1627544401>: "%FunctionPrototype%", <string:3359199659>: "paddingStart" };
const obj2 = { backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.primaryEntryPointButtonDisabledCTA = { marginTop: importDefault(dependencyMap[8]).space.PX_12, color: importDefault(dependencyMap[8]).colors.TEXT_MUTED, textAlign: "center" };
obj.tryItOutButtonContainerStyle = { marginTop: 8 };
let closure_15 = obj.createStyles(obj);
const obj3 = { marginTop: importDefault(dependencyMap[8]).space.PX_12, color: importDefault(dependencyMap[8]).colors.TEXT_MUTED, textAlign: "center" };
const result = arg1(dependencyMap[41]).fileFinishedImporting("modules/app_launcher/native/screens/application_view/activity/ActivityDetailContent.tsx");

export default function ActivityDetailContent(application) {
  let activityUrlOverride;
  let context;
  let entrypoint;
  let hasCommands;
  let isDeveloperOfThisApp;
  let onActivityItemSelected;
  let sectionName;
  let useActivityUrlOverride;
  application = application.application;
  const arg1 = application;
  ({ context, entrypoint } = application);
  ({ sectionName, onActivityItemSelected, hasCommands } = application);
  let mapped = callback5();
  let obj = arg1(dependencyMap[11]);
  const width = obj.useRequiredAppLauncherContext().width;
  let obj1 = arg1(dependencyMap[23]);
  const getPrimaryAppCommand = obj1.useGetPrimaryAppCommand(context, application.id);
  const analyticsLocations = importDefault(dependencyMap[24])(importDefault(dependencyMap[25]).APP_DETAIL).analyticsLocations;
  let obj2 = arg1(dependencyMap[26]);
  const isScreenLandscape = obj2.useIsScreenLandscape();
  let detailsContainerLandscape = entrypoint !== arg1(dependencyMap[19]).AppLauncherEntrypoint.VOICE && isScreenLandscape;
  let obj3 = arg1(dependencyMap[27]);
  const items = [closure_8];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => ({ isDeveloperOfThisApp: store.inDevModeForApplication(application.id), activityUrlOverride: store.getActivityUrlOverride(), useActivityUrlOverride: store.getUseActivityUrlOverride() }));
  ({ isDeveloperOfThisApp, activityUrlOverride, useActivityUrlOverride } = stateFromStoresObject);
  let obj4 = arg1(dependencyMap[16]);
  if (obj4.isRealApplication(application)) {
    const tmp12 = application instanceof closure_9 ? application.maxParticipants : application.max_participants;
    let num = 0;
    if (null != tmp12) {
      num = tmp12;
    }
    let tmp15Result = null;
    if (isDeveloperOfThisApp) {
      obj = {};
      obj = { marginTop: PX_12 };
      let num2 = 0;
      if (!useActivityUrlOverride) {
        num2 = -PX_12;
      }
      obj.marginBottom = num2;
      obj.style = obj;
      const items1 = [callback3(arg1(dependencyMap[28]).TableRowDivider, {}), , ];
      obj1 = {};
      const intl = arg1(dependencyMap[17]).intl;
      obj1.label = intl.string(arg1(dependencyMap[17]).t.3TSGuD);
      obj1.value = useActivityUrlOverride;
      obj1.onValueChange = importAll(dependencyMap[30]).toggleUseActivityUrlOverride;
      obj1.end = true;
      items1[1] = callback3(arg1(dependencyMap[29]).TableSwitchRow, obj1);
      let tmp25Result = null;
      if (useActivityUrlOverride) {
        obj2 = { style: mapped.activityUrlOverrideInputContainer };
        obj3 = { placeholder: "e.g. http://192.168.1.1:3000" };
        let tmp30;
        if (null != activityUrlOverride) {
          tmp30 = activityUrlOverride;
        }
        obj3.value = tmp30;
        obj3.onChange = importAll(dependencyMap[30]).setActivityUrlOverride;
        obj2.children = callback3(arg1(dependencyMap[31]).TextInput, obj3);
        tmp25Result = callback3(View, obj2);
        const tmp25 = callback3;
        const tmp26 = View;
        const tmp27 = callback3;
      }
      items1[2] = tmp25Result;
      obj.children = items1;
      tmp15Result = closure_12(View, obj);
      const tmp15 = closure_12;
      const tmp16 = View;
    }
    let obj10 = arg1(dependencyMap[32]);
    const getOrFetchApplication = obj10.useGetOrFetchApplication(application.id);
    let bot;
    if (null != getOrFetchApplication) {
      bot = getOrFetchApplication.bot;
    }
    let obj11 = arg1(dependencyMap[13]);
    obj4 = { context, applicationId: application.id };
    const activityAction = obj11.useActivityAction(obj4);
    let obj13 = arg1(dependencyMap[33]);
    const delayedSwapToActivityActionLeave = obj13.useDelayedSwapToActivityActionLeave(activityAction);
    const obj5 = { context, application, activityAction: delayedSwapToActivityActionLeave };
    const tmp42 = importDefault(dependencyMap[34])(obj5);
    const reason = tmp42.reason;
    const obj6 = { context, application };
    let id;
    importDefault(dependencyMap[35]);
    if (null != bot) {
      id = bot.id;
    }
    obj6.botUserId = id;
    if (null != getPrimaryAppCommand) {
      const obj7 = {};
      const obj8 = { applicationId: application.id, context, sectionName, primaryEntryPointCommand: getPrimaryAppCommand, disabled: tmp42.disabled, onActivityItemSelected, entrypoint, activityAction: delayedSwapToActivityActionLeave };
      const items2 = [callback3(PrimaryEntryPointButton, obj8), ];
      let tmp59 = null;
      if (tmp45) {
        let id1;
        if (null != bot) {
          id1 = bot.id;
        }
        tmp59 = null;
        if (null != id1) {
          const obj9 = { style: mapped.tryItOutButtonContainerStyle };
          obj10 = { botUserId: bot.id, applicationId: application.id, analyticsLocations, context };
          obj9.children = callback3(TryItOutButton, obj10);
          tmp59 = callback3(View, obj9);
        }
      }
      items2[1] = tmp59;
      obj7.children = items2;
      obj11 = { style: mapped.buttonContainer };
      const items3 = [closure_12(closure_13, obj7), ];
      let tmp67 = null != reason;
      if (tmp67) {
        const obj12 = { variant: "text-sm/normal", style: mapped.primaryEntryPointButtonDisabledCTA, children: reason };
        tmp67 = callback3(arg1(dependencyMap[10]).Text, obj12);
      }
      items3[1] = tmp67;
      obj11.children = items3;
      const tmp55 = closure_12;
      const tmp56 = closure_13;
      const tmp65 = closure_12;
      const tmp65Result = closure_12(View, obj11);
      const tmp66 = View;
    } else {
      if (isDeveloperOfThisApp) {
        isDeveloperOfThisApp = !hasCommands;
      }
      if (isDeveloperOfThisApp) {
        let obj16 = arg1(dependencyMap[16]);
        isDeveloperOfThisApp = obj16.isEmbeddedApp(application);
      }
      if (isDeveloperOfThisApp) {
        obj13 = { style: mapped.buttonContainer };
        const obj14 = { messageType: arg1(dependencyMap[36]).HelpMessageTypes.WARNING };
        const intl2 = arg1(dependencyMap[17]).intl;
        obj14.children = intl2.format(arg1(dependencyMap[17]).t.s/3hjE, {});
        obj13.children = callback3(arg1(dependencyMap[36]).HelpMessage, obj14);
        const tmp49 = callback3(View, obj13);
      }
    }
    const obj15 = { value: analyticsLocations };
    obj16 = {};
    const items4 = [mapped.container];
    obj16.style = items4;
    const obj17 = { style: mapped.cardContainer };
    const obj18 = {};
    let activityHeroDetailsLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      activityHeroDetailsLandscape = mapped.activityHeroDetailsLandscape;
    }
    obj18.style = activityHeroDetailsLandscape;
    const obj19 = {};
    let heroMediaContainerLandscape = detailsContainerLandscape;
    if (detailsContainerLandscape) {
      heroMediaContainerLandscape = mapped.heroMediaContainerLandscape;
    }
    obj19.style = heroMediaContainerLandscape;
    const obj20 = { applicationId: application.id };
    let result = width;
    if (detailsContainerLandscape) {
      result = 65 * width / 100;
    }
    obj20.width = result;
    obj19.children = callback3(importDefault(dependencyMap[37]), obj20);
    const items5 = [callback3(View, obj19), ];
    const obj21 = {};
    const items6 = [mapped.details, ];
    if (detailsContainerLandscape) {
      detailsContainerLandscape = mapped.detailsContainerLandscape;
    }
    items6[1] = detailsContainerLandscape;
    obj21.style = items6;
    const obj22 = { application, expandDescriptionCTAStyle: mapped.expandDescriptionCTAStyle };
    const items7 = [callback3(importDefault(dependencyMap[38]), obj22), , , , ];
    const obj23 = { style: mapped.tagList };
    const obj24 = {};
    const obj25 = { style: mapped.tagIcon, size: "xs" };
    obj24.icon = callback3(arg1(dependencyMap[39]).GroupIcon, obj25);
    const tmp71 = callback3;
    const tmp74 = callback3;
    const tmp75 = View;
    const tmp76 = callback3;
    const tmp77 = View;
    const tmp78 = closure_12;
    const tmp79 = View;
    const tmp80 = callback3;
    const tmp81 = View;
    const tmp82 = callback3;
    const tmp85 = importDefault(dependencyMap[37]);
    const tmp87 = closure_12;
    const tmp88 = View;
    const tmp92 = closure_12;
    const tmp93 = View;
    const tmp94 = callback3;
    const tmp95 = Tag;
    let num22 = 0;
    if (null != num) {
      num22 = num;
    }
    obj24.tagName = arg1(dependencyMap[40]).getItemSubtitleForMaxPlayersShort(num22);
    let num23 = 0;
    const obj37 = arg1(dependencyMap[40]);
    if (null != num) {
      num23 = num;
    }
    obj24.accessibilityLabel = importDefault(dependencyMap[40])(num23);
    const items8 = [tmp94(tmp95, obj24, "participants"), ];
    const tags = application.tags;
    mapped = undefined;
    if (null != tags) {
      mapped = tags.map((tagName) => {
        let obj = { tagName };
        const intl = application(closure_3[17]).intl;
        obj = { tagName };
        obj.accessibilityLabel = intl.formatToPlainString(application(closure_3[17]).t.tXXD6v, obj);
        return callback(closure_16, obj, tagName);
      });
    }
    items8[1] = mapped;
    obj23.children = items8;
    items7[1] = tmp92(tmp93, obj23);
    items7[2] = tmp65Result;
    items7[3] = tmp49;
    items7[4] = tmp15Result;
    obj21.children = items7;
    items5[1] = tmp87(tmp88, obj21);
    obj18.children = items5;
    obj17.children = tmp78(tmp79, obj18);
    obj16.children = tmp76(tmp77, obj17);
    obj15.children = tmp74(tmp75, obj16);
    return tmp71(arg1(dependencyMap[24]).AnalyticsLocationProvider, obj15);
  } else {
    const _Error = Error;
    const error = new Error("ActivityDetailContent was passed the Built-in App, which is not supported.");
    throw error;
  }
  const tmp3 = importDefault(dependencyMap[24]);
};
