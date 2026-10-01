// Module ID: 16691
// Function ID: 16692
// Name: ContextMenuCommandRootScreen
// Dependencies: [32, 19, 17, 2067, 5305, 21, 4836, 576, 504, 8719, 8599, 8714, 6402, 6470, 9578, 1115, 4832, 16692, 6471, 6476, 2]
// Exports: default

// Module 16691 (ContextMenuCommandRootScreen)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 576 */;
import intl3 from "intl" /* 1115 */;
import Text_Text from "Text/Text" /* 4832 */;
import executeCommandDefault from "executeCommand" /* 8714 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2067 */;
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5305 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let closure_12;
let metroImportAll;
let obj2;
let obj3;
let unpackModuleId;
const View = react_native.View;
({ CONTEXT_MENU_COMMANDS_QUERY_LIMIT: metroImportAll, BuiltInSectionId: c9 } = ApplicationCommandConstants);
({ jsx: c10, Fragment: unpackModuleId, jsxs: closure_12 } = Fragment);
let createStyles = createStyles_mod;
let obj = { content: obj2, sectionHeader: obj3 };
obj2 = { paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
let closure_13 = createStyles(obj);
const result = size.fileFinishedImporting("modules/application_commands/native/ContextMenuCommandRootScreen.tsx");

export default function ContextMenuCommandRootScreen(navigation) {
  let SearchField;
  let intl;
  let items13;
  let items2;
  let obj4;
  let obj5;
  let obj8;
  let prop;
  let variant;
  navigation = navigation.navigation;
  const params = navigation.route.params;
  const channel = params.channel;
  const commandTargetId = params.commandTargetId;
  const onPressAppCommand = params.onPressAppCommand;
  const onClose = params.onClose;
  let closure_7;
  let commands;
  let commandsByActiveSection;
  let sectionDescriptors;
  let loading;
  let sections;
  let onPressCommand;
  let callback1;
  let frecencyItems;
  let appItems;
  let memo1;
  let closure_18;
  let c19;
  let scaledTextLineHeight;
  let tmp = navigation;
  let tmp2 = onPressAppCommand;
  const commandType = params.commandType;
  let obj = navigation(onPressAppCommand[8]);
  let items = [closure_7];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(channel.guild_id));
  let obj2 = stateFromStores;
  let closure_6 = stateFromStores.useRef(false);
  let tmp4 = onClose(stateFromStores.useState(""), 2);
  const first = tmp4[0];
  closure_7 = tmp7;
  let items1 = [navigation, onClose];
  const tmp6 = tmp4[1];
  const effect = stateFromStores.useEffect(() => {
    let ref;
    return navigation.addListener("beforeRemove", () => {
      if (!ref.current) {
        if (onClose != null) {
          tmp();
        }
      }
    });
  }, items1);
  let obj3 = { context: { channel, type: "channel" }, filters: obj4, options: obj5, allowFetch: true };
  let tmp10;
  const useDiscovery = commandTargetId(onPressAppCommand[9]).useDiscovery;
  const tmp9 = commandTargetId(onPressAppCommand[9]);
  if ("" !== first) {
    tmp10 = first;
  }
  obj4 = { text: tmp10, commandTypes: items2 };
  items2 = [commandType];
  obj5 = { limit: commands, includeFrecency: "" === first, scoreMethod: prop };
  prop = undefined;
  if ("" !== first) {
    prop = tmp(tmp2[10]).ScoreMethod.COMMAND_OR_APPLICATION;
  }
  const discovery = useDiscovery(obj3);
  commands = discovery.commands;
  commandsByActiveSection = discovery.commandsByActiveSection;
  sectionDescriptors = discovery.sectionDescriptors;
  loading = discovery.loading;
  let items3 = [sectionDescriptors];
  sections = obj2.useMemo(() => {
    sections = {};
    const item = sectionDescriptors.forEach((id) => {
      sections[id.id] = id;
    });
    return { sections };
  }, items3).sections;
  let items4 = [channel, commandTargetId, stateFromStores, navigation, onPressAppCommand];
  onPressCommand = obj2.useCallback((command) => {
    let obj2;
    if (onPressAppCommand != null) {
      tmp();
    }
    closure_6.current = true;
    const obj = { command, optionValues: {}, context: obj2, commandTargetId };
    obj2 = { channel, guild: stateFromStores };
    executeCommandDefault(obj);
    let parent = navigation.getParent();
    const tmp4 = navigation;
    if (parent == null) {
      parent = tmp4;
    }
    parent.goBack();
  }, items4);
  let items5 = [commandsByActiveSection, navigation, onPressCommand];
  callback1 = obj2.useCallback((section) => {
    let closure_0 = section;
    const found = commandsByActiveSection.find((section) => section.section.id === id.id);
    let data;
    if (found != null) {
      data = found.data;
    }
    if (data == null) {
      data = [];
    }
    const obj = { section, commands: data, onPressCommand };
    navigation.navigate("app", obj);
  }, items5);
  const items6 = [loading, commands.length, commandsByActiveSection];
  const memo = obj2.useMemo(() => {
    const tmp = loading;
    if (!tmp) {
      if (0 !== commands.length) {
        const found = commandsByActiveSection.find((section) => section.section.id === constants.FRECENCY);
        const found1 = commandsByActiveSection.filter((section) => section.section.id !== constants.FRECENCY);
        let mapped;
        if (found != null) {
          const data = found.data;
          mapped = data.map((command) => ({ type: "command", command }));
        }
        if (mapped == null) {
          mapped = [];
        }
        const obj = { frecencyItems: mapped, appItems: found1.map((section) => ({ type: "app", section: section.section })) };
        return obj;
      }
    }
    return { frecencyItems: [], appItems: [] };
  }, items6);
  frecencyItems = memo.frecencyItems;
  appItems = memo.appItems;
  const items7 = [loading, commands, tmp7, frecencyItems, appItems];
  memo1 = obj2.useMemo(() => {
    const tmp = loading;
    if (tmp) {
      const items = [{ type: "placeholder" }];
      const items1 = [items];
      return items1;
    } else {
      const arr = commands;
      if (0 === commands.length) {
        const items2 = [{ type: "no_commands" }];
        const items3 = [items2];
        return items3;
      } else {
        const tmp2 = closure_7;
        if (tmp2) {
          const items4 = [arr.map((command) => ({ type: "command", command }))];
          return items4;
        } else {
          const items5 = [];
          if (frecencyItems.length > 0) {
            items5.push(tmp3);
          }
          if (appItems.length > 0) {
            items5.push(tmp5);
          }
          return items5;
        }
      }
    }
  }, items7);
  const insets = channel(tmp2[12])({ includeKeyboardHeight: true }).insets;
  const items8 = [memo1];
  const tmp18 = channel(tmp2[13])();
  const memo2 = obj2.useMemo(() => memo1.map((item) => item.length), items8);
  const tmp20 = onPressCommand();
  closure_18 = tmp20;
  c19 = "text-sm/semibold";
  const tmpResult = tmp(tmp2[14]);
  scaledTextLineHeight = tmpResult.useScaledTextLineHeight("text-sm/semibold");
  const items9 = [loading, commands.length, tmp7, frecencyItems.length, tmp20.sectionHeader];
  const items10 = [memo1, onPressCommand, callback1, sections];
  const callback2 = obj2.useCallback((arg0) => {
    const tmp = loading;
    if (!tmp) {
      if (0 !== commands.length) {
        const tmp19 = closure_7;
        if (!tmp19) {
          if (0 === arg0) {
            let stringResult;
            if (frecencyItems.length > 0) {
              const intl2 = intl3.intl;
              stringResult = intl2.string(intl3.t.V0w2ap);
            }
            const obj = { variant, color: "text-default", style: closure_18.sectionHeader, children: stringResult };
            return authStore(Text_Text.Text, obj);
          }
          const intl = intl3.intl;
          stringResult = intl.string(intl3.t.PHjkRE);
        }
      }
    }
    return null;
  }, items9);
  const items11 = [loading, commands.length, tmp7, scaledTextLineHeight, tmp20.sectionHeader.paddingTop, tmp20.sectionHeader.paddingBottom];
  const callback3 = obj2.useCallback((arg0, arg1) => {
    let closure_0 = tmp;
    const type = tmp.type;
    if ("placeholder" === type) {
      const obj2 = { start: 0 === arg1, end: arg1 === memo1[arg0].length - 1 };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandLoadingItem, obj2, "placeholder");
    } else if ("no_commands" === type) {
      const obj3 = { start: 0 === arg1, end: arg1 === memo1[arg0].length - 1 };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandEmptyItem, obj3, "no_commands");
    } else if ("command" === type) {
      const obj4 = {
        item: memo1[arg0][arg1].command,
        onPress() {
            return callback(closure_0.command);
          },
        section: sections[memo1[arg0][arg1].command.applicationId],
        start: 0 === arg1,
        end: arg1 === memo1[arg0].length - 1
      };
      return sectionDescriptors(channel(onPressAppCommand[17]), obj4, memo1[arg0][arg1].command.id);
    } else if ("app" === type) {
      const obj = {
        section: memo1[arg0][arg1].section,
        onPress() {
            return callback1(closure_0.section);
          },
        start: 0 === arg1,
        end: arg1 === memo1[arg0].length - 1
      };
      return sectionDescriptors(navigation(onPressAppCommand[17]).ContextMenuCommandAppItem, obj, memo1[arg0][arg1].section.id);
    }
  }, items10);
  let tmp29Result = tmp7;
  const memo3 = obj2.useMemo(() => {
    let num = 0;
    if (!loading) {
      num = 0;
      if (0 !== commands.length) {
        num = 0;
        if (!closure_7) {
          num = scaledTextLineHeight + closure_18.sectionHeader.paddingTop + closure_18.sectionHeader.paddingBottom;
        }
      }
    }
    return num;
  }, items11);
  const tmp25 = sections;
  const tmp26 = loading;
  if ("" === first) {
    let tmp28 = !loading;
    if (tmp28) {
      let num = 0;
      tmp28 = commands.length > 0;
    }
    tmp29Result = tmp28;
  }
  if (tmp29Result) {
    const items12 = [tmp20.content, ];
    let num2 = 0;
    const tmp30 = closure_6;
    if ("" !== first) {
      num2 = tmp17(tmp2[7]).space.PX_16;
    }
    const obj7 = { marginBottom: num2 };
    items12[1] = obj7;
    const obj6 = { style: items12, children: sectionDescriptors(SearchField, obj8) };
    obj8 = { size: "md", onChange: tmp6, placeholder: intl.string(tmp(tmp2[15]).t.m1UwbP) };
    SearchField = tmp(tmp2[18]).SearchField;
    intl = tmp(tmp2[15]).intl;
    tmp29Result = tmp29(tmp30, obj6);
  }
  const obj9 = { children: items13 };
  items13 = [tmp29Result, ];
  const obj10 = { sections: memo2, estimatedListSize: "windowSize", itemSize: tmp18, insetEnd: insets.bottom, renderItem: callback3, renderSectionHeader: callback2, sectionHeaderSize: memo3, style: tmp20.content };
  items13[1] = sectionDescriptors(channel(tmp2[19]), obj10);
  return tmp25(tmp26, obj9);
};
