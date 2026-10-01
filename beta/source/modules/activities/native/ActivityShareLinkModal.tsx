// Module ID: 14048
// Function ID: 14049
// Name: ActivityShareLinkModal
// Dependencies: [5, 32, 19, 17, 2045, 1372, 2044, 10320, 4829, 21, 4836, 576, 504, 10444, 11614, 14047, 6589, 1370, 14049, 6876, 7095, 4528, 1115, 6610, 4527, 1479, 1613, 1364, 5943, 7288, 5936, 6795, 4775, 5437, 10447, 10458, 2]
// Exports: default

// Module 14048 (ActivityShareLinkModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl4 from "intl" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import ToastUtils from "ToastUtils" /* 4527 */;
import LinkIcon from "LinkIcon" /* 4775 */;
import MessageConstants from "MessageConstants" /* 4829 */;
import ClipboardUtils from "ClipboardUtils" /* 6610 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6795 */;
import HeaderShared from "HeaderShared" /* 7288 */;
import UserRowConstants from "UserRowConstants" /* 10320 */;
import formatResults from "formatResults" /* 10444 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 11614 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 14047 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import UserStore from "UserStore" /* 1372 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2044 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, channel, closure_0;

let closure_12;
let map1;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
let UserRowModes = UserRowConstants.UserRowModes;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerLeftContainer: obj2, headerRightContainer: obj3, header: obj4, container: obj5 };
obj2 = { paddingLeft: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingRight: nativeDefault.space.PX_16 };
obj4 = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj5 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_14 = createStyles(obj);
let result = size.fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default function ActivityShareLinkModal(applicationId) {
  let c6;
  let closure_10;
  let intl;
  let items10;
  let items9;
  let num;
  let obj5;
  let stringResult;
  let tmp24;
  let tmp7;
  applicationId = applicationId.applicationId;
  const customId = applicationId.customId;
  let linkId = applicationId.linkId;
  const message = applicationId.message;
  const onShare = applicationId.onShare;
  c6 = undefined;
  let first1;
  let first3;
  let tmp = first3();
  let tmp2 = applicationId;
  const tmp3 = linkId;
  let obj = applicationId(linkId[12]);
  const items = [first1];
  const stateFromStores = obj.useStateFromStores(items, () => first1.getConnectedActivityChannelId());
  const items1 = [stateFromStores];
  const memo = stateFromStores.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      const obj = formatResults;
      destinationIdFromChannelId = obj.getDestinationIdFromChannelId(tmp);
    }
    return destinationIdFromChannelId;
  }, items1);
  let tmp6 = onShare(stateFromStores.useState(false), 2);
  [tmp7, c6] = tmp6;
  let tmp8 = onShare(stateFromStores.useState(false), 2);
  const first = tmp8[0];
  const currentUser = tmp8[1];
  const tmp10 = onShare(stateFromStores.useState([]), 2);
  first1 = tmp10[0];
  UserRowModes = tmp10[1];
  const callback = stateFromStores.useCallback((arg0) => {
    closure_10(arg0);
  }, []);
  let obj2 = applicationId(linkId[12]);
  const items2 = [currentUser];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => currentUser.getCurrentUser());
  let tmp13 = onShare(stateFromStores.useState(""), 2);
  const first2 = tmp13[0];
  let tmp15 = tmp13[1];
  let closure_13 = tmp15;
  const items3 = [applicationId, stateFromStores1, customId, linkId, tmp15];
  const effect = stateFromStores.useEffect(() => {
    let id;
    const obj = { applicationId, referrerId: id, customId, linkId };
    id = undefined;
    const getActivityLaunchURL = getApplicationInstallURL.getActivityLaunchURL;
    getApplicationInstallURL;
    const tmp = closure_13;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    tmp(getActivityLaunchURL(obj));
  }, items3);
  const items4 = [first, onShare];
  const callback1 = stateFromStores.useCallback(() => {
    onShare(false, first);
    const obj = openActivityShareLinkModal;
    const result = obj.closeActivityShareLinkModal();
  }, items4);
  const items5 = [applicationId];
  first3 = onShare(customId(linkId[16])(items5), 1)[0];
  const items6 = [first3, first, first2, message, onShare, first1];
  const items7 = [first2];
  const callback2 = stateFromStores.useCallback(message(function*(arg0, value) {
    let closure_1;
    let intl;
    let obj7;
    if (c3 === 2) {
      c3 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const tmp12 = arg0;
      if (tmp4 === 3) {
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
          let tmp2;
          c3 = 2;
          if (0 === linkId) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              tmp2 = undefined;
              if (null != first3) {
                let tmp6 = globalThis;
                linkId = 1;
                c3 = 1;
                let obj4 = { value: Promise.all(first1.map(tmp(linkId[13]).getOrResolveChannelIdFromDestinationId)), done: false };
                return obj4;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            tmp = value.filter(tmp(linkId[17]).isNotNullish);
            let obj5 = tmp(linkId[18]);
            tmp2 = obj5.resolveActivityShareMessageContent(closure_129_3, closure_129_14, closure_129_12);
            const flag = true;
            closure_129_6(true);
            const item = tmp.forEach((() => {
              closure_0 = closure_1_3(function*(arg0, value) {
                let obj2;
                closure_0 = arg0;
                if (c1 === 2) {
                  c1 = 3;
                  throw new TypeError("Generator functions may not be called on executing generators");
                } else if (tmp2 === 3) {
                  if (arg0 === 1) {
                    throw value;
                  } else if (arg0 === 2) {
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    return { value: "HermesInternal", done: null };
                  }
                } else {
                  try {
                    c1 = 2;
                    if (0 === c2) {
                      if (arg0 === 1) {
                        c1 = 3;
                        throw value;
                      } else if (arg0 === 2) {
                        c1 = 3;
                        const obj4 = { value, done: true };
                        return obj4;
                      } else {
                        channel = channel.getChannel(closure_0);
                        if (null != channel) {
                          const tmp6 = closure_2_1(closure_2_2[19]);
                          const sendMessage = tmp6.sendMessage;
                          const obj5 = { location: constants.ACTIVITY_SHARE };
                          c2 = 1;
                          c1 = 1;
                          const obj6 = { value: sendMessage(closure_0, obj2.parse(channel, c1), false, obj5), done: false };
                          obj2 = closure_2_1(closure_2_2[20]);
                          return obj6;
                        }
                      }
                    } else if (arg0 === 1) {
                      c1 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c1 = 3;
                      const obj = { value, done: true };
                      return obj;
                    }
                    c1 = 3;
                    return { value: "HermesInternal", done: null };
                  } catch (tmp12) {
                    c1 = 3;
                    throw tmp12;
                  }
                }
              });
              return function() {
                return closure_0(...arguments);
              };
            })());
            let obj6 = { key: "ACTIVITY_SHARE_LINK_SUCCESS", content: intl.formatToPlainString(tmp(linkId[22]).t.jQULqL, obj7) };
            const open = tmp2(linkId[21]).open;
            const tmp29 = tmp2(linkId[21]);
            intl = tmp(linkId[22]).intl;
            obj7 = { applicationName: closure_129_14.name };
            open(obj6);
            closure_129_4(true, closure_129_7);
            const obj8 = tmp(linkId[15]);
            const result = obj8.closeActivityShareLinkModal();
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        } catch (tmp10) {
          c3 = 3;
          throw tmp10;
        }
      }
    }
  }), items6);
  const onPress = stateFromStores.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(first2);
    currentUser(true);
    const obj2 = ToastUtils;
    obj2.presentLinkCopied();
  }, items7);
  let height = customId(linkId[25])({ ignoreKeyboard: true }).height;
  const items8 = [height];
  const top = customId(linkId[26])().top;
  let obj3 = {
    style: stateFromStores.useMemo(() => {
      height = "100%";
      PlatformUtils;
      return { height };
    }, items8),
    children: items9
  };
  let obj7 = {
    headerStyle: tmp.header,
    title: intl.string(applicationId(linkId[22]).t.r9qKow),
    headerTitle(children) {
      const obj = { title: children.children, subtitle: message, variant: "redesign/heading-18/bold" };
      return first2(HeaderShared.GenericHeaderTitle, obj);
    },
    headerLeft: obj5.getHeaderCloseButton(callback1),
    headerRight(arg0) {
      let intl;
      const obj = { onPress, accessibilityLabel: intl.string(intl4.t.Xrt5Po), IconComponent: LinkIcon.LinkIcon };
      const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
      const merged = Object.assign(arg0);
      intl = intl4.intl;
      return first2(HeaderActionButton, obj);
    },
    headerLeftContainerStyle: null,
    headerRightContainerStyle: null,
    headerStatusBarHeight: num + tmp18(tmp3[11]).space.PX_8,
    headerTitleAlign: "center"
  };
  const Header = applicationId(linkId[28]).Header;
  intl = applicationId(linkId[22]).intl;
  obj5 = applicationId(linkId[30]);
  ({ headerLeftContainer: obj4.headerLeftContainerStyle, headerRightContainer: obj4.headerRightContainerStyle } = tmp);
  let obj6 = applicationId(linkId[27]);
  num = 0;
  if (!obj6.isIOS()) {
    num = top;
  }
  items9 = [tmp23(Header, obj7), ];
  let obj8 = { style: tmp.container, children: items10 };
  items10 = [tmp23(tmp18(tmp3[33]), { absolute: true }), , ];
  const obj9 = { disableGradient: true, disableStickySections: true, initialSelectedDestinations: [], insetEnd: 0, onSelectedDestinationChange: callback, originDestination: memo, rowMode: UserRowModes.TOGGLE };
  items10[1] = first2(customId(tmp3[34]), obj9);
  const obj10 = { disabled: tmp7, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: first1.length > 0, loading: tmp7, onPress: tmp24, text: stringResult };
  tmp24 = undefined;
  const ModalFloatingAction = tmp2(tmp3[35]).ModalFloatingAction;
  if (!tmp7) {
    tmp24 = callback2;
  }
  if (1 === first1.length) {
    const intl3 = tmp2(tmp3[22]).intl;
    stringResult = intl3.string(tmp2(tmp3[22]).t.TXNS7S);
  } else {
    const intl2 = tmp2(tmp3[22]).intl;
    const obj16 = { count: first1.length };
    stringResult = intl2.formatToPlainString(tmp2(tmp3[22]).t.jWtYUm, obj16);
  }
  items10[2] = first2(ModalFloatingAction, obj10);
  items9[1] = closure_13(c6, obj8);
  return closure_13(c6, obj3);
};
