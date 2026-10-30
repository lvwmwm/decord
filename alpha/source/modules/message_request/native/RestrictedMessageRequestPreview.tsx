// Module ID: 18928
// Function ID: 18929
// Name: RestrictedMessageRequestPreview
// Dependencies: [32, 19, 17, 4858, 6056, 1384, 21, 5009, 575, 1626, 504, 14128, 18929, 18931, 14154, 13963, 2]
// Exports: default

// Module 18928 (RestrictedMessageRequestPreview)
import nativeDefault from "native" /* 575 */;
import useIsEmptyMessageRequestChat from "useIsEmptyMessageRequestChat" /* 14128 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4858 */;
import MessageStore from "MessageStore" /* 6056 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
let react = react_mod;
({ ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, scroll: { flex: 1 }, hidden: { opacity: 0 }, scrollContent: obj3, scrollContentEmpty: { flexGrow: 1 }, emptyChat: { flex: 1, justifyContent: "center" }, footer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  let c5;
  let closure_4;
  let isEmpty;
  let items10;
  let items11;
  let items7;
  let items8;
  let items9;
  let obj11;
  channelId = channelId.channelId;
  let ref;
  let first;
  react = undefined;
  c5 = undefined;
  isEmpty = undefined;
  let first1;
  const tmp = closure_12();
  let obj = react;
  const bottom = ref(1626)().bottom;
  ref = react.useRef(null);
  dependencyMap = react.useRef(false);
  const tmp5 = first(react.useState(false), 2);
  first = tmp5[0];
  react = tmp5[1];
  let obj2 = channelId(504);
  const items = [MessageStore];
  const items1 = [channelId];
  const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
    let obj2;
    const messages = MessageStore.getMessages(channelId);
    const obj = { hasMessages: messages.length > 0, isEmpty: obj2.isEmptyLoadedChat(messages) };
    obj2 = useIsEmptyMessageRequestChat;
    return obj;
  }, items1);
  ({ hasMessages: c5, isEmpty } = stateFromStoresObject);
  const items2 = [first1];
  const items3 = [channelId];
  const obj3 = channelId(504);
  const stateFromStores = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  first1 = undefined;
  const tmp7 = channelId;
  if (stateFromStores != null) {
    const recipients = stateFromStores.recipients;
    if (recipients != null) {
      first1 = recipients[0];
    }
  }
  const items4 = [UserStore];
  const items5 = [first1];
  const tmp7Result = tmp7(504);
  const stateFromStores1 = tmp7Result.useStateFromStores(items4, () => {
    let user;
    if (null != first1) {
      user = UserStore.getUser(tmp);
    }
    return user;
  }, items5);
  const items6 = [first];
  const effect = obj.useEffect(() => {
    let closure_0;
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => closure_1_4(true), 1000);
      return () => clearTimeout(closure_0);
    }
  }, items6);
  let tmp14Result = null;
  if (null != stateFromStores) {
    tmp14Result = null;
    if (null != stateFromStores1) {
      const obj5 = {
        ref,
        style: items7,
        contentContainerStyle: items8,
        onScrollBeginDrag() {
              ref.current = true;
            },
        onContentSizeChange() {
              if (!ref.current) {
                const current = ref.current;
                if (current != null) {
                  current.scrollToEnd({ animated: false });
                }
              }
              let tmp4 = first;
              if (!tmp4) {
                tmp4 = !c5 && !isEmpty;
                const tmp6 = !c5 && !isEmpty;
              }
              if (!tmp4) {
                const _requestAnimationFrame = requestAnimationFrame;
                const animationFrame = requestAnimationFrame(() => closure_1_4(true));
              }
            },
        children: items9
      };
      items7 = [tmp.scroll, ];
      let hidden = null;
      const obj4 = { style: tmp.container, children: items10 };
      const tmp16 = c5;
      if (!first) {
        hidden = null;
        if (!isEmpty) {
          hidden = tmp.hidden;
        }
      }
      items7[1] = hidden;
      items8 = [tmp.scrollContent, ];
      let scrollContentEmpty = null;
      if (isEmpty) {
        scrollContentEmpty = tmp.scrollContentEmpty;
      }
      items8[1] = scrollContentEmpty;
      const obj6 = { channel: stateFromStores, user: stateFromStores1 };
      items9 = [closure_10(tmp2(18929), obj6), , ];
      const obj7 = { channelId };
      items9[1] = closure_10(ref(18931), obj7);
      let tmp19Result = null;
      if (isEmpty) {
        const obj8 = { style: tmp.emptyChat };
        tmp19Result = tmp19(tmp2(14154), obj8);
      }
      items9[2] = tmp19Result;
      items10 = [closure_11(tmp16, obj5), ];
      const obj9 = { style: items11, children: closure_10(ref(13963), obj11) };
      items11 = [tmp.footer, ];
      items11[1] = { paddingBottom: ref(575).space.PX_8 + bottom };
      const obj10 = { paddingBottom: ref(575).space.PX_8 + bottom };
      obj11 = { channel: stateFromStores };
      items10[1] = closure_10(isEmpty, obj9);
      tmp14Result = tmp14(tmp15, obj4);
    }
  }
  return tmp14Result;
};
