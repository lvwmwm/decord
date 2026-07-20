// Module ID: 10952
// Function ID: 85199
// Name: MentionableSelectComponentActionSheet
// Dependencies: []
// Exports: default

// Module 10952 (MentionableSelectComponentActionSheet)
let Fonts;
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
({ Fonts, DEFAULT_ROLE_COLOR_HEX: closure_9 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[7]));
let obj = arg1(dependencyMap[8]);
obj = {};
obj = { color: importDefault(dependencyMap[9]).colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
obj.name = obj;
const tmp3 = arg1(dependencyMap[7]);
obj.discriminator = { color: importDefault(dependencyMap[9]).colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
obj.roleCountContainer = {};
obj.roleCountText = { paddingRight: 4 };
let closure_12 = obj.createStyles(obj);
const obj1 = { color: importDefault(dependencyMap[9]).colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
const result = arg1(dependencyMap[23]).fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

export default function MentionableSelectComponentActionSheet(selectionActionComponent) {
  let allowEmpty;
  let containerId;
  let isSelected;
  let labelComponent;
  let onPressOptionItem;
  let onSubmit;
  let options;
  let setQuery;
  let submitSelection;
  selectionActionComponent = selectionActionComponent.selectionActionComponent;
  const arg1 = selectionActionComponent;
  const channelId = selectionActionComponent.channelId;
  const importDefault = channelId;
  const guildId = selectionActionComponent.guildId;
  const dependencyMap = guildId;
  let closure_5;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  const React = callback2();
  const guild = guild.getGuild(guildId);
  const View = guild;
  let id;
  if (null != guild) {
    id = guild.id;
  }
  closure_5 = importDefault(dependencyMap[10])(id, arg1(dependencyMap[11]).MIN_REREQUEST_TIME);
  const items = [selectionActionComponent, channelId];
  const callback = React.useCallback((query) => selectionActionComponent(guildId[11]).queryMentionables(selectionActionComponent.type, query, channelId), items);
  const tmp5 = importDefault(dependencyMap[12])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  const selectedOptions = tmp5.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp5);
  const callback1 = React.useCallback((type) => {
    let customIconSrc;
    let unicodeEmoji;
    if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
      const user = authStore.getUser(type.value);
      if (null == user) {
        return null;
      } else {
        const isMobileOnlineResult = closure_7.isMobileOnline(user.id);
        const status = closure_7.getStatus(user.id);
        let obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: closure_7.isVROnline(user.id), status };
        let tmp20;
        if (null != guildId) {
          tmp20 = guildId;
        }
        obj.guildId = tmp20;
        obj.size = selectionActionComponent(guildId[14]).AvatarSizes.XSMALL;
        return callback(selectionActionComponent(guildId[14]).Avatar, obj);
      }
    } else if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.ROLE) {
      if (null != guild) {
        const role = store.getRole(guild.id, type.value);
      }
      if (null != guild) {
        if (null != role) {
          if (obj6.canGuildUseRoleIcons(guild, role)) {
            obj = selectionActionComponent(guildId[15]);
            let roleIconData = obj.getRoleIconData(role);
            if (null == roleIconData) {
              roleIconData = {};
            }
            ({ customIconSrc, unicodeEmoji } = roleIconData);
            let tmp9;
            if (null != customIconSrc) {
              obj = { uri: customIconSrc };
              tmp9 = obj;
            }
            const obj1 = { source: tmp9, unicodeEmoji, size: 24, name: role.name };
            return callback(channelId(guildId[16]), obj1);
          }
          const obj2 = {};
          let colorString;
          if (null != role) {
            colorString = role.colorString;
          }
          if (null == colorString) {
            colorString = closure_9;
          }
          obj2.color = colorString;
          return callback(selectionActionComponent(guildId[17]).ShieldUserIcon, obj2);
        }
      }
      return null;
    }
  }, items1);
  return callback(importDefault(dependencyMap[18]), {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription(type) {
      if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
        const user = authStore.getUser(type.value);
        const obj = { user };
        ({ name: obj.usernameStyle, discriminator: obj.discriminatorStyle, name: obj.nicknameStyle } = closure_3);
        return callback(channelId(guildId[19]), obj);
      }
    },
    renderOptionSuffix(item) {
      if (item.type === selectionActionComponent(guildId[13]).SelectOptionType.ROLE) {
        let role;
        if (null != guild) {
          role = store.getRole(guild.id, item.value);
        }
        let tmp6 = null;
        if (null != role) {
          let tmp8;
          if (null != store) {
            tmp8 = store[role.id];
          }
          tmp6 = tmp8;
        }
        if (null != tmp6) {
          let obj = { style: closure_3.roleCountContainer };
          obj = { style: closure_3.roleCountText, children: tmp6 };
          const items = [callback(selectionActionComponent(guildId[20]).Text, obj), ];
          obj = { size: "xs" };
          items[1] = callback(selectionActionComponent(guildId[21]).UserIcon, obj);
          obj.children = items;
          return callback2(guild, obj);
        }
      }
    },
    selectionActionComponent,
    labelComponent,
    options,
    selectedCount: selectedOptions.length,
    selectedOptions,
    isSelected,
    submitSelection,
    onQueryChange: setQuery,
    itemAccessibilityLabel(type) {
      if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
        const user = authStore.getUser(type.value);
        if (null != user) {
          if (user.bot) {
            const intl3 = selectionActionComponent(guildId[22]).intl;
            let obj = { username: type.label };
            let discriminator;
            if (null != user) {
              discriminator = user.discriminator;
            }
            obj.discriminator = discriminator;
            let formatToPlainStringResult = intl3.formatToPlainString(selectionActionComponent(guildId[22]).t.zogo/8, obj);
          }
          return formatToPlainStringResult;
        }
        const intl2 = selectionActionComponent(guildId[22]).intl;
        obj = { username: type.label };
        let discriminator1;
        if (null != user) {
          discriminator1 = user.discriminator;
        }
        obj.discriminator = discriminator1;
        formatToPlainStringResult = intl2.formatToPlainString(selectionActionComponent(guildId[22]).t.AydQ7a, obj);
      } else if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.ROLE) {
        const intl = selectionActionComponent(guildId[22]).intl;
        obj = { roleName: type.label };
        return intl.formatToPlainString(selectionActionComponent(guildId[22]).t.F6ejkk, obj);
      }
    },
    channelId,
    allowEmpty
  });
};
