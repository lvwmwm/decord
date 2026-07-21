// Module ID: 9933
// Function ID: 76857
// Name: AppInteractionInfoActionSheet
// Dependencies: []
// Exports: default

// Module 9933 (AppInteractionInfoActionSheet)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
const tmp2 = arg1(dependencyMap[5]);
let closure_10 = arg1(dependencyMap[6]).createStyles({ itemContainer: { borderWidth: 14, position: "default_guilds_activity_restricted", top: "enum", left: null }, itemLabel: { -2046424494: null, 651580065: 0.3, -11371588: "-50%" } });
const obj = arg1(dependencyMap[6]);
const result = arg1(dependencyMap[19]).fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  let guildId;
  let onBack;
  message = message.message;
  const arg1 = message;
  ({ guildId, onBack } = message);
  const importDefault = onBack;
  let dependencyMap;
  let React;
  let View;
  let closure_5;
  let closure_6;
  const tmp = callback3();
  const items = [onBack];
  const interactionMetadata = message.interactionMetadata;
  let tmp3;
  const memo = React.useMemo(() => callback(onBack(tmp3[8]), { onBack }), items);
  if (null != interactionMetadata) {
    tmp3 = interactionMetadata.authorizing_integration_owners[closure_0(undefined, closure_2[9]).ApplicationIntegrationType.USER_INSTALL];
  }
  dependencyMap = tmp3;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp6;
  if (null != interactionMetadata2) {
    tmp6 = interactionMetadata2.authorizing_integration_owners[closure_0(undefined, closure_2[9]).ApplicationIntegrationType.GUILD_INSTALL];
  }
  React = tmp6;
  const interactionMetadata3 = message.interactionMetadata;
  let id;
  if (null != interactionMetadata3) {
    id = interactionMetadata3.user.id;
  }
  View = id;
  let obj = arg1(dependencyMap[10]);
  const items1 = [closure_7];
  const stateFromStores = obj.useStateFromStores(items1, () => authStore.getUser(tmp3));
  closure_5 = stateFromStores;
  let obj1 = arg1(dependencyMap[10]);
  const items2 = [closure_6];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => tmp15.getGuild(tmp6));
  let obj2 = arg1(dependencyMap[10]);
  const items3 = [closure_7];
  const stateFromStores2 = obj2.useStateFromStores(items3, () => authStore.getUser(id));
  closure_6 = stateFromStores2;
  const items4 = [stateFromStores, tmp3];
  const effect = React.useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != tmp3;
    }
    if (tmp) {
      const user = message(message[11]).getUser(tmp3);
      const obj = message(message[11]);
    }
  }, items4);
  let tmp14 = stateFromStores2;
  if (null == stateFromStores2) {
    let tmp15 = closure_5;
    const interactionMetadata4 = message.interactionMetadata;
    let user;
    if (null != interactionMetadata4) {
      user = interactionMetadata4.user;
    }
    const prototype = tmp15.prototype;
    tmp15 = new tmp15(user);
    closure_6 = tmp15;
    tmp14 = tmp15;
  }
  if (null != stateFromStores1) {
    obj = { style: tmp.itemContainer };
    obj = { guild: stateFromStores1, size: arg1(dependencyMap[12]).GuildIconSizes.SMALL_32 };
    const items5 = [callback(importDefault(dependencyMap[12]), obj), ];
    obj1 = { style: tmp.itemLabel };
    obj2 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", children: stateFromStores1.name };
    const items6 = [callback(arg1(dependencyMap[13]).Text, obj2), ];
    const obj3 = {};
    const intl2 = arg1(dependencyMap[14]).intl;
    const obj4 = { application: message.author.username };
    obj3.children = intl2.format(arg1(dependencyMap[14]).t.ShLXXB, obj4);
    items6[1] = callback(arg1(dependencyMap[13]).Text, obj3);
    obj1.children = items6;
    items5[1] = callback2(View, obj1);
    obj.children = items5;
    let tmp27 = callback2(View, obj);
    const tmp33 = importDefault(dependencyMap[12]);
  } else {
    tmp27 = null;
    if (null != stateFromStores) {
      const obj5 = {
        onPress() {
              return onBack(tmp3[16])({ userId: stateFromStores.id, channelId: message.channel_id });
            }
      };
      const obj6 = { style: tmp.itemContainer };
      const obj7 = { user: stateFromStores, size: arg1(dependencyMap[17]).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      const items7 = [callback(arg1(dependencyMap[17]).Avatar, obj7), ];
      const obj8 = { style: tmp.itemLabel };
      const obj9 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", children: stateFromStores.username };
      const items8 = [callback(arg1(dependencyMap[13]).Text, obj9), ];
      const obj10 = {};
      const intl = arg1(dependencyMap[14]).intl;
      const obj11 = { application: message.author.username };
      obj10.children = intl.format(arg1(dependencyMap[14]).t.ShLXXB, obj11);
      items8[1] = callback(arg1(dependencyMap[13]).Text, obj10);
      obj8.children = items8;
      items7[1] = callback2(View, obj8);
      obj6.children = items7;
      obj5.children = callback2(View, obj6);
      tmp27 = callback(arg1(dependencyMap[15]).PressableOpacity, obj5);
    }
  }
  const obj12 = { header: memo, bodyStyles: { paddingBottom: importDefault(dependencyMap[7])().bottom } };
  const items9 = [tmp27, ];
  let tmp36 = null;
  if (null != tmp14) {
    const obj13 = {
      onPress() {
          return onBack(tmp3[16])({ userId: tmp15.id, channelId: message.channel_id });
        }
    };
    const obj14 = { style: tmp.itemContainer };
    const obj15 = { user: tmp14, size: arg1(dependencyMap[17]).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    const items10 = [callback(arg1(dependencyMap[17]).Avatar, obj15), ];
    const obj16 = { style: tmp.itemLabel };
    const obj17 = { hasMaxConnections: null, isBoostOnlySubscription: "text-sm/semibold", children: tmp14.username };
    const items11 = [callback(arg1(dependencyMap[13]).Text, obj17), ];
    const obj18 = {};
    const intl3 = arg1(dependencyMap[14]).intl;
    obj18.children = intl3.string(arg1(dependencyMap[14]).t.04gxNg);
    items11[1] = callback(arg1(dependencyMap[13]).Text, obj18);
    obj16.children = items11;
    items10[1] = callback2(View, obj16);
    obj14.children = items10;
    obj13.children = callback2(View, obj14);
    tmp36 = callback(arg1(dependencyMap[15]).PressableOpacity, obj13);
  }
  items9[1] = tmp36;
  obj12.children = items9;
  return callback2(arg1(dependencyMap[18]).BottomSheet, obj12);
};
