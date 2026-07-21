// Module ID: 9036
// Function ID: 70985
// Dependencies: []

// Module 9036
importAll(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = arg1(dependencyMap[2]).GAME_CONSOLE_ALERT_MODAL_LOCATION;
({ InputModes: closure_5, PlatformTypes: closure_6 } = arg1(dependencyMap[3]));
const jsx = arg1(dependencyMap[4]).jsx;
const obj = {
  maybeShowPTTAlert(XBOX) {
    if (mode.getMode() === constants.PUSH_TO_TALK) {
      if (!obj2.UNSAFE_isDismissibleContentDismissed(arg1(dependencyMap[6]).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT)) {
        const obj = {};
        const intl = arg1(dependencyMap[7]).intl;
        obj[constants2.XBOX] = intl.string(arg1(dependencyMap[7]).t.bVZ7vy);
        const intl2 = arg1(dependencyMap[7]).intl;
        obj[constants2.PLAYSTATION] = intl2.string(arg1(dependencyMap[7]).t.6iqUsf);
        const intl3 = arg1(dependencyMap[7]).intl;
        obj[constants2.PLAYSTATION_STAGING] = intl3.string(arg1(dependencyMap[7]).t.6iqUsf);
        const arg1 = tmp5;
        if (null == obj[XBOX]) {
          let resolved = Promise.resolve();
        } else {
          resolved = new Promise((arg0) => {
            let obj = callback(closure_2[8]);
            obj = { title: tmp5 };
            const intl = tmp5(closure_2[7]).intl;
            obj.body = intl.string(arg0(closure_2[7]).t.bL21zs);
            obj.onConfirm = function onConfirm() {
              const result = arg0(closure_2[5]).UNSAFE_markDismissibleContentAsDismissed(arg0(closure_2[6]).DismissibleContent.CONSOLE_PTT_DISABLE_ALERT);
              arg0();
            };
            obj.show(obj);
          });
        }
        return resolved;
      }
      const obj2 = arg1(dependencyMap[5]);
    }
    return Promise.resolve();
  },
  showSelfDismissableAlert(reconnectPlatformType) {
    let body;
    let errorCodeMessage;
    let title;
    const arg1 = reconnectPlatformType.reconnectPlatformType;
    ({ title, body, errorCodeMessage } = reconnectPlatformType);
    let obj = importDefault(dependencyMap[8]);
    obj = { title };
    obj = { body, errorCodeMessage, dismissCallback: importDefault(dependencyMap[8]).close };
    obj.body = jsx(arg1(dependencyMap[9]).SelfDismissibleAlertBody, obj);
    obj.onConfirm = function onConfirm() {
      if (null != reconnectPlatformType) {
        const obj = { platformType: reconnectPlatformType, location: closure_4 };
        callback(closure_2[10])(obj);
      }
    };
    obj.show(obj);
  }
};
const tmp3 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[11]).fileFinishedImporting("modules/game_console/native/GameConsoleAlertUtils.tsx");

export default obj;
