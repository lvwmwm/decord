// Module ID: 11944
// Function ID: 92432
// Name: AddAppButton
// Dependencies: [5, 57, 31, 8007, 653, 1455, 33, 11297, 10861, 4098, 5490, 11281, 3830, 1443, 7620, 8773, 1212, 4543, 689, 5463, 4140, 3989, 1555, 675, 2]
// Exports: default

// Module 11944 (AddAppButton)
import APP_LAUNCHER_BUILT_IN_SECTION_ICON from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import _slicedToArray from "_slicedToArray";
import result from "result";
import { getSection } from "_isNativeReflectConstruct";
import { AnalyticEvents } from "ME";
import { AppLauncherRouteName } from "APP_LAUNCHER_BUILT_IN_SECTION_ICON";
import { jsx } from "jsxProd";

const require = arg1;
function AddAppButton(application) {
  application = application.application;
  const guildId = application.guildId;
  let items = [, , , , ];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = React.useCallback(() => {
    let obj = application(outer1_2[8]);
    obj = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    obj.installApplication(obj);
    guildId(outer1_2[9]).hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    let obj = guildId(1443);
    if (!obj.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = application(7620).LinkExternalSmallIcon;
    }
    const items1 = [application];
    const memo = React.useMemo(() => {
      const obj = { name: "longpress" };
      const intl = application(outer1_2[16]).intl;
      obj.label = intl.string(application(outer1_2[16]).t.XWDihq);
      const items = [obj];
      return items;
    }, []);
    const callback1 = React.useCallback((nativeEvent) => {
      if ("longPress" === nativeEvent.nativeEvent.actionName) {
        const obj = application(outer1_2[10]);
        obj.copy(application(outer1_2[11]).getApplicationInstallURL(application));
        const obj2 = application(outer1_2[11]);
        application(outer1_2[12]).presentLinkCopied();
        const obj3 = application(outer1_2[12]);
      }
    }, items1);
    obj = {};
    let intl = application(1212).intl;
    obj.text = intl.string(application(1212).t.NgXl3C);
    obj.onPress = callback;
    obj.onLongPress = tmp2;
    obj.accessibilityActions = memo;
    obj.onAccessibilityAction = callback1;
    obj = { size: "sm", color: guildId(689).colors.WHITE };
    obj.icon = <PlusSmallIcon size="sm" color={guildId(689).colors.WHITE} />;
    return jsx(application(4543).Button, { size: "sm", color: guildId(689).colors.WHITE });
  }
  PlusSmallIcon = application(8773).PlusSmallIcon;
}
function OpenAppButton(profileApplication) {
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  const channel = profileApplication.channel;
  const tmp2 = callback2(React.useState(false), 2);
  let callback = tmp2[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items = [botUserId, channel, profileApplication.id];
  callback = React.useCallback(callback(tmp), items);
  const obj = {};
  const intl = profileApplication(channel[16]).intl;
  obj.text = intl.string(profileApplication(channel[16]).t["Cia+A8"]);
  obj.loading = tmp2[0];
  obj.onPress = callback;
  return jsx(profileApplication(channel[17]).Button, {});
}
const result = require("result").fileFinishedImporting("modules/user_profile/native/AddOrOpenAppButton.tsx");

export default function AddOrOpenAppButton(arg0) {
  let application;
  let botUserId;
  let channel;
  let guildId;
  ({ application, channel } = arg0);
  ({ botUserId, guildId } = arg0);
  if (importDefault(11297)(channel)) {
    if (null != channel) {
      const obj = { profileApplication: application, botUserId, channel };
      let tmp2 = <OpenAppButton profileApplication={application} botUserId={botUserId} channel={channel} />;
    }
    return tmp2;
  }
  tmp2 = <AddAppButton application={application} guildId={guildId} />;
};
