// Module ID: 15176
// Function ID: 114431
// Name: ResourceChannelRow
// Dependencies: []
// Exports: default

// Module 15176 (ResourceChannelRow)
function ResourceChannelRow(channelId) {
  let description;
  let icon;
  channelId = channelId.channelId;
  const arg1 = channelId;
  ({ icon, description } = channelId);
  let dependencyMap;
  const tmp = callback3();
  let obj = arg1(dependencyMap[10]);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => channel.getChannel(channelId));
  const importDefault = stateFromStores;
  let obj1 = arg1(dependencyMap[10]);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_9.can(constants.VIEW_CHANNEL, stateFromStores));
  let obj2 = arg1(dependencyMap[10]);
  const items2 = [closure_8];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => messages.getMessages(channelId));
  const firstResult = stateFromStores2.first();
  let obj4 = arg1(dependencyMap[11]);
  const forumPostMediaProperties = obj4.useForumPostMediaProperties(firstResult, false);
  let obj5 = arg1(dependencyMap[11]);
  let length;
  const firstMediaIsEmbed = obj5.useFirstMediaIsEmbed(firstResult, false);
  if (null != forumPostMediaProperties) {
    length = forumPostMediaProperties.length;
  }
  let first = null;
  if (length > 0) {
    first = forumPostMediaProperties[0];
  }
  let obj6 = arg1(dependencyMap[12]);
  obj = { channel: stateFromStores, media: first };
  const shouldObscure = obj6.useSharedMediaProps(obj).shouldObscure;
  const tmp8 = importDefault(dependencyMap[13])(firstResult);
  const tmp9 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  dependencyMap = tmp9;
  const items3 = [channelId, tmp9];
  const effect = React.useEffect(() => {
    if (tmp9) {
      let obj = stateFromStores(tmp9[14]);
      obj = { channelId, after: channelId, limit: 5 };
      const messages = obj.fetchMessages(obj);
    }
  }, items3);
  [][0] = stateFromStores;
  if (null != stateFromStores) {
    if (stateFromStores1) {
      let obj8 = importDefault(dependencyMap[16]);
      obj = { channelId: stateFromStores.id, icon };
      const resourceChannelIconURL = obj8.getResourceChannelIconURL(obj);
      obj1 = { onPress: tmp11, style: tmp.channelContainer };
      obj2 = { style: tmp.textContent };
      const obj3 = { cachedAt: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000006559217332108246, edpbxy: 5958795383914127000000000000, children: channelId.title };
      const items4 = [callback(arg1(dependencyMap[18]).Text, obj3), , ];
      let tmp22 = tmp15;
      if (null == description || 0 === description.length) {
        tmp22 = null != tmp8;
      }
      if (tmp22) {
        obj4 = { flexDirection: -100662665, width: 1107296907, marginBottom: 161657, alignItems: 166907, borderRadius: 28356930, style: tmp.messageContent };
        obj5 = {};
        ({ guild_id: obj16.guildId, id: obj16.channelId } = stateFromStores);
        obj4.children = importDefault(dependencyMap[19]).parse(tmp8, true, obj5);
        tmp22 = callback(arg1(dependencyMap[18]).Text, obj4);
        const obj15 = importDefault(dependencyMap[19]);
      }
      items4[1] = tmp22;
      let tmp27 = !tmp15;
      if (!(null == description || 0 === description.length)) {
        obj6 = { flexDirection: -100662665, width: 1107296907, marginBottom: 161657, alignItems: 166907, borderRadius: 28356930, style: tmp.messageContent };
        ({ guild_id: obj19.guildId, id: obj19.channelId } = stateFromStores);
        obj6.children = importDefault(dependencyMap[19]).parse(description, true, {});
        tmp27 = callback(arg1(dependencyMap[18]).Text, obj6);
        const obj18 = importDefault(dependencyMap[19]);
        const obj7 = {};
      }
      items4[2] = tmp27;
      obj2.children = items4;
      const items5 = [closure_13(closure_4, obj2), , ];
      let tmp32 = null;
      if (null != icon) {
        tmp32 = null;
        if (null != resourceChannelIconURL) {
          obj8 = {};
          const obj9 = { uri: resourceChannelIconURL };
          obj8.source = obj9;
          obj8.style = tmp.icon;
          tmp32 = callback(closure_5, obj8);
        }
      }
      items5[1] = tmp32;
      let tmp36Result = null;
      if (null == resourceChannelIconURL) {
        tmp36Result = null;
        if (null != firstResult) {
          if (null == firstResult) {
            tmp36Result = null;
            if (null != first) {
              const obj10 = { channel: stateFromStores, media: first, isEmbed: firstMediaIsEmbed };
              let tmp39 = null != shouldObscure;
              if (tmp39) {
                tmp39 = shouldObscure;
              }
              obj10.embedLeftBorderColor = arg1(dependencyMap[11]).getEmbedColor(firstResult, tmp39);
              let id;
              if (null != firstResult) {
                id = firstResult.id;
              }
              obj10.firstMessageId = id;
              obj10.containerStyle = tmp.thumbnail;
              tmp36Result = callback(arg1(dependencyMap[12]).ForumPostMediaThumbnail, obj10);
              const obj23 = arg1(dependencyMap[11]);
              const tmp36 = callback;
            }
          } else {
            tmp36Result = null;
          }
        }
      }
      items5[2] = tmp36Result;
      obj1.children = items5;
      return closure_13(arg1(dependencyMap[17]).PressableOpacity, obj1);
    }
  }
  return null;
}
let closure_3 = importAll(dependencyMap[0]);
({ View: closure_4, Image: closure_5 } = arg1(dependencyMap[1]));
let closure_6 = importDefault(dependencyMap[2]);
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
const tmp2 = arg1(dependencyMap[1]);
({ Permissions: closure_10, Routes: closure_11 } = arg1(dependencyMap[6]));
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_12, jsxs: closure_13 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = { container: { scrollable: "DEFAULT_ENABLE_CONTENT_PANNING_GESTURE", startHeight: "NONE_UNSPECIFIED", maxHeight: "Array", containerHeight: "NONE_UNSPECIFIED" }, emptyStateContainer: {} };
obj = { backgroundColor: importDefault(dependencyMap[9]).colors.BACKGROUND_BASE_LOW, borderRadius: importDefault(dependencyMap[9]).radii.sm };
obj.channelContainer = obj;
obj.messageContent = { marginTop: 8 };
obj.textContent = { flex: 1 };
obj.thumbnail = { marginLeft: 8 };
obj.emptyStateImage = { y: null, channelId: "\u{1F595}" };
obj.icon = { "Null": "nativeStyles", "Null": "__handleCache" };
let closure_14 = obj.createStyles(obj);
const tmp4 = arg1(dependencyMap[7]);
const result = arg1(dependencyMap[25]).fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default function GuildHomeResources(guildId) {
  guildId = guildId.guildId;
  const arg1 = guildId;
  const tmp = callback3();
  const arr = importDefault(dependencyMap[20])(guildId);
  if (0 === arr.length) {
    let obj = { style: tmp.emptyStateContainer };
    obj = { cachedAt: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000011454504407100313, edpbxy: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004026493667951817 };
    const intl = arg1(dependencyMap[22]).intl;
    obj.children = intl.string(arg1(dependencyMap[22]).t.owvC9U);
    const items = [callback(arg1(dependencyMap[18]).Text, obj), , ];
    const obj1 = { style: tmp.emptyStateImage, source: importDefault(dependencyMap[23]) };
    items[1] = callback(closure_5, obj1);
    const obj2 = {
      onPress() {
          const defaultChannel = defaultChannel.getDefaultChannel(guildId);
          if (null != defaultChannel) {
            guildId(closure_2[21]).transitionTo(closure_11.CHANNEL(guildId, defaultChannel.id));
            const obj = guildId(closure_2[21]);
          }
        }
    };
    const intl2 = arg1(dependencyMap[22]).intl;
    obj2.text = intl2.string(arg1(dependencyMap[22]).t.3iCBUn);
    items[2] = callback(arg1(dependencyMap[24]).Button, obj2);
    obj.children = items;
    let tmp4 = callback2(closure_4, obj);
  } else {
    obj = { style: tmp.container, children: arr.map((channelId) => callback(closure_15, { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description }, "resource-" + channelId.channelId)) };
    tmp4 = callback(closure_4, obj);
  }
  return tmp4;
};
