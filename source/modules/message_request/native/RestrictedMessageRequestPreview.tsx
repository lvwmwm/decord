// Module ID: 15462
// Function ID: 117930
// Name: RestrictedMessageRequestPreview
// Dependencies: []
// Exports: default

// Module 15462 (RestrictedMessageRequestPreview)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ ScrollView: closure_5, View: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { flex: 1, backgroundColor: importDefault(dependencyMap[8]).colors.BACKGROUND_BASE_LOW };
obj.container = obj;
obj.scroll = { flex: 1 };
obj.hidden = { opacity: 0 };
const tmp3 = arg1(dependencyMap[6]);
obj.scrollContent = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingTop: importDefault(dependencyMap[8]).space.PX_8, paddingBottom: importDefault(dependencyMap[8]).space.PX_8 };
const obj1 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_16, paddingTop: importDefault(dependencyMap[8]).space.PX_8, paddingBottom: importDefault(dependencyMap[8]).space.PX_8 };
obj.footer = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12 };
let closure_12 = obj.createStyles(obj);
const obj2 = { paddingHorizontal: importDefault(dependencyMap[8]).space.PX_12 };
const result = arg1(dependencyMap[14]).fileFinishedImporting("modules/message_request/native/RestrictedMessageRequestPreview.tsx");

export default function RestrictedMessageRequestPreview(channelId) {
  channelId = channelId.channelId;
  const arg1 = channelId;
  let first1;
  const tmp = callback3();
  const ref = React.useRef(null);
  const importDefault = ref;
  let closure_2 = React.useRef(false);
  const tmp3 = callback(React.useState(false), 2);
  const first = tmp3[0];
  const callback = first;
  const React = tmp3[1];
  let obj = arg1(closure_2[10]);
  const items = [closure_8];
  const items1 = [channelId];
  let closure_5 = obj.useStateFromStores(items, () => messages.getMessages(channelId).length > 0, items1);
  let obj1 = arg1(closure_2[10]);
  const items2 = [closure_7];
  const items3 = [channelId];
  const stateFromStores = obj1.useStateFromStores(items2, () => channel.getChannel(channelId), items3);
  first1 = undefined;
  if (null != stateFromStores) {
    const recipients = stateFromStores.recipients;
    if (null != recipients) {
      first1 = recipients[0];
    }
  }
  let obj2 = arg1(closure_2[10]);
  const items4 = [closure_9];
  const items5 = [first1];
  const stateFromStores1 = obj2.useStateFromStores(items4, () => {
    let user;
    if (null != first1) {
      user = user.getUser(first1);
    }
    return user;
  }, items5);
  const items6 = [first];
  const effect = React.useEffect(() => {
    if (!first) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => callback(true), 1000);
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
          const animationFrame = requestAnimationFrame(() => callback(true));
        }
      };
      obj1 = { channel: stateFromStores, user: stateFromStores1 };
      const items8 = [callback2(importDefault(closure_2[11]), obj1), ];
      obj2 = { channelId };
      items8[1] = callback2(importDefault(closure_2[12]), obj2);
      obj.children = items8;
      const items9 = [closure_11(closure_5, obj), ];
      const obj3 = {};
      const items10 = [tmp.footer, ];
      const obj4 = { paddingBottom: importDefault(closure_2[8]).space.PX_8 + importDefault(closure_2[9])().bottom };
      items10[1] = obj4;
      obj3.style = items10;
      const obj5 = { channel: stateFromStores };
      obj3.children = callback2(importDefault(closure_2[13]), obj5);
      items9[1] = callback2(first1, obj3);
      obj.children = items9;
      tmp10Result = tmp10(first1, obj);
      const tmp11 = first1;
      const tmp12 = closure_5;
    }
  }
  return tmp10Result;
};
