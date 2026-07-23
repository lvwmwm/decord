// Module ID: 15579
// Function ID: 120104
// Name: RestrictedMessageRequestPreview
// Dependencies: [57, 31, 27, 1348, 4349, 1849, 33, 4130, 689, 1557, 566, 15580, 15582, 11472, 2]
// Exports: default

// Module 15579 (RestrictedMessageRequestPreview)
import _slicedToArray from "_slicedToArray";
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_5;
let closure_6;
const require = arg1;
({ ScrollView: closure_5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.scroll = { flex: 1 };
_createForOfIteratorHelperLoose.hidden = { opacity: 0 };
_createForOfIteratorHelperLoose.scrollContent = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
let obj1 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16, paddingTop: require("_createForOfIteratorHelperLoose").space.PX_8, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8 };
_createForOfIteratorHelperLoose.footer = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj2 = { paddingHorizontal: require("_createForOfIteratorHelperLoose").space.PX_12 };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  channelId = channelId.channelId;
  let first1;
  const tmp = _createForOfIteratorHelperLoose();
  const ref = React.useRef(null);
  const dependencyMap = React.useRef(false);
  const tmp3 = first(React.useState(false), 2);
  first = tmp3[0];
  React = tmp3[1];
  let obj = channelId(566);
  const items = [closure_8];
  const items1 = [channelId];
  let closure_5 = obj.useStateFromStores(items, () => outer1_8.getMessages(channelId).length > 0, items1);
  let obj1 = channelId(566);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items2, () => outer1_7.getChannel(channelId), items3);
  first1 = undefined;
  if (null != stateFromStores) {
    const recipients = stateFromStores.recipients;
    if (null != recipients) {
      first1 = recipients[0];
    }
  }
  let obj2 = channelId(566);
  const items4 = [closure_9];
  const items5 = [first1];
  const stateFromStores1 = obj2.useStateFromStores(items4, () => {
    let user;
    if (null != first1) {
      user = outer1_9.getUser(first1);
    }
    return user;
  }, items5);
  const items6 = [first];
  const effect = React.useEffect(() => {
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => outer1_4(true), 1000);
      return () => clearTimeout(closure_0);
    }
  }, items6);
  let tmp10Result = null;
  if (null != stateFromStores) {
    tmp10Result = null;
    if (null != stateFromStores1) {
      obj = { style: tmp.container };
      obj = { ref };
      const items7 = [tmp.scroll, ];
      let hidden = null;
      if (!first) {
        hidden = tmp.hidden;
      }
      items7[1] = hidden;
      obj.style = items7;
      obj.contentContainerStyle = tmp.scrollContent;
      obj.onScrollBeginDrag = function onScrollBeginDrag() {
        closure_2.current = true;
      };
      obj.onContentSizeChange = function onContentSizeChange() {
        if (!ref.current) {
          const current = ref.current;
          if (null != current) {
            const obj = { animated: false };
            current.scrollToEnd(obj);
          }
        }
        if (tmp4) {
          const _requestAnimationFrame = requestAnimationFrame;
          const animationFrame = requestAnimationFrame(() => outer1_4(true));
        }
      };
      obj1 = { channel: stateFromStores, user: stateFromStores1 };
      const items8 = [callback(ref(15580), obj1), ];
      obj2 = { channelId };
      items8[1] = callback(ref(15582), obj2);
      obj.children = items8;
      const items9 = [closure_11(closure_5, obj), ];
      const obj3 = {};
      const items10 = [tmp.footer, ];
      const obj4 = { paddingBottom: ref(689).space.PX_8 + ref(1557)().bottom };
      items10[1] = obj4;
      obj3.style = items10;
      const obj5 = { channel: stateFromStores };
      obj3.children = callback(ref(11472), obj5);
      items9[1] = callback(first1, obj3);
      obj.children = items9;
      tmp10Result = tmp10(first1, obj);
      const tmp11 = first1;
      const tmp12 = closure_5;
    }
  }
  return tmp10Result;
};
