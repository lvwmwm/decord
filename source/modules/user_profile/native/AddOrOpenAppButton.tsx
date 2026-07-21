// Module ID: 11904
// Function ID: 92127
// Name: AddAppButton
// Dependencies: []
// Exports: default

// Module 11904 (AddAppButton)
function AddAppButton(application) {
  application = application.application;
  const arg1 = application;
  const guildId = application.guildId;
  const importDefault = guildId;
  const items = [, , , , ];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = React.useCallback(() => {
    let obj = application(closure_2[8]);
    obj = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    obj.installApplication(obj);
    guildId(closure_2[9]).hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    let obj = importDefault(dependencyMap[13]);
    if (!obj.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = arg1(dependencyMap[14]).LinkExternalSmallIcon;
    }
    const items1 = [application];
    const memo = React.useMemo(() => {
      const obj = { name: "longpress" };
      const intl = application(closure_2[16]).intl;
      obj.label = intl.string(application(closure_2[16]).t.XWDihq);
      const items = [obj];
      return items;
    }, []);
    const callback1 = React.useCallback((nativeEvent) => {
      if ("longPress" === nativeEvent.nativeEvent.actionName) {
        const obj = application(closure_2[10]);
        obj.copy(application(closure_2[11]).getApplicationInstallURL(application));
        const obj2 = application(closure_2[11]);
        application(closure_2[12]).presentLinkCopied();
        const obj3 = application(closure_2[12]);
      }
    }, items1);
    obj = {};
    const intl = arg1(dependencyMap[16]).intl;
    obj.text = intl.string(arg1(dependencyMap[16]).t.NgXl3C);
    obj.onPress = callback;
    obj.onLongPress = tmp2;
    obj.accessibilityActions = memo;
    obj.onAccessibilityAction = callback1;
    obj = { size: "sm", color: importDefault(dependencyMap[18]).colors.WHITE };
    obj.icon = <PlusSmallIcon {...obj} />;
    return jsx(arg1(dependencyMap[17]).Button, obj);
  }
  PlusSmallIcon = arg1(dependencyMap[15]).PlusSmallIcon;
}
function OpenAppButton(profileApplication) {
  profileApplication = profileApplication.profileApplication;
  const arg1 = profileApplication;
  const botUserId = profileApplication.botUserId;
  const importDefault = botUserId;
  const channel = profileApplication.channel;
  const dependencyMap = channel;
  const tmp2 = callback2(React.useState(false), 2);
  let callback = tmp2[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [botUserId, channel, profileApplication.id];
  callback = React.useCallback(callback(tmp), items);
  const obj = {};
  const intl = arg1(dependencyMap[16]).intl;
  obj.text = intl.string(arg1(dependencyMap[16]).t.Cia+A8);
  obj.loading = tmp2[0];
  obj.onPress = callback;
  return jsx(arg1(dependencyMap[17]).Button, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const getSection = arg1(dependencyMap[3]).getSection;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const AppLauncherRouteName = arg1(dependencyMap[5]).AppLauncherRouteName;
const jsx = arg1(dependencyMap[6]).jsx;
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/user_profile/native/AddOrOpenAppButton.tsx");

export default function AddOrOpenAppButton(arg0) {
  let application;
  let botUserId;
  let channel;
  let guildId;
  ({ application, channel } = arg0);
  ({ botUserId, guildId } = arg0);
  if (importDefault(dependencyMap[7])(channel)) {
    if (null != channel) {
      const obj = { profileApplication: application, botUserId, channel };
      let tmp2 = <OpenAppButton {...obj} />;
    }
    return tmp2;
  }
  tmp2 = <AddAppButton application={application} guildId={guildId} />;
};
