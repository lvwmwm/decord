// Module ID: 18351
// Function ID: 18352
// Name: RestrictedMessageRequestPreview
// Dependencies: [32, 19, 17, 4823, 6010, 1392, 21, 4971, 587, 558, 576, 1633, 13530, 504, 18352, 18354, 13556, 13348, 2]

// Module 18351 (RestrictedMessageRequestPreview)
import nativeDefault from "native" /* 587 */;
import useIsEmptyMessageRequestChat from "useIsEmptyMessageRequestChat" /* 13530 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 4823 */;
import MessageStore from "MessageStore" /* 6010 */;
import UserStore from "UserStore" /* 1392 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4971 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c7, dependencyMap, num, tmp3;

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
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function RestrictedMessageRequestPreview(channelId) {
  let closure_4;
  let first;
  let first1;
  let ref;
  let tmp10;
  let tmp11;
  let tmp13;
  let tmp14;
  let tmp15;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp24;
  let tmp25;
  const tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(55);
  channelId = channelId.channelId;
  let tmp4 = closure_12();
  let obj2 = react;
  const bottom = ref(1633)().bottom;
  ref = react.useRef(null);
  dependencyMap = react.useRef(false);
  let tmp6 = first(react.useState(false), 2);
  first = tmp6[0];
  react = tmp6[1];
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessageStore];
    cResult[0] = items;
    first1 = items;
  } else {
    first1 = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items1 = [channelId];
    cResult[1] = channelId;
    cResult[2] = S;
    cResult[3] = items1;
    tmp11 = items1;
    tmp10 = S;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    tmp11 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first1, tmp10, tmp11);
  const hasMessages = stateFromStoresObject.hasMessages;
  const isEmpty = stateFromStoresObject.isEmpty;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items2 = [c7];
    cResult[4] = items2;
    tmp13 = items2;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
  }
  if (cResult[5] !== channelId) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items3 = [channelId];
    cResult[5] = channelId;
    cResult[6] = tmp16;
    cResult[7] = items3;
    tmp15 = items3;
    tmp14 = tmp16;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult3 = tmp(504);
  const stateFromStores = tmpResult3.useStateFromStores(tmp13, tmp14, tmp15);
  if (stateFromStores != null) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    if (tmp19 != null) {
      class S {
        constructor() {
          messages = closure_8.getMessages(channelId);
          obj = { hasMessages: messages.length > 0, isEmpty: null };
          obj2 = closure_0(closure_2[12]);
          obj.isEmpty = obj2.isEmptyLoadedChat(messages);
          return obj;
        }
      }
    }
  }
  c7 = tmp18;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
    const items4 = [UserStore];
    cResult[8] = items4;
    tmp20 = items4;
  } else {
    class S {
      constructor() {
        messages = closure_8.getMessages(channelId);
        obj = { hasMessages: messages.length > 0, isEmpty: null };
        obj2 = closure_0(closure_2[12]);
        obj.isEmpty = obj2.isEmptyLoadedChat(messages);
        return obj;
      }
    }
  }
  if (cResult[9] !== undefined) {
    class A {
      constructor() {
        user = undefined;
        if (null != closure_7) {
          tmp3 = closure_9;
          user = closure_9.getUser(tmp);
        }
        return user;
      }
    }
    const items5 = [undefined];
    cResult[9] = undefined;
    cResult[10] = A;
    cResult[11] = items5;
    tmp22 = items5;
    tmp21 = A;
  } else {
    class A {
      constructor() {
        user = undefined;
        if (null != closure_7) {
          tmp3 = closure_9;
          user = closure_9.getUser(tmp);
        }
        return user;
      }
    }
    tmp22 = cResult[11];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp20, tmp21, tmp22);
  if (cResult[12] !== first) {
    class G {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { /* body not rendered: F155725 */ }, 1000);
          return () => { /* body not rendered: F155726 */ };
        }
      }
    }
    const items6 = [first];
    cResult[12] = first;
    cResult[13] = G;
    cResult[14] = items6;
    tmp25 = items6;
    tmp24 = G;
  } else {
    class G {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { /* body not rendered: F155725 */ }, 1000);
          return () => { /* body not rendered: F155726 */ };
        }
      }
    }
    tmp25 = cResult[14];
  }
  const effect = obj2.useEffect(tmp24, tmp25);
  if (null != stateFromStores) {
    class G {
      constructor() {
        if (closure_3) {
          return;
        } else {
          tmp = globalThis;
          _setTimeout = setTimeout;
          num = 1000;
          closure_0 = setTimeout(() => { /* body not rendered: F155725 */ }, 1000);
          return () => { /* body not rendered: F155726 */ };
        }
      }
    }
  }
  return null;
}) : (function RestrictedMessageRequestPreview(channelId) {
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
  const bottom = ref(1633)().bottom;
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
      items9 = [closure_10(tmp2(18352), obj6), , ];
      const obj7 = { channelId };
      items9[1] = closure_10(ref(18354), obj7);
      let tmp19Result = null;
      if (isEmpty) {
        const obj8 = { style: tmp.emptyChat };
        tmp19Result = tmp19(tmp2(13556), obj8);
      }
      items9[2] = tmp19Result;
      items10 = [closure_11(tmp16, obj5), ];
      const obj9 = { style: items11, children: closure_10(ref(13348), obj11) };
      items11 = [tmp.footer, ];
      items11[1] = { paddingBottom: ref(587).space.PX_8 + bottom };
      const obj10 = { paddingBottom: ref(587).space.PX_8 + bottom };
      obj11 = { channel: stateFromStores };
      items10[1] = closure_10(isEmpty, obj9);
      tmp14Result = tmp14(tmp15, obj4);
    }
  }
  return tmp14Result;
});
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default tmp5;
