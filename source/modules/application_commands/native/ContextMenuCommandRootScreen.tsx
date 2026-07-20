// Module ID: 15417
// Function ID: 117667
// Name: ContextMenuCommandRootScreen
// Dependencies: []
// Exports: default

// Module 15417 (ContextMenuCommandRootScreen)
let closure_4 = importDefault(dependencyMap[0]);
let closure_5 = importAll(dependencyMap[1]);
const View = arg1(dependencyMap[2]).View;
let closure_7 = importDefault(dependencyMap[3]);
({ CONTEXT_MENU_COMMANDS_QUERY_LIMIT: closure_8, BuiltInSectionId: closure_9 } = arg1(dependencyMap[4]));
const tmp2 = arg1(dependencyMap[4]);
({ jsx: closure_10, jsxs: closure_11 } = arg1(dependencyMap[5]));
let obj = arg1(dependencyMap[6]);
obj = {};
obj = { flex: 1, marginHorizontal: importDefault(dependencyMap[7]).space.PX_16 };
obj.container = obj;
const tmp3 = arg1(dependencyMap[5]);
obj.sectionHeader = { paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
let closure_12 = obj.createStyles(obj);
const obj1 = { paddingTop: importDefault(dependencyMap[7]).space.PX_16, paddingBottom: importDefault(dependencyMap[7]).space.PX_8, backgroundColor: importDefault(dependencyMap[7]).colors.BACKGROUND_BASE_LOWER };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/application_commands/native/ContextMenuCommandRootScreen.tsx");

export default function ContextMenuCommandRootScreen(navigation) {
  navigation = navigation.navigation;
  const arg1 = navigation;
  const params = navigation.route.params;
  const channel = params.channel;
  const importDefault = channel;
  const commandTargetId = params.commandTargetId;
  const importAll = commandTargetId;
  const onPressAppCommand = params.onPressAppCommand;
  const dependencyMap = onPressAppCommand;
  const onClose = params.onClose;
  let callback = onClose;
  let commands;
  let commandsByActiveSection;
  let sectionDescriptors;
  let loading;
  let callback2;
  callback = undefined;
  let callback1;
  let frecencyItems;
  let appItems;
  let memo1;
  let tmp17;
  let closure_19;
  let scaledTextLineHeight;
  let obj = arg1(dependencyMap[8]);
  const items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => tmp4.getGuild(channel.guild_id));
  const React = stateFromStores;
  let closure_6 = React.useRef(false);
  const tmp2 = callback(React.useState(""), 2);
  const first = tmp2[0];
  closure_7 = tmp4;
  const items1 = [navigation, onClose];
  const effect = React.useEffect(() => navigation.addListener("beforeRemove", () => {
    let current = ref.current;
    if (!current) {
      current = null == callback;
    }
    if (!current) {
      callback();
    }
  }), items1);
  let obj1 = importAll(dependencyMap[9]);
  obj = { context: { channel, type: "channel" } };
  obj = {};
  let tmp6;
  if ("" !== first) {
    tmp6 = first;
  }
  obj.text = tmp6;
  const items2 = [params.commandType];
  obj.commandTypes = items2;
  obj.filters = obj;
  obj1 = { limit: commands, includeFrecency: !tmp4 };
  let prop;
  if ("" !== first) {
    prop = arg1(dependencyMap[10]).ScoreMethod.COMMAND_OR_APPLICATION;
  }
  obj1.scoreMethod = prop;
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj1.useDiscovery(obj);
  commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  const items3 = [sectionDescriptors];
  const sections = React.useMemo(() => {
    const sections = {};
    const navigation = sections;
    const item = sectionDescriptors.forEach((id) => {
      sections[id.id] = id;
    });
    return { sections };
  }, items3).sections;
  callback2 = sections;
  const items4 = [channel, commandTargetId, stateFromStores, navigation, onPressAppCommand];
  callback = React.useCallback((command) => {
    if (null != onPressAppCommand) {
      onPressAppCommand();
    }
    closure_6.current = true;
    let obj = { command, optionValues: {}, context: obj, commandTargetId };
    obj = { channel, guild: stateFromStores };
    channel(onPressAppCommand[11])(obj);
    let parent = navigation.getParent();
    if (null == parent) {
      parent = navigation;
    }
    parent.goBack();
  }, items4);
  const items5 = [commandsByActiveSection, navigation, callback];
  callback1 = React.useCallback((section) => {
    const navigation = section;
    const found = commandsByActiveSection.find((section) => section.section.id === section.id);
    let data;
    if (null != found) {
      data = found.data;
    }
    if (null == data) {
      data = [];
    }
    const obj = { section, commands: data, onPressCommand: callback };
    navigation.navigate("app", obj);
  }, items5);
  const items6 = [loading, commands.length, commandsByActiveSection];
  const memo = React.useMemo(() => {
    if (!loading) {
      if (0 !== commands.length) {
        const found = commandsByActiveSection.find((section) => section.section.id === constants.FRECENCY);
        const found1 = commandsByActiveSection.filter((section) => section.section.id !== constants.FRECENCY);
        const obj = {};
        let mapped;
        if (null != found) {
          const data = found.data;
          mapped = data.map((command) => ({ type: "command", command }));
        }
        if (null == mapped) {
          mapped = [];
        }
        obj.frecencyItems = mapped;
        obj.appItems = found1.map((section) => ({ type: "app", section: section.section }));
        return obj;
      }
    }
    return { frecencyItems: [], appItems: [] };
  }, items6);
  frecencyItems = memo.frecencyItems;
  appItems = memo.appItems;
  const items7 = [loading, commands, "" !== first, frecencyItems, appItems];
  memo1 = React.useMemo(() => {
    if (loading) {
      let obj = { type: "placeholder" };
      const items = [obj];
      const items1 = [items];
      return items1;
    } else if (0 === commands.length) {
      obj = { type: "no_commands" };
      const items2 = [obj];
      const items3 = [items2];
      return items3;
    } else if (tmp4) {
      const items4 = [commands.map((command) => ({ type: "command", command }))];
      return items4;
    } else {
      const items5 = [];
      if (frecencyItems.length > 0) {
        items5.push(frecencyItems);
      }
      if (appItems.length > 0) {
        items5.push(appItems);
      }
      return items5;
    }
  }, items7);
  const items8 = [memo1];
  const memo2 = React.useMemo(() => memo1.map((arg0) => arg0.length), items8);
  tmp17 = callback2();
  closure_19 = "text-sm/semibold";
  let obj5 = arg1(dependencyMap[14]);
  scaledTextLineHeight = obj5.useScaledTextLineHeight("text-sm/semibold");
  const items9 = [loading, commands.length, "" !== first, frecencyItems.length, tmp17.sectionHeader];
  const items10 = [memo1, callback, callback1, sections];
  callback2 = React.useCallback((arg0) => {
    if (!loading) {
      if (0 !== commands.length) {
        if (!tmp4) {
          if (0 === arg0) {
            if (frecencyItems.length > 0) {
              const intl2 = navigation(onPressAppCommand[15]).intl;
              let stringResult = intl2.string(navigation(onPressAppCommand[15]).t.V0w2ap);
            }
            const obj = { variant: closure_19, color: "text-default", style: tmp17.sectionHeader, children: stringResult };
            return sectionDescriptors(navigation(onPressAppCommand[16]).Text, obj);
          }
          const intl = navigation(onPressAppCommand[15]).intl;
          stringResult = intl.string(navigation(onPressAppCommand[15]).t.PHjkRE);
        }
      }
    }
    return null;
  }, items9);
  const items11 = [loading, commands.length, "" !== first, scaledTextLineHeight, tmp17.sectionHeader.paddingTop, tmp17.sectionHeader.paddingBottom];
  const callback3 = React.useCallback((arg0, arg1) => {
    const navigation = tmp;
    const type = tmp.type;
    if ("placeholder" === type) {
      let obj = { start: tmp2, end: tmp3 };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandLoadingItem, obj, "placeholder");
    } else if ("no_commands" === type) {
      obj = { start: tmp2, end: tmp3 };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandEmptyItem, obj, "no_commands");
    } else if ("command" === type) {
      const obj1 = {
        item: tmp.command,
        onPress() {
            return callback(tmp.command);
          },
        section: sections[tmp.command.applicationId],
        start: tmp2,
        end: tmp3
      };
      return sectionDescriptors(channel(onPressAppCommand[17]), obj1, tmp.command.id);
    } else if ("app" === type) {
      obj = {
        section: tmp.section,
        onPress() {
            return callback2(tmp.section);
          },
        start: tmp2,
        end: tmp3
      };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandAppItem, obj, tmp.section.id);
    }
  }, items10);
  const obj2 = { style: tmp17.container };
  let tmp26Result = tmp4;
  const memo3 = React.useMemo(() => {
    let num = 0;
    if (!loading) {
      num = 0;
      if (0 !== commands.length) {
        num = 0;
        if (!tmp4) {
          num = scaledTextLineHeight + tmp17.sectionHeader.paddingTop + tmp17.sectionHeader.paddingBottom;
        }
      }
    }
    return num;
  }, items11);
  if ("" === first) {
    tmp26Result = !loading && commands.length > 0;
    const tmp25 = !loading && commands.length > 0;
  }
  if (tmp26Result) {
    const obj3 = {};
    const obj4 = {};
    let num2 = 0;
    if (tmp4) {
      num2 = importDefault(dependencyMap[7]).space.PX_16;
    }
    obj4.marginBottom = num2;
    obj3.style = obj4;
    obj5 = { size: "md", onChange: tmp2[1] };
    const intl = arg1(dependencyMap[15]).intl;
    obj5.placeholder = intl.string(arg1(dependencyMap[15]).t.m1UwbP);
    obj3.children = sectionDescriptors(arg1(dependencyMap[18]).SearchField, obj5);
    tmp26Result = sectionDescriptors(closure_6, obj3);
    const tmp26 = sectionDescriptors;
    const tmp27 = closure_6;
  }
  const items12 = [tmp26Result, ];
  const tmp15 = importDefault(dependencyMap[13])();
  const tmp22 = loading;
  const tmp23 = closure_6;
  items12[1] = sectionDescriptors(importDefault(dependencyMap[19]), { sections: memo2, estimatedListSize: "windowSize", itemSize: importDefault(dependencyMap[13])(), insetEnd: importDefault(dependencyMap[12])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback3, renderSectionHeader: callback2, sectionHeaderSize: memo3 });
  obj2.children = items12;
  return tmp22(tmp23, obj2);
};
