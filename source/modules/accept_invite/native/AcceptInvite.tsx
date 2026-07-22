// Module ID: 11741
// Function ID: 91211
// Name: getInviteState
// Dependencies: []
// Exports: default

// Module 11741 (getInviteState)
function getInviteState(invite) {
  let state;
  if (null != invite) {
    state = invite.state;
  }
  let tmp2 = null == state;
  if (tmp2) {
    let channel;
    if (null != invite) {
      channel = invite.channel;
    }
    tmp2 = null == channel;
  }
  if (null != invite) {
    if (null != invite.state) {
      if (!tmp2) {
        state = invite.state;
        if (InviteStates.RESOLVED !== state) {
          if (InviteStates.ACCEPTED !== state) {
            if (InviteStates.EXPIRED !== state) {
              if (InviteStates.BANNED !== state) {
                if (InviteStates.ERROR !== state) {
                  if (InviteStates.RESOLVING !== state) {
                    if (InviteStates.APP_NOT_OPENED !== state) {
                      if (InviteStates.APP_OPENED !== state) {
                        if (InviteStates.APP_OPENING !== state) {
                          if (InviteStates.ACCEPTING !== state) {
                            arg1(dependencyMap[7]).assertNever(state);
                          }
                        }
                      }
                    }
                  }
                  return constants.LOADING;
                }
              }
            }
            return constants.ERROR;
          }
        }
        return constants.DETAILS;
      }
    }
  }
  return constants.LOADING;
}
function InviteResolving() {
  let obj = arg1(dependencyMap[8]);
  obj = { style: callback4().resolvingContainer };
  obj = { color: obj.useToken(importDefault(dependencyMap[6]).colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  obj.children = callback2(closure_5, obj);
  return callback2(closure_7, obj);
}
function AcceptInviteCardComponent(invite) {
  invite = invite.invite;
  const arg1 = invite;
  const tmp = callback(React.useState(getInviteState(invite)), 2);
  const first = tmp[0];
  const importDefault = first;
  let closure_2 = tmp[1];
  const items = [invite, first];
  const effect = React.useEffect(() => {
    const tmp = callback2(invite);
    if (tmp !== first) {
      const result = invite(callback[9]).DeprecatedLayoutAnimation();
      callback(tmp);
      const obj = invite(callback[9]);
    }
  }, items);
  if (null == invite) {
    return callback2(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    let obj = {};
    const merged = Object.assign(invite);
    obj["invite"] = invite;
    return callback2(importDefault(closure_2[10]), obj);
  } else if (constants.ERROR === first) {
    obj = {};
    const merged1 = Object.assign(invite);
    obj["invite"] = invite;
    return callback2(importDefault(closure_2[11]), obj);
  } else {
    return callback2(InviteResolving, {});
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ActivityIndicator: closure_5, ImageBackground: closure_6, View: closure_7 } = arg1(dependencyMap[2]));
const InviteStates = arg1(dependencyMap[3]).InviteStates;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_9, jsxs: closure_10 } = arg1(dependencyMap[4]));
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_BASE_LOW, padding: "string", borderRadius: "color" };
obj.parentContainer = obj;
obj.imageStyle = {};
const tmp3 = arg1(dependencyMap[4]);
obj.cardContainer = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
obj.cardContent = {};
obj.resolvingContainer = { padding: 64 };
let closure_11 = obj.createStyles(obj);
let closure_12 = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
const obj1 = { backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_SURFACE_HIGH };
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  let height;
  let width;
  invite = invite.invite;
  let obj = Object.create(null);
  obj.invite = 0;
  const merged = Object.assign(invite, obj);
  const tmp3 = callback4();
  ({ height, width } = importDefault(dependencyMap[15])());
  obj = invite;
  if (null == invite) {
    obj = {};
  }
  const guild = obj.guild;
  let splash;
  if (null != guild) {
    splash = guild.splash;
  }
  if (null == splash) {
    let guildSplashSource = importDefault(dependencyMap[14]);
  } else {
    let obj1 = importDefault(dependencyMap[12]);
    obj = {};
    ({ id: obj3.id, splash: obj3.splash } = guild);
    let obj3 = arg1(dependencyMap[13]);
    obj.size = width * obj3.getDevicePixelRatio();
    guildSplashSource = obj1.getGuildSplashSource(obj);
  }
  obj1 = { style: items };
  const items = [tmp3.parentContainer, { height, width }];
  const obj2 = { source: guildSplashSource, imageStyle: tmp3.imageStyle, style: { height, width } };
  const items1 = [callback2(closure_6, obj2), ];
  obj3 = { style: tmp3.cardContainer };
  const obj4 = { style: tmp3.cardContent };
  const merged1 = Object.assign(merged);
  obj4.children = callback2(AcceptInviteCardComponent, { invite });
  obj3.children = callback2(closure_7, obj4);
  items1[1] = callback2(arg1(dependencyMap[16]).Card, obj3);
  obj1.children = items1;
  return callback3(closure_7, obj1);
};
