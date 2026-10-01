// Module ID: 12231
// Function ID: 12232
// Name: AcceptInvite
// Dependencies: [32, 19, 17, 1074, 21, 4836, 576, 1370, 4531, 5893, 12232, 12235, 1397, 1432, 12240, 1479, 5919, 2]
// Exports: default

// Module 12231 (AcceptInvite)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1432 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1479 */;
import useToken from "useToken" /* 4531 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5893 */;
import Card_Card from "Card/Card" /* 5919 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
function getInviteState(invite) {
  let state1;
  if (invite != null) {
    state1 = invite.state;
  }
  let tmp2 = null == state1;
  if (tmp2) {
    let channel;
    if (invite != null) {
      channel = invite.channel;
    }
    tmp2 = null == channel;
  }
  if (null != invite) {
    if (null != invite.state) {
      if (!tmp2) {
        const state = invite.state;
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
                            const obj = GlobalUtils;
                            obj.assertNever(state);
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
  let obj3;
  const tmp = closure_11();
  const obj2 = { style: tmp.resolvingContainer, children: React4(hasOwnProperty, obj3) };
  const obj = useToken;
  obj3 = { color: obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  return React4(metroImportDefault, obj2);
}
function AcceptInviteCardComponent(invite) {
  let closure_2;
  let first;
  invite = invite.invite;
  [first, dependencyMap] = react.useState(getInviteState(invite));
  const items = [invite, first];
  const effect = react.useEffect(() => {
    const tmp = getInviteState(invite);
    if (tmp !== first) {
      const obj = DeprecatedLayoutAnimation;
      const result = obj.DeprecatedLayoutAnimation();
      closure_2(tmp);
    }
  }, items);
  if (null == invite) {
    return closure_9(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    const obj2 = { invite };
    const tmp16 = first(12232);
    const merged = Object.assign(invite);
    return closure_9(tmp16, obj2);
  } else if (tmp22.ERROR === first) {
    let obj = { invite };
    const tmp9 = first(12235);
    const merged1 = Object.assign(invite);
    return closure_9(tmp9, obj);
  } else {
    return closure_9(InviteResolving, {});
  }
}
({ ActivityIndicator: hasOwnProperty, ImageBackground: metroRequire, View: metroImportDefault } = react_native);
const InviteStates = Constants.InviteStates;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { parentContainer: obj2, imageStyle: { marginVertical: 0, resizeMode: "cover" }, cardContainer: obj3, cardContent: { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }, resolvingContainer: { padding: 64 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_11 = createStyles(obj);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  let guildSplashSource;
  let height;
  let items;
  let items1;
  let obj14;
  let obj3;
  let obj8;
  let width;
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_11();
  ({ height, width } = useWindowDimensionsDefault());
  let obj = invite;
  useWindowDimensionsDefault();
  if (invite == null) {
    obj = {};
  }
  const guild = obj.guild;
  let splash;
  if (guild != null) {
    splash = guild.splash;
  }
  if (null == splash) {
    guildSplashSource = tmp3(12240);
  } else {
    ({ id: obj2.id, splash: obj2.splash } = guild);
    const obj4 = { id: null, splash: null, size: width * obj3.getDevicePixelRatio() };
    const getGuildSplashSource = AvatarUtilsDefault.getGuildSplashSource;
    AvatarUtilsDefault;
    obj3 = ImageLoaderUtils;
    guildSplashSource = getGuildSplashSource(obj4);
  }
  const obj5 = { style: items, children: items1 };
  items = [tmp2.parentContainer, { height, width }];
  items1 = [, ];
  const obj6 = { source: guildSplashSource, imageStyle: tmp2.imageStyle, style: { height, width } };
  items1[0] = React4(metroRequire, obj6);
  const obj7 = { style: tmp2.cardContainer, children: React4(metroImportDefault, obj8) };
  obj8 = { style: tmp2.cardContent, children: React4(AcceptInviteCardComponent, obj14) };
  obj14 = { invite };
  const Card = Card_Card.Card;
  const merged1 = Object.assign(merged);
  items1[1] = React4(Card, obj7);
  return authStore(metroImportDefault, obj5);
};
