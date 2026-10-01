// Module ID: 16718
// Function ID: 16719
// Name: RestrictedMessageRequestPreview
// Dependencies: [32, 19, 17, 2045, 5056, 1372, 21, 4836, 576, 1613, 504, 16719, 16721, 11932, 2]
// Exports: default

// Module 16718 (RestrictedMessageRequestPreview)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChannelStore from "ChannelStore" /* 2045 */;
import MessageStore from "MessageStore" /* 5056 */;
import UserStore from "UserStore" /* 1372 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
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
let obj = { container: obj2, scroll: { flex: 1 }, hidden: { opacity: 0 }, scrollContent: obj3, footer: obj4 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_8, paddingBottom: nativeDefault.space.PX_8 };
obj4 = { paddingHorizontal: nativeDefault.space.PX_12 };
let closure_12 = createStyles(obj);
const result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  let closure_4;
  let items10;
  let items7;
  let items8;
  let items9;
  let obj10;
  channelId = channelId.channelId;
  let ref;
  let first;
  react = undefined;
  const tmp = closure_12();
  const bottom = ref(1613)().bottom;
  ref = react.useRef(null);
  dependencyMap = react.useRef(false);
  const tmp5 = first(react.useState(false), 2);
  first = tmp5[0];
  const obj = react;
  react = tmp5[1];
  const items = [MessageStore];
  const items1 = [channelId];
  const obj2 = channelId(504);
  let closure_5 = obj2.useStateFromStores(items, () => MessageStore.getMessages(channelId).length > 0, items1);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const obj3 = channelId(504);
  const stateFromStores = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(channelId), items3);
  let first1;
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
  let tmp13Result = null;
  if (null != stateFromStores) {
    tmp13Result = null;
    if (null != stateFromStores1) {
      const obj5 = {
        ref,
        style: items7,
        contentContainerStyle: tmp.scrollContent,
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
              const tmp4 = !first && closure_5;
              if (tmp4) {
                const _requestAnimationFrame = requestAnimationFrame;
                const animationFrame = requestAnimationFrame(() => closure_1_4(true));
              }
            },
        children: items8
      };
      items7 = [tmp.scroll, ];
      let hidden = null;
      const obj4 = { style: tmp.container, children: items9 };
      const tmp15 = closure_5;
      if (!first) {
        hidden = tmp.hidden;
      }
      items7[1] = hidden;
      const obj6 = { channel: stateFromStores, user: stateFromStores1 };
      items8 = [closure_10(tmp2(16719), obj6), ];
      const obj7 = { channelId };
      items8[1] = closure_10(ref(16721), obj7);
      items9 = [closure_11(tmp15, obj5), ];
      const obj8 = { style: items10, children: closure_10(ref(11932), obj10) };
      items10 = [tmp.footer, ];
      items10[1] = { paddingBottom: ref(576).space.PX_8 + bottom };
      obj10 = { channel: stateFromStores };
      const obj9 = { paddingBottom: ref(576).space.PX_8 + bottom };
      items9[1] = closure_10(first1, obj8);
      tmp13Result = tmp13(tmp14, obj4);
    }
  }
  return tmp13Result;
};
