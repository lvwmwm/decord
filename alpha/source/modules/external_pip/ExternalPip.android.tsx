// Module ID: 5824
// Function ID: 5825
// Name: ExternalPip
// Dependencies: [5825, 5826, 2]

// Module 5824 (ExternalPip)
import getExternalPipTileNativeId from "getExternalPipTileNativeId" /* 5826 */;
import react_native from "react-native" /* 5825 */;
import size_mod from "module_2" /* 2 */;

const isSupported = react_native.getConstants().isSupported;
class ExternalPip {
  constructor() {
    return Object.assign({ _enabled: false, _isInPipMode: false });
  }
  addOnPipModeChangedListener(callback2) {
    const self = this;
    let closure_0 = callback2;
    const obj = react_native;
    return obj.onPipModeChanged((_isInPipMode) => {
      self._isInPipMode = _isInPipMode;
      closure_0(_isInPipMode);
    });
  }
  addOnPipModeWillChangeListener(arg0) {
    const obj = react_native;
    return obj.onPipModeWillChange(arg0);
  }
  setSelectedTile(nativeId) {
    let num;
    let num2;
    let surface;
    if (nativeId != null) {
      surface = nativeId.surface;
    }
    let externalPipTileNativeId = null;
    if (null != surface) {
      const obj = getExternalPipTileNativeId;
      externalPipTileNativeId = obj.getExternalPipTileNativeId(nativeId.surface, nativeId.id);
    }
    size = { nativeId: externalPipTileNativeId, width: num, height: num2 };
    num = undefined;
    if (nativeId != null) {
      const pipDimensions = nativeId.pipDimensions;
      if (pipDimensions != null) {
        num = pipDimensions.width;
      }
    }
    if (num == null) {
      num = 0;
    }
    num2 = undefined;
    if (nativeId != null) {
      const pipDimensions2 = nativeId.pipDimensions;
      if (pipDimensions2 != null) {
        num2 = pipDimensions2.height;
      }
    }
    if (num2 == null) {
      num2 = 0;
    }
    const self = this;
    let tmp5 = null != this._selectedTile;
    if (tmp5) {
      const _selectedTile = self._selectedTile;
      tmp5 = _selectedTile.nativeId === size.nativeId && _selectedTile.width === size.width && _selectedTile.height === size.height;
    }
    if (!tmp5) {
      self._selectedTile = size;
      const obj2 = react_native;
      obj2.setSelectedTile(size.nativeId, size.width, size.height);
    }
  }
  setFocusedStream() {

  }
  setMirrored() {

  }
  refreshPipUi() {
    const obj = react_native;
    obj.refreshPipUi();
  }
  setPipContentReady() {
    const obj = react_native;
    obj.setPipContentReady();
  }
  updateSourceTrackingView() {

  }
  setEnabled(_enabled) {
    this._enabled = _enabled;
    const obj = react_native;
    obj.setEnabled(this._enabled);
  }
  setAutoEnterEnabled(arg0) {
    const obj = react_native;
    obj.setAutoEnterEnabled(arg0);
  }
  setActive(arg0) {
    const obj = react_native;
    return obj.setActive(arg0);
  }
  isEnabled() {
    return this._enabled;
  }
  isSupported() {
    return isSupported;
  }
  isInPipMode() {
    return this._isInPipMode;
  }
}
const prototype = ExternalPip.prototype;
const prototype2 = ExternalPip.prototype;
let size = size_mod;
const result = size.fileFinishedImporting("modules/external_pip/ExternalPip.android.tsx");

export default Object.assign({ _enabled: false, _isInPipMode: false });
