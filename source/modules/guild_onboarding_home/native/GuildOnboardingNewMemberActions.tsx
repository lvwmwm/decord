// Module ID: 15289
// Function ID: 116585
// Name: MemberActionRow
// Dependencies: [31, 27, 4991, 1348, 1917, 1838, 3758, 4333, 4334, 653, 1852, 3746, 33, 4130, 689, 566, 4320, 1392, 11383, 5085, 3771, 4126, 1273, 10949, 4660, 1212, 11388, 15290, 1360, 15291, 2]
// Exports: default

// Module 15289 (MemberActionRow)
import result from "result";
import { View } from "registerAsset";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_isNativeReflectConstruct";
import closure_7 from "_isNativeReflectConstruct";
import closure_8 from "_createForOfIteratorHelperLoose";
import closure_9 from "_isNativeReflectConstruct";
import closure_10 from "_isNativeReflectConstruct";
import closure_11 from "_isNativeReflectConstruct";
import { Permissions } from "ME";
import { EMOJI_URL_BASE_SIZE } from "set";
import { GuildMemberFlags } from "GuildMemberFlags";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_15;
let closure_16;
const require = arg1;
function MemberActionRow(channelId) {
  let completed;
  let icon;
  let title;
  channelId = channelId.channelId;
  let emoji = channelId.emoji;
  let id;
  let stateFromStores;
  ({ title, icon, completed } = channelId);
  const tmp = _createForOfIteratorHelperLoose();
  if (null == emoji) {
    emoji = {};
  }
  id = emoji.id;
  const name = emoji.name;
  let obj1 = channelId(stateFromStores[15]);
  const items = [closure_6];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getChannel(channelId));
  let obj2 = channelId(stateFromStores[15]);
  const items1 = [closure_9];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => outer1_9.can(outer1_12.VIEW_CHANNEL, stateFromStores));
  let obj3 = channelId(stateFromStores[15]);
  const items2 = [_isNativeReflectConstruct];
  const items3 = [id];
  const stateFromStores2 = obj3.useStateFromStores(items2, () => {
    let customEmojiById = null;
    if (null != id) {
      customEmojiById = outer1_5.getCustomEmojiById(id);
    }
    return customEmojiById;
  }, items3);
  let obj4 = id(stateFromStores[17]);
  const newMemberActionIconURL = obj4.getNewMemberActionIconURL({ channelId, icon });
  [][0] = stateFromStores;
  let tmp8 = null;
  if (null != stateFromStores) {
    tmp8 = null;
    if (stateFromStores1) {
      if (null != newMemberActionIconURL) {
        let obj = { style: tmp.icon };
        obj = { uri: newMemberActionIconURL };
        obj.source = obj;
        obj.resizeMode = "contain";
        let tmp17 = callback(id(stateFromStores[19]), obj);
      } else if (null != stateFromStores2) {
        obj1 = { style: tmp.emoji };
        obj2 = {};
        let obj12 = id(stateFromStores[17]);
        obj3 = {};
        ({ id: obj14.id, animated: obj14.animated } = stateFromStores2);
        obj3.size = EMOJI_URL_BASE_SIZE;
        obj2.uri = obj12.getEmojiURL(obj3);
        obj1.source = obj2;
        obj1.resizeMode = "contain";
        tmp17 = callback(id(stateFromStores[19]), obj1);
        const tmp24 = id(stateFromStores[19]);
      } else {
        if (null != name) {
          let obj5 = id(stateFromStores[20]);
          let obj6 = id(stateFromStores[20]);
          if (null != obj5.getByName(obj6.convertSurrogateToName(name, false))) {
            obj4 = { style: tmp.textEmoji, variant: "heading-xxl/normal", children: name };
            tmp17 = callback(channelId(stateFromStores[21]).Text, obj4);
          }
        }
        obj5 = { style: tmp.emojiPlaceholder };
        obj6 = { size: channelId(stateFromStores[22]).Icon.Sizes.REFRESH_SMALL_16, source: id(stateFromStores[23]) };
        obj5.children = callback(channelId(stateFromStores[22]).Icon, obj6);
        tmp17 = callback(View, obj5);
      }
      const obj7 = { onPress: tmp7, style: tmp.actionContainer };
      const items4 = [tmp17, , ];
      const obj8 = { style: tmp.channelNameContainer };
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title };
      const items5 = [callback(channelId(stateFromStores[21]).Text, obj9), ];
      const obj10 = { variant: "text-xs/normal", color: "text-muted" };
      const intl = channelId(stateFromStores[25]).intl;
      const obj11 = { channelName: tmp3 };
      obj10.children = intl.format(channelId(stateFromStores[25]).t.MkzlDL, obj11);
      items5[1] = callback(channelId(stateFromStores[21]).Text, obj10);
      obj8.children = items5;
      items4[1] = callback2(View, obj8);
      obj12 = { disableColor: true, size: channelId(stateFromStores[22]).Icon.Sizes.MEDIUM };
      if (completed) {
        let tmp39 = tmp38[26];
      } else {
        tmp39 = tmp38[27];
      }
      obj12.source = id(tmp39);
      obj12 = callback(channelId(stateFromStores[22]).Icon, obj12);
      items4[2] = obj12;
      obj7.children = items4;
      callback2(channelId(stateFromStores[24]).PressableOpacity, obj7);
      const tmp29 = callback2;
      const tmp36 = callback;
      const tmp37 = id;
    }
  }
  return tmp8;
}
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
_createForOfIteratorHelperLoose = { actionsContainer: { paddingHorizontal: 12 }, actionsHeader: { display: "flex", marginBottom: 16 } };
_createForOfIteratorHelperLoose = { backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOW, marginBottom: 8, padding: 12, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm, display: "flex", flexDirection: "row", alignItems: "center" };
_createForOfIteratorHelperLoose.actionContainer = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.channelNameContainer = { flex: 1, marginHorizontal: 8 };
let obj1 = { width: 40, height: 40, borderRadius: require("_createForOfIteratorHelperLoose").radii.xs };
_createForOfIteratorHelperLoose.icon = obj1;
_createForOfIteratorHelperLoose.emoji = { width: 40, height: 40 };
_createForOfIteratorHelperLoose.textEmoji = { width: 40, textAlign: "center" };
let obj2 = { width: 40, height: 40, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWEST, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" };
_createForOfIteratorHelperLoose.emojiPlaceholder = obj2;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/guild_onboarding_home/native/GuildOnboardingNewMemberActions.tsx");

export default function GuildOnboardingNewMemberActions(guildId) {
  guildId = guildId.guildId;
  let tmp = _createForOfIteratorHelperLoose();
  let obj = guildId(stateFromStores2[15]);
  const items = [closure_10];
  const items1 = [guildId];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_10.getNewMemberActions(guildId), items1);
  let obj1 = guildId(stateFromStores2[15]);
  const items2 = [closure_11];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => outer1_11.getCompletedActions(guildId));
  let obj2 = guildId(stateFromStores2[15]);
  const items3 = [closure_7];
  stateFromStores2 = obj2.useStateFromStores(items3, () => outer1_7.getSelfMember(guildId));
  let obj3 = guildId(stateFromStores2[15]);
  const items4 = [closure_8];
  const stateFromStores3 = obj3.useStateFromStores(items4, () => outer1_8.getGuild(guildId));
  const items5 = [stateFromStores1, guildId, ];
  let flags;
  if (null != stateFromStores2) {
    flags = stateFromStores2.flags;
  }
  items5[2] = flags;
  const effect = stateFromStores3.useEffect(() => {
    let hasFlagResult = null == stateFromStores1;
    if (hasFlagResult) {
      let flags;
      if (null != stateFromStores2) {
        flags = stateFromStores2.flags;
      }
      hasFlagResult = null != flags;
    }
    if (hasFlagResult) {
      flags = stateFromStores2.flags;
      let num2 = 0;
      if (null != flags) {
        num2 = flags;
      }
      hasFlagResult = guildId(stateFromStores2[28]).hasFlag(num2, outer1_14.STARTED_HOME_ACTIONS);
      const obj = guildId(stateFromStores2[28]);
    }
    if (hasFlagResult) {
      const newMemberActions = guildId(stateFromStores2[18]).fetchNewMemberActions(guildId);
      const obj2 = guildId(stateFromStores2[18]);
    }
  }, items5);
  [][0] = stateFromStores3;
  let tmp22Result = null;
  if (null != stateFromStores2) {
    tmp22Result = null;
    if (null != stateFromStores) {
      tmp22Result = null;
      if (0 !== stateFromStores.length) {
        obj = { style: tmp.actionsContainer };
        obj = { style: tmp.actionsHeader };
        obj1 = { variant: "heading-lg/bold", color: "mobile-text-heading-primary" };
        const intl2 = guildId(stateFromStores2[25]).intl;
        obj1.children = intl2.string(guildId(stateFromStores2[25]).t.LhlgY9);
        obj.children = callback(guildId(stateFromStores2[21]).Text, obj1);
        const items6 = [
          callback(View, obj),
          stateFromStores.map((channelId) => {
                  const obj = { channelId: channelId.channelId, title: channelId.title, emoji: channelId.emoji, icon: channelId.icon };
                  let tmp3;
                  if (null != stateFromStores1) {
                    tmp3 = stateFromStores1[channelId.channelId];
                  }
                  obj.completed = null != tmp3 && tmp3;
                  return outer1_15(outer1_18, obj, "member-action-" + channelId.channelId);
                }),

        ];
        let rulesChannelId;
        if (null != stateFromStores3) {
          rulesChannelId = stateFromStores3.rulesChannelId;
        }
        let tmp11 = null != rulesChannelId;
        if (tmp11) {
          obj2 = { onPress: tmp8, style: tmp.actionContainer };
          obj3 = { style: tmp.emojiPlaceholder };
          const obj4 = { size: guildId(stateFromStores2[22]).Icon.Sizes.REFRESH_SMALL_16, source: stateFromStores1(stateFromStores2[29]) };
          obj3.children = callback(guildId(stateFromStores2[22]).Icon, obj4);
          const items7 = [callback(View, obj3), ];
          const obj5 = { style: tmp.channelNameContainer };
          const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary" };
          const intl = guildId(stateFromStores2[25]).intl;
          obj6.children = intl.string(guildId(stateFromStores2[25]).t["K/i3iQ"]);
          obj5.children = callback(guildId(stateFromStores2[21]).Text, obj6);
          items7[1] = callback(View, obj5);
          obj2.children = items7;
          tmp11 = callback2(guildId(stateFromStores2[24]).PressableOpacity, obj2);
        }
        items6[2] = tmp11;
        obj.children = items6;
        tmp22Result = callback2(View, obj);
        const tmp22 = callback2;
        const tmp23 = View;
      }
    }
  }
  return tmp22Result;
};
