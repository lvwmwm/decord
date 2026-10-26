// Module ID: 15741
// Function ID: 15742
// Name: ActivityShareLinkModal
// Dependencies: [5, 32, 19, 17, 4823, 1392, 4822, 10616, 4976, 21, 4971, 587, 558, 576, 504, 12904, 12124, 15740, 7257, 1388, 15742, 7566, 7755, 5663, 1128, 7285, 5662, 7485, 5678, 1499, 1384, 12914, 10625, 12915, 12936, 2]

// Module 15741 (ActivityShareLinkModal)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1128 */;
import PlatformUtils from "PlatformUtils" /* 1384 */;
import MessageConstants from "MessageConstants" /* 4976 */;
import ToastUtils from "ToastUtils" /* 5662 */;
import LinkIcon from "LinkIcon" /* 5678 */;
import ClipboardUtils from "ClipboardUtils" /* 7285 */;
import HeaderActionButton2 from "HeaderActionButton" /* 7485 */;
import UserRowConstants from "UserRowConstants" /* 10616 */;
import getApplicationInstallURL from "getApplicationInstallURL" /* 12124 */;
import formatResults from "formatResults" /* 12904 */;
import openActivityShareLinkModal from "openActivityShareLinkModal" /* 15740 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import UserStore_mod from "UserStore" /* 1392 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4822 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c1, c2, c3, channel, closure_0;

let closure_12;
let map1;
let obj2;
const View = react_native.View;
let UserStore = UserStore_mod;
let UserRowModes = UserRowConstants.UserRowModes;
const MessageSendLocation = MessageConstants.MessageSendLocation;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = { container: obj2 };
obj2 = { flex: 1, display: "flex", backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_14 = createStyles.createStyles(obj);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function ActivityShareLinkModal(applicationId) {
  let closure_10;
  let connectedActivityChannelId;
  let currentUser;
  let linkId;
  let onPress;
  let tmp15;
  let tmp18;
  let tmp19;
  let tmp5;
  let tmp6;
  let tmp = applicationId;
  const tmp2 = linkId;
  let obj = applicationId(linkId[13]);
  const cResult = obj.c(66);
  applicationId = applicationId.applicationId;
  const customId = applicationId.customId;
  linkId = applicationId.linkId;
  const channelId = applicationId.channelId;
  const message = applicationId.message;
  const onShare = applicationId.onShare;
  closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [connectedActivityChannelId];
    const fn = function b() {
      return connectedActivityChannelId.getConnectedActivityChannelId();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(tmp2[14]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] !== stateFromStores) {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      const tmpResult3 = tmp(tmp2[15]);
      destinationIdFromChannelId = tmpResult3.getDestinationIdFromChannelId(stateFromStores);
    }
    cResult[2] = stateFromStores;
    cResult[3] = destinationIdFromChannelId;
  }
  [r10051, View] = message(onShare.useState(false), 2);
  message(onShare.useState(false), 2);
  const tmp14 = message(onShare.useState(false), 2);
  let closure_7 = tmp14[0];
  UserStore = tmp14[1];
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [];
    cResult[4] = items1;
    tmp15 = items1;
  } else {
    tmp15 = cResult[4];
  }
  const tmp12Result = message(onShare.useState(tmp15), 2);
  connectedActivityChannelId = tmp12Result[0];
  UserRowModes = tmp12Result[1];
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        closure_10(arg0);
      }
    }
    cResult[5] = V;
  } else {
    class V {
      constructor(arg0) {
        closure_10(arg0);
      }
    }
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class V {
      constructor(arg0) {
        closure_10(arg0);
      }
    }
    const items2 = [UserStore];
    class W {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[6] = items2;
    cResult[7] = W;
    tmp19 = W;
    tmp18 = items2;
  } else {
    class V {
      constructor(arg0) {
        closure_10(arg0);
      }
    }
    tmp19 = cResult[7];
  }
  const tmpResult4 = tmp(tmp2[14]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp18, tmp19);
  const tmp12Result2 = message(onShare.useState(""), 2);
  let closure_12 = tmp12Result2[0];
  let closure_13 = tmp12Result2[1];
  if (cResult[8] === applicationId) {
    class V {
      constructor(arg0) {
        closure_10(arg0);
      }
    }
  }
  cResult[8] = applicationId;
  cResult[9] = channelId;
  cResult[10] = customId;
  cResult[11] = linkId;
  if (stateFromStores1 != null) {
    class V {
      constructor(arg0) {
        closure_10(arg0);
      }
    }
  }
  class J {
    constructor() {
      let id;
      const obj = { applicationId, referrerId: id, customId, linkId, channelId };
      id = undefined;
      const getActivityLaunchURL = getApplicationInstallURL.getActivityLaunchURL;
      getApplicationInstallURL;
      const tmp = closure_13;
      if (stateFromStores1 != null) {
        id = stateFromStores1.id;
      }
      tmp(getActivityLaunchURL(obj));
    }
  }
  cResult[12] = undefined;
  cResult[13] = J;
}) : (function ActivityShareLinkModal(applicationId) {
  let c7;
  let intl;
  let items10;
  let items9;
  let stringResult;
  let tmp24;
  let tmp7;
  applicationId = applicationId.applicationId;
  const customId = applicationId.customId;
  let linkId = applicationId.linkId;
  const channelId = applicationId.channelId;
  const message = applicationId.message;
  const onShare = applicationId.onShare;
  c7 = undefined;
  let connectedActivityChannelId;
  closure_14 = undefined;
  let tmp = closure_14();
  let tmp2 = applicationId;
  const tmp3 = linkId;
  let obj = applicationId(linkId[14]);
  const items = [connectedActivityChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => connectedActivityChannelId.getConnectedActivityChannelId());
  const items1 = [stateFromStores];
  const memo = onShare.useMemo(() => {
    let destinationIdFromChannelId;
    if (null != stateFromStores) {
      const obj = formatResults;
      destinationIdFromChannelId = obj.getDestinationIdFromChannelId(tmp);
    }
    return destinationIdFromChannelId;
  }, items1);
  let tmp6 = message(onShare.useState(false), 2);
  [tmp7, c7] = tmp6;
  let tmp8 = message(onShare.useState(false), 2);
  const first = tmp8[0];
  connectedActivityChannelId = tmp8[1];
  const tmp10 = message(onShare.useState([]), 2);
  const first1 = tmp10[0];
  let closure_11 = tmp10[1];
  const callback = onShare.useCallback((arg0) => {
    closure_11(arg0);
  }, []);
  let obj2 = applicationId(linkId[14]);
  const items2 = [first];
  const stateFromStores1 = obj2.useStateFromStores(items2, () => first.getCurrentUser());
  let tmp13 = message(onShare.useState(""), 2);
  const first2 = tmp13[0];
  let tmp15 = tmp13[1];
  closure_14 = tmp15;
  const items3 = [applicationId, stateFromStores1, customId, linkId, channelId, tmp15];
  const effect = onShare.useEffect(() => {
    let id;
    const obj = { applicationId, referrerId: id, customId, linkId, channelId };
    id = undefined;
    const getActivityLaunchURL = getApplicationInstallURL.getActivityLaunchURL;
    getApplicationInstallURL;
    const tmp = closure_14;
    if (stateFromStores1 != null) {
      id = stateFromStores1.id;
    }
    tmp(getActivityLaunchURL(obj));
  }, items3);
  const items4 = [first, onShare];
  const callback1 = onShare.useCallback(() => {
    onShare(false, first);
    const obj = openActivityShareLinkModal;
    const result = obj.closeActivityShareLinkModal();
  }, items4);
  const items5 = [applicationId];
  const first3 = message(customId(linkId[18])(items5), 1)[0];
  const items6 = [first3, first, first2, message, onShare, first1];
  const items7 = [first2];
  const callback2 = onShare.useCallback(channelId(function*(arg0, value) {
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
          return { value: "IconComponent", done: "+352" };
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
                let obj4 = { value: Promise.all(first1.map(tmp(linkId[15]).getOrResolveChannelIdFromDestinationId)), done: false };
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
            tmp = value.filter(tmp(linkId[19]).isNotNullish);
            let obj5 = tmp(linkId[20]);
            tmp2 = obj5.resolveActivityShareMessageContent(closure_129_4, closure_129_15, closure_129_13);
            const flag = true;
            closure_129_7(true);
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
                    return { value: "IconComponent", done: "+352" };
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
                          const tmp6 = closure_2_1(closure_2_2[21]);
                          const sendMessage = tmp6.sendMessage;
                          const obj5 = { location: constants.ACTIVITY_SHARE };
                          c2 = 1;
                          c1 = 1;
                          const obj6 = { value: sendMessage(closure_0, obj2.parse(channel, c1), false, obj5), done: false };
                          obj2 = closure_2_1(closure_2_2[22]);
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
                    return { value: "IconComponent", done: "+352" };
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
            let obj6 = { text: intl.formatToPlainString(tmp(linkId[24]).t.jQULqL, obj7) };
            const open = tmp2(linkId[23]).open;
            const tmp29 = tmp2(linkId[23]);
            intl = tmp(linkId[24]).intl;
            obj7 = { applicationName: closure_129_15.name };
            open("ACTIVITY_SHARE_LINK_SUCCESS", obj6);
            closure_129_5(true, closure_129_8);
            const obj8 = tmp(linkId[17]);
            const result = obj8.closeActivityShareLinkModal();
          }
          c3 = 3;
          return { value: "IconComponent", done: "+352" };
        } catch (tmp10) {
          c3 = 3;
          throw tmp10;
        }
      }
    }
  }), items6);
  const onPress = onShare.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(first2);
    connectedActivityChannelId(true);
    const obj2 = ToastUtils;
    obj2.presentLinkCopied();
  }, items7);
  let height = customId(linkId[29])({ ignoreKeyboard: true }).height;
  const items8 = [height];
  let obj3 = {
    style: onShare.useMemo(() => {
      height = "100%";
      PlatformUtils;
      return { height };
    }, items8),
    children: items9
  };
  let obj4 = {
    title: intl.string(applicationId(linkId[24]).t.r9qKow),
    subtitle: message,
    headerRight(arg0) {
      let intl;
      const obj = { onPress, accessibilityLabel: intl.string(intl4.t.Xrt5Po), IconComponent: LinkIcon.LinkIcon };
      const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
      const merged = Object.assign(arg0);
      intl = intl4.intl;
      return authStore2(HeaderActionButton, obj);
    },
    onClose: callback1
  };
  const tmp23 = customId(linkId[31]);
  intl = applicationId(linkId[24]).intl;
  items9 = [stateFromStores1(tmp23, obj4), ];
  let obj5 = { style: tmp.container, children: items10 };
  items10 = [stateFromStores1(customId(linkId[32]), { absolute: true }), , ];
  let obj6 = { disableGradient: true, disableStickySections: true, initialSelectedDestinations: [], insetEnd: 0, onSelectedDestinationChange: callback, originDestination: memo, rowMode: first1.TOGGLE };
  items10[1] = stateFromStores1(customId(linkId[33]), obj6);
  let obj7 = { disabled: tmp7, floatingBackgroundColor: tmp.container.backgroundColor, isVisible: length > 0, loading: tmp7, onPress: tmp24, text: stringResult };
  tmp24 = undefined;
  const ModalFloatingAction = applicationId(linkId[34]).ModalFloatingAction;
  const tmp22 = stateFromStores1;
  if (!tmp7) {
    tmp24 = callback2;
  }
  if (1 === first1.length) {
    const intl3 = tmp2(tmp3[24]).intl;
    stringResult = intl3.string(tmp2(tmp3[24]).t.TXNS7S);
  } else {
    const intl2 = tmp2(tmp3[24]).intl;
    let obj8 = { count: first1.length };
    stringResult = intl2.formatToPlainString(tmp2(tmp3[24]).t.jWtYUm, obj8);
  }
  items10[2] = tmp22(ModalFloatingAction, obj7);
  items9[1] = first2(stateFromStores, obj5);
  return first2(stateFromStores, obj3);
});
let result = size.fileFinishedImporting("modules/activities/native/ActivityShareLinkModal.tsx");

export default tmp3;
