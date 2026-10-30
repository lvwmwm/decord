// Module ID: 15696
// Function ID: 15697
// Name: GuildSettingsServerTagPreview
// Dependencies: [5, 32, 19, 17, 1384, 8385, 21, 5009, 575, 504, 6036, 1410, 15697, 5619, 1114, 6022, 5712, 15698, 9276, 15699, 15743, 5629, 6971, 2]
// Exports: default

// Module 15696 (GuildSettingsServerTagPreview)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 575 */;
import GuildTagConstants from "GuildTagConstants" /* 8385 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 5009 */;
import size_mod from "module_2" /* 2 */;

let _undefined, c3, dependencyMap;

let c10;
let c9;
let obj2;
let obj3;
let obj4;
let obj5;
let size;
let unpackModuleId;
const View = react_native.View;
const GuildTagBadgeSize = GuildTagConstants.GuildTagBadgeSize;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { card: obj2, notice: obj3, message: obj4, unfocused: { opacity: 0.5 }, avatar: size, messageBody: { flex: 1 }, usernameRow: obj5 };
obj2 = { padding: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_12 };
obj4 = { flexDirection: "row", columnGap: nativeDefault.space.PX_12, alignItems: "flex-start" };
size = { width: 40, height: 40, borderRadius: nativeDefault.radii.round };
obj5 = { flexDirection: "row", alignItems: "center", columnGap: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default function GuildSettingsServerTagPreview(guildId) {
  let badge;
  let c2;
  let currentUser;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items10;
  let items11;
  let items12;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let primaryColor;
  let secondaryColor;
  let stringResult;
  let tag;
  let tmp13;
  let tmp17Result;
  let variant;
  guildId = guildId.guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  const isDirty = guildId.isDirty;
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  dependencyMap = undefined;
  let tmp = closure_12();
  const tmp3 = dependencyMap;
  let obj = guildId(504);
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const tmp4 = onAdopted;
  let obj3 = onAdopted(6036);
  const name = obj3.useName(guildId, null, stateFromStores);
  let avatarURL;
  const makeSource = onAdopted(1410).makeSource;
  const tmp6 = onAdopted(1410);
  if (stateFromStores != null) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = makeSource(avatarURL);
  if (stateFromStores != null) {
    const primaryGuild = stateFromStores.primaryGuild;
    if (primaryGuild != null) {
      identityGuildId = primaryGuild.identityGuildId;
    }
  }
  let tmp10 = identityGuildId === guildId;
  if (tmp10) {
    let identityEnabled;
    if (stateFromStores != null) {
      const primaryGuild2 = stateFromStores.primaryGuild;
      if (primaryGuild2 != null) {
        identityEnabled = primaryGuild2.identityEnabled;
      }
    }
    tmp10 = true === identityEnabled;
  }
  [tmp13, c2] = _slicedToArray(react.useState(false), 2);
  const items1 = [guildId, onAdopted];
  const tmp12 = _slicedToArray(react.useState(false), 2);
  const callback = react.useCallback(_asyncToGenerator(async (arg0, value) => {
    let c2;
    let closure_0;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        let tmp;
        c3 = 2;
        if (0 === _undefined) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_1 = tmp4;
            tmp = undefined;
            _undefined(true);
            const obj2 = tmp(_undefined[12]);
            _undefined = 1;
            c3 = 1;
            const obj5 = { value: obj2.adoptGuildIdentity(guildId, true), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          tmp = value;
          closure_129_2(false);
          if (tmp.ok) {
            if (closure_129_1 != null) {
              closure_129_1();
            }
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp18) {
        c3 = 3;
        throw tmp18;
      }
    }
  }), items1);
  let obj2 = { variant: "text-sm/medium", color: "text-muted", style: tmp.notice, children: stringResult };
  const Text = tmp2(5619).Text;
  const intl = tmp2(1114).intl;
  const string = intl.string;
  const t = tmp2(1114).t;
  const tmp16 = closure_11;
  if (tmp10) {
    stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  const items2 = [tmp17(Text, obj2), ];
  let obj4 = { spacing: tmp4(575).space.PX_12, children: items6 };
  const Stack = tmp2(6022).Stack;
  let obj5 = { style: items3, children: items4 };
  items3 = [, ];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp);
  const obj6 = { source: tmp4(15698), style: tmp.avatar, importantForAccessibility: "no" };
  const tmp4Result = tmp4(5712);
  items4 = [tmp17(tmp4Result, obj6), ];
  const obj7 = { style: tmp.messageBody, children: items5 };
  items5 = [tmp17(tmp2(5619).Text, { variant: "text-md/semibold", color: "text-default", children: "Locke" }), ];
  const obj8 = { variant: "text-md/normal", color: "text-default", children: intl2.string(guildId(1114).t.KZQ4mF) };
  const Text2 = tmp2(5619).Text;
  intl2 = tmp2(1114).intl;
  items5[1] = closure_9(Text2, obj8);
  items4[1] = closure_10(View, obj7);
  items6 = [tmp15(View, obj5), , , ];
  const obj9 = { style: tmp.message, children: items7 };
  items7 = [, ];
  const obj10 = { source, style: tmp.avatar, importantForAccessibility: "no" };
  items7[0] = closure_9(tmp4(5712), obj10);
  const obj11 = { style: tmp.messageBody, children: items9 };
  const obj12 = { style: tmp.usernameRow, children: items8 };
  items8 = [tmp17(tmp2(5619).Text, { variant: "text-md/semibold", color: "text-default", children: name }), ];
  let tmp17Result3 = null != tag;
  if (tmp17Result3) {
    tmp17Result3 = "" !== tag;
  }
  if (tmp17Result3) {
    const obj13 = { guildTag: tag, guildBadge: tmp17Result };
    tmp17Result = undefined;
    const BaseGuildTagChiplet = tmp2(9276).BaseGuildTagChiplet;
    if (null != badge) {
      size = { badge, primaryTintColor: primaryColor, secondaryTintColor: secondaryColor, width: null, height: null };
      const GuildBadge = tmp2(15699).GuildBadge;
      ({ SIZE_12: obj15.width, SIZE_12: obj15.height } = GuildTagBadgeSize);
      tmp17Result = tmp17(GuildBadge, size);
    }
    tmp17Result3 = tmp17(BaseGuildTagChiplet, obj13);
  }
  items8[1] = tmp17Result3;
  items9 = [tmp15(tmp19, obj12), ];
  const obj14 = { variant: "text-md/normal", color: "text-default", children: intl3.string(guildId(1114).t.LKsPRe) };
  const Text3 = tmp2(5619).Text;
  intl3 = tmp2(1114).intl;
  items9[1] = closure_9(Text3, obj14);
  items7[1] = closure_10(View, obj11);
  items6[1] = closure_10(View, obj9);
  const obj16 = { style: items10, children: items11 };
  items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp);
  const obj17 = { source: tmp4(15743), style: tmp.avatar, importantForAccessibility: "no" };
  const tmp4Result2 = tmp4(5712);
  items11 = [tmp17(tmp4Result2, obj17), ];
  const obj18 = { style: tmp.messageBody, children: items12 };
  items12 = [tmp17(tmp2(5619).Text, { variant: "text-md/semibold", color: "text-default", children: "Phibi" }), ];
  const obj19 = { variant: "text-md/normal", color: "text-default", children: intl4.string(guildId(1114).t.vtCg11) };
  const Text4 = tmp2(5619).Text;
  intl4 = tmp2(1114).intl;
  items12[1] = closure_9(Text4, obj19);
  items11[1] = closure_10(View, obj18);
  items6[2] = closure_10(View, obj16);
  const obj20 = { variant: "primary", text: intl5.string(guildId(1114).t.cQDYRu), loading: tmp13, disabled: tmp10, onPress: callback };
  const Button = tmp2(5629).Button;
  intl5 = tmp2(1114).intl;
  if (!tmp10) {
    tmp10 = tmp13;
  }
  if (!tmp10) {
    tmp10 = isDirty;
  }
  if (!tmp10) {
    tmp10 = null == tag;
  }
  if (!tmp10) {
    tmp10 = "" === tag;
  }
  const obj21 = { children: items2 };
  items6[3] = closure_9(Button, obj20);
  items2[1] = closure_10(Stack, obj4);
  const tmp15Result = closure_10(tmp16, obj21);
  let tmp17Result4 = tmp15Result;
  if ("plain" !== variant) {
    const obj22 = { variant: "secondary", radius: 16, style: tmp.card, children: tmp15Result };
    tmp17Result4 = tmp17(tmp2(6971).Card, obj22);
  }
  return tmp17Result4;
};
