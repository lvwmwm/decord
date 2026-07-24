// Module ID: 9974
// Function ID: 77104
// Name: AppInteractionInfoActionSheet
// Dependencies: [31, 27, 1857, 1838, 1849, 33, 4130, 1557, 9975, 8224, 566, 7976, 5513, 4126, 1212, 4660, 8537, 1273, 5187, 2]
// Exports: default

// Module 9974 (AppInteractionInfoActionSheet)
import result from "result";
import { View } from "get ActivityIndicator";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import closure_6 from "_createForOfIteratorHelperLoose";
import closure_7 from "_isNativeReflectConstruct";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_8;
let closure_9;
const require = arg1;
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let closure_10 = _createForOfIteratorHelperLoose.createStyles({ itemContainer: { flexDirection: "row", paddingVertical: 12, paddingHorizontal: 16, alignItems: "center" }, itemLabel: { flexDirection: "column", alignItems: "flex-start", paddingLeft: 12 } });
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/applications/native/AppInteractionInfoActionSheet.tsx");

export default function AppInteractionInfoActionSheet(message) {
  let guildId;
  let onBack;
  message = message.message;
  ({ guildId, onBack } = message);
  let dependencyMap;
  let React;
  let id;
  let stateFromStores;
  let stateFromStores2;
  let tmp = callback3();
  const items = [onBack];
  const interactionMetadata = message.interactionMetadata;
  let tmp3;
  const memo = React.useMemo(() => outer1_8(onBack(_undefined[8]), { onBack }), items);
  if (null != interactionMetadata) {
    tmp3 = interactionMetadata.authorizing_integration_owners[message(undefined, 8224).ApplicationIntegrationType.USER_INSTALL];
  }
  dependencyMap = tmp3;
  const interactionMetadata2 = message.interactionMetadata;
  let tmp6;
  if (null != interactionMetadata2) {
    tmp6 = interactionMetadata2.authorizing_integration_owners[message(undefined, 8224).ApplicationIntegrationType.GUILD_INSTALL];
  }
  React = tmp6;
  const interactionMetadata3 = message.interactionMetadata;
  id = undefined;
  if (null != interactionMetadata3) {
    id = interactionMetadata3.user.id;
  }
  let obj = message(566);
  const items1 = [closure_7];
  stateFromStores = obj.useStateFromStores(items1, () => outer1_7.getUser(c2));
  let obj1 = message(566);
  const items2 = [stateFromStores2];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => stateFromStores2.getGuild(c3));
  let obj2 = message(566);
  const items3 = [closure_7];
  stateFromStores2 = obj2.useStateFromStores(items3, () => outer1_7.getUser(id));
  const items4 = [stateFromStores, tmp3];
  const effect = React.useEffect(() => {
    let tmp = null == stateFromStores;
    if (tmp) {
      tmp = null != _undefined;
    }
    if (tmp) {
      const user = message(_undefined[11]).getUser(_undefined);
      const obj = message(_undefined[11]);
    }
  }, items4);
  let tmp14 = stateFromStores2;
  if (null == stateFromStores2) {
    let tmp15 = stateFromStores;
    const interactionMetadata4 = message.interactionMetadata;
    let user;
    if (null != interactionMetadata4) {
      user = interactionMetadata4.user;
    }
    const prototype = tmp15.prototype;
    tmp15 = new tmp15(user);
    stateFromStores2 = tmp15;
    tmp14 = tmp15;
  }
  if (null != stateFromStores1) {
    obj = { style: tmp.itemContainer };
    obj = { guild: stateFromStores1, size: message(5513).GuildIconSizes.SMALL_32 };
    const items5 = [callback(onBack(5513), obj), ];
    obj1 = { style: tmp.itemLabel };
    obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores1.name };
    const items6 = [callback(message(4126).Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-subtle" };
    const intl2 = message(1212).intl;
    const obj4 = { application: message.author.username };
    obj3.children = intl2.format(message(1212).t.ShLXXB, obj4);
    items6[1] = callback(message(4126).Text, obj3);
    obj1.children = items6;
    items5[1] = callback2(id, obj1);
    obj.children = items5;
    let tmp27 = callback2(id, obj);
    const tmp33 = onBack(5513);
  } else {
    tmp27 = null;
    if (null != stateFromStores) {
      const obj5 = {
        onPress() {
              return onBack(_undefined[16])({ userId: stateFromStores.id, channelId: message.channel_id });
            }
      };
      const obj6 = { style: tmp.itemContainer };
      const obj7 = { user: stateFromStores, size: message(1273).AvatarSizes.REFRESH_MEDIUM_32, guildId };
      const items7 = [callback(message(1273).Avatar, obj7), ];
      const obj8 = { style: tmp.itemLabel };
      const obj9 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: stateFromStores.username };
      const items8 = [callback(message(4126).Text, obj9), ];
      const obj10 = { variant: "text-xs/medium", color: "text-subtle" };
      const intl = message(1212).intl;
      const obj11 = { application: message.author.username };
      obj10.children = intl.format(message(1212).t.ShLXXB, obj11);
      items8[1] = callback(message(4126).Text, obj10);
      obj8.children = items8;
      items7[1] = callback2(id, obj8);
      obj6.children = items7;
      obj5.children = callback2(id, obj6);
      tmp27 = callback(message(4660).PressableOpacity, obj5);
    }
  }
  const obj12 = { header: memo, bodyStyles: { paddingBottom: onBack(1557)().bottom } };
  const items9 = [tmp27, ];
  let tmp36 = null;
  if (null != tmp14) {
    const obj13 = {
      onPress() {
          return onBack(_undefined[16])({ userId: stateFromStores2.id, channelId: message.channel_id });
        }
    };
    const obj14 = { style: tmp.itemContainer };
    const obj15 = { user: tmp14, size: message(1273).AvatarSizes.REFRESH_MEDIUM_32, guildId };
    const items10 = [callback(message(1273).Avatar, obj15), ];
    const obj16 = { style: tmp.itemLabel };
    const obj17 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: tmp14.username };
    const items11 = [callback(message(4126).Text, obj17), ];
    const obj18 = { variant: "text-xs/medium", color: "text-subtle" };
    const intl3 = message(1212).intl;
    obj18.children = intl3.string(message(1212).t["04gxNg"]);
    items11[1] = callback(message(4126).Text, obj18);
    obj16.children = items11;
    items10[1] = callback2(id, obj16);
    obj14.children = items10;
    obj13.children = callback2(id, obj14);
    tmp36 = callback(message(4660).PressableOpacity, obj13);
  }
  items9[1] = tmp36;
  obj12.children = items9;
  return callback2(message(5187).BottomSheet, obj12);
};
