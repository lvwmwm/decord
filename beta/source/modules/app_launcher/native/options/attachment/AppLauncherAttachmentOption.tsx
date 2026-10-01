// Module ID: 11657
// Function ID: 11658
// Name: AppLauncherAttachmentOption
// Dependencies: [19, 17, 5200, 5199, 21, 4836, 576, 9657, 9593, 1979, 11640, 504, 8608, 11658, 1115, 5440, 10807, 2]
// Exports: default

// Module 11657 (AppLauncherAttachmentOption)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 576 */;
import DraftStore from "DraftStore" /* 5200 */;
import AttachmentPreviewDefault from "AttachmentPreview" /* 9657 */;
import react from "react" /* 19 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 5199 */;
import createStyles_mod from "createStyles" /* 4836 */;
import size_mod from "module_2" /* 2 */;

let size;
let size1;
function AttachmentPreviewAppLauncher(arg0) {
  let height;
  let isImage;
  let isVideo;
  let uri;
  let width;
  ({ uri, isImage, isVideo } = arg0);
  const tmp = closure_8();
  ({ width, height } = tmp.selectedImage);
  AttachmentPreviewDefault;
  return <tmp2 uri={uri} isImage={isImage} isVideo={isVideo} width={width} height={height} style={tmp.selectedImage} defaultPreview={null} />;
}
const View = react_native.View;
const DraftType = DraftStore.DraftType;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { imageIconWrapper: size, selectedImage: size1 };
size = { justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, width: 32, height: 32, borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
size1 = { width: 32, height: 32, borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
size = size_mod;
const result = size.fileFinishedImporting("modules/app_launcher/native/options/attachment/AppLauncherAttachmentOption.tsx");

export default function AppLauncherAttachmentOption(option) {
  let autoFocus;
  let filename1;
  let formatResult;
  let hasError;
  let onPress;
  let style;
  option = option.option;
  const channel = option.channel;
  const onSelectAttachment = option.onSelectAttachment;
  let stateFromStores;
  let ref;
  ({ style, autoFocus, hasError, onPress } = option);
  const tmp = closure_8();
  let fileTypes;
  if (option.type === option(onSelectAttachment[9]).ApplicationCommandOptionType.ATTACHMENT) {
    fileTypes = option.fileTypes;
  }
  const tmp2Result = option(onSelectAttachment[10]);
  const fileTypesFormattedString = tmp2Result.useFileTypesFormattedString(fileTypes);
  const items = [UploadAttachmentStore];
  const tmp2Result2 = option(onSelectAttachment[11]);
  stateFromStores = tmp2Result2.useStateFromStores(items, () => UploadAttachmentStore.getUpload(channel.id, option.name, DraftType.ApplicationLauncherCommand));
  const items1 = [channel.id, option.name];
  const effect = stateFromStores.useEffect(() => {
    let id;
    let name;
    return () => {
      const obj = channel(onSelectAttachment[12]);
      return obj.remove(id.id, name.name, DraftType.ApplicationLauncherCommand);
    };
  }, items1);
  ref = stateFromStores.useRef(onSelectAttachment);
  const effect1 = stateFromStores.useEffect(() => {
    ref.current = onSelectAttachment;
  });
  let filename;
  const useEffect = stateFromStores.useEffect;
  if (stateFromStores != null) {
    filename = stateFromStores.filename;
  }
  const items2 = [filename];
  const effect2 = useEffect(() => {
    let filename;
    if (stateFromStores != null) {
      filename = tmp.filename;
    }
    if (null != filename) {
      const current = ref.current;
      if (current != null) {
        current(stateFromStores.filename);
      }
    }
  }, items2);
  let obj = { style, hasError, option, selected: null != stateFromStores, selectedItemName: filename1, unselectedSubLabel: formatResult, leading: null, onPress: null, autoFocus: null };
  filename1 = undefined;
  channel(onSelectAttachment[13]);
  if (null != stateFromStores) {
    filename1 = stateFromStores.filename;
  }
  formatResult = undefined;
  if (null != fileTypesFormattedString) {
    const intl = tmp2(tmp3[14]).intl;
    const obj2 = { types: fileTypesFormattedString };
    formatResult = intl.format(tmp2(tmp3[14]).t.NRRxmz, obj2);
  }
  if (null != stateFromStores) {
    let tmp12Result;
    if (stateFromStores.item.platform === option(onSelectAttachment[15]).UploadPlatform.REACT_NATIVE) {
      const obj3 = { uri: stateFromStores.item.uri, isImage: null, isVideo: null };
      ({ isImage: obj6.isImage, isVideo: obj6.isVideo } = stateFromStores);
      tmp12Result = tmp12(AttachmentPreviewAppLauncher, obj3);
    }
    obj.leading = tmp12Result;
    obj.onPress = onPress;
    obj.autoFocus = autoFocus;
    return <tmp13 {...obj} />;
  }
  const obj4 = { style: tmp.imageIconWrapper, children: jsx(option(onSelectAttachment[16]).ImageFileIcon, { size: "sm", color: "interactive-text-default" }) };
  tmp12Result = tmp12(ref, obj4);
};
