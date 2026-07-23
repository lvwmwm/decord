// Module ID: 11751
// Function ID: 91260
// Name: getInviteState
// Dependencies: [57, 31, 27, 653, 33, 4130, 689, 1327, 3834, 5162, 11752, 11755, 1392, 1426, 11760, 1450, 5167, 2]
// Exports: default

// Module 11751 (getInviteState)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import { InviteStates } from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_5;
let closure_6;
let closure_7;
let closure_9;
const require = arg1;
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
                            require(1327) /* isDiscordFrontendDevelopment */.assertNever(state);
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
  let obj = require(3834) /* map */;
  obj = { style: _createForOfIteratorHelperLoose().resolvingContainer };
  obj = { color: obj.useToken(importDefault(689).colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  obj.children = callback2(closure_5, obj);
  return callback2(closure_7, obj);
}
function AcceptInviteCardComponent(invite) {
  invite = invite.invite;
  let tmp = callback(React.useState(getInviteState(invite)), 2);
  const first = tmp[0];
  const dependencyMap = tmp[1];
  const items = [invite, first];
  const effect = React.useEffect(() => {
    const tmp = outer1_13(invite);
    if (tmp !== first) {
      const result = invite(5162).DeprecatedLayoutAnimation();
      dependencyMap(tmp);
      const obj = invite(5162);
    }
  }, items);
  if (null == invite) {
    return callback2(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    let obj = {};
    const merged = Object.assign(invite);
    obj["invite"] = invite;
    return callback2(first(11752), obj);
  } else if (constants.ERROR === first) {
    obj = {};
    const merged1 = Object.assign(invite);
    obj["invite"] = invite;
    return callback2(first(11755), obj);
  } else {
    return callback2(InviteResolving, {});
  }
}
({ ActivityIndicator: closure_5, ImageBackground: closure_6, View: closure_7 } = get_ActivityIndicator);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.parentContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.imageStyle = { marginVertical: 0, resizeMode: "cover" };
let obj1 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_SURFACE_HIGH };
_createForOfIteratorHelperLoose.cardContainer = obj1;
_createForOfIteratorHelperLoose.cardContent = { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" };
_createForOfIteratorHelperLoose.resolvingContainer = { padding: 64 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let closure_12 = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  let height;
  let width;
  invite = invite.invite;
  let obj = Object.create(null);
  obj.invite = 0;
  const merged = Object.assign(invite, obj);
  const tmp3 = _createForOfIteratorHelperLoose();
  ({ height, width } = importDefault(1450)());
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
    let guildSplashSource = importDefault(11760);
  } else {
    let obj1 = importDefault(1392);
    obj = {};
    ({ id: obj3.id, splash: obj3.splash } = guild);
    let obj3 = require(1426) /* isAttachmentLadderEnabled */;
    obj.size = width * obj3.getDevicePixelRatio();
    guildSplashSource = obj1.getGuildSplashSource(obj);
  }
  obj1 = { style: items };
  items = [tmp3.parentContainer, { height, width }];
  const obj2 = { source: guildSplashSource, imageStyle: tmp3.imageStyle, style: { height, width } };
  const items1 = [callback2(closure_6, obj2), ];
  obj3 = { style: tmp3.cardContainer };
  const obj4 = { style: tmp3.cardContent };
  const merged1 = Object.assign(merged);
  obj4.children = callback2(AcceptInviteCardComponent, { invite });
  obj3.children = callback2(closure_7, obj4);
  items1[1] = callback2(require(5167) /* getCardBackgroundToken */.Card, obj3);
  obj1.children = items1;
  return callback3(closure_7, obj1);
};
