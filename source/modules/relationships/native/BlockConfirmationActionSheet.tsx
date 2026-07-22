// Module ID: 10411
// Function ID: 80197
// Name: BlockedInformationTable
// Dependencies: []

// Module 10411 (BlockedInformationTable)
function BlockedInformationTable() {
  const obj = {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: length.length - 1 === arg1 };
      obj = { size: callback(closure_2[17]).Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = callback2(callback(closure_2[17]).Icon, obj);
      obj.label = icon.text();
      obj.subLabel = icon.subtext();
      obj.accessible = true;
      obj.accessibilityLabel = icon.a11yLabel();
      return callback2(callback(closure_2[16]).TableRow, obj, arg1);
    })
  };
  return callback2(arg1(dependencyMap[15]).TableRowGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
let closure_8 = importDefault(dependencyMap[5]);
const UserRemediationAction = arg1(dependencyMap[6]).UserRemediationAction;
({ IGNORE_CONFIRMATION_ACTION_SHEET_KEY: closure_10, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: closure_11 } = arg1(dependencyMap[7]));
const tmp2 = arg1(dependencyMap[7]);
({ HelpdeskArticles: closure_12, AnalyticEvents: closure_13 } = arg1(dependencyMap[8]));
const tmp3 = arg1(dependencyMap[8]);
({ jsx: closure_14, jsxs: closure_15 } = arg1(dependencyMap[9]));
let obj1 = arg1(dependencyMap[10]);
let obj = { button: { marginBottom: null, borderRadius: null } };
obj = { marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
obj.tableContainer = obj;
obj1 = { marginBottom: importDefault(dependencyMap[11]).space.PX_24 };
obj.otherOptions = obj1;
obj.headerText = { textAlign: "center" };
const tmp4 = arg1(dependencyMap[9]);
obj.container = { flex: 1, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_16 };
const obj2 = { flex: 1, paddingHorizontal: importDefault(dependencyMap[11]).space.PX_16, paddingTop: importDefault(dependencyMap[11]).space.PX_16 };
obj.header = { marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
const obj4 = { "Null": false, "Null": false, marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
obj.avatarContainer = obj4;
const obj5 = { "Bool(false)": "text-lg/normal", "Bool(false)": null, "Bool(false)": "mobile-text-heading-primary", padding: importDefault(dependencyMap[11]).space.PX_4, backgroundColor: importDefault(dependencyMap[11]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[11]).radii.round };
obj.avatarIconContainer = obj5;
obj.avatar = { alignSelf: "center" };
const obj3 = { marginBottom: importDefault(dependencyMap[11]).space.PX_16 };
obj.footerText = { textAlign: "center", marginTop: importDefault(dependencyMap[11]).space.PX_12, paddingBottom: importDefault(dependencyMap[11]).space.PX_4 };
let closure_16 = obj1.createStyles(obj);
const obj6 = { textAlign: "center", marginTop: importDefault(dependencyMap[11]).space.PX_12, paddingBottom: importDefault(dependencyMap[11]).space.PX_4 };
const items = [
  {
    icon: importDefault(dependencyMap[12]),
    text() {
      const intl = arg1(dependencyMap[13]).intl;
      return intl.string(arg1(dependencyMap[13]).t.fjFJFV);
    },
    subtext() {
      const intl = arg1(dependencyMap[13]).intl;
      return intl.string(arg1(dependencyMap[13]).t.8SIMPz);
    },
    a11yLabel() {
      const intl = arg1(dependencyMap[13]).intl;
      return intl.string(arg1(dependencyMap[13]).t.qHsrGS);
    }
  },
,

];
const obj7 = {
  icon: importDefault(dependencyMap[12]),
  text() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.fjFJFV);
  },
  subtext() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.8SIMPz);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.qHsrGS);
  }
};
items[1] = {
  icon: importDefault(dependencyMap[12]),
  text() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.QCrmqS);
  },
  subtext() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.TKDMoN);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.WR1Mbe);
  }
};
const obj8 = {
  icon: importDefault(dependencyMap[12]),
  text() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.QCrmqS);
  },
  subtext() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.TKDMoN);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.WR1Mbe);
  }
};
items[2] = {
  icon: importDefault(dependencyMap[14]),
  text() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.lkm/a8);
  },
  subtext() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.8j3qaC);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.lfrNw0);
  }
};
const obj9 = {
  icon: importDefault(dependencyMap[14]),
  text() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.lkm/a8);
  },
  subtext() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.8j3qaC);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[13]).intl;
    return intl.string(arg1(dependencyMap[13]).t.lfrNw0);
  }
};
const memoResult = importAllResult.memo(function BlockConfirmationActionSheet(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  ({ onBlock: closure_2, onIgnore: closure_3, onSuccess: closure_4 } = userId);
  const tmp = callback4();
  const bottom = importDefault(dependencyMap[18])().bottom;
  const items = [importDefault(dependencyMap[20]).IGNORE_CONFIRMATION_ACTION_SHEET];
  const tmp3 = callback(importAllResult.useState(false), 2);
  const first = tmp3[0];
  let closure_5 = tmp3[1];
  let obj = arg1(dependencyMap[21]);
  const items1 = [closure_8];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => user.getUser(userId), items2);
  let closure_6 = stateFromStores;
  let obj1 = arg1(dependencyMap[21]);
  const items3 = [closure_7];
  const items4 = [userId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => ignored.isIgnored(userId), items4);
  let obj2 = arg1(dependencyMap[21]);
  const items5 = [closure_6];
  const items6 = [channelId];
  const items7 = [stateFromStores, userId];
  const stateFromStores2 = obj2.useStateFromStores(items5, () => {
    const channel = stateFromStores.getChannel(channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items6);
  const effect = importAllResult.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(closure_2[22]).getUser(userId);
      const obj = userId(closure_2[22]);
    }
  }, items7);
  let tmp10Result = null;
  if (null != stateFromStores) {
    obj = { value: tmp2(items).analyticsLocations };
    obj = {
      onDismiss() {
          let obj = channelId(closure_2[24]);
          obj = { action: constants.DISMISS_BLOCK, location: "user-profile-context-menu" };
          obj.track(constants3.USER_REMEDIATION_ACTION, obj);
        },
      scrollable: true
    };
    let num2 = 485;
    if (!stateFromStores1) {
      num2 = closure_11;
    }
    const sum = num2 + bottom;
    const sum1 = sum + importDefault(dependencyMap[11]).space.PX_24;
    obj.startHeight = sum1 + importDefault(dependencyMap[11]).space.PX_24;
    obj1 = { paddingBottom: importDefault(dependencyMap[11]).space.PX_24 + bottom };
    const merged = Object.assign(tmp.container);
    obj.bodyStyles = obj1;
    obj2 = {};
    const obj3 = { style: tmp.header };
    const obj4 = { style: tmp.avatarContainer };
    const obj5 = { guildId: undefined, user: stateFromStores, animate: false, size: arg1(dependencyMap[17]).AvatarSizes.XLARGE, style: tmp.avatar };
    const items8 = [callback2(arg1(dependencyMap[17]).Avatar, obj5), ];
    const obj6 = { style: tmp.avatarIconContainer };
    const obj7 = { size: arg1(dependencyMap[17]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[26]) };
    obj6.children = callback2(arg1(dependencyMap[17]).Icon, obj7);
    items8[1] = callback2(closure_5, obj6);
    obj4.children = items8;
    const items9 = [callback3(closure_5, obj4), , ];
    const obj8 = { style: tmp.headerText };
    const intl = arg1(dependencyMap[13]).intl;
    const obj9 = {};
    let obj14 = importDefault(dependencyMap[28]);
    obj9.username = obj14.getName(stateFromStores2, channelId, stateFromStores);
    obj8.children = intl.format(arg1(dependencyMap[13]).t.CIbzHR, obj9);
    items9[1] = callback2(arg1(dependencyMap[27]).Text, obj8);
    const obj10 = { style: tmp.headerText };
    const intl2 = arg1(dependencyMap[13]).intl;
    obj10.children = intl2.string(arg1(dependencyMap[13]).t.S70jou);
    items9[2] = callback2(arg1(dependencyMap[27]).Text, obj10);
    obj3.children = items9;
    const items10 = [callback3(closure_5, obj3), , , ];
    const obj11 = { style: tmp.tableContainer, children: callback2(BlockedInformationTable, {}) };
    items10[1] = callback2(closure_5, obj11);
    let tmp31 = !stateFromStores1;
    if (tmp31) {
      const obj12 = { style: tmp.otherOptions };
      const obj13 = {};
      const intl3 = arg1(dependencyMap[13]).intl;
      obj13.title = intl3.string(arg1(dependencyMap[13]).t.+BJTcB);
      obj13.hasIcons = true;
      obj14 = {};
      const obj15 = { size: arg1(dependencyMap[17]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[29]) };
      obj14.icon = callback2(arg1(dependencyMap[17]).Icon, obj15);
      const intl4 = arg1(dependencyMap[13]).intl;
      obj14.label = intl4.string(arg1(dependencyMap[13]).t.hC8tcc);
      const intl5 = arg1(dependencyMap[13]).intl;
      obj14.subLabel = intl5.string(arg1(dependencyMap[13]).t.If89rE);
      const intl6 = arg1(dependencyMap[13]).intl;
      obj14.accessibilityLabel = intl6.string(arg1(dependencyMap[13]).t.8qGQsM);
      obj14.onPress = function onPress() {
        let obj = channelId(lib[24]);
        obj = { action: constants.GOTO_IGNORE, location: "user-profile-context-menu" };
        obj.track(constants3.USER_REMEDIATION_ACTION, obj);
        const obj3 = channelId(lib[30]);
        obj = { userId, channelId, onSuccess: closure_4, onIgnore: closure_3, impressionName: userId(lib[33]).ImpressionNames.IGNORE_USER_CONFIRMATION };
        obj3.openLazy(userId(lib[32])(lib[31], lib.paths), closure_10, obj, "replaceTopSheet");
      };
      obj14.arrow = true;
      obj13.children = callback2(arg1(dependencyMap[16]).TableRow, obj14);
      obj12.children = callback2(arg1(dependencyMap[15]).TableRowGroup, obj13);
      tmp31 = callback2(closure_5, obj12);
    }
    items10[2] = tmp31;
    const obj16 = { style: tmp.button };
    const obj17 = { <string:1986169986>: "sortType", <string:2487833047>: "ENABLE_EMOTICONS" };
    const intl7 = arg1(dependencyMap[13]).intl;
    obj17.text = intl7.string(arg1(dependencyMap[13]).t.l4Emac);
    obj17.onPress = function onPress() {
      callback(true);
      let obj = channelId(lib[35]);
      obj = { location: channelId(lib[20]).BLOCK_CONFIRMATION_ACTION_SHEET };
      obj.blockUser(userId, obj).then(() => {
        const result = callback(closure_2[36]).showBlockSuccessToast(closure_0, callback);
        if (null != callback2) {
          callback2();
        }
        const obj = callback(closure_2[36]);
        callback(closure_2[30]).hideActionSheet();
      });
      if (null != lib) {
        lib();
      }
      const blockUserResult = obj.blockUser(userId, obj);
      channelId(lib[24]).track(constants3.BLOCK_USER_CONFIRMED);
    };
    obj17.disabled = first;
    obj17.loading = first;
    const items11 = [callback2(arg1(dependencyMap[34]).Button, obj17), ];
    const obj18 = { "Null": 1, "Null": "tail", alignItems: null, style: tmp.footerText };
    const intl8 = arg1(dependencyMap[13]).intl;
    const obj19 = {
      articleLink() {
          channelId(closure_2[30]).hideActionSheet();
          const obj = channelId(closure_2[30]);
          const articleURL = channelId(closure_2[38]).getArticleURL(constants2.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj2 = channelId(closure_2[38]);
          channelId(closure_2[39]).openURL(articleURL);
        }
    };
    obj18.children = intl8.format(arg1(dependencyMap[13]).t.CpTgBn, obj19);
    items11[1] = callback2(arg1(dependencyMap[37]).TextWithIOSLinkWorkaround, obj18);
    obj16.children = items11;
    items10[3] = callback3(closure_5, obj16);
    obj2.children = items10;
    obj.children = callback3(arg1(dependencyMap[25]).BottomSheetScrollView, obj2);
    obj.children = callback2(arg1(dependencyMap[23]).BottomSheet, obj);
    tmp10Result = callback2(arg1(dependencyMap[19]).AnalyticsLocationProvider, obj);
    const tmp10 = callback2;
    const tmp13 = callback2;
    const tmp20 = callback3;
  }
  return tmp10Result;
});
const result = arg1(dependencyMap[40]).fileFinishedImporting("modules/relationships/native/BlockConfirmationActionSheet.tsx");

export default memoResult;
