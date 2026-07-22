// Module ID: 11112
// Function ID: 86508
// Name: _upload2
// Dependencies: []
// Exports: default

// Module 11112 (_upload2)
function _upload2() {
  // CreateGeneratorClosureLongIndex (0x67)
  const obj = callback2(tmp);
  const _upload2 = obj;
  return obj(...arguments);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
const View = arg1(dependencyMap[3]).View;
let closure_7 = importDefault(dependencyMap[4]);
const DraftType = arg1(dependencyMap[5]).DraftType;
let closure_9 = importDefault(dependencyMap[6]);
let closure_10 = importDefault(dependencyMap[7]);
({ AbortCodes: closure_11, Endpoints: closure_12 } = arg1(dependencyMap[8]));
const tmp2 = arg1(dependencyMap[8]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = { container: {} };
obj = { borderWidth: 1, borderColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[11]).radii.md, marginBottom: 32, shadowColor: importDefault(dependencyMap[11]).colors.BLACK, shadowOffset: {}, shadowOpacity: 0.25, shadowRadius: 4, elevation: 4 };
obj.post = obj;
obj.postContent = { -1878763250: null, -705045567: null };
obj.title = {};
obj.description = { memo: null, accessibilityRole: null };
const tmp3 = arg1(dependencyMap[9]);
obj.button = { borderRadius: importDefault(dependencyMap[11]).radii.sm };
obj.buttonMargin = { marginBottom: 10 };
let closure_15 = obj.createStyles(obj);
const obj1 = { borderRadius: importDefault(dependencyMap[11]).radii.sm };
const result = arg1(dependencyMap[36]).fileFinishedImporting("modules/forums/native/AddMediaToOriginalForumPostActionSheet.tsx");

export default function AddMediaToOriginalForumPostActionSheet(threadId) {
  let tmp10;
  threadId = threadId.threadId;
  const arg1 = threadId;
  const attachments = threadId.attachments;
  const importDefault = attachments;
  const sendMessage = threadId.sendMessage;
  const dependencyMap = sendMessage;
  const tmp = callback5();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  let callback = tmp2[1];
  let obj = arg1(dependencyMap[28]);
  const items = [closure_7];
  const items1 = [threadId];
  const stateFromStores = obj.useStateFromStores(items, () => analyticsLocations.getChannel(threadId), items1);
  let closure_4 = stateFromStores;
  let obj1 = arg1(dependencyMap[28]);
  const items2 = [closure_9];
  const items3 = [stateFromStores];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let guildId;
    if (null != stateFromStores) {
      guildId = stateFromStores.getGuildId();
    }
    return guild.getGuild(guildId);
  }, items3);
  const React = stateFromStores1;
  let obj2 = arg1(dependencyMap[28]);
  const items4 = [closure_10];
  const items5 = [threadId];
  const stateFromStores2 = obj2.useStateFromStores(items4, () => message.getMessage(threadId, attachments(sendMessage[18]).castChannelIdAsMessageId(threadId)), items5);
  const View = stateFromStores2;
  const analyticsLocations = importDefault(dependencyMap[29])().analyticsLocations;
  closure_7 = analyticsLocations;
  const items6 = [stateFromStores, stateFromStores1, stateFromStores2, threadId, attachments, analyticsLocations];
  const items7 = [sendMessage];
  callback = React.useCallback(() => {
    if (null != stateFromStores) {
      if (null != stateFromStores2) {
        if (null != stateFromStores1) {
          let obj = { added: true };
          const result = threadId(sendMessage[30]).trackForumAddMediaToOriginalPostClicked(obj);
          obj = { threadId, attachments, setIsUploading: closure_3, guild: stateFromStores1, analyticsLocations };
          function _upload(arg0) {
            return callback(...arguments);
          }(obj);
          const obj2 = threadId(sendMessage[30]);
        }
      }
    }
    obj = attachments(sendMessage[15]);
    obj.hideActionSheet();
  }, items6);
  const callback1 = React.useCallback(() => {
    const result = threadId(sendMessage[30]).trackForumAddMediaToOriginalPostClicked({ added: false });
    const obj = threadId(sendMessage[30]);
    attachments(sendMessage[15]).hideActionSheet();
    sendMessage();
  }, items7);
  [tmp10, closure_8] = callback(React.useState(null), 2);
  const items8 = [attachments];
  const effect = React.useEffect(() => {
    if (null != attachments[0]) {
      const fileInfo = threadId(sendMessage[31]).getFileInfo(attachments[0]);
      fileInfo.then((uri) => callback(uri.uri));
      const obj = threadId(sendMessage[31]);
    }
  }, items8);
  const first1 = attachments[0];
  let item;
  if (null != first1) {
    item = first1.item;
  }
  let tmp14;
  if (null != item) {
    if (null != tmp10) {
      obj = { src: tmp10 };
      ({ width: obj4.width, height: obj4.height } = item);
      obj.spoiler = attachments[0].spoiler;
      obj.alt = attachments[0].description;
      tmp14 = obj;
    }
  }
  obj = { startExpanded: true };
  obj1 = { style: tmp.container };
  obj2 = { pointerEvents: "none", style: tmp.post };
  const obj3 = { threadId, localDeviceMedia: tmp14, style: tmp.postContent };
  obj2.children = callback3(arg1(dependencyMap[33]).ForumPostListDisabled, obj3);
  const items9 = [callback3(View, obj2), , , , , ];
  const obj4 = { alignSelf: 24, justifyContent: 24, alignItems: null, backgroundColor: "f15a8eea867ca31909b0a1cf49c6c7d8", style: tmp.title };
  const intl = arg1(dependencyMap[27]).intl;
  obj4.children = intl.string(arg1(dependencyMap[27]).t.+SZF6S);
  items9[1] = callback3(arg1(dependencyMap[34]).Text, obj4);
  const obj5 = { style: tmp.description };
  const intl2 = arg1(dependencyMap[27]).intl;
  obj5.children = intl2.string(arg1(dependencyMap[27]).t.0Ycgw5);
  items9[2] = callback3(arg1(dependencyMap[34]).Text, obj5);
  const obj6 = { style: tmp.buttonMargin };
  const obj7 = { PresetNothing: "d7825c8630cb00012f54beafd65fb181", ThemedNotifications: "nl.messages.d7825c8630cb00012f54beafd65fb181.compiled.messages" };
  const intl3 = arg1(dependencyMap[27]).intl;
  obj7.text = intl3.string(arg1(dependencyMap[27]).t.d611xH);
  obj7.pillStyle = tmp.button;
  obj7.onPress = callback;
  obj7.loading = first;
  obj7.disabled = first;
  obj6.children = callback3(arg1(dependencyMap[35]).BaseTextButton, obj7);
  items9[3] = callback3(View, obj6);
  const obj8 = { style: tmp.buttonMargin };
  const obj9 = {};
  const intl4 = arg1(dependencyMap[27]).intl;
  obj9.text = intl4.string(arg1(dependencyMap[27]).t.8rKVHL);
  obj9.pillStyle = tmp.button;
  obj9.onPress = callback1;
  obj9.disabled = first;
  obj8.children = callback3(arg1(dependencyMap[35]).BaseTextButton, obj9);
  items9[4] = callback3(View, obj8);
  const obj10 = {};
  const intl5 = arg1(dependencyMap[27]).intl;
  obj10.text = intl5.string(arg1(dependencyMap[27]).t.ETE/oC);
  obj10.pillStyle = tmp.button;
  obj10.onPress = function onPress() {
    return attachments(sendMessage[15]).hideActionSheet();
  };
  obj10.disabled = first;
  items9[5] = callback3(arg1(dependencyMap[35]).BaseTextButton, obj10);
  obj1.children = items9;
  obj.children = callback4(View, obj1);
  return callback3(arg1(dependencyMap[32]).BottomSheet, obj);
};
