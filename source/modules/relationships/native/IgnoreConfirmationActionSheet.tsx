// Module ID: 10411
// Function ID: 80195
// Name: IgnoredInformationTable
// Dependencies: []

// Module 10411 (IgnoredInformationTable)
function IgnoredInformationTable() {
  const obj = {
    hasIcons: true,
    children: items.map((icon) => {
      let obj = { start: 0 === arg1, end: length.length - 1 === arg1 };
      obj = { size: callback(closure_2[16]).Icon.Sizes.MEDIUM, source: icon.icon };
      obj.icon = callback2(callback(closure_2[16]).Icon, obj);
      obj.label = icon.text();
      obj.subLabel = icon.subtext();
      obj.accessible = true;
      obj.accessibilityLabel = icon.a11yLabel();
      return callback2(callback(closure_2[15]).TableRow, obj, arg1);
    })
  };
  return callback2(arg1(dependencyMap[14]).TableRowGroup, obj);
}
let closure_3 = importDefault(dependencyMap[0]);
const importAllResult = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const UserRemediationAction = arg1(dependencyMap[5]).UserRemediationAction;
({ BLOCK_CONFIRMATION_ACTION_SHEET_KEY: closure_9, RESTRICTION_CONFIRMATION_ACTION_SHEET_HEIGHT: closure_10 } = arg1(dependencyMap[6]));
const tmp2 = arg1(dependencyMap[6]);
({ AnalyticEvents: closure_11, HelpdeskArticles: closure_12 } = arg1(dependencyMap[7]));
const tmp3 = arg1(dependencyMap[7]);
({ jsx: closure_13, jsxs: closure_14 } = arg1(dependencyMap[8]));
let obj1 = arg1(dependencyMap[9]);
let obj = { button: { accessibilityRole: null, bm: null } };
obj = { marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
obj.tableContainer = obj;
obj1 = { marginBottom: importDefault(dependencyMap[10]).space.PX_24 };
obj.otherOptions = obj1;
obj.subTitle = { textAlign: "center" };
const tmp4 = arg1(dependencyMap[8]);
obj.title = { textAlign: "center", marginBottom: importDefault(dependencyMap[10]).space.PX_4 };
const obj2 = { textAlign: "center", marginBottom: importDefault(dependencyMap[10]).space.PX_4 };
obj.container = { flex: 1, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, paddingTop: importDefault(dependencyMap[10]).space.PX_16 };
const obj3 = { flex: 1, paddingHorizontal: importDefault(dependencyMap[10]).space.PX_16, paddingTop: importDefault(dependencyMap[10]).space.PX_16 };
obj.header = { marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
const obj5 = { 0: "content", 9223372036854775807: "a", marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
obj.avatarContainer = obj5;
const obj6 = { "Null": "text-lg/normal", "Null": null, "Null": "mobile-text-heading-primary", padding: importDefault(dependencyMap[10]).space.PX_4, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH, borderRadius: importDefault(dependencyMap[10]).radii.round };
obj.avatarIconContainer = obj6;
obj.avatar = { alignSelf: "center" };
const obj4 = { marginBottom: importDefault(dependencyMap[10]).space.PX_16 };
obj.destructiveIcon = { color: importDefault(dependencyMap[10]).colors.TEXT_FEEDBACK_CRITICAL };
let closure_15 = obj1.createStyles(obj);
const obj7 = { color: importDefault(dependencyMap[10]).colors.TEXT_FEEDBACK_CRITICAL };
const items = [
  {
    icon: importDefault(dependencyMap[11]),
    text() {
      const intl = arg1(dependencyMap[12]).intl;
      return intl.string(arg1(dependencyMap[12]).t.ruhGkg);
    },
    subtext() {
      const intl = arg1(dependencyMap[12]).intl;
      return intl.string(arg1(dependencyMap[12]).t./FWKKC);
    },
    a11yLabel() {
      const intl = arg1(dependencyMap[12]).intl;
      return intl.string(arg1(dependencyMap[12]).t.QAzPrp);
    }
  },
,

];
const obj8 = {
  icon: importDefault(dependencyMap[11]),
  text() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.ruhGkg);
  },
  subtext() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t./FWKKC);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.QAzPrp);
  }
};
items[1] = {
  icon: importDefault(dependencyMap[11]),
  text() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.N9v3eq);
  },
  subtext() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.ddpuJg);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.PYR8jT);
  }
};
const obj9 = {
  icon: importDefault(dependencyMap[11]),
  text() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.N9v3eq);
  },
  subtext() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.ddpuJg);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.PYR8jT);
  }
};
items[2] = {
  icon: importDefault(dependencyMap[13]),
  text() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.4ycGE0);
  },
  subtext() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.5yfN+o);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t./XoqE6);
  }
};
const obj10 = {
  icon: importDefault(dependencyMap[13]),
  text() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.4ycGE0);
  },
  subtext() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t.5yfN+o);
  },
  a11yLabel() {
    const intl = arg1(dependencyMap[12]).intl;
    return intl.string(arg1(dependencyMap[12]).t./XoqE6);
  }
};
const memoResult = importAllResult.memo(function IgnoreConfirmationActionSheet(userId) {
  userId = userId.userId;
  const arg1 = userId;
  const channelId = userId.channelId;
  const importDefault = channelId;
  ({ onIgnore: closure_2, onSuccess: closure_3 } = userId);
  function handleClose() {
    let obj = channelId(closure_2[21]);
    obj = { action: constants.DISMISS_IGNORE, location: "user-profile-context-menu" };
    obj.track(constants2.USER_REMEDIATION_ACTION, obj);
  }
  const tmp = callback4();
  const tmp2 = callback(React.useState(false), 2);
  const first = tmp2[0];
  const React = tmp2[1];
  const bottom = importDefault(dependencyMap[17])().bottom;
  const items = [importDefault(dependencyMap[19]).IGNORE_CONFIRMATION_ACTION_SHEET];
  let obj = arg1(dependencyMap[20]);
  const items1 = [closure_7];
  const items2 = [userId];
  const stateFromStores = obj.useStateFromStores(items1, () => user.getUser(userId), items2);
  const View = stateFromStores;
  let obj1 = arg1(dependencyMap[20]);
  const items3 = [closure_6];
  const items4 = [channelId];
  const stateFromStores1 = obj1.useStateFromStores(items3, () => {
    const channel = channel.getChannel(channelId);
    let guild_id;
    if (null != channel) {
      guild_id = channel.guild_id;
    }
    return guild_id;
  }, items4);
  const items5 = [stateFromStores, userId];
  const effect = React.useEffect(() => {
    if (null == stateFromStores) {
      const user = userId(closure_2[22]).getUser(userId);
      const obj = userId(closure_2[22]);
    }
  }, items5);
  let tmp9Result = null;
  if (null != stateFromStores) {
    obj = { value: tmp4(items).analyticsLocations };
    obj = { onDismiss: handleClose, scrollable: true };
    const sum = closure_10 + bottom;
    const sum1 = sum + importDefault(dependencyMap[10]).space.PX_24;
    obj.startHeight = sum1 + importDefault(dependencyMap[10]).space.PX_24;
    obj1 = { paddingBottom: importDefault(dependencyMap[10]).space.PX_16 + bottom };
    const merged = Object.assign(tmp.container);
    obj.bodyStyles = obj1;
    const obj2 = {};
    const obj3 = { style: tmp.header };
    const obj4 = { style: tmp.avatarContainer };
    const obj5 = {};
    let tmp22;
    if (null != stateFromStores1) {
      tmp22 = stateFromStores1;
    }
    obj5.guildId = tmp22;
    obj5.user = stateFromStores;
    obj5.animate = false;
    obj5.size = arg1(dependencyMap[16]).AvatarSizes.XLARGE;
    obj5.style = tmp.avatar;
    const items6 = [callback2(arg1(dependencyMap[16]).Avatar, obj5), ];
    const obj6 = { style: tmp.avatarIconContainer };
    const obj7 = { size: arg1(dependencyMap[16]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[25]) };
    obj6.children = callback2(arg1(dependencyMap[16]).Icon, obj7);
    items6[1] = callback2(View, obj6);
    obj4.children = items6;
    const items7 = [callback3(View, obj4), , ];
    const obj8 = { style: tmp.title };
    const intl = arg1(dependencyMap[12]).intl;
    const obj9 = {};
    let obj13 = importDefault(dependencyMap[27]);
    obj9.username = obj13.getName(stateFromStores1, channelId, stateFromStores);
    obj8.children = intl.format(arg1(dependencyMap[12]).t.WrQD/Y, obj9);
    items7[1] = callback2(arg1(dependencyMap[26]).Text, obj8);
    const obj10 = { style: tmp.subTitle };
    const intl2 = arg1(dependencyMap[12]).intl;
    obj10.children = intl2.string(arg1(dependencyMap[12]).t.JKL1u1);
    items7[2] = callback2(arg1(dependencyMap[26]).Text, obj10);
    obj3.children = items7;
    const items8 = [callback3(View, obj3), , , ];
    const obj11 = { style: tmp.tableContainer, children: callback2(IgnoredInformationTable, {}) };
    items8[1] = callback2(View, obj11);
    const obj12 = { style: tmp.otherOptions };
    obj13 = {};
    const intl3 = arg1(dependencyMap[12]).intl;
    obj13.title = intl3.string(arg1(dependencyMap[12]).t.1v01gh);
    obj13.hasIcons = true;
    const obj14 = {};
    const obj15 = { size: arg1(dependencyMap[16]).Icon.Sizes.MEDIUM, source: importDefault(dependencyMap[28]), color: tmp.destructiveIcon.color };
    obj14.icon = callback2(arg1(dependencyMap[16]).Icon, obj15);
    const intl4 = arg1(dependencyMap[12]).intl;
    obj14.label = intl4.string(arg1(dependencyMap[12]).t.bwxY30);
    obj14.variant = "danger";
    const obj16 = {};
    const intl5 = arg1(dependencyMap[12]).intl;
    obj16.children = intl5.string(arg1(dependencyMap[12]).t.NTnf1T);
    obj14.subLabel = callback2(arg1(dependencyMap[26]).Text, obj16);
    const intl6 = arg1(dependencyMap[12]).intl;
    obj14.accessibilityLabel = intl6.string(arg1(dependencyMap[12]).t.fZ+p9C);
    obj14.onPress = function onPress() {
      let obj = channelId(lib[21]);
      obj = { action: constants.GOTO_BLOCK, location: "user-profile-context-menu" };
      obj.track(constants2.USER_REMEDIATION_ACTION, obj);
      const obj3 = channelId(lib[29]);
      obj = { userId, channelId, onSuccess: closure_3, impressionName: userId(lib[32]).ImpressionNames.BLOCK_USER_CONFIRMATION };
      obj3.openLazy(userId(lib[31])(lib[30], lib.paths), closure_9, obj, "replaceTopSheet");
    };
    obj14.arrow = true;
    obj13.children = callback2(arg1(dependencyMap[15]).TableRow, obj14);
    obj12.children = callback2(arg1(dependencyMap[14]).TableRowGroup, obj13);
    items8[2] = callback2(View, obj12);
    const obj17 = { style: tmp.button };
    const obj18 = { size: "lg" };
    const intl7 = arg1(dependencyMap[12]).intl;
    obj18.text = intl7.string(arg1(dependencyMap[12]).t.ytCpKs);
    obj18.onPress = function onPress() {
      callback(true);
      const obj = channelId(lib[34]);
      channelId(lib[34]).ignoreUser(userId, channelId(lib[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId).then(() => {
        if (null != callback2) {
          callback2();
        }
        callback(closure_2[29]).hideActionSheet();
      });
      if (null != lib) {
        lib();
      }
      const ignoreUserResult = channelId(lib[34]).ignoreUser(userId, channelId(lib[19]).IGNORE_CONFIRMATION_ACTION_SHEET, channelId);
      channelId(lib[21]).track(constants2.IGNORE_USER_CONFIRMED);
    };
    obj18.disabled = first;
    obj18.loading = first;
    const items9 = [callback2(arg1(dependencyMap[33]).Button, obj18), ];
    const obj19 = { onPress: handleClose };
    const obj20 = { textAlign: "center", marginTop: importDefault(dependencyMap[10]).space.PX_12, paddingBottom: importDefault(dependencyMap[10]).space.PX_4 };
    obj19.style = obj20;
    obj19.variant = "text-sm/normal";
    obj19.color = "text-default";
    const intl8 = arg1(dependencyMap[12]).intl;
    const obj21 = {
      articleLink() {
          channelId(closure_2[29]).hideActionSheet();
          const obj = channelId(closure_2[29]);
          const articleURL = channelId(closure_2[36]).getArticleURL(constants3.STEALTH_REMEDIATION_FEATURE_GUIDE);
          const obj2 = channelId(closure_2[36]);
          channelId(closure_2[37]).openURL(articleURL);
        }
    };
    obj19.children = intl8.format(arg1(dependencyMap[12]).t.iX9qtL, obj21);
    items9[1] = callback2(arg1(dependencyMap[35]).TextWithIOSLinkWorkaround, obj19);
    obj17.children = items9;
    items8[3] = callback3(View, obj17);
    obj2.children = items8;
    obj.children = callback3(arg1(dependencyMap[24]).BottomSheetScrollView, obj2);
    obj.children = callback2(arg1(dependencyMap[23]).BottomSheet, obj);
    tmp9Result = callback2(arg1(dependencyMap[18]).AnalyticsLocationProvider, obj);
    const tmp12 = callback2;
    const tmp21 = callback2;
    const tmp9 = callback2;
  }
  return tmp9Result;
});
const result = arg1(dependencyMap[38]).fileFinishedImporting("modules/relationships/native/IgnoreConfirmationActionSheet.tsx");

export default memoResult;
