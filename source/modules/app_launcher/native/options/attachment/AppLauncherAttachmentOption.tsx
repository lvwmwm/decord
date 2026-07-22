// Module ID: 11288
// Function ID: 87853
// Name: AttachmentPreviewAppLauncher
// Dependencies: []
// Exports: default

// Module 11288 (AttachmentPreviewAppLauncher)
function AttachmentPreviewAppLauncher(arg0) {
  let height;
  let isImage;
  let isVideo;
  let uri;
  let width;
  ({ uri, isImage, isVideo } = arg0);
  const tmp = callback();
  ({ width, height } = tmp.selectedImage);
  const obj = { uri, isImage, isVideo, width, height, style: tmp.selectedImage, defaultPreview: jsx(arg1(dependencyMap[8]).FileIcon, { size: "sm" }) };
  return jsx(importDefault(dependencyMap[7]), obj);
}
let closure_3 = importAll(dependencyMap[0]);
const View = arg1(dependencyMap[1]).View;
const DraftType = arg1(dependencyMap[2]).DraftType;
let closure_6 = importDefault(dependencyMap[3]);
const jsx = arg1(dependencyMap[4]).jsx;
let obj = arg1(dependencyMap[5]);
obj = {};
obj = { "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, "Bool(false)": true, backgroundColor: importDefault(dependencyMap[6]).colors.BACKGROUND_MOD_SUBTLE, borderRadius: importDefault(dependencyMap[6]).radii.lg };
obj.imageIconWrapper = obj;
const obj1 = { "Null": true, "Null": true, borderRadius: importDefault(dependencyMap[6]).radii.sm };
obj.selectedImage = obj1;
let closure_8 = obj.createStyles(obj);
const result = arg1(dependencyMap[17]).fileFinishedImporting("modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx");

export default function AppLauncherAttachmentOption(option) {
  let autoFocus;
  let hasError;
  let onPress;
  let style;
  option = option.option;
  const arg1 = option;
  const channel = option.channel;
  const importDefault = channel;
  const onSelectAttachment = option.onSelectAttachment;
  const dependencyMap = onSelectAttachment;
  let React;
  let closure_4;
  ({ style, autoFocus, hasError, onPress } = option);
  let fileTypes;
  if (option.type === arg1(dependencyMap[9]).ApplicationCommandOptionType.ATTACHMENT) {
    fileTypes = option.fileTypes;
  }
  let obj = arg1(dependencyMap[10]);
  const fileTypesFormattedString = obj.useFileTypesFormattedString(fileTypes);
  let obj1 = arg1(dependencyMap[11]);
  const items = [closure_6];
  const stateFromStores = obj1.useStateFromStores(items, () => upload.getUpload(channel.id, option.name, obj.ApplicationLauncherCommand));
  React = stateFromStores;
  const items1 = [channel.id, option.name];
  const effect = React.useEffect(() => () => {
    const obj = lib(closure_2[12]);
    return obj.remove(lib.id, name.name, obj.ApplicationLauncherCommand);
  }, items1);
  closure_4 = React.useRef(onSelectAttachment);
  const effect1 = React.useEffect(() => {
    closure_4.current = onSelectAttachment;
  });
  let filename;
  if (null != stateFromStores) {
    filename = stateFromStores.filename;
  }
  const items2 = [filename];
  const effect2 = React.useEffect(() => {
    let filename;
    if (null != stateFromStores) {
      filename = stateFromStores.filename;
    }
    if (null != filename) {
      if (null != ref.current) {
        ref.current(stateFromStores.filename);
      }
    }
  }, items2);
  obj = { style, hasError, option, selected: null != stateFromStores };
  let filename1;
  const tmp = callback();
  const tmp10 = jsx;
  if (null != stateFromStores) {
    filename1 = stateFromStores.filename;
  }
  obj.selectedItemName = filename1;
  let formatResult;
  if (null != fileTypesFormattedString) {
    const intl = arg1(dependencyMap[14]).intl;
    obj = { types: fileTypesFormattedString };
    formatResult = intl.format(arg1(dependencyMap[14]).t.NRRxmz, obj);
  }
  obj.unselectedSubLabel = formatResult;
  if (null != stateFromStores) {
    if (stateFromStores.item.platform === arg1(dependencyMap[15]).UploadPlatform.REACT_NATIVE) {
      obj1 = { uri: stateFromStores.item.uri };
      ({ isImage: obj6.isImage, isVideo: obj6.isVideo } = stateFromStores);
      let tmp18 = <AttachmentPreviewAppLauncher {...obj1} />;
    }
    obj.leading = tmp18;
    obj.onPress = onPress;
    obj.autoFocus = autoFocus;
    return tmp10(tmp11, obj);
  }
  const tmp11 = importDefault(dependencyMap[13]);
  tmp18 = <closure_4 style={tmp.imageIconWrapper}>{jsx(arg1(dependencyMap[16]).ImageFileIcon, {})}</closure_4>;
};
