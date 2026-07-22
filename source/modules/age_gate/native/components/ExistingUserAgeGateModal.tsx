// Module ID: 15863
// Function ID: 121379
// Name: onClose
// Dependencies: []
// Exports: default

// Module 15863 (onClose)
function onClose() {
  arg1(dependencyMap[10]).closeAgeGateModal();
}
function renderHeaderTitle() {
  return null;
}
function getScreens(arg0) {
  const arg1 = arg0;
  let fn = function generateOnBack(arg0) {
    if (constants.NSFW_SERVER_INVITE !== arg0) {
      if (constants.NSFW_SERVER_INVITE_EMBED !== arg0) {
        if (constants.JOIN_LARGE_GUILD_UNDERAGE !== arg0) {
          if (constants.ACCESS_LARGE_GUILD_UNDERAGE !== arg0) {
            if (constants.LARGE_GUILD !== arg0) {
              if (constants.NSFW_SERVER !== arg0) {
                if (constants.NSFW_CHANNEL === arg0) {
                  return () => {
                    const guildId = store.getGuildId();
                    if (null != guildId) {
                      callback(closure_2[11]).nsfwReturnToSafety(guildId);
                      const obj = callback(closure_2[11]);
                    }
                    arg0(closure_2[10]).closeAgeGateModal(arg0);
                  };
                } else if (constants.NSFW_VOICE_CHANNEL === arg0) {
                  return () => {
                    let obj = callback(closure_2[12]);
                    obj.popAll();
                    obj = { source: arg0, action: constants.AGE_GATE_CLOSE };
                    callback(closure_2[13]).track(constants2.AGE_GATE_ACTION, obj);
                  };
                } else {
                  return constants.FAMILY_CENTER === arg0 ? () => {
                    arg0(closure_2[10]).closeAgeGateModal(arg0);
                  } : undefined;
                }
              }
            }
          }
        }
        return () => {
          const guildId = store.getGuildId();
          if (null != guildId) {
            callback(closure_2[11]).nsfwReturnToSafety(guildId);
            const obj = callback(closure_2[11]);
          }
          arg0(closure_2[10]).closeAgeGateModal(arg0);
          const obj2 = arg0(closure_2[10]);
          callback(closure_2[12]).popAll();
        };
      }
    }
    return () => {
      arg0(closure_2[10]).closeAgeGateModal(arg0);
    };
  }(arg0);
  if (null == fn) {
    fn = () => {

    };
  }
  let obj = {};
  obj = {
    fullscreen: true,
    impressionName: arg1(dependencyMap[14]).ImpressionNames.USER_AGE_GATE,
    impressionProperties: { existing_user: true },
    headerLeft: arg1(dependencyMap[15]).getHeaderBackButton(fn),
    headerTitle: renderHeaderTitle,
    render(arg0, arg1) {
      const tmp = function generateOnSuccess(arg0, arg1) {
        if (arg0 === constants.NSFW_SERVER_INVITE) {
          if (obj.isIOS()) {
            let fn = () => {
              arg1.push(NSFWGateGuild.NSFWGateGuild);
              let obj = callback(closure_2[7]);
              obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(closure_2[8]) };
              const intl = arg1(closure_2[9]).intl;
              obj.content = intl.string(arg1(closure_2[9]).t.gUiIGZ);
              obj.open(obj);
            };
          }
          return fn;
        }
        fn = () => {
          let obj = arg1(closure_2[10]);
          obj.closeAgeGateModal();
          obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(closure_2[8]) };
          const intl = arg1(closure_2[9]).intl;
          obj.content = intl.string(arg1(closure_2[9]).t.gUiIGZ);
          callback(closure_2[7]).open(obj);
        };
      }(arg0, arg1);
      return callback2(callback(closure_2[16]), {
        onSuccess: function generateOnSuccess(arg0, arg1) {
          if (arg0 === constants.NSFW_SERVER_INVITE) {
            if (obj.isIOS()) {
              let fn = () => {
                arg1.push(NSFWGateGuild.NSFWGateGuild);
                let obj = callback(closure_2[7]);
                obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(closure_2[8]) };
                const intl = arg1(closure_2[9]).intl;
                obj.content = intl.string(arg1(closure_2[9]).t.gUiIGZ);
                obj.open(obj);
              };
            }
            return fn;
          }
          fn = () => {
            let obj = arg1(closure_2[10]);
            obj.closeAgeGateModal();
            obj = { key: "AGE_GATE_AGE_VERIFIED", icon: callback(closure_2[8]) };
            const intl = arg1(closure_2[9]).intl;
            obj.content = intl.string(arg1(closure_2[9]).t.gUiIGZ);
            callback(closure_2[7]).open(obj);
          };
        }(arg0, arg1),
        onClose: closure_10,
        source: arg0
      });
    }
  };
  obj[closure_7.AgeGate] = obj;
  obj[closure_7.AgeGateConfirm] = {
    fullscreen: true,
    headerTitle: renderHeaderTitle,
    render(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj["source"] = arg0;
      return callback2(callback(closure_2[17]), obj);
    }
  };
  obj = { fullscreen: true };
  const obj3 = arg1(dependencyMap[15]);
  obj.headerLeft = arg1(dependencyMap[15]).getHeaderBackButton(fn);
  obj.impressionName = arg1(dependencyMap[14]).ImpressionNames.USER_AGE_GATE_VERIFY;
  obj.headerTitle = renderHeaderTitle;
  obj.render = function render() {
    return callback2(callback(closure_2[18]), { source: arg0 });
  };
  obj[closure_7.Pawtect] = obj;
  obj[closure_7.Blocked] = {
    fullscreen: true,
    headerTitle: renderHeaderTitle,
    impressionProperties: { existing_user: true },
    render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(closure_2[19]), {});
    }
  };
  const obj1 = { headerTitle: renderHeaderTitle };
  const obj5 = arg1(dependencyMap[15]);
  obj1.headerLeft = arg1(dependencyMap[15]).getHeaderBackButton(fn);
  obj1.render = function render() {
    return callback2(callback(closure_2[20]), { onClose: closure_10 });
  };
  obj[closure_7.NSFWGateGuild] = obj1;
  return obj;
}
let closure_3 = importAll(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
({ AgeGateAnalyticAction: closure_5, AgeGateSource: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = arg1(dependencyMap[3]).ExistingUserAgeGateScreens;
const AnalyticEvents = arg1(dependencyMap[4]).AnalyticEvents;
const jsx = arg1(dependencyMap[5]).jsx;
const tmp2 = arg1(dependencyMap[2]);
const result = arg1(dependencyMap[24]).fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateModal.tsx");

export default function ExistingUserAgeGateModal(source) {
  source = source.source;
  const arg1 = source;
  let obj = arg1(dependencyMap[21]);
  const shouldAgeVerifyForAgeGate = obj.useShouldAgeVerifyForAgeGate();
  let closure_1 = React.useRef(shouldAgeVerifyForAgeGate);
  const items = [source];
  const watchAgeVerificationStatusChange = arg1(dependencyMap[22]).useWatchAgeVerificationStatusChange(React.useCallback(() => {
    if (ref.current) {
      source(closure_2[10]).closeAgeGateModal(source);
      const obj = source(closure_2[10]);
    }
  }, items));
  obj = {};
  const items1 = [source];
  obj.screens = React.useMemo(() => callback(source), items1);
  obj.initialRouteName = shouldAgeVerifyForAgeGate ? closure_7.Pawtect : closure_7.AgeGate;
  const intl = arg1(dependencyMap[9]).intl;
  obj.headerBackTitle = intl.string(arg1(dependencyMap[9]).t.13/7kX);
  return jsx(arg1(dependencyMap[23]).Navigator, obj);
};
