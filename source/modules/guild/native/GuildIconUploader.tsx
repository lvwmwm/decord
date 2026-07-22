// Module ID: 10059
// Function ID: 77702
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 10059 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_3 = importDefault(dependencyMap[0]);
let closure_4 = importDefault(dependencyMap[1]);
let closure_5 = importDefault(dependencyMap[2]);
let closure_6 = importDefault(dependencyMap[3]);
let closure_7 = importDefault(dependencyMap[4]);
const importAllResult = importAll(dependencyMap[5]);
({ View: closure_8, Image: closure_9 } = arg1(dependencyMap[6]));
let closure_10 = importDefault(dependencyMap[7]);
const tmp3 = arg1(dependencyMap[6]);
({ jsx: closure_11, jsxs: closure_12 } = arg1(dependencyMap[8]));
let obj = arg1(dependencyMap[9]);
obj = { container: { unicodeVersion: null, y: null, isArray: null } };
obj = { backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_SURFACE_HIGH };
obj.guildPlaceholder = obj;
obj.guildIcon = {};
obj.iconWrapperBorder = {};
const obj1 = { 1637466961: true, -512601725: true, -766065311: true, 1486058615: true, 1023272163: true, borderRadius: importDefault(dependencyMap[10]).radii.lg, backgroundColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_TEXT_ACTIVE };
obj.filledIconWrapper = obj1;
const tmp4 = arg1(dependencyMap[8]);
obj.emptyIconWrapper = { borderRadius: importDefault(dependencyMap[10]).radii.lg, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
const obj2 = { borderRadius: importDefault(dependencyMap[10]).radii.lg, backgroundColor: importDefault(dependencyMap[10]).colors.BACKGROUND_BRAND };
obj.emptyGuildIcon = { borderColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_TEXT_DEFAULT };
obj.emptyGuildIconText = {};
obj.uploadIcon = { hideWhenScrolling: null, autoCapitalize: null };
let closure_13 = obj.createLegacyClassComponentStyles(obj);
const tmp5 = (PureComponent) => {
  class GuildIconUploader {
    constructor() {
      self = this;
      tmp = closure_3(this, GuildIconUploader);
      obj = closure_6(GuildIconUploader);
      tmp2 = closure_5;
      if (closure_14()) {
        tmp6 = globalThis;
        _Reflect = Reflect;
        tmp7 = closure_6;
        tmp8 = arguments;
        constructResult = Reflect.construct(obj, arguments, closure_6(self).constructor);
      } else {
        tmp3 = arguments;
        tmp4 = arguments;
        constructResult = obj(...arguments);
      }
      return tmp2(self, constructResult);
    }
  }
  const arg1 = GuildIconUploader;
  callback2(GuildIconUploader, PureComponent);
  let obj = {
    key: "renderIcon",
    value() {
      const tmp = callback6(this.context);
      const icon = this.props.icon;
      if (null != icon) {
        let obj = {};
        const items = [, ];
        ({ guildIcon: arr2[0], guildPlaceholder: arr2[1] } = tmp);
        obj.style = items;
        obj = { uri: icon };
        obj.source = obj;
        let tmp9Result = callback4(closure_9, obj);
      } else {
        const obj1 = {};
        const items1 = [, ];
        ({ guildIcon: arr3[0], emptyGuildIcon: arr3[1] } = tmp);
        obj1.style = items1;
        const obj2 = {};
        if (obj6.isThemeDark(theme.theme)) {
          let tmp16Result = tmp16(tmp17[12]);
        } else {
          tmp16Result = tmp16(tmp17[13]);
        }
        obj2.source = tmp16Result;
        const items2 = [callback4(closure_9, obj2), ];
        obj = { "Null": true, "Null": true, alignItems: true, style: tmp.emptyGuildIconText };
        const intl = GuildIconUploader(closure_2[15]).intl;
        const obj6 = GuildIconUploader(closure_2[11]);
        const tmp10 = closure_8;
        const tmp11 = callback4;
        const tmp12 = closure_9;
        const tmp9 = closure_12;
        obj.children = intl.string(GuildIconUploader(closure_2[15]).t.3UB9ad).toUpperCase();
        items2[1] = callback4(GuildIconUploader(closure_2[14]).Text, obj);
        obj1.children = items2;
        tmp9Result = tmp9(tmp10, obj1);
        const str = intl.string(GuildIconUploader(closure_2[15]).t.3UB9ad);
      }
      return tmp9Result;
    }
  };
  const items = [obj, , ];
  obj = {
    key: "renderUpload",
    value() {
      const tmp = callback6(this.context);
      const props = this.props;
      const iconBackgroundColor = props.iconBackgroundColor;
      if (null != props.icon) {
        let obj = {};
        const items = [tmp.iconWrapperBorder, ];
        obj = { backgroundColor: iconBackgroundColor };
        items[1] = obj;
        obj.style = items;
        const obj1 = { style: tmp.filledIconWrapper };
        const obj2 = {};
        const items1 = [tmp.uploadIcon, ];
        const obj3 = { tintColor: iconBackgroundColor };
        items1[1] = obj3;
        obj2.style = items1;
        obj2.source = callback(closure_2[16]);
        obj1.children = callback4(closure_9, obj2);
        obj.children = callback4(closure_8, obj1);
      } else {
        obj = { style: tmp.emptyIconWrapper };
        const obj4 = { source: callback(closure_2[17]) };
        obj.children = callback4(closure_9, obj4);
      }
      return callback4(closure_8, obj);
    }
  };
  items[1] = obj;
  obj = {
    key: "render",
    value() {
      let icon;
      let onPress;
      let style;
      const self = this;
      const tmp = callback6(this.context);
      ({ style, onPress, icon } = this.props);
      let obj = { accessibilityRole: "button" };
      if (null != icon) {
        const intl2 = GuildIconUploader(closure_2[15]).intl;
        let stringResult = intl2.string(GuildIconUploader(closure_2[15]).t.VATxfe);
      } else {
        const intl = GuildIconUploader(closure_2[15]).intl;
        stringResult = intl.string(GuildIconUploader(closure_2[15]).t.MsUY/S);
      }
      obj.accessibilityLabel = stringResult;
      obj.onPress = onPress;
      obj = { style: items };
      const items = [tmp.container, style];
      obj = { style: tmp.guildIcon, children: self.renderIcon() };
      const items1 = [callback4(closure_8, obj), self.renderUpload()];
      obj.children = items1;
      obj.children = callback5(closure_8, obj);
      return callback4(GuildIconUploader(closure_2[18]).PressableOpacity, obj);
    }
  };
  items[2] = obj;
  return callback(GuildIconUploader, items);
}(importAllResult.PureComponent);
tmp5.contextType = arg1(dependencyMap[19]).ThemeContext;
const obj3 = { borderColor: importDefault(dependencyMap[10]).colors.INTERACTIVE_TEXT_DEFAULT };
const result = arg1(dependencyMap[20]).fileFinishedImporting("modules/guild/native/GuildIconUploader.tsx");

export default tmp5;
