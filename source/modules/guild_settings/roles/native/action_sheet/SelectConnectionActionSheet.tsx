// Module ID: 16208
// Function ID: 125281
// Name: IdentityApplicationRow
// Dependencies: []
// Exports: default

// Module 16208 (IdentityApplicationRow)
function IdentityApplicationRow(arg0) {
  let applicationId;
  let onPress;
  ({ applicationId, onPress } = arg0);
  let obj = arg1(dependencyMap[4]);
  const getOrFetchApplicationBatched = obj.useGetOrFetchApplicationBatched(applicationId);
  if (null == getOrFetchApplicationBatched) {
    return null;
  } else {
    const bot = getOrFetchApplicationBatched.bot;
    obj = {};
    let tmp5 = null;
    if (null != bot) {
      obj = { user: bot, size: arg1(dependencyMap[6]).AvatarSizes.XSMALL, guildId: undefined };
      tmp5 = callback2(arg1(dependencyMap[6]).Avatar, obj);
    }
    obj.icon = tmp5;
    obj.label = getOrFetchApplicationBatched.name;
    let description;
    if ("" !== getOrFetchApplicationBatched.description) {
      description = getOrFetchApplicationBatched.description;
    }
    obj.subLabel = description;
    obj.onPress = onPress;
    return callback2(arg1(dependencyMap[5]).TableRow, obj);
  }
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
({ jsx: closure_6, jsxs: closure_7 } = arg1(dependencyMap[3]));
const tmp2 = arg1(dependencyMap[3]);
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild_settings/roles/native/action_sheet/SelectConnectionActionSheet.tsx");

export default function SelectConnectionActionSheet(arg0) {
  let gameApplicationIds;
  let integrations;
  let onCompleteIdentityApplication;
  ({ addConnection: closure_0, excludedConnections: closure_1, excludedApplications: closure_2, integrations, onCompleteApplication: closure_3, gameApplicationIds, onCompleteIdentityApplication } = arg0);
  const React = onCompleteIdentityApplication;
  let closure_5 = importDefault(dependencyMap[7])();
  let obj = {};
  const intl = arg1(dependencyMap[9]).intl;
  obj.title = intl.string(arg1(dependencyMap[9]).t.Sm0YG7);
  const tmp2 = callback(React.useState(0), 2);
  const first = tmp2[0];
  let found;
  if (null != integrations) {
    found = integrations.filter((application) => {
      application = application.application;
      let prop;
      if (null != application) {
        prop = application.roleConnectionsVerificationUrl;
      }
      let tmp2 = null != prop;
      if (tmp2) {
        const application2 = application.application;
        let id;
        if (null != application2) {
          id = application2.id;
        }
        tmp2 = !set2.has(id);
      }
      return tmp2;
    });
  }
  let obj1 = arg1(dependencyMap[10]);
  const platforms = obj1.usePlatforms();
  const found1 = platforms.filter((type) => !set.has(type.type));
  let mapped1;
  const mapped = found1.map((icon) => {
    let obj = icon(closure_2[11]);
    icon = icon.icon;
    const source = obj.makeSource(icon(closure_2[12]).isThemeDark(closure_5) ? icon.darkPNG : icon.lightPNG);
    obj = {
      icon: callback(icon(closure_2[6]).Icon, { source, disableColor: true }),
      label: icon.name,
      onPress() {
        arg0(arg0.type);
        callback(closure_2[13]).hideActionSheet();
      }
    };
    return callback(icon(closure_2[5]).TableRow, obj, "row-" + icon.type);
  });
  if (null != found) {
    mapped1 = found.map((application) => {
      application = application.application;
      let tmp = null;
      if (null != application) {
        let obj = {};
        obj = { user: application.bot, size: application(closure_2[6]).AvatarSizes.XSMALL, guildId: undefined };
        obj.icon = callback(application(closure_2[6]).Avatar, obj);
        obj.label = application.name;
        let description;
        if ("" !== application.description) {
          description = application.description;
        }
        obj.subLabel = description;
        obj.onPress = function onPress() {
          callback2(application.id);
          callback(closure_2[13]).hideActionSheet();
        };
        const _HermesInternal = HermesInternal;
        tmp = callback(application(closure_2[5]).TableRow, obj, "row-" + application.id);
        const tmp2 = callback;
      }
      return tmp;
    });
  }
  if (null == gameApplicationIds) {
    gameApplicationIds = [];
  }
  const found2 = gameApplicationIds.filter((arg0) => !set2.has(arg0));
  if (null != onCompleteIdentityApplication) {
    let mapped2 = found2.map((applicationId) => callback(closure_8, {
      applicationId,
      onPress() {
        callback2(arg0);
        callback(closure_2[13]).hideActionSheet();
      }
    }, "row-identity-" + applicationId));
  } else {
    mapped2 = [];
  }
  let length;
  if (null != mapped1) {
    length = mapped1.length;
  }
  let num = 0;
  if (null != length) {
    num = length;
  }
  const intl2 = arg1(dependencyMap[9]).intl;
  const items = [intl2.string(arg1(dependencyMap[9]).t.3fe7U5)];
  if (num > 0) {
    const intl3 = arg1(dependencyMap[9]).intl;
    items.push(intl3.string(arg1(dependencyMap[9]).t.PHjkRE));
  }
  if (mapped2.length > 0) {
    const intl4 = arg1(dependencyMap[9]).intl;
    items.push(intl4.string(arg1(dependencyMap[9]).t.y3ZnnU));
  }
  let obj2 = arg1(dependencyMap[14]);
  obj = { pageWidth: 0, defaultIndex: first, onSetActiveIndex: tmp2[1], items: items.map((id) => ({ id, label: id, page: null })) };
  const segmentedControlState = obj2.useSegmentedControlState(obj);
  if (1 === first) {
    if (tmp8) {
      mapped2 = mapped1;
    }
    let tmp17 = mapped2;
  } else {
    tmp17 = mapped;
    if (2 === first) {
      tmp17 = mapped2;
    }
  }
  obj = { header: callback2(arg1(dependencyMap[8]).BottomSheetTitleHeader, obj) };
  if (num > 0) {
    obj1 = {};
    obj2 = { state: segmentedControlState };
    obj1.children = callback2(arg1(dependencyMap[16]).SegmentedControl, obj2);
    let tmp19 = callback2(closure_5, obj1);
  } else {
    tmp19 = null;
  }
  const items1 = [tmp19, ];
  const obj3 = {};
  const obj4 = { bottom: true };
  const obj5 = { hasIcons: true, children: tmp17 };
  obj4.children = callback2(arg1(dependencyMap[19]).TableRowGroup, obj5);
  obj3.children = callback2(arg1(dependencyMap[18]).SafeAreaPaddingView, obj4);
  items1[1] = callback2(arg1(dependencyMap[17]).BottomSheetScrollView, obj3);
  obj.children = items1;
  return closure_7(arg1(dependencyMap[15]).ActionSheet, obj);
};
