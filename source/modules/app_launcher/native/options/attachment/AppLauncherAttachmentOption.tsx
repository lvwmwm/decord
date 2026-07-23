// Module ID: 11298
// Function ID: 87903
// Name: AttachmentPreviewAppLauncher
// Dependencies: [31, 27, 4468, 4467, 33, 4130, 689, 9836, 10274, 1881, 11281, 566, 7938, 11299, 1212, 4665, 9826, 2]
// Exports: default

// Module 11298 (AttachmentPreviewAppLauncher)
import result from "result";
import { View } from "get ActivityIndicator";
import { DraftType } from "_isNativeReflectConstruct";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";
import { jsx } from "jsxProd";
import _createForOfIteratorHelperLoose from "_createForOfIteratorHelperLoose";

const require = arg1;
function AttachmentPreviewAppLauncher(arg0) {
  let height;
  let isImage;
  let isVideo;
  let uri;
  let width;
  ({ uri, isImage, isVideo } = arg0);
  const tmp = _createForOfIteratorHelperLoose();
  ({ width, height } = tmp.selectedImage);
  const obj = { uri, isImage, isVideo, width, height, style: tmp.selectedImage, defaultPreview: jsx(require(10274) /* FileIcon */.FileIcon, { size: "sm" }) };
  return jsx(importDefault(9836), { uri, isImage, isVideo, width, height, style: tmp.selectedImage, defaultPreview: jsx(require(10274) /* FileIcon */.FileIcon, { size: "sm" }) });
}
_createForOfIteratorHelperLoose = {};
_createForOfIteratorHelperLoose = { justifyContent: "center", alignItems: "center", backgroundColor: require("_createForOfIteratorHelperLoose").colors.BACKGROUND_MOD_SUBTLE, width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.lg };
_createForOfIteratorHelperLoose.imageIconWrapper = _createForOfIteratorHelperLoose;
let obj1 = { width: 32, height: 32, borderRadius: require("_createForOfIteratorHelperLoose").radii.sm };
_createForOfIteratorHelperLoose.selectedImage = obj1;
_createForOfIteratorHelperLoose = _createForOfIteratorHelperLoose.createStyles(_createForOfIteratorHelperLoose);
const result = require("_isNativeReflectConstruct").fileFinishedImporting("modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx");

export default function AppLauncherAttachmentOption(option) {
  let autoFocus;
  let hasError;
  let onPress;
  let style;
  option = option.option;
  const channel = option.channel;
  const onSelectAttachment = option.onSelectAttachment;
  let stateFromStores;
  let closure_4;
  ({ style, autoFocus, hasError, onPress } = option);
  let fileTypes;
  if (option.type === option(onSelectAttachment[9]).ApplicationCommandOptionType.ATTACHMENT) {
    fileTypes = option.fileTypes;
  }
  let obj = option(onSelectAttachment[10]);
  const fileTypesFormattedString = obj.useFileTypesFormattedString(fileTypes);
  let obj1 = option(onSelectAttachment[11]);
  const items = [_isNativeReflectConstruct];
  stateFromStores = obj1.useStateFromStores(items, () => outer1_6.getUpload(channel.id, option.name, outer1_5.ApplicationLauncherCommand));
  const items1 = [channel.id, option.name];
  const effect = stateFromStores.useEffect(() => () => channel(onSelectAttachment[12]).remove(outer1_1.id, outer1_0.name, outer2_5.ApplicationLauncherCommand), items1);
  closure_4 = stateFromStores.useRef(onSelectAttachment);
  const effect1 = stateFromStores.useEffect(() => {
    closure_4.current = onSelectAttachment;
  });
  let filename;
  if (null != stateFromStores) {
    filename = stateFromStores.filename;
  }
  const items2 = [filename];
  const effect2 = stateFromStores.useEffect(() => {
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
  const tmp = _createForOfIteratorHelperLoose();
  const tmp10 = jsx;
  if (null != stateFromStores) {
    filename1 = stateFromStores.filename;
  }
  obj.selectedItemName = filename1;
  let formatResult;
  if (null != fileTypesFormattedString) {
    const intl = option(onSelectAttachment[14]).intl;
    obj = { types: fileTypesFormattedString };
    formatResult = intl.format(option(onSelectAttachment[14]).t.NRRxmz, obj);
  }
  obj.unselectedSubLabel = formatResult;
  if (null != stateFromStores) {
    if (stateFromStores.item.platform === option(onSelectAttachment[15]).UploadPlatform.REACT_NATIVE) {
      obj1 = { uri: stateFromStores.item.uri };
      ({ isImage: obj6.isImage, isVideo: obj6.isVideo } = stateFromStores);
      let tmp18 = <AttachmentPreviewAppLauncher uri={stateFromStores.item.uri} />;
    }
    obj.leading = tmp18;
    obj.onPress = onPress;
    obj.autoFocus = autoFocus;
    return tmp10(tmp11, obj);
  }
  tmp11 = channel(onSelectAttachment[13]);
  tmp18 = <closure_4 style={tmp.imageIconWrapper}>{jsx(option(onSelectAttachment[16]).ImageFileIcon, { size: "sm", color: "interactive-text-default" })}</closure_4>;
};
