// Module ID: 8959
// Function ID: 70676
// Name: ConnectAccountStep
// Dependencies: []
// Exports: ConnectedAccountCard, default

// Module 8959 (ConnectAccountStep)
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
({ jsx: closure_8, jsxs: closure_9 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = { container: {}, header: {}, headerIcons: {} };
obj = { backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_SURFACE_HIGH, borderColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE, borderRadius: importDefault(dependencyMap[7]).radii.md };
obj.card = obj;
obj.cardName = {};
obj.cardInfo = { minWidth: 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002083014728617223, textAlign: -0.00000000000000021706246366567451, fontSize: 0.00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001452188837802891, marginBottom: 1758272659704396000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 };
const tmp2 = arg1(dependencyMap[5]);
obj.platformIcon = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
const obj2 = { bhk: "boolean", bic: "string", borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.platformIconSmall = obj2;
const obj3 = { <string:3444758704>: "<string:141641101>", <string:1640095385>: "<string:1090519040>", <string:1945719179>: "100%", <string:1446730851>: "<string:1166889217>", <string:126153300>: "_handleGuildMembersChunkBatch", <string:1806464968>: "<string:275841280>", <string:1446732972>: "<string:1358954496>", backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_FEEDBACK_INFO, borderColor: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_INFO, borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.infoNotice = obj3;
obj.infoText = { flex: 1 };
const obj1 = { borderRadius: importDefault(dependencyMap[7]).radii.sm };
obj.divider = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
let closure_10 = obj.createStyles(obj);
const obj4 = { backgroundColor: importDefault(dependencyMap[7]).colors.BORDER_SUBTLE };
const result = arg1(dependencyMap[22]).fileFinishedImporting("modules/oauth2/native/ConnectAccountStep.tsx");

export default function ConnectAccountStep(clientId) {
  clientId = clientId.clientId;
  const arg1 = clientId;
  const platformType = clientId.platformType;
  const importDefault = platformType;
  const platformName = clientId.platformName;
  const tmp = callback3();
  let obj = arg1(dependencyMap[9]);
  const items = [closure_5];
  const items1 = [clientId];
  const stateFromStores = obj.useStateFromStores(items, () => application.getApplication(clientId), items1);
  let obj1 = arg1(dependencyMap[9]);
  const items2 = [closure_6, closure_7];
  const stateFromStores1 = obj1.useStateFromStores(items2, () => {
    let currentUser = null;
    if (null != id.getId()) {
      currentUser = currentUser.getCurrentUser();
    }
    return currentUser;
  });
  let obj2 = importDefault(dependencyMap[10]);
  const value = obj2.get(platformType);
  if (null == value) {
    let applicationIconSource;
    if (null != stateFromStores) {
      let obj5 = importDefault(dependencyMap[11]);
      obj = {};
      ({ id: obj7.id, icon: obj7.icon } = stateFromStores);
      applicationIconSource = obj5.getApplicationIconSource(obj);
    }
    let userAvatarSource;
    if (null != stateFromStores1) {
      let obj7 = importDefault(dependencyMap[11]);
      userAvatarSource = obj7.getUserAvatarSource(stateFromStores1);
    }
    let name;
    if (null != stateFromStores) {
      name = stateFromStores.name;
    }
    let str = "";
    if (null != name) {
      str = name;
    }
    const items3 = [clientId];
    const effect = React.useEffect(() => {
      const application = platformType(closure_2[13]).fetchApplication(clientId);
    }, items3);
    obj = { style: tmp.container };
    obj1 = { style: tmp.header };
    obj2 = { style: tmp.headerIcons };
    let obj3 = { source: applicationIconSource, size: arg1(dependencyMap[14]).AvatarSizes.XLARGE };
    const items4 = [callback(arg1(dependencyMap[14]).Avatar, obj3), , ];
    let obj4 = { color: importDefault(dependencyMap[7]).colors.INTERACTIVE_TEXT_DEFAULT, size: "md" };
    items4[1] = callback(arg1(dependencyMap[15]).MoreHorizontalIcon, obj4);
    obj5 = { source: userAvatarSource, size: arg1(dependencyMap[14]).AvatarSizes.XLARGE };
    items4[2] = callback(arg1(dependencyMap[14]).Avatar, obj5);
    obj2.children = items4;
    const items5 = [callback2(View, obj2), , ];
    const obj6 = {};
    const intl = arg1(dependencyMap[17]).intl;
    obj6.children = intl.string(arg1(dependencyMap[17]).t.uT1CPa);
    items5[1] = callback(arg1(dependencyMap[16]).Text, obj6);
    obj7 = { children: str };
    items5[2] = callback(arg1(dependencyMap[16]).Text, obj7);
    obj1.children = items5;
    const items6 = [callback2(View, obj1), , , ];
    const obj8 = {};
    const intl2 = arg1(dependencyMap[17]).intl;
    const obj9 = { applicationName: str, platformName };
    obj8.children = intl2.format(arg1(dependencyMap[17]).t.aJRE/Q, obj9);
    items6[1] = callback(arg1(dependencyMap[16]).Text, obj8);
    const obj10 = { style: tmp.card };
    let tmp24 = null;
    if (null != null) {
      const obj11 = { source: null, style: tmp.platformIcon, disableColor: true };
      tmp24 = callback(arg1(dependencyMap[14]).Icon, obj11);
    }
    const items7 = [tmp24, , ];
    const obj12 = { 0: true, 0: true, 0: true, style: tmp.cardName, children: platformName };
    items7[1] = callback(arg1(dependencyMap[16]).Text, obj12);
    const obj13 = {
      9223372036854775807: 32768000,
      -9223372036854775808: 30653696,
      onPress() {
          platformType(closure_2[19])({ platformType, location: "OAuth2 Connect Account Step" });
        }
    };
    const intl3 = arg1(dependencyMap[17]).intl;
    obj13.text = intl3.string(arg1(dependencyMap[17]).t.S0W8Z5);
    items7[2] = callback(arg1(dependencyMap[18]).Button, obj13);
    obj10.children = items7;
    items6[2] = callback2(View, obj10);
    const obj14 = { style: tmp.infoNotice };
    const obj15 = { color: importDefault(dependencyMap[7]).colors.ICON_FEEDBACK_INFO, size: "sm" };
    const items8 = [callback(arg1(dependencyMap[20]).CircleInformationIcon, obj15), ];
    const obj16 = { style: tmp.infoText };
    const intl4 = arg1(dependencyMap[17]).intl;
    const obj17 = { platformName, applicationName: str };
    obj16.children = intl4.format(arg1(dependencyMap[17]).t.8psEFX, obj17);
    items8[1] = callback(arg1(dependencyMap[16]).Text, obj16);
    obj14.children = items8;
    items6[3] = callback2(View, obj14);
    obj.children = items6;
    return callback2(View, obj);
  } else {
    obj3 = arg1(dependencyMap[11]);
    obj4 = arg1(dependencyMap[12]);
    const icon = value.icon;
    const source = obj3.makeSource(obj4.isThemeLight(tmp2) ? icon.lightPNG : icon.darkPNG);
  }
};
export const ConnectedAccountCard = function ConnectedAccountCard(arg0) {
  let applicationName;
  let connectedAccount;
  let platformName;
  let platformType;
  ({ platformName, connectedAccount } = arg0);
  ({ platformType, applicationName } = arg0);
  const tmp = callback3();
  let obj = importDefault(dependencyMap[10]);
  const value = obj.get(platformType);
  if (null == value) {
    obj = { style: tmp.container };
    obj = {};
    const intl = arg1(dependencyMap[17]).intl;
    let obj1 = { platformName };
    obj.children = intl.format(arg1(dependencyMap[17]).t.+oaRw3, obj1);
    const items = [callback(arg1(dependencyMap[16]).Text, obj), , , ];
    let obj2 = { style: tmp.card };
    let tmp12 = null;
    if (null != null) {
      const obj3 = { source: null, style: tmp.platformIconSmall, disableColor: true };
      tmp12 = callback(arg1(dependencyMap[14]).Icon, obj3);
    }
    const items1 = [tmp12, , ];
    const obj4 = { style: tmp.cardInfo };
    const obj5 = { children: connectedAccount.name };
    const items2 = [callback(arg1(dependencyMap[16]).Text, obj5), ];
    const obj6 = {};
    const intl2 = arg1(dependencyMap[17]).intl;
    const obj7 = { platformName, connectedAccountId: connectedAccount.id };
    obj6.children = intl2.format(arg1(dependencyMap[17]).t.Dkd7sE, obj7);
    items2[1] = callback(arg1(dependencyMap[16]).Text, obj6);
    obj4.children = items2;
    items1[1] = callback2(View, obj4);
    const obj8 = { color: importDefault(dependencyMap[7]).colors.TEXT_FEEDBACK_POSITIVE, size: "sm" };
    items1[2] = callback(arg1(dependencyMap[21]).CheckmarkLargeIcon, obj8);
    obj2.children = items1;
    items[1] = callback2(View, obj2);
    const obj9 = {};
    const intl3 = arg1(dependencyMap[17]).intl;
    const obj10 = { applicationName };
    obj9.children = intl3.format(arg1(dependencyMap[17]).t.pyRNXJ, obj10);
    items[2] = callback(arg1(dependencyMap[16]).Text, obj9);
    const obj11 = { style: tmp.divider };
    items[3] = callback(View, obj11);
    obj.children = items;
    return callback2(View, obj);
  } else {
    obj1 = arg1(dependencyMap[11]);
    obj2 = arg1(dependencyMap[12]);
    const icon = value.icon;
    const source = obj1.makeSource(obj2.isThemeLight(tmp2) ? icon.lightPNG : icon.darkPNG);
  }
};
