// Module ID: 15292
// Function ID: 116601
// Name: ResourceChannelRow
// Dependencies: [31, 27, 1348, 1907, 4349, 3758, 653, 33, 4130, 689, 566, 8328, 11133, 15293, 6691, 11383, 1392, 4660, 4126, 4120, 15286, 1198, 1212, 15294, 4543, 2]
// Exports: default

// Module 15292 (ResourceChannelRow)
import result from "result";
import get_ActivityIndicator from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import closure_9 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_12;
let closure_13;
let closure_4;
let closure_5;
const require = arg1;
function ResourceChannelRow(channelId) {
  let description;
  let icon;
  channelId = channelId.channelId;
  ({ icon, description } = channelId);
  let dependencyMap;
  const tmp = _createForOfIteratorHelperLoose();
  let obj = channelId(566);
  const items = [_isNativeReflectConstruct];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  let obj1 = channelId(566);
  const items1 = [closure_9];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => outer1_9.can(outer1_10.VIEW_CHANNEL, stateFromStores));
  let obj2 = channelId(566);
  const items2 = [closure_8];
  const stateFromStores2 = obj2.useStateFromStores(items2, () => outer1_8.getMessages(channelId));
  const firstResult = stateFromStores2.first();
  let obj4 = channelId(8328);
  const forumPostMediaProperties = obj4.useForumPostMediaProperties(firstResult, false);
  let obj5 = channelId(8328);
  let length;
  const firstMediaIsEmbed = obj5.useFirstMediaIsEmbed(firstResult, false);
  if (null != forumPostMediaProperties) {
    length = forumPostMediaProperties.length;
  }
  let first = null;
  if (length > 0) {
    first = forumPostMediaProperties[0];
  }
  let obj6 = channelId(11133);
  obj = { channel: stateFromStores, media: first };
  const shouldObscure = obj6.useSharedMediaProps(obj).shouldObscure;
  const tmp8 = stateFromStores(15293)(firstResult);
  const tmp9 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  dependencyMap = tmp9;
  const items3 = [channelId, tmp9];
  const effect = React.useEffect(() => {
    if (_undefined) {
      let obj = stateFromStores(_undefined[14]);
      obj = { channelId, after: channelId, limit: 5 };
      const messages = obj.fetchMessages(obj);
    }
  }, items3);
  [][0] = stateFromStores;
  if (null != stateFromStores) {
    if (stateFromStores1) {
      let obj8 = stateFromStores(1392);
      obj = { channelId: stateFromStores.id, icon };
      const resourceChannelIconURL = obj8.getResourceChannelIconURL(obj);
      obj1 = { onPress: tmp11, style: tmp.channelContainer };
      obj2 = { style: tmp.textContent };
      const obj3 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: channelId.title };
      const items4 = [callback(channelId(4126).Text, obj3), , ];
      let tmp22 = tmp15;
      if (null == description || 0 === description.length) {
        tmp22 = null != tmp8;
      }
      if (tmp22) {
        obj4 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail" };
        obj5 = {};
        ({ guild_id: obj16.guildId, id: obj16.channelId } = stateFromStores);
        obj4.children = stateFromStores(4120).parse(tmp8, true, obj5);
        tmp22 = callback(channelId(4126).Text, obj4);
        const obj15 = stateFromStores(4120);
      }
      items4[1] = tmp22;
      let tmp27 = !tmp15;
      if (!(null == description || 0 === description.length)) {
        obj6 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail" };
        ({ guild_id: obj19.guildId, id: obj19.channelId } = stateFromStores);
        obj6.children = stateFromStores(4120).parse(description, true, {});
        tmp27 = callback(channelId(4126).Text, obj6);
        const obj18 = stateFromStores(4120);
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
              obj10.embedLeftBorderColor = channelId(8328).getEmbedColor(firstResult, tmp39);
              let id;
              if (null != firstResult) {
                id = firstResult.id;
              }
              obj10.firstMessageId = id;
              obj10.containerStyle = tmp.thumbnail;
              tmp36Result = callback(channelId(11133).ForumPostMediaThumbnail, obj10);
              const obj23 = channelId(8328);
              const tmp36 = callback;
            }
          } else {
            tmp36Result = null;
          }
        }
      }
      items5[2] = tmp36Result;
      obj1.children = items5;
      return closure_13(channelId(4660).PressableOpacity, obj1);
    }
  }
  return null;
}
({ View: closure_4, Image: closure_5 } = get_ActivityIndicator);
({ Permissions: closure_10, Routes: closure_11 } = ME);
({ jsx: closure_12, jsxs: closure_13 } = jsxProd);
_createForOfIteratorHelperLoose = { container: { paddingHorizontal: 12, display: "flex", flexDirection: "column", alignItems: "center" }, emptyStateContainer: { padding: 20, display: "flex", flexDirection: "column", alignItems: "center" } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, display: "flex", flexDirection: "row", alignItems: "flex-start" };
_createForOfIteratorHelperLoose.channelContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.messageContent = { marginTop: 8 };
_createForOfIteratorHelperLoose.textContent = { flex: 1 };
_createForOfIteratorHelperLoose.thumbnail = { marginLeft: 8 };
_createForOfIteratorHelperLoose.emptyStateImage = { marginTop: 12, marginBottom: 20 };
_createForOfIteratorHelperLoose.icon = { width: 72, height: 72 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default function GuildHomeResources(guildId) {
  guildId = guildId.guildId;
  const tmp = _createForOfIteratorHelperLoose();
  const arr = importDefault(15286)(guildId);
  if (0 === arr.length) {
    let obj = { style: tmp.emptyStateContainer };
    obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary" };
    const intl = guildId(1212).intl;
    obj.children = intl.string(guildId(1212).t.owvC9U);
    const items = [callback(guildId(4126).Text, obj), , ];
    const obj1 = { style: tmp.emptyStateImage, source: importDefault(15294) };
    items[1] = callback(closure_5, obj1);
    const obj2 = {
      onPress() {
          const defaultChannel = outer1_7.getDefaultChannel(guildId);
          if (null != defaultChannel) {
            guildId(outer1_2[21]).transitionTo(outer1_11.CHANNEL(guildId, defaultChannel.id));
            const obj = guildId(outer1_2[21]);
          }
        }
    };
    const intl2 = guildId(1212).intl;
    obj2.text = intl2.string(guildId(1212).t["3iCBUn"]);
    items[2] = callback(guildId(4543).Button, obj2);
    obj.children = items;
    let tmp4 = callback2(closure_4, obj);
  } else {
    obj = { style: tmp.container, children: arr.map((channelId) => outer1_12(outer1_15, { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description }, "resource-" + channelId.channelId)) };
    tmp4 = callback(closure_4, obj);
  }
  return tmp4;
};
