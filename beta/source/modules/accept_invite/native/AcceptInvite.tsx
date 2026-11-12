// Module ID: 14595
// Function ID: 14596
// Name: AcceptInvite
// Dependencies: [19, 17, 1072, 21, 5170, 575, 1652, 7073, 1380, 5756, 7691, 14596, 14599, 1411, 1446, 14604, 1493, 5874, 2]
// Exports: default

// Module 14595 (AcceptInvite)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import GlobalUtils from "GlobalUtils" /* 1380 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1411 */;
import ImageLoaderUtils from "ImageLoaderUtils" /* 1446 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import useToken from "useToken" /* 5756 */;
import FastImageDefault from "FastImage" /* 5874 */;
import Card_Card from "Card/Card" /* 7073 */;
import useEaseInEaseOutLayoutAnimationsDefault from "useEaseInEaseOutLayoutAnimations" /* 7691 */;
import InviteDetailsDefault from "InviteDetails" /* 14596 */;
import InviteErrorDefault from "InviteError" /* 14599 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5170 */;
import size from "module_2" /* 2 */;

const module_1652 = _mod1652;

let StyleSheet;
let c3;
let closure_4;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
function InviteResolving() {
  let obj3;
  const tmp = closure_8();
  const obj2 = { style: tmp.resolvingContainer, children: metroRequire(_false, obj3) };
  const obj = useToken;
  obj3 = { color: obj.useToken(nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT), size: "large" };
  return metroRequire(React3, obj2);
}
function AcceptInviteCardComponent(invite) {
  let entering;
  let exiting;
  invite = invite.invite;
  let state1;
  const tmp = closure_8();
  ({ entering, exiting } = useEaseInEaseOutLayoutAnimationsDefault());
  useEaseInEaseOutLayoutAnimationsDefault();
  if (invite != null) {
    state1 = invite.state;
  }
  let tmp6 = null == state1;
  if (tmp6) {
    let channel;
    if (invite != null) {
      channel = invite.channel;
    }
    tmp6 = null == channel;
  }
  if (null != invite) {
    if (null != invite.state) {
      let LOADING;
      if (!tmp6) {
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
                  LOADING = constants.LOADING;
                }
              }
            }
            LOADING = constants.ERROR;
          }
        }
        LOADING = constants.DETAILS;
      }
      let tmp14Result = metroRequire(InviteResolving, {});
      if (null != invite) {
        if (LOADING === constants.DETAILS) {
          const obj2 = { invite };
          const tmp2Result = InviteDetailsDefault;
          const merged = Object.assign(invite);
          tmp14Result = tmp14(tmp2Result, obj2);
        }
        const obj3 = { style: tmp.cardState, entering, exiting, children: tmp14Result };
        return metroRequire(module_1652.View, obj3, LOADING);
      }
      const tmp18 = null != invite && LOADING === constants.ERROR;
      if (tmp18) {
        const obj4 = { invite };
        const tmp2Result2 = InviteErrorDefault;
        const merged1 = Object.assign(invite);
        tmp14Result = tmp14(tmp2Result2, obj4);
      }
    }
  }
  LOADING = constants.LOADING;
}
({ ActivityIndicator: c3, View: closure_4, StyleSheet } = react_native);
const InviteStates = Constants.InviteStates;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { parentContainer: obj2, imageStyle: obj3, cardContainer: obj4, cardContent: { padding: 16, flex: 1, justifyContent: "center", alignItems: "center", width: "100%" }, cardState: { alignSelf: "stretch", alignItems: "center", justifyContent: "center" }, resolvingContainer: { padding: 64 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
createStyles = createStyles.createStyles;
obj3 = { marginVertical: 0, resizeMode: "cover" };
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4 = { position: "absolute", flex: 1, width: "90%", alignItems: "center", justifyContent: "center", padding: 0, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let closure_8 = createStyles(obj);
let closure_9 = module_1652.createAnimatedComponent(Card_Card.Card);
const constants = { LOADING: 0, [0]: "LOADING", DETAILS: 1, [1]: "DETAILS", ERROR: 2, [2]: "ERROR" };
const result = size.fileFinishedImporting("modules/accept_invite/native/AcceptInvite.tsx");

export default function AcceptInvite(invite) {
  let guildSplashSource;
  let height;
  let items;
  let items1;
  let items2;
  let obj10;
  let obj18;
  let obj3;
  let obj7;
  let obj9;
  let width;
  invite = invite.invite;
  const merged = Object.assign(invite, Object.assign({ invite: 0 }));
  const tmp2 = closure_8();
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
    guildSplashSource = tmp3(14604);
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
  const obj6 = { style: { height, width }, children: metroRequire(FastImageDefault, obj7) };
  const layout = tmp3(7691)().layout;
  obj7 = { source: guildSplashSource, style: items1 };
  items1 = [tmp2.imageStyle, { height, width }];
  items2 = [metroRequire(React3, obj6), ];
  const obj8 = { skipEntering: true, children: metroRequire(closure_9, obj9) };
  obj9 = { style: tmp2.cardContainer, layout, children: metroRequire(React3, obj10) };
  obj10 = { style: tmp2.cardContent, children: metroRequire(AcceptInviteCardComponent, obj18) };
  obj18 = { invite };
  const LayoutAnimationConfig = _mod1652.LayoutAnimationConfig;
  const merged1 = Object.assign(merged);
  items2[1] = metroRequire(LayoutAnimationConfig, obj8);
  return metroImportDefault(React3, obj5);
};
