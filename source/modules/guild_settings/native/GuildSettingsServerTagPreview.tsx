// Module ID: 12799
// Function ID: 98093
// Name: GuildSettingsServerTagPreview
// Dependencies: []
// Exports: default

// Module 12799 (GuildSettingsServerTagPreview)
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
const obj2 = { columnGap: importDefault(dependencyMap[8]).space.PX_12 };
obj.avatar = { borderRadius: importDefault(dependencyMap[8]).radii.round };
obj.messageBody = { flex: 1 };
const obj4 = { "Null": 7, "Null": 370, columnGap: importDefault(dependencyMap[8]).space.PX_4 };
obj.usernameRow = obj4;
let closure_13 = obj.createStyles(obj);
const obj3 = { borderRadius: importDefault(dependencyMap[8]).radii.round };
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
  obj = { hasMaxConnections: "<string:3086024708>", isBoostOnlySubscription: "<string:625475588>", style: tmp2.notice };
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
  const obj5 = { hasMaxConnections: 1, isBoostOnlySubscription: 1 };
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
  const obj10 = { hasMaxConnections: false, isBoostOnlySubscription: false, children: name };
  const items8 = [callback3(arg1(closure_2[13]).Text, obj10), ];
  let tmp18Result = null != tag;
  if (tmp18Result) {
    tmp18Result = "" !== tag;
  }
  if (tmp18Result) {
    const obj11 = { guildTag: tag };
    let tmp22Result;
    if (null != badge) {
      const obj12 = { badge };
      let tmp25;
      if (null != primaryColor) {
        tmp25 = primaryColor;
      }
      obj12.primaryTintColor = tmp25;
      let tmp26;
      if (null != secondaryColor) {
        tmp26 = secondaryColor;
      }
      obj12.secondaryTintColor = tmp26;
      ({ SIZE_12: obj18.width, SIZE_12: obj18.height } = GuildTagBadgeSize);
      tmp22Result = callback3(arg1(closure_2[18]).GuildBadge, obj12);
      const tmp22 = callback3;
    }
    obj11.guildBadge = tmp22Result;
    tmp18Result = callback3(arg1(closure_2[17]).BaseGuildTagChiplet, obj11);
    const tmp18 = callback3;
  }
  items8[1] = tmp18Result;
  obj9.children = items8;
  const items9 = [callback4(closure_7, obj9), ];
  const obj13 = { hasMaxConnections: 1, isBoostOnlySubscription: 1 };
  const intl3 = arg1(closure_2[14]).intl;
  obj13.children = intl3.string(arg1(closure_2[14]).t.LKsPRe);
  items9[1] = callback3(arg1(closure_2[13]).Text, obj13);
  obj8.children = items9;
  items7[1] = callback4(closure_7, obj8);
  obj6.children = items7;
  items6[1] = callback4(closure_7, obj6);
  const obj14 = { style: items10 };
  const items10 = [, ];
  ({ message: arr11[0], unfocused: arr11[1] } = tmp2);
  const items11 = [callback3(closure_6, { source: importDefault(closure_2[19]), style: tmp2.avatar, importantForAccessibility: "no" }), ];
  const obj16 = { style: tmp2.messageBody };
  const items12 = [callback3(arg1(closure_2[13]).Text, { deer: "va", Ufm9XX: "textDecoder", playstationVersion: "PRESS_ADD_WISHLIST_ITEM" }), ];
  const obj17 = { hasMaxConnections: 1, isBoostOnlySubscription: 1 };
  const intl4 = arg1(closure_2[14]).intl;
  obj17.children = intl4.string(arg1(closure_2[14]).t.vtCg11);
  items12[1] = callback3(arg1(closure_2[13]).Text, obj17);
  obj16.children = items12;
  items11[1] = callback4(closure_7, obj16);
  obj14.children = items11;
  items6[2] = callback4(closure_7, obj14);
  const obj18 = { variant: "primary" };
  const intl5 = arg1(closure_2[14]).intl;
  obj18.text = intl5.string(arg1(closure_2[14]).t.cQDYRu);
  obj18.loading = first;
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
  obj18.disabled = isDirty;
  obj18.onPress = callback;
  items6[3] = callback3(arg1(closure_2[20]).Button, obj18);
  obj1.children = items6;
  items2[1] = callback4(arg1(closure_2[15]).Stack, obj1);
  obj.children = items2;
  const tmp11Result = callback4(closure_12, obj);
  let tmp30 = tmp11Result;
  if ("plain" !== variant) {
    const obj19 = { style: tmp2.card, children: tmp11Result };
    tmp30 = callback3(arg1(closure_2[21]).Card, obj19);
  }
  return tmp30;
};
