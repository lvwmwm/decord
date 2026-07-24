// Module ID: 15599
// Function ID: 120269
// Name: ContextMenuCommandRootScreen
// Dependencies: [57, 31, 27, 1838, 4566, 33, 4130, 689, 566, 8233, 8015, 8228, 5160, 8871, 9921, 1212, 4126, 15600, 5772, 9280, 2]
// Exports: default

// Module 15599 (ContextMenuCommandRootScreen)
import _slicedToArray from "_slicedToArray";
import result from "result";
import { View } from "get ActivityIndicator";
import closure_7 from "_createForOfIteratorHelperLoose";
import TRUE_OPTION_NAME from "TRUE_OPTION_NAME";
import jsxProd from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

let closure_10;
let closure_11;
let closure_8;
let closure_9;
const require = arg1;
({ CONTEXT_MENU_COMMANDS_QUERY_LIMIT: closure_8, BuiltInSectionId: closure_9 } = TRUE_OPTION_NAME);
({ jsx: closure_10, jsxs: closure_11 } = jsxProd);
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { flex: 1, marginHorizontal: require("_createForOfIteratorHelperLoose").space.PX_16 };
_createForOfIteratorHelperLoose.container = _createForOfIteratorHelperLoose;
_createForOfIteratorHelperLoose.sectionHeader = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
let obj1 = { paddingTop: require("_createForOfIteratorHelperLoose").space.PX_16, paddingBottom: require("_createForOfIteratorHelperLoose").space.PX_8, backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_BASE_LOWER };
const result = require("get ActivityIndicator").fileFinishedImporting("modules/application_commands/native/ContextMenuCommandRootScreen.tsx");

export default function ContextMenuCommandRootScreen(navigation) {
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const channel = params.channel;
  const commandTargetId = params.commandTargetId;
  const onPressAppCommand = params.onPressAppCommand;
  const onClose = params.onClose;
  let commands;
  let commandsByActiveSection;
  let sectionDescriptors;
  let loading;
  let sections;
  let callback;
  let callback1;
  let frecencyItems;
  let appItems;
  let memo1;
  let c18;
  let c19;
  let scaledTextLineHeight;
  let obj = navigation(onPressAppCommand[8]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => tmp4.getGuild(channel.guild_id));
  let closure_6 = stateFromStores.useRef(false);
  const tmp2 = onClose(stateFromStores.useState(""), 2);
  const first = tmp2[0];
  closure_7 = tmp4;
  let items1 = [navigation, onClose];
  const effect = stateFromStores.useEffect(() => navigation.addListener("beforeRemove", () => {
    let current = outer1_6.current;
    if (!current) {
      current = null == outer1_4;
    }
    if (!current) {
      outer1_4();
    }
  }), items1);
  let obj1 = commandTargetId(onPressAppCommand[9]);
  obj = { context: { channel, type: "channel" } };
  obj = {};
  let tmp6;
  if ("" !== first) {
    tmp6 = first;
  }
  obj.text = tmp6;
  let items2 = [params.commandType];
  obj.commandTypes = items2;
  obj.filters = obj;
  obj1 = { limit: commands, includeFrecency: !tmp4 };
  let prop;
  if ("" !== first) {
    prop = navigation(onPressAppCommand[10]).ScoreMethod.COMMAND_OR_APPLICATION;
  }
  obj1.scoreMethod = prop;
  obj.options = obj1;
  obj.allowFetch = true;
  const discovery = obj1.useDiscovery(obj);
  commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  let items3 = [sectionDescriptors];
  sections = stateFromStores.useMemo(() => {
    const sections = {};
    const item = sectionDescriptors.forEach((id) => {
      sections[id.id] = id;
    });
    return { sections };
  }, items3).sections;
  let items4 = [channel, commandTargetId, stateFromStores, navigation, onPressAppCommand];
  callback = stateFromStores.useCallback((command) => {
    if (null != onPressAppCommand) {
      onPressAppCommand();
    }
    closure_6.current = true;
    obj = { command, optionValues: {}, context: obj, commandTargetId };
    obj = { channel, guild: stateFromStores };
    channel(onPressAppCommand[11])(obj);
    let parent = navigation.getParent();
    if (null == parent) {
      parent = navigation;
    }
    parent.goBack();
  }, items4);
  let items5 = [commandsByActiveSection, navigation, callback];
  callback1 = stateFromStores.useCallback((section) => {
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
  const memo = stateFromStores.useMemo(() => {
    if (!loading) {
      if (0 !== commands.length) {
        const found = commandsByActiveSection.find((section) => section.section.id === commandsByActiveSection.FRECENCY);
        const found1 = commandsByActiveSection.filter((section) => section.section.id !== commandsByActiveSection.FRECENCY);
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
  memo1 = stateFromStores.useMemo(() => {
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
    } else if (closure_7) {
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
  const memo2 = stateFromStores.useMemo(() => memo1.map((arg0) => arg0.length), items8);
  const tmp17 = sections();
  c18 = tmp17;
  c19 = "text-sm/semibold";
  let obj5 = navigation(onPressAppCommand[14]);
  scaledTextLineHeight = obj5.useScaledTextLineHeight("text-sm/semibold");
  const items9 = [loading, commands.length, "" !== first, frecencyItems.length, tmp17.sectionHeader];
  const items10 = [memo1, callback, callback1, sections];
  const callback2 = stateFromStores.useCallback((arg0) => {
    if (!loading) {
      if (0 !== commands.length) {
        if (!closure_7) {
          if (0 === arg0) {
            if (frecencyItems.length > 0) {
              const intl2 = navigation(onPressAppCommand[15]).intl;
              let stringResult = intl2.string(navigation(onPressAppCommand[15]).t.V0w2ap);
            }
            const obj = { variant: c19, color: "text-default", style: _undefined.sectionHeader, children: stringResult };
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
  const callback3 = stateFromStores.useCallback((arg0, arg1) => {
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
            return outer1_13(tmp.command);
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
            return outer1_14(tmp.section);
          },
        start: tmp2,
        end: tmp3
      };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandAppItem, obj, tmp.section.id);
    }
  }, items10);
  const obj2 = { style: tmp17.container };
  let tmp26Result = tmp4;
  const memo3 = stateFromStores.useMemo(() => {
    let num = 0;
    if (!loading) {
      num = 0;
      if (0 !== commands.length) {
        num = 0;
        if (!closure_7) {
          num = scaledTextLineHeight + _undefined.sectionHeader.paddingTop + _undefined.sectionHeader.paddingBottom;
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
      num2 = channel(onPressAppCommand[7]).space.PX_16;
    }
    obj4.marginBottom = num2;
    obj3.style = obj4;
    obj5 = { size: "md", onChange: tmp2[1] };
    let intl = navigation(onPressAppCommand[15]).intl;
    obj5.placeholder = intl.string(navigation(onPressAppCommand[15]).t.m1UwbP);
    obj3.children = sectionDescriptors(navigation(onPressAppCommand[18]).SearchField, obj5);
    tmp26Result = sectionDescriptors(closure_6, obj3);
    const tmp26 = sectionDescriptors;
    const tmp27 = closure_6;
  }
  const items12 = [tmp26Result, ];
  const tmp15 = channel(onPressAppCommand[13])();
  const tmp22 = loading;
  const tmp23 = closure_6;
  items12[1] = sectionDescriptors(channel(onPressAppCommand[19]), { sections: memo2, estimatedListSize: "windowSize", itemSize: channel(onPressAppCommand[13])(), insetEnd: channel(onPressAppCommand[12])({ includeKeyboardHeight: true }).insets.bottom, renderItem: callback3, renderSectionHeader: callback2, sectionHeaderSize: memo3 });
  obj2.children = items12;
  return tmp22(tmp23, obj2);
};
