// Module ID: 8479
// Function ID: 67714
// Name: Loading
// Dependencies: []
// Exports: default

// Module 8479 (Loading)
function Loading() {
  const tmp = callback4();
  const items = [];
  let num = 0;
  do {
    let tmp2 = closure_13;
    let tmp3 = closure_1;
    let tmp4 = closure_2;
    let obj = { row: num };
    let arr = items.push(closure_13(closure_1(closure_2[12]), obj, num));
    num = num + 1;
  } while (num < 10);
  obj = {};
  obj = { style: tmp.placeholderHeader };
  const items1 = [callback2(closure_5, obj), callback2(closure_5, { style: tmp.placeholderLabel }), items];
  obj.children = items1;
  return callback3(closure_14, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
({ View: closure_5, ScrollView: closure_6 } = arg1(dependencyMap[2]));
let closure_7 = importDefault(dependencyMap[3]);
let closure_8 = importDefault(dependencyMap[4]);
let closure_9 = importDefault(dependencyMap[5]);
let closure_10 = importDefault(dependencyMap[6]);
const InviteTargetTypes = arg1(dependencyMap[7]).InviteTargetTypes;
const Permissions = arg1(dependencyMap[8]).Permissions;
const tmp2 = arg1(dependencyMap[2]);
({ jsx: closure_13, Fragment: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
let obj = arg1(dependencyMap[10]);
obj = {};
obj = { 396577459: "redesign/message-preview/semibold", -380404912: "primary", 791211009: false, 1359503782: 600, borderRadius: importDefault(dependencyMap[11]).radii.sm, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_MUTED };
obj.placeholderHeader = obj;
const obj1 = { paddingVertical: 43429554630913340000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, flexDirection: 216209880155298300000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, alignItems: 12236022931463798000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, borderRadius: importDefault(dependencyMap[11]).radii.sm, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_MOD_MUTED };
obj.placeholderLabel = obj1;
obj.errorEmptyState = { backgroundColor: "transparent" };
const tmp3 = arg1(dependencyMap[9]);
obj.searchAndShareContainer = { borderTopWidth: 1, borderColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE, marginTop: importDefault(dependencyMap[11]).space.PX_8, paddingVertical: importDefault(dependencyMap[11]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_12, flexDirection: "column", gap: importDefault(dependencyMap[11]).space.PX_12 };
const obj2 = { borderTopWidth: 1, borderColor: importDefault(dependencyMap[11]).colors.BORDER_SUBTLE, marginTop: importDefault(dependencyMap[11]).space.PX_8, paddingVertical: importDefault(dependencyMap[11]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_12, flexDirection: "column", gap: importDefault(dependencyMap[11]).space.PX_12 };
obj.inviteAgeText = { paddingBottom: importDefault(dependencyMap[11]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_4 };
obj.shareApps = { paddingVertical: 0 };
let closure_16 = obj.createStyles(obj);
const obj3 = { paddingBottom: importDefault(dependencyMap[11]).space.PX_8, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_4 };
const result = arg1(dependencyMap[37]).fileFinishedImporting("modules/instant_invite/native/components/InstantInviteActionSheet.tsx");

export default function InstantInviteActionSheet(channel) {
  let code;
  let isFetchingRows;
  let rows;
  let targetApplicationId;
  channel = channel.channel;
  const arg1 = channel;
  const source = channel.source;
  const importDefault = source;
  const vanityURLCode = channel.vanityURLCode;
  const dependencyMap = vanityURLCode;
  ({ guildScheduledEventId: closure_3, targetApplicationId, code } = channel);
  const React = code;
  let stateFromStores;
  let closure_7;
  const tmp = callback4();
  const analyticsLocations = importDefault(dependencyMap[14])(importDefault(dependencyMap[15]).INSTANT_INVITE_MODAL).analyticsLocations;
  const tmp2 = importDefault(dependencyMap[14]);
  if (null != targetApplicationId) {
    const items = [targetApplicationId];
    let items1 = items;
  } else {
    items1 = [];
  }
  let name = callback(importDefault(dependencyMap[16])(items1), 1)[0];
  let obj = arg1(dependencyMap[17]);
  const items2 = [closure_10, closure_8, closure_7];
  stateFromStores = obj.useStateFromStores(items2, () => {
    if (null != code) {
      return code;
    } else {
      if (channel.isGuildStageVoice()) {
        if (!closure_10.can(constants.CREATE_INSTANT_INVITE, channel)) {
          const stageInstanceByChannel = str.getStageInstanceByChannel(channel.id);
          let invite_code;
          if (null != stageInstanceByChannel) {
            invite_code = stageInstanceByChannel.invite_code;
          }
          if (null != invite_code) {
            return stageInstanceByChannel.invite_code;
          }
        }
      }
      if (null != vanityURLCode) {
        if (null != closure_3) {
          let obj = { baseCode: vanityURLCode, guildScheduledEventId: closure_3 };
          let inviteKeyFromExtraData = channel(vanityURLCode[18]).generateInviteKeyFromExtraData(obj);
          const obj3 = channel(vanityURLCode[18]);
        } else {
          inviteKeyFromExtraData = vanityURLCode;
        }
        return inviteKeyFromExtraData;
      } else {
        let invite = store.getInvite();
        if (null != invite) {
          if (null != closure_3) {
            obj = channel(vanityURLCode[18]);
            obj = { baseCode: invite.code };
            invite = closure_3;
            obj.guildScheduledEventId = closure_3;
            let code = obj.generateInviteKeyFromExtraData(obj);
          } else {
            code = invite.code;
          }
        }
      }
    }
  });
  let obj1 = arg1(dependencyMap[17]);
  const items3 = [closure_8];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => store.getError());
  let tmp6 = null;
  if (null != stateFromStores) {
    tmp6 = importDefault(dependencyMap[19])(stateFromStores);
  }
  let str = "";
  if (null != tmp6) {
    let obj2 = arg1(dependencyMap[20]);
    str = obj2.getShareMessage(tmp6);
  }
  closure_7 = str;
  let EMBEDDED_APPLICATION = null;
  if (null != targetApplicationId) {
    EMBEDDED_APPLICATION = InviteTargetTypes.EMBEDDED_APPLICATION;
  }
  const items4 = [channel, analyticsLocations];
  const items5 = [channel, stateFromStores, str, source];
  const callback = React.useCallback((userId) => {
    let obj = source(vanityURLCode[21]);
    obj.hideActionSheet();
    obj = { userId, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    source(vanityURLCode[22])(obj);
  }, items4);
  const items6 = [channel];
  const callback1 = React.useCallback((arg0) => {
    if (null != stateFromStores) {
      const obj = { channel, code: stateFromStores, message: str, location: source };
      arg0(obj);
      const guildId = channel.getGuildId();
      const result = channel(vanityURLCode[23]).setHubProgressActionComplete(guildId, channel(vanityURLCode[24]).HubProgressStep.INVITE_USER);
      const obj2 = channel(vanityURLCode[23]);
    }
  }, items5);
  const items7 = [stateFromStores, channel, source];
  const callback2 = React.useCallback(() => {
    const guildId = channel.getGuildId();
    const result = channel(vanityURLCode[23]).setHubProgressActionComplete(guildId, channel(vanityURLCode[24]).HubProgressStep.INVITE_USER);
  }, items6);
  const items8 = [stateFromStores, channel, str, source];
  const callback3 = React.useCallback(() => channel(vanityURLCode[20]).handleCopy(stateFromStores, channel, source), items7);
  const items9 = [channel];
  const callback4 = React.useCallback(() => channel(vanityURLCode[20]).handleOpenShareSheet(stateFromStores, channel, str, source), items8);
  const callback5 = React.useCallback(() => channel(vanityURLCode[20]).handlePressSettings(channel), items9);
  const tmp3 = importDefault(dependencyMap[16]);
  ({ rows, isFetchingRows } = importDefault(dependencyMap[25])(channel, source, EMBEDDED_APPLICATION, targetApplicationId));
  let tmp20 = null == stateFromStores;
  if (!tmp20) {
    tmp20 = 0 === rows.length && isFetchingRows;
    const tmp21 = 0 === rows.length && isFetchingRows;
  }
  let tmp23 = null != stateFromStores;
  if (tmp23) {
    tmp23 = 0 === rows.length;
  }
  if (tmp23) {
    tmp23 = !isFetchingRows;
  }
  const first = callback(React.useState(tmp23), 1)[0];
  obj = { value: analyticsLocations };
  obj = { "Bool(false)": null, "Bool(false)": null, "Bool(false)": null };
  let tmp27 = null != stateFromStores1;
  if (!tmp27) {
    tmp27 = !tmp20;
  }
  if (!tmp27) {
    tmp27 = !first;
  }
  obj.showGradient = tmp27;
  obj1 = {};
  if (null != targetApplicationId) {
    if (null != name) {
      const intl3 = arg1(dependencyMap[28]).intl;
      obj2 = {};
      name = name.name;
      obj2.applicationName = name;
      let formatToPlainStringResult = intl3.formatToPlainString(arg1(dependencyMap[28]).t.ZdK3dW, obj2);
    } else {
      const intl2 = arg1(dependencyMap[28]).intl;
      formatToPlainStringResult = intl2.string(arg1(dependencyMap[28]).t.OzOM/q);
    }
  } else {
    const intl = arg1(dependencyMap[28]).intl;
    obj1.title = intl.string(arg1(dependencyMap[28]).t.f1+QIK);
    obj.header = callback2(tmp29, obj1);
    if (null != stateFromStores1) {
      const obj3 = { style: tmp.errorEmptyState, Illustration: arg1(dependencyMap[30]).AppCrash, title: stateFromStores1 };
      let tmp38Result = callback2(arg1(dependencyMap[29]).EmptyState, obj3);
    } else if (tmp20) {
      tmp38Result = callback2(Loading, {});
    } else if (first) {
      const obj4 = {};
      const obj5 = { paddingBottom: importDefault(dependencyMap[13])().bottom + 16 };
      obj4.contentContainerStyle = obj5;
      const obj6 = { link: tmp6, onCopy: callback3, onShare: callback4, onPressSettings: callback5 };
      obj4.children = callback2(importDefault(dependencyMap[31]), obj6);
      tmp38Result = callback2(stateFromStores, obj4);
    } else {
      const obj7 = {};
      const obj8 = {};
      const obj9 = { contentContainerStyle: tmp.shareApps, onItemPressed: callback1 };
      const items10 = [callback2(importDefault(dependencyMap[32]), obj9), ];
      const obj10 = { style: tmp.searchAndShareContainer };
      const obj11 = { "Null": false, "Null": false, onChange: arg1(dependencyMap[34]).searchInviteSuggestions };
      if (null != targetApplicationId) {
        const intl5 = arg1(dependencyMap[28]).intl;
        let stringResult = intl5.string(arg1(dependencyMap[28]).t.iI1gMg);
      } else {
        const intl4 = arg1(dependencyMap[28]).intl;
        const obj12 = {};
        const guild = guild.getGuild(channel.guild_id);
        name = undefined;
        if (null != guild) {
          name = guild.name;
        }
        obj12.groupname = name;
        stringResult = intl4.formatToPlainString(arg1(dependencyMap[28]).t.1UgGdm, obj12);
      }
      obj11.placeholder = stringResult;
      const items11 = [callback2(arg1(dependencyMap[33]).SearchField, obj11), ];
      let tmp57 = !tmp56;
      if (null == vanityURLCode) {
        const obj13 = { style: tmp.inviteAgeText, channel, canEditInvite: null == code };
        tmp57 = callback2(importDefault(dependencyMap[35]), obj13);
      }
      items11[1] = tmp57;
      obj10.children = items11;
      items10[1] = closure_15(analyticsLocations, obj10);
      obj8.children = items10;
      const items12 = [closure_15(analyticsLocations, obj8), ];
      const obj14 = { data: rows, code: stateFromStores };
      let tmp65;
      if (null != source) {
        tmp65 = source;
      }
      obj14.source = tmp65;
      obj14.onPressAvatar = callback;
      obj14.onInviteSent = callback2;
      items12[1] = callback2(importDefault(dependencyMap[36]), obj14);
      obj7.children = items12;
      tmp38Result = tmp38(closure_14, obj7);
      const tmp39 = closure_14;
      const tmp40 = analyticsLocations;
      const tmp44 = closure_15;
      const tmp45 = analyticsLocations;
      const tmp46 = callback2;
      const tmp61 = callback2;
      const tmp64 = importDefault(dependencyMap[36]);
    }
    obj.children = tmp38Result;
    obj.children = callback2(arg1(dependencyMap[26]).BottomSheet, obj);
    return callback2(arg1(dependencyMap[14]).AnalyticsLocationProvider, obj);
  }
};
