// Module ID: 12790
// Function ID: 98048
// Name: GuildSettingsServerTagPreview
// Dependencies: []
// Exports: default

// Module 12790 (GuildSettingsServerTagPreview)
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importAll(dependencyMap[2]);
({ Image: closure_6, View: closure_7 } = arg1(dependencyMap[3]));
let closure_8 = importDefault(dependencyMap[4]);
const GuildTagBadgeSize = arg1(dependencyMap[5]).GuildTagBadgeSize;
const tmp2 = arg1(dependencyMap[3]);
({ jsx: closure_10, jsxs: closure_11, Fragment: closure_12 } = arg1(dependencyMap[6]));
let obj = arg1(dependencyMap[7]);
obj = {};
obj = { padding: importDefault(dependencyMap[8]).space.PX_16 };
obj.card = obj;
const tmp3 = arg1(dependencyMap[6]);
obj.notice = { marginBottom: importDefault(dependencyMap[8]).space.PX_12 };
const obj1 = { marginBottom: importDefault(dependencyMap[8]).space.PX_12 };
obj.message = { columnGap: importDefault(dependencyMap[8]).space.PX_12 };
obj.unfocused = { opacity: 0.5 };
const obj3 = { aze: 30706176, azj: 378290688, borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.avatar = obj3;
obj.messageBody = { flex: 1 };
const obj4 = { -9223372036854775808: true, filter: true, columnGap: importDefault(dependencyMap[8]).space.PX_4 };
obj.usernameRow = obj4;
let closure_13 = obj.createStyles(obj);
const obj2 = { columnGap: importDefault(dependencyMap[8]).space.PX_12 };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/guild_settings/native/GuildSettingsServerTagPreview.tsx");

export default function GuildSettingsServerTagPreview(guildId) {
  let badge;
  let primaryColor;
  let secondaryColor;
  let tag;
  let variant;
  guildId = guildId.guildId;
  const arg1 = guildId;
  ({ tag, badge, primaryColor, secondaryColor, variant } = guildId);
  if (variant === undefined) {
    variant = "card";
  }
  const onAdopted = guildId.onAdopted;
  const importDefault = onAdopted;
  let closure_2;
  const tmp2 = callback5();
  let obj = arg1(closure_2[9]);
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = importDefault(closure_2[10]);
  const name = obj2.useName(guildId, null, stateFromStores);
  let obj3 = importDefault(closure_2[11]);
  let avatarURL;
  if (null != stateFromStores) {
    avatarURL = stateFromStores.getAvatarURL(guildId, 40);
  }
  let identityGuildId;
  const source = obj3.makeSource(avatarURL);
  if (null != stateFromStores) {
    const primaryGuild = stateFromStores.primaryGuild;
    if (null != primaryGuild) {
      identityGuildId = primaryGuild.identityGuildId;
    }
  }
  let isDirty = identityGuildId === guildId;
  if (isDirty) {
    let identityEnabled;
    if (null != stateFromStores) {
      const primaryGuild2 = stateFromStores.primaryGuild;
      if (null != primaryGuild2) {
        identityEnabled = primaryGuild2.identityEnabled;
      }
    }
    isDirty = true === identityEnabled;
  }
  const tmp8 = callback2(React.useState(false), 2);
  const first = tmp8[0];
  closure_2 = tmp8[1];
  // CreateGeneratorClosureLongIndex (0x67)
  const items1 = [guildId, onAdopted];
  obj = {};
  const callback = React.useCallback(callback(tmp), items1);
  obj = { INTEGRATION_CREATE: "<string:3305963521>", ConstraintReasonCode: "<string:671547393>", style: tmp2.notice };
  const intl = arg1(closure_2[14]).intl;
  const string = intl.string;
  const t = arg1(closure_2[14]).t;
  if (isDirty) {
    let stringResult = string(t.hRsJ7T);
  } else {
    stringResult = string(t.OVvzY0);
  }
  obj.children = stringResult;
  const items2 = [callback3(arg1(closure_2[13]).Text, obj), ];
  const obj1 = { spacing: importDefault(closure_2[8]).space.PX_12 };
  obj2 = { style: items3 };
  const items3 = [, ];
  ({ message: arr4[0], unfocused: arr4[1] } = tmp2);
  obj3 = { source: importDefault(closure_2[16]), style: tmp2.avatar, importantForAccessibility: "no" };
  const items4 = [callback3(closure_6, obj3), ];
  const obj4 = { style: tmp2.messageBody };
  const items5 = [callback3(arg1(closure_2[13]).Text, {}), ];
  const obj5 = {};
  const intl2 = arg1(closure_2[14]).intl;
  obj5.children = intl2.string(arg1(closure_2[14]).t.KZQ4mF);
  items5[1] = callback3(arg1(closure_2[13]).Text, obj5);
  obj4.children = items5;
  items4[1] = callback4(closure_7, obj4);
  obj2.children = items4;
  const items6 = [callback4(closure_7, obj2), , , ];
  const obj6 = { style: tmp2.message };
  const items7 = [callback3(closure_6, { source, style: tmp2.avatar, importantForAccessibility: "no" }), ];
  const obj8 = { style: tmp2.messageBody };
  const obj9 = { style: tmp2.usernameRow };
  const items8 = [callback3(arg1(closure_2[13]).Text, { children: name }), ];
  let tmp18Result = null != tag;
  if (tmp18Result) {
    tmp18Result = "" !== tag;
  }
  if (tmp18Result) {
    const obj10 = { guildTag: tag };
    let tmp22Result;
    if (null != badge) {
      const obj11 = { badge };
      let tmp25;
      if (null != primaryColor) {
        tmp25 = primaryColor;
      }
      obj11.primaryTintColor = tmp25;
      let tmp26;
      if (null != secondaryColor) {
        tmp26 = secondaryColor;
      }
      obj11.secondaryTintColor = tmp26;
      ({ SIZE_12: obj17.width, SIZE_12: obj17.height } = GuildTagBadgeSize);
      tmp22Result = callback3(arg1(closure_2[18]).GuildBadge, obj11);
      const tmp22 = callback3;
    }
    obj10.guildBadge = tmp22Result;
    tmp18Result = callback3(arg1(closure_2[17]).BaseGuildTagChiplet, obj10);
    const tmp18 = callback3;
  }
  items8[1] = tmp18Result;
  obj9.children = items8;
  const items9 = [callback4(closure_7, obj9), ];
  const obj12 = {};
  const intl3 = arg1(closure_2[14]).intl;
  obj12.children = intl3.string(arg1(closure_2[14]).t.LKsPRe);
  items9[1] = callback3(arg1(closure_2[13]).Text, obj12);
  obj8.children = items9;
  items7[1] = callback4(closure_7, obj8);
  obj6.children = items7;
  items6[1] = callback4(closure_7, obj6);
  const obj13 = { style: items10 };
  const items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp2);
  const items11 = [callback3(closure_6, { source: importDefault(closure_2[19]), style: tmp2.avatar, importantForAccessibility: "no" }), ];
  const obj15 = { style: tmp2.messageBody };
  const items12 = [callback3(arg1(closure_2[13]).Text, {}), ];
  const obj16 = {};
  const intl4 = arg1(closure_2[14]).intl;
  obj16.children = intl4.string(arg1(closure_2[14]).t.vtCg11);
  items12[1] = callback3(arg1(closure_2[13]).Text, obj16);
  obj15.children = items12;
  items11[1] = callback4(closure_7, obj15);
  obj13.children = items11;
  items6[2] = callback4(closure_7, obj13);
  const obj17 = { variant: "primary" };
  const intl5 = arg1(closure_2[14]).intl;
  obj17.text = intl5.string(arg1(closure_2[14]).t.cQDYRu);
  obj17.loading = first;
  if (!isDirty) {
    isDirty = first;
  }
  if (!isDirty) {
    isDirty = guildId.isDirty;
  }
  if (!isDirty) {
    isDirty = null == tag;
  }
  if (!isDirty) {
    isDirty = "" === tag;
  }
  obj17.disabled = isDirty;
  obj17.onPress = callback;
  items6[3] = callback3(arg1(closure_2[20]).Button, obj17);
  obj1.children = items6;
  items2[1] = callback4(arg1(closure_2[15]).Stack, obj1);
  obj.children = items2;
  const tmp11Result = callback4(closure_12, obj);
  let tmp30 = tmp11Result;
  if ("plain" !== variant) {
    const obj18 = { style: tmp2.card, children: tmp11Result };
    tmp30 = callback3(arg1(closure_2[21]).Card, obj18);
  }
  return tmp30;
};
