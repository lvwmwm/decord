// Module ID: 14274
// Function ID: 14275
// Name: AcceptInvite
// Dependencies: [32, 19, 17, 1072, 21, 5009, 575, 1380, 5591, 5604, 14275, 14278, 1410, 1445, 14283, 1492, 5712, 6971, 2]
// Exports: default

// Module 14274 (AcceptInvite)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1445 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1492 */;
import useToken from "useToken" /* 5591 */;
import DeprecatedLayoutAnimation from "DeprecatedLayoutAnimation" /* 5604 */;
import FastImageDefault from "FastImage" /* 5712 */;
import Card_Card from "Card/Card" /* 6971 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj2;
let obj3;
let obj4;
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
  const tmp = closure_10();
  const obj2 = { style: tmp.resolvingContainer, children: metroImportAll(hasOwnProperty, obj3) };
  const obj = useToken;
  obj3 = { color: obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  return metroImportAll(metroRequire, obj2);
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
    return closure_8(InviteResolving, {});
  } else if (constants.DETAILS === first) {
    const obj2 = { invite };
    const tmp16 = first(14275);
    const merged = Object.assign(invite);
    return closure_8(tmp16, obj2);
  } else if (tmp22.ERROR === first) {
    let obj = { invite };
    const tmp9 = first(14278);
    const merged1 = Object.assign(invite);
    return closure_8(tmp9, obj);
  } else {
    return closure_8(InviteResolving, {});
  }
}
({ ActivityIndicator: hasOwnProperty, View: metroRequire, StyleSheet } = react_native);
const InviteStates = Constants.InviteStates;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { parentContainer: obj2, imageStyle: obj3, cardContainer: obj4, cardContent: { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }, resolvingContainer: { padding: 64 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: 0, resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_10 = createStyles(obj);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
let result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  let guildSplashSource;
  let height;
  let items;
  let items1;
  let items2;
  let obj16;
  let obj3;
  let obj7;
  let obj9;
  let width;
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_10();
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
    guildSplashSource = tmp3(14283);
  } else {
    ({ id: obj2.id, splash: obj2.splash } = guild);
    const obj4 = { id: null, splash: null, size: width * obj3.getDevicePixelRatio() };
    const getGuildSplashSource = AvatarUtilsDefault.getGuildSplashSource;
    AvatarUtilsDefault;
    obj3 = ImageLoaderUtils;
    guildSplashSource = getGuildSplashSource(obj4);
  }
  const obj5 = { style: items, children: items2 };
  items = [tmp2.parentContainer, { height, width }];
  const obj6 = { style: { height, width }, children: metroImportAll(FastImageDefault, obj7) };
  obj7 = { source: guildSplashSource, style: items1 };
  items1 = [tmp2.imageStyle, { height, width }];
  items2 = [metroImportAll(metroRequire, obj6), ];
  const obj8 = { style: tmp2.cardContainer, children: metroImportAll(metroRequire, obj9) };
  obj9 = { style: tmp2.cardContent, children: metroImportAll(AcceptInviteCardComponent, obj16) };
  obj16 = { invite };
  const Card = Card_Card.Card;
  const merged1 = Object.assign(merged);
  items2[1] = metroImportAll(Card, obj8);
  return React4(metroRequire, obj5);
};
