// Module ID: 12571
// Function ID: 12572
// Name: AddOrOpenAppButton
// Dependencies: [5, 32, 19, 8591, 1074, 1484, 21, 11627, 8506, 4800, 6610, 11614, 4527, 1366, 8037, 8332, 1115, 5281, 576, 6584, 4849, 4701, 1611, 1241, 2]
// Exports: default

// Module 12571 (AddOrOpenAppButton)
import Fragment from "Fragment" /* 21 */;
import Constants from "Constants" /* 1074 */;
import AppLauncherNativeConstants from "AppLauncherNativeConstants" /* 1484 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4800 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import ApplicationUtils from "ApplicationUtils" /* 8506 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8591 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11614 */;
import useIsAppDMDefault from "useIsAppDM" /* 11627 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c3, c4;

function AddAppButton(application) {
  application = application.application;
  const guildId = application.guildId;
  let obj = react;
  let items = [, , , , ];
  ({ customInstallUrl: arr[0], id: arr[1], installParams: arr[2], integrationTypesConfig: arr[3] } = application);
  items[4] = guildId;
  [][0] = application;
  const callback = react.useCallback(() => {
    const obj = ApplicationUtils;
    const obj2 = { applicationId: application.id, customInstallUrl: application.customInstallUrl, installParams: application.installParams, integrationTypesConfig: application.integrationTypesConfig, guildId };
    obj.installApplication(obj2);
    const obj3 = ActionSheetActionCreatorsDefault;
    obj3.hideActionSheet();
  }, items);
  const customInstallUrl = application.customInstallUrl;
  if (null != customInstallUrl) {
    let tmp6;
    let obj2 = guildId(1366);
    if (!obj2.isDiscordUrl(customInstallUrl)) {
      let PlusSmallIcon = application(8037).LinkExternalSmallIcon;
      tmp6 = application;
    }
    const items1 = [application];
    const memo = obj.useMemo(() => {
      let intl;
      const obj = { name: "longpress", label: intl.string(application(dependencyMap[16]).t.XWDihq) };
      intl = application(dependencyMap[16]).intl;
      const items = [obj];
      return items;
    }, []);
    const callback1 = obj.useCallback((nativeEvent) => {
      if ("longPress" === nativeEvent.nativeEvent.actionName) {
        const copy = ClipboardUtils.copy;
        ClipboardUtils;
        const obj = getApplicationInstallURL;
        copy(obj.getApplicationInstallURL(application));
        const obj2 = ToastUtils;
        obj2.presentLinkCopied();
      }
    }, items1);
    const Button = tmp6(5281).Button;
    let intl = tmp6(1115).intl;
    ({ size: "sm", color: guildId(576).colors.WHITE });
    return <Button text={intl.string(tmp6(1115).t.NgXl3C)} onPress={callback} onLongPress={tmp2} accessibilityActions={memo} onAccessibilityAction={callback1} icon={null} />;
  }
  PlusSmallIcon = application(8332).PlusSmallIcon;
  tmp6 = application;
}
function OpenAppButton(profileApplication) {
  let closure_3;
  let first;
  profileApplication = profileApplication.profileApplication;
  const botUserId = profileApplication.botUserId;
  let channel = profileApplication.channel;
  _asyncToGenerator = undefined;
  [first, _asyncToGenerator] = react.useState(false);
  const items = [botUserId, channel, profileApplication.id];
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_1;
    let constants2;
    let obj6;
    let obj9;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        let closure_0;
        let application1;
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            channel = 0;
            tmp = undefined;
            const obj4 = { type: "channel", channel };
            const tmp41 = getSection(obj4, profileApplication.id);
            closure_0 = tmp41;
            const descriptor2 = tmp41.descriptor;
            let application;
            const tmp40 = profileApplication;
            if (descriptor2 != null) {
              application = descriptor2.application;
            }
            if (null == application) {
              v2(true);
            }
            const descriptor = tmp41.descriptor;
            application1 = undefined;
            if (descriptor != null) {
              application1 = descriptor.application;
            }
            if (application1 == null) {
              c3 = 1;
              c4 = 1;
              const obj7 = { value: obj9.fetchApplication(tmp40.id), done: false };
              obj9 = tmp(channel[19]);
              return obj7;
            }
          }
        } else {
          if (1 === tmp4) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj8 = { value, done: true };
              return obj8;
            } else {
              application1 = value;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const _setTimeout = setTimeout;
            const timerId = setTimeout(() => {
              let obj3;
              const obj = application1(c2[21]);
              const bestActiveInput = obj.getBestActiveInput();
              const tmp = application1;
              const tmp2 = c2;
              if (bestActiveInput != null) {
                const openCustomKeyboard = bestActiveInput.openCustomKeyboard;
                const obj2 = { type: tmp(tmp2[22]).KeyboardTypes.APP_LAUNCHER, context: obj3 };
                obj3 = { initialRouteName: constants2.APPLICATION_VIEW, initiallyExpanded: true, application, installOnDemand: !closure_1_0.isGuildInstalled && !closure_1_0.isUserInstalled };
                openCustomKeyboard(obj2);
              }
            }, 0);
            let obj = tmp(channel[23]);
            const obj11 = { application_id: tmp.id };
            obj.track(constants.APP_PROFILE_OPEN_APP_BUTTON_CLICKED, obj11);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
        tmp = application1;
        closure_130_3(false);
        if (null != closure_0) {
          const obj5 = tmp(channel[9]);
          obj5.hideAllActionSheets();
          const obj12 = { recipientIds: closure_130_1 };
          c3 = 2;
          c4 = 1;
          const obj13 = { value: obj6.openPrivateChannel(obj12), done: false };
          obj6 = tmp(channel[20]);
          return obj13;
        }
      } catch (tmp34) {
        c4 = 3;
        throw tmp34;
      }
    }
  }), items);
  const Button = profileApplication(channel[17]).Button;
  const intl = profileApplication(channel[16]).intl;
  return <Button text={intl.string(profileApplication(channel[16]).t["Cia+A8"])} loading={first} onPress={callback} />;
}
let _asyncToGenerator = _asyncToGenerator_mod;
const getSection = ApplicationCommandIndexStore.getSection;
const AnalyticEvents = Constants.AnalyticEvents;
const AppLauncherRouteName = AppLauncherNativeConstants.AppLauncherRouteName;
const jsx = Fragment.jsx;
const result = size.fileFinishedImporting("modules/user_profile/native/AddOrOpenAppButton.tsx");

export default function AddOrOpenAppButton(arg0) {
  let application;
  let botUserId;
  let channel;
  let guildId;
  ({ application, channel } = arg0);
  ({ botUserId, guildId } = arg0);
  if (useIsAppDMDefault(channel)) {
    let tmp2;
    if (null != channel) {
      tmp2 = <OpenAppButton profileApplication={application} botUserId={botUserId} channel={channel} />;
    }
    return tmp2;
  }
  tmp2 = <AddAppButton application={application} guildId={guildId} />;
};
