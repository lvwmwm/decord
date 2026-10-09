// Module ID: 16939
// Function ID: 16940
// Name: GuildHomeResources
// Dependencies: [19, 17, 2064, 4707, 5429, 4709, 1085, 21, 5091, 587, 558, 576, 504, 8462, 11638, 16940, 7172, 9292, 1415, 5087, 5078, 6163, 6191, 16933, 1112, 1126, 16941, 5376, 2]

// Module 16939 (GuildHomeResources)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import router_utils from "router_utils" /* 1112 */;
import FastImageDefault from "FastImage" /* 6163 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7172 */;
import GuildOnboardingHomeActionCreators from "GuildOnboardingHomeActionCreators" /* 9292 */;
import useResourceChannelsDefault from "useResourceChannels" /* 16933 */;
import AssetRegistryDefault from "AssetRegistry" /* 16941 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import GuildChannelStore from "GuildChannelStore" /* 4707 */;
import MessageStore from "MessageStore" /* 5429 */;
import PermissionStore from "PermissionStore" /* 4709 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 5091 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let dependencyMap;

let c10;
let c9;
let closure_12;
let obj2;
let unpackModuleId;
const View = react_native.View;
({ Permissions: c9, Routes: c10 } = Constants);
({ jsx: unpackModuleId, jsxs: closure_12 } = Fragment);
let obj = { container: { paddingHorizontal: 12, display: "flex", flexDirection: "column", alignItems: "center" }, emptyStateContainer: { padding: 20, display: "flex", flexDirection: "column", alignItems: "center" }, channelContainer: obj2, messageContent: { marginTop: 8 }, textContent: { flex: 1 }, thumbnail: { marginLeft: 8 }, emptyStateImage: { marginTop: 12, marginBottom: 20 }, icon: { width: 72, height: 72 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: nativeDefault.radii.sm, display: "flex", flexDirection: "row", alignItems: "flex-start" };
let closure_13 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function ResourceChannelRow(channelId) {
  let closure_2;
  let description;
  let first;
  let icon;
  let obj2;
  let title;
  let tmp10;
  let tmp12;
  let tmp13;
  let tmp23;
  let tmp24;
  let tmp7;
  let tmp9;
  let tmp = channelId;
  let obj = channelId(576);
  const cResult = obj.c(63);
  channelId = channelId.channelId;
  ({ title, icon, description } = channelId);
  closure_13();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    class C {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    cResult[1] = channelId;
    cResult[2] = C;
    tmp7 = C;
  } else {
    class C {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
    const items1 = [PermissionStore];
    cResult[3] = items1;
    tmp9 = items1;
  } else {
    class C {
      constructor() {
        return ChannelStore.getChannel(channelId);
      }
    }
  }
  if (cResult[4] !== stateFromStores) {
    class P {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
    cResult[4] = stateFromStores;
    cResult[5] = P;
    tmp10 = P;
  } else {
    class P {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
  }
  const tmpResult6 = tmp(504);
  const stateFromStores1 = tmpResult6.useStateFromStores(tmp9, tmp10);
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    class P {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
    const items2 = [MessageStore];
    cResult[6] = items2;
    tmp12 = items2;
  } else {
    class P {
      constructor() {
        return PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores);
      }
    }
  }
  if (cResult[7] !== channelId) {
    class F {
      constructor() {
        return MessageStore.getMessages(channelId);
      }
    }
    cResult[7] = channelId;
    cResult[8] = F;
    tmp13 = F;
  } else {
    class F {
      constructor() {
        return MessageStore.getMessages(channelId);
      }
    }
  }
  const tmpResult7 = tmp(504);
  const stateFromStores2 = tmpResult7.useStateFromStores(tmp12, tmp13);
  if (cResult[9] !== stateFromStores2) {
    class F {
      constructor() {
        return MessageStore.getMessages(channelId);
      }
    }
    cResult[9] = stateFromStores2;
    cResult[10] = tmp15;
  } else {
    class F {
      constructor() {
        return MessageStore.getMessages(channelId);
      }
    }
  }
  const tmpResult8 = tmp(8462);
  const forumPostMediaProperties = tmpResult8.useForumPostMediaProperties(tmp14, false);
  const tmpResult9 = tmp(8462);
  const firstMediaIsEmbed = tmpResult9.useFirstMediaIsEmbed(tmp14, false);
  if (forumPostMediaProperties != null) {
    class F {
      constructor() {
        return MessageStore.getMessages(channelId);
      }
    }
  }
  if (undefined > 0) {
    class F {
      constructor() {
        return MessageStore.getMessages(channelId);
      }
    }
  }
  if (cResult[11] === stateFromStores) {
    class F {
      constructor() {
        return MessageStore.getMessages(channelId);
      }
    }
    const tmpResult10 = tmp(11638);
    const shouldObscure = tmpResult10.useSharedMediaProps(obj2).shouldObscure;
    stateFromStores(16940)(tmp14);
    if (cResult[14] === stateFromStores) {
      class F {
        constructor() {
          return MessageStore.getMessages(channelId);
        }
      }
      dependencyMap = tmp21;
      if (cResult[17] === channelId) {
        class F {
          constructor() {
            return MessageStore.getMessages(channelId);
          }
        }
        const effect = react.useEffect(tmp23, tmp24);
        if (cResult[21] !== stateFromStores) {
          class F {
            constructor() {
              return MessageStore.getMessages(channelId);
            }
          }
          cResult[21] = stateFromStores;
          cResult[22] = tmp28;
        } else {
          class F {
            constructor() {
              return MessageStore.getMessages(channelId);
            }
          }
        }
        if (null != stateFromStores) {
          class F {
            constructor() {
              return MessageStore.getMessages(channelId);
            }
          }
        }
        return null;
      }
      const fn = function k() {
        const tmp = dependencyMap;
        if (tmp) {
          const obj2 = { channelId, after: channelId, limit: 5 };
          const obj = MessageActionCreatorsDefault;
          const messages = obj.fetchMessages(obj2);
        }
      };
      const items3 = [channelId, tmp21];
      cResult[17] = channelId;
      cResult[18] = tmp21;
      cResult[19] = fn;
      cResult[20] = items3;
      tmp23 = fn;
      tmp24 = items3;
    }
    cResult[14] = stateFromStores;
    cResult[15] = stateFromStores2;
    cResult[16] = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
    const tmp22 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  }
  obj2 = { channel: stateFromStores, media: tmp18 };
  cResult[11] = stateFromStores;
  cResult[12] = null;
  cResult[13] = obj2;
}) : (function ResourceChannelRow(channelId) {
  let closure_2;
  let description;
  let getEmbedColor;
  let icon;
  let id;
  let items4;
  let items5;
  let obj11;
  let obj13;
  let obj16;
  let tmp10Result3;
  let tmp10Result4;
  channelId = channelId.channelId;
  ({ icon, description } = channelId);
  dependencyMap = undefined;
  const title = channelId.title;
  let tmp = closure_13();
  let obj = channelId(504);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let obj2 = channelId(504);
  const items1 = [PermissionStore];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => PermissionStore.can(constants.VIEW_CHANNEL, stateFromStores));
  const items2 = [MessageStore];
  const obj3 = channelId(504);
  const stateFromStores2 = obj3.useStateFromStores(items2, () => MessageStore.getMessages(channelId));
  const firstResult = stateFromStores2.first();
  const obj5 = channelId(8462);
  const forumPostMediaProperties = obj5.useForumPostMediaProperties(firstResult, false);
  let length;
  const obj6 = channelId(8462);
  const firstMediaIsEmbed = obj6.useFirstMediaIsEmbed(firstResult, false);
  if (forumPostMediaProperties != null) {
    length = forumPostMediaProperties.length;
  }
  let first = null;
  if (length > 0) {
    first = forumPostMediaProperties[0];
  }
  const tmp2Result = channelId(11638);
  let flag = tmp2Result.useSharedMediaProps({ channel: stateFromStores, media: first }).shouldObscure;
  const tmp11 = stateFromStores(16940)(firstResult);
  const tmp12 = null != stateFromStores && null == stateFromStores2.first() && !stateFromStores2.loadingMore && !stateFromStores2.ready && !stateFromStores2.hasFetched;
  dependencyMap = tmp12;
  const items3 = [channelId, tmp12];
  const effect = react.useEffect(() => {
    const tmp = closure_2;
    if (tmp) {
      const obj2 = { channelId, after: channelId, limit: 5 };
      const obj = MessageActionCreatorsDefault;
      const messages = obj.fetchMessages(obj2);
    }
  }, items3);
  [][0] = stateFromStores;
  if (null != stateFromStores) {
    if (stateFromStores1) {
      const obj4 = { channelId: stateFromStores.id, icon };
      const tmp10Result = stateFromStores(1415);
      const resourceChannelIconURL = tmp10Result.getResourceChannelIconURL(obj4);
      const obj7 = { onPress: tmp14, style: tmp.channelContainer, children: items5 };
      const obj8 = { style: tmp.textContent, children: items4 };
      const PressableOpacity = tmp2(6191).PressableOpacity;
      const obj9 = { variant: "heading-md/extrabold", color: "mobile-text-heading-primary", children: title };
      items4 = [closure_11(tmp2(5087).Text, obj9), , ];
      let tmp19Result = tmp16 && null != tmp11;
      const tmp18 = View;
      if (tmp19Result) {
        const obj10 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: tmp10Result3.parse(tmp11, true, obj11) };
        const Text = tmp2(5087).Text;
        obj11 = { guildId: null, channelId: null };
        ({ guild_id: obj15.guildId, id: obj15.channelId } = stateFromStores);
        tmp10Result3 = stateFromStores(5078);
        tmp19Result = tmp19(Text, obj10);
      }
      items4[1] = tmp19Result;
      let tmp19Result4 = !tmp16;
      if (tmp19Result4) {
        const obj12 = { variant: "text-sm/normal", color: "text-default", style: tmp.messageContent, lineClamp: 3, ellipsizeMode: "tail", children: tmp10Result4.parse(description, true, obj13) };
        const Text2 = tmp2(5087).Text;
        obj13 = { guildId: null, channelId: null };
        ({ guild_id: obj18.guildId, id: obj18.channelId } = stateFromStores);
        tmp10Result4 = stateFromStores(5078);
        tmp19Result4 = tmp19(Text2, obj12);
      }
      items4[2] = tmp19Result4;
      items5 = [closure_12(tmp18, obj8), , ];
      let tmp19Result5 = null;
      if (null != icon) {
        tmp19Result5 = null;
        if (null != resourceChannelIconURL) {
          const obj14 = { source: obj16, style: tmp.icon };
          obj16 = { uri: resourceChannelIconURL };
          tmp19Result5 = tmp19(tmp10(6163), obj14);
        }
      }
      items5[1] = tmp19Result5;
      let tmp19Result6 = null;
      if (null == resourceChannelIconURL) {
        tmp19Result6 = null;
        if (null != firstResult) {
          let blocked;
          if (firstResult != null) {
            blocked = firstResult.blocked;
          }
          tmp19Result6 = null;
          if (!blocked) {
            tmp19Result6 = null;
            if (null != first) {
              const obj17 = { channel: stateFromStores, media: first, isEmbed: firstMediaIsEmbed, embedLeftBorderColor: getEmbedColor(firstResult, flag), firstMessageId: id, containerStyle: tmp.thumbnail };
              const ForumPostMediaThumbnail = tmp2(11638).ForumPostMediaThumbnail;
              getEmbedColor = tmp2(8462).getEmbedColor;
              channelId(8462);
              if (flag == null) {
                flag = false;
              }
              id = undefined;
              if (firstResult != null) {
                id = firstResult.id;
              }
              tmp19Result6 = tmp19(ForumPostMediaThumbnail, obj17);
            }
          }
        }
      }
      items5[2] = tmp19Result6;
      return closure_12(PressableOpacity, obj7);
    }
  }
  return null;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildHomeResources(guildId) {
  let intl;
  let items;
  let tmp11;
  let tmp6;
  let tmp = guildId;
  let obj = guildId(576);
  const cResult = obj.c(18);
  guildId = guildId.guildId;
  const tmp4 = closure_13();
  const arr = useResourceChannelsDefault(guildId);
  if (cResult[0] !== guildId) {
    function onPress() {
      const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
      const tmp = guildId;
      if (null != defaultChannel) {
        const obj = router_utils;
        obj.transitionTo(authStore.CHANNEL(tmp, defaultChannel.id));
      }
    }
    cResult[0] = guildId;
    cResult[1] = onPress;
    tmp6 = onPress;
  } else {
    tmp6 = cResult[1];
  }
  if (0 === arr.length) {
    let tmp16;
    let tmp19;
    let tmp23;
    let tmp25;
    const _Symbol2 = Symbol;
    const emptyStateContainer = tmp4.emptyStateContainer;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const obj2 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(tmp(1126).t.owvC9U) };
      const Text = tmp(5087).Text;
      intl = tmp(1126).intl;
      const tmp18 = closure_11(Text, obj2);
      cResult[2] = tmp18;
      tmp16 = tmp18;
    } else {
      tmp16 = cResult[2];
    }
    if (cResult[3] !== tmp4.emptyStateImage) {
      const obj3 = { style: tmp4.emptyStateImage, source: AssetRegistryDefault };
      const tmp5Result = FastImageDefault;
      const tmp22 = closure_11(tmp5Result, obj3);
      cResult[3] = tmp4.emptyStateImage;
      cResult[4] = tmp22;
      tmp19 = tmp22;
    } else {
      tmp19 = cResult[4];
    }
    const _Symbol3 = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = tmp(1126).intl;
      const stringResult = intl2.string(tmp(1126).t["3iCBUn"]);
      cResult[5] = stringResult;
      tmp23 = stringResult;
    } else {
      tmp23 = cResult[5];
    }
    if (cResult[6] !== tmp6) {
      const obj4 = { onPress: tmp6, text: tmp23 };
      const tmp27 = closure_11(tmp(5376).Button, obj4);
      cResult[6] = tmp6;
      cResult[7] = tmp27;
      tmp25 = tmp27;
    } else {
      tmp25 = cResult[7];
    }
    if (cResult[8] === tmp4.emptyStateContainer) {
      if (cResult[9] === tmp19) {
        let tmp28;
        if (cResult[10] === tmp25) {
          tmp28 = cResult[11];
        }
        return tmp28;
      }
    }
    const obj5 = { style: emptyStateContainer, children: items };
    items = [tmp16, tmp19, tmp25];
    const tmp31 = closure_12(View, obj5);
    cResult[8] = tmp4.emptyStateContainer;
    cResult[9] = tmp19;
    cResult[10] = tmp25;
    cResult[11] = tmp31;
    tmp28 = tmp31;
  } else {
    const container = tmp4.container;
    if (cResult[12] !== arr) {
      let tmp9;
      const _Symbol = Symbol;
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class E {
          constructor(channelId) {
            const obj = { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description };
            return closure_1_11(closure_1_14, obj, "resource-" + channelId.channelId);
          }
        }
        cResult[14] = E;
        tmp9 = E;
      } else {
        class E {
          constructor(channelId) {
            const obj = { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description };
            return closure_1_11(closure_1_14, obj, "resource-" + channelId.channelId);
          }
        }
      }
      const mapped = arr.map(tmp9);
      cResult[12] = arr;
      cResult[13] = mapped;
    } else {
      class E {
        constructor(channelId) {
          const obj = { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description };
          return closure_1_11(closure_1_14, obj, "resource-" + channelId.channelId);
        }
      }
    }
    if (cResult[15] === tmp4.container) {
      class E {
        constructor(channelId) {
          const obj = { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description };
          return closure_1_11(closure_1_14, obj, "resource-" + channelId.channelId);
        }
      }
      return tmp11;
    }
    const obj6 = { style: container, children: tmp7 };
    const tmp14 = closure_11(View, obj6);
    cResult[15] = tmp4.container;
    cResult[16] = tmp7;
    cResult[17] = tmp14;
    tmp11 = tmp14;
  }
}) : (function GuildHomeResources(guildId) {
  let intl;
  let intl2;
  let items;
  let tmp6;
  guildId = guildId.guildId;
  let tmp = closure_13();
  const arr = useResourceChannelsDefault(guildId);
  if (0 === arr.length) {
    const obj2 = { style: tmp.emptyStateContainer, children: items };
    const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", children: intl.string(guildId(1126).t.owvC9U) };
    const Text = guildId(5087).Text;
    intl = guildId(1126).intl;
    items = [closure_11(Text, obj3), , ];
    const obj4 = { style: tmp.emptyStateImage, source: AssetRegistryDefault };
    const tmp2Result = FastImageDefault;
    items[1] = closure_11(tmp2Result, obj4);
    const obj5 = {
      onPress() {
          const defaultChannel = GuildChannelStore.getDefaultChannel(guildId);
          const tmp = guildId;
          if (null != defaultChannel) {
            const obj = router_utils;
            obj.transitionTo(authStore.CHANNEL(tmp, defaultChannel.id));
          }
        },
      text: intl2.string(guildId(1126).t["3iCBUn"])
    };
    const Button = guildId(5376).Button;
    intl2 = guildId(1126).intl;
    items[2] = closure_11(Button, obj5);
    tmp6 = closure_12(View, obj2);
  } else {
    let obj = {
      style: tmp.container,
      children: arr.map((channelId) => {
          const obj = { channelId: channelId.channelId, title: channelId.title, icon: channelId.icon, description: channelId.description };
          return closure_1_11(closure_1_14, obj, "resource-" + channelId.channelId);
        })
    };
    tmp6 = closure_11(View, obj);
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/native/GuildHomeResources.tsx");

export default tmp4;
