// Module ID: 10968
// Function ID: 85293
// Name: MentionableSelectComponentActionSheet
// Dependencies: [31, 27, 1910, 1838, 4217, 1849, 653, 33, 4130, 689, 5148, 7802, 10969, 4359, 1273, 5489, 5490, 8422, 10967, 9429, 4126, 10970, 1212, 2]
// Exports: default

// Module 10968 (MentionableSelectComponentActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import closure_5 from "_createForOfIteratorHelperLoose";
import closure_6 from "_createForOfIteratorHelperLoose";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_8 from "_isNativeReflectConstruct";
import ME from "ME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let Fonts;
let closure_10;
let closure_11;
let closure_9;
const require = arg1;
({ Fonts, DEFAULT_ROLE_COLOR_HEX: closure_9 } = ME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { color: require("_createForOfIteratorHelperLoose").colors.INTERACTIVE_TEXT_DEFAULT, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12, lineHeight: 16 };
_createForOfIteratorHelperLoose.name = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.discriminator = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
_createForOfIteratorHelperLoose.roleCountContainer = { display: "flex", flexDirection: "row", flexGrow: 1, alignItems: "center", justifyContent: "flex-end", marginRight: 12 };
_createForOfIteratorHelperLoose.roleCountText = { paddingRight: 4 };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { color: require("_createForOfIteratorHelperLoose").colors.TEXT_MUTED, fontFamily: Fonts.PRIMARY_MEDIUM, fontSize: 12 };
const result = require("_createForOfIteratorHelperLoose").fileFinishedImporting("modules/interaction_components/native/components/MentionableSelectComponentActionSheet.tsx");

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
  const channelId = selectionActionComponent.channelId;
  const guildId = selectionActionComponent.guildId;
  let closure_5;
  ({ labelComponent, containerId, onSubmit, allowEmpty } = selectionActionComponent);
  const React = _createForOfIteratorHelperLoose();
  guild = guild.getGuild(guildId);
  let id;
  if (null != guild) {
    id = guild.id;
  }
  closure_5 = channelId(guildId[10])(id, selectionActionComponent(guildId[11]).MIN_REREQUEST_TIME);
  let items = [selectionActionComponent, channelId];
  const callback = React.useCallback((query) => selectionActionComponent(guildId[11]).queryMentionables(selectionActionComponent.type, query, channelId), items);
  const tmp5 = channelId(guildId[12])({ selectActionComponent: selectionActionComponent, containerId, guildId, queryOptions: callback, onSubmit });
  const selectedOptions = tmp5.selectedOptions;
  const items1 = [guild, guildId];
  ({ options, isSelected, onPressOptionItem, submitSelection, setQuery } = tmp5);
  const callback1 = React.useCallback((type) => {
    let customIconSrc;
    let unicodeEmoji;
    if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
      const user = outer1_8.getUser(type.value);
      if (null == user) {
        return null;
      } else {
        const isMobileOnlineResult = outer1_7.isMobileOnline(user.id);
        const status = outer1_7.getStatus(user.id);
        let obj = { user, isMobileOnline: isMobileOnlineResult, isVROnline: outer1_7.isVROnline(user.id), status };
        let tmp20;
        if (null != guildId) {
          tmp20 = guildId;
        }
        obj.guildId = tmp20;
        obj.size = selectionActionComponent(guildId[14]).AvatarSizes.XSMALL;
        return outer1_10(selectionActionComponent(guildId[14]).Avatar, obj);
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
            return outer1_10(channelId(guildId[16]), obj1);
          }
          const obj2 = {};
          let colorString;
          if (null != role) {
            colorString = role.colorString;
          }
          if (null == colorString) {
            colorString = outer1_9;
          }
          obj2.color = colorString;
          return outer1_10(selectionActionComponent(guildId[17]).ShieldUserIcon, obj2);
        }
      }
      return null;
    }
  }, items1);
  return callback(channelId(guildId[18]), {
    onPressOptionItem,
    renderIcon: callback1,
    renderDescription(type) {
      if (type.type === selectionActionComponent(guildId[13]).SelectOptionType.USER) {
        const user = outer1_8.getUser(type.value);
        const obj = { user };
        ({ name: obj.usernameStyle, discriminator: obj.discriminatorStyle, name: obj.nicknameStyle } = result);
        return outer1_10(channelId(guildId[19]), obj);
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
          let obj = { style: result.roleCountContainer };
          obj = { style: result.roleCountText, variant: "text-sm/medium", color: "interactive-text-default", children: tmp6 };
          const items = [outer1_10(selectionActionComponent(guildId[20]).Text, obj), ];
          obj = { size: "xs" };
          items[1] = outer1_10(selectionActionComponent(guildId[21]).UserIcon, obj);
          obj.children = items;
          return outer1_11(guild, obj);
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
        const user = outer1_8.getUser(type.value);
        if (null != user) {
          if (user.bot) {
            const intl3 = selectionActionComponent(guildId[22]).intl;
            let obj = { username: type.label };
            let discriminator;
            if (null != user) {
              discriminator = user.discriminator;
            }
            obj.discriminator = discriminator;
            let formatToPlainStringResult = intl3.formatToPlainString(selectionActionComponent(guildId[22]).t["zogo/8"], obj);
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
