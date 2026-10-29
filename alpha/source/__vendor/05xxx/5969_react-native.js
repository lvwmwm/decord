// Module ID: 5969
// Function ID: 5970
// Name: react-native
// Dependencies: [17]
// Exports: parseAndroidIconToNativeProps

// Module 5969 (react-native)
import react_native from "react-native" /* 17 */;

const Image = react_native.Image;

export function parseAndroidIconToNativeProps(icon) {
  const tmp = icon;
  if (tmp) {
    if ("imageSource" === icon.type) {
      const assetSource = Image.resolveAssetSource(icon.imageSource);
      if (!assetSource) {
        const _console = console;
        console.error("[RNScreens] Failed to resolve an asset.");
      }
      const obj2 = { imageIconResource: tmp9 };
      return obj2;
    } else if ("drawableResource" === icon.type) {
      return { drawableIconResourceName: icon.name };
    } else {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("[RNScreens] Incorrect icon format for Android. You must provide `imageSource` or `drawableResource`.");
      throw error;
    }
  } else {
    return {};
  }
}
